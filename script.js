const darkModeSwitch = document.querySelector('.dark-mode-switch');
darkModeSwitch.onclick = () => {
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('body').classList.toggle('light');
}

// checking leap year
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 4 !== 0) ||  (year % 100 === 0 && year % 400 === 0)
}


getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
}

let calendar = document.querySelector('.calendar');

const monthNames = ['January','February','March','April','May','June','July','August','September', 'October','November','December',];

let monthPicker = document.querySelector('#month-picker')

monthPicker.onclick = () => {
    monthList.classList.add('show');
}

// generate calendar

generateCalendar = (month,year) => {
    let calendarDays = document.querySelector('.calendar-days');
    calendarDays.innerHTML = '';
    let calendarHeaderYear = document.querySelector('#year');

    let daysOfMonth = [31, getFebDays(year) , 31 , 30 , 31, 30, 31, 31, 30, 31, 30, 31];

    let currentDate = new Date();

    monthPicker.innerHTML = monthNames[month];
    calendarHeaderYear.innerHTML = year;

    let firstDay = new Date(month, year, 1);

    for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {
        let day = document.createElement('div');
        if (i >= firstDay.getDay()) {
            day.classList.add('calendar-day-hover');
            day.innerHTML = i - firstDay.getDay() + 1;
            day.innerHTML += `<span> </span>
                              <span> </span>
                              <span> </span>
                              <span> </span>
                              <span> </span>`
            if (i - firstDay.getDay() + 1 === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }       
        calendarDays.appendChild(day);
    }
}

let monthList = calendar.querySelector('.month-list');

monthNames.forEach((e,i) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;
    month.onclick = () => {
        monthList.classList.remove('show');
        currMonth.value = i;
        generateCalendar(currMonth.value,currYear.value)
    }
    monthList.appendChild(month);
})

const prevYear = document.querySelector('#prev-year');
prevYear.onclick = () => {
    --currYear.value;
    generateCalendar(currMonth.value,currYear.value);
}

const nextYear = document.querySelector('#next-year');
nextYear.onclick = () => {
    ++currYear.value;
    generateCalendar(currMonth.value,currYear.value )
}
let currDate = new Date();
console.log(currDate);

let currMonth = {value: currDate.getMonth()};
console.log(currMonth.value);

let currYear = {value : currDate.getFullYear()};

generateCalendar(currMonth.value, currYear.value)