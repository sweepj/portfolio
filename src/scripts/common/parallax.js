export default function parallax(){
  const parallaxContainer = document.querySelector('.parallax');
  const layers = parallaxContainer.children;
  
  const moveLayers = e =>{
    const initialX = window.innerWidth / 2 - e.pageX;
    const initialY = window.innerHeight / 2 - e.pageY;
    console.log(initialX,   initialY);
    Array.from(layers).forEach((layer, i) => {
      const divider = i / 100;
      const positionX = initialX * divider;
      const positionY = initialY * divider;
      const bottomPosition = window.innerHeight / 2 * divider;
      const image = layer.firstElementChild;
      layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
      layer.style.bottom = `${-bottomPosition}px`;
    });
  }
  window.addEventListener('mousemove', moveLayers);
}

