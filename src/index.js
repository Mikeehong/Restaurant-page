import homePage from "./homepage.js";
import menuPage from "./menu.js";

const container = document.createElement('div')
const header = document.createElement('header')
const navBar = document.createElement('nav')
const ul = document.createElement('ul')
const homeLink = document.createElement('a')
const menuLink = document.createElement('a')
const aboutLink = document.createElement('a')
const subContent = document.createElement('div')

container.classList.add('content')
subContent.classList.add('sub-content')

homeLink.addEventListener('click', homePage)
menuLink.addEventListener('click', menuPage)

homeLink.textContent = 'HOME'
menuLink.textContent = 'MENU'
aboutLink.textContent = 'ABOUT'
homeLink.setAttribute('href', '#Home')
menuLink.setAttribute('href', '#MENU')
aboutLink.setAttribute('href', '#ABOUT')

ul.append(homeLink, menuLink, aboutLink)
navBar.append(ul)
header.append(navBar)
container.append(header)

document.body.append(container, subContent)

