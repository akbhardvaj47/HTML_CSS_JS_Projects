const quizData = [
    {
        id:'1',
      question: "What does HTML stand for?",
      a: "Hyperlinks and Text Markup Language",
      b: "Home Tool Markup Language",
      c: "Hyper Text Markup Language",
      d: "Hyper Tool Markup Language",
      correct: "c",
    },
    {
        id:'2',
      question: "Which HTML tag is used to define an internal style sheet?",
      a: "<script>",
      b: "<style>",
      c: "<css>",
      d: "<link>",
      correct: "b",
    },
    {
        id:'3',
      question: "Which property is used to change the background color in CSS?",
      a: "bgcolor",
      b: "color",
      c: "background-color",
      d: "backgroundColor",
      correct: "c",
    },
    {
        id:'4',
      question: "Inside which HTML element do we put the JavaScript?",
      a: "<js>",
      b: "<script>",
      c: "<javascript>",
      d: "<code>",
      correct: "b",
    },
    {
        id:'5',
      question: "Which CSS property controls the text size?",
      a: "font-style",
      b: "text-style",
      c: "text-size",
      d: "font-size",
      correct: "d",
    },
    {
        id:'6',
      question: "How do you write 'Hello World' in an alert box in JavaScript?",
      a: "msgBox('Hello World');",
      b: "alertBox('Hello World');",
      c: "msg('Hello World');",
      d: "alert('Hello World');",
      correct: "d",
    },
    {
        id:'7',
      question: "How do you create a function in JavaScript?",
      a: "function myFunction()",
      b: "create myFunction()",
      c: "function:myFunction()",
      d: "def myFunction()",
      correct: "a",
    },
    {
        id:'8',
      question: "Which HTML element is used for the largest heading?",
      a: "<head>",
      b: "<h6>",
      c: "<heading>",
      d: "<h1>",
      correct: "d",
    },
    {
        id:'9',
      question: "How do you add a comment in CSS?",
      a: "// this is a comment",
      b: "<!-- this is a comment -->",
      c: "/* this is a comment */",
      d: "** this is a comment **",
      correct: "c",
    },
    {
        id:'10',
      question: "How can you make a numbered list in HTML?",
      a: "<ul>",
      b: "<ol>",
      c: "<dl>",
      d: "<list>",
      correct: "b",
    },
    {
        id:'11',
      question: "Which event occurs when the user clicks on an HTML element?",
      a: "onmouseclick",
      b: "onmouseover",
      c: "onchange",
      d: "onclick",
      correct: "d",
    },
    {
        id:'12',
      question: "What does CSS stand for?",
      a: "Computer Style Sheets",
      b: "Creative Style Sheets",
      c: "Cascading Style Sheets",
      d: "Colorful Style Sheets",
      correct: "c",
    },
    {
        id:'13',
      question: "How do you call a function named `myFunction` in JavaScript?",
      a: "call myFunction()",
      b: "myFunction()",
      c: "call function myFunction",
      d: "Call.myFunction()",
      correct: "b",
    },
    {
        id:'14',
      question: "Which input type defines a slider control in HTML5?",
      a: "range",
      b: "slider",
      c: "scroll",
      d: "slide",
      correct: "a",
    },
    {
        id:'15',
      question: "Which of the following is the correct syntax for referring to an external script called `script.js`?",
      a: "<script name='script.js'>",
      b: "<script src='script.js'>",
      c: "<script href='script.js'>",
      d: "<script file='script.js'>",
      correct: "b",
    }
  ];
  
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answerBtns = document.querySelectorAll(".answer-btn");
  const nextBtn = document.getElementById("next-btn");
  const scoreText = document.getElementById("score-text");
  
  function startQuiz() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerHTML = currentQuiz.id +'. ' + currentQuiz.question;
    answerBtns[0].innerText = currentQuiz.a;
    answerBtns[1].innerText = currentQuiz.b;
    answerBtns[2].innerText = currentQuiz.c;
    answerBtns[3].innerText = currentQuiz.d;
  
    // Reset button states and styles
    answerBtns.forEach(btn => {
      btn.style.backgroundColor = "#eee";
      btn.disabled = false;
    });
  
    scoreText.innerText = `${currentQuiz.id}/${quizData.length}`;
  }
  
  answerBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const selectedOpt=btn.getAttribute('data-answer');
        const correctAns=quizData[currentQuestion].correct;
        if(selectedOpt===correctAns){
            btn.style.backgroundColor='green';
            score++;
        }else{
            // Red background for wrong answer
            btn.style.backgroundColor='red';
            answerBtns.forEach(b => {
                // Now find the correct option in all buttons and give bg to green color
                if (b.getAttribute('data-answer') === correctAns) {
                  b.style.backgroundColor = 'green';
                }
              });
        }

        // If user select any option then all button will be disabled
        //  because of user do not select any other option after first attempt
        answerBtns.forEach(b=>{
            b.disabled=true;
        });
    });
  });


  nextBtn.addEventListener('click',()=>{
    currentQuestion++;
    if(currentQuestion<quizData.length){
        startQuiz();
    }else{
        showResult();
    }
  })

  const showResult=()=>{
    const result=document.querySelector('#quiz');
    result.innerHTML=`<h2>You've completed the quiz!</h2>
                    <p>Your final score is ${score}/${quizData.length}</p>
                    <button onclick="location.reload()" class='restart'>Restart Quiz</button>`; 
  }

  
startQuiz()
