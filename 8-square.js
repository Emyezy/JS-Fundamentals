const arg = process.argv[2];
const size = parseInt(arg);

if (isNaN(size) || size <= 0) {
  console.log('Missing size');
} else {
  let row = 0;
  while (row < size) {
    console.log('X'.repeat(size));
    row++;
  }
}
