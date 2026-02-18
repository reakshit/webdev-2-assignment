const form = document.getElementById("eventForm");
const container = document.getElementById("eventContainercld");
const btn = document.getElementById("btn");

btn.onclick = () => {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;

  if (!title || !date || !description) return;

  createEventCard(title, date, description);
  form.reset();
};

function createEventCard(title, date, description) {
  const card = document.createElement("div");
  let delbtn = document.createElement("button")
  delbtn.textContent = "Delete";
  card.classList.add("event-card");

  card.innerHTML = `
    <h3 class="event-title">${title}</h3>
    <p class="event-date">${date}</p>
    <p class="event-desc">${description}</p>
  `;
  delbtn.onclick = () => {
    card.remove();
  }
  card.appendChild(delbtn);
  container.appendChild(card);
}
