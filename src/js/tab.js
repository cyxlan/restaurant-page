function createEl(tagName, textContent, classes) {
  const el = document.createElement(tagName);
  el.textContent = textContent;
  el.classList.add(classes);
  return el;
}

export { createEl }