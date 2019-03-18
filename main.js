var person = prompt("You have been given the opportunity to live the life of a bully or a nerd. Choose to be bully or nerd.", " bully or nerd");
var score = 0;
if (person == "bully") {
  var bully = prompt ("Do you want to take the nerds lunch money or give him a wedgie ?", "lunch money or wedgie");
  if (bully == "lunch money") {
    score += 100;
    alert("You now have arcade money for later. Rich Mode Achieved! +100XP\n" + " Score: " + score);
  }
  else if (bully == "wedgie") {
    var wedgie = prompt ("You have made the nerd cry. Will you run or will you stay and change your ways after this dramatic event?", "run or stay");
    if (wedgie == "run") {
      var run = prompt ("Teacher has seen you! Where will you hide?", "bathroom or playground");
      if (run == "bathroom") {
        score += 0;
        alert("You have ran into Mr.AlwaysGivingYouCrap. Busted.\n" + "Score: " + score)
      }
      else if (run == "playground") {
        score += 200;
        alert("You have blended in with the other kids and have successfully escaped. GTA mode Achieved. +200XP\n" + "Score: " + score);
      }
    }
    else if (wedgie == "stay") {
      score -= 100;
      alert("What a chicken.\n" + "You have unlocked a new transformation: New Bully Victim\n" + "Score: " + score);
    }
  }
}
else if (person == "nerd") {
  var nerd = prompt("The bully has just demanded your lunch money. Will you give it to him or will you finally stand up to him?", "give it or stand up");
  if (nerd == "give it") {
    score -= 100;
    alert("You now have no money to eat. Poor Mode Achieved. -100XP\n" + "Score: " + score);
  }
  else if (nerd == "stand up") {
    var standUp = prompt("This is what you have been waiting for, all your years of karate have prepared you for this! Will you punch him in the face or will you go low?", "face or low");
    if(standUp == "face") {
      score -= 1000;
      alert("The bully has stopped your attack. Wasted..\nYou have unlocked an: Ass Whooping -1000XP\n" + "Score: " + score);
    }
    else if (standUp == "low") {
      score += 500;
      alert("You have conquered the giant! GANGSTER mode achieved. +500XP\n" + "Score: " + score);
    }
  }
}
else {
  alert("Dude, really?");
}