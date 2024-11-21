function showResult() {
    const scores = [0, 0, 0, 0];

    // Collect answers
    for (let i = 1; i <= 5; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            scores[parseInt(answer.value) - 1]++;
        }
    }

    const maxScore = Math.max(...scores);
    const index = scores.indexOf(maxScore);

    let resultText = "";
    switch (index) {
        case 0:
            resultText = "You're adventurous and love excitement!";
            break;
        case 1:
            resultText = "You're thoughtful and enjoy introspection.";
            break;
        case 2:
            resultText = "You're social and love being around people.";
            break;
        case 3:
            resultText = "You're calm and prefer relaxation.";
            break;
    }

    document.getElementById("result").innerText = resultText;
    document.getElementById("replay").style.display = "block";
}

function resetQuiz() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => (radio.checked = false));
    document.getElementById("result").innerText = "";
    document.getElementById("replay").style.display = "none";
}
