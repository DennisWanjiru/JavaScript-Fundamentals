'use strict';

/*================================================================
                    *** Variable Declaration ***
================================================================*/

function selector(a) {
   return document.querySelector(a);
}

//Arithmetic Variables
var bal = 0, depo, air, wthdrw, sendmny;

//Selector Variables
var send = selector("#send"),
    airtime = selector("#airtime"),
    deposite = selector("#deposite"),
    withdraw = selector("#withdraw"),
    send_form = selector("#send-div"),
    airtime_form = selector("#airtime-div"),
    deposite_form = selector("#deposite-div"),
    withdraw_form = selector("#withdraw-div");

/*================================================================
*** Function returning the actualBalance ***
================================================================*/

function actualBal () {
    return selector("#balance-div").innerHTML = "<p>Your balance is <strong>Kes. " + bal + "<strong> <p>";
} actualBal();

/*================================================================
*** Function rabstracting the messages' conditionals ***
================================================================*/

function dryAlerts (action) {
    if (action > bal) {
        alerts ("You have insufficient funds in your acc. to send <strong>Kes. " + action + "<strong>", "error");
    } else {
        bal -= action;
        alerts ("You've successfully send <strong>Kes. " + action + "<strong>", "success");
    }
}

/*================================================================
*** Function returning conditional success || error messages ***
================================================================*/

function alerts (message, status) {
    if(status === "success") {
        selector("#alert-div").classList.add("alert-success");
        selector("#alert-div").classList.remove("alert-danger");
        return selector("#alert-div").innerHTML = "<strong>Success! <strong>" + message; 
    } else if(status === "error") {
        selector("#alert-div").classList.add("alert-danger");
        selector("#alert-div").classList.remove("alert-success");
        return selector("#alert-div").innerHTML = "<strong>Error! <strong>" + message;
    }
      
}

/****************************************************
 * 
 * DEPOSITE AMOUNT YOUR ACCOUNT
 * 
 ***************************************************/

deposite.addEventListener("click", function() {
    deposite_form.classList.toggle("selected");  

    deposite_form.innerHTML = `
        <h1>Deposite Money</h1>
        <label for="">Enter Amount</label><br>
        <input type="text" id="deposite-input"><br><br>
        <button type="button" id="depositeBtn">Deposite</button>           
    `; 

    selector("#depositeBtn").addEventListener("click", function() {
        depo = Number(selector("#deposite-input").value);
        bal += depo;
        alerts ("You've successfully deposited <strong>Kes. " + depo + "<strong>", "success");
        actualBal();
        selector("#deposite-input").value = "";
    }); 
});

/****************************************************
 * 
 * BUY AIRTIME YOUR ACCOUNT
 * 
 ***************************************************/

airtime.addEventListener("click", function() {
    airtime_form.classList.toggle("selected");  

    airtime_form.innerHTML = `
        <h1>Buy Airtime</h1>
        <label for="">Enter Amount</label><br>
        <input type="text" id="airtime-input"><br><br>
        <button type="button" id="airtimeBtn">Buy</button>       
           
    `; 

    selector("#airtimeBtn").addEventListener("click", function() {
        air = Number(selector("#airtime-input").value);
        dryAlerts(air);
        actualBal()
        selector("#airtime-input").value = "";
    }); 
});

/****************************************************
 * 
 * WITHDRAW FROM YOUR ACCOUNT
 * 
 ***************************************************/

withdraw.addEventListener("click", function() {
    withdraw_form.classList.toggle("selected");  

    withdraw_form.innerHTML = `
        <h1>Withdraw Money</h1>
        <label for="">Enter Amount</label><br>
        <input type="text" id="withdraw-input"><br><br>
        <button type="button" id="withdrawBtn">Withdraw</button>           
    `; 

    selector("#withdrawBtn").addEventListener("click", function() {
        wthdrw = Number(selector("#withdraw-input").value);
        dryAlerts(wthdrw);
        actualBal();
        selector("#withdraw-input").value = "";
    });
});

/****************************************************
 * 
 * SEND MONEY FROM YOUR ACCOUNT
 * 
 ***************************************************/

send.addEventListener("click", function() {
    send_form.classList.toggle("selected");   

    send_form.innerHTML = `
        <h1>Send Money</h1>
        <label for="">Enter Amount</label><br>
        <input type="text" id="send-input"><br><br>
        <button type="button" id="sendBtn">Send</button>            
    `; 

    selector("#sendBtn").addEventListener("click", function() {
        sendmny = Number(selector("#send-input").value);
        dryAlerts(sendmny);
        actualBal()
        selector("#send-input").value = "";
    });
});









