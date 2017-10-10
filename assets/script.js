$("document").ready(function() {
  getQuote();
});

function getQuote() {
  $.getScript("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=myFunc");
}

function myFunc(myObj) {
  $("#quote").html(myObj[0].content);
  $("#author").html(myObj[0].title);

  // remove existing button
  $("#tweetBtn iframe").remove();

  // generate new button
  twttr.widgets.createShareButton(
    "/",
    document.getElementById("tweetBtn"),
    {
      text: getString(myObj).trim() + "\n--" + myObj[0].title,
      size: "large"
    }
  );
}

function getString(obj) {
  let txt = obj[0].content;
  txt = txt.replace("<p>", "");
  txt = txt.replace("</p>", "");

  return txt;
}
