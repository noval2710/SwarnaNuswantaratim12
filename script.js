const kolomCari = document.getElementById("cari");
const kartu = document.querySelectorAll(".kartu");
const pesanKosong = document.getElementById("kosong");

kolomCari.addEventListener("input", function () {
  const kata = this.value.toLowerCase().trim();
  let jumlah = 0;

  kartu.forEach(function (item) {
    const cocok = (
      item.innerText + " " + (item.dataset.cari || "")
    ).toLowerCase().includes(kata);

    item.hidden = !cocok;
    if (cocok) jumlah++;
  });

  pesanKosong.hidden = jumlah !== 0;
});