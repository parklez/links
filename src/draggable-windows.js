const draggableElements = [];


function makeElementDraggable(element) {
  let previousX = 0;
  let previousY = 0;
  let currentX = 0;
  let currentY = 0;
  
  const header = document.getElementById(`${element.id}-header`);
  header.addEventListener('mousedown', startDragging);
  draggableElements.push(element);

  function startDragging(event) {
    event.preventDefault();
    currentX = event.clientX;
    currentY = event.clientY;

    updateZIndex(element);
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);
  }

  function updateZIndex(activeElement) {
    const maxZIndex = draggableElements.length;

    draggableElements.forEach((element, index) => {
      const zIndex = element.style.zIndex ? parseInt(element.style.zIndex) : index;

      if (element === activeElement) {
        element.style.zIndex = maxZIndex;
      } else {
        element.style.zIndex = Math.min(zIndex, maxZIndex - 1);
      }
    });
  }

  function drag(event) {
    event.preventDefault();

    previousX = currentX - event.clientX;
    previousY = currentY - event.clientY;
    currentX = event.clientX;
    currentY = event.clientY;

    element.style.top = `${element.offsetTop - previousY}px`;
    element.style.left = `${element.offsetLeft - previousX}px`;
  }

  function stopDragging() {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDragging);
  }
}

export { makeElementDraggable };
