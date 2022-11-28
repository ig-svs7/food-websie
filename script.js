let review = [
    {
      image: 'image-1.jpg',
      author: 'Emily',
      job:'UI/UX Designer',
      text:'Best Website Ever that I have used till now,Cheaper and UI friendly.'
    }
    ,
    {
        image: 'image-2.jpg',
        author:'Johnson',
        job:'Graphic Designer',
        text:'The taste of the food that foodex is delivering is incredible and in much cheaper prices, astonishing!.'
        
          
      }
      ,
      {
        image: 'image-3.jpg',
        author:'Rose',
        job:'Web Developer',
        text:'I didnt expected the delievery of the food this fast. The website that is perfect in everything.'
        
          
      }
]

const images = document.querySelector('.img')
const author = document.querySelector('.author')
const job = document.querySelector('.job')
const text = document.querySelector('.text')
const prev_btn = document.querySelector('.prev-btn')
const next_btn = document.querySelector('.next-btn')

const ul = document.querySelector('ul')
const hamburger_menu = document.querySelector('.hamburger-menu')
let currentItem= 0;

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



