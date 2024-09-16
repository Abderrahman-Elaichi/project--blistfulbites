var swiper = new Swiper(".mySwiper", {
   
    loop:true,
    centeredSlides:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
       
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        
     
      },
    },
  });

  var swiper = new Swiper(".our-menu", {
    spaceBetween:10,
     loop:true,
     centeredSlides:true,
     autoplay:{
         delay:9500,
         disableOnInteraction:false,
         },
         navigation: {
             nextEl: ".swiper-button-next",
             prevEl: ".swiper-button-prev",
           },
     breakpoints: {
       0: {
         slidesPerView: 1,
         
       },
     
       768: {
         slidesPerView: 2,
         
       },
       1024: {
         
      
       },
     },
   });
   
   document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');
    const orderSummary = document.getElementById('order-summary');
    const summaryText = document.getElementById('summary-text');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // User details
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const location = document.getElementById('location').value;

        // Menu items
        const items = [
            { name: 'Cheeseburger', id: 'cheeseburger-quantity', price: 34 },
            { name: 'Cheese Sandwich', id: 'cheese-sandwich-quantity', price: 22 },
            { name: 'Chicken Burgers', id: 'chicken-burgers-quantity', price: 23 },
            { name: 'Spicy Chicken', id: 'spicy-chicken-quantity', price: 33 },
            { name: 'Hot Dog', id: 'hot-dog-quantity', price: 24 },
            { name: 'Fruit Salad', id: 'fruit-salad-quantity', price: 13 },
            { name: 'Cocktails', id: 'cocktails-quantity', price: 12 },
            { name: 'Nuggets', id: 'nuggets-quantity', price: 14 },
            { name: 'Sandwich', id: 'sandwich-quantity', price: 13 },
            { name: 'French Fries', id: 'french-fries-quantity', price: 15 },
            { name: 'Milk Shake', id: 'milk-shake-quantity', price: 3 },
            { name: 'Iced Tea', id: 'iced-tea-quantity', price: 2 },
            { name: 'Orange Juice', id: 'orange-juice-quantity', price: 4 },
            { name: 'Lemon Tea', id: 'lemon-tea-quantity', price: 3 },
            { name: 'Coffee', id: 'coffee-quantity', price: 5 }
        ];

        let summary = `Order Summary for ${name}:\nPhone: ${phone}\nLocation: ${location}\n\n`;

        let total = 0;
        items.forEach(item => {
            const quantity = document.getElementById(item.id).value;
            if (quantity > 0) {
                const itemTotal = item.price * quantity;
                total += itemTotal;
                summary += `${item.name}: ${quantity} x $${item.price} = $${itemTotal}\n`;
            }
        });

        if (total > 0) {
            summary += `\nTotal: $${total}`;
        } else {
            summary = 'No items selected.';
        }

        summaryText.textContent = summary;
        orderSummary.classList.remove('hidden');
    });
});
