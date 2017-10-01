$("document").ready(function() {
  getQuote();
});

function getQuote() {
  $.getScript("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=myFunc");
}

function myFunc(myObj) {
  $("#quote").html(myObj[0].content);
  $("#author").html(myObj[0].title);
}
