
let cart = []
const btns = [... document.querySelectorAll(".one")]
// console.log(btns);
btns.forEach((btn) => {
   btn.addEventListener('click', () => {
    const name = btn.dataset.class 
    cart.push({name, qty: 4})
    console.log(cart);
   })
})