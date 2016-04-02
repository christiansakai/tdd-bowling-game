// http://en.wikipedia.org/wiki/Ten-pin_bowling#Play
function Game() {
  var rolls = [];
  var currentRoll = 1;

  this.getRollAtFrame = function(frame) {
    return rolls[frame];
  };

  this.roll = function(pins) {
    rolls[currentRoll] = pins;
    currentRoll++;
  };
}

Game.prototype.isSpare = function(frame){
  if (this.getRollAtFrame(frame) + this.getRollAtFrame(frame + 1) === 10){
    return true;
  }
};

Game.prototype.isStrike = function(frame){
  if (this.getRollAtFrame(frame) === 10){
    return true;
  }
};

Game.prototype.strikeBonus = function(frame) {
  return this.getRollAtFrame(frame + 1) + this.getRollAtFrame(frame + 2);
};

Game.prototype.spareBonus = function(frame){
  return this.getRollAtFrame(frame + 2);
};

Game.prototype.score = function(){
  var totalScore = 0;
  var i = 1;
  var frame = 1;

  while (i <= 10) {
    if (this.isStrike(frame)) {
      totalScore += 10 + this.strikeBonus(frame);
      frame++;
    } else if (this.isSpare(frame)) {
      totalScore += 10 + this.spareBonus(frame);
      frame += 2;
    } else {
      totalScore += this.getRollAtFrame(frame) + this.getRollAtFrame(frame + 1);
      frame += 2;
    }

    i++;
  };

  return totalScore;
};

