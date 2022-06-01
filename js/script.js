$(function () {

  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active')
    $('body').toggleClass('lock')

  });



  $(".beforeimagetest").cndkbeforeafter(
    {
      showText: true,
      seperatorColor: "blue",
      seperatorWidth: "1px",
      hoverEffect: false,
      beforeText: "БЫЛО",
      afterText: "СТАЛО",
      autoSliding: true,
      autoSlidingStopOnHover: true,
      hoverEffect: false,
      enterAnimation: true
    }
  );

});