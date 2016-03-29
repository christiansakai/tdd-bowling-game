describe('Game', function() {
  var game;
  // http://en.wikipedia.org/wiki/Ten-pin_bowling#Play

  beforeEach(function() {
    game = new Game();
  });

  function rollMultiple(roll, pins) {
    var i = 0;
    while (i < roll) {
      game.roll(pins);
      i++;
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }

  it('has a score of 0 when all rolls end up in the gutter', function() {
    rollMultiple(20, 0);
    expect(game.score()).toEqual(0);
  });

  it("has a score of 20 when all 1s are rolled", function() {
    rollMultiple(20, 1);
    expect(game.score()).toEqual(20);
   });

  it("has a score of 16 when a spare is followed by a 3", function(){
    rollSpare();
    game.roll(3);  // this is the bonus for the previous frame
    rollMultiple(17, 0); // finish the game
    expect(game.score()).toEqual(16);
  });

  it("has a score of 16 when a spare is rolled", function() {
   rollStrike();
   game.roll(3);
   game.roll(4);
   rollMultiple(16, 0); // finish the game
   expect(game.score()).toEqual(24);
  });

  it("should have a score 300 when a perfect game is rolled", function(){
    var i = 1;
    while(i <= 12){
      rollStrike();
      i++;
    }
    expect(game.score()).toEqual(300);
   });
});
