
function Bank(){
  this.sheet = "Date||Credit||Debit||Balance"
  this.balance = 0
  this.update = function(amount,balance,debit){ 
    if(debit === true){ this.sheet = `${this.sheet}\n||${this.todays_date()}|| ||${amount}||${balance}`}
    else { this.sheet = `${this.sheet}\n||${this.todays_date()}||${amount}|| ||${balance}`} }
}


Bank.prototype.print_statement = function(){ return this.sheet }

Bank.prototype.deposit = function(amount){ 
  this.balance += amount
  this.update( amount, this.balance, true ) 
}

Bank.prototype.withdraw = function(amount){ 
  this.balance -= amount 
  this.update( amount, this.balance, false )
}

Bank.prototype.todays_date = function(){
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0')
  var yyyy = today.getFullYear();

  return today = dd + '/' + mm + '/' + yyyy
}
