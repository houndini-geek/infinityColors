const container = 
document.querySelector('.container');


const scrollTopBtn = 
document.querySelector('.scrollTop')




window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // Always run this code when the user scrolls
  if (Math.round(scrollTop + clientHeight) >= Math.round(scrollHeight)) {
    // If at bottom, add the 'active' class to scrollTopBtn (assuming it's defined elsewhere)
    if (scrollTopBtn) {
      scrollTopBtn.classList.add('active');
    }

    // Call the addArticles function with a parameter (assuming it's defined elsewhere)
    if (typeof addArticles === 'function') {
      addArticles(10);
    }
  }
}); 





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