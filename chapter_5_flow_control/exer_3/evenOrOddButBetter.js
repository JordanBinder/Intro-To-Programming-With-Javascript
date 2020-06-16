

function evenOrOdd(param) {
  if (!Number.isInteger(param)) {
    console.log('Please enter an integer.');
    return;
  }

  if (param % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

console.log(evenOrOdd('Schoolboy Q'));