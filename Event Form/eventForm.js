const form = document.querySelector("#eventForm");
const typeSelect = document.querySelector("#ticketType");
const codeContainer = document.querySelector("#codeContainer");
const codeLabel = document.querySelector("#codeLabel");
const codeInput = document.querySelector("#code");
const errorsDiv = document.querySelector("#errors");
const ticketDiv = document.querySelector("#ticket");

const EVENT_CODE = "EVENT131";

typeSelect.addEventListener("change", () => {
  const type = typeSelect.value;
  codeInput.value = "";
  if (type === "Student") {
    codeLabel.textContent = "Student I#";
    codeInput.placeholder = "9 digit I number";
  } else if (type === "Guest") {
    codeLabel.textContent = "Access Code";
    codeInput.placeholder = "Event code";
  }
  codeContainer.classList.toggle("hidden", !type);
});

function parseLocalDate(value) {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function validate() {
  const errors = [];
  const data = new FormData(form);
  const first = data.get("firstName").trim();
  const last = data.get("lastName").trim();
  const email = data.get("email").trim();
  const type = data.get("ticketType");
  const date = data.get("eventDate");
  const code = data.get("code").trim();

  if (!first) errors.push("First name is required.");
  if (!last) errors.push("Last name is required.");
  if (!email || !form.email.checkValidity()) errors.push("A valid email is required.");
  if (!type) errors.push("Please choose a ticket type.");

  if (!date) {
    errors.push("Please choose an event date.");
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (parseLocalDate(date) <= today) {
      errors.push("Event date must be later than today's date.");
    }
  }

  if (type === "Student" && !/^\d{9}$/.test(code)) {
    errors.push("Student I# must be exactly 9 digits.");
  } else if (type === "Guest" && code !== EVENT_CODE) {
    errors.push("Invalid access code.");
  }

  return errors;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorsDiv.textContent = "";
  ticketDiv.classList.add("hidden");

  const errors = validate();
  if (errors.length) {
    for (const message of errors) {
      const p = document.createElement("p");
      p.textContent = message;
      errorsDiv.append(p);
    }
    return;
  }

  const data = new FormData(form);
  const dateText = parseLocalDate(data.get("eventDate")).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const ticketNumber = Math.floor(100000 + Math.random() * 900000);

  ticketDiv.textContent = "";
  const heading = document.createElement("h2");
  heading.textContent = "Your Ticket";
  ticketDiv.append(heading);

  const lines = [
    ["Ticket #", ticketNumber],
    ["Name", `${data.get("firstName").trim()} ${data.get("lastName").trim()}`],
    ["Email", data.get("email").trim()],
    ["Type", data.get("ticketType")],
    ["Date", dateText],
  ];
  for (const [label, value] of lines) {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = `${label}: `;
    p.append(strong, String(value));
    ticketDiv.append(p);
  }
  ticketDiv.classList.remove("hidden");
});
