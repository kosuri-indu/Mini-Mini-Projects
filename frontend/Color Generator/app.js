let btn = document.querySelector("button");
let colors = document.querySelectorAll(".card");
let content = document.querySelectorAll("h5");

btn.addEventListener("click",function() {
    for (let i = 0; i < colors.length; i++) {
        let randomColor = getRandomColor();
        colors[i].style.backgroundColor = randomColor;
        content[i].innerHTML = `<h5>${randomColor}<br>${rgbToHex(randomColor).toUpperCase()}</h5>`;
    }
})

function getRandomColor() {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    let color = `rgb(${red},${green},${blue})`;
    return color
}

function rgbToHex(rgb) {
    const convert = (rgb) => {
        let hex = Number(rgb).toString(16);
        return hex.length < 2 ? "0" + hex : hex;
    }

    const [red, green, blue] = rgb.match(/\d+/g).map(Number);
    return "#" + convert(red) + convert(green) + convert(blue);
}