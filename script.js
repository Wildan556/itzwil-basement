// ==========================================
// 1. ELEMEN SELEKTOR
// ==========================================
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("pesanPopup");
const openBtns = document.querySelectorAll(".pesanModal");
const closePesan = document.querySelector(".close-pesan");
const contactForm = document.getElementById("contactForm");

// ==========================================
// 2. FUNGSI SIDEBAR & OVERLAY
// ==========================================
function toggleSidebar() {
  if (sidebar && overlay) {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}

// Otomatis tutup sidebar kalau salah satu menu di dalamnya diklik
const sidebarLinks = document.querySelectorAll(".sidebar a");
sidebarLinks.forEach(link => {
  link.addEventListener("click", function() {
    // Kalau menu yang diklik itu contact, biarkan modal dibuka dulu baru tutup sidebar
    if (sidebar.classList.contains("active")) {
      toggleSidebar();
    }
  });
});

// ==========================================
// 3. FUNGSI MODAL CONTACT
// ==========================================
// Buka modal saat tombol contact di Navbar / Sidebar diklik
openBtns.forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault(); // Mencegah link loncat ke atas
    modal.style.display = "block";
  });
});

// Tutup modal saat tombol 'X' (&times) di modal diklik
if (closePesan) {
  closePesan.addEventListener("click", function() {
    modal.style.display = "none";
  });
}

// Tutup modal / sidebar kalau user ngeklik di luar area (background)
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// ==========================================
// 4. FUNGSI FORM EMAIL (CONTACT ATMIN)
// ==========================================
if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const emailTujuan = "itzwildan5@gmail.com"; 

    // Ambil input dari form
    const nama = contactForm.querySelector('input[type="text"]').value;
    const emailUser = contactForm.querySelector('input[type="email"]').value;
    const pesan = contactForm.querySelector('textarea').value;

    // Format pesan buat Gmail / Email app
    const subject = encodeURIComponent(`Pesan Kontak Developer dari ${nama}`);
    const body = encodeURIComponent(
      `Halo Atmin,\n\nAda pesan baru dari website nih:\n\n` +
      `• Nama: ${nama}\n` +
      `• Email Pengirim: ${emailUser}\n\n` +
      `Pesan / Alasan Menghubungi:\n${pesan}`
    );

    // Buka aplikasi email
    window.location.href = `mailto:${emailTujuan}?subject=${subject}&body=${body}`;

    // Reset & Tutup Modal
    contactForm.reset();
    modal.style.display = "none";
  });
}