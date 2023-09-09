setInterval(getCurrentDate, 1000);

function getCurrentDate() {
  const date = new Date();

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString(undefined, options);

  const displayDate = document.getElementById("day");
  displayDate.textContent = currentDate;
}

function getCurrentTime() {
  const date = new Date();

  const currentTime = date.toLocaleTimeString();

  const displayTime = document.getElementById("time");
  displayTime.textContent = currentTime;
}

getCurrentDate();
