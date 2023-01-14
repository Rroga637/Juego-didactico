    const minutes = 1;
    let seconds = minutes*60;  
    let timerInterval;

    let pointsScreen =  document.querySelector(".points");

    let points = 0;
    let errors = 0;

    let error1 = document.querySelector(".error1");
    let error2 = document.querySelector(".error2");
    let error3 = document.querySelector(".error3");
    let strikes = document.querySelector(".strikes");

    let endGameText = document.querySelector(".endgame");

    let noIndice1 = 0;
    let noIndice2 = 0;
    let noIndice3 = 0;
    let noIndice4 = 0;
    let indexes = [noIndice1,noIndice2,noIndice3,noIndice4];

    let timer = document.querySelector(".timmer");

    let StartButton = document.querySelector(".startButton");
    let buttonOne = document.querySelector(".button-1");
    let buttonTwo = document.querySelector(".button-2");
    let buttonThree = document.querySelector(".button-3");
    let buttonFour = document.querySelector(".button-4");
    let buttons = [".button-1",".button-2",".button-3",".button-4"];
    
    let indexQuestion = [question1 = 0,question2 = 0,question3 = 0,question4 = 0,question5 = 0];
    let numberQuestions = [0,1,2,3,4,5,6,7,8,9]
    let auxilar = 0;   
    let corretcAns = 0;

    //the questions and the answer place on the window
    const preguntas = ["What is the pronunciation of this vowel 'ㅏ'?","What is the pronunciation of this vowel 'ㅑ'?","What is the pronunciation of this vowel 'ㅓ'?","What is the pronunciation of this vowel 'ㅕ'?","What is the pronunciation of this vowel 'ㅗ'?","What is the pronunciation of this vowel 'ㅛ'?","What is the pronunciation of this vowel 'ㅜ'?"," What is the pronunciation of this vowel 'ㅠ'?","What is the pronunciation of this vowel 'ㅡ'?","What is the pronunciation of this vowel 'ㅣ'?"];
    const respuestas  = ["[a]","[ya]","[eo]","[yeo]","[o]","[yo]","[u]","[yu]","[eu]",  "[i]"];

    
    window.addEventListener("load",function(){
            document.querySelector(".bg-question").style.display = "none";
            timer.style.display = "none";
            buttonOne.style.display = "none";
            buttonTwo.style.display = "none";
            buttonThree.style.display = "none";
            buttonFour.style.display = "none";
            strikes.style.display = "none";
            endGameText.style.display = "none";

        corretcAns = Math.round(Math.random()*3);
        indexQuestion[auxilar] = numberQuestions[Math.round(Math.random()*(numberQuestions.length-1))];
        newPeregunta(numberQuestions[indexQuestion[auxilar]]);
        random();

        //the start button duhh
        document.querySelector(".startButton").addEventListener("click", start );

         //here the fouth functions of the buttons clicks themself
        document.querySelector(".button-1").addEventListener("click", function() {
            clickButton(".button-1", indexQuestion[auxilar], 0)
        });

        document.querySelector(".button-2").addEventListener("click", function() {
            clickButton(".button-2", indexQuestion[auxilar], 1)
        });
        
        document.querySelector(".button-3").addEventListener("click", function() {
            clickButton(".button-3", indexQuestion[auxilar], 2)
        });

        document.querySelector(".button-4").addEventListener("click", function() {
            clickButton(".button-4", indexQuestion[auxilar], 3)
        });



    })
    

    function start() {        
        
        document.querySelector(".bg-question").style.display = "inline";        
        document.querySelector(".informationText").style.display = "none";
        StartButton.style.display = "none";
        timer.style.display = "inline";
        buttonOne.style.display = "inline";
        buttonTwo.style.display = "inline";
        buttonThree.style.display = "inline";
        buttonFour.style.display = "inline";
        strikes.style.display = "block";




        timerInterval = setInterval(clock,1000);
        setpoints();
       


}

        //update the timmer html every second with the help of timerInterval
        function clock() {
            seconds--;
            min = Math.floor(seconds/60);
            sec = seconds%60;
            sec = sec < 10 ? "0" + sec: sec;
            document.querySelector(".timmer").innerHTML = `${min}:${sec}`;

            if(sec == "00" && min == "0"){
                stopTimer();
                endGame();
            }

            
        }

        //stop the timer 
        function stopTimer() {
            clearInterval(timerInterval);
            timerInterval = null;
        }

        //this function will set a new question evrery time
        function newPeregunta(numeroPregunta){
            document.querySelector(".q").textContent = preguntas[numeroPregunta];
        }

       //function of the click on button
        function clickButton(name, numeroPregunta, numberIndex){ 
        buttonOne.disabled = true;
        buttonTwo.disabled = true;
        buttonThree.disabled = true;
        buttonFour.disabled = true;
        setTimeout(enableButtons,1500);
            if(indexes[numberIndex] == numeroPregunta){
                document.querySelector(name).style.background = "green";
                setTimeout(resetBackground, 1000);
                setTimeout(fase2,1500);
                points++;
                setpoints();
       

            }else{
                document.querySelector(name).style.background = "red";
                setTimeout(resetBackground,1000);
                setTimeout(fase2,1500);
                errors++;
                setStrikes();
  

        }
        }

        //each function will get a random number between 0 - 9 and one will be te same as the question 
        function Button1(numeroPregunta) {
            //i have two randoms to prevent of the answer will be always 0;
            noIndice1 = Math.round(Math.random()*9);
            while(noIndice1 == numeroPregunta){
                noIndice1 = Math.round(Math.random()*9);
            }
            document.querySelector(".button-1").textContent = respuestas[noIndice1];
        }

        function Button2(numeroPregunta) {
            noIndice2 = Math.round(Math.random()*9);
            while(noIndice2 == numeroPregunta || noIndice2 == noIndice1){
                noIndice2 = Math.round(Math.random()*9);
            }
            document.querySelector(".button-2").textContent = respuestas[noIndice2];

        }

        function Button3(numeroPregunta) {
            noIndice3 = Math.round(Math.random()*9);
            while(noIndice3 == numeroPregunta || noIndice3 == noIndice1 || noIndice3 == noIndice2){
                noIndice3 = Math.round(Math.random()*9);
            }
            document.querySelector(".button-3").textContent = respuestas[noIndice3];


        }

        function Button4(numeroPregunta) {
            noIndice4 = Math.round(Math.random()*9);
            while(noIndice4 == numeroPregunta || noIndice4 == noIndice1 || noIndice4 == noIndice2 || noIndice4 == noIndice3){
                noIndice4 = Math.round(Math.random()*9);
            }            
            document.querySelector(".button-4").textContent = respuestas[noIndice4];

        }

        function enableButtons() {

        buttonOne.disabled = false;
        buttonTwo.disabled = false;
        buttonThree.disabled = false;
        buttonFour.disabled = false;
        
    }

        //actualizes the points in live view
        function setpoints() {
            pointsScreen.textContent = `your points: ${points}`;
        }

        //turn red the strikes ligths
        function setStrikes() {
            if(errors == 1){
                error1.style.background = "red";
                error1.style.padding = "1.4%";
            }else if(errors == 2){
                error2.style.background = "red";
                error2.style.padding = "1.4%"; 
            }else if (errors == 3){
                error3.style.background = "red"; 
                error3.style.padding = "1.4%";
                stopTimer();
                endGame();
            }
        }

        //restotore the buttons background
        function resetBackground() {
            buttonOne.style.background = "#d9d9d9";
            buttonTwo.style.background = "#d9d9d9";
            buttonThree.style.background = "#d9d9d9";
            buttonFour.style.background = "#d9d9d9";

        }

        //Sets the frist round of questions and answer
        function random() {
            Button1(numberQuestions[indexQuestion[auxilar]]);
            Button2(numberQuestions[indexQuestion[auxilar]]);
            Button3(numberQuestions[indexQuestion[auxilar]]);
            Button4(numberQuestions[indexQuestion[auxilar]]);
            document.querySelector(buttons[corretcAns]).textContent = respuestas[numberQuestions[indexQuestion[auxilar]]];
            indexes[corretcAns] = indexQuestion[auxilar];
        }

        //this function do the same thing than the last one but no take the same question than before
        function fase2() {

            numberQuestions.splice((indexQuestion[auxilar]),1);
            auxilar++;
            corretcAns = Math.round(Math.random()*3);
            if(auxilar <= 4){
                indexQuestion[auxilar] = Math.round(Math.random()*(numberQuestions.length-1));

    
                newPeregunta(numberQuestions[indexQuestion[auxilar]]);
                Button1(numberQuestions[indexQuestion[auxilar]]);
                Button2(numberQuestions[indexQuestion[auxilar]]);
                Button3(numberQuestions[indexQuestion[auxilar]]);
                Button4(numberQuestions[indexQuestion[auxilar]]);
                document.querySelector(buttons[corretcAns]).textContent = respuestas[numberQuestions[indexQuestion[auxilar]]];
                indexes[corretcAns] = indexQuestion[auxilar];
            }else{
                winGame();
            }


        }

        function winGame() {

            endGameText.textContent = "You Win!!!"
            endGameText.style.display = "inline";
            document.querySelector(".q").style.display = "none";
            timer.style.display = "none";
            buttonOne.style.display = "none";
            buttonTwo.style.display = "none";
            buttonThree.style.display = "none";
            buttonFour.style.display = "none";
            strikes.style.display = "none";

            document.querySelector(".timerest").textContent = "Time rest: " + document.querySelector(".timmer").textContent;
        }

        //end the game
        function endGame() {

            endGameText.style.display = "inline";
            document.querySelector(".q").style.display = "none";
            timer.style.display = "none";
            buttonOne.style.display = "none";
            buttonTwo.style.display = "none";
            buttonThree.style.display = "none";
            buttonFour.style.display = "none";
            strikes.style.display = "none";

            document.querySelector(".timerest").textContent = "Time rest: " + document.querySelector(".timmer").textContent;


        }
        