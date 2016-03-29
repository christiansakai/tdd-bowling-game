// http://en.wikipedia.org/wiki/Ten-pin_bowling#Play
function Game(){
// Properties
  this.rolls = [];
  this.currentRoll = 1;

// Stores Pin Count for Each Roll
  this.roll = function(pins){
    this.rolls[this.currentRoll] = pins;
    this.currentRoll += 1;
  };

  this.isSpare = function(frame){
    if(this.rolls[frame] + this.rolls[frame+1] === 10){
        return true;
    }
  };

  this.isStrike = function(frame){
    if(this.rolls[frame]=== 10){
        return true;
    }
  };

  this.strikeBonus = function(frame) {
    return this.rolls[frame+1] + this.rolls[frame+2];
  };

  this.spareBonus = function(frame){
    return this.rolls[frame+2];
  };

  this.score = function(){
        var totalScore = 0;
        var i = 1;
        var frame = 1;
        while(i <= 10){
            if(this.isStrike(frame)){
                totalScore += 10 + this.strikeBonus(frame);
                frame++;
            } else if(this.isSpare(frame)){
                totalScore += 10 + this.spareBonus(frame);
                frame += 2;
            } else {
                totalScore += this.rolls[frame] + this.rolls[frame+1];
                frame += 2;
            }
         i++;
    }
        return totalScore;
  };
}
