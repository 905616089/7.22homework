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
var real = 0; //销毁个数
var g = 1;//第几关;
var sum = 10;//当前关方块数量;
var nowWord = [];
var divs = [];
var speed = 5;
var num = 3;


//普通、中等、困难
function craetword(num, speed) {
    console.log(num);
    for (var i = 0; i < num; i++) {
        nowWord.push(word[Math.floor(word.length * Math.random())])
        var wordDiv = document.createElement("div");
        wordDiv.innerHTML = word[Math.floor(word.length * Math.random())];

        wordDiv.style.cssText = "font-size: 30px;font-weight: 900;color: #00AF4F;text-shadow: #009643 1px 1px, #16ff7f -1px -1px, #00c939 -2px -2px 6px, #00d861 -2px -2px, #00d861 -1px -2px, #00d861 -1px -3px, #00d861 -2px -4px, #00d861 -2px -5px, #00d861 -3px -6px, #00AF4F -4px -7px, rgba(0, 0, 5, 0.4) 3px 4px 5px, rgba(0, 0, 5, 0.2) -3px -4px 5px;transform: rotate(-2deg);position:absolute;left:" + container.offsetWidth * Math.random() + "px;top:10px;"
        container.appendChild(wordDiv);
        divs.push(wordDiv);

    }
    console.log(divs);
    function clearword(speed) {
        for (var x = 0; x < divs.length; x++) {
            if (over < 0 || over == 0) {
                clearInterval(t);
            }
            console.log(over);
            divs[x].style.top = divs[x].offsetTop + speed + "px";
            if (divs[x].offsetTop > 650) {
                divs[x].style.display = "none";
                over = over - 1;
                speed = speed + 0.1;
                divs.splice(x, 1);
                clearInterval(t)
                craetword(1, speed);
                span2.innerHTML = over;
                console.log(over);
                if (over < 0 || over == 0) {
                    span2.innerHTML = over;
                    clearInterval(t)
                    alert("游戏结束,您的得分为" + value);
                    black.innerHTML = "";
                    container.innerHTML = "";
                    value = 0;
                    divs.splice(x, 1);
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
                    clearInterval(t);
                    speed = speed + 0.1;
                    craetword(1, speed);
                    break;
                }
            }
        }
    }
    var t = setInterval(clearword, 50, speed);
}


//点击难度设置
for (let h = 0; h < btnlist.length; h++) {
    btnlist[h].onclick = function () {
        if (h == 0) {
            num = 3;
            speed = 5;
        }
        if (h == 1) {
            num = 5;
            speed = 5;
        }
        if (h == 2) {
            num = 10;
            speed = 5;
        }
        if (h == 3) {
            num = "a";
            speed = "a";
        }
        box.style.display = "none";
    }
}
//关卡
function guanka(num, speed, g, sum) {
    if (over < 0 || over == 0) { return } else {
        for (var i = 0; i < num; i++) {
            nowWord.push(word[Math.floor(word.length * Math.random())])
            var wordDiv = document.createElement("div");
            wordDiv.innerHTML = word[Math.floor(word.length * Math.random())];
            wordDiv.style.cssText = "font-size: 30px;font-weight: 900;color: #00AF4F;text-shadow: #009643 1px 1px, #16ff7f -1px -1px, #00c939 -2px -2px 6px, #00d861 -2px -2px, #00d861 -1px -2px, #00d861 -1px -3px, #00d861 -2px -4px, #00d861 -2px -5px, #00d861 -3px -6px, #00AF4F -4px -7px, rgba(0, 0, 5, 0.4) 3px 4px 5px, rgba(0, 0, 5, 0.2) -3px -4px 5px;transform: rotate(-2deg);position:absolute;left:" + container.offsetWidth * Math.random() + "px;top:10px;"
            container.appendChild(wordDiv);
            divs.push(wordDiv);
        }
        console.log(divs);
        console.log(speed);
        function clearwd(g, speed) {
            for (var x = 0; x < divs.length; x++) {
                if (over < 0 || over == 0) {
                    clearInterval(t);
                }
                divs[x].style.top = divs[x].offsetTop + speed + "px";
                if (divs[x].offsetTop > 650) {
                    divs[x].style.display = "none";
                    over = over - 1;
                    divs.splice(x, 1);
                    clearInterval(t);
                    console.log("sdasd" + sum)
                    guanka(1, speed, g, sum);
                    span2.innerHTML = over;
                    if (over < 0 || over == 0) {
                        span2.innerHTML = over;
                        clearInterval(t)
                        black.innerHTML = "";
                        container.innerHTML = "";
                        
                        num = "a";
                        speed = "a";
                        divs.splice(x, 1);
                        console.log("关卡失败" + num, speed)
                        span2.innerHTML = over;
                        span1.innerHTML = value;
                        alert("游戏结束,您的得分为" + value);
                        value = 0;
                        return;
                    }
                }
            }
            document.onkeydown = function (res) {
                var word = String.fromCharCode(res.keyCode);
                for (var i = 0; i < divs.length; i++) {
                    if (divs[i].innerHTML == word) {
                        value = value + 1;
                        real = real + 1;
                        console.log(sum);
                        if (real == sum || real > sum) {
                            clearInterval(t);
                            console.log("下关")
                            black.innerHTML = "";
                            container.innerHTML = "";
                            span2.innerHTML = over;
                            divs.splice(0, divs.length);
                            //下关数据
                            over = 3;
                            g = g + 1;
                            sum = sum + 5;
                            speed = speed + 0.2;
                            num = num + g;
                            real = 0;
                            levebeg(num, speed, g, sum)
                        } else {
                            span1.innerHTML = value;
                            container.removeChild(divs[i]);
                            divs.splice(i, 1);
                            clearInterval(t);
                            guanka(1, speed, g, sum);
                            break;
                        }
                    }
                }
            }
        }
        var t = setInterval(clearwd, 50, g, speed);
    }
}

begin.onclick = function () {
    //开始数据初始化
    over = 3;
    divs.splice(0, divs.length);
    span2.innerHTML = over;
    span1.innerHTML = value;
    if (isNaN(speed) && isNaN(num)) {
        console.log("关卡")
        num = 2; speed = 3;
        console.log(num, speed, g, sum);
        levebeg(num, speed, g, sum)
    } else {
        console.log("普通");
        console.log(num, speed);
        beg(num, speed);
    }
}
//开始前的黑屏
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
function levebeg(num, speed, g, sum) {
    var x = 3;
    span2.innerHTML = over;
    span1.innerHTML = value;
    black.style.display = "block";
    black.innerHTML = "第" + g + "关";
    setTimeout(guanka, 4000, num, speed, g, sum);
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