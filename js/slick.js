$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 1500,
});

$(".test").on("mouseenter", (event) => {
  $(event.target).siblings().animate({ height: "380px"})
})

$(".test").on("mouseleave", (event) => {
  $(event.target).siblings().animate({ height: "100px"})
})

// $(".test").on("click", (event) => {
//   $(event.target).siblings().animate({ height: "380px"})
//   console.log(($(event.target).siblings().children("h2"))[0].innerText)
// })
      