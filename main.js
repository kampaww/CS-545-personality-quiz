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

let currentState = 1;
let selectedActivities = [];
let selectedAlbums = [];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function updateProgressBar(state) {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const progressPercentage = (state / Object.keys(gameData).length) * 100;

    progressFill.style.width = `${progressPercentage}%`;
    progressText.textContent = `Question ${state} of ${Object.keys(gameData).length}`;
}

function renderState(state) {
    const question = document.querySelector('.question');
    const answers = document.querySelector('.answers');

    if (state === 0) {
        revealResult();
        return;
    }

    const questionData = gameData[state];
    question.querySelector('p').textContent = questionData.text;
    answers.innerHTML = '';

    for (const [choice, info] of Object.entries(questionData.choices)) {
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

    updateProgressBar(state);
}

// function changeState(newState, selectedCategories) {
//     selectedCategories.forEach(category => {
//         if (activityGroups[category]) {
//             selectedActivities.push(getRandomItem(activityGroups[category]));
//         }
//         if (albumGroups[category]) {
//             selectedAlbums.push(getRandomItem(albumGroups[category]));
//         }
//     });

//     currentState = newState;
//     renderState(currentState);
// }

let selectedActivityCategories = [];
function changeState(newState, selectedCategories) {
    selectedCategories.forEach(category => {
        if (activityGroups[category]) {
            selectedActivities.push(getRandomItem(activityGroups[category]));
            selectedActivityCategories.push(category);  // Track the category of the selected activity
        }
        if (albumGroups[category]) {
            selectedAlbums.push(getRandomItem(albumGroups[category]));
        }
    });

    currentState = newState;
    renderState(currentState);
}


function revealResult() {
    const activityRecommendation = getRandomItem(selectedActivities);
    const albumRecommendation = getRandomItem(selectedAlbums);
    const activityCategory = getRandomItem(selectedActivityCategories);  // Get the corresponding activity category

    let genre = "";
    let albumImageUrl = "";
    let artist = "";
    let activityDescription = "Description not available"; // Default fallback description

    // Determine the genre of the selected album, get the album image URL, and artist
    for (const [key, albums] of Object.entries(albumGroups)) {
        if (albums.includes(albumRecommendation)) {
            genre = key;
            const albumDetails = albumRecommendation.split(" - ");
            artist = albumDetails.length > 1 ? albumDetails[1] : "Unknown Artist";
            albumImageUrl = albumURLs[albumRecommendation];
            break;
        }
    }

    const activityDescriptions = {
        'Media-based': "Level up your chill with ",
        'Outdoorsy': "Catch some vibes outdoors with ",
        'Calm': "Zen out with "
    };
    
    const genreDescriptions = {
        'Pop': "bops that slap, like ",
        'Hip-Hop/Rap': "bars that hit different, featuring ",
        'R&B': "R&B smooth like a TikTok trend, from ",
        'Indie Pop / Alternative': "indie jams to ghost to your ex to, including ",
        'Classical': "classical icons that even VSCO girls would snap, like ",
        'Country': "country feels that give you all the feels, with ",
        'K-Pop': "K-Pop bangers to stan, featuring ",
        'Dance/Electronic Music': "EDM drops that make your room a rave, like "
    };
    
    if (activityDescriptions[activityCategory] && genreDescriptions[genre]) {
        activityDescription = `${activityDescriptions[activityCategory]}${genreDescriptions[genre]}${artist}. It’s a whole vibe!`;
    }

    if (!albumImageUrl || !genre || !artist) {
        console.error("Error: Missing data for selected album.");
        document.getElementById("result").textContent = 'An error occurred. Please try again.';
        return;
    }

    // Updated HTML content for the results, including the album image
    const resultHTML = `
    <div id="idCard">
        <h1>Personality Quiz - ID</h1>
        <div class="cardContents">
            <div class="imageSection">
                <img src="${albumImageUrl}" alt="Album Cover">
            </div>
            <div class="infoSection">
                <h3>Album:</h3>
                <p><strong>Name:</strong> ${albumRecommendation.split(" - ")[0]}</p>
                <p><strong>Artist:</strong> ${artist}</p>
                <p><strong>Genre:</strong> ${genre}</p>
                <h3>Activity: ${activityRecommendation}</h3>
                <p>${activityDescription}</p>
            </div>
        </div>
    </div>
    `;

    document.getElementById("result").innerHTML = resultHTML;
    document.getElementById("replay").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    document.querySelector('.progress-container').style.display = 'none'; // Hides the progress bar
}



function resetQuiz() {
    currentState = 1;
    selectedActivities = [];
    selectedAlbums = [];
    selectedActivityCategories = []; // Ensure this is reset too if you're tracking activity categories

    document.getElementById("result").innerHTML = '';
    document.getElementById("replay").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    // Reset and show the progress bar
    document.querySelector('.progress-container').style.display = 'block';
    updateProgressBar(currentState); // This will reset the progress bar to the start

    renderState(currentState);
}


window.onload = () => {
    renderState(currentState);
};
