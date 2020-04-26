// Variables
console.log('Vinculado')
let number_random;
let respuesta_user= null;
let icon_vs = null;
let respuesta_machine= null;
let machine;
// Div respuestas del usuario
respuesta_user = document.getElementById("respuesta_user");
// Div icon vs
icon_vs = document.getElementById
("vs");
// Div respuestas de la maquina
respuesta_machine = document.getElementById("respuesta_machine")

// Eventos
let body = document.querySelector("body");
let piedra = document.getElementById("piedra").addEventListener('click',(e)=>{
    e.preventDefault();
    let size = detectHScreen();
    if(size===800){
        body.classList.add('porcent-100')
    } 
    let move= 'piedra'
   animationMoves(move)
   down_1000();
})
let papel = document.getElementById("papel").addEventListener('click',(e)=>{
    e.preventDefault();
    let size = detectHScreen();
    if(size===800){
        body.classList.add('porcent-100')
    }    let move= 'papel'
    animationMoves(move);
    down_1000();
})
let tijeras = document.getElementById("tijeras").addEventListener('click',(e)=>{
    e.preventDefault();
    let size = detectHScreen();
    if(size===800){
        body.classList.add('porcent-100')
    }    let move= 'tijeras'
    animationMoves(move);
    down_1000();
})
// Logica de la maquina

let CreateMove = () => {
    number_random = Math.floor(Math.random()*3);
    switch(number_random){
        case 0:
        // Piedra
        respuesta_machine='piedra';
        break;
        case 1:
        // Papel
        respuesta_machine='papel';
        break;
        case 2:
        // Tijeras
        respuesta_machine='tijeras';
        break;
    }
    return respuesta_machine;
}
let animationMoves = (move) =>{
    respuesta_user.innerHTML=`
    <button class="${move} boton-respuesta" id="user"></button>
                        `;

    icon_vs.innerHTML=`
    <img src="../img/vs_icon_650.png" class="img-fluid img_icon">
    `;
    respuesta_machine.innerHTML=`

            <button class="piedra boton-respuesta" id="piedra"></button>
            

    `
    ToggleMovements(); 
    return true;
   
}
// Animation
let ToggleMovements = () =>{
    respuesta_machine.innerHTML=`
    <button class="piedra boton-respuesta" id="machine"></button>
    `;
    let machine = document.getElementById('machine');
    let answer = CreateMove();
    setTimeout(function(){
        machine.classList.replace('piedra','tijeras');
        setTimeout(function(){
            machine.classList.replace('tijeras','papel');
            setTimeout(function(){
                machine.classList.replace('tijeras','papel');
                setTimeout(function(){
                    machine.classList.replace('papel','piedra');
                    setTimeout(function(){
                        machine.classList.replace('piedra','tijeras');
                        setTimeout(function(){
                            machine.classList.replace('tijeras','papel');
                            setTimeout(function(){machine.classList.replace('papel',answer);
                            },75);
                        },75);
                    },75);                
                },75);            
            },75);        
        },75);
    },75);
    decision(answer);
}
// Desicion
let decision = (answer) =>{
    let user = document.getElementById('user');
    let machine = answer;
    if(user.classList.contains('piedra')){
        switch(machine){
            case 'papel':
                setTimeout(()=>{
                    alert('Perdiste Weyyy!!!');
                },1000)
                break;
            case 'tijeras':
                setTimeout(()=>{
                    alert('Ganaste Weyyy!!!');
                },1000)
                break;
            case 'piedra':
                setTimeout(()=>{
                    alert('Empate!!!');
                },1000)
                break;
        }
    }
    if(user.classList.contains('papel')){
        switch(machine){
            case 'papel':
                setTimeout(()=>{
                    alert('Empate!!!');
                },780)
                break;
            case 'tijeras':
                setTimeout(()=>{
                    alert('Perdiste Weyyy!!!');
                },780)
                break;
            case 'piedra':
                setTimeout(()=>{
                    alert('Ganaste wey!!!');
                },780)
                break;
        }
    }
    if(user.classList.contains('tijeras')){
        switch(machine){
            case 'papel':
                setTimeout(()=>{
                    alert('Ganaste Weyyy!!!');
                },780)
                break;
            case 'tijeras':
                setTimeout(()=>{
                    alert('Empate!!!');
                },780)
                break;
            case 'piedra':
                setTimeout(()=>{
                    alert('Perdiste wey!!!');
                },780)
                break;
        }
    }


}
let detectWScreen =  () =>{
    let size = window.screen.width;
    return size;
}
let detectHScreen = () =>{
    let size = window.screen.height;
    return size;
}
let down_1000 =  () =>{
    let width_detected = detectWScreen();
    if(width_detected < 576){
        window.scroll({
            top: 1000,
            left: 0,
            behavior: 'smooth'
          });
    }
}



