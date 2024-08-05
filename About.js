
            // JavaScript for automatic slideshow
            var slideIndex = 0;
            var slides = ["Images/1.jpg", "Images/2.jpg", "Images/3.jpg", "Images/4.jpg", "Images/5.jpg"]; // Add more image URLs as needed

            function showSlide() {
                var image = document.getElementById("slideshow-image");
                image.src = slides[slideIndex];
                slideIndex = (slideIndex + 1) % slides.length; // Cycle through images
            }

            // Initial call to show the first slide
            showSlide();

            // Set interval to automatically change slide every 3 seconds
            setInterval(showSlide, 2000); // Change slide every 3 seconds (3000 milliseconds)
