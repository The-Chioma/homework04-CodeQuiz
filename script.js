var timeEl = document.getElementById("timer"); 
var heading = document.getElementById("heading");
var highscore = document.getElementById("highscores");
var mainDiv = document.getElementById("main-div");
var questionsDiv = document.getElementById("questions");
var result = document.getElementById("result");
var score = 0;

var timeLeft = 100;
var timerInterval;


//setting timer for the quiz. Quiz lasts 100 seconds
function setTime(){
  timerInterval = setInterval(function(){
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();  
    }
     
  }, 1000);
  
}
setTime();


//adding click listener to highscore button
highscore.addEventListener("click", function(){
  highscoresPage();

})

//adding text content to our html elements for the first set of questions.
function questionOne(){
  heading.textContent = "Commonly used data types DO NOT include:";

  var btn1 = document.createElement("BUTTON");
  var btnText1 = document.createTextNode("1. Strings");
  btn1.appendChild(btnText1);
  btn1.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn1); 
  
  var btn2 = document.createElement("BUTTON");
  var btnText2 = document.createTextNode("2. Booleans");
  btn2.appendChild(btnText2);
  btn2.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");   
  document.getElementById("questions").appendChild(btn2);

  var btn3 = document.createElement("BUTTON");
  var btnText3 = document.createTextNode("3. Alerts");
  btn3.appendChild(btnText3);
  btn3.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn3);

  var btn4 = document.createElement("BUTTON");
  var btnText4 = document.createTextNode("4. Numbers");
  btn4.appendChild(btnText4);
  btn4.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn4);

  // adding click listeners to the buttons created above.
  btn1.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;

    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionTwo();
    };
        
  })
  btn2.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;
    
    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionTwo();
    };
    
  })
  btn3.addEventListener("click", function(){
    score+=10;
    result.textContent = "Correct Answer! Your score is: " + score; 

    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionTwo();
    };

  })
  btn4.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;

    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionTwo();
    };
    
  })
}
questionOne();


//adding text content to our html elements for the second set of questions.
function questionTwo(){ 
  heading.textContent = "The condition in an if/else statement is enclosed within_____";
  questionsDiv.innerHTML="";

  var btn1 = document.createElement("BUTTON");
  var btnText1 = document.createTextNode("1. Quotes");
  btn1.appendChild(btnText1);
  btn1.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn1); 

  var btn2 = document.createElement("BUTTON");
  var btnText2 = document.createTextNode("2. Curly Brackets");
  btn2.appendChild(btnText2);
  btn2.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");   
  document.getElementById("questions").appendChild(btn2);

  var btn3 = document.createElement("BUTTON");
  var btnText3 = document.createTextNode("3. Parentheses");
  btn3.appendChild(btnText3);
  btn3.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn3);

  var btn4 = document.createElement("BUTTON");
  var btnText4 = document.createTextNode("4. Square Brackets");
  btn4.appendChild(btnText4);
  btn4.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn4);

  //adding click listeners to buttons.
  btn1.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;

    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionThree();
    };
      
  })
  btn2.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;

     if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionThree();
    };
    
  })
  btn3.addEventListener("click", function(){
    score+=10;
    result.textContent = "Correct Answer! Your score is: " + score; 
    
    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionThree();
    };

  })
  btn4.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;

    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionThree();
    };
    
  })
};
 
//adding text content to our html elements for the third set of questions.
function questionThree(){
  heading.textContent = "Arrays in Javascript can be used to store ______"
  
  questionsDiv.innerHTML= "";

  var btn1 = document.createElement("BUTTON");
  var btnText1 = document.createTextNode("1. Numbers & Strings");
  btn1.appendChild(btnText1);
  btn1.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn1); 

  var btn2 = document.createElement("BUTTON");
  var btnText2 = document.createTextNode("2. Other Arrays");
  btn2.appendChild(btnText2);
  btn2.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");   
  document.getElementById("questions").appendChild(btn2);

  var btn3 = document.createElement("BUTTON");
  var btnText3 = document.createTextNode("3. Booleans");
  btn3.appendChild(btnText3);
  btn3.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn3);

  var btn4 = document.createElement("BUTTON");
  var btnText4 = document.createTextNode("4. All of the above");
  btn4.appendChild(btnText4);
  btn4.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn4);

  //adding click listeners to buttons.
  btn1.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;

     if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionFour();
    };
      
  })
  btn2.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;
    
    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionFour();
    };
    
  })
  btn3.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    
    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionFour();
    };

  })
  btn4.addEventListener("click", function(){
    score+=10;
    result.textContent = "Correct Answer! Your score is: " + score; 
    timeLeft-=10;
    
    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionFour();
    };
    
  })
};

