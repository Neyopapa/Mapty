const firstName = 'Jonas';

const Check = function (arr, num) {
  if (!Array.isArray(arr)) return 'Not Array';

  if (typeof num !== 'number') return 'Not Number';

  if (!arr.includes(num)) return 'Not Exist';

  return num;
};

// console.log(Check([1, 2, 3, 4, 5, 6], ''));
console.log(Check([1, 2, 3, 4, 5, 6], 7));
// console.log(Check([1, 2, 3, 4, 5, 6], 2));
// console.log(Check(2, 7));

const users = {
  1: {
    name: 'kazeem',
    balance: 2000,
  },

  2: {
    name: 'neyo',
    balance: 30,
  },
};

function withdraw(userId, amount) {
  if (users[userId].balance >= amount) {
    return 'withdraw';
  }
  return 'Insufficient funds';
}
console.log(withdraw(2, 200));
