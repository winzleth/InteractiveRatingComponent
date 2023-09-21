// active rating
$(document).ready(function () {
  $('ol.rateList > li')
    .click(function (e) {
      $('ol.rateList > li').removeClass('active');
      $(this).addClass('active');
  });

});

// set text selected
const selected = text => document.querySelector('.rateSelected').textContent =text;

(() => {
  document.querySelectorAll('li.rateItem')
  .forEach(select =>
  {
    select.addEventListener('click', () =>
    {
      selected(select.querySelector('.num').textContent);
    });
  });
})();
