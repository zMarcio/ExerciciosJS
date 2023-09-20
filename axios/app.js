async function fetchData(){
    try{

        const response = await axios("https://pokeapi.co/api/v2/pokemon?offset=20&limit=1000")

        const data = response.data
        // console.log(data.results)
        
        const listDados = document.getElementById("dados")
        data.results.forEach(nome => {
            urlPokemon(nome).then((r)=>{
                console.log(r)
                const img = document.createElement('img')
                img.src = r
                const li = document.createElement('li')
                li.textContent += `Pokemons: ${nome.name}`
                li.appendChild(img)
                listDados.appendChild(li)
                console.log(nome)
                
            })
        });
    }catch(error){
        console.log(error)
    }
}

async function urlPokemon(url){
    try {
        const response = await axios(url);
        const data = response.data;
        console.log("data de urlPokemon:",data)
        const imgUrl = data.sprites.front_default;
        console.log("imgUrl de urlPokemon",imgUrl)
        return imgUrl;
    } catch (error) {
        console.error("Erro ao obter a URL da imagem:", error);
        return null;
    }
}

fetchData()