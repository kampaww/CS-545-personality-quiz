const activityGroups = {
    "Media-based": ["Movie Marathon", "Concert", "Game Night"],
    "Outdoorsy": ["Beach Day", "Picnic", "Road Trip", "Rock Climbing"],
    "Calm": ["Museum Visit", "Thrift Shopping", "Baking", "Cooking"]
};

const albumGroups = {
    "Pop": ["Short n’ Sweet - Sabrina Carpenter", "Eternal Sunshine - Ariana Grande", "HIT ME HARD AND SOFT - Billie Eilish"],
    "Hip-Hop/Rap": ["Pretti - Prettifun", "Sayso Says - Che", "Chromakopia - Tyler, The Creator", "I LAY MY LIFE DOWN FOR YOU - JPEGMAFIA"],
    "R&B": ["Born in the Wild - Tems", "Timeless - Kaytranada", "Requiem - Keshi"],
    "Indie Pop / Alternative": ["This is How Tomorrow Moves - Beabadoobee", "Submarine - The Marias", "14 minutes - Dominic Fike", "God Said No - Omar Apollo", "Underdressed at the Symphony - Faye Webster", "Older (and Wiser) - Lizzy McAlpine"],
    "Classical": ["Nocturnes - Chopin", "The Late String Quartets - Beethoven", "Symphonies Nos 4-6 - Tchaikovsky", "Sogno - Bocelli"],
    "Country": ["Deeper Well - Kacey Musgraves", "The Great American Bar Scene - Zach Bryan"],
    "K-Pop": ["Crazy - LeSerrafim", "DREAM()SCAPE - NCT", "Romance: Untold - ENHYPHEN", "Armageddon - Aespa"],
    "Dance/Electronic": ["Imaginal Disk - Magdalena Bay", "Brat - Charli XCX", "boy - 2hollis"]
};

