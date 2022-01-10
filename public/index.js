const key = process.env.ITCHIO_KEY

let mygames = fetch(`https://itch.io/api/1/${key}/my-games`)
    .then(res => res.json())
    .then(res => res.games)

mygames.then(e => {
    e.map((e,i) => { MakeCardGames(e,i) })
})

function MakeCardGames(gameInfo, index) {
    let bannerLink = gameInfo.cover_url
    let gameName = gameInfo.title
    let gameDescription = gameInfo.short_text
    let gameItchLink = gameInfo.url

    if(index == 0){
        document.getElementsByClassName("gameContainer")[0].innerHTML = ""    
    }

    document.getElementsByClassName("gameContainer")[0].innerHTML += `<div class="cardGame">
    <img class="gameBanner" src=${bannerLink}
        alt="Banner do Jogo">
    <div class="gameInfo">
        <h2 class="gameName">${gameName}</h2>
        <p class="gameDescription"><strong>Descrição:</strong> ${gameDescription} </p>
        <a href=${gameItchLink} target="_blank">Clique para jogar</a>
    </div>
</div>`
}
