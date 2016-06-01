$(function() {
  // La magia aquí
  console.log('Ready to go!');

  $('[data-iframe-h]').each( function( idx, el ) {
    var
      $el = $(el),
      h = $el.attr('data-iframe-h')+'px';
    $el.find('iframe').css('height', h);
  });
});
