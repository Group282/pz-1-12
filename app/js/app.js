$(function(){


    let slider = $("#mainSlider");
    console.log(slider);
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: false
      });
    
  });