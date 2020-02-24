'use strict';

describe('Date',function(){
  var date, today

  beforeEach(function(){
    date = new theDate
    today =  new Date(2020,0,1)
    spyOn(window, 'Date').and.callFake(function(){
      return today
    })
  })

  describe('todaysDate', function(){
    it('returns the date in the form xx/xx/xxxx', function(){
      expect(date.todays_date()).toEqual('01/01/2020')
    })
  })
})