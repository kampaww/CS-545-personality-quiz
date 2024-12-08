const activityGroups = {
    "Media-based": ["Indulge in a movie marathon!", "Go to a concert!", "Have a game night!", "Binge that show you've been putting off"],
    "Outdoorsy": ["Beach Day!!!", "Have a picnic!", "Road Trip!!!", "Go on a nature hike!"],
    "Calm": ["Go visit a cool museum!", "Try out some new styles at the thrift store!", "Try yoga or meditation!"],
    "Creative": ["Write a short story or a poem!", "Start a DIY home decor project!", "Try drawing or painting something you see everyday!", "Bake something delicious!", "Try out some new recipes!"]
};

const albumGroups = {
    "Pop": ["Short n’ Sweet - Sabrina Carpenter", "Eternal Sunshine - Ariana Grande", "HIT ME HARD AND SOFT - Billie Eilish"],
    "Hip-Hop / Rap": ["Pretti - Prettifun", "Sayso Says - Che", "Chromakopia - Tyler, The Creator", "I LAY MY LIFE DOWN FOR YOU - JPEGMAFIA"],
    "R&B": ["Born in the Wild - Tems", "Timeless - Kaytranada", "Requiem - Keshi"],
    "Indie Pop / Alternative": ["This is How Tomorrow Moves - Beabadoobee", "Submarine - The Marias", "14 minutes - Dominic Fike", "God Said No - Omar Apollo", "Underdressed at the Symphony - Faye Webster", "Older (and Wiser) - Lizzy McAlpine"],
    "Classical": ["Nocturnes - Chopin", "The Late String Quartets - Beethoven", "Symphonies Nos 4-6 - Tchaikovsky", "Sogno - Bocelli"],
    "Country": ["Deeper Well - Kacey Musgraves", "The Great American Bar Scene - Zach Bryan"],
    "K-Pop": ["Crazy - LeSerrafim", "DREAM()SCAPE - NCT", "Romance: Untold - ENHYPHEN", "Armageddon - Aespa"],
    "Dance / Electronic": ["Imaginal Disk - Magdalena Bay", "Brat - Charli XCX", "boy - 2hollis"]
};

