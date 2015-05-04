$(function() {
  $('#theme-select').on('change', function(e) {
    var val = $('#theme-select').val();
    $('[data-role="theme-specifier"]').attr('class', val);
  });
});

$(function() {
  $('#dataset-select').on('change', function(e) {
    var val = $('#dataset-select').val();
    if (val == 'data-1') {
      $('.tb-col').show();
      $('#tournament-bracket').attr('class', 'full');
    } else if (val == 'data-2') {
      $('.tb-col-5').hide();
      $('.tb-col-6').hide();
      $('.tb-col-7').hide();
      $('.tb-col-8').hide();
      $('#tournament-bracket').attr('class', 'half');
    } else if (val == 'data-3') {
      $('.tb-col-5').hide();
      $('.tb-col-6').hide();
      $('.tb-col-7').hide();
      $('.tb-col-8').hide();
      $('#tournament-bracket').attr('class', 'quarter');
    }
  });

});

