import add from './add.js';
import subtract from './subtract.js';
import divide from './divide.js';
import multiply from './multiply.js';

if (process.argv[3] === 'plus') {
  console.log('result:', add(Number(process.argv[2]), Number(process.argv[4])));
}

if (process.argv[3] === 'minus') {
  console.log(
    'result:',
    subtract(Number(process.argv[2]), Number(process.argv[4]))
  );
}

if (process.argv[3] === 'times') {
  console.log(
    'result:',
    multiply(Number(process.argv[2]), Number(process.argv[4]))
  );
}

if (process.argv[3] === 'over') {
  console.log(
    'result:',
    divide(Number(process.argv[2]), Number(process.argv[4]))
  );
}
