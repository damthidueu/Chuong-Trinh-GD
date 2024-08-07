 // Lấy tham chiếu đến ảnh bằng JavaScript
 var img = document.getElementById("chuyendong");
 var img2 = document.getElementById("ngoisao");
 var img3 = document.getElementById("maytinh");
 

 setInterval(function () {

     if (img.style.opacity === "0") {

         img.style.opacity = "1";
     } else {

         img.style.opacity = "0";
     }
 }, 700);

 setInterval(function () {

     if (img2.style.opacity === "0") {

         img2.style.opacity = "1";
     } else {

         img2.style.opacity = "0";
     }
 }, 700);



 const swiper = new Swiper('.mySwiper', {
     slidesPerView: 3,
     slidesPerGroup: 1,
     spaceBetween: 10,
     loop: true,  // Bật chế độ lặp
     loopedSlides: 8,  // Số slide được lặp lại
     autoplay: {
         delay: 3000, // Thời gian chuyển slide, tính bằng milliseconds (3000ms = 3 giây)
         disableOnInteraction: false,
     },
     pagination: {
         el: '.swiper-pagination',
         clickable: true,
     },
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
 });

 
