$(function() {

  drawSvg('Oradano-mincho-GSRR', 'Book', 'normal', 'normal', '日本語のフォント');
  drawSvg('Koku Mincho Regular', 'Regular', 'normal', 'normal', '日本語のフォント');
  drawSvg('02UtsukushiMincho', 'Regular', 'normal', 'normal', '日本語のフォント');
  drawSvg('HarenosoraMincho', 'Regular', 'normal', 'normal', '日本語のフォント');
  drawSvg('HannariMincho', 'Regular', 'normal', 'normal', '日本語のフォント');
  drawSvg('Honoka Mincho', 'Regular', 'normal', 'normal', '日本語のフォント');

});

function drawSvg(tn, ts, fs, fw, txt) {
  $.ajax({
    url: "/svg",
    data: {
      ttfName: tn,
      ttfStyle: ts,
      fontStyle: fs,
      fontWeight: fw,
      textBody: txt
    }
  }).done(function(svg) {
    var s = $('<div class="sentence" />');
    $('#hello').append(s.append(svg));
  });
}
