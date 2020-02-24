
function Bank(){
  this.balance = 0
  this.transactions = []
}

Bank.prototype.history = function(){ return this.transactions }

Bank.prototype.deposit = function(amount){ 
  this.balance += amount
  this.update(amount) 
}

Bank.prototype.withdraw = function(amount){ 
  amount = (0-amount)
  this.balance += amount
  this.update(amount)
}

Bank.prototype.todays_date = function(){
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0')
  var yyyy = today.getFullYear();

  return today = dd + '/' + mm + '/' + yyyy
}

Bank.prototype.update = function (amount) { 
  this.transactions.push([this.todays_date(),amount,this.balance])
}