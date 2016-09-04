$(function() {

  drawSvg('Oradano-mincho-GSRR', 'Book', 'normal', 'normal', 'Oradano明朝フォント');
  drawSvg('Koku Mincho Regular', 'Regular', 'normal', 'normal', '刻明朝フォント');
  drawSvg('02UtsukushiMincho', 'Regular', 'normal', 'normal', 'うつくし明朝体');
  drawSvg('HarenosoraMincho', 'Regular', 'normal', 'normal', 'はれのそら明朝');
  drawSvg('HannariMincho', 'Regular', 'normal', 'normal', 'はんなり明朝');
  drawSvg('Honoka Mincho', 'Regular', 'normal', 'normal', 'ほのか明朝');
  drawSvg('Dejima', 'mincho', 'normal', 'normal', '出島明朝フォント');
  drawSvg('Aozora Mincho', 'Regular', 'normal', 'normal', 'あおぞら明朝 Regular');
  drawSvg('Aozora Mincho', 'Bold', 'normal', 'bold', 'あおぞら明朝 Bold');

});

function drawSvg(tn, ts, fs, fw, txt) {
  $.ajax({
    url: "/svg",
    data: {
      ttfName: tn,
      ttfStyle: ts,
      fontStyle: fs, // italic, oblique
      fontWeight: fw, // 100 - 900, bold, etc.
      textBody: txt
    }
  }).done(function(svg) {
    var s = $('<div class="sentence" />');
    $('#hello').append(s.append(svg));
  });
}
