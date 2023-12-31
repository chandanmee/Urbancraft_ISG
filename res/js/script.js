// document.addEventListener("DOMContentLoaded", function() {
//     var navbar = document.querySelector(".navbar");

//     window.addEventListener("scroll", function() {
//         if (window.scrollY > 50) {
//             navbar.style.backgroundColor = "white";
//             navbar.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
//         } else {
//             navbar.style.backgroundColor = "transparent";
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('.navbar');
    var navbarHeight = navbar.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('navbar-scroll');
        } else {
            navbar.classList.remove('navbar-scroll');
        }
    });
})

function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var organisationName = document.getElementById("organisationName").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var message = document.getElementById("message").value;
    var isValid = true;
  
    // Clear previous error messages
    document.getElementById("fullNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("orgNameError").textContent = "";
    document.getElementById("mobileNumberError").textContent = "";
    document.getElementById("messageError").textContent = "";
  
    if (fullName.length < 5) {
      document.getElementById("fullNameError").textContent = "Full Name must be at least 5 characters.";
      isValid = false;
    }
    
    // Add email validation logic here if needed
  
    if (organisationName.length < 5) {
      document.getElementById("orgNameError").textContent = "Organisation Name must be at least 5 characters.";
      isValid = false;
    }
  
    // if (mobileNumber.length < 10) {
    //   document.getElementById("mobileNumberError").textContent = "Mobile Number must be at least 10 characters.";
    //   isValid = false;
    // }

    if (mobileNumber.length < 10 || !(/^\d+$/.test(mobileNumber))) {
      document.getElementById("mobileNumberError").textContent = "Mobile Number must be at least 10 digits and contain only numbers.";
      isValid = false;
    }
  
    if (message.length < 5) {
      document.getElementById("messageError").textContent = "Message must be at least 5 characters.";
      isValid = false;
    }
  
    return isValid;
  }




  // jquery - slick carousel - hero

  $(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Hide default navigation arrows
        dots: false, // Hide default navigation dots
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        fade: true
    });

    // Custom navigation buttons
    $('.prev').click(function(){
        $('.carousel').slick('slickPrev');
    });
    $('.next').click(function(){
        $('.carousel').slick('slickNext');
    });
});

$(document).ready(function(){
$('.promotional-container').slick({
  autoplay:true,
  autoplaySpeed: 3000,
  arrows: true, // Hide default navigation arrows
  dots: true, // Hide default navigation dots
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
})
});


// top - categories



// $('.top-categories-list').slick({
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 3
// });

// $(document).ready(function(){
//   $('.top-categories-list').slick({

//   });
// });

// slick for product-view-showcase
$(document).ready(function(){
  $('.product-showcase-scroll ul').slick({
    dots: true,
    infinite: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

// scroolll to right
$(document).ready(function () {
  // Define the amount to scroll (1rem in this example)
  var scrollAmount = 16; // Assuming 1rem is equal to 16 pixels

  // Cache the container element
  var $container = $('.product-showcase-scroll ul');

  // Attach click event to the button
  $('#scrollRightButton').on('click', function () {
    // Calculate the new scroll position
    var newScrollLeft = $container.scrollLeft() + scrollAmount;

    // Animate the scrolling
    $container.animate({ scrollLeft: newScrollLeft }, 300);
  });
});



$(document).ready(function () {
  var scrollAmount = 50; // Adjust the scroll amount as needed
  var $container = $('.product-showcase-scroll');

  $('.scroll-to-left').on('click', function () {
    var newScrollLeft = $container.scrollLeft() - scrollAmount;
    $container.animate({ scrollLeft: newScrollLeft }, 300);
  });

  $('.scroll-to-right').on('click', function () {
    var newScrollLeft = $container.scrollLeft() + scrollAmount;
    $container.animate({ scrollLeft: newScrollLeft }, 300);
  });
});