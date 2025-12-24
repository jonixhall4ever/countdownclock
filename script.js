// This is behaviour/functionality --> clock
function updateClock() {
    const due_date = new Date('2034-11-10T00:00:00')
    const now = new Date();
    const diff = due_date - now  //this is miliseconds

    // Calculate the remaining time
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));  // Total days remaining
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  // Remaining hours
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));  // Remaining minutes
    const secs = Math.floor((diff % (1000 * 60)) / 1000);  // Remaining seconds

    //document.getElementById('clock').textContent = `${days}  ${hours} : ${mins} : ${secs}`;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = mins;
    document.getElementById('seconds').textContent = secs;

  }
  
  // Update the clock every second
  setInterval(updateClock, 1000); //every 1000 miliseconds
  
  // Initialize the clock immediately
  updateClock();
  