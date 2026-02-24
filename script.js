// Плавный скролл по кнопке "Мои направления" и ссылкам меню
document.addEventListener("DOMContentLoaded", () => {
    const scrollButtons = document.querySelectorAll("[data-scroll], .nav__link");
  
    scrollButtons.forEach((el) => {
      el.addEventListener("click", (e) => {
        const targetSelector = el.dataset.scroll || el.getAttribute("href");
        if (!targetSelector || !targetSelector.startsWith("#")) return;
  
        const target = document.querySelector(targetSelector);
        if (!target) return;
  
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  
    // Форма "пробное занятие" — имитация отправки
    const form = document.getElementById("trial-form");
    const success = document.getElementById("trial-success");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        if (success) success.hidden = true;

        const nameInput = form.querySelector("#name");
        const phoneInput = form.querySelector("#phone");

        const name = (nameInput?.value || "").trim();
        const phone = (phoneInput?.value || "").trim();

        const phoneLooksOk = phone.replace(/[^\d+]/g, "").length >= 10;

        if (nameInput) nameInput.setAttribute("aria-invalid", String(!name));
        if (phoneInput) phoneInput.setAttribute("aria-invalid", String(!phone || !phoneLooksOk));
  
        if (!name || !phone || !phoneLooksOk) {
          return;
        }
  
        // Здесь можно подключить реальную отправку (через fetch/AJAX)
        form.reset();
        if (nameInput) nameInput.setAttribute("aria-invalid", "false");
        if (phoneInput) phoneInput.setAttribute("aria-invalid", "false");
        if (success) success.hidden = false;
      });
    }
  });