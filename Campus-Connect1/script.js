// Carousel (if used in index.html)
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
if (slides.length) setInterval(nextSlide, 6000);

// Navbar scroll effect
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
if (toggle) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Light/Dark Mode Toggle
const toggleButton = document.getElementById("theme-toggle");
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  if (toggleButton) toggleButton.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);


const modal = document.getElementById("preferences-modal");
  const openBtn = document.getElementById("openPreferences");
  const closeBtn = document.getElementById("close-modal");
  const form = document.getElementById("preferences-form");

  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const domain = document.getElementById("domain").value;
    const batch = document.getElementById("batch").value;

    localStorage.setItem("browsePreferences", JSON.stringify({ domain, batch }));
    alert("Preferences saved!");
    modal.style.display = "none";
  });

window.addEventListener("DOMContentLoaded", () => {
  const batchSelect = document.getElementById("batch");
  if (batchSelect && batchSelect.tagName === "SELECT") {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 10; i++) {
      const year = currentYear - i;
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      batchSelect.appendChild(option);
    }
  }
});




window.addEventListener("DOMContentLoaded", () => {
  const profileUpload = document.getElementById('profileUpload');
  const profilePreview = document.getElementById('profilePreview');
  const uploadToast = document.getElementById('uploadToast');

  if (profileUpload && profilePreview) {
    profileUpload.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function () {
          profilePreview.src = reader.result;

          // Show toast
          uploadToast.style.display = 'block';
          uploadToast.style.opacity = 1;

          // Fade out manually after 2 seconds
          setTimeout(() => {
            uploadToast.style.transition = 'opacity 0.5s ease';
            uploadToast.style.opacity = 0;
            setTimeout(() => uploadToast.style.display = 'none', 500);
          }, 2000);
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

window.addEventListener("DOMContentLoaded", () => {
    const setupForm = document.getElementById("setupForm");

    setupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = {
        firstname: setupForm.firstname.value,
        lastname: setupForm.lastname.value,
        username: setupForm.username.value,
        email: setupForm.email.value,
        phone: setupForm.phone.value,
        role: setupForm.role.value,
        bio: setupForm.bio.value,
        college: setupForm.college.value,
        stream: setupForm.stream.value,
        passing_year: setupForm.passing_year.value,
        job_role: setupForm.job_role.value
      };

      localStorage.setItem("userProfile", JSON.stringify(formData));
      alert("✅ Profile saved successfully!");
    });
  });
