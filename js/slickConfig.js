 $(document).ready(function(){
  $('.your-class').slick({
    // dots:true,
    // nextArrow: '<i class="fa fa-arrow-right"></i>',
    // prevArrow: '<i class="fa fa-arrow-left"></i>',
    arrows:false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    speed:500,
    draggable:false,
    responsive: [
      {
        breakpoint: 1295,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
          // dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite:true
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});