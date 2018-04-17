$(document).ready(function () {

    var cachecache = $('.subMenu').hide();

    // On modifie l'evenement "click" sur les liens dans les items de liste
    // qui portent la classe ".clickFruit" :
    $(".touch").on("click", function () {
        console.log($(this).closest('.toggleMenu'));

        $(this).closest('.toggleMenu').siblings().find('.subMenu').slideUp('slow');
        $(this).closest('.toggleMenu').find('.subMenu').slideToggle('slow');

        $(this).closest('.toggleMenu').siblings().find('.clickFruit').removeClass('open');
        $(this).closest('.clickFruit').toggleClass('open');

        $(this).closest('.toggleMenu').siblings().find('.cross').removeClass('active');
        $(this).find('.cross').toggleClass('active');


        // On empêche le navigateur de suivre le lien :
        return false;
    });

    $('.clickFruit > span').on("mouseover", function () {
        $(this).parent().addClass("vol");
    });
    $('.clickFruit > span').on("mouseout", function () {
        $(this).parent().removeClass("vol");
    });

    //BOUTTON 
    $('.cross').on('click', function () {


    })
})
