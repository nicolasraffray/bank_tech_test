'use strict';

describe("FormatSatement", function(){
  var statement

  beforeEach(function(){
    statement = new FormatStatement()
  })

  describe('parse_transactions', function(){
    it('converts deposit transaction to string', function(){
      expect(statement.parse_transactions([["01/01/2020",100,100]])).toEqual(["01/01/2020 || 100.00 || || 100.00"])
    })
    it('converts credit transaction to string', function(){
      expect(statement.parse_transactions([["01/01/2020",-100,0]])).toEqual(["01/01/2020 || || 100.00 || 0.00"])
    })
  })
})