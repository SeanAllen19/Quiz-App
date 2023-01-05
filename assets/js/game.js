var timeHeader = document.querySelector('h3')
var timeSecond = 5;
displayTime(timeSecond)

var countDown = setInterval( () => {
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond < 0){
        endTime()
        clearInterval(countDown)
    }
}, 1000)

function displayTime(second) {
    var min = Math.floor(second / 60);
    var sec = Math.floor(second % 60);
    timeHeader.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10? '0' : ''}${sec}`;
}

function endTime() {
    timeHeader.innerHTML = 'Something new'
}