// ---- old code -----

    // how does the game start?
    function startUp (){
        for (var i=0; i < randomSimpsons.length; i++){
            answerArray = "_";
        }

            s = answerArray.join(" ");
            document.getElementById("answer").innerHTML = s;
    }

    // this is where the letters are guessed
    function Letter(){
        var letter = document.getElementById("letter") .value;
        if (letter.length > 0){
            for (var i=0; i < randomWord.length; i++);{
                if (randomWord[i]=== letter){
                    answerArray[i] = letter;
                }
            }
        }
    }

    //This checks to see if the key pressed (letter guess) is in the word
    document.onkeyup = function(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90){
            letterGuess(event.key);

        }
    }


    //
    count++;
    document.getElementById("counter").innerHTML = "No of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");{
        if (count > 5){
        document.getElementById("stat").innerHTML = "Come on - you should have guessed it by now";
    }