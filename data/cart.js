
let cart = []
const btns = document.querySelectorAll(".one")

btns.forEach((btn) => {
   btn.addEventListener('click', () => {
    const name = btn.dataset.class 
    cart = {name, quanity: 'one'}
    console.log(cart);
   })
})