$(function () {
  $(document).scroll(function () {
    let $nav = $('#top-navbar')
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
  })
})