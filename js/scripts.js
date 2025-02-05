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


// breadcrumbs
        document.addEventListener("DOMContentLoaded", function() {
            const breadcrumbsContainer = document.getElementById("breadcrumbs");
            const pathArray = window.location.pathname.split("/").filter(p => p);

            let breadcrumbHTML = `<a href="/">Inicio</a>`;
            let path = "";

            pathArray.forEach((segment, index) => {
                segment = segment.replace(".html", ""); // Remove .html extension

                // Capitalize the first letter of the segment
                segment = segment.charAt(0).toUpperCase() + segment.slice(1);

                path += `/${segment}`;

                const isLast = index === pathArray.length - 1;
                breadcrumbHTML += ` / ${isLast ? `<span>${segment}</span>` : `<a href="${path}">${segment}</a>`}`;
            });

            breadcrumbsContainer.innerHTML = breadcrumbHTML;
        });
