/** Simulator
 * @author Gabriel Lima de Andrade
 */
let receive , sw1 = false , sw2 = false
    


 function quebrar(receive) {
   
    if(receive === 1 && sw1 === false){
        document.getElementById("sw1").src="img/swon.png"
        sw1 = true
    } else if (receive === 1 && sw1 === true) {
        document.getElementById("sw1").src="img/swoff.png"
        sw1 = false
    }
    if(receive === 2 && sw2 === false){
        document.getElementById("sw2").src="img/swon.png"
        sw2 = true
    } else if (receive === 2 && sw2 === true) {
        document.getElementById("sw2").src="img/swoff.png"
        sw2 = false
    }
    if (sw1 === true && sw2 === true ){
        document.getElementById("lamp").src="img/on.jpg"
    } else {
        document.getElementById("lamp").src="img/off.jpg"
    }

    if (receive === 3) {
        let som = new Audio ()
        som.src = "sound/glassbreaking.wav"
        som.play()
        document.getElementById("lamp").src="img/broken.jpg"
        receive = "broken"
        
    
    }
    
   
 }

