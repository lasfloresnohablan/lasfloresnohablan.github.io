// Fetch the header HTML and insert it into the #header div
fetch('header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to load header: ${response.statusText}`);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => {
        console.error(error);
    });

// Add event listeners for the testimonial blocks
const blocks = document.querySelectorAll('.testimonial-block');

blocks.forEach(block => {
    block.addEventListener('click', () => {
        blocks.forEach(b => b.classList.remove('testimonial-active'));
        block.classList.add('testimonial-active');
    });
});

// Fetch and include the reusable section from "unadm_pre-footer.html"
fetch('unadm_pre-footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('unadm-pre-footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading the UNADM pre-footer section:', error));
// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Close all panels
        for (var j = 0; j < acc.length; j++) {
            if (acc[j] !== this) {
                acc[j].classList.remove("active");
                acc[j].nextElementSibling.style.display = "none";
            }
        }

        // Toggle the clicked panel
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

