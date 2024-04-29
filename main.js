const container = 
document.querySelector('.container');


const scrollTopBtn = 
document.querySelector('.scrollTop')


window.addEventListener('scroll',() => {

  const { scrollTop, scrollHeight, clientHeight } =
  document.documentElement
  if (Math.round(scrollTop) + Math.round(clientHeight) === Math.round(scrollHeight)) {
    scrollTopBtn.classList.add('active');
    addArticles(10)
  }

})


function scrollToTop() {
  
  window.scrollTo({
    top : 0,
    behavior : 'smooth'
  });
  
  scrollTopBtn.classList.remove('active');

  
}


scrollTopBtn.addEventListener('click', scrollToTop)


function createHex() {
  
  const chars = 'abcdef0123456789'
  let hex = ''
  for (let i = 0; i < 6; i++) {
    const randomIndex =
    Math.floor(Math.random() * chars.length)
    
    hex +=  chars[randomIndex]
  }
  return hex
  
}


const addArticles = (number) => {
  
  for (let i = 0; i < number; i++) {
    const card = 
    document.createElement('div');
    
   card.style.backgroundColor = 
   '#' + createHex();
   card.nodeValue = createHex()
   card.onclick = copyHex
   
   container.appendChild(card)
  }
  
  
}

addArticles(21)



function copyHex() {
 
  const bgColor = 
  this.style.backgroundColor
  
  try {
    navigator.clipboard.writeText(bgColor);
    alert('RGB value copied')
  } catch (e) {
    alert(e)
  }
  
  
  
}