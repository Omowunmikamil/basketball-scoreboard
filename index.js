let scoreCount1 = document.getElementById("score1")
let scoreCount2 = document.getElementById("score2")
let incrementHome = 0
let incrementGuest = 0

// HOME SCORE
function addOneToHome() {
    incrementHome += 1
    scoreCount1.textContent = incrementHome
}

function addTwoToHome() {
    incrementHome += 2
    scoreCount1.textContent = incrementHome
}

function addThreeToHome() {
    incrementHome += 3
    scoreCount1.textContent = incrementHome
}

// GUEST SCORE
function addOneToGuest() {
    incrementGuest += 1
    scoreCount2.textContent = incrementGuest
}


function addTwoToGuest() {
    incrementGuest += 2
    scoreCount2.textContent = incrementGuest
}

function addThreeToGuest() {
    incrementGuest += 3
    scoreCount2.textContent = incrementGuest
}
