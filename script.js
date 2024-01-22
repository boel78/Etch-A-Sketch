const container = document.querySelector("#container")

//Skapa divs
for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div')
    div.style.cssText = "border: 2px solid black; height: 30px; width: 30px;"
    div.classList.add("divItem")
    container.appendChild(div)
}


//Divs mouseover effekt
const divs = document.querySelectorAll(".divItem");

let color = "blue";

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


//Byt färg funktionalitet
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        let newColor = btn.getAttribute('id');
        color = newColor
    } )
});
