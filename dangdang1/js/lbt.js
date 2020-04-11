// 获取元素
var mTi_1 = document.getElementById("mTi_1")
var timerAuto = null;
var num = 0;
// var pics = document.getElementById("imgBox").getElementsByTagName("img");
var btns = document.getElementById("mTi_1_div").getElementsByTagName("div");
// window.onload = function(){
//     clock()
//     clockTwo()
// }
function clock(){
    timerAuto = setInterval(autoMove,2000)
}
function autoMove(){
    num++;
    if(num==6){
        num = 0;
    }
    // console.log(num)
    // if(num==-1){
    //     //让num等于3
    //     num=pics.length-1;
    // }
    changeBgcolor();
    move(mTi_1.scrollLeft,750*num); 
    // mTi_1.scrollLeft = 753*num;
}
function move(start,end){
    //初始步数是0
    var step = 0;
    //最大的步数是10 10步以后就走完了
    var maxStep = 10;
    var everyStep =(end-start)/maxStep;
    var time = setInterval(function(){
        step++;
        mTi_1.scrollLeft=mTi_1.scrollLeft+everyStep;
        if(step==maxStep){
            clearInterval(time);
        }
    },50)
}
// 按钮变色
function changeBgcolor(){
    for(var i=0;i<btns.length;i++){
        btns[i].style.background = "#ffffff";
    }
    btns[num].style.background = "red";
}
 //给所有的按钮绑定单击事件
 for(var i =0;i<btns.length;i++){
    btns[i].onclick = function(){
        // 清除计时器
        // 因为点击一下结束后调用一次自动轮播，再点击还会调用，这样就会是轮播的速度加倍，所以点完之后要清除计时器
        clearInterval(timerAuto);
        //判断一下是不是当前按钮
        for(var j=0;j<=btns.length;j++){
            if(this==btns[j]){
                //让当前的按钮变色
                num = j;
                changeBgcolor();
                //调用轮播函数    计时器就回累加
                move(mTi_1.scrollLeft,750*j);
            }
        }
        //单击完成以后再去执行自动轮播函数
        clock();
    }
}

