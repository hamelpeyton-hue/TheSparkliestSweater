let currentPage = 0;

const pages = document.querySelectorAll(".page");

function showPage(pageNumber) {
    pages.forEach(page => {
        page.classList.remove("active");
    });

    pages[pageNumber].classList.add("active");
    currentPage = pageNumber;
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        showPage(currentPage + 1);
    }
}

function previousPage() {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
}

function restartStory() {
    showPage(0);
}