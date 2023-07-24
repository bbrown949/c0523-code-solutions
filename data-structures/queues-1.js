export function getFront(queue) {
  if (queue.peek() === undefined) return undefined;
  return queue.peek();
}

export function addToBack(queue, value) {
  queue.enqueue(value);
}

export function takeFront(queue) {
  if (queue.peek() === undefined) return undefined;
  return queue.dequeue();
}

export function isEmpty(queue) {
  if (queue.peek() === undefined) return true;
  return false;
}
