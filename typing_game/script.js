const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];

var wordIndex = 0;
getWord(words[wordIndex]);

let score = 0;
let time = 10;

decreaseTime();

function getWord(wordsFromArray) {
    word.innerHTML = wordsFromArray;
}

settingsBtn.addEventListener('click', toggleSettingsForm);

function toggleSettingsForm() {
    settings.classList.toggle('hide');
}

text.addEventListener('input', checkWordTyped);

function checkWordTyped(e) {
    var typedWord = e.target.value;

    if (typedWord == word.innerText) {
        wordIndex++;
        getWord(words[wordIndex]);
        updateScore();
        updateTime();
        text.value = '';
    }
}

function decreaseTime(){
    var myInterval = setInterval(() => {
        time--;
        timeEl.innerHTML = time + 's';
        if(time === 0){
            clearInterval(myInterval);
            gameOver();
        }
    }, 1000);
    
}

function gameOver(){
    endgameEl.innerHTML = `
    <h1> Time ran out </h1>
    <p> Your final score is ${score}</p>
    <button onclick = "location.reload()"> Reload </button>
    `
    endgameEl.style.display = 'flex';
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

function updateTime() {
    switch (difficultySelect.value) {
        case 'hard':
            time += 1;
            timeEl.innerHTML = time +'s';
            break;
        case 'medium':
            time += 2;
            timeEl.innerHTML = time + 's';
            break;
        case 'easy':
            time += 3;
            timeEl.innerHTML = time + 's';
            break;
    }
}