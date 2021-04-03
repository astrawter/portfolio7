$(document).ready(function(){

    $("#filter-button button").click(function(){
        var value = $(this).attr('data-filter');
        console.log(value);
        if(value == "all")
        {
            $('.filter').show('1000');
            console.log(document.querySelectorAll("[data-show]"));
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    if ($("#filter-button button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
