const arg = process.argv[2];
const times = parseInt(arg);

if (isNaN(times) || times <= 0) {
  // Do nothing, print nothing
} else {
  let i = 0;
  while (i < times) {
    console.log('C is fun');
    i++;
  }
}
