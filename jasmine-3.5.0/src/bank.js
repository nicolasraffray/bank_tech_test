
function Bank(){
  this.sheet = "Date||Credit||Debit||Balance"
  this.balance = 0
  this.update = function(amount,balance){ 
    this.sheet = `${this.sheet}\n|| || ||${amount}||${balance}`}
}

Bank.prototype.print_statement = function(){ return this.sheet }
Bank.prototype.deposit = function(amount){ 
  this.balance += amount
  this.update(amount, this.balance) }
Bank.prototype.withdraw = function(amount){ this.balance -= amount }
