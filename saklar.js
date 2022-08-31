function saklar() {
  // console.log(params)
  let toggle1 = document.getElementById('default-toggle');
  let toggle2 = document.getElementById('default-toggle2');
  let toggle3 = document.getElementById('default-toggle3');
  // let cetrekan = toggle.checked
  let lampu1 = document.getElementById("gambar1");
  let lampu2 = document.getElementById("gambar2");
  let lampu3 = document.getElementById("gambar3");

  if (toggle1.checked) {
    lampu1.src = "assets/images/on.gif"
  } else {
    lampu1.src = "assets/images/off.gif"
  }

  if (toggle2.checked) {
    lampu2.src = "assets/images/on.gif"
  } else {
    lampu2.src = "assets/images/off.gif"
  }

  if (toggle3.checked) {
    lampu3.src = "assets/images/on.gif"
  } else {
    lampu3.src = "assets/images/off.gif"
  }
  return lampu1;
}
console.log("coba")