gsap.registerPlugin(Flip);

    const links = document.querySelectorAll('.nav-item a');
    const activeNav = document.querySelector('.active-nav');
    const pages = document.querySelectorAll('.page');

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            //меняет цвет выбранного нава, первый элемент для сбрасывания цвета предыдущего
            gsap.to(links, { color: "#943967"}); 
            if (document.activeElement === e.target) {
            gsap.to(link, { color: "#f38fd3" });
            }

            //движок линии под навом 
            const state = Flip.getState(activeNav);
            link.appendChild(activeNav);
            Flip.from(state, {
                duration: 0.5,
                absolute: true,
                ease: 'elastic.out(1, 0.7)'

            });
            // переход с нава на нав
            const targetId = link.getAttribute("href").substring(1);
            pages.forEach(page => {
            page.classList.remove("active");
            });
            document.getElementById(targetId).classList.add("active");
        });
        });

        // Initial underline position
        window.addEventListener("load", () => {
        const firstLink = document.querySelector(".nav-item a");
        if (firstLink) firstLink.parentElement.appendChild(activeNav);
        });