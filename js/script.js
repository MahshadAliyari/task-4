// =========================
// DROPDOWN
// =========================

const dropdownBtn = document.querySelector("#dropdownBtn");
const dropdownMenu = document.querySelector("#dropdownMenu");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
  dropdownBtn.classList.toggle("active");
});

// =========================
// TABS
// =========================

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.dataset.tab;

    // حذف active از همه دکمه‌ها
    tabButtons.forEach((button) => {
      button.classList.remove("active");
    });

    // مخفی کردن همه محتواها
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    // فعال کردن دکمه انتخاب‌شده
    button.classList.add("active");

    // پیدا کردن محتوای مربوط به Tab
    const activeContent = document.querySelector(`#${tabId}`);

    activeContent.classList.add("active");
  });
});

// =========================
// MODAL
// =========================

const itemList = document.querySelector("#itemList");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#closeModal");

const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");

// =========================
// EVENT DELEGATION
// =========================

itemList.addEventListener("click", (event) => {
  // -------------------------
  // باز کردن Modal
  // -------------------------

  if (event.target.matches(".details-btn")) {
    const product = event.target.dataset.product;

    if (product === "laptop") {
      modalTitle.textContent = "Luka Pro";

      modalDescription.textContent =
        "لپ‌تاپ حرفه‌ای لوکا با عملکرد قدرتمند، طراحی مدرن و مناسب برای کار و مطالعه.";
    }

    if (product === "phone") {
      modalTitle.textContent = "Luka X";

      modalDescription.textContent =
        "گوشی هوشمند لوکا با طراحی زیبا، عملکرد سریع و تجربه کاربری روان.";
    }

    if (product === "headphone") {
      modalTitle.textContent = "Luka Air";

      modalDescription.textContent =
        "هدفون بی‌سیم لوکا با صدای باکیفیت، طراحی راحت و مناسب برای استفاده روزمره.";
    }

    // نمایش Modal
    modal.classList.add("active");
  }

  // -------------------------
  // حذف محصول
  // -------------------------

  if (event.target.matches(".delete-btn")) {
    const item = event.target.closest("li");

    item.remove();
  }
});

// =========================
// بستن Modal با دکمه ×
// =========================

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

// =========================
// بستن Modal با کلیک روی فضای بیرونی
// =========================

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});

// =========================
// بستن Modal با کلید Escape
// =========================

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.remove("active");
  }
});
