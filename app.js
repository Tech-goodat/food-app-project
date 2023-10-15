//grab elements from the DOM
const foodContainer=document.getElementById('foodContainer')
function displayMenuItems(){
  fetch('http://localhost:3000/menu')
  .then((response)=> response.json())
  .then((data)=>{
    console.log(data);
    data.forEach(food=>{
      const cardsContainer = document.createElement("div");
        cardsContainer.classList.add("foodCard");
        cardsContainer.innerHTML = `
        <img src="${food.image}" alt="${food.name}">  
        <h1>${food.name}</h1>
          <p> ${food.description}</p>
          <h4> ${food.price}</h4>
          <p> ${food.description}</p>
          <p> ${food.category}</p>
          
          <button class="order-button">Order Now</button>
          `;
          const orderButton = cardsContainer.querySelector('.order-button');
          orderButton.addEventListener('click', function () {
            // Handle the order logic here, 
            alert(`Order placed for ${food.name}`);
            alert(` ${food.price}`)
        });
          foodContainer.append(cardsContainer)
})
})
}
displayMenuItems();
    