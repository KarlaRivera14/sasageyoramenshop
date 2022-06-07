/*  Author: Karla Rivera
    Course:  ITSE2402
    Date Created:  05/01/2022

*    Filename: kar_countdown.js
*/
    function locationCountdown() {
    var countDownDate = new Date("Jun 26, 2022 12:30:10").getTime();
    var timer = setInterval(function() {
        var now = new Date().getTime();
        var timeleft = countDownDate - now;

        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    }, 1000)
}
locationCountdown();
