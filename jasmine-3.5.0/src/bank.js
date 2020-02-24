
function Bank(){
  this.sheet_heading = "Date||Credit||Debit||Balance"
  this.balance = 0 
}

Bank.prototype.print_statement = function(){ return this.sheet_heading }
Bank.prototype.deposit = function(amount){ this.balance += amount }
Bank.prototype.withdraw = function(amount){ this.balance -= amount }