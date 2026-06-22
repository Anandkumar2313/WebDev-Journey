// Color has combination of # and any 6 character of(0123456789)&(abcdef)

let button = document.getElementById("btn");
const randomColor = () => {
    let val = "0123456789abcdef";
    let fix = "#";
    for(let i=0; i<6; i++){
        fix = fix + val[Math.floor(Math.random() * 16)];  //Range of Math.random is [0,0.99]
    }
    return fix;
}

console.log(randomColor());

function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
}

button.addEventListener("click", changeRandomColor);