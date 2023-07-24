export function getTop(stack) {
  return stack.peek();
}

export function addToTop(stack, value) {
  return stack.push(value);
}

export function takeTop(stack) {
  return stack.pop();
}

export function isEmpty(stack) {
  return stack.peek() === undefined;
}
