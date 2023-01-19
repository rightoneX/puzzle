const addTripBtn = document.getElementById('add-trip-btn');
const tripContainer = document.getElementById('trip-container');
const goBtn = document.getElementById('go-btn');
const resultMsg = document.getElementById('result-msg');
const tripData = document.getElementById('trip-data');
const passengerData = document.getElementById('passenger-data')
const resultSaveBtn = document.getElementById('save-btn')
let rightResult = [
    { race_number: 1, wolf: 0, goat: 'правый берег', cabbege: 0 },
    { race_number: 2, wolf: 'правый берег', goat: 'правый берег', cabbege: 0 },
    { race_number: 3, wolf: 'правый берег', goat: 'левый берег', cabbege: 0 },
    { race_number: 4, wolf: 'правый берег', goat: 'левый берег', cabbege: 'правый берег' },
    { race_number: 5, wolf: 'правый берег', goat: 'правый берег', cabbege: 'правый берег' },
]

//list of trips
let trips = []
let trip = 1;
let riverSide = 'Выбрать рейс';
let wolfPosition = 0
let goatPostion = 0
let cabbegePosition = 0
let passangerName = 'undefined'
let reportMsg

//enter direction
tripData.addEventListener('click', () => {
    riverSide = tripData.value;
    userMsg('clear')
})

//enter passanger
passengerData.addEventListener('click', () => {
    passangerName = passengerData.value;
    userMsg('clear')
})

//run the test
goBtn.addEventListener('click', () => {
    if (trips != 0) {
        checkResult()
    }
})

//add the trip to array
addTripBtn.addEventListener('click', () => {

    if (riverSide === 'Выбрать рейс' || passangerName === 'undefined') {
        userMsg('fillup')
        return false
    }
    switch (passangerName) {
        case 'волк':
            wolfPosition = riverSide
            break;
        case 'коза':
            goatPostion = riverSide
            break;
        case 'капуста':
            cabbegePosition = riverSide
            break;
        default:
            break;
    }

    trips.push({ race_number: trip, wolf: wolfPosition, goat: goatPostion, cabbege: cabbegePosition })

    let nextTrip = document.createElement('div');
    nextTrip.className = "trip"
    nextTrip.innerHTML = "<div class='trip-name'>рейс " + trip + "</div>"
        + "<div class='trip-line'>" + riverSide + "</div>"
        + "<div class='trip-line'>" + passangerName + "</div>";
    tripContainer.appendChild(nextTrip)
    // next trip
    trip++
    // set to default
    riverSide = 'Выбрать рейс'
    passangerName = 'undefined'

    console.log(trips)
})


function checkResult() {
    if (JSON.stringify(trips) === JSON.stringify(rightResult)) {
        userMsg('won')
        reportMsg = resultMsg.innerText
    } else {
        userMsg('lost')
        reportMsg = resultMsg.innerText
    }
    resultSaveBtn.className = "button orange"
}


//run the test
resultSaveBtn.addEventListener('click', () => {
    userMsg('filesave')
    saveResult()
})

function saveResult() {

    let gameResult;

    trips.forEach((item, index) => {
        gameResult += "шаг > " + item['race_number']
            + " | позиция волка > " + item['wolf']
            + " | позиция козы > " + item['goat']
            + " | позиция капусты > " + item['cabbege'] + '\n'
    })

    gameResult += "Результат > " + reportMsg

    var saveResult = new Blob([gameResult], { type: "text/plain;charset=utf-8" });
    saveAs(saveResult, "result.txt");
}




function userMsg(situation) {

    switch (situation) {
        case 'won':
            resultMsg.className = "result right_answer"
            resultMsg.innerText = "Ура! Правильный ответ!"
            break;
        case 'lost':
            resultMsg.className = "result wrong_answer"
            resultMsg.innerText = "Ответ неверный. Нужно подумать!"
            break;
        case 'fillup':
            resultMsg.className = "result wrong_answer"
            resultMsg.innerText = "Выберите берег куда перевозить и кого!"
            break;
        case 'filesave':
            resultMsg.className = "result right_answer"
            resultMsg.innerText = "Ваш результат сохранён в файле."
            break;
        default:
            resultMsg.className = ""
            resultMsg.innerText = ""
            break;
    }
}


