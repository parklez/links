function changeAeroColor() {
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

export { changeAeroColor };
