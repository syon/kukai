$(function() {

  drawSvg('Oradano-mincho-GSRR', 'Book', 'normal', 'normal');
  drawSvg('Koku Mincho Regular', 'Regular', 'normal', 'normal');
  drawSvg('02UtsukushiMincho', 'Regular', 'italic', 'bold');

});

function drawSvg(tn, ts, fs, fw) {
  $.ajax({
    url: "/svg",
    data: {
      ttfName: tn,
      ttfStyle: ts,
      fontStyle: fs,
      fontWeight: fw
    }
  }).done(function(svg) {
    var s = $('<div class="sentence" />');
    $('#hello').append(s.append(svg));
  });
}
