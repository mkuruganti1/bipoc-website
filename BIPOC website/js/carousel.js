  $(document).ready(function() {
    $('.scrolling-frame').slick({
      slidesToShow: 5,
      accessibility: true,
      arrows: true,
      centerMode: true,
      draggable: true,
      swipeToSlide: true,

      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
        
    });
  });