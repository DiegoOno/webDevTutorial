const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([2, 3, 5]);
    reject('Things went wrong!');
  }, 2000);
});

doWorkPromise.then((result) => {
  console.log('Sucess!', result);
}).catch((error) => {
  console.log('Error!', error);
});

//
//                                fulfilled
//                               /
// Promise      -- pending -->
//                               \
//                                rejected
//
//