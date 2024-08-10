const showElement = (el, clas) => el.classList.add(toString(clas));
const hideElement = (el, clas) => el.classList.remove(toString(clas));

export { showElement, hideElement };
