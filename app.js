const cargar=async()=>{
    const api= await fetch("https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=72de94b3371942b4e81eedeabdd360e9&hash=3dd413303f25e4dbd95c32545f2a9aec");
    const response= await api.json();
    console.log(response)
    let nombres;
response.data.results.map(item=>{
  
let name=item.name



nombres+="<h1>"+name+"</h1>";
})
let name = document.querySelector("#name")
name.innerHTML=nombres;

}
