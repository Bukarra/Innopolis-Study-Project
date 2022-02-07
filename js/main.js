$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsiveClass:true,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            400:   {
                items: 2
            },

            768:   {
                items: 3
            }
        }
    });
})

$('.block01__dropdown-list').slideUp(0)

let lngOpened = false;
$('.block01__dropdown-trigger').on('click', function() {
    $('.block01__dropdown-list').slideToggle('fast');
    lngOpened = !lngOpened;
    $(this).find('svg').css({
        transform: `rotate(${lngOpened ? 180 : 0}deg)`,
        'transform-origin': '50% 50%'
    })
})

const scrollToTopElement = document.querySelector('#scroll-icon');

window.onscroll = scrollIconAppear;

function scrollIconAppear() {
    if (document.documentElement.scrollTop > 300) {
    scrollToTopElement.style.display = "block";
  } else {
    scrollToTopElement.style.display = "none";
  }
}

// scrollToTopElement.addEventListener('click', function () {
//     window.scrollTo({
//         top:0,
//         behavior: 'smooth',
//     })
// })

$('#scroll-icon').click(function () {
    $('html').animate({ scrollTop: 0 }, 1000);
})
