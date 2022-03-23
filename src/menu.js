export default function menuPage() {
    const container = document.querySelector('.content')
    const subContent = document.querySelector('.sub-content')
    const para = document.createElement('p')

    while (subContent.firstChild) {
        subContent.removeChild(subContent.lastChild)
    }

    subContent.classList.add('intro')
    para.innerText = "This is a menu page"

    subContent.append(para)
    container.append(subContent)

}