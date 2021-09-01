function contact() {




    const mainContentDiv = document.getElementById('content')


    // const contactButton = document.createElement('button')
    // contactButton.classList.add('contactButton')
    // contactButton.innerHTML = 'Contact'

    const contactButton = document.querySelector('.contactButton')



    mainContentDiv.appendChild(contactButton)


    const catPic = document.createElement('img')
    catPic.src = 'https://thumbs.dreamstime.com/b/cat-prepares-dough-baking-85976605.jpg'
    catPic.classList.add('catPicture')
    const header = document.createElement('h1')
    header.classList.add('headerKitty')
    header.textContent = 'Kitty Cuisine'
    const menuButton = document.querySelector('.menuButton')
    const homeButton = document.querySelector('.homeButton')


    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contactInfo')
    contactInfo.innerHTML = 'Phone Numbers -   360-909-5555'
    const contactAddress = document.createElement('div')
    contactAddress.classList.add('contactAddress')
    contactAddress.innerHTML = 'Address -    90210 beverly hills blvd'





    contactButton.addEventListener('click', () => {


        mainContentDiv.remove()
        mainContentDiv.textContent = ''
        mainBody.appendChild(mainContentDiv)

        mainContentDiv.appendChild(header)
        mainContentDiv.appendChild(homeButton)
        mainContentDiv.appendChild(menuButton)
        mainContentDiv.appendChild(contactButton)
        mainContentDiv.appendChild(catPic)


        mainContentDiv.appendChild(contactInfo)
        mainContentDiv.appendChild(contactAddress)
        // contactInfo.appendChild(contactAddress)



    })













}

export default contact