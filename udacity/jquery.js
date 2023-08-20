/*
Using toggleClass()
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/

// don't change this variable!
var featuredArticle;

featuredArticle = $(".article-item").toggleClass("featured");

var addColor;
addColor = $(".container");
if (addColor.hasClass("col")) {
  addColor.toggleClass("blue");
} else {
  addColor.addClass("blue");
}

/*
USING next()
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

// your code goes here!
article2 = $(".featured");
article3 = article2.next();

article2.toggleClass("featured");
article3.toggleClass("featured");

/*
USING .attr()
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;
navList = $(".nav-item");
navList.first().children().attr("href", "#1");

/*
Modifying CSS with css()
For this quiz, change the font-size of all the article-items to 20px!

You must use jQuery's css() method!
*/

// Start with this variable!
var articleItems;

articleItems = $(".article-item").css("font-size", "20px");

/*
Pulling HTML and Text
with .html() and .text()
*/
var pullHTML;
pullHTML = $(".article-item").html();
pullTEXT = $(".article-item").text();

/* 
Collecting Values Quiz
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.

MORE ON EVENTS - https://api.jquery.com/category/events/

*/

$("#input").on("change", function () {
  value = $("#input").val();
  header = $(".articles").children("h1");
  header.text(value);
});
//  OR
$("#input").on("change", function () {
  value = $("#input").val();
  header = $("#input").next();
  header.text(value);
});

/*
Removing DOM Elements
.REMOVE()

For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $(".article-item").children("ul");
articleItems.remove();

/* 
Adding DOM Elements
Documentation on .append()

Documentation on .prepend()

Documentation on .insertBefore()

Documentation on .insertAfter()


 */
var addP;
addP = $("#input").append('<p style="color: #000;">This just got appended</p>');
addP = $("#input").prepend(
  '<p style="color: #000;">This just got prepended</p>'
);

/*
Family Tree builder
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
// Your code goes here
fam1 = $("#family1");
$("<div id='family2'></div>").insertAfter(fam1);
$("#family2").append("<div id='bruce'></div>");
$("#bruce").append("<div id='madison'></div><div id='hunter'></div>");

/*
Iterating DOM structure
https://api.jquery.com/each

For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!
$("h2").each(function () {
  var stt = $(this).text();
  var len = stt.length;
  $(this).text(stt + " " + len);
});

/**
 * Event Listening with jQuery
 * http://udacity.github.io/intro-to-jquery/
 * target.on('typechange', function());
 */
var image;
image = $("#udacityU");
image.on("mouseover", function () {
  console.log("Mouse Over");
});

/*
For this quiz, use jQuery to set up an event listener. Your event listener must:
    1. listen to the #my-button element
    2. listen for a `click` event
    3. perform the following actions when the button is clicked:
        a. remove the #my-button element from the DOM
        b. add the `success` class to the body
*/

var button, body;
button = $("#my-button");
body = $("body");
button.on("click", function () {
  button.remove();
  body.addClass("success");
});

/**
 * The Event Object
 * Reacting to events often requires knowledge about the event itself, so this is a quick breakdown of
 *  the event object which gets passed to an event listener’s callback.
Remember that the target element calls the callback function when the event occurs. 
When this function is called, jQuery passes an event object to it containing information about the event. 
This object holds a ton of useful information that can be used in the body of the function. 
This object, which is usually referenced in JavaScript as e, evt, or event, has several properties that 
you can use to determine the flow of your code. Try logging the object to see what's available:
 */

$("article").on("click", function (evt) {
  console.log(evt);
});

$("article").on("click", function (evt) {
  $(evt.target).css("background", "red");
});

$("#myAnchor").on("click", function (evt) {
  console.log("You clicked a link!");
});

// Clicking on the #myAnchor link will log the message to the console,
// but it will also navigate to that element's href attribute - potentially redirecting to a new page.
// The event object can be used to prevent the default action:
$("#myAnchor").on("click", function (evt) {
  evt.preventDefault();
  console.log("You clicked a link!");
});

/**
 * The Convenience Method
 * removes the .on() and replace with key action
 */
$("#myAnchor").onClick(function (evt) {
  evt.preventDefault();
  console.log("You clicked a link!");
});

/**
 * Understanding Event Delegation
 * Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants
 * matching a selector, whether those descendants exist now or are added in the future.
 * https://learn.jquery.com/events/event-delegation/
 *
 */

// Attach a delegated event handler
$("#article-list").on("click", "a", function (event) {
  event.preventDefault();
  console.log($(this).text());
});

// Attach a delegated event handler
$("#list").on("click", "a", function (event) {
  var elem = $(this);
  if (elem.is("[href^='http']")) {
    elem.attr("target", "_blank");
  }
});

// Attach a delegated event handler with a more refined selector
$("#list").on("click", "a[href^='http']", function (event) {
  $(this).attr("target", "_blank");
});

/**
 * Notice how we have moved the a part from the selector to the second parameter position of the .on() method.
 *  This second, selector parameter tells the handler to listen for the specified event, and when it hears it,
 *  check to see if the triggering element for that event matches the second parameter. In this case,
 * the triggering event is our anchor tag, which matches that parameter. Since it matches, our anonymous function
 * will execute. We have now attached a single click event listener to our <ul> that will listen for clicks on
 * its descendant anchors, instead of attaching an unknown number of directly bound events to the existing anchor
 * tags only.
 */
