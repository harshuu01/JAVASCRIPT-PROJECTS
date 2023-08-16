// const btn = document.getElementById("button");
// const randomColor = () =>{
//     let val = "0123456789ABCDEF";
//     let cons  = "#";
//     for(let i=0; i<6; i++){
//         cons = cons+ val[Math.floor(Math.random()*16)];
        
//     }
//     return cons;
// }
// console.log(randomColor());

// function randomColorChanger(){
//     document.body.style.backgroundColor = randomColor();
// }
// btn.addEventListener("click" , randomColorChanger());
const button = document.getElementById("button");

button.addEventListener("click",()=>{
    const color = ["black","red","green","blue","yellow","purple","white"];

    let random = function(){
        const randomIndex = Math.floor(Math.random()*color.length);
        const randomColor = color[randomIndex];
        return randomColor;
    }
    document.body.style.background = random();
});