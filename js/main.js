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
$(document).ready(function () {

    $('.tab-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
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



});
/*-----------------------------------------------*/
