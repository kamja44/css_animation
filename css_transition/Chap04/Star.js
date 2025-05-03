export default class Star {
  constructor(number, x, y, scale) {
    const element = document.createElement("div");
    element.classList.add("star");
    element.innerHTML = number;

    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.style.transform = `scale(${scale})`;
    document.body.append(element);
  }
}
