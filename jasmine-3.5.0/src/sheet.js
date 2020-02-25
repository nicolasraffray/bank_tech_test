'use strict';

function Statement(){
  this.sheet = "Date||Credit||Debit||Balance"
}

Statement.prototype.print_statement = function(transactions){ 
  return this.sheet + "\n" + this.parseSheet(transactions).reverse().join('\n') 
}

Statement.prototype.parseSheet = function (transactions) { 
  var array = transactions
  var array_length = transactions.length

  for(let i = 0; i < array_length; i++){
    if(array[i][1] >= 0 ){ array[i] = `${array[i][0]}|| ||${array[i][1].toFixed(2)}||${array[i][2].toFixed(2)}`}
    else{  array[i] = `${array[i][0]}||${Math.abs(array[i][1]).toFixed(2)}|| ||${array[i][2].toFixed(2)}`} }
  return array

}


