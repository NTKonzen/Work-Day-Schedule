let descriptionArray = [];

$(document).ready(function () {

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