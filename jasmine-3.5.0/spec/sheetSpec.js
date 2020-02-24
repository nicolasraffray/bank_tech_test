'use strict';

describe("Sheet", function(){
  var sheet, bank

  beforeEach(function(){
    bank = new Bank
    sheet = new Sheet(bank)
  })

  describe("account", function(){
    it('takes a bank as an arguement', function(){
      expect(sheet.account).toEqual(bank)
    })
  })

  describe('print_bank_balance', function(){
    it('prints empty statement if there is nothing', function(){
      expect(sheet.print_statement()).toEqual("Date||Credit||Debit||Balance\n")
    })

    it('displays transactions in reverse order', function(){
     spyOn(bank, 'history').and.returnValue([["01/01/2020",100.00,100.00],["01/01/2020",-100,0]])
     expect(sheet.print_statement()).toEqual("Date||Credit||Debit||Balance\n01/01/2020||100|| ||0\n01/01/2020|| ||100||100")
    })
  })

  
  describe('parseSheet', function(){
    it('converts deposit transaction to string', function(){
      spyOn(bank, 'history').and.returnValue([["01/01/2020",100.00,100.00]])
      expect(sheet.parseSheet()).toEqual(["01/01/2020|| ||100||100"])
    })

    it('converts credit transaction to string', function(){
      spyOn(bank, 'history').and.returnValue([["01/01/2020",-100.00,0.00]])
      expect(sheet.parseSheet()).toEqual(["01/01/2020||100|| ||0"])
    })
  })
})