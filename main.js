const activityGroups = {
    "Media-based": ["movie marathon!", "live concert!", "game night!", "TV series binge!"],
    "Outdoorsy": ["Beach Day!!!", "scenic picnic!", "road trip!!!", "nature hike!"],
    "Calm": ["cool museum visit!", "thrift store try-on!", "yoga and meditation session!"],
    "Creative": ["short story or poem writing!", " DIY home decor project!", "drawing or painting on your daily walk!", "baking experiment!", "recipe creation!"]
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

const albumURLs = {
    "Short n’ Sweet - Sabrina Carpenter": "https://i.scdn.co/image/ab67616d0000b273fd8d7a8d96871e791cb1f626",
    "Eternal Sunshine - Ariana Grande": "https://upload.wikimedia.org/wikipedia/en/7/7e/Ariana_Grande_-_Eternal_Sunshine.png",
    "HIT ME HARD AND SOFT - Billie Eilish": "https://upload.wikimedia.org/wikipedia/en/a/aa/Billie_Eilish_-_Hit_Me_Hard_and_Soft.png",
    "Pretti - Prettifun": "https://i.scdn.co/image/ab67616d0000b27308d5847ce80b812d39c4718e",
    "Sayso Says - Che": "https://i.scdn.co/image/ab67616d0000b2734b663f097a55ffafd8cab0e0",
    "Chromakopia - Tyler, The Creator": "https://upload.wikimedia.org/wikipedia/en/5/5b/Chromakopia_CD_cover.jpg",
    "I LAY MY LIFE DOWN FOR YOU - JPEGMAFIA": "https://i.scdn.co/image/ab67616d0000b273a3314be7ae643fefa32fbe08",
    "Born in the Wild - Tems": "https://upload.wikimedia.org/wikipedia/en/8/87/Tems_-_Born_in_the_Wild_album_cover.jpg",
    "Timeless - Kaytranada": "https://i.scdn.co/image/ab67616d0000b2733d1996a2dc962e53e12cb7cb",
    "Requiem - Keshi": "https://i.scdn.co/image/ab67616d0000b273617997bc09bb7fa23624eff5",
    "This is How Tomorrow Moves - Beabadoobee": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/220px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    "Submarine - The Marias": "https://i.scdn.co/image/ab67616d0000b2734d070fdf58fad8c54c5beb85",
    "14 minutes - Dominic Fike": "https://i.scdn.co/image/ab67616d0000b273abdde781e79a44868914e661",
    "God Said No - Omar Apollo": "https://victrola.com/cdn/shop/files/4343430-3185912.jpg?v=1718810683",
    "Underdressed at the Symphony - Faye Webster": "https://i.scdn.co/image/ab67616d0000b273c598867672580ba77c4e9317",
    "Older (and Wiser) - Lizzy McAlpine": "https://i.scdn.co/image/ab67616d0000b273fdca70cadefb1099b6dba1b9",
    "Nocturnes - Chopin": "https://i.scdn.co/image/ab67616d00001e02a749047278122f08e2de2a75",
    "The Late String Quartets - Beethoven": "https://i.scdn.co/image/ab67616d0000b27389a0e2ea47903bbda69aa29e",
    "Symphonies Nos 4-6 - Tchaikovsky": "https://i.scdn.co/image/ab67616d00001e0202b21e075874cf0b26291160",
    "Sogno - Bocelli": "https://i.scdn.co/image/ab67616d0000b273c88c0707cd3ea2f4a51ab6f8",
    "Deeper Well - Kacey Musgraves": "https://i.scdn.co/image/ab67616d0000b27397e18f502a7043a741824a31",
    "The Great American Bar Scene - Zach Bryan": "https://i.scdn.co/image/ab67616d0000b273647ad18a07e9e939e399e5a1",
    "Crazy - LeSerrafim": "https://upload.wikimedia.org/wikipedia/en/3/35/Crazy_%28Le_Sserafim_album%29.png",
    "DREAM()SCAPE - NCT": "https://upload.wikimedia.org/wikipedia/en/7/72/NCT_Dream_-_Dream%28%29scape.jpg",
    "Romance: Untold - ENHYPHEN": "https://i.scdn.co/image/ab67616d0000b273653887a83332de0350151f10",
    "Armageddon - Aespa": "https://upload.wikimedia.org/wikipedia/en/8/8e/Aespa_-_Armageddon.jpg",
    "Imaginal Disk - Magdalena Bay": "https://i.scdn.co/image/ab67616d0000b2735a2ff617de4e51a9a214b56a",
    "Brat - Charli XCX": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Charli_XCX_-_Brat_%28album_cover%29.png/1200px-Charli_XCX_-_Brat_%28album_cover%29.png",
    "boy - 2hollis": "https://media.pitchfork.com/photos/66686f6174b2a7f0a31e0db5/1:1/w_450%2Cc_limit/2hollis%2520-%2520boy.jpeg"
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
    currentState = state; // Update the current state
    updateProgress(); // Call updateProgress to adjust the progress bar

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

    stateStack.push(currentState); // Save current state
    currentState = newState; // Update to the new state
    renderState(currentState); // Render the new state
}

function goBack() {
    if (stateStack.length > 0) {
        currentState = stateStack.pop();  
        renderState(currentState);
    }
}

const activityInterpretations = {
    'Media-based': "Level up your chill with a ",
    'Outdoorsy': "Catch some vibes outdoors with a ",
    'Calm': "Zen out with a ",
    'Creative': "Unleash your inner artist with a "
};

const albumInterpretations = {
    'Pop': "Pop bops for when you need to strut like you own the place.",
    'Hip-Hop / Rap': "Beats so fire, you’ll feel like the main character instantly.",
    'R&B': "Smooth jams for pretending life’s a rom-com montage.",
    'Indie Pop / Alternative': "Quirky tunes for staring out windows like you’re in an A24 film.",
    'Classical': "Epic melodies to make vacuuming feel like a royal event.",
    'Country': "Yeehaw vibes for living your best small-town drama fantasy.",
    'K-Pop': "Anthems so hype, you’ll stan yourself by the end of the day.",
    'Dance / Electronic': "Electric bangers for dancing like no one’s watching (but everyone is)."
};


function revealResult() {
    // Determine the top activity and album based on accumulated scores or random selection
    const topActivityCategory = getTopCategory(activityScores);
    const topAlbumCategory = getTopCategory(albumScores);

    const activityRecommendation = getRandomItem(activityGroups[topActivityCategory]);
    const albumRecommendation = getRandomItem(albumGroups[topAlbumCategory]);

    // Split the albumRecommendation to extract album name and artist
    const [albumName, artist] = albumRecommendation.split(" - ");
    const albumImageUrl = albumURLs[albumRecommendation];

    // Fetch dynamic interpretations
    const activityInterpretation = activityInterpretations[topActivityCategory] || "You’re a vibe. Full stop.";
    const albumInterpretation = albumInterpretations[topAlbumCategory] || "Tunes so good, they might just break your brain (in a good way).";

    // Compose the HTML content for displaying results
    const resultHTML = `
        <div id="idCard">
            <h1>Your Personality Quiz Results</h1>
            <div class="cardContents">
                <div class="imageSection">
                    <img src="${albumImageUrl}" alt="Album Cover">
                </div>
                <div class="infoSection">
                    <h3>Recommended Activity:</h3>
                    <p>${activityRecommendation}</p>
                    <p><em>${activityInterpretation}</em></p>
                    <h3>Recommended Album:</h3>
                    <p>${albumName} by ${artist}</p>
                    <p><em>${albumInterpretation}</em></p>
                    <p><strong>Genre:</strong> ${topAlbumCategory}</p>
                    <div class="action-buttons">
                        <button onclick="shareResults()" class="action-button">Share Quiz</button>
                        <button onclick="openSurvey()" class="action-button">Take Our Survey</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById("result").innerHTML = resultHTML;
    document.getElementById("replay").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    document.querySelector('.progress-container').style.display = 'none'; // Ensure the progress bar is hidden on result display
}


function openSurvey() {
    window.open('https://forms.gle/uZw9fD8WPARJ3zLa7', '_blank');
}

function shareResults() {
    const hardcodedLink = "https://kampaww.github.io/CS-545-personality-quiz/"; // Replace with your desired URL
    const dummy = document.createElement('textarea');
    dummy.value = hardcodedLink;
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    const popup = document.createElement('div');
    popup.style.cssText = `
       position: fixed;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       background: white;
       padding: 20px;
       border-radius: 8px;
       box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
       z-index: 1000;
       text-align: center;
    `;
    popup.innerHTML = `<p style="margin: 0; font-size: 16px;">Link copied to clipboard!</p>`;
    document.body.appendChild(popup);
   
    setTimeout(() => {
       popup.style.opacity = '0';
       popup.style.transition = 'opacity 0.3s ease';
       setTimeout(() => popup.remove(), 300);
    }, 1200);
}
function resetQuiz() {
    currentState = 1;
    activityScores = { "Media-based": 0, "Outdoorsy": 0, "Calm": 0, "Creative": 0 };
    albumScores = { "Pop": 0, "Hip-Hop / Rap": 0, "R&B": 0, "Indie Pop / Alternative": 0, "Classical": 0, "Country": 0, "K-Pop": 0, "Dance / Electronic": 0 };
    document.getElementById("result").innerHTML = '';
    document.getElementById("replay").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.querySelector('.progress-container').style.display = 'block'; // Show the progress bar again
    selectRandomQuestions(); // Re-select random questions for a new quiz iteration
    renderState(currentState); // Render the first state/question
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

// Function to initialize the quiz and set up progress bar
window.onload = () => {
    progress = 0;
    selectRandomQuestions(); // Initialize the quiz with a random selection of questions
    renderState(currentState); // Start the quiz
    updateProgress(); // Initialize the progress bar
};

// Progress Bar Functionality
let progress = 0;

let progressFill = document.querySelector('.progress-fill');
let progressText = document.querySelector('.progress-text');

let numHearts = 15;

function updateProgress() {
    const progressPercentage = Math.round(((currentState - 1) / totalQuestions) * 100); // Calculate progress dynamically
    const filledHearts = Math.round((progressPercentage / 100) * numHearts);
    const heartWidth = 100 / numHearts; 

    progressFill.style.width = `${filledHearts * heartWidth}%`; 

    if (filledHearts > 0) {
        progressFill.classList.add('filled'); 
    } else {
        progressFill.classList.remove('filled'); 
    }
}

function advanceProgress() {
    if (currentState <= totalQuestions) {
        updateProgress(); // Ensure progress updates dynamically
    }
}

updateProgress();  

advanceProgress();
