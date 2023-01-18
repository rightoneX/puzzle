const addTripBtn = document.getElementById('add-trip-btn');
const tripContainer = document.getElementById('trip-container');
const goBtn = document.getElementById('go-btn');
const result = document.getElementById('result');
// const trip_1 = document.getElementById('trip-1');
// const passenger_1 = document.getElementById('passenger-1');

// const tripData = document.querySelectorAll('trip-data');

// tripData.forEach(el => el.addEventListener('click', event => {
//   console.log(event.target.getAttribute("data-el"));
// }));
// document.body.addEventListener('click', function (evt) {
//     if (evt.target.className === 'trip-data') {
//         alert(this.);
//     }
// }, false);
let temp;
document.querySelectorAll('.trip-data').forEach(item => {
    item.addEventListener('click', event => {
     temp = this.
    })
  })

let trip = 1;

//create first trip choice
let trips = [
    { race_number: trip, passenger: 'undefined', relation: 'undefined', river_side: 0 }
]

addTripBtn.addEventListener('click', () => {
    trip++
    let nextTrip = document.createElement('div');
    nextTrip.className = "trip"
    nextTrip.innerHTML = "<div class='trip-name'>Рейс " + trip + "</div>"
        + "<select class='trip-data' class='space-selection'>"
        + "<option>Выбрать рейс</option>"
        + "<option value='1'>с лева на права</option>"
        + "<option value='2'>с права на лева</option></select >"
        + "<select id='passenger-" + trip + "' class='space-selection'>"
        + "<option>Выбрать пассажира</option>"
        + "<option value='1'>Волк</option>"
        + "<option value='2'>Коза</option>"
        + "<option value='3'>Капуста</option></select>";
    tripContainer.appendChild(nextTrip)
    trips.push({ race_number: trip, passenger: 'undefined', relation: 'undefined', river_side: 0 }) 
})

// trip_1.addEventListener('click', () => {
//     trips[0].river_side = trip_1.value;
// })

// passenger_1.addEventListener('click', () => {
//     trips[0].passenger = passenger_1.value;
//     switch (passenger_1.value) {
//         case 'wolf':
//             trips[0].relation = 'goat'
//             break;
//         case 'goat':
//             trips[0].relation = 'cabbage'
//             break;
//         case 'cabbage':
//             trips[0].relation = 'goat'
//             break;
//         default:
//             break;
//     }
// })

goBtn.addEventListener('click', () => {
    // checkResult()
    // alert(trips[0].river_side + trips[0].relation + "   " + trips[trip-1].river_side + trips[trip-1].relation)
    alert(temp)
})

function checkResult() {
    //wc -> g
    //c -> wg
    //cg <- w
    //g ->cw
    // ->gcw
    if (trip < 5) {
        return wrong()
    }
    return correct()
}




function correct() {
    result.className = "result right_answer"
    result.innerText = "Ура! Правильный ответ!"
}

function wrong() {
    result.className = "result wrong_answer"
    result.innerText = "Нужно подумать!"
}