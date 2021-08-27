// import basicLoadout from "./basicLoadout"
// basicLoadout()


function menu() {


    const mainBody = document.getElementById('mainBody')
    const mainContentDiv = document.getElementById('content')

    const catPic = document.createElement('img')
    catPic.src = 'https://thumbs.dreamstime.com/b/cat-prepares-dough-baking-85976605.jpg'
    catPic.classList.add('catPicture')
    const header = document.createElement('h1')
    header.classList.add('test')
    header.textContent = 'Welcome to Kitty Cuisine'

    // const basicText = document.createElement('h1')
    // basicText.textContent = 'basic append test'
    // mainBody.appendChild(basicText)


    const menuButton = document.querySelector('.menuButton')
    const homeButton = document.querySelector('.homeButton')
    const contactButton = document.querySelector('.contactButton')

    // console.log(contactButton)

    console.log(menuButton)


    mainContentDiv.appendChild(menuButton)


    function menuItem(src, info, price) {
        const item = document.createElement('div')
        item.classList.add('item')
        const img = document.createElement('img')
        img.setAttribute('src', src)
        img.classList.add('menuImg')


        const description = document.createElement('div')
        description.classList.add('description')

        const itemName = document.createElement('h3')
        itemName.textContent = info

        const itemPrice = document.createElement('h2')
        itemPrice.textContent = price

        description.appendChild(itemName)
        description.appendChild(itemPrice)

        item.appendChild(img)
        item.appendChild(description)
        return item

    }

    const items = [
        menuItem('https://cookiesandcups.com/wp-content/uploads/2020/03/chickennuggets-3.jpg',
            'Kitten Nuggies', '$6.50', 'Kitten Nuggies'),
        menuItem('https://bromabakery.com/wp-content/uploads/2016/03/Caramel-Milkshake-3-1067x1600.jpg', 'Meowkshakes', '$3.50', 'Meowkshakes'),
        menuItem('https://www.acouplecooks.com/wp-content/uploads/2020/01/Broiled-Salmon-006.jpg', 'Salmon', '$9'),
        menuItem('https://loveandfoodforeva.com/wp-content/uploads/2016/09/breakfast_burritos_love_and_food_foreva_5.jpg', 'Purritos', '$7'),
        menuItem('https://www.simplyrecipes.com/thmb/h3vmpNn2nfPoejM2eu7GlF4nmhw=/3900x2600/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Seared-Ahi-Tuna-LEAD-2-7d0de98ff4b94257b2a665357a2940df.jpg', 'Tuna', '$8'),
        menuItem('http://embed.widencdn.net/img/beef/gow2yjawey/exact/classic-beef-kabobs-horizontal.tif?keep=c&u=7fueml', 'Kitten Kabobs', '$8.50'),
        menuItem('', '', ''),
    ]

    // items.forEach((item) => {
    //     mainContentDiv.appendChild(item)
    // })



    // const menuButton = document.getElementsByClassName('menuButton')

    menuButton.addEventListener('click', () => {


        mainContentDiv.remove()
        mainContentDiv.textContent = ''
        mainBody.appendChild(mainContentDiv)

        const menuDiv = document.createElement('div')
        menuDiv.classList.add('grid-lay')

        // const menuDiv = document.createElement('h1')
        // menuDiv.textContent = 'This a test menu H1'
        // mainContentDiv.appendChild(menuDiv)

        mainContentDiv.appendChild(catPic)
        mainContentDiv.appendChild(header)
        mainContentDiv.appendChild(homeButton)
        mainContentDiv.appendChild(menuButton)
        mainContentDiv.appendChild(contactButton)
        mainContentDiv.appendChild(menuDiv)


        items.forEach((item) => {
            menuDiv.appendChild(item)
        })



    })




}

export default menu