const gameData = {
    "1": {
        "text": "Which would you rather be? ",
        "choices": {
            "Courageous Pizza": [2, ["Outdoorsy", "Pop"]],
            "Honest Broccoli": [2, ["Calm", "R&B"]],
            "Shy Meatloaf": [2, ["Media-based", "Classical"]],
            "Sleepy Banana": [2, ["Calm", "Indie Pop / Alternative"]]
        }
    },
    "2": {
        "text": "If your phone could only send one emoji for the rest of its life, which one would it be?",
        "choices": {
            "🤣": [3, ["Outdoorsy", "Hip-Hop / Rap"]],
            "🙃": [3, ["Calm", "Indie Pop / Alternative"]],
            "👽": [3, ["Creative", "Dance / Electronic"]],
            "💃": [3, ["Media-based", "Pop"]]
        }
    },
    "3": {
        "text": "Your pet gorilla wants to start a YouTube channel. What kind of content do you suggest they make?",
        "choices": {
            "Banana taste tests": [4, ["Creative", "Classical"]],
            "Extreme tree-climbing challenges": [4, ["Outdoorsy", "Pop"]],
            "Gorilla ASMR": [4, ["Calm", "R&B"]],
            "Makeup tutorials": [4, ["Media-based", "Indie Pop / Alternative"]]
        }
    },
    "4": {
        "text": "You wake up one day and realize you’ve turned into a chair. How do you spend your day?",
        "choices": {
            "Testing your cushion durability": [5, ["Outdoorsy", "Country"]],
            "Making new furniture friends": [5, ["Calm", "K-Pop"]],
            "Freaking out about termites": [5, ["Media-based", "Pop"]],
            "Strategically positioning yourself for prime TV viewing": [5, ["Creative", "Classical"]]
        }
    },
    "5": {
        "text": "If you could have a superpower with a drawback, which would you choose?",
        "choices": {
            "Invincibility, but you have to hold your breath": [6, ["Outdoorsy", "Dance / Electronic"]],
            "Super speed, but it makes you nauseous": [6, ["Creative", "R&B"]],
            "Super strength, but you need 16 hours of sleep": [6, ["Media-based", "Hip-Hop / Rap"]],
            "Hearing people’s thoughts, but you can't turn it off": [6, ["Calm", "Classical"]]
        }
    },
    "6": {
        "text": "If you were a vegetable, what kind of drama would you cause in the salad bowl?",
        "choices": {
            "Insist you deserve to be the main dish": [7, ["Media-based", "Pop"]],
            "Secretly form a rebellion against the croutons": [7, ["Outdoorsy", "Classical"]],
            "Make terrible puns about being “dressed to impress”": [7, ["Creative", "R&B"]],
            "Start rumors about the carrots": [7, ["Calm", "Country"]]
        }
    },
    "7": {
        "text": "If you had to replace your hands with objects, what would you pick?",
        "choices": {
            "Spatulas": [8, ["Calm", "R&B"]],
            "Pool noodles": [8, ["Media-based", "Hip-Hop / Rap"]],
            "A pair of forks": [8, ["Outdoorsy", "Indie Pop / Alternative"]],
            "Glitter cannons": [8, ["Creative", "K-Pop"]]
        }
    },
    "8": {
        "text": "You’ve been cursed to speak in only one type of accent forever. Which do you choose?",
        "choices": {
            "Pirate": [9, ["Outdoorsy", "Country"]],
            "Robot": [9, ["Media-based", "Dance / Electronic"]],
            "Cartoon villain": [9, ["Creative", "Indie Pop / Alternative"]],
            "Shakespearean": [9, ["Calm", "R&B"]]
        }
    },
    "9": {
        "text": "If you could travel anywhere, where would you go?",
        "choices": {
            "The Moon, but it's made entirely of cheese": [10, ["Calm", "Pop"]],
            "A beach where the sand is marshmallows": [10, ["Creative", "Indie Pop / Alternative"]],
            "A city made entirely of inflatable furniture": [10, ["Media-based", "K-Pop"]],
            "A jungle where all the animals are wearing tiny hats": [10, ["Outdoorsy", "Hip-Hop / Rap"]]
        }
    },
    "10": {
        "text": "If your shadow came to life, what would it do first?",
        "choices": {
            "Dance battle you for dominance": [11, ["Media-based", "Hip-Hop / Rap"]],
            "Try to steal your snacks": [11, ["Outdoorsy", "R&B"]],
            "Start plotting world domination": [11, ["Creative", "Pop"]],
            "Take your place in awkward social situations.": [11, ["Calm", "Classical"]]
        }
    },
    "11": {
        "text": "If cartoon sound effects started happening to you in real life, what noise would play when you walk into a room?",
        "choices": {
            "A dramatic “DUN DUN DUNNN!”": [12, ["Creative", "Classical"]],
            "A cheerful boing-boing spring sound.": [12, ["Outdoorsy", "Dance / Electronic"]],
            "A whomp whomp whenever something awkward happens": [12, ["Calm", "R&B"]],
            "An over-the-top applause track like you’re the star of a sitcom.": [12, ["Media-based", "Hip-Hop / Rap"]]
        }
    },
    "12": {
        "text": "If you could summon one animal to awkwardly follow you, what would it be?",
        "choices": {
            "A confused penguin waddling behind you": [13, ["Calm", "R&B"]],
            "A tiny horse on roller skates": [13, ["Outdoorsy", "Dance / Electronic"]],
            "A raccoon with a boombox playing elevator music": [13, ["Media-based", "Hip-Hop / Rap"]],
            "A sarcastic parrot commenting on your life": [13, ["Creative", "Country"]]
        }
    },
    "13": {
        "text": "What’s your dream job… if jobs didn’t need to make sense?",
        "choices": {
            "Professional cloud floater": [14, ["Outdoorsy", "Classical"]],
            "Chair tester": [14, ["Calm", "R&B"]],
            "International spaghetti untangler": [14, ["Creative", "K-Pop"]],
            "Full-time tambourine champion": [14, ["Media-based", "Hip-Hop / Rap"]]
        }
    },
    "14": {
        "text": "What role do you play in your friend group?",
        "choices": {
            "The Overlord of Schedules": [15, ["Creative", "Classical"]],
            "The Walking Meme Generator": [15, ["Media-based", "Dance / Electronic"]],
            "The Emotional Sponge": [15, ["Calm", "Indie Pop / Alternative"]],
            "The Chaos Gremlin": [15, ["Outdoorsy", "Pop"]]
        }
    },
    "15": {
        "text": "You can only eat one color of food for the rest of your life. What do you choose?",
        "choices": {
            "Green": [16, ["Creative", "R&B"]],
            "Orange": [16, ["Outdoorsy", "Country"]],
            "Black": [16, ["Media-based", "Dance / Electronic"]],
            "Beige": [16, ["Calm", "Indie Pop / Alternative"]]
        }
    },
    "16": {
        "text": "Which of these magical items would you rather have?",
        "choices": {
            "A water bottle that’s never empty, but it’s always lukewarm.": [17, ["Media-based", "Pop"]],
            "Self-drying socks that smell like lavender.": [17, ["Calm", "R&B"]],
            "A pencil that writes perfect comebacks... 30 minutes too late.": [17, ["Creative", "Hip-Hop / Rap"]],
            "A bottomless backpack that burps randomly.": [17, ["Outdoorsy", "Dance / Electronic"]]
        }
    },
    "17": {
        "text": "If you could instantly turn into an object when you’re feeling awkward, what would you pick?",
        "choices": {
            "A decorative lamp (no one questions a lamp)": [18, ["Media-based", "Hip-Hop / Rap"]],
            "A houseplant (photosynthesis sounds peaceful)": [18, ["Outdoorsy", "Country"]],
            "A library book (because no one ever checks them out)": [18, ["Calm", "Indie Pop / Alternative"]],
            "A traffic cone (bold, bright, and in the way)": [18, ["Outdoorsy", "K-Pop"]]
        }
    },
    "18": {
        "text": "If you could replace your hair with anything, what would you choose?",
        "choices": {
            "Cotton candy": [19, ["Outdoorsy", "Pop"]],
            "Party streamers": [19, ["Media-based", "Dance / Electronic"]],
            "Spaghetti noodles": [19, ["Calm", "Indie Pop / Alternative"]],
            "A flock of pigeons": [19, ["Creative", "R&B"]]
        }
    },
    "19": {
        "text": "If your wardrobe could only consist of one of these, what would it be?",
        "choices": {
            "Pajamas that double as a superhero costume": [20, ["Media-based", "Pop"]],
            "Neon Bright Jackets": [20, ["Creative", "Dance / Electronic"]],
            "Suits and Blazers, keep it professional": [20, ["Calm", "Classical"]],
            "An inflatable suit of anything you want": [20, ["Outdoorsy", "Indie Pop / Alternative"]]
        }
    },
    "20": {
        "text": "You have to replace your car horn with a ridiculous sound. What do you pick? ",
        "choices": {
            "A screaming goat ": [0, ["Media-based", "Hip-Hop / Rap"]],
            "A cow mooing in slow motion": [0, ["Calm", "Country"]],
            "A dolphin’s excited squeal": [0, ["Creative", "Dance / Electronic"]],
            "A chicken clucking angrily ": [0, ["Outdoorsy", "K-Pop"]]
        }
    }
};

