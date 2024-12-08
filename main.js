const personalities = {
    "Adventurous": 0,  
    "Thoughtful": 0,   
    "Social": 0,       
    "Calm": 0         
};

// Convert your existing questions into a state machine format
const gameData = {
    "1": {
        "text": "What is your favorite kind of weather?",
        "choices": {
            "Sunny and warm": [2, ["Adventurous", "Social"]],
            "Rainy and cozy": [2, ["Thoughtful"]],
            "Snowy and cold": [2, ["Social"]],
            "Breezy and calm": [2, ["Calm"]]
        }
    },
    "2": {
        "text": "What's your dream vacation spot?",
        "choices": {
            "A bustling city full of life and lights": [3, ["Adventurous"]],
            "A quiet cabin in the woods": [3, ["Thoughtful"]],
            "A tropical beach paradise": [3, ["Social"]],
            "A historical European town": [3, ["Calm"]]
        }
    },
    "3": {
        "text": "What's your go-to coffee shop order?",
        "choices": {
            "Hot chocolate": [4, ["Adventurous"]],
            "Iced matcha latte": [4, ["Thoughtful"]],
            "Cup of freshly brewed coffee": [4, ["Social"]],
            "Chocolate chip frappuccino": [4, ["Calm"]]
        }
    },
    "4": {
        "text": "Pick a midnight snack",
        "choices": {
            "Chips and dip": [5, ["Adventurous"]],
            "Cold slice of pizza": [5, ["Thoughtful"]],
            "Chocolate/candy": [5, ["Social"]],
            "Leftovers from dinner": [5, ["Calm"]]
        }
    },
    "5": {
        "text": "Which movie genre do you gravitate toward?",
        "choices": {
            "Action and adventure": [0, ["Adventurous"]],
            "Rom-com": [0, ["Thoughtful"]],
            "Horror and thrillers": [0, ["Social"]],
            "Sci-fi and fantasy": [0, ["Calm"]]
        }
    }
};
const totalQuestions = Object.keys(gameData).length;

let currentState = 1;
let stateStack = [];

// -----------------

function renderState(state) {
    const question = document.querySelector('.question');
    const answers = document.querySelector('.answers');
    const previousButton = document.getElementById('previous');

    updateProgressBar(state - 1);  

    previousButton.style.display = (state > 1) ? 'block' : 'none';

    question.querySelector('p').textContent = gameData[state].text;
    answers.innerHTML = '';

    Object.entries(gameData[state].choices).forEach(([choice, info]) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${state}`;
        input.value = choice;

        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${choice}`));
        label.appendChild(document.createElement('br'));

        input.onclick = () => {
            info[1].forEach(personality => {
                personalities[personality]++;
            });
            if (info[0] !== 0) {  
                changeState(info[0]);
            } else {  
                updateProgressBar(totalQuestions); 
                setTimeout(() => {
                    revealResult();  
                }, 500);  
            }
        };

        answers.appendChild(label);
    });
}


function updateProgressBar(questionNumber) {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const totalQuestions = Object.keys(gameData).length;

    const progressPercentage = (questionNumber / totalQuestions) * 100;
    progressFill.style.width = `${progressPercentage}%`;

    if (questionNumber >= totalQuestions) {
        progressText.textContent = `Question ${totalQuestions} of ${totalQuestions}`;
    } else {
        progressText.textContent = `Question ${questionNumber + 1} of ${totalQuestions}`;
    }
}


function changeState(newState) {
    stateStack.push(currentState);  
    currentState = newState;
    renderState(currentState);
}

function goBack() {
    if (stateStack.length > 0) {
        currentState = stateStack.pop();  
        renderState(currentState);
    }
}

function revealResult() {
    let maxCount = 0;
    let maxPersonality = '';

    console.log("Final Personality Scores:");
    console.table(personalities);
    for (const [personality, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxPersonality = personality;
        }
    }

    let resultText = "";
    let recommendedActivities = "";
    let recommendedAlbums = "";

    switch (maxPersonality) {
        case "Adventurous":
            resultText = "You're adventurous and love excitement!";
            recommendedActivities = "Rock climbing, Skydiving, Travel backpacking";
            recommendedAlbums = "placeholder";
            break;
        case "Thoughtful":
            resultText = "You're thoughtful and enjoy introspection.";
            recommendedActivities = "Museum visits, Reading, Meditation";
            recommendedAlbums = "placeholder";
            break;
        case "Social":
            resultText = "You're social and love being around people.";
            recommendedActivities = "Group sports, Karaoke nights, Cooking classes";
            recommendedAlbums = "placeholder";
            break;
        case "Calm":
            resultText = "You're calm and prefer relaxation.";
            recommendedActivities = "Yoga, Gardening, Nature walks";
            recommendedAlbums = "placeholder";
            break;
    }

    const resultHTML = `
        <h2>${resultText}</h2>
        <div class="recommendations">
            <h3>Recommended Activities:</h3>
            <p>${recommendedActivities}</p>
            <h3>Recommended Albums:</h3>
            <p>${recommendedAlbums}</p>
        </div>
    `;

    document.getElementById("result").innerHTML = resultHTML;
    document.getElementById("replay").style.display = "block";
    document.getElementById("quiz").style.display = "none";
}

// --------------
function resetQuiz() {
    currentState = 1;
    stateStack = [];  
    for (let personality in personalities) {
        personalities[personality] = 0;
    }
    document.getElementById("result").innerText = "";
    document.getElementById("replay").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.querySelector('.progress-container').style.display = 'block';
    renderState(currentState);
}

// ---------------

window.onload = () => {
    renderState(currentState);
};