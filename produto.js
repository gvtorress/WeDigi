import * as jquery from './node_modules/jquery/dist/jquery.js'

const games = [
    {
        name: 'Resident Evil Village',
        company: 'Capcom',
        platform: ['Xbox One'],
        url: 'assets/Thumbnail.png',
        fullPrice: 'R$ 259,90',
        message: '25% off',
        offPrice: '199,90',
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
    },
    {
        name: 'Deathloop',
        company: 'Bethesda Softworks',
        platform: ['Windows'],
        url: 'assets/Thumbnail5.png',
        fullPrice: 'R$ 467,67',
        message: 'Novidade',
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

let notifSign = $('.shopBasket').html()
setTimeout(() => {
    notifSign += '<div class="notification"></div>'
    $('.shopBasket').html(notifSign)
}, 4000)

$('.rightArrow').on('click', () => {
    $('.gamePictures').animate({ scrollLeft: '+=458' }, 1000)
})

$('.leftArrow').on('click', () => {
    $('.gamePictures').animate({ scrollLeft: '-=458' }, 1000)
})

$('.slideButtonRight').on('click', () => {
    $('.gameList').animate({ scrollLeft: '+=386' }, 1000)
})

$('.slideButtonLeft').on('click', () => {
    $('.gameList').animate({ scrollLeft: '-=386' }, 1000)
})
