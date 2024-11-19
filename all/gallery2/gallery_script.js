document.addEventListener('DOMContentLoaded', function() {
    const filterContainer = document.querySelector(".button-group");
    const galleryItems = document.querySelectorAll(".gallery .item");

    filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("button")) {
            // Deactivate existing active button
            filterContainer.querySelector(".active").classList.remove("active");
            // Activate new button
            event.target.classList.add("active");
            const filterValue = event.target.getAttribute("data-filter");

            galleryItems.forEach((item) => {
                if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
});