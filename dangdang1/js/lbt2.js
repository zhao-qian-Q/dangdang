
// 实现底部盒子轮播效果
var mTpl_2_down = document.getElementById("mTpl_2_down");
var num1 = 0;
var timer1 = null;
var bootns = document.getElementById("bootns").getElementsByTagName("div");
// window.onload = function(){
//     clockTwo()
// }
// 自动轮播
function clockTwo(){
     timer1 = setInterval(timeMove,2000)
}
function timeMove(){
    num1++;
    if(num1==3){
        num1 = 0;
    }
    changDivcolor()
    move1(mTpl_2_down.scrollLeft,750*num1);
}
// 让轮播图走的满一些
function move1(start,end){
    var stap1 = 0;
    var maxStap1 = 10;
    var everyStap1 = (end-start)/maxStap1;
    var timer2 = setInterval(function(){
        stap1++;
        mTpl_2_down.scrollLeft =  mTpl_2_down.scrollLeft+everyStap1;
        if(stap1==maxStap1){
            clearInterval(timer2)
        }

    },50)
}

// 按钮跟随变色
// 遍历按钮数组
function changDivcolor(){
    for(var i=0;i<bootns.length;i++){
        bootns[i].style.background = "red";
        // console.log(i)
    }
    bootns[num1].style.background = "yellow";
    // console.log(num1)
}

for(var i =0;i<bootns.length;i++){
    bootns[i].onclick = function(){
        // 清除计时器
        clearInterval(timer1);
        //判断一下是不是当前按钮
        for(var j=0;j<=btns.length;j++){
            if(this==bootns[j]){
                //让当前的按钮变色
                num1 = j;
                changDivcolor();
                //调用轮播函数    计时器就回累加
                move1(mTpl_2_down.scrollLeft,750*j);
            }
        }
        //单击完成以后再去执行自动轮播函数
        clockTwo();
    }
}

// 绑定左按钮事件
btnLeft.onclick = function(){
    clearInterval(timer1);
    num1-=2;
    timeMove();
    clockTwo();
}
// 绑定右击事件
btnRight.onclick = function(){
    clearInterval(timer1);
    // num1+=2;
    timeMove();
    clockTwo()
}