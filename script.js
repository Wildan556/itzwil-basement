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

// Logic pas tombol Kirim diklik -> Buka Gmail
contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah reload halaman

  // Email tujuan pakai email lu
  const emailTujuan = "itzwildan5@gmail.com"; 

  // Ambil data dari inputan form
  const nama = contactForm.querySelector('input[type="text"]').value;
  const emailUser = contactForm.querySelector('input[type="email"]').value;
  const pesan = contactForm.querySelector('textarea').value;

  // Format Subject & Isi Pesan buat Gmail
  const subject = encodeURIComponent(`Pesan Kontak Developer dari ${nama}`);
  const body = encodeURIComponent(
    `Halo Atmin,\n\nAda pesan baru dari website nih:\n\n` +
    `• Nama: ${nama}\n` +
    `• Email Pengirim: ${emailUser}\n\n` +
    `Pesan / Alasan Menghubungi:\n${pesan}`
  );

  // Link khusus buat ngebuka Gmail Web tab baru
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTujuan}&su=${subject}&body=${body}`;

  // Buka Gmail
  window.open(gmailUrl, "_blank");

  // Reset isi form & tutup modal
  contactForm.reset();
  modal.style.display = "none";
});
