document.addEventListener("DOMContentLoaded", function () {
    const categoryItems = document.querySelectorAll(".category-item");
    const projectCards = document.querySelectorAll(".project-card");

    categoryItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove a classe ativa de todas as categorias
            categoryItems.forEach(cat => cat.classList.remove("active"));
            item.classList.add("active");

            // Filtra os projetos
            const category = item.getAttribute("data-category");
            projectCards.forEach(card => {
                if (category === "all" || card.classList.contains(category)) {
                    card.classList.add("active");
                } else {
                    card.classList.remove("active");
                }
            });
        });
    });
});

const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 }); 

cards.forEach(card => {
    observer.observe(card);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////     
