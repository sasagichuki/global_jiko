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

// $(function () {
//     setNavigation();
// });

// function setNavigation() {
//     var path = window.location.pathname;
//     path = path.replace(/\/$/, "");
//     path = decodeURIComponent(path);

//     $("nav a").each(function () {
//         var href = $(this).attr('href');
//         if (path.substring(0, href.length) === href) {
//             $(this).closest('li').addClass('active');
//         }
//     });
// }