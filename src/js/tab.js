function createEl(tagName, content, classes) {
  const el = document.createElement(tagName);
  if (tagName === "img") {
    el.src = content;
  } else {
    el.textContent = content;
  }
  if (classes) {
    el.classList.add(...classes);
  }
  return el;
}

export { createEl }