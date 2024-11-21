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
            "Sunny and warm": [2, ["Adventurous"]],
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

let currentState = 1;

function renderState(state) {
    const question = document.querySelector('.question');
    const answers = document.querySelector('.answers');
    
    if (state === 0) {
        revealResult();
        return;
    }

    question.querySelector('p').textContent = gameData[state].text;
    answers.innerHTML = '';

    for (const [choice, info] of Object.entries(gameData[state].choices)) {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${state}`;
        input.value = choice;
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${choice}`));
        label.appendChild(document.createElement('br'));
        
        input.onclick = () => changeState(info[0], info[1]);
        
        answers.appendChild(label);
    }
}

function changeState(newState, selectedPersonalities) {
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;
    if (currentState === 0) {
        revealResult();
    } else {
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
    switch (maxPersonality) {
        case "Adventurous":
            resultText = "You're adventurous and love excitement!";
            break;
        case "Thoughtful":
            resultText = "You're thoughtful and enjoy introspection.";
            break;
        case "Social":
            resultText = "You're social and love being around people.";
            break;
        case "Calm":
            resultText = "You're calm and prefer relaxation.";
            break;
    }

    document.getElementById("result").innerText = resultText;
    document.getElementById("replay").style.display = "block";
    document.getElementById("quiz").style.display = "none";
}

function resetQuiz() {
    currentState = 1;
    for (let personality in personalities) {
        personalities[personality] = 0;
    }
    document.getElementById("result").innerText = "";
    document.getElementById("replay").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
};