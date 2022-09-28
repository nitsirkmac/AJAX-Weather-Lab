// uses search form to show weather in any city the user searches for


//API Key: c0332f214fd1e9a8b4334f5909bf6fbf

document.querySelector('input').placeholder = "City Name";

const getInfoBtn = document.querySelector('button');
const inputBox = document.querySelector('input');


const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputBox}&appid=c0332f214fd1e9a8b4334f5909bf6fbf`


getInfoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(inputBox.value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${inputBox.value} &appid=c0332f214fd1e9a8b4334f5909bf6fbf`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
    
})

// const locale = document.getElementByID('#local');
// 