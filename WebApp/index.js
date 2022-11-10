//Kanye quotes
let quotesDiv = document.getElementById('quotes')

fetch('https://api.kanye.rest').then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
})


//Cat pics
let catButton = document.getElementById('giveCat')

catButton.addEventListener("click", evt =>{
    let catDiv = document.getElementById('catPic')

    fetch('https://api.thecatapi.com/v1/images/search?').then(res => res.json())
    .then(cats => {
        cats.forEach( cat => {
            catDiv.innerHTML = `<h3>Here is kitty</h3>
            <img src="${cat.url}" alt="Kitty" />`
        });
    })
})


//Game
let GameDiv = document.getElementById('game')
GameDiv.innerHTML = `<iframe width="100%" height="100%" src="https://www.addictinggames.com/embed/html5-games/20398" scrolling="no" style="border:none"></iframe>`


//Music
let Music = document.getElementById("Audio1")
let Song = document.getElementById("Song")
document.getElementById("Song").innerHTML = "Song: Alone"
let audio = 1;
let playing = false

function playAudio() {
    if (playing == false)
    {
        Music.play()
        playing = true
        Song.style.color = "#44FF00"
    }
    else
    {
        Music.pause()
        playing = false
        Song.style.color = "#FF7883"
    }
}

function NextAudio() {
    if(audio == 1)
    {
        Music = document.getElementById("Audio2")
        audio = 2
        document.getElementById("Song").innerHTML = "Song: Deep"
    }
    else
    {
        Music = document.getElementById("Audio1")
        audio = 1
        document.getElementById("Song").innerHTML = "Song: Alone"
    }
}


//Dice
function DiceRoll(num,Die)
{
    let DICEURL = "https://rolz.org/api/?" + num + "d" + Die + ".simple"
    fetch(DICEURL).then(res => res.json())
    .then(Dice => {
        document.getElementById('die').innerHTML = Dice
        let DieColor = document.getElementById('die');

        if(Die == 6 && num == 1)
        {
            document.getElementById('DiceImage').innerHTML = `<img src="Dice/D6/${Dice}.jpg" alt="DiceImage" />`
        }
        else if(Die == 20 && num == 1)
        {
            document.getElementById('DiceImage').innerHTML = `<img src="Dice/D20/${Dice}.jpg" alt="DiceImage" />`
        }
        else
        {
            document.getElementById('DiceImage').innerHTML = ``
        }

        if(Dice == Die*num)
        {
            DieColor.style.color = "#44FF00"
        }
        else if(Dice > (num*Die)/2)
        {
            DieColor.style.color = "#0078D3"
        }
        else
        {
            DieColor.style.color = "#FF7883"
        }
    })
}


//styling
function setStyle() {

    let Body = document.getElementById('Body');

    Body.style.backgroundColor = "#3D3D3D";
    Body.style.color = "#F7F7FF";
}
