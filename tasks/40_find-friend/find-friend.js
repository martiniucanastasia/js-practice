export function findFriend(queue) {
    // Possible cases: RBR, BBR, RBB
    let possibleFriend = 0;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] === "red") {
        if (
          checkPosition(queue[i - 2], queue[i - 1], queue[i + 1], queue[i + 2])
        ) {
          possibleFriend++;
        }
      }
    }
    return possibleFriend;
  }
  function checkPosition(leftest, left, right, rightest) {
    if (
      (leftest === "blue" && left === "blue") || // bb_
      (left === "blue" && right === "blue") || // b_b
      (right === "blue" && rightest === "blue") // _bb
    ) {
      return true;
    }
    return false;
  }