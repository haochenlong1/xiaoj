let gouwu=$(".lx2");
let box=$(".lx");
console.log(gouwu,box);
box.mouseenter(function(){
    gouwu.slideDown("100");
    // gouwu.style.background="#fff";
    // gouwu.style.color="#FF6B00";
});
box.mouseleave(function () {
    gouwu.slideUp("100");
});



//选项卡
let ka=$(".bodder dl dd");
let tu=$(".bodder dl dd img");
ka.mouseenter(function () {
    tu.css("display","none");
    $(this).children("img").css("display","block");
    // console.log($(this).children("img"));
});
ka.mouseleave(function () {
    tu.css("display","none");
})
//轮播图
 let banner=$(".bodder>img");
// console.log(banner);
let dot=$(".hcl_dot");
 let le=$(".hcl_left");
let ri=$(".hcl_right");
 console.log(dot);
 // let hots=$(.bodder ol .point .active);
 let now=0;
function hcl_l() {
    now++;
    if(now==4){
        now=0;
    }
    banner.css("z-index",-5).eq(now).css("z-index","-4");
    dot.removeClass("active").eq(now).addClass("active");
}
let t=setInterval(hcl_l,4000);
function moveL(){
    now--;
    if (now<0){
        now=4;
    }
    Banner.mouseover(function(){
    clearInterval(t)})
    Banner.mouseout(function(){
    t=setInterval(moveL,4000)
    });
    banner.css("z-index",-5).eq(now).css("z-index",-4);
    dot.removeClass("active").eq(now).addClass("active");
}
le.click(function () {
    moveL();
    clearInterval(t);
});
ri.click(function () {

});
banner.mouseover(function(){
    clearInterval(t)});
banner.mouseout(function(){
    t=setInterval(moveL,4000)
});


let left=$(".hcl_ft")
let right=$(".hcl_ht")
let w=$("article .second .second1").css("width").replace(/[^0-9]/g, "");
console.log(left,right,w);
let times=0;
right.click(function () {
    times++;
    if (times == 3) {
        times = 2;

    }

    $("article .second .second1").css("transform", "translate(" + (-w / 3 * times) + "px" + ")")
})
left.click(function () {
    times--;
    if (times==-1){
        times=0;
    }
    $("article .second .second1").css("transform","translate("+(-w/3*times)+"px"+")")
})