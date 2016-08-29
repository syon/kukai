$.ajax({
  url: "/svg"
}).done(function(svg) {
  $('#hello').append(svg);
});
