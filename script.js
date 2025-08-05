// Wait for the entire page to load (including images and other resources)
window.onload = function() {

    const loader = document.getElementById('loader');
    const body = document.querySelector('body');

    // Hide the loader after a delay
    setTimeout(() => {
        loader.classList.add('hidden');
        // Allow scrolling again
        body.classList.remove('loading');
    }, 2500); // 2.5 seconds delay

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });

    // Mobile Menu Toggler
    const menuToggler = document.querySelector('.menu-toggler');
    const navLinks = document.querySelector('.nav-links');

    menuToggler.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Project Modal Logic
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const projectCards = document.querySelectorAll('.project-card');
    const closeButton = document.querySelector('.close-button');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-project-title');
            const description = card.getAttribute('data-project-desc');

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modal.style.display = 'flex';
        });
    });

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listeners to close the modal
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
};