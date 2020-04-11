// var returnTop = document.getElementById("returnTop");
// var rImg = document.getElementById("rImg");

// returnTop.onclick = function(){

// }
window.onload = function(){
    var returnTop = document.getElementById("returnTop");
    console.log(returnTop);
    var timer = null;
    console.log(timer)
    // 鼠标单击事件
    returnTop.onclick = function(){
         timer = setInterval(function(){
            var scrT = document.body.scrollTop||document.documentElement.scrollTop;
            document.body.scrollTop-=100;
            document.documentElement.scrollTop-=100;
            console.log(scrT);
        
            if(scrT==0){
                clearInterval(timer)
            }
        },20)
    }
    clock()
    clockTwo()
}
// 向上符号隐藏
window.onscroll = function(){
    var scrT = document.body.scrollTop||document.documentElement.scrollTop;
    if(scrT>document.documentElement.clientHeight){
        returnTop.style.display = "block";
    }else{
        returnTop.style.display = "none";
    }
}