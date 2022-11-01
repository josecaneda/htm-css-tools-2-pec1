var $ = require("jquery");
import 'slick-carousel/slick/slick.js';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

window.onload = function() {

  
  $('.carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
  });
}