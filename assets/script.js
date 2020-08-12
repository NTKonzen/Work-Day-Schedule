let descriptionArray = [];

let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

$(document).ready(function () {

    let date = new Date();

    $('#currentDay').text(`Today is ${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`)

    $('#dateDisplay').text(`${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`)

    $('.description').each(input => {


        $('.description')[input].classList.remove('past');
        $('.description')[input].classList.remove('present');
        $('.description')[input].classList.remove('future');

        
        if ($('.description')[input].getAttribute("data-hour") < date.getHours()) {
            $('.description')[input].classList.add('past')
        } else if ($('.description')[input].getAttribute("data-hour") == date.getHours()) {
            $('.description')[input].classList.add('present')
        } else if ($('.description')[input].getAttribute("data-hour") > date.getHours()) {
            $('.description')[input].classList.add('future')
        }

        if (localStorage.getItem('descriptions') !== null) {
            $('.description')[input].value = JSON.parse(localStorage.getItem('descriptions'))[input];
            descriptionArray[input] = JSON.parse(localStorage.getItem('descriptions'))[input];
        } else {
            descriptionArray[input] = ''
        }


    })



    // I still need to make the save buttons only save their values, not everything

    let save = event => {
        event.preventDefault();
        event.stopPropagation();

        let hour = event.currentTarget.getAttribute('data-hour')
        
        descriptionArray[hour-9] = $(`[data-hour=${hour}]`)[0].value

        localStorage.setItem('descriptions', '')

        localStorage.setItem('descriptions', JSON.stringify(descriptionArray))
    }

    $('.saveBtn').click(save);

    $('#saveAllBtn').click(event => {
        event.stopPropagation();
        event.preventDefault();

        console.log($(this));

        descriptionArray = [];

        $('.description').each(input => {
            console.log($($('.description')[input]).val())
            descriptionArray.push($($('.description')[input]).val());
            localStorage.setItem('descriptions', JSON.stringify(descriptionArray))
        })
        
    })

    $('.description').keypress(function(event) {
        if (event.key === 'Enter') {
            save(event);
        }
    })


});