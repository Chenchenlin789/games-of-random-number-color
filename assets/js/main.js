let guessNum = 0;
guessNumSet = false

//Number selection
function getNumber() {
    if (document.getElementById('option4').checked) {
        guessNum = document.getElementById('option4').value

    } else if (document.getElementById('option5').checked) {
        guessNum = document.getElementById('option5').value

    } else if (document.getElementById('option6').checked) {
        guessNum = document.getElementById('option6').value

    } else if (document.getElementById('customOpt').checked) {
        guessNum = document.getElementById('customNum').value
    }
}

let targetNum = Math.floor(Math.random() * 100 + 1)
let playerNum


//Checking number
function check() {
    playerNum = document.getElementById('playerNumber').value
    if (guessNumSet != true) {
        getNumber()
        guessNumSet = true
    }

    console.log(guessNum)

    if (guessNum > 0) {

        guessNum--

        console.log(targetNum)

        if (playerNum > targetNum) {
            result.innerHTML = 'You need to guess lower'
        }
        else if (playerNum < targetNum) {
            result.innerHTML = 'You need to guess higher'
        }
        else if (targetNum == targetNum) {
            result.innerHTML = 'You win'
        }
    }
    else {
        document.getElementById('result').innerHTML = 'you lose'

    }
}