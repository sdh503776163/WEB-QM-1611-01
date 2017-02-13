// <div class="swiper-container">
//     <div class="swiper-wrapper">
//         <div class="swiper-slide">Slide 1</div>
//         <div class="swiper-slide">Slide 2</div>
//         <div class="swiper-slide">Slide 3</div>
//     </div>
//     <!-- 如果需要分页器 -->
//     <div class="swiper-pagination"></div>
    
//     <!-- 如果需要导航按钮 -->
//     <div class="swiper-button-prev"></div>
//     <div class="swiper-button-next"></div>
    
//     <!-- 如果需要滚动条 -->
//     <div class="swiper-scrollbar"></div>
// </div>

var mySwiper = new Swiper ('.swiper-container', {
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    pagination : '.swiper-pagination',
    paginationClickable :true,
    paginationType : 'progress',
    loop :true,
    autoplay :2000,
    effect :'cube',
    keyboardControl:true,
});