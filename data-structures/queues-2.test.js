import Queue from './lib/queue';
import { postpone, takeValueAtIndex } from './queues-2';

describe('postpone', () => {
  it('does nothing when empty', () => {
    const queue = new Queue();
    expect(() => postpone(queue)).not.toThrow();
    expect(queue.peek()).toBeUndefined();
  });

  it('moves the front value to the back', () => {
    const queue1 = new Queue(13);
    postpone(queue1);
    expect(queue1.print()).toEqual('Queue { 13 }');
    const queue2 = new Queue(9, 53, 8);
    postpone(queue2);
    expect(queue2.print()).toEqual('Queue { 53 <- 8 <- 9 }');
    const queue3 = new Queue(null, false, '', 0, 'wat');
    postpone(queue3);
    postpone(queue3);
    postpone(queue3);
    postpone(queue3);
    expect(queue3.print()).toEqual(
      'Queue { "wat" <- null <- false <- "" <- 0 }'
    );
  });
});

describe('takeValueAtIndex', () => {
  it('returns undefined when empty', () => {
    const queue = new Queue();
    expect(takeValueAtIndex(queue, 0)).toBeUndefined();
    expect(takeValueAtIndex(queue, 31)).toBeUndefined();
  });

  it('removes and returns the front value after cycling index values to the back', () => {
    const queue1 = new Queue(84);
    expect(takeValueAtIndex(queue1, 6)).toEqual(84);
    expect(queue1.print()).toEqual('Queue { <empty> }');
    const queue2 = new Queue(37, 45, 67, 0, 71, 3);
    expect(takeValueAtIndex(queue2, 3)).toEqual(0);
    expect(queue2.print()).toEqual('Queue { 71 <- 3 <- 37 <- 45 <- 67 }');
    const queue3 = new Queue('foo', 'bar', 'baz', 'qux');
    expect(takeValueAtIndex(queue3, 3)).toEqual('qux');
    expect(queue3.print()).toEqual('Queue { "foo" <- "bar" <- "baz" }');
  });
});
