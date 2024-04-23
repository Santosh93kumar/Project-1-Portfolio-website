$(document).ready(function(){
    $(".about_right").waypoint(function(){
        console.log("Hello")
        $(".about_right").addClass("animate__animated animate__fadeInLeft")
    },{offset:"80%"})
})
$(document).ready(function(){
    $(".about_left").waypoint(function(){
        $(".about_left").addClass("animate__animated animate__fadeInLeft")
    },{offset:"80%"})
})
$(document).ready(function(){
    $(".card_anni").waypoint(function(){
        console.log("I am Fine")
        $(".card_anni").addClass("animate__animated animate__fadeInLeft")
    },{offset: "80%"})
})
$(document).ready(function(){
    $(".skill_content").waypoint(function(){
        console.log("I am Fine")
        $(".skill_content").addClass("animate__animated animate__fadeInLeft")
    },{offset: "80%"})
})
$(document).ready(function(){
    $(".contact_content").waypoint(function(){
        console.log("I am Fine")
        $(".contact_content").addClass("animate__animated animate__fadeInLeft")
    },{offset: "80%"})
})