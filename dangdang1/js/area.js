// 鼠标移入北京出现下拉框
var hTleft = document.getElementById("hTleft");
var hTleft1 = document.getElementById("hTleft1");
var img1 = document.getElementById("img1");
// 鼠标绑定移入事件，
hTleft.onmousemove = function(){
    this.style.backgroundColor = "#ffffff";
    // this.style.border = 1+"px"+"solide"+"red";
    hTleft1.style.display = "block";
    img1.style.transform = "rotate(180deg)";
    // img1.style.scrollTop = "5px";
   
}
// 移出事件
hTleft.onmouseleave = function(){
    this.style.backgroundColor = "#f9f9f9";
    hTleft1.style.display = "none";
    img1.style.transform = "rotate(0deg)";
}
hTleft1.onmousemove = function(){
    this.style.display = "block";

}
hTleft1.onmouseleave = function(){
    this.style.display = "none";
}

// 鼠标移入0元购物事件
var hTrli1 = document.getElementById("hTrli1");
var hTr_li1 = document.getElementById("hTr_li1");
var img2 = document.getElementById("img2");
hTrli1.onmousemove = function(){
    this.style.backgroundColor = "#ffffff";
    // this.style.border = 1+"px"+"solide"+"red";
    hTr_li1.style.display = "block";
    img2.style.transform = "rotate(180deg)";
    // img1.style.scrollTop = "5px";
}
hTrli1.onmouseleave = function(){
    this.style.backgroundColor = "#f9f9f9";
    hTr_li1.style.display = "none";
    img2.style.transform = "rotate(0deg)";
}
hTr_li1.onmousemove = function(){
    this.style.display = "block";

}
hTr_li1.onmouseleave = function(){
    this.style.display = "none";
}

// 鼠标移入全部分类
var input_1 = document.getElementById("input_1");
var input_yc = document.getElementById("input_yc");
var img3 = document.getElementById("img3");
input_1 .onmousemove = function(){
    // this.style.backgroundColor = "#ffffff";
    // this.style.border = 1+"px"+"solide"+"red";
    input_yc.style.display = "block";
    img3.style.transform = "rotate(180deg)";
    // img1.style.scrollTop = "5px";
}
input_1 .onmouseleave = function(){
    this.style.backgroundColor = "#f9f9f9";
    input_yc.style.display = "none";
    img3.style.transform = "rotate(0deg)";
}
input_yc.onmousemove = function(){
    this.style.display = "block";

}
input_yc.onmouseleave = function(){
    this.style.display = "none";
}

