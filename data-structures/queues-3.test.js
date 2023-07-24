import Queue from './lib/queue';
import { take2nd, takeNextSmallest, takeSmaller } from './queues-3';

describe('take2nd', () => {
  it('returns undefined when empty', () => {
    const queue = new Queue();
    expect(take2nd(queue)).toBeUndefined();
  });

  it('returns the value when one value', () => {
    const queue1 = new Queue(72);
    expect(take2nd(queue1)).toEqual(72);
    const queue2 = new Queue(null);
    expect(take2nd(queue2)).toBeNull();
  });

  it('returns the 2nd value when at least two values', () => {
    const queue1 = new Queue(48, 67);
    expect(take2nd(queue1)).toEqual(67);
    const queue2 = new Queue(26, 59, 35);
    expect(take2nd(queue2)).toEqual(59);
  });

  it('moves the front value to the back and removes the 2nd value', () => {
    const queue = new Queue(false, '', null, 'hi');
    take2nd(queue);
    expect(queue.print()).toEqual('Queue { null <- "hi" <- false }');
  });
});

describe('takeSmaller', () => {
  it('returns undefined when empty', () => {
    const queue = new Queue();
    expect(takeSmaller(queue)).toEqual(undefined);
  });

  describe('when queue contains one value', () => {
    it('returns the value', () => {
      const queue1 = new Queue(89);
      expect(takeSmaller(queue1)).toEqual(89);
      const queue2 = new Queue(0);
      expect(takeSmaller(queue2)).toEqual(0);
    });

    it('removes the value', () => {
      const queue1 = new Queue(12);
      takeSmaller(queue1);
      expect(queue1.peek()).toBeUndefined();
      const queue2 = new Queue(0);
      takeSmaller(queue2);
      expect(queue2.peek()).toBeUndefined();
    });
  });

  describe('when queue contains at least two values', () => {
    describe('and the first value is smaller than the second', () => {
      it('returns the first value', () => {
        const queue1 = new Queue(48, 67);
        expect(takeSmaller(queue1)).toEqual(48);
        const queue2 = new Queue(-89, 0, 35);
        expect(takeSmaller(queue2)).toEqual(-89);
      });

      it('removes the first value and moves the second value to the back', () => {
        const queue1 = new Queue(41, 189);
        takeSmaller(queue1);
        expect(queue1.print()).toEqual('Queue { 189 }');
        const queue2 = new Queue(0, 1, 4, 18);
        takeSmaller(queue2);
        expect(queue2.print()).toEqual('Queue { 4 <- 18 <- 1 }');
      });
    });

    describe('and the first value is equal to the second', () => {
      it('returns the value', () => {
        const queue1 = new Queue(8, 8);
        expect(takeSmaller(queue1)).toEqual(8);
        const queue2 = new Queue(0, 0, 0);
        expect(takeSmaller(queue2)).toEqual(0);
      });

      it('removes one value and moves one value to the back', () => {
        const queue1 = new Queue(9, 9);
        takeSmaller(queue1);
        expect(queue1.print()).toEqual('Queue { 9 }');
        const queue2 = new Queue(73, 73, 3, 9);
        takeSmaller(queue2);
        expect(queue2.print()).toEqual('Queue { 3 <- 9 <- 73 }');
      });
    });

    describe('and the first value is larger than the second', () => {
      it('returns the second value', () => {
        const queue1 = new Queue(52, 12);
        expect(takeSmaller(queue1)).toEqual(12);
        const queue2 = new Queue(23, 0, 9);
        expect(takeSmaller(queue2)).toEqual(0);
      });

      it('moves the first value to the back and removes the second value', () => {
        const queue1 = new Queue(19, -2);
        takeSmaller(queue1);
        expect(queue1.print()).toEqual('Queue { 19 }');
        const queue2 = new Queue(5, 4, 3, 2);
        takeSmaller(queue2);
        expect(queue2.print()).toEqual('Queue { 3 <- 2 <- 5 }');
      });
    });
  });
});

describe('takeNextSmallest', () => {
  it('returns undefined when empty', () => {
    const queue = new Queue();
    expect(takeNextSmallest(queue)).toBeUndefined();
  });

  describe('when queue has one value', () => {
    it('returns the value', () => {
      const queue1 = new Queue(89);
      expect(takeNextSmallest(queue1)).toEqual(89);
      const queue2 = new Queue(0);
      expect(takeNextSmallest(queue2)).toEqual(0);
    });

    it('removes the value', () => {
      const queue = new Queue(12);
      takeNextSmallest(queue);
      expect(queue.print()).toEqual('Queue { <empty> }');
      queue.enqueue(0);
      takeNextSmallest(queue);
      expect(queue.print()).toEqual('Queue { <empty> }');
    });
  });

  describe('when queue has at least two numbers', () => {
    it('returns the first number <= its successor', () => {
      const queue1 = new Queue(13, 64, -19, 94);
      expect(takeNextSmallest(queue1)).toEqual(13);
      const queue2 = new Queue(54, 36, 34, 0, -18, -37, -36, 63);
      expect(takeNextSmallest(queue2)).toEqual(-37);
    });

    it('moves each number > its successor to the back until it finds one that is not and removes it', () => {
      const queue1 = new Queue(51, 63, 35, 41);
      takeNextSmallest(queue1);
      expect(queue1.print()).toEqual('Queue { 63 <- 35 <- 41 }');

      const queue2 = new Queue(
        88,
        78,
        63,
        101,
        170,
        325,
        180,
        102,
        80,
        60,
        53,
        49
      );
      takeNextSmallest(queue2);
      takeNextSmallest(queue2);
      takeNextSmallest(queue2);
      expect(queue2.print()).toEqual(
        'Queue { 325 <- 180 <- 102 <- 80 <- 60 <- 53 <- 49 <- 88 <- 78 }'
      );
    });
  });
});
