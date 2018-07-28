$(document).ready(function() {
  quotes = [
    "Success is the ability to go from failure to failure without loosing enthusiasm",
    "Only I can change my life. No one can do it for me",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence",
    "With the new day comes new strength and new thoughts",
    "Failure will never overtake me if my determination to succeed is strong enough",
    "Change your life today. Don't gamble on the future, act now, without delay",
    "It always seems impossible until it's done",
    "We should not give up and we should not allow the problem to defeat us",
    "It does not matter how slowly you go as long as you do not stop",
    "Start where you are. Use what you have. Do what you can"
    ];
    
  authors = [
    "Johnny Depp",
    "Carol Burnett",
    "St. Jerome",
    "Helen Keller",
    "Eleanor Roosevelt",
    "Og Mandino",
    "Simone de Beauvoir",
    "Nelson Mandela",
    "A. P. J. Abdul Kalam",
    "Confucius",
    "Arthur Ashe"
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
