const body = document.querySelector(".outer");
const second = document.querySelector(".second");
const enterEffect = () => {
  body.style.backgroundImage = "url('going-in.gif')";
  let zoom = 100;
  setTimeout(() => {
    clearInterval(m);
    body.style.display = 'none', second.style.display = 'block';
  }, 3000)
    var m = setInterval(() => {
      body.style.backgroundSize = `${zoom}%`, body.style.backgroundPosition = `50% 50%`, zoom+= 0.3;
    })
}
