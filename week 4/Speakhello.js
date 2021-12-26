(function (window) {
    var Hellospeaker = {};
    var speakword = "Hello";
    Hellospeaker.speak = function (names) {
    console.log(speakword +" " + names);
}

      window.Hellospeaker = Hellospeaker;

})(window);