const gameData = {
    "1": {
        "text": "What is your favorite kind of weather?",
        "choices": {
            "Sunny and warm": [2, ["Outdoorsy", "Pop"]],
            "Rainy and cozy": [2, ["Calm", "R&B"]],
            "Snowy and cold": [2, ["Media-based", "Classical"]],
            "Breezy and calm": [2, ["Calm", "Indie Pop / Alternative"]]
        }
    },
    "2": {
        "text": "What’s your dream vacation spot?",
        "choices": {
            "A bustling city full of life and lights": [3, ["Media-based", "Dance/Electronic"]],
            "A quiet cabin in the woods": [3, ["Calm", "Indie Pop / Alternative"]],
            "A tropical beach paradise": [3, ["Outdoorsy", "Pop"]],
            "A historical European town": [3, ["Calm", "Classical"]]
        }
    },
    "3": {
        "text": "What’s your go-to coffee shop order?",
        "choices": {
            "Hot chocolate": [4, ["Media-based", "Classical"]],
            "Iced matcha latte": [4, ["Calm", "Indie Pop / Alternative"]],
            "Cup of freshly brewed coffee": [4, ["Outdoorsy", "Pop"]],
            "Chocolate chip frappuccino": [4, ["Media-based", "Dance/Electronic"]]
        }
    },
    "4": {
        "text": "Pick a midnight snack:",
        "choices": {
            "Chips and dip": [5, ["Outdoorsy", "Hip-Hop/Rap"]],
            "Cold slice of pizza": [5, ["Calm", "Indie Pop / Alternative"]],
            "Chocolate/candy": [5, ["Media-based", "Pop"]],
            "Leftovers from dinner": [5, ["Calm", "R&B"]]
        }
    },
    "5": {
        "text": "Which movie genre do you gravitate toward?",
        "choices": {
            "Action and adventure": [6, ["Outdoorsy", "Dance/Electronic"]],
            "Rom-com": [6, ["Calm", "R&B"]],
            "Horror and thrillers": [6, ["Media-based", "Indie Pop / Alternative"]],
            "Sci-fi and fantasy": [6, ["Calm", "Classical"]]
        }
    },
    "6": {
        "text": "If you could have a superpower, what would it be?",
        "choices": {
            "Flying": [7, ["Outdoorsy", "Pop"]],
            "Invisibility": [7, ["Media-based", "Classical"]],
            "Time travel": [7, ["Calm", "R&B"]],
            "Super strength": [7, ["Outdoorsy", "Hip-Hop/Rap"]]
        }
    },
    "7": {
        "text": "You’ve just won the lottery – what are you doing with the money?",
        "choices": {
            "Putting it in stocks": [8, ["Calm", "Classical"]],
            "Donate a portion to charity": [8, ["Media-based", "Indie Pop / Alternative"]],
            "Keeping it myself": [8, ["Outdoorsy", "Pop"]],
            "Treating my family and friends": [8, ["Calm", "R&B"]]
        }
    },
    "8": {
        "text": "How do you handle stress?",
        "choices": {
            "Workout to burn off the energy": [9, ["Outdoorsy", "Dance/Electronic"]],
            "Talk it out with a friend": [9, ["Media-based", "Pop"]],
            "Distract yourself with hobbies": [9, ["Calm", "Indie Pop / Alternative"]],
            "Meditate and reflect": [9, ["Calm", "R&B"]]
        }
    },
    "9": {
        "text": "How would your friends describe you?",
        "choices": {
            "Loyal and dependable": [10, ["Calm", "Classical"]],
            "Fun and spontaneous": [10, ["Outdoorsy", "Pop"]],
            "Thoughtful and wise": [10, ["Media-based", "R&B"]],
            "Creative and unique": [10, ["Calm", "Indie Pop / Alternative"]]
        }
    },
    "10": {
        "text": "How would you describe your dream morning?",
        "choices": {
            "Waking up early, exercising, and journaling": [11, ["Outdoorsy", "Hip-Hop/Rap"]],
            "Sleeping in and having a big breakfast": [11, ["Calm", "R&B"]],
            "Grabbing coffee and heading out the door": [11, ["Media-based", "Pop"]],
            "Getting ready to spend the day with your friends": [11, ["Calm", "Dance/Electronic"]]
        }
    },
    "11": {
        "text": "What’s your ideal pet?",
        "choices": {
            "A loyal dog": [12, ["Outdoorsy", "Country"]],
            "A mysterious and quiet cat": [12, ["Media-based", "Classical"]],
            "An exotic animal like a parrot": [12, ["Outdoorsy", "Pop"]],
            "No pets": [12, ["Calm", "Indie Pop / Alternative"]]
        }
    },
    "12": {
        "text": "How do you meet new people?",
        "choices": {
            "Through mutual friends": [13, ["Media-based", "Pop"]],
            "At events or clubs": [13, ["Outdoorsy", "Dance/Electronic"]],
            "Online": [13, ["Calm", "Indie Pop / Alternative"]],
            "Random interactions": [13, ["Calm", "R&B"]]
        }
    },
    "13": {
        "text": "What’s your love language?",
        "choices": {
            "Words of affirmation": [14, ["Calm", "Classical"]],
            "Acts of service": [14, ["Media-based", "R&B"]],
            "Quality time": [14, ["Calm", "Indie Pop / Alternative"]],
            "Physical touch": [14, ["Outdoorsy", "Hip-Hop/Rap"]]
        }
    },
    "14": {
        "text": "What role do you play in your friend group?",
        "choices": {
            "The planner": [15, ["Calm", "Classical"]],
            "The comic relief": [15, ["Media-based", "Dance/Electronic"]],
            "The advice-giver": [15, ["Calm", "Indie Pop / Alternative"]],
            "The instigator": [15, ["Outdoorsy", "Pop"]]
        }
    },
    "15": {
        "text": "What’s your guilty pleasure?",
        "choices": {
            "Reality TV shows": [16, ["Media-based", "Pop"]],
            "Eating dessert before dinner": [16, ["Calm", "R&B"]],
            "Binge-playing a video game": [16, ["Media-based", "Dance/Electronic"]],
            "Singing loudly when no one’s around": [16, ["Outdoorsy", "Indie Pop / Alternative"]]
        }
    },
    "16": {
        "text": "What’s your go-to way to treat yourself?",
        "choices": {
            "Buying something on your wishlist": [17, ["Media-based", "Pop"]],
            "Splurging on a fancy meal": [17, ["Calm", "R&B"]],
            "Spending time doing absolutely nothing": [17, ["Calm", "Indie Pop / Alternative"]],
            "Taking a spontaneous trip": [17, ["Outdoorsy", "Dance/Electronic"]]
        }
    },
    "17": {
        "text": "If you were a color, what would you be?",
        "choices": {
            "Bold and fiery red": [18, ["Outdoorsy", "Hip-Hop/Rap"]],
            "Calm and soothing blue": [18, ["Calm", "Classical"]],
            "Bright and cheerful yellow": [18, ["Media-based", "Pop"]],
            "Mysterious and deep purple": [18, ["Calm", "Indie Pop / Alternative"]]
        }
    },
    "18": {
        "text": "What’s your favorite season?",
        "choices": {
            "Spring": [19, ["Outdoorsy", "Pop"]],
            "Summer": [19, ["Outdoorsy", "Dance/Electronic"]],
            "Fall/Autumn": [19, ["Media-based", "Indie Pop / Alternative"]],
            "Winter": [19, ["Calm", "Classical"]]
        }
    },
    "19": {
        "text": "Go-to place to study?",
        "choices": {
            "In my room": [20, ["Calm", "R&B"]],
            "At a cafe": [20, ["Media-based", "Pop"]],
            "In the library": [20, ["Calm", "Classical"]],
            "Friend’s place": [20, ["Outdoorsy", "Dance/Electronic"]]
        }
    },
    "20": {
        "text": "What’s your dream travel companion like?",
        "choices": {
            "Adventurous and spontaneous": [0, ["Outdoorsy", "Pop"]],
            "Organized and detail-oriented": [0, ["Calm", "Classical"]],
            "Funny and entertaining": [0, ["Media-based", "Dance/Electronic"]],
            "Quiet and easygoing": [0, ["Calm", "Indie Pop / Alternative"]]
        }
    }
};
const totalQuestions = Object.keys(gameData).length;

