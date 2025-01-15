function loadComponent(selector, url) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }
            return response.text();
        })
        .then((data) => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch((error) => console.error(error));
}

// Load Header and Footer
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "/header/header.html");
    loadComponent("footer", "/footer/footer.html");
});