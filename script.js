let descriptionArray = [];

let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

$(document).ready(function () {

    let date = new Date();
    
    console.log(`Today is ${days[date.getDay()]}`);
    

    $('#currentDay').text(`Today is ${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`)

    $('#dateDisplay').text(`${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`)

    $('.description').each(input => {

        if (localStorage.getItem('descriptions') !== null) {
            $('.description')[input].value = JSON.parse(localStorage.getItem('descriptions'))[input]
        }

    })

    // I still need to make the save buttons only save their values, not everything

    let save = event => {
        event.preventDefault();
        event.stopPropagation();

        $('.description').each(input => {
            descriptionArray.push($('.description')[input].value)
        })

        localStorage.setItem('descriptions', '')

        localStorage.setItem('descriptions', JSON.stringify(descriptionArray))
    }

    $('.saveBtn').click(save);

    $('.description').keypress(function(event) {
        if (event.key === 'Enter') {
            console.log(event.key);
            save(event);
        }
    })


});