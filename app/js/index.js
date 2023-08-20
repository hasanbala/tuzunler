import { Contact } from "./contact.js";

const contact = new Contact();
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".closebtn");
const container = document.querySelector(".container");
const sidenav = document.querySelector(".sidenav");
const bodyHtml = document.querySelector("body, html");
const glideContainer = document.querySelector(".glide");
const dropdown = document.querySelector(".dropdownBtn");
const dropdownArrow = document.querySelector(".dropdownArrow");
const splideContainer = document.querySelector(".splide");
const dynamicYear = document.querySelector(".dynamicYear");
const modal = document.querySelector(".privacyDidAgreeModal");
const modalContainer = document.querySelector(".privacyDidAgreeModalContainer");
const agreeModal = document.querySelector(".agreeModal");
const closeModal = document.querySelector(".closeModal");
const formButton = document.querySelector(".contactButton");
const newDate = new Date();

const configSplide = {
  startAt: 0,
  gap: "30px",
  type: "loop",
  perPage: 3,
  perMove: 1,
  drag: "false",
  autoplay: true,
};

const eventListener = () => {
  if (modal)
    document.addEventListener(
      "DOMContentLoaded",
      handleCookies,
      handleAddDynamicDate
    );

  if (splideContainer)
    document.addEventListener(
      "DOMContentLoaded",
      new Splide(splideContainer, configSplide).mount()
    );

  // if (formButton) formButton.addEventListener("click", sendContactFormData);
  openMenu.addEventListener("click", handleOpenSideMenu);
  dropdown.addEventListener("click", handleDropdown);
  closeMenu.addEventListener("click", handleCloseSideMenu);
  bodyHtml.addEventListener("click", handleClickOutsideSidenav);
  agreeModal.addEventListener("click", handleAgreeCookies);
  closeModal.addEventListener("click", handleCloseModal);
};

const handleOpenSideMenu = (e) => {
  e.stopPropagation();
  sidenav.classList.add("activeSidenav");
  container.classList.add("activeContainer");
};

const handleCloseSideMenu = () => {
  sidenav.classList.remove("activeSidenav");
  container.classList.remove("activeContainer");
  dropdown.nextElementSibling.classList.remove("active");
  dropdownArrow.classList.remove("activeArrow");
};

const handleClickOutsideSidenav = (e) => {
  if (!sidenav.contains(e.target)) {
    handleCloseSideMenu();
    dropdown.nextElementSibling.classList.remove("active");
    dropdownArrow.classList.remove("activeArrow");
  }

  if (!modalContainer.contains(e.target)) {
    modal.style.display = "none";
  }
};

const handleDropdown = () => {
  dropdown.nextElementSibling.classList.toggle("active");
  dropdownArrow.classList.toggle("activeArrow");
};

const handleCookies = () => {
  if (!document.cookie.includes("privacyDidAgree=")) {
    modal.style.display = "flex";
  } else {
    console.log("else");
  }
};

const handleAddDynamicDate = () => {
  dynamicYear.innerHTML = newDate.getFullYear();
};

const handleAgreeCookies = () => {
  document.cookie = "privacyDidAgree = true";
  modal.style.display = "none";
};

const handleCloseModal = () => {
  modal.style.display = "none";
};

const sendContactFormData = (e) => {
  contact.sendFormDataToServer(e);
};

eventListener();
