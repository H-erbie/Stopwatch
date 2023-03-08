window.onload = function(){
    //declare variables
    var tens = 00;
    var seconds = 00;
    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');
    var start = document.getElementById('start')
    var stop = document.getElementById('stop')
    var reset = document.getElementById('reset')
    var interval;

    //set functions for the various buttons
    start.onclick = function() {
        clearInterval(interval);
        interval = setInterval(setTimer, 10);
    }
    stop.onclick = function(){
        clearInterval(interval);
    
}
    
    reset.onclick = function(){
        clearInterval(interval)
        tens = '00';
        seconds = '00';
        appendSeconds.innerHTML = '00';
        appendTens.innerHTML = '00';
            }
    
            //set the function for the real deal(the timer itself)
    function setTimer() {
        tens++
        if(tens <= 9){
            appendTens.innerHTML = '0' + tens;
        }
        if (tens > 9){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            console.log('seconds')
            tens = 0;
            appendTens.innerHTML = '0' + tens;
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }

    }