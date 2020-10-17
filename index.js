$(function () {
  $(document).scroll(function () {
    $('#top-navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar-toggler').height())
  })
})