const container = document.querySelector('.container')
const title = document.createElement('h1')
const body = document.body

let valueFields = ['', '', '', '', '', '', '', '', '']
let numberClick = 0
let turn = true
let blocking = false



updateContainer()

function updateContainer() {
    title.innerText = 'Tic Tac Toe Game'
    title.classList.add('title')
    container.appendChild(title)

    const fields = document.createElement('div')
    fields.classList.add('fields')
    container.appendChild(fields)

    for (let i = 0; i < 9; i++) {
        const field = document.createElement('div')
        field.classList.add('field')
        field.id = `${i}`
        fields.appendChild(field)
    }

    const listDiv = document.querySelectorAll('.field')
    addEventDiv(listDiv)
}

function addEventDiv(listDiv) {
    listDiv.forEach(element => {
        element.addEventListener('click', () => {
            eventDiv(element)
        })
    })
}

function eventDiv(element) {
    if (!blocking) {
        numberClick++

        if (element.innerText === '' && turn) {
            element.innerText = `X`
            valueFields[element.id] = 'X'
        } else if (element.innerText === '') {
            element.innerText = `O`
            valueFields[element.id] = 'O'

            element.classList.add('second-color')
        }

        turn = !turn
        console.log(numberClick)
        if (numberClick === 9 || conditionVictory() === 'X' || conditionVictory() === 'O') endGame()
    }
}

function endGame() {
    blocking = true

    const winMessage = document.createElement('h2')
    const buttonReset = document.createElement('button')

    buttonReset.innerText = 'reset'
    buttonReset.classList.add('button-reset')
    winMessage.classList.add('message')

    if (conditionVictory() === 'X') {
        winMessage.innerHTML = `Victory <span style="color: red;">first</span> player`
    } if (conditionVictory() === 'O') {
        winMessage.innerHTML = `Victory <span style="color: blue;">second</span> player`
    } if (!conditionVictory()) {
        winMessage.innerHTML = '<span style="color: #455F60">Draw</span>'
    }

    buttonReset.addEventListener('click', () => {
        clear(winMessage, buttonReset)

        updateContainer()
    })
    container.appendChild(winMessage)
    container.appendChild(buttonReset)
}

function clear(message, button) {
    valueFields = ['', '', '', '', '', '', '', '', '']
    message.parentNode.removeChild(message)
    button.parentNode.removeChild(button)
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    numberClick = 0
    turn = true
    blocking = false
}

function conditionVictory() {
    // Условия победы X
    if (valueFields[0] === 'X' && valueFields[1] === 'X' && valueFields[2] === 'X') {
        return 'X'
    }
    if (valueFields[3] === 'X' && valueFields[4] === 'X' && valueFields[5] === 'X') {
        return 'X'
    }
    if (valueFields[6] === 'X' && valueFields[7] === 'X' && valueFields[8] === 'X') {
        return 'X'
    }
    if (valueFields[0] === 'X' && valueFields[3] === 'X' && valueFields[6] === 'X') {
        return 'X'
    }
    if (valueFields[1] === 'X' && valueFields[4] === 'X' && valueFields[7] === 'X') {
        return 'X'
    }
    if (valueFields[2] === 'X' && valueFields[5] === 'X' && valueFields[8] === 'X') {
        return 'X'
    }
    if (valueFields[0] === 'X' && valueFields[4] === 'X' && valueFields[8] === 'X') {
        return 'X'
    }
    if (valueFields[2] === 'X' && valueFields[4] === 'X' && valueFields[6] === 'X') {
        return 'X'
    }


    // Условия победы O
    if (valueFields[0] === 'O' && valueFields[1] === 'O' && valueFields[2] === 'O') {
        return 'O'
    }
    if (valueFields[3] === 'O' && valueFields[4] === 'O' && valueFields[5] === 'O') {
        return 'O'
    }
    if (valueFields[6] === 'O' && valueFields[7] === 'O' && valueFields[8] === 'O') {
        return 'O'
    }
    if (valueFields[0] === 'O' && valueFields[3] === 'O' && valueFields[6] === 'O') {
        return 'O'
    }
    if (valueFields[1] === 'O' && valueFields[4] === 'O' && valueFields[7] === 'O') {
        return 'O'
    }
    if (valueFields[2] === 'O' && valueFields[5] === 'O' && valueFields[8] === 'O') {
        return 'O'
    }
    if (valueFields[0] === 'O' && valueFields[4] === 'O' && valueFields[8] === 'O') {
        return 'O'
    }
    if (valueFields[2] === 'O' && valueFields[4] === 'O' && valueFields[6] === 'O') {
        return 'O'
    }
}
