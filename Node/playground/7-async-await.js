const add = (a, b, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('Numbers must be non-negative');
      }

      resolve(a + b);
      console.log(`${time / 1000} byou keika!... Wryyyy!!!!`);
    }, time);
  });
}

const doWork = async() => {
  const sum = await add(1, 99, 2000);
  const sum2 = await add(sum, 50, 3000);
  const sum3 = await add(sum2, 3, 4000);
  return sum3;
}

doWork().then((result) => {
  console.log('Result:', result);
}).catch((e) => {
  console.log('Error:', e);
});