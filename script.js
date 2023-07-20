const handleResponce = () => {
    fetch('https://swapi.dev/api/people/1/')
        .then(responce => responce.json())
        .then(data => {
            fetch("https://swapi.dev/api/vehicles/14/")
                .then(responce => responce.json())
                .then(vehicle => {
                    fetch("https://swapi.dev/api/starships/12/")
                        .then(responce => responce.json())
                        .then(starship => alert(`Hello ${data.name} and you are ${data.birth_year}, your ${vehicle.name}, your ${starship.name}`))
                })
    })
        .catch(error => console.log(error))
}

handleResponce()