function basicLoadout() {


    const mainContentDiv = document.getElementById('content')
    const loadOutContaier = document.createElement('div')

    const menuButton = document.createElement('button')
    menuButton.classList.add('menuButton')
    menuButton.innerHTML = 'Menu'


    const catPic = document.createElement('img')
    catPic.src = 'https://thumbs.dreamstime.com/b/cat-prepares-dough-baking-85976605.jpg'
    catPic.classList.add('catPicture')


    const header = document.createElement('h1')
    header.classList.add('test')
    header.textContent = 'Welcome to Kitty Cuisine'
    const paragraph = document.createElement('p')
    paragraph.classList.add('paragraph')
    paragraph.textContent = '-Kitty Cuisine is your source for the freshest and finest sources of Kitty food in the entire Northwest'



    // mainContentDiv.appendChild(menuButton)

    mainContentDiv.appendChild(loadOutContaier)
    loadOutContaier.appendChild(catPic)
    loadOutContaier.appendChild(header)
    loadOutContaier.appendChild(paragraph)
    loadOutContaier.appendChild(menuButton)
    // mainContentDiv.appendChild(catPic)
    // mainContentDiv.appendChild(header)
    // mainContentDiv.appendChild(paragraph)




    console.log('This is another test from basic loadout')

}


export default basicLoadout