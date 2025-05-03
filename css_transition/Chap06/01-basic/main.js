import "./scroll-timeline.js";

const progress = document.querySelector(".progress");
const scrollBox = document.querySelector(".scroll-box");

const keyframes = [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }];
const options = {
  timeline: new ScrollTimeline({
    scrollOffsets: [
      //   { target: scrollBox, edge: "start", threshold: 1 },
      //   {
      //     target: scrollBox,
      //     edge: "end",
      //     threshold: 1,
      //   },
      { target: document.body, edge: "start", threshold: 1 },
      {
        target: document.body,
        edge: "end",
        threshold: 1,
      },
    ],
  }),
};
progress.animate(keyframes, options);
