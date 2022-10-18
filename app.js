// IntersectionObserver looks for when to start the animation based on the viewport?
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});

// What elements to observe
const hiddenTitles = document.querySelectorAll('.title-hidden');
hiddenTitles.forEach((el) => observer.observe(el));

const hiddenParagraphs = document.querySelectorAll('.hidden-p');
hiddenParagraphs.forEach((el) => observer.observe(el));

// event handler for buttons
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let pageHeight = window.innerHeight;

        if (btn.dataset.src === 'last') {
            window.scrollTo(0, 0);
        } else {
            window.scrollBy(0, pageHeight);
        };
    });
});