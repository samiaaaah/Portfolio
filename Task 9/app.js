let currentLight='red';


function changeLight(){
    const redLight =document.querySelector('.red-light');
    const orangeLight=document.querySelector('.orange-light');
    const yellowLight=document.querySelector('.yellow-light');
    
    const greenLight=document.querySelector('.green-light');


    switch(currentLight){
        case "red":
            redLight.style.opacity=1;
            orangeLight.style.opacity=0.3;
            yellowLight.style.opacity=0.3;
            greenLight.style.opacity=0.3;
            currentLight = "orange"; 
            break;
        case "orange":
            redLight.style.opacity=0.3;
            orangeLight.style.opacity=1;
            yellowLight.style.opacity=0.3;
            greenLight.style.opacity=0.3;
            currentLight = "yellow"; 
            break;
        case "yellow":
            redLight.style.opacity=0.3;
            orangeLight.style.opacity=0.3;
            yellowLight.style.opacity=1;
            greenLight.style.opacity=0.3;
            currentLight = "green"; 
            break;
        case "green":
            redLight.style.opacity=0.3;
            orangeLight.style.opacity=0.3;
            yellowLight.style.opacity=0.3;
            greenLight.style.opacity=1;
            currentLight = "red"; 
            break;
        default:
            break;

            
    }
    setTimeout(changeLight,2000)
}
changeLight();