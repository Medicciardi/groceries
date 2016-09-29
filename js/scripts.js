$(document).ready(function() {
  $('#blanks form').submit(function(event) {

    var list = ["item1","item2","item3","item4"];

    list.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });
    $('#blanks').hide();
    $('#groceries').show();
    event.preventDefault();
  });
});
