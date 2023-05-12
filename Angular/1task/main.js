class Account {
    constructor(accNo, balance) {
        this.Acc_no = accNo;
        this.Balance = balance;
    }
    debitAmount() {
    }
    creditAmount() {
    }
    getBalance() {
        return this.Balance;
    }
}
class Saving_Account extends Account {
    constructor(accNo, balance, minBalance) {
        super(accNo, balance);
        this.Min_Balance = minBalance;
        this.Date_of_Opening = new Date(Date.now());
    }
    addCustomer() {
        console.log(`account with number ${this.Acc_no} with balance ${this.Balance} added with min balnce: ${this.Min_Balance}`);
    }
    removeCustomer() {
        console.log(`account with number ${this.Acc_no} with balance ${this.Balance} removed`);
    }
}
class Current_Account extends Account {
    constructor(accNo, balance, interestRate) {
        super(accNo, balance);
        this.Interest_rate = interestRate;
        this.Date_of_Opening = new Date(Date.now());
    }
    addCustomer() {
        console.log(`account with number ${this.Acc_no} with balance ${this.Balance} added with Interest rate ${this.Interest_rate}`);
    }
    removeCustomer() {
        console.log(`account with number ${this.Acc_no} with balance ${this.Balance} removed`);
    }
}
var acc1 = new Current_Account(123, 2000, 0.02);
acc1.addCustomer();
var acc2 = new Saving_Account(123, 5000, 2000);
acc2.addCustomer();
