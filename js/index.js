$(".header").click(function(){
    /*$(".menu-area").css("background-color","rgb(255,255,255)")
    $(".menu-area").css("height", "100%")*/
    //$(".menu-area").addClass("active"); //this style of writing is unique to jquery!!

    $(".header").toggleClass("active");
}) 

$(".select-card").hover(function(){
    //$(".select-card").css("scale", "1.05")
    $(this).css("scale","1.02");//selects the specific one instead of all of them with the tag "this"
}, function(){
    $(this).css("scale","1");
}
)
//z index is css property to change layer of item, the earlier, the more bottom an item is
//have to hard code the click function for each card, don't use this, use card1 card2 card3 and make the other cards on lower layer positions in the function.
//figure out how to add text dynamically with js
$(".select-card").click(function(){
    $(this).toggleClass("card-expand");
    /*$(this).css("z-index", "+2")
    $("card2").css("z-index", "-3")
    $("card3").css("z-index", "-3")*/
})

/*$(".card2").click(function(){
    $(this).toggleClass("card-expand");
    $(this).css("z-index", "+2")
    $("card1").css("z-index", "-2")
    $("card3").css("z-index", "-2")
})

$(".card3").click(function(){
    $(this).toggleClass("card-expand");
    $(this).css("z-index", "+2")
    $("card1").css("z-index", "-2")
    $("card2").css("z-index", "-2")
})*/
