'use strict';

describe("printStatement", function(){
  var statement, bank;

  describe('print_bank_balance', function(){
    it('prints empty statement if there is nothing', function(){
      bank = { history: function(){ return []}, 
              statement: { parse_transactions: function(){return [""]}} 
            }
      statement = new printStatement(bank)
      expect(statement.print_transactions()).toEqual("date || credit || debit || balance\n")
    })

    it('displays transactions in reverse order', function(){
      bank = { history: function(){ return [["01/01/2020",100,100],["01/01/2020",-100,0]]},
              statement: { parse_transactions: function(){return ["01/01/2020 || 100.00 || || 100.00", "01/01/2020 || || 100.00 || 0.00"]} }
              }
      statement = new printStatement(bank)
      expect(statement.print_transactions()).toEqual("date || credit || debit || balance\n01/01/2020 || || 100.00 || 0.00\n01/01/2020 || 100.00 || || 100.00")
    })
  })
})
