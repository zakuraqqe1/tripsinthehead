const iframe = document.getElementById('soundcloud-player');
const slider = document.getElementById('volume-slider');

// Инициализация плеера
const widget = SC.Widget(iframe);

slider.addEventListener('input', () => {
  const volume = slider.value; // 0 - 100
  widget.setVolume(volume); // управляет громкостью
});
