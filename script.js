nav = document.getElementById("nav");

$('nav>a').on('click',function() {
  
  $('body').removeClass();
  if ($(this).is(":first-child")) {
      $('body').addClass('home-selected');
  } else if ($(this).is(":nth-child(2)")) {
      $('body').addClass('portfolio-selected');       
  } else if ($(this).is(":nth-child(3)")) {
      $('body').addClass('contact-selected');       
  }
  
  $('nav a .circle').removeClass('tapped');
  $(this).children('div').addClass('tapped');
  
  //Trick to allow css keyframe animation to repeat on same element instantly
  nav.classList.remove("clicked");
  void nav.offsetWidth;
  nav.classList.add("clicked");
  
});

