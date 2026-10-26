/* ============================================
   🍦 Tutti Frutti — Interacciones de la página
   ============================================ */

/* ---------- Menú mobile ---------- */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const abierto = navLinks.classList.toggle("open");
  menuBtn.classList.toggle("open", abierto);
  menuBtn.setAttribute("aria-expanded", abierto);
});

// Cerrar el menú al tocar un link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

/* ---------- Filtro de sabores ---------- */
const chips = document.querySelectorAll(".chip");
const sabores = document.querySelectorAll(".sabor");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    // Estado visual del chip activo
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");

    const filtro = chip.dataset.filter;

    sabores.forEach((sabor) => {
      const mostrar = filtro === "todos" || sabor.dataset.cat === filtro;
      sabor.classList.toggle("hidden", !mostrar);
    });
  });
});

/* ---------- Aparición al hacer scroll ---------- */
const aRevelar = document.querySelectorAll(".card, .section-head");

aRevelar.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observer.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.12 }
);

aRevelar.forEach((el) => observer.observe(el));

/* ---------- Formulario de contacto ----------
   Es un envío de demostración (no llama a un servidor).
   Para hacerlo real, se puede conectar con Formspree,
   EmailJS o un backend propio. */
const form = document.getElementById("contactForm");
const formOk = document.getElementById("formOk");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Simulación de envío
  formOk.hidden = false;
  form.reset();

  setTimeout(() => {
    formOk.hidden = true;
  }, 4000);
});
