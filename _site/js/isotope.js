 $(document).ready( function() {   

$('.grid').isotope({
  itemSelector: '.grid-item',
  transformsEnabled: true,
    // disable scale transform transition when hiding
  hiddenStyle: {
    opacity: 0
  },
  visibleStyle: {
    opacity: 1
  }
});

// filter items on button click
$('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ 
  	filter: filterValue 
  });
  $('.filter-button-group li').removeClass('current');
  $(this).addClass('current');
});
    })