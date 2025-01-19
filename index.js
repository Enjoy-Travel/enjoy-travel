function loadComponent(selector, url, cssLink) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }
            return response.text();
        })
        .then((data) => {
            document.querySelector(selector).innerHTML = data;

            if (cssLink) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = cssLink;
                document.head.appendChild(link);
            }
        })
        .catch((error) => console.error(error));
}

// Load Header, Footer, Navigation
document.addEventListener("DOMContentLoaded", () => {
    loadComponent(
        "header",
        "/components/header/header.html",
        "/components/header/header.css"
    );
    loadComponent(
        "footer",
        "/components/footer/footer.html",
        "/components/footer/footer.css"
    );
    loadComponent(
        "navigation",
        "/components/navigation/navigation.html",
        "/components/navigation/navigation.css"
    );
});
