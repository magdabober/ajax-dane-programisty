$(document).ready(function () {
    $('body').append('<div>');
    $('div').attr('id', 'dane-programisty');
    $('#btn').click(function () {
        $.getJSON(
            "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            function (data) {
                console.log(data);
                $('#dane-programisty').append($('<p>').text('IMIĘ: ' + data.imie),
                    $('<p>').text('NAZWISKO: ' + data.nazwisko),
                    $('<p>').text('ZAWÓD: ' + data.zawod),
                    $('<p>').text('FIRMA: ' + data.firma));
            }
        );
    });
})
