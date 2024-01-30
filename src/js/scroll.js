document.addEventListener("DOMContentLoaded", function() {
    const scrollTopBtn = document.getElementById("scrollTop");

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    scrollTopBtn.addEventListener("click", scrollToTop);
});
