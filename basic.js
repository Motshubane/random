$(document).ready(function() {
    var htmlText = "";
    var author = "";
    var url = "https://twitter.com/intent/tweet?text=";
    
    //Pre-Load Quote API Text
    function randomQuote() {
       $(".quote-text").html("<i class='fa fa-circle-o-notch fa-spin fa-2x fa-fw'></i>");
        $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(data) {
        
            htmlText = data.quote; 
            author = data.author;

            $(".quote-text").html(htmlText);
            $(".quote-src").html(author);
            
            $("a.link").attr("href", url + htmlText + " -" + author); 
        
        });
    }
    
    randomQuote();
    
    //Generate random quote upon button click

    $(".btn").on("click", function() {
        
        randomQuote();
                
    });
    
});
