let endDate = new Date('01/10/2024 12:00 AM').getTime();
let maxLength = 100 ;
const duration = $("#duration .about-duration .singer");

// !---SiteBar
$(".open-siteBar").on('click' , function() {
    $("#siteBar .links").animate({width:"toggle"},1000)
});

// !----Duration
$(".singer").on("click" , function(){
    $(".about").animate({ height: "toggle" }, 1000);
})
$(".singer-1").on("click", function () {
  $(".about-1").animate({ height: "toggle" }, 1000);
});
$(".singer-2").on("click", function () {
  $(".about-2").animate({ height: "toggle" }, 1000);
});
$(".singer-3").on("click", function () {
  $(".about-3").animate({ height: "toggle" }, 1000);
});
// duration.eq(0).on('click' , function(){
//     $(".about").animate({height:"toggle"} , 1000)
// })
// !---Date-CountDown
let counter = setInterval(()=>{
    let dateNow =new Date().getTime();
    let diffDate = endDate - dateNow;

    let days = Math.floor(diffDate /(1000*60*60*24)); 
    let hours = Math.floor(
      (diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor(
      (diffDate % (1000 * 60 * 60 )) / (1000 * 60)
    );
    let seconds = Math.floor(
      (diffDate % (1000 * 60 )) / (1000)
    );
    
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
},1000);





// !---text-Area-CountDown
$("textarea").keydown(function () { 
    var length = $(this).val().length;
    var count = maxLength-length;
    $("#textAreaCount").text(count);
});