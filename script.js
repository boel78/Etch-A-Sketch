const container = document.querySelector("#container")

for(let i = 1; i <=256; i++){
    const div = document.createElement('div')
    div.style.cssText = "border: 2px solid black; height: 30px; width: 30px;"
    div.classList.add("divItem")
    container.appendChild(div)
}

const divs = document.querySelectorAll(".divItem");

divs.forEach(div =>{
    div.addEventListener('mouseover', () =>{
        div.classList.add("hoveredItem");
    });

    div.addEventListener('mouseout', () =>{
        setTimeout(() => {
            div.classList.remove("hoveredItem")
          }, 400);
        },
        false,
      );
    });
