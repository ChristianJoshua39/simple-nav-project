function search() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();

    if (query === "home") {
        window.location.href = "index.html";
    }
    else if (query === "about" || query === "about us") {
        window.location.href = "About.html";
    }
    else if (query === "contact" || query === "contact us") {
        window.location.href = "ContactUs.html";
    }
    else {
        alert("No results found for '" + query + "'. Please try 'Home' or 'About Us'.");
    }
}