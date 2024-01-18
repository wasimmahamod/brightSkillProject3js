let h1 = document.querySelector("h1");
let count = 0;

let stop = setInterval(() => {
  h1.innerHTML = count++;

  if (count == h1.dataset.countnumber) {
    clearInterval(stop);
  }
}, 500);
