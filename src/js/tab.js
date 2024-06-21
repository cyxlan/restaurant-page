function createEl(tagName, textContent, classes) {
  const el = document.createElement(tagName);
  el.textContent = textContent;
  if (classes) {
    el.classList.add(classes);
  }
  return el;
}

export { createEl }