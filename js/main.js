$(".check").click(function() {
    if($(this).is(":checked")) {
        $('#filters').append("<span class='cart'>" + $(this).val() + "</span>");
//        alert($(this).val());
    }
    if(!$(this).is(":checked")) {
        var str = $('#filters').text();
        str.replace("<span class='cart'>" + $(this).val() + "</span>",'');
//        alert(str);
        $('#filters').text(str);
//        alert($(this).val());
    }
});