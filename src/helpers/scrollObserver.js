/**
 * to use within your Astro or vanilla component please see the example usage below:
 *
 * <script>
 *      import { scrollObserver } from "~helpers/ScrollObserver";
 *      scrollObserver(".links-box", "zoomIn");
 * </script>

 */

function scrollObserver(el, className = "animation-active") {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };
    let observer = new IntersectionObserver((entires) => {
        entires.forEach((entry) => {
            const intersecting = entry.isIntersecting;
            if (intersecting) {
                entry.target.classList.add(className);
            }
        });
    }, options);
    let animationElements = document.querySelectorAll(el);
    animationElements.forEach((animationElement) => {
        observer.observe(animationElement);
    });
}

export { scrollObserver };
