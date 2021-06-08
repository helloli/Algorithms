const nums = Array.from({length: 10}).map((item, index) => index);

function getNum(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n);
    }, Math.random().toFixed(3) * 1000)
  })
}

// 同步串行
async function syncLoop() {
  console.log('syncLoop start');
  for (let index of nums) {
    const v = await getNum(index);
    console.log(v);
  }
  console.log('syncLoop end');
}

// 异步并行
function asyncLoop() {
  console.log('asyncLoop start');
  nums.forEach(async (item, index) => {
    const v = await getNum(index);
    console.log(v);
  })
  console.log('asyncLoop end');
}

// 异步并行等同于
function asyncLoopNew() {
  console.log('syncLoop start');
  for (let index of nums) {
    (async n => {
      const v = await getNum(n);
      console.log(v);
    })(index);
  }
  console.log('syncLoop end');
}

// syncLoop();
// asyncLoop();
asyncLoopNew();
