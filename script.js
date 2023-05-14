let review = [
    {
      image: 'image-1.jpg',
      author: 'Emily',
      job:'Architect',
      text:'Best Website Ever that I have used till now,Cheaper and UI friendly.'
    }
    ,
    {
        image: 'image-2.jpg',
        author:'Johnson',
        job:'Interior Designer',
        text:'The taste of the food that foodex is delivering is incredible and in much cheaper prices, astonishing!.'
        
          
      }
      ,
      {
        image: 'image-3.jpg',
        author:'Rose',
        job:'Flavorist',
        text:'I didnt expected the delievery of the food this fast. The website that is perfect in everything.'
        
          
      }
]




const images = document.querySelector('.img')
const author = document.querySelector('.author')
const job = document.querySelector('.job')
const text = document.querySelector('.text')
const prev_btn = document.querySelector('.prev-btn')
const next_btn = document.querySelector('.next-btn')
const buy_page = document.querySelector('.buy-page')
const order = document.querySelectorAll('.order')
const exit = document.querySelector('.exit')
const cart = document.querySelector('.cart')
const container = document.querySelector('.container')
const TOTAL = document.querySelector('.total')



const ul = document.querySelector('ul')
const hamburger_menu = document.querySelector('.hamburger-menu')
let currentItem= 0;



cart.addEventListener('click' , function() {
    buy_page.classList.add('active')
})
order.forEach((e) =>{
    e.addEventListener('click', function(event) {
        let box = event.target.parentElement

       buy_page.classList.add('active')

       

       
      
       container.innerHTML += `

       <div class="container-2">
       
   <div>

   <h3 class="cart-product-name">${box.querySelector('.name').textContent}</h3>

   <img src="${box.querySelector('.product-image').src}" alt="" class="product-image">

   <p class="cart-price">${box.querySelector('.price').textContent}</p>
   </div>

<div>
   <i class="fa-solid fa-trash removebtn"></i>
   </div>

   </div>
       `
    
    
       
       totalUpdate()
       localStorage.setItem('item')

      
    })
})



   




exit.addEventListener('click', () =>{
    buy_page.classList.remove('active')
})
function totalUpdate() {
    let total = 0
    let cart_price = buy_page.querySelectorAll('.cart-price')
    cart_price.forEach((e) => {
       let price = Number(e.textContent.replace('$', ''))
       total = total + price
      
     
    

    }) 
    TOTAL.textContent = 'Total =$ '+ total
    
   
}
function togglemenu() {
    hamburger_menu.classList.toggle('active')
    ul.classList.toggle('active')
}




let currentItemList = function() {
    images.src = review[currentItem].image
    author.textContent = review[currentItem].author
    job.textContent = review[currentItem].job
    text.textContent = review[currentItem].text
}

next_btn.addEventListener('click' , function() {
    currentItem++
    if(currentItem > review.length  - 1) {
        currentItem = 0
    } 
    currentItemList()
 
  
   
})
prev_btn.addEventListener('click' , function() {
    currentItem--
    if(currentItem <0) {
        currentItem = review.length - 1
    } 
    currentItemList()
 
  
   
})



