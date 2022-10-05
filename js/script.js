
document.querySelector('input').placeholder = "City Name";

const getInfoBtn = document.querySelector('button');
const inputBox = document.querySelector('input');
const locale = document.getElementById('local');
const temp = document.getElementById('temp');
const feel = document.getElementById('feels');
const weather = document.getElementById('current');

const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&units=imperial&appid=c0332f214fd1e9a8b4334f5909bf6fbf`


getInfoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&units=imperial&appid=c0332f214fd1e9a8b4334f5909bf6fbf`
    console.log(inputBox.value)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        locale.innerText = `Weather for: ${data.name}`
        temp.innerText = `Temperature: ${data.main.temp} \u00B0F` 
        feel.innerText = `Feels Like: ${data.main.feels_like} \u00B0F`
        weather.innerText = `Current Conditions: ${data.weather[0].description}`
        
    })

})
