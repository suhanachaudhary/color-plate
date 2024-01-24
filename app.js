const container=document.querySelector(".container");
const refreshbtn=document.querySelector(".refresh-btn");

const maxPaletteboxes=30;
const generatePalette=()=>{
    container.innerHTML="";
    for(let i=1;i<=maxPaletteboxes;i++){
        let randomHex=Math.floor(Math.random()*0xffffff).toString(16);
        randomHex=`#${randomHex.padStart(6,"0")}`;
        
        const color=document.createElement("li");
        color.classList.add("color");
        color.innerHTML=`<div class="box" style="background:${randomHex}"></div>
        <span class="hex_value">${randomHex}</span>`

        color.addEventListener("click",()=>copyColor(color,randomHex));

        container.appendChild(color);
    }
}
generatePalette();
container
const copyColor=(ele,hexvalue)=>{
    const colorele=ele.querySelector(".hex_value");

    //copy the hexvalue updating the text to copy
    //changing the text to original hex value

    navigator.clipboard.writeText(hexvalue).then(()=>{
    colorele.innerText="copied";
    setTimeout(()=>colorele.innerText=hexvalue,1000)
    });
}

refreshbtn.addEventListener("click", generatePalette);