(function() {
    // ========== DATA ==========
    const members = [
        { name: 'Gery', username: '@gerysenwith_lapiskeju', tiktok: 'https://www.tiktok.com/@gerysenwith_lapiskeju', photo: 'images/member1.jpg', quote: 'Kamu rimuru bukan?' },
        { name: 'Rora', username: '@roraxml', tiktok: 'https://www.tiktok.com/@kasugano_sora87', photo: 'images/member2.jpeg', quote: 'Aku mah raja' },
        { name: 'Izabella', username: '@queen.izabella', tiktok: 'https://www.tiktok.com/@queen.izabella', photo: 'images/member3.jpeg', quote: 'Mending turu' },
        { name: 'Erie', username: '@kasugano_erie', tiktok: 'https://www.tiktok.com/@kasugano_erie', photo: 'images/member4.jpg', quote: 'Gw butuh uang!!!' },
        { name: 'Fuyi', username: '@fuyi_npc', tiktok: 'https://www.tiktok.com/@fuyi_npc', photo: 'images/member5.png', quote: 'Belajar untuk memahami diri kita sendiri' },
        { name: 'V3iin', username: '@iyainirhmd', tiktok: 'https://www.tiktok.com/@iyainirhmd', photo: 'images/member7.jpg', quote: 'bntr' },
        { name: 'Yuta', username: '@yutaxml', tiktok: 'https://www.tiktok.com/@yutaxml', photo: 'images/member10.jpg', quote: 'You never know until you try' },
        { name: 'Jarzz', username: '@jarzz.dw.skuy', tiktok: 'https://www.tiktok.com/@jarzz.dw.skuy', photo: 'images/member11.jpg', quote: 'Laparr' },
        { name: 'Akira', username: '@akira.imut', tiktok: 'https://www.tiktok.com/@akiraa.imut', photo: 'images/member13.jpg', quote: 'Imut gini kalo bantai lu sabi kali' },
        { name: 'Dree', username: '@daktau_256', tiktok: 'https://www.tiktok.com/@daktau_256', photo: 'images/member14.jpg', quote: 'Jangan takut salah, karena dari salah kita belajar.' },
        { name: 'Zunda', username: '@shaglenv02y', tiktok: 'https://www.tiktok.com/@shaglenv02y', photo: 'images/member15.jpg', quote: 'Emel yok' },
        { name: 'Yushaa Von Khaslana', username: '@kachusyaa', tiktok: 'https://www.tiktok.com/@kachusyaa', photo: 'images/member16.jpeg', quote: 'Jangan lupa makan' }
    ];

    const admins = [
        { name: 'Ryy Sensei', username: '@RyyKagenou NCA', role: 'Owner & Founder', tiktok: 'https://www.tiktok.com/@RyyKagenou', photo: 'images/admin1.webp' },
        { name: 'Sora', username: '@kasugano_sora52', role: 'Pemilik & Pendiri', tiktok: 'https://www.tiktok.com/@kasugano.rora', photo: 'images/admin2.jpg' },
        { name: 'Haruka', username: '@kasugano_harukaa', role: 'Pemilik', tiktok: 'https://www.tiktok.com/@kasugano.harukaa', photo: 'images/admin3.jpg' },
        { name: 'Zero', username: '@zero.znzx', role: 'Admin', tiktok: 'https://www.tiktok.com/@zero.znzx', photo: 'images/admin4.jfif' },
        { name: 'Serlina', username: '@diiputraa28_', role: 'Admin', tiktok: 'https://www.tiktok.com/@diiputraa28_', photo: 'images/admin5.jpeg' },
        { name: 'Shora', username: '@codename_shora.v02', role: 'Admin', tiktok: 'https://www.tiktok.com/@codename_shora.v02', photo: 'images/admin6.png' }
    ];

    const contacts = [
        { platform: 'TikTok', username: '@kasugano.official', link: 'https://www.tiktok.com/@kasugano.official', icon: 'fab fa-tiktok' },
        { platform: 'TikTok', username: '@kasugano.store', link: 'https://www.tiktok.com/@kasugano.store', icon: 'fab fa-tiktok' },
        { platform: 'Instagram', username: '@kasugano.family', link: 'https://www.instagram.com/kasugano.family', icon: 'fab fa-instagram' },
        { platform: 'Instagram', username: '@kasuganostore', link: 'https://www.instagram.com/kasuganostore', icon: 'fab fa-instagram' },
        { platform: 'WhatsApp', username: '+62 852-3240-6495', link: 'https://wa.me/6285232406495', icon: 'fab fa-whatsapp' },
        { platform: 'Email', username: 'kasuganofamilyy@gmail.com', link: 'mailto:kasuganofamilyy@gmail.com', icon: 'far fa-envelope' }
    ];

    // ========== DOM ELEMENTS ==========
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const sections = {
        home: document.getElementById('home'),
        about: document.getElementById('about'),
        member: document.getElementById('member'),
        admin: document.getElementById('admin'),
        contact: document.getElementById('contact')
    };
    const memberContainer = document.getElementById('memberContainer');

    // ========== SKELETON ==========
    memberContainer.classList.add('skeleton');
    for (let i = 0; i < 9; i++) {
        const s = document.createElement('div');
        s.className = 'member-card skeleton';
        s.style.height = '180px';
        memberContainer.appendChild(s);
    }
    setTimeout(() => {
        memberContainer.classList.remove('skeleton');
        memberContainer.innerHTML = '';
        renderMembers(members);
    }, 800);

    // ========== RENDER MEMBERS ==========
    function renderMembers(filtered = members) {
        memberContainer.innerHTML = '';
        if (filtered.length === 0) {
            memberContainer.innerHTML = '<div style="text-align:center; padding:var(--space-xl); color:#ffb0e6;"><i class="fas fa-user-slash" style="font-size:3rem; margin-bottom:var(--space-md);"></i><p>Anggota tidak ditemukan</p></div>';
            return;
        }
        filtered.forEach(m => {
            const card = document.createElement('div');
            card.className = 'member-card';

            const avatarDiv = document.createElement('div');
            avatarDiv.className = 'member-avatar';
            const img = document.createElement('img');
            img.src = m.photo;
            img.alt = m.name;
            img.onerror = function() {
                this.style.display = 'none';
                const span = document.createElement('span');
                span.style.cssText = 'font-size:2rem;color:white;';
                span.textContent = m.name.charAt(0);
                this.parentElement.appendChild(span);
            };
            avatarDiv.appendChild(img);

            const infoDiv = document.createElement('div');
            infoDiv.className = 'member-info';

            const nameH4 = document.createElement('h4');
            nameH4.textContent = m.name;

            const usernameDiv = document.createElement('div');
            usernameDiv.className = 'username';
            usernameDiv.textContent = m.username;

            infoDiv.appendChild(nameH4);
            infoDiv.appendChild(usernameDiv);

            card.appendChild(avatarDiv);
            card.appendChild(infoDiv);

            card.addEventListener('click', () => {
                document.getElementById('modalAvatar').innerHTML = '';
                const modalImg = document.createElement('img');
                modalImg.src = m.photo;
                modalImg.alt = m.name;
                modalImg.onerror = function() {
                    this.style.display = 'none';
                    const span = document.createElement('span');
                    span.style.cssText = 'font-size:3rem;color:white;';
                    span.textContent = m.name.charAt(0);
                    this.parentElement.appendChild(span);
                };
                document.getElementById('modalAvatar').appendChild(modalImg);
                document.getElementById('modalName').textContent = m.name;
                document.getElementById('modalUsername').textContent = m.username;
                document.getElementById('quoteText').textContent = m.quote || 'Bersama Kasugano, kita bersinar';
                document.getElementById('modalTiktokLink').href = m.tiktok;
                document.getElementById('modalTiktokText').textContent = m.username;
                document.getElementById('memberModal').classList.add('active');
            });

            memberContainer.appendChild(card);
        });
    }

    // ========== RENDER ADMINS ==========
    const adminTrack = document.getElementById('adminTrack');
    adminTrack.innerHTML = '';
    admins.forEach(a => {
        const card = document.createElement('div');
        card.className = 'admin-card';

        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'admin-avatar';
        const img = document.createElement('img');
        img.src = a.photo;
        img.alt = a.name;
        img.onerror = function() {
            this.style.display = 'none';
            const span = document.createElement('span');
            span.style.cssText = 'font-size:3rem;color:white;';
            span.textContent = a.name.charAt(0);
            this.parentElement.appendChild(span);
        };
        avatarDiv.appendChild(img);

        const infoDiv = document.createElement('div');
        infoDiv.className = 'admin-info';

        const nameH4 = document.createElement('h4');
        nameH4.textContent = a.name;

        const usernameDiv = document.createElement('div');
        usernameDiv.className = 'admin-username';
        usernameDiv.textContent = a.username;

        const roleDiv = document.createElement('div');
        roleDiv.className = 'admin-role';
        roleDiv.textContent = a.role;

        const tiktokLink = document.createElement('a');
        tiktokLink.href = a.tiktok;
        tiktokLink.target = '_blank';
        tiktokLink.className = 'admin-tiktok-link';
        tiktokLink.innerHTML = '<i class="fab fa-tiktok"></i> TikTok';

        infoDiv.appendChild(nameH4);
        infoDiv.appendChild(usernameDiv);
        infoDiv.appendChild(roleDiv);
        infoDiv.appendChild(tiktokLink);

        card.appendChild(avatarDiv);
        card.appendChild(infoDiv);
        adminTrack.appendChild(card);
    });

    // ========== RENDER CONTACTS ==========
    const contactGrid = document.getElementById('contactGrid');
    const contactTrack = document.getElementById('contactTrack');
    [contactGrid, contactTrack].forEach(container => {
        if (!container) return;
        container.innerHTML = '';
        contacts.forEach(c => {
            const card = document.createElement('a');
            card.href = c.link;
            card.target = '_blank';
            card.className = 'contact-card';
            const icon = document.createElement('i');
            icon.className = c.icon;
            const h3 = document.createElement('h3');
            h3.textContent = c.platform;
            const span = document.createElement('span');
            span.textContent = c.username;
            card.appendChild(icon);
            card.appendChild(h3);
            card.appendChild(span);
            container.appendChild(card);
        });
    });

    // ========== CAROUSEL NAV ==========
    const adminCarousel = document.getElementById('adminCarousel');
    document.getElementById('carouselPrev')?.addEventListener('click', () => adminCarousel.scrollBy({ left: -300, behavior: 'smooth' }));
    document.getElementById('carouselNext')?.addEventListener('click', () => adminCarousel.scrollBy({ left: 300, behavior: 'smooth' }));

    const contactCarousel = document.getElementById('contactCarousel');
    document.getElementById('contactPrev')?.addEventListener('click', () => contactCarousel.scrollBy({ left: -300, behavior: 'smooth' }));
    document.getElementById('contactNext')?.addEventListener('click', () => contactCarousel.scrollBy({ left: 300, behavior: 'smooth' }));

    // ========== SEARCH ==========
    const searchInput = document.getElementById('searchMember');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const kw = e.target.value.toLowerCase().trim();
            if (kw === '') renderMembers(members);
            else renderMembers(members.filter(m => m.name.toLowerCase().includes(kw) || m.username.toLowerCase().includes(kw)));
        });
    }

    // ========== MODAL ==========
    const modal = document.getElementById('memberModal');
    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener('click', () => modal.classList.remove('active'));
    window.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });

    // ========== NAVBAR ==========
    function getNavbarHeight() { return navbar ? navbar.offsetHeight : 80; }
    function updateScrollPadding() { document.documentElement.style.scrollPaddingTop = (getNavbarHeight() + 30) + 'px'; }

    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.innerHTML = navMenu.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
    document.addEventListener('click', (e) => {
        if (navMenu && navToggle && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.target;
            const h = getNavbarHeight();
            navMenu.classList.remove('active');
            if (navToggle) navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            if (targetId === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
            else {
                const target = sections[targetId];
                if (target) window.scrollTo({ top: target.offsetTop - h - 30, behavior: 'smooth' });
            }
        });
    });

    // ========== PARALLAX ==========
    const heroImg = document.getElementById('heroImg');
    if (heroImg) window.addEventListener('scroll', () => { heroImg.style.transform = `translateY(${window.scrollY * 0.2}px)`; });

    // ========== REVEAL SECTIONS ==========
    const revealSections = document.querySelectorAll('section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
    }, { threshold: 0.15 });
    revealSections.forEach(s => revealObserver.observe(s));

    // ========== RESIZE ==========
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateScrollPadding, 100);
    });

    // ========== INIT ==========
    window.scrollTo(0, 0);
    updateScrollPadding();
    window.addEventListener('load', () => setTimeout(updateScrollPadding, 200));
})();