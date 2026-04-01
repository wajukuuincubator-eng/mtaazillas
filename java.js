
        document.addEventListener('DOMContentLoaded', () => {
            // Mobile Menu Toggle
            const hamburgerBtn = document.getElementById('hamburger-btn');
            const closeBtn = document.getElementById('close-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            function openMenu() {
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }

            function closeMenu() {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }

            hamburgerBtn.addEventListener('click', openMenu);
            closeBtn.addEventListener('click', closeMenu);

            mobileLinks.forEach(link => {
                link.addEventListener('click', closeMenu);
            });

            // Page Visibility API to pause Marquee
            const marqueeTrack = document.getElementById('marquee-track');
            
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    marqueeTrack.style.animationPlayState = 'paused';
                } else {
                    marqueeTrack.style.animationPlayState = 'running';
                }
            });
        });
    