import "./scroll-timeline.js";
import "./hello.js";
import "./gallery.js";
import "./track.js";
import "./airplane.js";

document.body.animate(
  [
    { backgroundColor: "midnightblue" },
    { backgroundColor: "dodgerblue" },
    { backgroundColor: "coral" },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: document.body, edge: "start", threshold: 1 },
        { target: document.body, edge: "end", threshold: 1 },
      ],
    }),
  }
);
