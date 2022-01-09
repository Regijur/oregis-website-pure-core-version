function doFetch(url) {
    fetch(url).then(res =>{
        if(res.ok) return res.json()
    })   
}

fetch("https://itch.io/api/1/IxlsqUw1JInt9SsIi7tcEjxSyoDr006CjHrRWsCR/my-games").then(res => {console.log(res)})