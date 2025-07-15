function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear().toString();
  const clockText = `${hours}:${minutes} ${ampm} <br /> ${day}/${month}/${year}`;
  return clockText;
}

function setClock(elementId) {
  document.getElementById(elementId).innerHTML = getCurrentTime();
  setInterval(() => setClock(elementId), 10000);
}

export { setClock };
