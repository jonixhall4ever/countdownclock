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
  

// Events
// Fetch and process your JSON
fetch('event_list.json')
  .then(r => r.json())
  .then(events => {
    const now = new Date();
    const pastContainer = document.getElementById('past-events');
    const futureContainer = document.getElementById('future-events');
    
    const pastEvents = events
      .filter(e => e.title === "PastEvent" && now > new Date(e.date_iso))
      .sort((a, b) => new Date(b.date_iso) - new Date(a.date_iso))
      .slice(0, 3);
    const futureEvents = events
      .filter(e => e.title === "FutureEvent" && now > new Date(e.date_iso))
      .sort((a, b) => new Date(a.date_iso) - new Date(b.date_iso))
      .slice(0, 3);
    
    pastEvents.forEach(e => {
      pastContainer.innerHTML += `
        <div class="event">
          <p class="event-label">${e.label}</p>
          <small class="event-date">${e.date_pt}</small>
        </div>
      `;
    });
    
    futureEvents.forEach(e => {
      futureContainer.innerHTML += `
        <div class="event">
          <p class="event-label">${e.label}</p>
          <small class="event-date">${e.date_pt}</small>
        </div>
      `;
    });
  });



//Danger MODE -> Constant version
const DANGER_MODE = false; // change to true to activate IF NEEDED

if (DANGER_MODE) {
  const warning = document.getElementById("danger-warning");
  console.log(warning.classList)
  warning.classList.add("danger-warning");
}


//Danger MODE -> Local toggle version --> Not what I want
//let DANGER_MODE = false;

//function toggleDanger() {
//  DANGER_MODE = !DANGER_MODE;
//  console.log('Danger mode:', DANGER_MODE);

//  const warning = document.getElementById('danger-warning');
//  const dangerSection = document.querySelector('.danger-section');
//  const safeSection = document.querySelector('.safe-section');
  
//  if (DANGER_MODE) {
//    warning.style.display = 'flex';
//    warning.classList.add('danger-warning');
//    dangerSection.style.display = 'none';
//    safeSection.style.display = 'block';

//  } else {
//    warning.style.display = 'none';
//    warning.classList.remove('danger-warning');
//    dangerSection.style.display = 'block';
//    safeSection.style.display = 'none';
//  }
//}

//shared memory needs server i think --> cannot be done with static website --> Abort 

//Button Notification:




//Subscribe
function subscribe() {
  const email = document.getElementById('email-input').value;
  const message = document.getElementById('subscribe-message');
  
  emailjs.send('service_bj9hb74', 'template_snakq9g', {
    subscriber_email: email,
    to_email: 'killerpantufas78@gmail.com'  // Where you want to receive notifications
  })
  .then(() => {
    message.textContent = '✅ Subscrição feita com sucesso!';
    document.getElementById('email-input').value = '';
  })
  .catch(() => {
    message.textContent = '❌ Erro. Tenta outra vez.';
  });
}


//Danger button
function notifyDanger() {
  const message = document.getElementById('danger-message');

  emailjs.send('service_bj9hb74', 'template_xl38kh7', {
    //subscriber_email: 'ALERTA DE PERIGO',
    to_email: 'killerpantufas78@gmail.com',
    //message: '🚨 Alguém reportou que o casamento está em perigo! 🔪😈'
  })
  .then(() => {
    message.textContent = 'Alerta enviado!';
    console.log('Alerta enviado! Contacta também o administrador com provas, se possível!');
  })
  .catch((error) => {
    message.textContent = '❌ Erro ao enviar alerta.';
    console.error('Erro ao enviar alerta:', error);
  });
}

