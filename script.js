const modal = document.getElementById("pesanPopup");
const openBtn = document.getElementById("pesanModal");
const closeBtn = document.querySelector(".close-btn");

// Buka modal saat tombol Kontak Developer diklik
openBtn.onclick = function() {
  modal.style.display = "block";
}

// Tutup modal saat tombol 'X' diklik
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Tutup modal kalau user klik di luar area modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
