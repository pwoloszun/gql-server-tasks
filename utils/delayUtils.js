const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const delayedValue = (value, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
};

const delayedError = (error, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(error);
    }, ms);
  });
};

module.exports.delayedValue = delayedValue;
module.exports.delay = delay;
