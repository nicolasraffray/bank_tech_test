'use strict';

function Sheet(bank){
  this.account = bank
  this.sheet = "Date||Credit||Debit||Balance"
}

Sheet.prototype.print_statement = function(){ 
  return this.sheet + "\n" + this.parseSheet().reverse().join('\n') 
}

Sheet.prototype.parseSheet = function () { 

  var array = this.account.history()
  var array_length = array.length

  for(let i = 0; i < array_length; i++){
    if(array[i][1] >= 0 ){ array[i] = `${array[i][0]}|| ||${array[i][1]}||${array[i][2]}`}
    else{  array[i] = `${array[i][0]}||${Math.abs(array[i][1])}|| ||${array[i][2]}`} }
  return array

}