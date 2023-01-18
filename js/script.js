const addTripBtn = document.getElementById('add-trip-btn');
const tripContainer = document.getElementById('trip-container');
const goBtn = document.getElementById('go-btn');
const result = document.getElementById('result');
let trip = 1;

addTripBtn.addEventListener('click', () => {
    trip++
    let nextTrip = document.createElement('div');
    nextTrip.className = "trip trip_" + trip
    nextTrip.innerHTML = "<div class='trip-name'>Рейс " + trip + "</div>"
        + "<select name='trip_" + trip + "' class='space-selection'>"
        + "<option>Выбрать рейс</option>"
        + "<option value='here'>с лева на права</option>"
        + "<option value='there'>с права на лева</option></select >"
        + "<select name='passenger_" + trip + "' class='space-selection'>"
        + "<option>Выбрать пассажира</option>"
        + "<option value='wolf'>Волк</option>"
        + "<option value='goat'>Коза</option>"
        + "<option value='cabbage'>Капуста</option></select>";
    tripContainer.appendChild(nextTrip)
})

goBtn.addEventListener('click', () => {
    checkResult()
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
    return win()

}

function win() {
    result.className = "result right_answer"
    result.innerText = "Ура! Правильный ответ!"
}

function wrong() {
    result.className = "result wrong_answer"
    result.innerText = "Нужно подумать!"
}