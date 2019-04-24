$(document).ready(function() {
  // Fetching and printing quote
  function printQuote() {
    $.getJSON(
      "https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520",
      function(json) {
        var quoteNum = Math.floor(Math.random() * json.length);
        $("#text")
          .html(json[quoteNum]["quote"])
          .css({ "font-style": "italic" });
        $("#author")
          .html(json[quoteNum]["name"])
          .css({ "font-style": "italic" });
      }
    );
  }

  printQuote();

  // New Quote
  $("#new-quote").on("click", function() {
    $("#text,#author")
      .fadeOut(printQuote)
      .fadeIn();
  });

  // Tweeting the quote
  $("#tweet-quote").on("click", function() {
    var text =
      document.getElementById("text").innerHTML +
      "     - " +
      document.getElementById("author").innerHTML;
    var link = "https://twitter.com/intent/tweet?text=" + text;
    window.open(link, "_blank");
  });
});