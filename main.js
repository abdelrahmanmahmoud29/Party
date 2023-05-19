let sideBarWidth=$(".side-bar").outerWidth();
$(".side-bar").css('left',-sideBarWidth)
$(".open").click(function(){
    if($(".side-bar").css('left')=="0px"){
        $(".side-bar").animate({left:-sideBarWidth},300)
        $("#home").animate({paddingLeft:"0px"},300)
    }
    else{
        $(".side-bar").animate({left:"0px"},300)
        $("#home").animate({paddingLeft:sideBarWidth},300)
    }
})
$(".Exit").click(function(){
    $(".side-bar").animate({left:-sideBarWidth},300)
})
$(".body2").hide()
$(".body3").hide()
$(".body4").hide()
$(".head").click(function(){ 
$(".body").slideToggle(1000)  
})
$(".head2").click(function(){
   
$(".body2").slideToggle(1000)
   
})
$(".head3").click(function(){   
$(".body3").slideToggle(1000)  
})
$(".head4").click(function(){  
$(".body4").slideToggle(1000)  
})
let countDownDate = new Date("mar 23, 2024 0:0:0").getTime();
let Counter = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let box=``;
  box=`
  <div class="box">
  <h3>${days}D</h3>
          </div>
          <div class="box">
          <h3>${hours}h</h3>
      </div>
      <div class="box">
      <h3>${minutes}m</h3>
  </div>
  <div class="box">
            <h3>${seconds}s</h3>
        </div>
  `
  document.querySelector('.boxes').innerHTML=box;
  if (distance < 0) {
    clearInterval(Counter);
  }
}, 1000);

$('textarea').keyup(function() {
let maxLength = 100;
  let textlen = maxLength - $('textarea').val().length;
  $('#rchars').text(textlen);
  if(textlen==0||textlen<0){
    $('#rchars').text("your avilable charachters finished");

  }
});

$("a^='#'").click(function(eventiInfo){
    let aHref=eventiInfo.target.getAttribute('href');
    let sectionOffset=$(aHref).offset().top;
    $("body").animate({scrollTop:sectionOffset},12000)
})