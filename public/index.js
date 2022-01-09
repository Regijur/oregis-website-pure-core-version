function doFetch(url) {
    fetch(url).then(res =>{
        if(res.ok) return res.json()
    })   
}

fetch("https://itch.io/api/1/jYczBr5szfluohoE2pa3718apIHiU7p7EZCTE8kX/my-games").then(res => {console.log(res)})