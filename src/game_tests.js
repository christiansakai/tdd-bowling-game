describe('Game', function() {
  // http://en.wikipedia.org/wiki/Ten-pin_bowling#Play
  var game;

  beforeEach(function() {
    game = new Game();
  });


  it('is good', function() {
    var good = 'good';
    expect(good).toEqual('good');
  });

});
