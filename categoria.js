import * as jquery from './node_modules/jquery/dist/jquery.js'

const games = [
    {
        name: 'Watch Dogs 2',
        company: 'Ubisoft',
        platform: ['PS4'],
        url: 'assets/game1.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: 'Rise of Tomb Raider',
        company: 'Crystal Dynamics',
        platform: ['Xbox One'],
        url: 'assets/game2.png',
        fullPrice: 'R$ 259,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: 'Batman: Arkham Knight',
        company: 'Rocksteady Studios',
        platform: ['PS4'],
        url: 'assets/game3.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: "Assassin's Creed Origins",
        company: 'Ubisoft',
        platform: ['PC'],
        url: 'assets/game4.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: "Uncharted 4 - A Thief's End",
        company: 'Naughty Dog',
        platform: ['PC'],
        url: 'assets/game5.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: 'Bloodborne',
        company: 'FormSoftware',
        platform: ['PS4'],
        url: 'assets/game6.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: "Hellblade: Senua's Sacrifice",
        company: 'Ninja Theory',
        platform: ['PC'],
        url: 'assets/game7.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: "Marvel's Spider-Man",
        company: 'Insomniac Games',
        platform: ['PS4'],
        url: 'assets/game1.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: 'Watch Dogs 2',
        company: 'Ubisoft',
        platform: ['PS4'],
        url: 'assets/game1.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: 'Rise of Tomb Raider',
        company: 'Crystal Dynamics',
        platform: ['Xbox One'],
        url: 'assets/game2.png',
        fullPrice: 'R$ 259,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: 'Batman: Arkham Knight',
        company: 'Rocksteady Studios',
        platform: ['PS4'],
        url: 'assets/game3.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: "Assassin's Creed Origins",
        company: 'Ubisoft',
        platform: ['PC'],
        url: 'assets/game4.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: "Uncharted 4 - A Thief's End",
        company: 'Naughty Dog',
        platform: ['PC'],
        url: 'assets/game5.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: 'Bloodborne',
        company: 'FormSoftware',
        platform: ['PS4'],
        url: 'assets/game6.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: "Hellblade: Senua's Sacrifice",
        company: 'Ninja Theory',
        platform: ['PC'],
        url: 'assets/game7.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
        divided: 'em até 3x de R$ 48,90'
    },
    {
        name: "Marvel's Spider-Man",
        company: 'Insomniac Games',
        platform: ['PS4'],
        url: 'assets/game1.png',
        fullPrice: 'R$ 269,90',
        message: '25% off',
        offPrice: '199,90',
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
$('.gameListGrid').html(content)

let notifSign = $('.shopBasket').html()
setTimeout(() => {
    notifSign += '<div class="notification"></div>'
    $('.shopBasket').html(notifSign)
}, 4000)

let filter = false

$('.filter').on('click', () => {
    if (filter) {
        $('.filterDiv').html('')
        $('.filterDiv').css('margin-right', '0')
        $('.gameItemImage img').css('width', '427px')
        $('.gameItemImage img').css('height', '500px')
        filter = false
    } else {
        $('.filterDiv').css('margin-right', '30px')
        $('.gameItemImage img').css('width', '371px')
        $('.gameItemImage img').css('height', '415px')
        $('.filterDiv').html(`
        
        <div class="filterType">
                    <div class="filterTypeHeader">
                        <label class="filterTypeTitle">Plataforma</label>
                        <div class="divisorHorizontal"></div>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Google Stadia</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Playstation</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Xbox One</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Xbox Series</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Nintendo Wii</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Nintendo Switch</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">PC Windows</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">PC Mac</label>
                    </div>
                </div>
                <div class="filterType">
                    <div class="filterTypeHeader">
                        <label class="filterTypeTitle">Extras</label>
                        <div class="divisorHorizontal"></div>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Novidade/Lançamento</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Desconto</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Últimas Unidades</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText"
                            >Pré-Lançamento/Em breve</label
                        >
                    </div>
                </div>
                <div class="filterType">
                    <div class="filterTypeHeader">
                        <label class="filterTypeTitle">Desenvolvedor</label>
                        <div class="divisorHorizontal"></div>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Ubisoft</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Crystal Dynamics</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">FromSoftware</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Naughty Dog</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Bethesda Softworks</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selection"></div>
                        <label class="selectionText">Capcom</label>
                    </div>
                </div>
                <div class="filterType">
                    <div class="filterTypeHeader">
                        <label class="filterTypeTitle">Valor</label>
                        <div class="divisorHorizontal"></div>
                    </div>
                    <div class="valueFilter">
                        <div class="fullLine"></div>
                        <div class="selectionLine"></div>
                        <div class="firstSelectionCircle"></div>
                        <div class="secondSelectionCircle"></div>
                        <div class="currentValue">
                            <div class="rectangle">R$ 825,00</div>
                            <div class="polygon"></div>
                        </div>
                    </div>
                    <div class="minMaxValues">
                        <label>R$ 150,00</label>
                        <label>R$ 1.500,00</label>
                    </div>
                </div>
                <div class="filterType">
                    <div class="filterTypeHeader">
                        <label class="filterTypeTitle">Ordenar por</label>
                        <div class="divisorHorizontal"></div>
                    </div>
                    <div class="filterOptions">
                        <div class="selectionOrder"></div>
                        <label class="selectionText">Mais Relevantes</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selectionOrder"></div>
                        <label class="selectionText">Menor Preço</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selectionOrder"></div>
                        <label class="selectionText">Maior Preço</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selectionOrder"></div>
                        <label class="selectionText">Mais Recentes</label>
                    </div>
                    <div class="filterOptions">
                        <div class="selectionOrder"></div>
                        <label class="selectionText">Mais Antigos</label>
                    </div>
                </div>
            </div>
        `)
        filter = true
    }
})

$('.loadMoreButton').on('click', () => {
    let fullContent = $('.gameListGrid').html()
    games.map(game => {
        fullContent += '<div class="gameItem">'
        fullContent += '<div class="gameItemImage">'
        if (game.message === 'Últimas Unidades') {
            fullContent += `<div class="gameStickerRed">${game.message}</div>`
        } else if (game.message === 'Novidade') {
            fullContent += `<div class="gameStickerBlue">${game.message}</div>`
        } else {
            fullContent += `<div class="gameStickerYellow">${game.message}</div>`
        }
        fullContent += `<img src="${game.url}" alt="Capa do jogo" />`
        fullContent += '</div>'
        fullContent += '<div class="gameItemInfo">'
        fullContent += `<label id="companyName">${game.company}</label>`
        fullContent += `<label id="gameName">${
            game.name
        } - ${game.platform.join('/')}</label>`
        if (game.offPrice) {
            fullContent += `<label id="fullPrice">${game.fullPrice}</label>`
            fullContent += `<label id="offPrice">${game.offPrice}</label>`
        } else {
            fullContent += `<label id="fullPrice"></label>`
            fullContent += `<label id="offPrice">${game.fullPrice}</label>`
        }
        fullContent += `<label id="dividedPrice">${game.divided}</label>`
        fullContent += '</div>'
        fullContent += '</div>'
    })
    $('.gameListGrid').html(fullContent)
})

$('.slideButtonRight').on('click', e => {
    let button = e.target.id
    if (button === 'destaquesRight' || button === 'destaquesImageRight') {
        console.log(button)
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
