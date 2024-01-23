const container = document.querySelector("#container")

let n = 16
let color = "blue";
let rainbowInterval;
let isRainbow = false;

createGrid(n)
changeColor()

//Skapa divs
function createGrid(n){
    color = "blue";
    let grid = n * n
    let borderSize = 2;
    let d = Math.floor(550/n)- borderSize*2;
    container.innerHTML = "";
    for (let i = 1; i <= grid; i++) {
        const div = document.createElement('div')
        div.style.cssText = "border: 2px solid black; height: " +d + "px; width: " +d + "px;"
        div.classList.add("divItem")
        container.appendChild(div)
    }
    changeColor()
    hover()
}



//Divs mouseover effekt
function hover(){
    const divs = document.querySelectorAll(".divItem");

    
    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = color;
            div.classList.add("hoveredItem");
            
        });
    
        div.addEventListener('mouseout', () => {
            setTimeout(() => {
                div.classList.remove("hoveredItem")
                div.style.backgroundColor = "white";
            }, 400);
        },
            false,
        );
    });
}



//Byt färg funktionalitet
function changeColor(){
    const btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.addEventListener('click', () =>{

            if(btn.getAttribute('id') == "rainbow"){
                console.log("pressed rainbow")
                isRainbow = true;
                window.rainbowInterval = setInterval(() => {
                        rainbow();
                    }, 700);
            }

            else if(btn.getAttribute('id') != "gridSettings" || btn.getAttribute('id') != "rainbow"){
                isRainbow = false;
                clearInterval(rainbowInterval);
                let newColor = btn.getAttribute('id');
                color = newColor
            }
        } )
    });
}



//Byt grid
const btn = document.querySelector("#gridSettings")
btn.addEventListener('click', () =>{
    let input = (prompt("What size would you like on your grid?", "16"))
    if(parseInt(input) > 0 && parseInt(input) < 100){
        createGrid(input)
    }
    else{
        alert("Input a number higher than 0 or lower than 100")
    }
})

//Regnbåge

function rainbow(){

    if(isRainbow){
        let newColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        color = newColor
    }

}