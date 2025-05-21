const countdown = () => {
  const partyDate = new Date("April 30, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = partyDate - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

setInterval(countdown, 1000);