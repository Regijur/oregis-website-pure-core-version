function main(){
    await fetch('https://itch.io/api/1/cbVBpielYYcicJZLmrRPgJXyHorX93GVkII2UAN2/my-games').then(function(response){
    if(response.ok) {
        console.log(response.json())
      } else {
        console.log('Network response was not ok.');
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
}


main()