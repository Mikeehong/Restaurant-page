export default function homePage() {
    const container = document.querySelector('.content')
    const subContent = document.querySelector('.sub-content')
    const para = document.createElement('p')

    while (subContent.firstChild) {
        subContent.removeChild(subContent.lastChild)
    }

    console.log("hey")

    subContent.classList.add('intro')
    para.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quas inventore omnis veritatis doloribus voluptatibus perferendis alias modi, facilis, beatae, qui autem ratione? Dicta, dolores magni! Repellendus natus rerum vero!"

    subContent.append(para)
    container.append(subContent)

    
}