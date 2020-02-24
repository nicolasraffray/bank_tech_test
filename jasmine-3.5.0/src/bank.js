
function Bank(){
  this.sheet = "Date||Credit||Debit||Balance"
  this.balance = 0
  this.update = function(amount,balance,debit){ 
    if(debit === true){ this.sheet = `${this.sheet}\n|| || ||${amount}||${balance}`}
    else { this.sheet = `${this.sheet}\n|| ||${amount}|| ||${balance}`} }
}


Bank.prototype.print_statement = function(){ return this.sheet }
Bank.prototype.deposit = function(amount){ 
  this.balance += amount
  this.update( amount, this.balance, true ) }
Bank.prototype.withdraw = function(amount){ 
  this.balance -= amount 
  this.update( amount, this.balance, false )}
