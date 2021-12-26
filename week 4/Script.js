(function () {
var names = ["sonaa", "rose", "john", "mugil", "kokila", "jack", "michael", "kabil", "jim paul" ];
for (var i = 0; i < names.length; i++) {
var firstletter = names[i].charAt(0).toLowerCase();
if(firstletter == 'j') {
    Goodbyespeaker.speak(names[i]);
}
else{
    Hellospeaker.speak(names[i]);
  }
 }
})();