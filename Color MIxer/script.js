let color1,color2, inputval1, inputval2;

color1= document.getElementById("color1");
color2= document.getElementById("color2");

const resultColor= document.getElementById("resultColor");

function valueAssign(){
    inputval1 = color1.value.toLowerCase();
    inputval2 = color2.value.toLowerCase();
    console.log(inputval1);
    console.log(inputval2);

    switch(true){
        case inputval1== "red"&& inputval2=="blue":
            resultColor.innerText="purple";
            document.body.style.backgroundColor="purple";
            break;
        case inputval1 == "blue" && inputval2 == "red":
                resultColor.innerText = "purple";
                document.body.style.backgroundColor = "purple";
          
                break;
        case inputval1 == "red" && inputval2 == "yellow":
                    resultColor.innerText = "orange";
                    document.body.style.backgroundColor = "orange";
              
                    break;
              
        case inputval1 == "yellow" && inputval2 == "red":
                    resultColor.innerText = "orange";
                    document.body.style.backgroundColor = "orange";
              
                    break;
              
        case inputval1 == "yellow" && inputval2 == "blue":
                    resultColor.innerText = "green";
                    document.body.style.backgroundColor = "green";
              
                    break;
        case inputval1 == "blue" && inputval2 == "yellow":
        resultColor.innerText = "green";
        document.body.style.backgroundColor = "green";

                    break;
        default:
            resultColor.innerText="Invalid color Combination";
            document.body.style.backgroundColor="white";
            break;
                  
    }

}