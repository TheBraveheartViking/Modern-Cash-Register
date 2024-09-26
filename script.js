let price = 3.26;
let cid = [
  ['Penny', 1.01],
  ['Nickel', 2.05],
  ['Dime', 3.1],
  ['Quarter', 4.25],
  ['One', 90],
  ['Five', 55],
  ['Ten', 20],
  ['Twenty', 60],
  ['One hundred', 100]
];

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('remaining-cash-screen');

const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  change.map(money => {
    displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`;
  });
};

const checkCashRegister = () => {
  if (Number(cash.value) < price) {
    alert("Customer does not have enough money to purchase the item");
    cash.value = '';
    return;
  }

  if (Number(cash.value) === price) {
    displayChangeDue.innerHTML = '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
  }

  let changeDue = Number(cash.value) - price;
  let reversedCid = [...cid].reverse();
  let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let result = { status: 'OPEN', change: [] };
  let totalCID = parseFloat(cid.map(total => total[1]).reduce((prev, curr) => prev + curr).toFixed(2));

  if (totalCID < changeDue) {
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

  if (totalCID === changeDue) {
    result.status = 'CLOSED';

  
  

  }

  for (let i = 0; i < reversedCid.length; i++) {
    if (changeDue >= denominations[i] && changeDue > 0) {
      let count = 0;
      let total = reversedCid[i][1];
      while (total > 0 && changeDue >= denominations[i]) {
        total -= denominations[i];
        changeDue = parseFloat((changeDue - denominations[i]).toFixed(2));
        count++;
      }
      if (count > 0) {
        result.change.push([reversedCid[i][0], count * denominations[i]]);
      }
    }
  }

  if (changeDue > 0) {
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

  formatResults(result.status, result.change);
  updateUI(result.change);
};

const updateUI = change => {
    const currencyNameMap = {
        Penny: 'Pennies',
        Nickel: 'Nickels',
        Dime: 'Dimes',
        Quarter: 'Quarters',
        One: 'Ones',
        Five: 'Fives',
        Ten: 'Tens',
        Twenty: 'Twenties',
        'One hundred': 'Hundreds'
      };

  if (change) {
    change.forEach(changeArr => {
      const targetArr = cid.find(cidArr => cidArr[0] === changeArr[0]);
      targetArr[1] = parseFloat((targetArr[1] - changeArr[1]).toFixed(2));
    });
  }

  cash.value = '';
  priceScreen.textContent = `Total Cost: $${price}`;
  cashDrawerDisplay.innerHTML = `<p><strong>Cash in drawer</strong></p>${cid.map(money => `<p>${currencyNameMap[money[0]]}: $${money[1]}</p>`).join('')}`;
};

purchaseBtn.addEventListener('click', checkCashRegister);

cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkCashRegister();
  }
});

updateUI();
