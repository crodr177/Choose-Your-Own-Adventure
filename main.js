//Assignment #2
var q2 = document.getElementById("Q2");
q2.style.display = "none";
var q2aAnswer = document.getElementById("Q2a-answer");
q2aAnswer.style.display = "none";
var q2bAnswer = document.getElementById("Q2b-answer");
q2bAnswer.style.display = "none";
var q3 = document.getElementById("Q3");
q3.style.display = "none";
var q3aAnswer = document.getElementById("Q3a-answer");
q3aAnswer.style.display = "none";
var q3bAnswer = document.getElementById("Q3b-answer");
q3bAnswer.style.display = "none";
var q2b1Answer = document.getElementById("Q2b1-answer");
q2b1Answer.style.display = "none";
var q2n = document.getElementById("Q2n");
q2n.style.display = "none";
var q2na = document.getElementById("Q2na");
q2na.style.display = "none";
var q2nb = document.getElementById("Q2nb");
q2nb.style.display = "none";
var q2nbAnswer1 = document.getElementById("Q2nb-answer1");
q2nbAnswer1.style.display = "none";
var q2nbAnswer2 = document.getElementById("Q2nb-answer2");
q2nbAnswer2.style.display = "none";
var score = 0;
function submitInfo(){
  var question1 = document.getElementById("question1").value;
  if(question1 == "bully"){
    var question2 = document.getElementById("question2").value;
    q2.style.display = "block";
    if (question2 == "lunch money") {
      q2aAnswer.style.display = "block";
      score += 100;
      document.getElementById("score").innerHTML = "Score: " + score;
    }
    else if (question2 == "wedgie") {
      q2bAnswer.style.display = "block";
      var question2b = document.getElementById("question2b").value;
      if (question2b == "run") {
        q3.style.display = "block";
        var question3 = document.getElementById("question3").value;
        if(question3 == "bathroom") {
          q3aAnswer.style.display = "block";
          score += 0;
          document.getElementById("score2").innerHTML = "Score: " + score;
        }
        else if (question3 == "playground") {
          q3bAnswer.style.display = "block";
          score += 200;
          document.getElementById("score3").innerHTML = "Score: " + score;
        }
      }
      else if (question2b == "stay") {
        q2b1Answer.style.display = "block";
        score -= 100;
        document.getElementById("score4").innerHTML = "Score: " + score;
      }
    }
  }
  else if (question1 == "nerd") {
    q2n.style.display = "block";
    var question2n = document.getElementById("question2n").value;
    if (question2n == "give it") {
      q2na.style.display = "block";
      score -= 100;
      document.getElementById("score5").innerHTML = "Score: " + score;
    }
    else if (question2n == "stand up") {
      q2nb.style.display = "block";
      var question2nb = document.getElementById("question2nb").value;
      if (question2nb == "face") {
      q2nbAnswer1.style.display = "block";
      score -= 1000;
      document.getElementById("score6").innerHTML = "Score: " + score;
      }
      else if (question2nb == "low") {
        q2nbAnswer2.style.display = "block";
        score += 500;
        document.getElementById("score7").innerHTML = "Score: " + score;
      }
    }
  }
}
/* Assignment #1

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
}*/