const totalQuestions = 15; // Number of questions to display per quiz
let selectedCategories = []; // Add this to track selected categories
let currentState = 1;
let activityScores = { "Media-based": 0, "Outdoorsy": 0, "Calm": 0, "Creative": 0 };
let albumScores = { "Pop": 0, "Hip-Hop / Rap": 0, "R&B": 0, "Indie Pop / Alternative": 0, "Classical": 0, "Country": 0, "K-Pop": 0, "Dance / Electronic": 0 };
let selectedQuestions = []; // Array to store randomly selected question IDs
let stateStack = [];
let selectedActivities = [];
let selectedAlbums = [];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getTopCategory(scores) {
    return Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
}

function updateProgressBar(state) {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    // Ensure state doesn't exceed totalQuestions
    const currentQuestion = Math.min(state, totalQuestions);
    const progressPercentage = ((currentQuestion - 1) / totalQuestions) * 100;

    // On last question completion, show 100%
    if (state > totalQuestions) {
        progressFill.style.width = '100%';
        progressText.textContent = `Question ${totalQuestions} of ${totalQuestions}`;
        return;
    }

    // Clamp percentage between 0 and 100
    const clampedPercentage = Math.min(100, Math.max(0, progressPercentage));
    
    progressFill.style.width = `${clampedPercentage}%`;
    progressText.textContent = `Question ${currentQuestion} of ${totalQuestions}`;
}

