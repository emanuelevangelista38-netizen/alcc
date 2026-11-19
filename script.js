/**
 * ALC ENGENHARIA — Interatividades Vanilla JS
 * Anti-AI-Slop / Impeccable Standard
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Acordeão de Perguntas Frequentes (FAQ)
  const faqButtons = document.querySelectorAll(".faq-question-btn");

  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentItem = btn.closest(".faq-item");
      const isCurrentlyOpen = currentItem.classList.contains("open");

      // Fecha todos os itens
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("open");
        const button = item.querySelector(".faq-question-btn");
        if (button) {
          button.setAttribute("aria-expanded", "false");
          const indicator = button.querySelector(".faq-indicator");
          if (indicator) indicator.textContent = "▾";
        }
      });

      // Se não estava aberto, abre o clicado
      if (!isCurrentlyOpen) {
        currentItem.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        const indicator = btn.querySelector(".faq-indicator");
        if (indicator) indicator.textContent = "▴";
      }
    });
  });

  // 2. Formulário de Orçamento com Redirecionamento Direto ao WhatsApp
  const quoteForm = document.getElementById("quote-form");
  const formFeedback = document.getElementById("form-feedback");
  const feedbackLink = document.getElementById("feedback-link");

  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim() || "";
      const phone = document.getElementById("phone")?.value.trim() || "";
      const service = document.getElementById("service")?.value || "";
      const message = document.getElementById("message")?.value.trim() || "";

      let text = `Olá! Vim pelo site da ALC Engenharia e quero solicitar um orçamento.\n\n`;
      text += `• Nome: ${name}\n`;
      text += `• Telefone/WhatsApp: ${phone}\n`;
      text += `• Serviço: ${service}\n`;
      if (message) {
        text += `• Detalhes do imóvel: ${message}\n`;
      }

      const whatsappUrl = `https://wa.me/5542999551276?text=${encodeURIComponent(text)}`;

      // Abre no WhatsApp
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // Feedback visual e link alternativo caso haja bloqueador de pop-ups
      if (formFeedback && feedbackLink) {
        feedbackLink.href = whatsappUrl;
        formFeedback.style.display = "flex";
      }
    });
  }

  // 3. Efeito de scroll suave e sutil elevação no header
  const header = document.querySelector(".site-header");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 20) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    },
    { passive: true }
  );
});
