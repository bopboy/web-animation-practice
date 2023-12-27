const hellpJeju = document.querySelector(".hello-jeju");
const ariplaneScrollTimeline = document.querySelector(
  ".airplane-scroll-timeline"
);
hellpJeju.animate(
  [
    { opacity: 0, transform: "scale(0.5)", offset: 0 },
    { opacity: 0, transform: "scale(0.5)", offset: 0.17 },
    { opacity: 1, transform: "scale(1.2)", offset: 0.2 },
    { transform: "scale(1)", offset: 0.3 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: ariplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: ariplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);
