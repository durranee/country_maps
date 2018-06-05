describe('Map', function() {

  beforeEach(function(){
    map = new Map();
  });

  it('returns an API address', function() {
    // console.log(typeof map);
    // console.log("ahsdkjhasd");
    // map = new Map();
    console.log('test', Map.prototype);
    var expected = 'https://restcountries.eu/rest/v2/alpha/country_id'
    expect(map.getAPILink('country_id')).toEqual(expected);
  });
});


it("works for simple literals and variables", function() {
      var a = 12;
      expect(a).toEqual(12);
    });
