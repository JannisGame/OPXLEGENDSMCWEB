// Minimal frontend validation + fake submit (replace with real backend)
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('applyForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  msg.textContent = '';
  if (!form.checkValidity()) {
    msg.textContent = 'Bitte fülle alle Pflichtfelder korrekt aus.';
    msg.style.color = '#ffcccb';
    return;
  }

  const data = new FormData(form);
  const payload = {};
  data.forEach((v,k)=> payload[k]=v);

  // Simulierter Request — ersetze URL mit deinem echten Endpoint (z.B. Netlify Function / Formspree)
  try {
    // Beispiel: await fetch('/.netlify/functions/submitApplication', {method:'POST',body:JSON.stringify(payload)});
    await fakeRequest(payload);
    msg.textContent = 'Deine Bewerbung wurde gesendet. Danke!';
    msg.style.color = '#b4ffd9';
    form.reset();
  } catch(err) {
    msg.textContent = 'Fehler beim Senden. Versuch es später erneut.';
    msg.style.color = '#ffb3b3';
  }
});

function fakeRequest(data){
  return new Promise((res,rej)=>{
    console.log('Bewerbung (simuliert):',data);
    setTimeout(()=>res({ok:true}),900);
  });
}