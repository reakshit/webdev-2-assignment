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

