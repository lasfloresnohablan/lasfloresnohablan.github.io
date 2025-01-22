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
