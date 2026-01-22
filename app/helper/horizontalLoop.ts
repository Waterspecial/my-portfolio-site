import gsap from "gsap";

interface HorizontalLoopConfig {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  snap?: number | false;
  paddingRight?: number;
}

export function horizontalLoop(
  items: gsap.DOMTarget,
  config: HorizontalLoopConfig = {}
): gsap.core.Timeline {
  const elements = gsap.utils.toArray<HTMLElement>(items);

  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100);
    },
  });

  const length = elements.length;
  const startX = elements[0].offsetLeft;

  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];

  const pixelsPerSecond = (config.speed ?? 1) * 100;

  const snap =
    config.snap === false
      ? (v: number) => v
      : gsap.utils.snap(config.snap ?? 1);

  gsap.set(elements, {
    xPercent: (i: number, el: HTMLElement) => {
      const w = (widths[i] = parseFloat(
        gsap.getProperty(el, "width", "px") as string
      ));

      const x =
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) *
          100 +
        (gsap.getProperty(el, "xPercent") as number);

      xPercents[i] = snap(x);
      return xPercents[i];
    },
  });

  gsap.set(elements, { x: 0 });

  const totalWidth =
    elements[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    elements[length - 1].offsetWidth *
      (gsap.getProperty(elements[length - 1], "scaleX") as number) +
    (config.paddingRight ?? 0);

  for (let i = 0; i < length; i++) {
    const item = elements[i];
    const curX = (xPercents[i] / 100) * widths[i];

    const distanceToStart = item.offsetLeft + curX - startX;
    const distanceToLoop =
      distanceToStart +
      widths[i] * (gsap.getProperty(item, "scaleX") as number);

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (totalWidth - distanceToLoop) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add(`label${i}`, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  }

  tl.progress(1, true).progress(0, true);
  return tl;
}
