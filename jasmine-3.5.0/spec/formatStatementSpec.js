'use strict';

describe("FormatSatement", function(){
  var statement, bank

  beforeEach(function(){
    statement = new FormatStatement()
  })

  describe('print_bank_balance', function(){
    it('prints empty statement if there is nothing', function(){
      expect(statement.print_statement([])).toEqual("date || credit || debit || balance\n")
    })

    it('displays transactions in reverse order', function(){
     expect(statement.print_statement([["01/01/2020",100,100],["01/01/2020",-100,0]])).toEqual("date || credit || debit || balance\n01/01/2020 || || 100.00 || 0.00\n01/01/2020 || 100.00 || || 100.00")
    })
  })

  describe('parseSheet', function(){
    it('converts deposit transaction to string', function(){
      expect(statement.parseStatement([["01/01/2020",100,100]])).toEqual(["01/01/2020 || 100.00 || || 100.00"])
    })
    it('converts credit transaction to string', function(){
      expect(statement.parseStatement([["01/01/2020",-100,0]])).toEqual(["01/01/2020 || || 100.00 || 0.00"])
    })
  })
})