$(document).ready(() => {
    // $('#fullpage').fullpage({
    //   // options here
    //   autoScrolling: true,
    //   scrollHorizontally: true,
    // });
    // methods
    // $.fn.fullpage.setAllowScrollingI(false);
});

$(document).ready(() => {
    $(".tabs").tabs();
});

$(document).ready(() => {
    $(".modal").modal();
});

$(document).ready(() => {
    $("select").formSelect();
});

$(document).ready(() => {
    // $('.left').sidenav().options.edge = 'right';
    $(".left").sidenav({ edge: "right" });
});

$(document).ready(() => {
    $(".sidenav").sidenav();
});

$(".dropdown-trigger").dropdown();
