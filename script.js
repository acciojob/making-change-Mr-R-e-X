const makeChange = (c) => {
  // your name here
	let coins = {
    Quarter: [25, 0],
    Dime: [10, 0],
    Nickel: [5, 0],
    Penny: [1, 0],
  };
  let count = {};
  for (let coin in coins) {
    while (c >= coins[coin][0]) {
      coins[coin][1]++;
      c = c - coins[coin][0];
    }
  }
  for (let coin in coins) {
    if (coin === "Quarter") {
      count["q"] = coins[coin][1];
    } else if (coin === "Dime") {
      count["d"] = coins[coin][1];
    } else if (coin === "Nickel") {
      count["n"] = coins[coin][1];
    } else {
      count["p"] = coins[coin][1];
    }
  }
	return count;
};

// Do not the change the code below 
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
