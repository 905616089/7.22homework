var word = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var container = document.querySelector(".container");
var begin = document.querySelector(".begin");
var black = document.querySelector(".black");
var span1 = document.querySelector(".value .values");
var span2 = document.querySelector(".heart .values");
var leve = document.querySelector(".leve");
var box = document.querySelector(".box");
var btnlist = document.querySelectorAll(".box button")
var over = 3;
var value = 0;
span2.innerHTML = over;
span1.innerHTML = value;
var nowWord = [];
var divs = [];
var speed = 5;
var num = 3;

function craetword(num, speed) {
    for (var i = 0; i < num; i++) {

        nowWord.push(word[Math.floor(word.length * Math.random())])

        var wordDiv = document.createElement("div");
        wordDiv.innerHTML = word[Math.floor(word.length * Math.random())];

        wordDiv.style.cssText = "font-size: 30px;font-weight: 900;color: #00AF4F;text-shadow: #009643 1px 1px, #16ff7f -1px -1px, #00c939 -2px -2px 6px, #00d861 -2px -2px, #00d861 -1px -2px, #00d861 -1px -3px, #00d861 -2px -4px, #00d861 -2px -5px, #00d861 -3px -6px, #00AF4F -4px -7px, rgba(0, 0, 5, 0.4) 3px 4px 5px, rgba(0, 0, 5, 0.2) -3px -4px 5px;transform: rotate(-2deg);position:absolute;left:" + container.offsetWidth * Math.random() + "px;top:10px;"

        container.appendChild(wordDiv);
        divs.push(wordDiv);

    }
    console.log(divs);
    function clearword(speeds) {
        for (var x = 0; x < divs.length; x++) {
            divs[x].style.top = divs[x].offsetTop + speeds + "px";
            if (divs[x].offsetTop > 650) {
                divs[x].style.display = "none";
                over = over - 1;
                craetword(1);
                span2.innerHTML = over;
                console.log(over);
                if (over < 0 || over == 0) {
                    span2.innerHTML = over;
                    clearInterval(t)
                    alert("游戏结束,您的得分为" + value);
                    black.innerHTML = "";
                    container.innerHTML = "";
                    over = 3;
                    value = 0;
                    span2.innerHTML = over;
                    span1.innerHTML = value;
                    return;
                }
            }
        }
        document.onkeydown = function (res) {
            var word = String.fromCharCode(res.keyCode);
            for (var i = 0; i < divs.length; i++) {
                if (divs[i].innerHTML == word) {
                    value = value + 1
                    console.log(value)
                    span1.innerHTML = value;
                    container.removeChild(divs[i]);
                    divs.splice(i, 1);
                    craetword(1)
                    break;
                }
            }
        }
    }
    var t = setInterval(clearword, 50, speed);

}

begin.onclick = function () {
    console.log(num, speed);

    beg(num, speed)

}

function beg(num, speed) {
    var x = 3;
    black.style.display = "block";
    setTimeout(craetword, 4000, num, speed);
    var y = setInterval(() => {
        if (x == 0) {
            clearInterval(y);
            black.style.display = "none";

        }
        black.innerHTML = x;
        x = x - 1;

    }, 1000);
}

leve.onclick = function () {
    box.style.display = "block";
}

for (let h = 0; h < btnlist.length; h++) {
    btnlist[h].onclick = function () {
        if (h == 0) {
            num = 3;
            speed = 5;
        }
        if (h == 1) {
            num = 5;
            speed = 6;
        }
        if (h == 2) {
            num = 10;
            speed = 7;
        }
        box.style.display = "none";
    }
}



