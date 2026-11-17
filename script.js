const mentors = [
  { name: "Marina Sol", level: "principiante", detail: "Equilibrio y primeros trucos", initials: "MS" },
  { name: "Leo Ramos", level: "avanzado", detail: "Park y street skating", initials: "LR" },
  { name: "Vale Cruz", level: "principiante", detail: "Seguridad y conducción urbana", initials: "VC" },
];

const spots = [
  { name: "Parque Central", location: "Zona Norte", sessions: "3 sesiones esta semana" },
  { name: "Plaza de las Ruedas", location: "Centro", sessions: "Abierto todos los días" },
  { name: "Skate Park Río", location: "Zona Sur", sessions: "Taller sábado 10:00" },
];

const mentorGrid = document.querySelector("#mentor-grid");
const spotList = document.querySelector("#spot-list");

function renderMentors(filter = "todos") {
  const visibleMentors = filter === "todos"
    ? mentors
    : mentors.filter((mentor) => mentor.level === filter);

  mentorGrid.innerHTML = visibleMentors.map((mentor) => `
    <article class="mentor-card">
      <div class="avatar" aria-hidden="true">${mentor.initials}</div>
      <div>
        <h3>${mentor.name}</h3>
        <p>${mentor.detail}</p>
        <span class="tag">${mentor.level}</span>
      </div>
    </article>
  `).join("");
}

spotList.innerHTML = spots.map((spot) => `
  <article class="spot-card">
    <p class="eyebrow">${spot.location}</p>
    <h3>${spot.name}</h3>
    <div class="spot-meta">
      <span>${spot.sessions}</span>
      <span aria-hidden="true">→</span>
    </div>
  </article>
`).join("");

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderMentors(button.dataset.filter);
  });
});

document.querySelector("#join-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(event.currentTarget).get("email");
  document.querySelector("#form-message").textContent = `¡Gracias! Te avisaremos en ${email}.`;
  event.currentTarget.reset();
});

renderMentors();
