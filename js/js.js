window.onload=function(){

    const slide=document.querySelector("#main_img");
    const best=document.querySelector("#best_menu");
    const news=document.querySelector("#news");

    const slideHeight=document.querySelector("#main_img").offsetHeight;
    const bestHeight=document.querySelector("#best_menu").offsetHeight;
    const newsHeight=document.querySelector("#news").offsetHeight;
    console.log(newsHeight);

    
}   

$(document).ready(function(){

    var slide=0;
    setInterval(function(){
        
        if(slide<2){
            slide++;
        }else{
            slide=0;
        }

        $(".slide_wrap").animate({left:-100*slide+"vw"},1000);
    },4000);

    var num=0;
    $(".arrow").click(function(){
        if(num<3){
            num+=1;
        }else{
            num=0;
        }
        $(".prod_name").eq(num).siblings("div").addClass("none_prod");
        $(".prod_name").eq(num).addClass("show_prod").removeClass("none_prod");
        $(".donut").animate({left:-25*num+"%"});
        $(".donut li").eq(num).addClass("op100").siblings().removeClass("op100");
    })

    $(".bar_btn").click(function(){
        $(".box").toggleClass("left");
    })

    $(".subs").click(function(){
        if($("#agree").is(":checked")==false){
            alert("개인정보수집에 동의 해주세요.")
        }
    })
    

})