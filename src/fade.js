export function fadeIn(song) {
  let running = true;

  const { volume } = song;
  song.volume = 0.0;

  const fade = setInterval(() => {
    if (!running || song.volume === volume) {
      clearInterval(fade);
    } else {
      song.volume = Math.min(volume, song.volume + 0.1);
    }
  }, 200);

  return {
    cancel: () => {
      running = false;
    }
  };
}
