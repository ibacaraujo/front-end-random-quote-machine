$(document).ready(function() {
  quotes = [
    "Success is the ability to go from failure to failure without loosing enthusiasm",
    "Only I can change my life. No one can do it for me",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence",
    "With the new day comes new strength and new thoughts"
    ];
    
  authors = [
    "Johnny Depp",
    "Carol Burnett",
    "St. Jerome",
    "Helen Keller",
    "Eleanor Roosevelt"
    ];
  
  $("#text").append(quotes[0]);
  $("#author").append(authors[0]);
    
  $("#new-quote").click(function() {
    getNewQuote(quotes);
  });
  
});

function getNewQuote(quotes) {
  index = Math.floor(Math.random() * quotes.length);
  quote = quotes[index];
  author = authors[index];
  $("#text").html(quote);
  $("#author").html(author);
}
