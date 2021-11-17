import * as jquery from './node_modules/jquery/dist/jquery.js'

// localStorage.setItem('wishList', '')

let wishList = localStorage.getItem('wishList')
    ? JSON.parse(localStorage.getItem('wishList'))
    : []

const games = [
    {
        name: 'Resident Evil Village',
        company: 'Capcom',
        platform: ['Xbox One'],
        url: 'assets/Thumbnail.png',
        fullPrice: 'R$ 259,90',
        message: '25% off',
        offPrice: 'R$ 199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: 'Hitman 3',
        company: 'IO Interactive',
        platform: ['Windows'],
        url: 'assets/Thumbnail2.png',
        fullPrice: 'R$ 329,90',
        message: 'Últimas Unidades',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: 'Age of Empires IV',
        company: 'Xbox Games Studios',
        platform: ['Windows'],
        url: 'assets/Thumbnail3.png',
        fullPrice: 'R$ 599,90',
        message: 'Novidade',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: 'Stray',
        company: 'BlueTwelve Studio',
        platform: ['PS4', 'PS5'],
        url: 'assets/Thumbnail4.png',
        fullPrice: 'R$ 259,90',
        message: '50% off',
        offPrice: 'R$ 125,49',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: 'Deathloop',
        company: 'Bethesda Softworks',
        platform: ['Windows'],
        url: 'assets/Thumbnail5.png',
        fullPrice: 'R$ 467,67',
        message: 'Novidade',
        divided: 'em até 3x de R$ 48,90'
    }
]

const initialGames = [
    {
        gameTitle: 'Red Dead Redemption II',
        gamePlatforms: ['Playstation', 'PC'],
        pictureURL: 'assets/Red_Dead_Redemption_2_Logo 1.png'
    },
    {
        gameTitle: 'Mario Kart Wii',
        gamePlatforms: ['Wii'],
        pictureURL: 'assets/Red_Dead_Redemption_2_Logo 1.png'
    },
    {
        gameTitle: 'FIFA 2021',
        gamePlatforms: ['Playstation', 'PC'],
        pictureURL: 'assets/Red_Dead_Redemption_2_Logo 1.png'
    }
]

function addGame() {
    const game = $('#wishListInput').val()
    let found = false
    let include = false
    let index = null
    wishList = localStorage.getItem('wishList')
        ? JSON.parse(localStorage.getItem('wishList'))
        : []
    for (let i = 0; i < games.length; i++) {
        if (game === games[i].name) {
            for (let gameInfo of wishList) {
                if (game === gameInfo.name) {
                    include = true
                    alert('Jogo já está na lista')
                }
            }
            found = true
            index = i
            break
        }
    }
    if (!found) {
        alert('Nome inválido')
    }
    if (!include && index > -1) {
        wishList.push(games[index])
        localStorage.setItem('wishList', JSON.stringify(wishList))
    }
    $('#wishListInput').val('')
    wishListReload()
}

function removeGame() {
    const game = $('#wishListInput').val()
    if (!game) {
        alert('Insira o nome do jogo que deseja retirar da lista de desejos')
    }
    wishList = localStorage.getItem('wishList')
        ? JSON.parse(localStorage.getItem('wishList'))
        : []
    let found = false
    let index = null
    for (let i = 0; i < wishList.length; i++) {
        if (game === wishList[i].name) {
            found = true
            index = i
            break
        }
    }
    if (!found) {
        alert('Jogo não está na lista')
    } else {
        wishList.splice(index, 1)
        localStorage.setItem('wishList', JSON.stringify(wishList))
    }
    $('#wishListInput').val('')
    wishListReload()
}

$('#addButton').on('click', addGame)
$('#removeButton').on('click', removeGame)

let content = ''
games.map(game => {
    content += '<div class="gameItem">'
    content += '<div class="gameItemImage">'
    if (game.message === 'Últimas Unidades') {
        content += `<div class="gameStickerRed">${game.message}</div>`
    } else if (game.message === 'Novidade') {
        content += `<div class="gameStickerBlue">${game.message}</div>`
    } else {
        content += `<div class="gameStickerYellow">${game.message}</div>`
    }
    content += `<img src="${game.url}" alt="Capa do jogo" />`
    content += '</div>'
    content += '<div class="gameItemInfo">'
    content += `<label id="companyName">${game.company}</label>`
    content += `<label id="gameName">${game.name} - ${game.platform.join(
        '/'
    )}</label>`
    if (game.offPrice) {
        content += `<label id="fullPrice">${game.fullPrice}</label>`
        content += `<label id="offPrice">${game.offPrice}</label>`
    } else {
        content += `<label id="fullPrice"></label>`
        content += `<label id="offPrice">${game.fullPrice}</label>`
    }
    content += `<label id="dividedPrice">${game.divided}</label>`
    content += '</div>'
    content += '</div>'
})
$('.gameList').html(content)
wishListReload()

