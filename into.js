const ACCESSORY_PRICE = 9.99;
const PHONE_PRICE = 99.99;
const TAX_RATE = 0.08;

var bank_acc_bal = prompt("Please Enter Ypur Bank Balance");

//String to Number coercion
bank_acc_bal = Number(bank_acc_bal);
var amount = 0;

function calcTax (amount) {
	return amount * TAX_RATE;
}

function formatAmount () {
	return "$" + amount.toFixed(2);
}

function amountBal () {
	return "$" + (bank_acc_bal - amount).toFixed(2);
}

while( amount < bank_acc_bal && bank_acc_bal - amount > PHONE_PRICE) {
	amount += PHONE_PRICE;
	if(amount < bank_acc_bal && bank_acc_bal - amount > ACCESSORY_PRICE) {
		amount += ACCESSORY_PRICE;
    } else {
		break;
    }
}

console.log("Your Initial Bank Balance was: " + "$" + bank_acc_bal.toFixed(2) );
console.log("Your price is: " + formatAmount (amount));
console.log("Your balance is: " + amountBal (amount));