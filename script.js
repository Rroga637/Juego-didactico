    let noIndice1 = 0;
    let noIndice2 = 0;
    let noIndice3 = 0;
    let noIndice4 = 0;
    let indexes = [noIndice1,noIndice2,noIndice3,noIndice4];

    let buttonTwo = document.querySelector(".button-2");
    let buttonThree = document.querySelector(".button-3");
    let buttonFour = document.querySelector(".button-4");
    let buttons = [".button-1",".button-2",".button-3",".button-4"];
    
    let indexQuestion = [question1 = 0,question2 = 0,question3 = 0,question4 = 0,question5 = 0];
    let auxilar = 0;   
    let corretcAns = 0;

    //the questions and the answer place on the window
    const preguntas = ["What is the pronunciation of this vowel 'ㅏ'?","What is the pronunciation of this vowel 'ㅑ'?","What is the pronunciation of this vowel 'ㅓ'?","What is the pronunciation of this vowel 'ㅕ'?","What is the pronunciation of this vowel 'ㅗ'?","What is the pronunciation of this vowel 'ㅛ'?","What is the pronunciation of this vowel 'ㅜ'?","What is the pronunciation of this vowel 'ㅠ'?","What is the pronunciation of this vowel 'ㅡ'?","What is the pronunciation of this vowel 'ㅣ'?"];
    const respuestas  = ["[a]","[ya]","[eo]","[yeo]","[o]","[yo]","[u]","[yu]","[eu]",  "[i]"];


    window.addEventListener("load",function(){

        corretcAns = Math.round(Math.random()*3);
        indexQuestion[auxilar] = Math.round(Math.random()*9);
        newPeregunta(indexQuestion[auxilar]);
        random();


         //here the fouth functions of the buttons clicks themself
        document.querySelector(".button-1").addEventListener("click", function() {
            clickButton(".button-1", indexQuestion[auxilar], 0)
        })

        document.querySelector(".button-2").addEventListener("click", function() {
            clickButton(".button-2", indexQuestion[auxilar], 1)
        })
        
        document.querySelector(".button-3").addEventListener("click", function() {
            clickButton(".button-3", indexQuestion[auxilar], 2)
        })

        document.querySelector(".button-4").addEventListener("click", function() {
            clickButton(".button-4", indexQuestion[auxilar], 3)
        })
    })

    //function of the click on button
        function clickButton(name, numeroPregunta, numberIndex) {
            if(indexes[numberIndex] == numeroPregunta){
                document.querySelector(name).style.background = "green";
                setTimeout(resetBackground, 1000);
                setTimeout(fase2,1500);
                auxilar++;

            }else{
                document.querySelector(name).style.background = "red";
                setTimeout(resetBackground,1000);
                setTimeout(fase2,1500);
                auxilar++;

        }
        }

        //this function will set a new question evrery time
        function newPeregunta(numeroPregunta){
            document.querySelector(".q").textContent = preguntas[numeroPregunta];
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

        function resetBackground() {
            document.querySelector(".button-1").style.background = "#d9d9d9";
            document.querySelector(".button-2").style.background = "#d9d9d9";
            document.querySelector(".button-3").style.background = "#d9d9d9";
            document.querySelector(".button-4").style.background = "#d9d9d9";

        }

        function random() {
            Button1(indexQuestion[auxilar]);
            Button2(indexQuestion[auxilar]);
            Button3(indexQuestion[auxilar]);
            Button4(indexQuestion[auxilar]);
            document.querySelector(buttons[corretcAns]).textContent = respuestas[indexQuestion[auxilar]];
            indexes[corretcAns] = indexQuestion[auxilar];
        }

        //this function do the same thing than the last one but no take the same question than before
        function fase2() {
            corretcAns = Math.round(Math.random()*3);
            if(auxilar <= 4){
                indexQuestion[auxilar] = Math.round(Math.random()*9);

                while(indexQuestion[auxilar] == indexQuestion[auxilar]-1){
                    indexQuestion[auxilar] = Math.round(Math.random()*9);
                }
    
                newPeregunta(indexQuestion[auxilar]);
                Button1(indexQuestion[auxilar]);
                Button2(indexQuestion[auxilar]);
                Button3(indexQuestion[auxilar]);
                Button4(indexQuestion[auxilar]);
                document.querySelector(buttons[corretcAns]).textContent = respuestas[indexQuestion[auxilar]];
                indexes[corretcAns] = indexQuestion[auxilar];
            }else{
                alert("se acabaron las preguntas wey")
            }

        }

        