function wishListReload() {
    let wishListContent = ''
    if (!wishList) {
    } else {
        wishList.map(game => {
            wishListContent += '<div class="gameItem">'
            wishListContent += '<div class="gameItemImage">'
            if (game.message === 'Últimas Unidades') {
                wishListContent += `<div class="gameStickerRed">${game.message}</div>`
            } else if (game.message === 'Novidade') {
                wishListContent += `<div class="gameStickerBlue">${game.message}</div>`
            } else {
                wishListContent += `<div class="gameStickerYellow">${game.message}</div>`
            }
            wishListContent += `<img src="${game.url}" alt="Capa do jogo" />`
            wishListContent += '</div>'
            wishListContent += '<div class="gameItemInfo">'
            wishListContent += `<label id="companyName">${game.company}</label>`
            wishListContent += `<label id="gameName">${
                game.name
            } - ${game.platform.join('/')}</label>`
            if (game.offPrice) {
                wishListContent += `<label id="fullPrice">${game.fullPrice}</label>`
                wishListContent += `<label id="offPrice">${game.offPrice}</label>`
            } else {
                wishListContent += `<label id="fullPrice"></label>`
                wishListContent += `<label id="offPrice">${game.fullPrice}</label>`
            }
            wishListContent += `<label id="dividedPrice">${game.divided}</label>`
            wishListContent += '</div>'
            wishListContent += '</div>'
        })
    }
    $('#wishList').html(wishListContent)
}

let notifSign = $('.shopBasket').html()
setTimeout(() => {
    notifSign += '<div class="notification"></div>'
    $('.shopBasket').html(notifSign)
}, 4000)

setTimeout(() => {
    $('.backgroundImage').attr('src', '/assets/Background Banner1.png')
    $('.gameImage img').attr('src', '/assets/MarioKartWiiLogo.png')
    $('.gameNavigation').html(
        `
        <div class="bulletInactive"></div>
        <div class="bulletActive"></div>
        <div class="bulletInactive"></div>
        `
    )
    $('.gameInfo').html(
        `<label id="gameTitle">${initialGames[1].gameTitle}</label>
                    <label id="gamePlatform"
                        >Já disponível para <strong>${initialGames[1].gamePlatforms}</strong></label
                    >
                    <button type="button">Comprar</button>`
    )
}, 5000)

setTimeout(() => {
    $('.backgroundImage').attr('src', '/assets/Background Banner2.png')
    $('.gameImage img').attr('src', '/assets/fifa-21-logo.png')
    $('.gameNavigation').html(
        `
        <div class="bulletInactive"></div>
        <div class="bulletInactive"></div>
        <div class="bulletActive"></div>
        `
    )
    $('.gameInfo').html(
        `<label id="gameTitle">${initialGames[2].gameTitle}</label>
                    <label id="gamePlatform"
                        >Já disponível para <strong>${initialGames[2].gamePlatforms[0]}</strong>
                         e <strong>${initialGames[2].gamePlatforms[1]}</strong></label
                    >
                    <button type="button">Comprar</button>`
    )
}, 10000)

$('.slideButtonRight').on('click', e => {
    let button = e.target.id
    if (button === 'destaquesRight' || button === 'destaquesImageRight') {
        $('#destaquesDaSemana').animate({ scrollLeft: '+=386' }, 1000)
    } else if (button === 'emAltaRight' || button === 'emAltaImageRight') {
        $('#emAlta').animate({ scrollLeft: '+=386' }, 1000)
    } else if (
        button === 'promocoesRight' ||
        button === 'promocoesImageRight'
    ) {
        $('#promocoes').animate({ scrollLeft: '+=386' }, 1000)
    }
})

$('.slideButtonLeft').on('click', e => {
    let button = e.target.id
    if (button === 'destaquesLeft' || button === 'destaquesImageLeft') {
        $('#destaquesDaSemana').animate({ scrollLeft: '-=386' }, 1000)
    } else if (button === 'emAltaLeft' || button === 'emAltaImageLeft') {
        $('#emAlta').animate({ scrollLeft: '-=386' }, 1000)
    } else if (button === 'promocoesLeft' || button === 'promocoesImageLeft') {
        $('#promocoes').animate({ scrollLeft: '-=386' }, 1000)
    }
})

$('.options label').on('click', () => {
    window.location.href = 'categoria.html'
})

$('.gameItem').on('click', e => {
    let currentGame = e.target.parentElement.parentElement
    const companyName = currentGame.children[1].children[0].textContent
    const [gameName] =
        currentGame.children[1].children[1].textContent.split(' - ')
    const fullPrice = currentGame.children[1].children[2].textContent
    const offPrice = currentGame.children[1].children[3].textContent
    const url = currentGame.children[0].children[1].attributes[0].value
    localStorage.setItem('companyName', companyName)
    localStorage.setItem('gameName', gameName)
    localStorage.setItem('fullPrice', fullPrice)
    localStorage.setItem('offPrice', offPrice)
    localStorage.setItem('url', url)
    window.location.href = 'produto.html'
})
