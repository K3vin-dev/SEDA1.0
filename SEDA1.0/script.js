// Dark mode toggle + persistent preference
(function () {
  const btn = document.getElementById("themeToggle");
  const icon = document.getElementById("modeIcon");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.textContent = "☀️";
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const dark = document.body.classList.contains("dark-mode");
    icon.textContent = dark ? "☀️" : "🌙";

    localStorage.setItem("theme", dark ? "dark" : "light");
  });

  // Apply saved theme on load
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }

  // On change, toggle class and save preference
  toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
})();

// Simple contact form handler (demo)
document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    // Minimal UX feedback
    const btn = this.querySelector('button[type="submit"]');
    const original = btn.innerText;
    btn.innerText = "Sending...";
    btn.disabled = true;

    // Simulate sending (replace with actual fetch/ajax)
    setTimeout(() => {
      btn.innerText = "Message Sent";
      btn.classList.add("btn-success");
      setTimeout(() => {
        btn.innerText = original;
        btn.disabled = false;
        btn.classList.remove("btn-success");
        this.reset();
      }, 1500);
    }, 900);
  });
