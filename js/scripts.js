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
      document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbsContainer = document.getElementById("breadcrumbs");
    if (!breadcrumbsContainer) return; // Prevent errors if the element is missing

    const pathArray = window.location.pathname.split("/").filter(p => p);

    let breadcrumbHTML = `<a href="/">Inicio</a>`;
    let path = "";

    pathArray.forEach((segment, index) => {
        let originalSegment = segment.replace(".html", ""); // Remove .html extension
        let capitalizedSegment = originalSegment.charAt(0).toUpperCase() + originalSegment.slice(1); // Capitalized text
        path += `/${originalSegment.toLowerCase()}`; // Ensure link remains lowercase

        const isLast = index === pathArray.length - 1;
        breadcrumbHTML += ` / ${isLast ? `<span>${capitalizedSegment}</span>` : `<a href="${path}">${capitalizedSegment}</a>`}`;
    });

    breadcrumbsContainer.innerHTML = breadcrumbHTML;
});
