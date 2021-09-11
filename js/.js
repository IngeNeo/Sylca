$('.container-especificacion, .container-galeria').hide();
$('.icon-desc').on('click',function(){
    $('.container-especificacion').fadeIn();
    $(' .container-galeria').fadeOut();

    $(this).css("color","black")
    $('.container-especificacion, .container-galeria').css("color","#800080");
})

$('.icon-imagen').on('click',function(){
    $('.container-imagen').fadeIn();
    $('.container-especificacion').fadeOut();

    $(this).css("color","black")
    $('.container-especificacion, .container-galeria').css("color","#800080");
})