function selectRandomQuestions() {
    const keys = Object.keys(gameData);
    const shuffled = keys.sort(() => Math.random() - 0.5); // Shuffle questions
    selectedQuestions = shuffled.slice(0, totalQuestions); // Pick the first 15
}

function renderState(state) {
    const question = document.querySelector('.question');
    const answers = document.querySelector('.answers');
    const previousButton = document.getElementById('previous');

    // Show/hide previous button based on state
    previousButton.style.display = (state > 1) ? 'block' : 'none';

    if (state > totalQuestions) {
        updateProgressBar(totalQuestions + 1); // Update to show 100% completion
        revealResult();
        return;
    }

    updateProgressBar(state);

    const questionData = gameData[selectedQuestions[state - 1]];
    question.querySelector('p').textContent = questionData.text;
    answers.innerHTML = '';

    // Update radio button handling
    for (const [choice, info] of Object.entries(questionData.choices)) {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${state}`;
        input.value = choice;

        // Check if this choice was previously selected
        if (selectedCategories[state - 1] === info[1]) {
            input.checked = true;
        }

        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${choice}`));
        label.appendChild(document.createElement('br'));

        input.onclick = () => {
            selectedCategories[state - 1] = info[1]; // Store selection
            changeState(state + 1, info[1]);
        };

        answers.appendChild(label);
    }
}

function changeState(newState, selectedCats) {
    selectedCats.forEach(category => {
        if (activityScores[category] !== undefined) {
            activityScores[category]++;
        }
        if (albumScores[category] !== undefined) {
            albumScores[category]++;
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
    const topActivityGroup = getTopCategory(activityScores);
    const topAlbumGroup = getTopCategory(albumScores);

    const activityRecommendation = getRandomItem(activityGroups[topActivityGroup]);
    const albumRecommendation = getRandomItem(albumGroups[topAlbumGroup]);

    const resultHTML = `
        <h2>Here are your recommendations!</h2>
        <div class="recommendations">
            <h3>Activity:</h3>
            <p>${activityRecommendation}</p>
            <h3>Album:</h3>
            <p>${albumRecommendation} <br><strong>Genre:</strong> ${topAlbumGroup}</p>
        </div>
    `;

    document.getElementById("result").innerHTML = resultHTML;
    document.getElementById("replay").style.display = "block";
    document.getElementById("quiz").style.display = "none";
}

function resetQuiz() {
    currentState = 1;
    selectedCategories = [];
    activityScores = { "Media-based": 0, "Outdoorsy": 0, "Calm": 0, "Creative": 0 };
    albumScores = { "Pop": 0, "Hip-Hop / Rap": 0, "R&B": 0, "Indie Pop / Alternative": 0, "Classical": 0, "Country": 0, "K-Pop": 0, "Dance / Electronic": 0 };
    
    document.getElementById("result").innerHTML = '';
    document.getElementById("replay").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    selectRandomQuestions();
    renderState(currentState);
}

function goBack() {
    if (currentState > 1) {
        // Remove the last selection
        selectedCategories.pop();
        // Reset scores for the previous question
        const lastCategories = selectedCategories[currentState - 2];
        if (lastCategories) {
            lastCategories.forEach(category => {
                if (activityScores[category] !== undefined) {
                    activityScores[category]--;
                }
                if (albumScores[category] !== undefined) {
                    albumScores[category]--;
                }
            });
        }
        currentState--;
        renderState(currentState);
    }
}

window.onload = () => {
    selectRandomQuestions(); // Select random questions on page load
    renderState(currentState);
};
