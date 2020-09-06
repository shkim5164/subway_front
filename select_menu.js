$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(".card").on("click", function(e){
    if($(this).hasClass("on")){
        $(this).removeClass("on");
        $(this).children(".radio_btn").prop('checked', false);
    }
    else{
        $(".card").removeClass("on");
        $(this).addClass("on");
        $(".radio_btn").prop('checked', false);
        $(this).children(".radio_btn").prop('checked', true);
    }
})
