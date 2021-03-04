$(document).ready(function() {

    "use strict";

       $(window).on('load', function() {
          $('.preloader').fadeOut();
          $('.animated-row').each(function() {
              var $this = $(this);
              $this.find('.animate').each(function(i) {
                  var $item = $(this);
                  var animation = $item.data('animate');
                  $item.on('inview', function(event, isInView) {
                      if (isInView) {
                          setTimeout(function() {
                              $item.addClass('animated ' + animation).removeClass('animate');
                          }, i * 50);
                      } else if (!screencheck(767)) {
                          $item.removeClass('animated ' + animation).addClass('animate');
                      }
                  });
              });
          });
      });
    });


    var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
        BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
        iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
        Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
        Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
        any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera()  || isMobile.Windows());
      }
    };
  
    var mobileMenuOutsideClick = function() {
  
      $(document).click(function (e) {
        var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
  
          if ( $('body').hasClass('offcanvas') ) {
  
            $('body').removeClass('offcanvas');
            $('.js-fh5co-nav-toggle').removeClass('active');
          
          }
        
          
        }
      });
  
    };
  
  
    var offcanvasMenu = function() {
  
      $('#page').prepend('<div id="fh5co-offcanvas" />');
      $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
      var clone1 = $('.menu-1 > ul').clone();
      $('#fh5co-offcanvas').append(clone1);
      var clone2 = $('.menu-2 > ul').clone();
      $('#fh5co-offcanvas').append(clone2);
  
      $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
      $('#fh5co-offcanvas')
        .find('li')
        .removeClass('has-dropdown');
  
      // Hover dropdown menu on mobile
      $('.offcanvas-has-dropdown').mouseenter(function(){
        var $this = $(this);
  
        $this
          .addClass('active')
          .find('ul')
          .slideDown(500, 'easeOutExpo');				
      }).mouseleave(function(){
  
        var $this = $(this);
        $this
          .removeClass('active')
          .find('ul')
          .slideUp(500, 'easeOutExpo');				
      });
  
  
      $(window).resize(function(){
  
        if ( $('body').hasClass('offcanvas') ) {
  
            $('body').removeClass('offcanvas');
            $('.js-fh5co-nav-toggle').removeClass('active');
          
          }
      });
    };
  
  
    var burgerMenu = function() {
  
      $('body').on('click', '.js-fh5co-nav-toggle', function(event){
        var $this = $(this);
  
  
        if ( $('body').hasClass('overflow offcanvas') ) {
          $('body').removeClass('overflow offcanvas');
        } else {
          $('body').addClass('overflow offcanvas');
        }
        $this.toggleClass('active');
        event.preventDefault();
  
      });
    };
  
    var fullHeight = function() {
  
      if ( !isMobile.any() ) {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
          $('.js-fullheight').css('height', $(window).height());
        });
      }
  
    };
  
  
  
    var contentWayPoint = function() {
      var i = 0;
      $('.animate-box').waypoint( function( direction ) {
  
        if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
          
          i++;
  
          $(this.element).addClass('item-animate');
          setTimeout(function(){
  
            $('body .animate-box.item-animate').each(function(k){
              var el = $(this);
              setTimeout( function () {
                var effect = el.data('animate-effect');
                if ( effect === 'fadeIn') {
                  el.addClass('fadeIn animated-fast');
                } else if ( effect === 'fadeInLeft') {
                  el.addClass('fadeInLeft animated-fast');
                } else if ( effect === 'fadeInRight') {
                  el.addClass('fadeInRight animated-fast');
                } else {
                  el.addClass('fadeInUp animated-fast');
                }
  
                el.removeClass('item-animate');
              },  k * 200, 'easeInOutExpo' );
            });
            
          }, 100);
          
        }
  
      } , { offset: '85%' } );
    };
  
  
    var dropdown = function() {
  
      $('.has-dropdown').mouseenter(function(){
  
        var $this = $(this);
        $this
          .find('.dropdown')
          .css('display', 'block')
          .addClass('animated-fast fadeInUpMenu');
  
      }).mouseleave(function(){
        var $this = $(this);
  
        $this
          .find('.dropdown')
          .css('display', 'none')
          .removeClass('animated-fast fadeInUpMenu');
      });
  
    };
  
  
    var goToTop = function() {
  
      $('.js-gotop').on('click', function(event){
        
        event.preventDefault();
  
        $('html, body').animate({
          scrollTop: $('html').offset().top
        }, 500, 'easeInOutExpo');
        
        return false;
      });
  
      $(window).scroll(function(){
  
        var $win = $(window);
        if ($win.scrollTop() > 200) {
          $('.js-top').addClass('active');
        } else {
          $('.js-top').removeClass('active');
        }
  
      });
    
    };
  
  
    // Loading page
    var loaderPage = function() {
      $(".fh5co-loader").fadeOut("slow");
    };
  
    var counter = function() {
      $('.js-counter').countTo({
         formatter: function (value, options) {
          return value.toFixed(options.decimals);
        },
      });
    };
  
    var counterWayPoint = function() {
      if ($('#fh5co-counter').length > 0 ) {
        $('#fh5co-counter').waypoint( function( direction ) {
                      
          if( direction === 'down' && !$(this.element).hasClass('animated') ) {
            setTimeout( counter , 400);					
            $(this.element).addClass('animated');
          }
        } , { offset: '90%' } );
      }
    };
  
    var parallax = function() {
  
      if ( !isMobile.any() ) {
        $(window).stellar({
          horizontalScrolling: false,
          hideDistantElements: false, 
          responsive: true
  
        });
      }
    };
  
    var testimonialCarousel = function(){
      
      var owl = $('.owl-carousel-fullwidth');
      owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        smartSpeed: 800,
        autoHeight: true
      });
    };
  
    var sliderMain = function() {
      
        $('#fh5co-hero .flexslider').flexslider({
        animation: "fade",
        slideshowSpeed: 5000,
        directionNav: true,
        start: function(){
          setTimeout(function(){
            $('.slider-text').removeClass('animated fadeInUp');
            $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
          }, 500);
        },
        before: function(){
          setTimeout(function(){
            $('.slider-text').removeClass('animated fadeInUp');
            $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
          }, 500);
        }
  
        });
  
        $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
        $(window).resize(function(){
          $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
        });
  
    };
  
    
    $(function(){
      mobileMenuOutsideClick();
      offcanvasMenu();
      burgerMenu();
      contentWayPoint();
      sliderMain();
      dropdown();
      goToTop();
      loaderPage();
      counterWayPoint();
      counter();
      parallax();
      testimonialCarousel();
      fullHeight();
    });
 


  
    
	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
  };
  
  


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


    // Header Type = Fixed
    $(window).on("scroll", function() {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 50) {
            $('.site-header').addClass('scrolled-header animated fadeInDown');
        } else {
            $('.site-header').removeClass('scrolled-header animated fadeInDown');
        }
    });

    // Top Features Carousel
    $('#owl-top-features').owlCarousel({
      pagination : false,
      paginationNumbers: false,
      autoplay: true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          400:{
              items:2
          },
          600:{
              items:3
          }
          // ,
          // 800:{
          //     items:4
          // }
        }
    })

   
    // Clients Carousel
    $('#owl-clients').owlCarousel({
      pagination : true,
      paginationNumbers: false,
      autoplay: true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:6
          }
        }
    })

    // Default OwlCarosuel Init
    $('#owl-similar').owlCarousel({
      pagination : true,
      paginationNumbers: false,
      autoplay: true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          }
          // ,
          // 1000:{
          //     items:3
          // }
        }
    })

    // Testimonials Carousel
    $('#owl-testimonials').owlCarousel({
      pagination : true,
      paginationNumbers: false,
      autoplay: true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
        }
    })


    // Homepage Banner
    $(".Modern-Slider").slick({
      autoplay:true,
      autoplaySpeed:10000,
      speed:900,
      slidesToShow:1,
      slidesToScroll:1,
      pauseOnHover:false,
      dots:true,
      pauseOnDotsHover:true,
      cssEase:'linear',
      fade:true,
      draggable:false,
      prevArrow:'<button class="PrevArrow"></button>',
      nextArrow:'<button class="NextArrow"></button>', 
    });

    //  Details Page Gallery
    $( '#single-lawyer' ).sliderPro({
      width: 570,
      height: 450,
      fade: true,
      arrows: true,
      buttons: false,
      fullScreen: true,
      shuffle: true,
      smallSize: 500,
      mediumSize: 1000,
      largeSize: 3000,
      thumbnailArrows: true,
      autoplay: false
    });

    // Menu Function for DropDown
    $.fn.menumaker = function(options) {
        var cssmenu = $(this),
          settings = $.extend(
            {
              title: "Menu",
              format: "dropdown",
              sticky: false
            },
            options
          );

        return this.each(function() {
          cssmenu.prepend('<div id="menu-button">' + settings.title + "</div>");
          $(this)
            .find("#menu-button")
            .on("click", function() {
              $(this).toggleClass("menu-opened");
              var mainmenu = $(this).next("ul");
              if (mainmenu.hasClass("open")) {
                mainmenu.hide().removeClass("open");
              } else {
                mainmenu.show().addClass("open");
                if (settings.format === "dropdown") {
                  mainmenu.find("ul").show();
                }
              }
            });

          cssmenu
            .find("li ul")
            .parent()
            .addClass("has-sub");

          var multiTg = function() {
            cssmenu
              .find(".has-sub")
              .prepend('<span class="submenu-button"></span>');
            cssmenu.find(".submenu-button").on("click", function() {
              $(this).toggleClass("submenu-opened");
              if (
                $(this)
                  .siblings("ul")
                  .hasClass("open")
              ) {
                $(this)
                  .siblings("ul")
                  .removeClass("open")
                  .hide();
              } else {
                $(this)
                  .siblings("ul")
                  .addClass("open")
                  .show();
              }
            });
          };

          if (settings.format === "multitoggle") multiTg();
          else cssmenu.addClass("dropdown");

          if (settings.sticky === true) cssmenu.css("position", "fixed");

          var resizeFix = function() {
            if ($(window).width() > 768) {
              cssmenu.find("ul").show();
            }

            if ($(window).width() <= 768) {
              cssmenu
                .find("ul")
                .hide()
                .removeClass("open");
            }
          };
          resizeFix();
          return $(window).on("resize", resizeFix);
        });
      };

    $("#cssmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

    //  go to top
    var offset = 1000,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 500,
    //grab the "back to top" link
    $back_to_top = $('.go-top');

    //hide or show the "back to top" link
    $(window).on('scroll', function(){
      ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('go-top-visible') : $back_to_top.removeClass('go-top-visible go-top-fade-out');
      if( $(this).scrollTop() > offset_opacity ) { 
        $back_to_top.addClass('go-top-fade-out');
      }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0 ,
          }, scroll_top_duration
      );
     });

     