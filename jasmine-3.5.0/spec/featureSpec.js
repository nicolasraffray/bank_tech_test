'use strict';

describe('feature test', function(){
  var bank, Formatstatement, print_statement ;

  it('runs the application to get the requirements', function(){
    Formatstatement = new FormatStatement 
    bank = new Bank(Formatstatement)
    bank.deposit(1000, "10/01/2012")
    bank.deposit(2000, "13/01/2012")
    bank.withdraw(500, "14/01/2012")
    print_statement = new printStatement(bank)
    expect(print_statement.print_transactions()).toEqual("date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00")
  })
})