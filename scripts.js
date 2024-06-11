let currentCardPage = 1;
const cardsPerPage = 3;

function showCardPage(page) {
    const cards = document.querySelectorAll('.card');
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    if (page < 1 || page > totalPages) return;

    currentCardPage = page;

    cards.forEach((card, index) => {
        card.style.display = 'none';
        if (index >= (currentCardPage - 1) * cardsPerPage && index < currentCardPage * cardsPerPage) {
            card.style.display = 'block';
        }
    });
}

// Initialize the first card page
showCardPage(currentCardPage);

// For the general page scrolling
let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

const showPage = (index) => {
    pages.forEach((page, i) => {
        if (i === index) {
            page.style.top = '0';
            page.classList.add('animate__backInUp');
            page.classList.remove('animate__backOutDown');
        } else {
            page.style.top = '100vh';
            if (page.classList.contains('animate__backInUp')) {
                page.classList.remove('animate__backInUp');
                page.classList.add('animate__backOutDown');
            }
        }
    });
};

const nextPage = () => {
    currentPage = (currentPage + 1) % totalPages;
    showPage(currentPage);
};

const previousPage = () => {
    currentPage = (currentPage - 1 + totalPages) % totalPages;
    showPage(currentPage);
};

const handleScroll = (event) => {
    if (event.deltaY > 0) {
        nextPage();
    } else {
        previousPage();
    }
};

window.addEventListener('wheel', handleScroll);

// Prevent default scroll behavior
window.addEventListener('scroll', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
});

// Add click event listener to all arrow elements
document.querySelectorAll('#nextPageArrow').forEach(arrow => {
    arrow.addEventListener('click', nextPage);
});

// Show the first page initially
showPage(currentPage);
