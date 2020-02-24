'use strict';

describe('Bank', function(){
  var bank;

  beforeEach(function(){
    bank = new Bank 
    var date = new Date(2020,0,1)
      spyOn(window, 'Date').and.callFake(function(){
        return date
      })
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

  describe('update', function(){
    it('adds the deposit action to a new line of the balance sheet', function(){
      bank.deposit(100)
      expect(bank.print_statement()).toEqual("Date||Credit||Debit||Balance\n||01/01/2020|| ||100||100")
    })

    it('reduces the balance by the credit amount adding it to a new balance sheet line', function(){
      bank.balance = 100
      bank.withdraw(100)
      expect(bank.print_statement()).toEqual("Date||Credit||Debit||Balance\n||01/01/2020||100|| ||0")
    })
  })

  describe('todays_date', function(){ 
    it('generates the current date in the correct format for the user', function(){
      expect(bank.todays_date()).toEqual('01/01/2020')
    })
  })
})