//adding text content to our html elements for the fourth set of questions.
function questionFour(){
  heading.textContent = "String values must be enclosed within ______ when being assigned to variables."
  questionsDiv.innerHTML=""; 

  var btn1 = document.createElement("BUTTON");
  var btnText1 = document.createTextNode("1. Commas");
  btn1.appendChild(btnText1);
  btn1.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn1); 

  var btn2 = document.createElement("BUTTON");
  var btnText2 = document.createTextNode("2. Curly Brackets");
  btn2.appendChild(btnText2);
  btn2.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");   
  document.getElementById("questions").appendChild(btn2);

  var btn3 = document.createElement("BUTTON");
  var btnText3 = document.createTextNode("3. Quotes");
  btn3.appendChild(btnText3);
  btn3.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn3);

  var btn4 = document.createElement("BUTTON");
  var btnText4 = document.createTextNode("4. Parantheses");
  btn4.appendChild(btnText4);
  btn4.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn4);

  //adding click listeners to buttons.
  btn1.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;
    
    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionFive();
    };  
  })
  btn2.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;

    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionFive();
    };  
    
  })
  btn3.addEventListener("click", function(){
    score+=10;
    result.textContent = "Correct Answer! Your score is: " + score; 
    
    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionFive();
    };  

  })
  btn4.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;
    
    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return questionFive();
    };  
    
  })  

}

//adding text content to our html elements for the third set of questions.
function questionFive(){
  heading.textContent="A very useful tool used during web development and debugging for printing content to the debugger is:";

  questionsDiv.innerHTML="";

  var btn1 = document.createElement("BUTTON");
  var btnText1 = document.createTextNode("1. Javascript");
  btn1.appendChild(btnText1);
  btn1.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn1); 

  var btn2 = document.createElement("BUTTON");
  var btnText2 = document.createTextNode("2. Terminal/Bash");
  btn2.appendChild(btnText2);
  btn2.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");   
  document.getElementById("questions").appendChild(btn2);

  var btn3 = document.createElement("BUTTON");
  var btnText3 = document.createTextNode("3. For Loops");
  btn3.appendChild(btnText3);
  btn3.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn3);

  var btn4 = document.createElement("BUTTON");
  var btnText4 = document.createTextNode("4. console.log");
  btn4.appendChild(btnText4);
  btn4.setAttribute("style", "width: 25%; border-radius: 20px; background-color: purple; color: white;");       
  document.getElementById("questions").appendChild(btn4);

  //adding click listeners to buttons.
  btn1.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;

    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return quizDone();
    }; 
      
  })
  btn2.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;

    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return quizDone();
    };  
    
  })
  btn3.addEventListener("click", function(){
    result.textContent = "Wrong Answer! Your score is: "+ score; 
    timeLeft-=10;

    if (timeLeft === 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return quizDone();
    };  

  })
  btn4.addEventListener("click", function(){
    score+=10;
    result.textContent = "Correct Answer! Your score is: " + score; 
    
    if (timeLeft == 0){
      clearInterval(timerInterval);
      quizDone();
    }
    else {
      return quizDone();
    };  
  }) 
}

//page for the end of the quiz
function quizDone(){ 
  clearInterval(timerInterval);
  questionsDiv.textContent= "Your final score is: "+ score;
  heading.textContent= "All done!";
  result.textContent="Enter initials: "
  
  var userInput= document.createElement("INPUT"); 
  document.getElementById("result").appendChild(userInput);
  
  //submit button will take user input and store it alongside user score in local storage
  var submitBtn = document.createElement("BUTTON");
  var submitBtnText = document.createTextNode("Submit");
  submitBtn.appendChild(submitBtnText);
  submitBtn.setAttribute("style", "margin: 10px; background-color: purple; color: white;");       
  document.getElementById("result").appendChild(submitBtn);

  submitBtn.addEventListener("click", function (){
    var highscoreStorage = JSON.parse(window.localStorage.getItem("highscores")) || [];
    var name = userInput.value; 
    var usersScore = {
      score: score,
      name: name
    };

    highscoreStorage.push(usersScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscoreStorage)); 

    return highscoresPage();

  })

}

//page that displays higscores
function highscoresPage(){
  heading.textContent="Highscores"
  questionsDiv.textContent="";
  
  var highscoreStorage = JSON.parse(window.localStorage.getItem("highscores")) || [];

  for (var i = 0; i < highscoreStorage.length; i++){
    var highscoreDisplay = document.createElement("p");
    highscoreDisplay.textContent = "Name: " + highscoreStorage[i].name + " Score: " + highscoreStorage[i].score;
    questionsDiv.appendChild(highscoreDisplay)
  }

  result.innerHTML="";
  
  //back button will take you back to start of the quiz
  var backBtn = document.createElement("BUTTON");
  var backBtnText = document.createTextNode("Go Back");
  backBtn.appendChild(backBtnText);
  backBtn.setAttribute("style", "margin: 10px; background-color: purple; color: white;");       
  document.getElementById("result").appendChild(backBtn);
  backBtn.addEventListener("click", function(){
    location.reload();
  });
  
  //clear button will clear highscores from local storage and web page
  var clearBtn = document.createElement("BUTTON");
  var clearBtnText = document.createTextNode("Clear Highsccores");
  clearBtn.appendChild(clearBtnText);
  clearBtn.setAttribute("style", "margin: 10px; background-color: purple; color: white;");       
  document.getElementById("result").appendChild(clearBtn);

  clearBtn.addEventListener("click", function(){
    window.localStorage.removeItem("highscores");
    questionsDiv.textContent="";
    
  });

  
} 

