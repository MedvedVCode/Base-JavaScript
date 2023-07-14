const task = (num) => {
  console.log(`\n\n------Task ${num}------`);
}

task(1)
const arr = [1, 5, 7, 9];
console.log(`Min в массиве ${arr} = ${Math.min(...arr)}`);

task(2)
const createCounter = () => {
  let counter = 0;
  return {
    increment: () => ++counter,
    decrement: () => --counter
  }
}

const itemInc = createCounter();
const itemDec = createCounter();
console.log(itemInc);
console.log(itemInc.increment());
console.log(itemInc.increment());
console.log(itemInc.increment());
console.log(itemInc.decrement());
console.log(itemDec);
console.log(itemDec.decrement());
console.log(itemDec.decrement());
console.log(itemDec.decrement());
console.log(itemDec.increment());

task(3)
function findElementByClass(element, searchClass) {
  if (element.className === searchClass) {
    return element;
  }
  for (let i = 0; i < element.children.length; i++) {
    const child = element.children[i];
    const foundElement = findElementByClass(child, searchClass);
    if (foundElement !== null && foundElement.className==searchClass) {
      return foundElement;
    }
  }
  return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);