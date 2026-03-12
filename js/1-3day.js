var weatherCounter1 = 0;
var weatherCounter2 = 0;
var weatherCounter3 = 0;
var weatherCounter4 = 0;

var weatherCounter5 = 0;
var weatherCounter6 = 0;
var weatherCounter7= 0;
var weatherCounter8 = 0;

var weatherCounter9 = 0;
var weatherCounter10 = 0;
var weatherCounter11 = 0;
//var weatherCounter12 = 0;

var displayCounter = 0;
//$("#main-grid").hide()
$(".cold").hide()
$(".luke").hide()
$(".warm").hide()
$(".wet").hide()
$(".sun").hide()

//think about making everything in main grid hidden at the start and appearing as the user selects
$(".-0").click(function(){
    console.log("negzero clicked")
    weatherCounter1 = weatherCounter1 +1;
    if(weatherCounter1 % 2 != 0){ //selected
        $(".-0").addClass("filter-toggle")
        //$("#main-grid div:not(.cold)").hide()
        $(".cold").show()
        
        displayCounter =$("#main-grid").children(":visible").length;
    }
    if(weatherCounter1 % 2 == 0){ //deselected
        $(".-0").removeClass("filter-toggle")
    }
})
$(".0-10").click(function(){
    console.log("zeroten clicked")
    weatherCounter2 = weatherCounter2 +1;
    if(weatherCounter2 % 2 != 0){ //selected
        $(".0-10").addClass("filter-toggle")
        //$("#main-grid div:not(.cold)").hide()
        $(".cold").show()
        
        displayCounter =$("#main-grid").children(":visible").length;
    }
    if(weatherCounter2 % 2 == 0){ //deselected
        $(".0-10").removeClass("filter-toggle")
    }
})
$(".10-15").click(function(){
    console.log("10-15 clicked")
    weatherCounter3 = weatherCounter3 +1;
    if(weatherCounter3 % 2 != 0){ //selected
        $(".10-15").addClass("filter-toggle")
        //$("#main-grid div:not(.luke)").hide()
        $(".luke").show()
        
        displayCounter =$("#main-grid").children(":visible").length;
    }
    if(weatherCounter3 % 2 == 0){ //deselected
        $(".10-15").removeClass("filter-toggle")
    }
})
$(".15-20").click(function(){
    console.log("15-20 clicked")
    weatherCounter4 = weatherCounter4 +1;
    if(weatherCounter4 % 2 != 0){ //selected
        $(".15-20").addClass("filter-toggle")
        //$("#main-grid div:not(.luke)").hide()
        $(".luke").show()
        
        displayCounter =$("#main-grid").children(":visible").length;
    }
    if(weatherCounter4 % 2 == 0){ //deselected
        $(".15-20").removeClass("filter-toggle")
    }
})
$(".20-25").click(function(){
    console.log("20-25 clicked")
    weatherCounter5 = weatherCounter5 +1;
    if(weatherCounter5 % 2 != 0){ //selected
        $(".20-25").addClass("filter-toggle")
        //$("#main-grid div:not(.warm)").hide()
        $(".warm").show()
        
        displayCounter =$("#main-grid").children(":visible").length;
    }
    if(weatherCounter5 % 2 == 0){ //deselected
        $(".20-25").removeClass("filter-toggle")
    }
})
$(".25+").click(function(){ //why does this not work?!????
    console.log("25+ clicked")
    weatherCounter6 = weatherCounter6 +1;
    if(weatherCounter6 % 2 != 0){ //selected
        $(".25+").addClass("filter-toggle")
        //$("#main-grid div:not(.warm)").hide()
        $(".warm").show()
        
        displayCounter =$("#main-grid").children(":visible").length;
    }
    if(weatherCounter6 % 2 == 0){ //deselected
        $(".25+").removeClass("filter-toggle")
    }
})
$(".sunny").click(function(){ //currently shows despite other weather selected
    console.log("sunny clicked")
    weatherCounter7 = weatherCounter7 +1;
    if(weatherCounter7 % 2 != 0){ //selected
        $(".sunny").addClass("filter-toggle")
        //$("#main-grid div:not(.sun)").hide()
        $(".sun").show()
        
        displayCounter =$("#main-grid").children(":visible").length;
    }
    if(weatherCounter7 % 2 == 0){ //deselected
        $(".sunny").removeClass("filter-toggle")
    }
})

//add the rest of the buttons


$(".reset").click(function(){ //clear all filters
    console.log("clear all filters")
    weatherCounter1 = 0;
    weatherCounter2 = 0;
    weatherCounter3 = 0;
    weatherCounter4 = 0;

    weatherCounter5 = 0;
    weatherCounter6 = 0;
    weatherCounter7= 0;
    weatherCounter8 = 0;

    weatherCounter9 = 0;
    weatherCounter10 = 0;
    weatherCounter11 = 0;

    $(".cold").hide()
    $(".luke").hide()
    $(".warm").hide()
    $(".wet").hide()
    $(".sun").hide()

    $(".filter-item").removeClass("filter-toggle")
})