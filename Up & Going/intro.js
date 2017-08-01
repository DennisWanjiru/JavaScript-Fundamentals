"use strict";

const ACCESSORY_PRICE = 9.99;
const PHONE_PRICE = 99.99;
const TAX_RATE = 0.08;

var bank_acc_bal = prompt("Please Enter Ypur Bank Balance");

//String to Number explicit coercion
bank_acc_bal = Number(bank_acc_bal);
var amount = 0;

//Adding Tax to the total price
function calcTax (amount) {
	return amount * TAX_RATE;
}

//Formating total Amount to 2 decimal places and adding appending $
function formatAmount () {
	return "$" + amount.toFixed(2);
}

//Formating BANK amount Bal to 2 decimal places and adding appending $
function amountBal () {
	return "$" + (bank_acc_bal - amount).toFixed(2);
}

//Looping through the bank bal and purchasing items based on bank bal
while( amount < bank_acc_bal && bank_acc_bal - amount > PHONE_PRICE) {
	amount += PHONE_PRICE;
	if(amount < bank_acc_bal && bank_acc_bal - amount > ACCESSORY_PRICE) {
		amount += ACCESSORY_PRICE;
  } else {
		break;
  }
}

//Printing the results
console.log("Your Initial Bank Balance was: " + "$" + bank_acc_bal.toFixed(2) );
console.log("Your price is: " + formatAmount (amount));
console.log("Your balance is: " + amountBal (amount));
