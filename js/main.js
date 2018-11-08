/*------------SELECT--------------------*/
$(document).ready(function() {
    $(".custom-select").each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name"),
            placeholder = $(this).attr("data-placeholder");
        var template = '<span class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + placeholder + '</span>'
        template += '<div class="custom-options">';

        template += '<div class="scrollbar" id="scroll-style">';

        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div></div>';
        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function (e) {
        $('html').one('click', function () {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        //event.stopPropagation();
        e.stopPropagation();

    });
    $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value")).trigger('change');
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });

});
/*----------------------------------------------*/

/*--------------SLIDER FOR REASONS---------------*/
$(document).ready(function() {

    $('.tab-slider').on('init', function() {
        $('.tab-slider').css({
            visibility: 'visible'
        });
    });

    $('.tab-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        lazyLoad: 'ondemand',
        speed: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    speed: 300,
                }
            }
        ]
    });


    $('.slider-nav').slick({
        slidesToShow: 6,
        asNavFor: '.tab-slider',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    arrows: false
                }
            }
        ]
    });


    $('.experts-slider').on('init', function() {
        $('.experts-slider').css({
            visibility: 'visible'
        });
    });

    $('.experts-slider').slick({
        dots:false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: true,
        cssEase: 'linear',
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.reviews-slider').on('init', function() {
        $('.reviews-slider').css({
            visibility: 'visible'
        });
    });
    $('.reviews-slider').slick({
        dots:true,
        centerMode:true,
        prevArrow: $('.prev2'),
        nextArrow: $('.next2'),
        infinite: true,
        cssEase: 'linear',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    if ($(window).width() < 992) {
        $('.lastorder-content').addClass('lastorder-slider-mob');
    }
    else{
        $('.lastorder-content').removeClass('lastorder-slider-mob');
    }
    $('.lastorder-slider-mob').on('init', function() {
        $('.lastorder-slider-mob').css({
            visibility: 'visible'
        });
    });
    $('.lastorder-slider-mob').slick({
        dots:true,
        prevArrow: null,
        nextArrow: null,
        //centerMode:true,
        //variableWidth: true,
        adaptiveHeight: true,
        infinite: true,
        cssEase: 'linear',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000
    });


});

/*-----------------------------------------------*/
/*------------ACORDEON FAQ----------------*/
$(document).ready(function() {
    var contents = $('.answer');
    var titles = $('.question');
    titles.on('click', function () {
        var title = $(this);
        contents.filter(':visible').slideUp(function () {
            $(this).prev('.question').removeClass('is-opened');
        });

        var content = title.next('.answer');

        if (!content.is(':visible')) {
            content.slideDown(function () {
                title.addClass('is-opened')
            });
        }
    });
});
/*----------------------------------*/
