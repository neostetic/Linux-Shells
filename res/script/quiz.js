let questions = [
    {
        question: 'Proč se Fish tak jmenuje?',
        answer1: 'Autor měl rád ryby',
        answer2: 'Autor se tak jmenoval',
        answer3: 'Zkratka Friendly Shell',
        answer4: 'Zkratka Finish Shell',
        rightAnswer: 3
    },
    {
        question: 'Proč se Korn Shell tak jmenuje?',
        answer1: 'Autor měl rád kukuřici',
        answer2: 'Autor se tak jmenoval',
        answer3: 'Zkratka Kernel Operative',
        answer4: 'Název společnosti',
        rightAnswer: 2
    },
    {
        question: 'Proč se Tcsh taky říká Csh?',
        answer1: 'Byl programovatelný v C',
        answer2: 'Měl podobnou syntaxi jako C',
        answer3: 'Zkratka Clever',
        answer4: 'Všechno uvedené',
        rightAnswer: 2
    },
    {
        question: 'Který Shell je nejznáměnší?',
        answer1: 'Bash',
        answer2: 'Tcsh',
        answer3: 'Ksh',
        answer4: 'Fish',
        rightAnswer: 1
    },
    {
        question: 'Který Shell je nejvýkonnější?',
        answer1: 'Bash',
        answer2: 'Tcsh',
        answer3: 'Ksh',
        answer4: 'Zsh',
        rightAnswer: 3
    },
    {
        question: 'Který Shell je nejjednodušší?',
        answer1: 'Bash',
        answer2: 'Tcsh',
        answer3: 'Zsh',
        answer4: 'Fish',
        rightAnswer: 4
    },
    {
        question: 'Který Shell nepodporuje nekonečnou historii?',
        answer1: 'Bash',
        answer2: 'Tcsh',
        answer3: 'Ksh',
        answer4: 'Fish',
        rightAnswer: 2
    },
    {
        question: 'Který Shell podporuje převážně server?',
        answer1: 'Bash',
        answer2: 'Tcsh',
        answer3: 'Ksh',
        answer4: 'Zsh',
        rightAnswer: 4
    },
    {
        question: 'V jakém roce byl vytvořen Fish?',
        answer1: '1998',
        answer2: '2001',
        answer3: '2005',
        answer4: '2010',
        rightAnswer: 3
    },
    {
        question: 'Na co je dobrý term256?',
        answer1: 'Na funkce',
        answer2: 'Na proměnné',
        answer3: 'Na barvy',
        answer4: 'Na všechno',
        rightAnswer: 3
    }
]
let quizQuestion = document.getElementById('quizQuestion');

let quizRightAnswers = document.getElementById('quizRightAnswers');
let quizWrongAnswers = document.getElementById('quizWrongAnswers');
let quizAnswerA = document.getElementById('quizAnswerA');
let quizAnswerB = document.getElementById('quizAnswerB');
let quizAnswerC = document.getElementById('quizAnswerC');
let quizAnswerD = document.getElementById('quizAnswerD');
let quizButton1 = document.getElementById('quizButton1');
let quizButton2 = document.getElementById('quizButton2');
let quizButton3 = document.getElementById('quizButton3');
let quizButton4 = document.getElementById('quizButton4');
let quizWin = document.getElementById('quizWin');
let quizAgain = document.getElementById('quizAgain');

let rightAnswers;
let wrongAnswers;
let number;
let array = [];

const quizStart = async () => {
    quizWin.style.opacity = '0';
    await sleep(200);
    quizWin.style.display = 'none';

    rightAnswers = 0;
    wrongAnswers = 0;
    number = 0;


    array = shuffle(createArray(questions.length));
    quizCheck();
}

const quizUpdate = async () => {
    if (number !== questions.length) {
        quizQuestion.innerHTML = questions[array[number]].question;
        quizAnswerA.innerHTML = questions[array[number]].answer1;
        quizAnswerB.innerHTML = questions[array[number]].answer2;
        quizAnswerC.innerHTML = questions[array[number]].answer3;
        quizAnswerD.innerHTML = questions[array[number]].answer4;
    } else {
        quizWin.style.display = 'block';
        await sleep(200);
        quizWin.style.opacity = '1';
    }
}

quizButton1.onclick = () => {
    quizCheckQuestion(1);
}

quizButton2.onclick = () => {
    quizCheckQuestion(2);
}

quizButton3.onclick = () => {
    quizCheckQuestion(3);
}

quizButton4.onclick = () => {
    quizCheckQuestion(4);
}

quizAgain.onclick = () => {
    quizStart();
}

const quizCheckQuestion = (answer) => {
    if (number !== questions.length) {
        if (questions[array[number]].rightAnswer === answer) {
            rightAnswers++;
        } else {
            wrongAnswers++;
        }
        number++;
        quizCheck();
    }
}

const quizCheck = () => {
    quizRightAnswers.innerHTML = rightAnswers;
    quizWrongAnswers.innerHTML = wrongAnswers;
    quizUpdate()
}

const random = (length) => {
    return Math.floor(Math.random() * (length));
}

const createArray = (length) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(i);
    }
    return array;
}

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}