const typeAgua = () => {

    fetch('https://api.pokemontcg.io/v1/cards?types=water')
        .then((res) => res.json())
        .then((data) => {

            data = data['cards'];

            let output = ''

            data.forEach(cards => {

                output += `
                <div class="card d-flex m-2" style="width: 15rem;">
                    <img class="card-img-top" src="${cards.imageUrl}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title text-center">${cards.name}</h5>
                    </div>
                </div>
                `
            })

            document.querySelector('#resultPokemon').innerHTML = output;
        })

}

const typeFogo = () => {

    fetch('https://api.pokemontcg.io/v1/cards?types=fire')
        .then((res) => res.json())
        .then((data) => {

            data = data['cards'];

            let output = ''

            data.forEach(cards => {

                output += `
                <div class="card d-flex m-2" style="width: 15rem;">
                    <img class="card-img-top" src="${cards.imageUrl}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title text-center">${cards.name}</h5>
                    </div>
                </div>
                `
            })

            document.querySelector('#resultPokemon').innerHTML = output;
        })
}

const typeGrama = () => {
   
    fetch('https://api.pokemontcg.io/v1/cards?types=grass')
    .then((res) => res.json())
    .then((data) => {

        data = data['cards'];

        let output = ''

        data.forEach(cards => {

            output += `
            <div class="card d-flex m-2" style="width: 15rem;">
                <img class="card-img-top" src="${cards.imageUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title text-center">${cards.name}</h5>
                </div>
            </div>
            `
        })

        document.querySelector('#resultPokemon').innerHTML = output;
    })

}

const typeEletrico = () => {
    
    fetch('https://api.pokemontcg.io/v1/cards?types=Lightning')
    .then((res) => res.json())
    .then((data) => {

        data = data['cards'];

        let output = ''

        data.forEach(cards => {

            output += `
            <div class="card d-flex m-2" style="width: 15rem;">
                <img class="card-img-top" src="${cards.imageUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title text-center">${cards.name}</h5>
                </div>
            </div>
            `
        })

        document.querySelector('#resultPokemon').innerHTML = output;
    })

}


document.querySelector('#btnAgua').addEventListener('click', typeAgua);

document.querySelector('#btnFogo').addEventListener('click', typeFogo);

document.querySelector('#btnGrama').addEventListener('click', typeGrama);

document.querySelector('#btnEletrico').addEventListener('click', typeEletrico);

