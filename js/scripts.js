$(document).ready(function() {
  $("form#user").submit(function(event) {
    event.preventDefault();
    var userName = $("#user-name").val();
    var selectedDate = $("#date").val();
    var startTime = $("#start").val();
    var endTime = $("#end").val();

    $("#confirmation").show();
    $(".name").text(userName);
    $(".date").text(selectedDate);
    $(".starting").text(startTime);
    $(".ending").text(endTime);

  });
});
