async function get(){
   const rep = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
   const data = await rep.json();
   const recipes=data.recipes; 

   const result =recipes.map(function(user){

    return `
    <div class="rep">
    <h2>${user.title}</h2>
    <img src="${user.image_url}"/> 
    </div>
    
    `;


   })

document.querySelector(".recipes .row").innerHTML=result;


}

get();

