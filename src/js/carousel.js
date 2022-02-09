// script for outcome

$("#owl-carousel-outcome").owlCarousel({
  loop: true,
  margin: 10,
  center: true,
  nav: true,
  navText: [
    "<span aria-label='Previous'> &#x21fd</span>",
    "<span aria-label='Next'> &#x21fe</span>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

//   script for help section

$("#owl-carousel-help").owlCarousel({
  loop: true,
  margin: 10,
  center: true,
  nav: true,
  autowidth: true,
  navText: [
    "<span aria-label='Previous'> &#x21fd</span>",
    "<span aria-label='Next'> &#x21fe</span>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
