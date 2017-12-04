$(document).ready(function() {
  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });

  var tags = ["h1", "p", "img"];
  tags.forEach(function(tag) {
    $(tag).click(function() {
      alert("This is a " + tag);
    });
  });
});
