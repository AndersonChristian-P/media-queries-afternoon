const buttons = document.getElementsByClassName("menu-button")
const button = buttons[0]

const navbars = document.getElementsByClassName("navbar")
const navbar = navbars[0]

function addVisible() {
  if (navbar.classList.contains("visible")) {
    navbar.classList.remove("visible")
    navbar.classList.add("invisible")
  } else {
    navbar.classList.add("visible")
    navbar.classList.remove("invisible")
  }
}

button.addEventListener("click", addVisible)



