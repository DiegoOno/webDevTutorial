const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};


// Bad promises chaining

// add(1, 2).then((sum) => {
//   console.log(sum);

//   add(sum, 2).then((sum2) => {
//     console.log(sum2);
//   }).catch((e) => {
//     console.log(e);
//   });
// }).catch((e) => {
//   console.log(e);
// });

// Good chaining
add(1, 1).then((sum) => {
  console.log(sum);
  return add(sum, 4)
}).then((sum2) => {
  console.log(sum2);
}).catch((e) => {
  console.log(e);
});