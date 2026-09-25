const modal = document.getElementById("pesanPopup");
const openBtn = document.getElementById("pesanModal");
const closeBtn = document.querySelector(".close-btn");
const contactForm = document.getElementById("contactForm");

// Buka modal saat tombol diklik
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

// Logic pas tombol Kirim diklik -> Buka Aplikasi Gmail / Email HP
contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah reload halaman

  const emailTujuan = "itzwildan5@gmail.com"; 

  // Ambil data dari inputan form
  const nama = contactForm.querySelector('input[type="text"]').value;
  const emailUser = contactForm.querySelector('input[type="email"]').value;
  const pesan = contactForm.querySelector('textarea').value;

  // Format Subject & Isi Pesan
  const subject = encodeURIComponent(`Pesan Kontak Developer dari ${nama}`);
  const body = encodeURIComponent(
    `Halo Atmin,\n\nAda pesan baru dari website nih:\n\n` +
    `• Nama: ${nama}\n` +
    `• Email Pengirim: ${emailUser}\n\n` +
    `Pesan / Alasan Menghubungi:\n${pesan}`
  );

  // Pake mailto: biar langsung manggil Aplikasi Email / Gmail di HP/Laptop
  window.location.href = `mailto:${emailTujuan}?subject=${subject}&body=${body}`;

  // Reset isi form & tutup modal
  contactForm.reset();
  modal.style.display = "none";
});
