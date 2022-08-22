import './Style.css';

const TimerTemp = () => {
    var countDownDate = new Date("Oct 3, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer-clock"
    document.getElementById("timer-clock").innerHTML = days + " : " + hours + " : "
    + minutes + " : " + seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer-clock").innerHTML = "EXPIRED";
    }
    }, 1000);

    return (
      <div>
        <span id="timer-clock"></span>
        <div id='timer-header'>
          <span>DATES</span>
          <span>HOURS</span>
          <span>MINUTES</span>
          <span>SECONDS</span>
        </div>
      </div>
    )
  };

  export default TimerTemp;