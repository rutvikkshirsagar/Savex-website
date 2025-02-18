const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // slidesPerView:1.5,
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // },
    // autoplay: {
    //     delay: 2000,
    //   },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  var swiperBrand = new Swiper("#swiper-brand", {
    direction: 'horizontal',
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop:false,
    // autoplay: {
    //     delay: 3000,
    //   },
    pagination: {
      el: "#pagination-02",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.5,
      },
      1000: {
        slidesPerView: 3,
      },

      1200:{
        slidesPerView:3
      }
    },
  });



  var swiperCategory = new Swiper("#swiper-category", {
    direction: 'horizontal',
    spaceBetween: 1,
    // loop:true,
    // autoplay: {
    //     delay: 1000,
    //   },

    pagination: {
      el: "#pagination-03",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      360: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1.8,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 2.5,
      },

      1200:{
        slidesPerView:3
      },

      1400:{
        slidesPerView:3.5
      },

      1600:{
        slidesPerView:4.5
      }
    },
    
  });


  const ctx = document.querySelector('#myChart');

      new Chart(ctx, {
        type: 'line',
        responsive:true,
        data: {
          labels: ['HP', 'Lenovo', 'Benq', 'Bose', 'Solarwinds',],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });