function setInitialBackgroundColor() {
    const value = document.querySelector('input[type="range"]').valueAsNumber;
    const h = Math.floor((value / 100) * 360);
    const s = 50;
    const l = 50;
    const hex = `hsl(${h}, ${s}%, ${l}%)`;
    const taskbarHex = `hsl(${h}, ${s}%, ${l}%, 60%)`;
    document.documentElement.style.setProperty('--window-background-color', hex);
    // This is a hack to make the taskbar transparent
    document.documentElement.style.setProperty('--taskbar-color', taskbarHex);
}

setInitialBackgroundColor();

document.querySelector('input[type="range"]').addEventListener('input', setInitialBackgroundColor);

function setClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString();
    const clockText = `${hours}:${minutes} ${ampm} <br /> ${day}/${month}/${year}`;
    document.getElementById('clock').innerHTML = clockText;
}

setClock();

setInterval(setClock, 10000);
