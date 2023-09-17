async function teste(opa = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"){
    try{
        const response = await fetch(opa)
        const data = await response.json()
        const guardaResult = data.results
        
        console.log ("O Q VEM EM DATA: ", data)
        console.log ("O Q VEM EM GUARDARESULT: ", guardaResult)  
        
        const elementoDiv = document.createElement("div");
        for (const pokemon of guardaResult){
            // console.log(typeof(pokemon))
            console.log("POKEMON: ",pokemon.name)
            
            const responseImagem = await fetch(pokemon.url)
            const dataImagem = await responseImagem.json()
            console.log("DATA: ",dataImagem.sprites.front_default)
            
            const pokemonName = await pokemon.name
            const img = await dataImagem.sprites.front_default

            // Crie novos elementos HTML em cada iteração
            
            const elementoH1 = document.createElement("h1");
            const elementoImg = document.createElement("img");

            elementoH1.innerHTML = pokemonName;
            elementoImg.src = img;


            elementoDiv.appendChild(elementoH1);
            elementoDiv.appendChild(elementoImg);
        }
        document.body.appendChild(elementoDiv);
        
        
    }catch(error){
        console.error(`${error}`)
    }
}
teste()



// fetch("https://api.kanye.rest")
// .then((r)=>{
//     if(!r.ok){
//         throw new Error("PAU NO SEU CU")
//     }
//     // console.log(r)
//     return r.json()
// })
// .then((data)=>{
//     const foda = data.quote
//     console.log(data)
//     fodase(foda)
// })
// .catch((error)=>{
    //     console.error(error)
// })

    // const promiseTeste = (a = String) => {
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             if(a != "Hello"){
    //                 return reject(a, " precisa ser uma String de hello")
    //             }
    //             return resolve(a)
    //         },1000)
    //     })
    // }
    
    
    
    // promiseTeste("AMEM JESUS!")
    //     .then((r) => {
    //         console.log(`Aqui o acerto: ${r}`);
    //     })
    //     .catch((error) => {
    //         console.error(`Erro ${error}`);
    //     });
    
    
    
    // const diretorio = `${__dirname}\\index.html`
