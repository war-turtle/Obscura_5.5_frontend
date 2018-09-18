$(document).ready(() => {
  $('#fullpage').fullpage({
    // options here
    autoScrolling: true,
    scrollHorizontally: true,
  });

  // methods
  // $.fn.fullpage.setAllowScrollingI(false);
});

$(document).ready(() => {
  $('.tabs').tabs();
});

$(document).ready(() => {
  $('.modal').modal();
});

$(document).ready(() => {
  $('select').formSelect();
});

$(document).ready(() => {
  $('.sidenav').sidenav();
});
