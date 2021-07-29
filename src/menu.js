import basicLoadout from "./basicLoadout"
// basicLoadout()


function menu() {

    const mainContentDiv = document.getElementById('content')


    // const menuButton = document.createElement('button')
    // menuButton.classList.add('menuButton')
    // menuButton.innerHTML = 'Menu'


    const menuButton = document.getElementsByClassName('menuButton')


    mainContentDiv.appendChild(menuButton)




    // const menuButton = document.getElementsByClassName('menuButton')

    menuButton.addEventListener('click', () => {


        mainContentDiv.remove()


    })




}

export default menu