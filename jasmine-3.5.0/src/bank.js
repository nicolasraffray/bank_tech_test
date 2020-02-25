
function Bank(statementConstructor){
  this.statement = statementConstructor
  this.balance = 0
  this.transactions = []
}

Bank.prototype.history = function(){ return this.transactions }

Bank.prototype.deposit = function(amount, date){ 
  this.balance += amount
  this.update(amount,date) 
}

Bank.prototype.withdraw = function(amount,date){ 
  amount = (0-amount)
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

Bank.prototype.printStatement = function(){
  return this.statement.print_statement(this.transactions)
}

Bank.prototype._createDate = function(){
  var today = new Date
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0')
  var yyyy = today.getFullYear();

  return today = dd + '/' + mm + '/' + yyyy
}