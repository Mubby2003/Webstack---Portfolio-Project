const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      siteNav.classList.remove("is-open");
    }
  });
}

document.querySelector("#year").textContent = String(new Date().getFullYear());

const certificateDialog = document.querySelector("#certificate-dialog");
const certificatePreview = document.querySelector("[data-certificate-view]");
const certificateFullImage = document.querySelector("#certificate-full-image");
const certificateClose = document.querySelector("[data-certificate-close]");

if (certificateDialog && certificatePreview && certificateFullImage) {
  certificatePreview.addEventListener("click", () => {
    certificateFullImage.src = certificatePreview.querySelector("img").src;
    certificateDialog.showModal();
  });

  certificateClose?.addEventListener("click", () => certificateDialog.close());
  certificateDialog.addEventListener("click", (event) => {
    if (event.target === certificateDialog) certificateDialog.close();
  });
}
