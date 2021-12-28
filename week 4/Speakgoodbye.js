(function (window) { 
    
    var Goodbyespeaker = {};
    var speakword = "Good bye";
    Goodbyespeaker.speak = function (names) {
    console.log(speakword + " "  + names);
}
     window.Goodbyespeaker = Goodbyespeaker;

})(window);