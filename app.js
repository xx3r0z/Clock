const mainContainer = document.querySelector('#mainContainer')
const todayDay = document.querySelector('#todayDay h2');
const todaydate = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const hour = document.querySelector('#hour');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const amPm = document.querySelector('#amPm')

// Call all functions
chngeBackground();
setInterval(callAllfunctions, 1000)

function callAllfunctions (){
    getAllDates();
    getDayOfWeek();
    getTime();
    amPmTime();
}

function getAllDates (){
    let date = new Date();

    // Assign date to the innerText
    todaydate.innerText = `${addZero(date.getDate())}`;
    
    //Assign month to the innerText
    month.innerText = addZero(date.getMonth());

    //Assign year to the innerText
    year.innerText = date.getFullYear();
}

function getDayOfWeek (){
    //Using Switch to get the Day
    let day;

    day = new Date().getDay()
    switch (day){
        case 0 :
            todayDay.innerText = 'Sunday';
            break;
        case 1 :
            todayDay.innerText = 'Monday';
            break;
        case 2 :
            todayDay.innerText = 'Tuesday';
            break;
        case 3 :
            todayDay.innerText = 'Wednesday';
            break;
        case 4 :
            todayDay.innerText = 'Thursday';
            break;
        case 5 :
            todayDay.innerText = 'Friday';
            break;
        case 6 :
            todayDay.innerText = 'Saturday';
            break;
    }
}

function getTime (){
    let dateTime = new Date();

    hour.innerText = addZero(dateTime.getHours());
    minutes.innerText = addZero(dateTime.getMinutes());
    seconds.innerText = `:${addZero(dateTime.getSeconds())}`;
}

//Adds Zero to the value if it is less than 10
function addZero (innerValue) {
    if (innerValue < 10) {
        innerValue = `0${innerValue}`
    }
    return innerValue;
}

//To add the AM/PM 
function amPmTime (){
    let totalTime = new Date().getHours();

if (totalTime > 12) {
    amPm.innerText = 'PM';
} else {
    amPm.innerText = 'AM';
}
}


//Change Background according to time
function chngeBackground (){
    let recentTime = new Date().getHours();
    if (recentTime >= 19 || recentTime < 6){
        mainContainer.classList.toggle('nightTime');
    } else if (recentTime >= 18 || recentTime === 6) {
        mainContainer.classList.toggle('eveningTime');
    } else {
        mainContainer.classList.toggle('dayTime');
    }
}

chngeBackground();

