'use strict';

function printStatement(bank){
  this.sheet = "date || credit || debit || balance"
  this.bank = bank
}

printStatement.prototype.print_transactions = function(){ 
  return this.sheet + "\n" + this.bank.statement.parse_transactions(this.bank.history()).reverse().join('\n') 
}