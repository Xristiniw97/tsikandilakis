
(function($){


    var isMobile = window.matchMedia("only screen and (max-width: 767px)");
    if (!isMobile.matches) {
        var $item = $("#bgCarouselSlider .carousel-item");
        var $wHeight = $(window).height();
        $item.eq(0).addClass("active");
        $item.height($wHeight);
        $item.addClass("full-screen");
        $(window).on("resize", function () {
            $wHeight = $(window).height();
            $item.height($wHeight);
        });
    }

     // bgCarouselSlider
     $(".projectCarousel").carousel({
        interval: 8000,
        pause: false
    });


    // bgCarouselSlider
    $("#bgCarouselSlider").carousel({
        interval: 15000,
        pause: false
    });

    
   

    let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');
	

    burger.addEventListener('click', function(e){
        this.classList.toggle('is-open');
        nav.classList.toggle('is-open');
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
           $(".header").removeClass("active");
        }
    });



    //news__owl
    $('.news__owl').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:2
            },
            1000:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });


    //#testimonials__owl

    const nextIcon = '<img src="img/right-arrow2-black.svg" alt="right" >';
    const prevIcon = '<img src="img/right-arrow2-black.svg" alt="left" >';
    var $owl = $('#testimonials__owl');

        $owl.children().each( function( index ) {
        $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
        });

        $owl.owlCarousel({
        center: true,
        loop: true,
        nav: true,
        navText: [prevIcon,nextIcon],
        dots: false,
        autoplay:true,
        autoplayTimeout:10000,
        autoplaySpeed:1000,
        autoplayHoverPause:true,
        items: 3,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            1000:{
                items:3
            },
            
        }
        });

        $(document).on('click', '.owl-item>div', function() {
        // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
        var $speed = 300;  // in ms
        $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
    });



    // counter-show
    var isAlreadyRun = false;

    $(window).scroll( function(){

        $('.counter-show').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();


                if( bottom_of_window > ( bottom_of_object + 20 )  ){
                    if (!isAlreadyRun) {
                        $('.count-number').each(function () {
                        
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                                duration: 3000,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });
                        });
                    }
                    isAlreadyRun = true;
                }
        }); 
    });


    // toggle-texts services 
    $(document).on("click", ".toggle-text-button", function() {
        if ($(this).text() == "More") {
        
        $(this).text("Less");
        
        // Use a jquery selector using the `.attr()` of the link
        $("#toggle-text-" + $(this).attr("toggle-text")).slideDown();
        
        } else {
        
        $(this).text("More");
        
        // Use a jquery selector using the `.attr()` of the link
        $("#toggle-text-" + $(this).attr("toggle-text")).slideUp();
        
        }
    });


    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
    }); 


    // init Masonry
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    }); 

    
     // add all to same gallery
     $(".whatWeDo .fancy").attr("data-fancybox","mygallery");
     // assign captions and title from alt-attributes of images:
     $(".whatWeDo .fancy").each(function(){
       $(this).attr("data-caption", $(this).find("img").attr("alt"));
       $(this).attr("title", $(this).find("img").attr("alt"));
     });
     // start fancybox:
       $(".whatWeDo .fancy").fancybox();


    //news__owl
    $('#gallery__owl').owlCarousel({
        loop:false,
        // margin:10,
        nav: true,
        navText: [prevIcon,nextIcon],
        dots: false,
        responsive:{
            0:{
                items:4
            },
            767:{
                items:5
            },
            1000:{
                items:5
            },
            
        }
    });


    //  otherProjects__owl
$('#otherProjects__owl').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1300:{
            items:3
        }
    }
});



})(jQuery);










