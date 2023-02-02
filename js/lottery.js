var idle = true;
var timer = null;
var curIndex = 0;


function lottery() {
    if (idle) {
        idle = false;
        let number = document.getElementById("number");
        timer = setInterval(() => {
            curIndex = parseInt((Math.random() * numberArr.length * 100) % numberArr.length);
            let curNum = numberArr[curIndex];
            number.innerHTML = `<div class="singlenumber">${curNum[0]}</div>
            <div class="singlenumber">${curNum[1]}</div>
            <div class="singlenumber">${curNum[2]}</div>`;
        }, 100);
    } else {
        let data = JSON.parse(localStorage.getItem("luckynum"));
        if (data == null) {
            data = [];
        }
        data.push(numberArr[curIndex]);
        idle = true;
        numberArr.splice(curIndex, 1);
        clearInterval(timer);
        localStorage.setItem("luckynum", JSON.stringify(data));
        showlist();
    }
}

function setElementOffset(el, {x, y}) {
    if(el) {
        if(x !== undefined) {
            el.style.left = `${x}px`
        }
        if(y !== undefined) {
            el.style.top = `-${y}px`
        }
    }
}
