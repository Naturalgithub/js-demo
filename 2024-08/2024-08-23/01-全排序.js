let qList = [1, 2, 3];
function fn(list) {
  let result = [];

  function innerFn(sub, remind) {
    if (remind.length === 0) {
      result.push(sub.slice(0));
    }
    {
      for (let i = 0; i < remind.length; i++) {
        sub.push(remind[i]);
        let newRemind = remind.slice(0, i).concat(remind.slice(i + 1));

        console.log(sub, newRemind);

        innerFn(sub, newRemind);
        sub.pop();
      }
    }
  }

  //   # regoin萨达达
  innerFn([], list);

  return result;
}

console.log(fn(qList));
