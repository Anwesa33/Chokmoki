/* add/remove headerfixed */
$(document).ready(function() {
    $(window).scroll(function() {
     if ($(document).scrollTop() > 31) {
          $("header").addClass("headerfixed");
        } else {
    $("header").removeClass("headerfixed");
        }
      });
});
   

/* scroll-to-top button */
$(document).ready(function(){
    var scrollToTopBtn = document.querySelector("#scrollToTopBtn");
    var rootElement = document.getElementsByClassName("showBtn");    
    function handleScroll() {
      var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if (rootElement.scrollTop / scrollTotal > 0.3) {
        scrollToTopBtn.classList.add("showBtn");
      } else {
        scrollToTopBtn.classList.remove("showBtn");
      }
    }    
    function scrollToTop() {
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    if(scrollToTopBtn){        
        scrollToTopBtn.addEventListener("click", scrollToTop);
    }
    document.addEventListener("scroll", handleScroll);
  });


 /*  navbar search dropdown */
  function myFunction() {
    $(".nav-search").slideToggle("slow");    
  }
  $('body').click(function(){
    if( $(".nav-search").is(':visible') ) {
      $(".nav-search").slideUp();
    }
    });
    $('#for-search').click(function (event) {event.stopPropagation();});
    $('.nav-search').click(function (event) {event.stopPropagation();}); 




        $(function() {
            $(document).click(function (event) {
              $('.navbar-collapse').collapse('hide');
            });
            $('.navbar-collapse').click(function (event) {event.stopPropagation();});
          });  
      
          
          function addBG() {
            if ( $('.navbar-toggler').hasClass('current') ) {
              $('.navbar-toggler').removeClass('current');
          } else {
              $('.navbar-toggler.current').removeClass('current');
              $('.navbar-toggler').addClass('current');    
          }  
          }       


    var brandSlider = $('.owl-collect');
    brandSlider.owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        autoplay:true,
        autoplaySpeed:2800,
        smartSpeed: 500,
        responsive: {
          0: {
              items: 1,
              margin: 10,
          },
          400: {
              items: 2,
              margin: 10,
          },
          768: {
              items: 3,
              margin: 20,
          },
          992: {
              items: 4,
              margin: 27,
          },
          1200: {
              items: 4,
              margin: 27,
          }
        }
    })
    function brandSliderClasses() {
        brandSlider.each(function() {
            var total = $(this).find('.owl-item.active').length;
            $(this).find('.owl-item').removeClass('firstactiveitem');
            $(this).find('.owl-item').removeClass('lastactiveitem');
            $(this).find('.owl-item.active').each(function(index) {
                if (index === 0) {
                    $(this).addClass('firstactiveitem')
                }
                if (index === total - 1 && total > 1) {
                    $(this).addClass('lastactiveitem')
                }
            })
        })
    }
    brandSliderClasses();
    brandSlider.on('translated.owl.carousel', function(event) {
        brandSliderClasses()
    }); 

    

    $('.owl-best').owlCarousel({
      loop:true,
      autoplay:true,
      autoplaySpeed:2800,
      nav:true,
      dots:false,
      responsive:{
          0:{
              items:1,
              margin:10,
          },
          400:{
              items:2,
              margin:5,
          },
          768:{
            items:3,
            margin:30,
        },
          992:{
              items:4,
              margin:30,
          }
      }
  })


  $('.owl-testi').owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed:2800,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            margin:10,
        },
       480:{
            items:2,
            margin:20,
        },
        992:{
            items:3,
            margin:46,
        }
    }
})









/* var container = document.getElementById('ring_cont');
var inner = document.getElementById('ring_inr');
        
var onMouseEnterHandler = function(event) {
  update(event);
};
var onMouseLeaveHandler = function() {
  inner.style = "";
};
var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};

container.onmouseenter = onMouseEnterHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;

var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};
var mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin: function(e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  },
  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}
mouse.setOrigin(container);

var update = function(event) {
  mouse.updatePosition(event);
  updateTransformStyle(
    (mouse.y / inner.offsetHeight/2).toFixed(2),
    (mouse.x / inner.offsetWidth/2).toFixed(2)
  );
};

var updateTransformStyle = function(x, y) {
  var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  inner.style.transform = style;
  inner.style.webkitTransform = style;
  inner.style.mozTransform = style;
  inner.style.msTransform = style;
  inner.style.oTransform = style;
}; */