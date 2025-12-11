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
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const status = document.getElementById("formStatus");
    const data = new FormData(this);

    status.style.display = "block";
    status.textContent = "Sending...";

    try {
      const response = await fetch(this.action, {
        method: this.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.className = "form-status success";
        status.textContent = "Message sent successfully ✨";
        this.reset();
      } else {
        status.className = "form-status error";
        status.textContent = "Oops! Something went wrong. Try again.";
      }
    } catch (error) {
      status.className = "form-status error";
      status.textContent = "Network error. Please check your connection.";
    }
  });