let currentState = 1;
let stateStack = [];
let selectedActivities = [];
let selectedAlbums = [];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

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
            info[1].forEach(category => {
                if (activityGroups[category]) {
                    selectedActivities.push(getRandomItem(activityGroups[category]));
                }
                if (albumGroups[category]) {
                    selectedAlbums.push(getRandomItem(albumGroups[category]));
                }
            });
            if (info[0] !== 0) {  
                changeState(info[0], info[1]);
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


function changeState(newState, selectedCategories) {
    stateStack.push(currentState);
    selectedCategories.forEach(category => {
        if (activityGroups[category]) {
            selectedActivities.push(getRandomItem(activityGroups[category]));
        }
        if (albumGroups[category]) {
            selectedAlbums.push(getRandomItem(albumGroups[category]));
        }
    });

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
    const activityRecommendation = getRandomItem(selectedActivities);
    const albumRecommendation = getRandomItem(selectedAlbums);

    let genre = "";
    for (const [key, albums] of Object.entries(albumGroups)) {
        if (albums.includes(albumRecommendation)) {
            genre = key;
            break;
        }
    }

    const resultHTML = `
        <h2>Here are your recommendations!</h2>
        <div class="recommendations">
            <h3>Activity:</h3>
            <p>${activityRecommendation}</p>
            <h3>Album:</h3>
            <p>${albumRecommendation} <br><strong>Genre:</strong> ${genre}</p>
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
    selectedActivities = [];
    selectedAlbums = [];
    document.getElementById("result").innerHTML = '';
    document.getElementById("replay").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    renderState(currentState);
}

// ---------------

window.onload = () => {
    renderState(currentState);
};
