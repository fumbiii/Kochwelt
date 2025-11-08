const btnElList = document.querySelectorAll('.menu-links');

btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', (e) => {
        // If you don't want the link to navigate away (for testing), uncomment the next line:
        // e.preventDefault();

        // Remove the 'special' class from any elements that have it
        document.querySelectorAll('.special').forEach(el => el.classList.remove('special'));

        // Add the class to the clicked element
        btnEl.classList.add('special');
    });
});

// Inject minimal styling for the active state so highlighting works across pages/styles
function ensureActiveStyle() {
    if (document.getElementById('menu-active-style')) return;
    const style = document.createElement('style');
    style.id = 'menu-active-style';
    style.textContent = `
        .special {
            color: #008000 !important;
            text-decoration-line: underline !important;
            text-decoration-thickness: 3px !important;
            text-underline-offset: 6px !important;
            font-weight: 600 !important;
        }
    `;
    document.head.appendChild(style);
}

// Determine current page filename and mark the matching menu link as active
function setActiveLinkOnLoad() {
    const currentFile = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    ensureActiveStyle();
    document.querySelectorAll('.menu-links').forEach(link => {
        const href = (link.getAttribute('href') || '').split('/').pop().toLowerCase();
        if (!href) return;
        if (href === currentFile) {
            link.classList.add('special');
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setActiveLinkOnLoad);
} else {
    setActiveLinkOnLoad();
}