
function Bank(statementConstructor){
  this.statement = statementConstructor
  this.balance = 0
  this.transactions = []
}

Bank.prototype.history = function(){ return this.transactions }

Bank.prototype.deposit = function(money, date){ 
  this.balance += money
  this.update(money,date) 
}

Bank.prototype.withdraw = function(money,date){ 
  amount = -Math.abs(money)
  this.balance += amount
  this.update(amount,date)
}

Bank.prototype.update = function (amount,date) { 
  this.transactions.push([this.checkDate(date),amount,this.balance]) 
}


Bank.prototype.checkDate = function(date){
  if(date !== undefined){ 
    return date
    }
  else{ 
    return this._createDate() }
}

Bank.prototype._createDate = function(){
  var today = new Date
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0')
  var yyyy = today.getFullYear();

  return today = dd + '/' + mm + '/' + yyyy
}

