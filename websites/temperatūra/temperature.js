var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
//
var Name = document.querySelector('.Name');
var description = document.querySelector('.description');
var temp = document.querySelector('.temp');



button.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&APPID=6f1558b925aa1df25df1cb4ba631d752')
    .then(response => response.json())
    .then(data => {
       
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        Name.innerHTML = nameValue;
        temp.innerHTML = Math.ceil(tempValue -  273.15) + "&#730" + "C";//;
        description.innerHTML = descValue;

        inputValue.value = "";

    })
    .catch(err => alert("Wrong city name!"))
})

