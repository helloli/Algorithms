class MultipleRequest {
  queue = [];

  constructor(length) {
    this.length = length;
  }

  add(p) {
    this.queue.push(p);
  }

  remove(p) {
    this.queue.splice(this.queue.indexOf(p), 1);
    this.queue[Math.min(this.queue.length, this.length)]();
    // for (let i = 0; i < Math.min(this.queue.length, this.length); i ++) {
    //   const p = this.queue[i];
    //   if (p.)
    // }
  }
}

function axios(n) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        res(n);
      } else {
        rej(n);
      }
    }, Math.random().toFixed(3) * 1000);
  })
}

const queue = new MultipleRequest(5);

function request(n) {
  return new Promise((resolve, reject) => {
    queue.add(function () {
      return axios(n).then((res) => {
        resolve(res);
        queue.remove(this);
      }, (rej) => {
        reject(rej);
        queue.remove(this);
      });
    });
  })
}


const nums = Array.from({length: 10}).map((item, index) => index);

nums.forEach((item) => {
  request(item).then((res) => {
    console.log(res);
  });
});