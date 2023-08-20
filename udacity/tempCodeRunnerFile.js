$("#input").on("change", function () {
  value = $("#input").val();
  header = $(".articles").children("h1");
  header.text(value);
});