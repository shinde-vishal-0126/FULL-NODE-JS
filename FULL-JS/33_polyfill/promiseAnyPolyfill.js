/*
# promise.any
1. promise.any polyfill are used to  myPromise.any resolves as soon as any one promise in the input array resolves.
2. i.e promise is may resolve or rejected it return as soon as promise are settled .
If all promises reject, it rejects with an AggregateError containing all the rejection reasons.



 # What is Promise.any?
    1. Promise.any(iterable) takes an array of promises.
# It returns a single promise that:
1. resolves as soon as any one promise fulfills.
2. rejects only if all promises reject, with an AggregateError.
*/

function myPromise(executer) {
  let onResolve,
    onReject,
    isFulField = false,
    isRejected = false,
    isCalled = false,
    value,
    error,
    isFinally;

  this.then = function (cb) {
    onResolve = cb;
    if (isFulField && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  this.catch = function (cb) {
    onReject = cb;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(error);
    }

    return this;
  };

  function resolve(val) {
    if (typeof onResolve === "function" && !isCalled) {
      isCalled = true;
      onReject(val);
    } else {
      value = val;
      isFulField = true;
    }
  }

  function reject(err){
    if(typeof onReject === 'function' && !isCalled){
        isCalled =true
        onReject(err)
    }else{
        error = err;
        isRejected = true
    }
  }

  try {
    executer(resolve, reject)
  } catch (error) {
    console.log(error); 
  }

}


myPromise.myAny = function(promises){
    return new myPromise((resolve, reject)=>{
        let arr = [];
        let compleatPromise = 0;
        promises.forEach((promise, index)=>{
            promise.then((result)=>{
                resolve(result)
            }).catch((error)=>{
                arr.push(error);
                compleatPromise++;
                if(compleatPromise === promises.length){
                   reject(new AggregateError(arr, 'all promise were rejected.'))
                }
            })
        })
    })
}


p1 = new myPromise((resolved, reject) => {
    setTimeout(() => {
  resolved("success");
    }, 1000);
});

p2 = new myPromise((resolved, reject) => {
    setTimeout(() => {
  resolved("success1");
    }, 2000);
});

p3 = new myPromise((resolved, reject) => {
    setTimeout(() => {
  reject("failed to load....");
    }, 5000);
});

p4 = new myPromise((resolved, reject) => {
    setTimeout(() => {
  resolved("success3");
    }, 0);
});

myPromise.myAny([p1,p2,p3,p4]).then((result)=>{
    console.log(result);
    return result
}).catch((error)=>{
    console.log(error)
})