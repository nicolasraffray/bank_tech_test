'use strict';

describe('Bank', function(){
  var bank, today, statement;

  beforeEach(function(){
    today =  new Date(2020,0,1)
    spyOn(window, 'Date').and.callFake(function(){
      return today
    })
    bank = new Bank()
  })

  describe('transactions',function(){
    it('gets the transaction history', function(){
      expect(bank.history()).toEqual([])
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
    it('takes a specific date with the deposit', function(){
      bank.deposit(100, "02/12/2019")
      expect(bank.transactions).toEqual([['02/12/2019',100,100]])
    })
  })

  describe('withdraw', function(){
    it('deducts a specific amount from balance', function(){
      bank.deposit(100)
      bank.withdraw(100)
      expect(bank.balance).toEqual(0)
    })
    it('takes a specific date with the withdraw', function(){
      bank.balance = 100.00
      bank.withdraw(100, '02/12/2019')
      expect(bank.transactions).toEqual([['02/12/2019',-100,0]])
    })
  })

  describe('_createDate', function(){
    it('returns the date in the form xx/xx/xxxx', function(){
      expect(bank._createDate()).toEqual('01/01/2020')
    })
  })

  describe('checkDate', function(){
    it("checks if client passes a date", function(){
      expect(bank.checkDate('01/01/2020')).toEqual('01/01/2020')
    })
    it("returns current date if date is not passed", function(){
      expect(bank.checkDate()).toEqual('01/01/2020')
    })
  })


  describe('update', function(){
    it('adds the deposit action to a new line of the balance sheet', function(){
      bank.deposit(100)
      expect(bank.transactions).toEqual([['01/01/2020',100,100]])
    })
    it('reduces the balance by the credit amount adding it to a new balance sheet line', function(){
      bank.balance = 100
      bank.withdraw(100)
      expect(bank.transactions).toEqual([["01/01/2020",-100,0]])
    })
  })
})