'use strict';

describe('Bank', function(){
  var bank;

  beforeEach(function(){
    bank = new Bank 
  })

  describe('print_bank_balance', function(){
    it('prints empty statement if there is nothing', function(){
      expect(bank.print_statement()).toEqual("Date||Credit||Debit||Balance")
    })
  })

  describe('Bank has a balance of zero', function(){
    it('has a starting balance of zero', function(){
      expect(bank.balance).toEqual(0)
    })
  })

  describe('deposit', function(){
    it('adds a specified amount to the users balance', function(){
      bank.deposit(100)
      expect(bank.balance).toEqual(100)
    })
  })

  describe('withdraw', function(){
    it('deducts a specific amount from balance', function(){
      bank.deposit(100)
      bank.withdraw(100)
      expect(bank.balance).toEqual(0)
    })
  })

  describe('append_action', function(){
    it('adds the deposit action to a new line of the balance sheet', function(){
      bank.deposit(100)
      expect(bank.print_statement()).toEqual("Date||Credit||Debit||Balance\n|| || ||100||100")
    })
  })
})