//The function playerHandScore that takes in a string of face cards (Jack, Queen, and King only) and returns the total score of the players hand.

//The cards are represented by the first letter in the name of the card:

    // "K" is 4 points
    // "Q" is 3 points
   // "J" is 2 points
//Example Usage:

//console.log( playerHandScore("K") ); // 4
//console.log( playerHandScore("KJ") ); // 6
//console.log( playerHandScore("KQQ") ); // 10 


const cardScore = {K:4, Q:3, J:2};

function playerHandScore(hand) {
  
    var score = 0;
  
    for (let card of hand){
      
        score += cardScore[card];
    }
  
    return score;
}

playerHandScore("KKJ");
