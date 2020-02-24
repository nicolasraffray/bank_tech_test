
function Bank(){
  this.balance = 0
  this.transactions = []
}

Bank.prototype.history = function(){ return this.transactions }

Bank.prototype.deposit = function(amount, date){ 
  console.log(date)
  this.balance += amount
  this.update(amount,date) 
}

Bank.prototype.withdraw = function(amount,date){ 
  amount = (0-amount)
  this.balance += amount
  this.update(amount,date)
}

Bank.prototype.update = function (amount,date = new theDate) { 
  if(date instanceof theDate){
  this.transactions.push([date.todays_date(),amount,this.balance]) }
  else{ this.transactions.push([date,amount,this.balance]) }
}