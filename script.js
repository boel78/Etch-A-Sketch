const container = document.querySelector("#container")

for(let i = 1; i <=256; i++){
    const div = document.createElement('div')
    div.style.cssText = "border: 2px solid black; height: 30px; width: 30px;"
    div.classList.add("divItem")
    container.appendChild(div)
}