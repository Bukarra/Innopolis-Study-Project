import './css/reset.css';
import './css/main.css';
import './css/media.css';
import './css/modal.css';

// import 'jquery';
// // import '../libs/fancybox/fancybox.umd.js';
// import './libs/owl/owl.carousel.min';
import './libs/polyfill.min';

import { createTable } from './components/films-table';
import { filmsData, filmsData2 as popularFilms } from './__data__/mocks';
import './components/blocks-films';
import './prize';
// import './city';
// import './modal2';

const table1Body = document.getElementById('block03-table-body');
const table2Body = document.getElementById('block04-table-body');

createTable(filmsData, table1Body);
createTable(popularFilms, table2Body);

// $(document).ready(function () {
//     $('.owl-carousel').owlCarousel({
//         loop: true,
//         nav: true,
//         dots: false,
//         responsiveClass: true,
//         autoplayHoverPause: true,
//         center: true,
//         responsive: {
//             400: {
//                 items: 2,
//             },

//             768: {
//                 items: 3,
//             },
//         },
//     });
// });

// $('.block01__dropdown-list').slideUp(0);

// let lngOpened = false;
// $('.block01__dropdown-trigger').on('click', function () {
//     $('.block01__dropdown-list').slideToggle('fast');
//     lngOpened = !lngOpened;
//     $(this)
//         .find('svg')
//         .css({
//             transform: `rotate(${lngOpened ? 180 : 0}deg)`,
//             'transform-origin': '50% 50%',
//         });
// });

// const scrollToTopElement = document.querySelector('#scroll-icon');

// window.onscroll = scrollIconAppear;

// function scrollIconAppear() {
//     if (document.documentElement.scrollTop > 300) {
//         scrollToTopElement.style.display = 'block';
//     } else {
//         scrollToTopElement.style.display = 'none';
//     }
// }

// // scrollToTopElement.addEventListener('click', function () {
// //     window.scrollTo({
// //         top:0,
// //         behavior: 'smooth',
// //     })
// // })

// $('#scroll-icon').click(function () {
//     $('html').animate({ scrollTop: 0 }, 1000);
// });
