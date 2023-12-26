import "./scroll-timeline.js";

const progress = document.querySelector(".progress");
const scrollBox = document.querySelector(".scroll-box");
const targetImages = document.querySelectorAll(".target-image");
const keyframes = [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }];
const options = {
  timeline: new ScrollTimeline({
    // scrollOffsets: [{ target: scrollBox, edge: "start", threshold: 1 }],
    // scrollOffsets: [{ target: scrollBox, edge: "end", threshold: 1 }],
    scrollOffsets: [{ target: document.body, edge: "start", threshold: 1 }],
    scrollOffsets: [{ target: document.body, edge: "end", threshold: 1 }],
  }),
};
progress.animate(keyframes, options);
targetImages.forEach((image) => {
  const imageTop = image.offsetTop;
  const imageHeight = image.offsetHeight;
  const offset1 = imageTop + imageHeight - window.innerHeight;
  const offset2 = imageTop - 200;
  image.animate([{ opacity: 0 }, { opacity: 1 }], {
    timeline: new ScrollTimeline({
      scrollOffsets: [
        new CSSUnitValue(offset1, "px"),
        new CSSUnitValue(offset2, "px"),
      ],
    }),
  });
});
