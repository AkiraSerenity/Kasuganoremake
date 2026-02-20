(function() {
    // ===== DATA LENGKAP =====
    const members = [
        { name: 'Gery', username: '@gerysenwith_lapiskeju', tiktok: 'https://www.tiktok.com/@gerysenwith_lapiskeju', initial: 'G', photo: 'images/member1.jpg', quote: 'Kamu rimuru bukan?' },
        { name: 'Rora', username: '@roraxml', tiktok: 'https://www.tiktok.com/@kasugano_sora87', initial: 'S', photo: 'images/member2.jpeg', quote: 'Aku mah raja' },
        { name: 'Izabella', username: '@queen.izabellaz', tiktok: 'https://www.tiktok.com/@queen.izabellaz', initial: 'Q', photo: 'images/member3.jpeg', quote: 'Mending turu' },
        { name: 'Erie', username: '@kasugano_erie', tiktok: 'https://www.tiktok.com/@kasugano_erie', initial: 'E', photo: 'images/member4.jpg', quote: 'Gw butuh uang!!!' },
        { name: 'Fuyi', username: '@fuyii_npc', tiktok: 'https://www.tiktok.com/@fuyii_npc', initial: 'F', photo: 'images/member5.png', quote: 'Ngapain tidur kalo bangun lagi?' },
        { name: 'Ezan', username: '@ezan_xd', tiktok: 'https://www.tiktok.com/@ezan_xd', initial: 'E', photo: 'images/member6.png', quote: 'Sederhana tapi berarti, itulah keluarga.' },
        { name: 'V3iin', username: '@iyainirhmd', tiktok: 'https://www.tiktok.com/@iyainirhmd', initial: 'I', photo: 'images/member7.jpg', quote: 'Tersenyumlah, karena senyuman adalah ibadah yang indah.' },
        { name: 'Shaglen', username: '@xmj.shaglen', tiktok: 'https://www.tiktok.com/@xmj.shaglen', initial: 'X', photo: 'images/member8.jpg', quote: 'Loh heh? kok gitu' },
        { name: 'Valen', username: '@naineyuko', tiktok: 'https://www.tiktok.com/@naineyuko', initial: 'N', photo: 'images/member9.jpg', quote: 'Aduh kok aku jadi cewek siehh' },
        { name: 'Yuuta', username: '@yuutaxml_', tiktok: 'https://www.tiktok.com/@yuutaxml_', initial: 'Y', photo: 'images/member10.jpg', quote: 'Pahlawan selalu datang terlambat' },
        { name: 'Jarzz', username: '@jarzz.dw.skuy', tiktok: 'https://www.tiktok.com/@jarzz.dw.skuy', initial: 'J', photo: 'images/member11.jpg', quote: 'Halah yapping doang' },
        { name: 'Qwentty', username: '@qwentty.ft', tiktok: 'https://www.tiktok.com/@qwenty.ft', initial: 'Q', photo: 'images/member12.jpg', quote: 'Semua manusia hanyalah alat' },
        { name: 'Akira', username: '@akira.imut', tiktok: 'https://www.tiktok.com/@akiraa.imut', initial: 'A', photo: 'images/member13.jpg', quote: 'Imut gini kalo bantai lu sabi kali' },
        { name: 'Dree', username: '@daktau_256', tiktok: 'https://www.tiktok.com/@daktau_256', initial: 'D', photo: 'images/member14.jpg', quote: 'Jangan takut salah, karena dari salah kita belajar.' },
        { name: 'Zunda', username: '@shaglenv02y', tiktok: 'https://www.tiktok.com/@shaglenv02y', initial: 'S', photo: 'images/member15.jpg', quote: 'Lahhhhhh gw salah apa' },
        { name: 'Yushaa Von Khaslana', username: '@kachusyaa', tiktok: 'https://www.tiktok.com/@kachusyaa?_r=1&_t=ZS-943UkIGrPbZ', initial: 'S', photo: 'images/member16.jpeg', quote: 'Hidup seperti larry!' }
    ];

    const admins = [
        { name: 'Shora', username: '@codename_shora.v02', role: 'Admin', tiktok: 'https://www.tiktok.com/@codename_shora.v02', initial: 'S', photo: 'images/admin1.webp' },
        { name: 'Sora', username: '@kasugano_sora52', role: 'Pemilik & Pendiri', tiktok: 'https://www.tiktok.com/@kasugano.rora', initial: 'S', photo: 'images/admin2.jpg' },
        { name: 'Haruka', username: '@kasugano_harukaa', role: 'Pemilik', tiktok: 'https://www.tiktok.com/@kasugano.harukaa', initial: 'H', photo: 'images/admin3.jpg' },
        { name: 'Zero', username: '@zero.znzx', role: 'Admin', tiktok: 'https://www.tiktok.com/@zero.znzx', initial: 'Z', photo: 'images/admin4.jfif' },
        { name: 'Serlina', username: '@diiputraa28_', role: 'Admin', tiktok: 'https://www.tiktok.com/@diiputraa28_?_r=1&_t=ZS-943fWknNM6m', initial: 'S', photo: 'images/admin5.jpeg' },
        { name: '???', username: '@???', role: '???', tiktok: 'https://www.tiktok.com', initial: '?', photo: 'images/admin6.png' }
    ];

    const contacts = [
        { platform: 'TikTok', username: '@kasugano.official', link: 'https://www.tiktok.com/@kasugano.official', icon: 'fab fa-tiktok' },
        { platform: 'TikTok', username: '@kasugano.store', link: 'https://www.tiktok.com/@kasugano.store', icon: 'fab fa-tiktok' },
        { platform: 'Instagram', username: '@kasugano.family', link: 'https://www.instagram.com/kasugano.family', icon: 'fab fa-instagram' },
        { platform: 'Instagram', username: '@kasuganostore', link: 'https://www.instagram.com/kasuganostore', icon: 'fab fa-instagram' },
        { platform: 'WhatsApp', username: '+62 852-3240-6495', link: 'https://wa.me/6285232406495', icon: 'fab fa-whatsapp' },
        { platform: 'Email', username: 'kasuganofamilyy@gmail.com', link: 'kasuganofamilyy@gmail.com', icon: 'far fa-envelope' }
    ];

    // ===== ELEMENTS =====
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item');
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

    // ===== RENDER MEMBERS dengan SKELETON =====
    const memberContainer = document.getElementById('memberContainer');
    
    // Tampilkan skeleton loading
    memberContainer.classList.add('skeleton');
    for (let i = 0; i < 9; i++) {
        const skeletonCard = document.createElement('div');
        skeletonCard.className = 'member-card skeleton';
        skeletonCard.style.height = '180px';
        memberContainer.appendChild(skeletonCard);
    }

    // Render members setelah delay
    setTimeout(() => {
        memberContainer.classList.remove('skeleton');
        memberContainer.innerHTML = '';
        renderMembers(members);
    }, 800);

    function renderMembers(filteredMembers = members) {
        memberContainer.innerHTML = '';
        
        if (filteredMembers.length === 0) {
            memberContainer.innerHTML = '<div class="member-not-found"><i class="fas fa-user-slash"></i><p>Anggota tidak ditemukan</p></div>';
            return;
        }
        
        filteredMembers.forEach(member => {
            const card = document.createElement('div');
            card.className = 'member-card';
            card.innerHTML = `
                <div class="member-avatar">
                    <img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none'; this.innerHTML='${member.initial}';">
                </div>
                <div class="member-info">
                    <h4>${member.name}</h4>
                    <div class="username">${member.username}</div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                document.getElementById('modalAvatar').innerHTML = `<img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none';">`;
                document.getElementById('modalName').textContent = member.name;
                document.getElementById('modalUsername').textContent = member.username;
                document.getElementById('quoteText').textContent = member.quote || 'Bersama Kasugano, kita bersinar';
                document.getElementById('modalTiktokLink').href = member.tiktok;
                document.getElementById('modalTiktokText').textContent = member.username;
                document.getElementById('memberModal').classList.add('active');
            });
            
            memberContainer.appendChild(card);
        });
    }

    // ===== RENDER ADMINS =====
    const adminTrack = document.getElementById('adminTrack');
    adminTrack.innerHTML = '';
    
    admins.forEach(admin => {
        const card = document.createElement('div');
        card.className = 'admin-card';
        card.innerHTML = `
            <div class="admin-avatar">
                <img src="${admin.photo}" alt="${admin.name}" onerror="this.style.display='none'; this.innerHTML='${admin.initial}';">
            </div>
            <div class="admin-info">
                <h4>${admin.name}</h4>
                <div class="admin-username">${admin.username}</div>
                <div class="admin-role">${admin.role}</div>
                <a href="${admin.tiktok}" target="_blank" class="admin-tiktok-link"><i class="fab fa-tiktok"></i> TikTok</a>
            </div>
        `;
        adminTrack.appendChild(card);
    });

    // ===== RENDER CONTACTS (DESKTOP GRID & MOBILE CAROUSEL) =====
    const contactGrid = document.getElementById('contactGrid');
    const contactTrack = document.getElementById('contactTrack');
    
    // Render untuk desktop grid
    contactGrid.innerHTML = '';
    contacts.forEach(contact => {
        const card = document.createElement('a');
        card.href = contact.link;
        card.target = '_blank';
        card.className = 'contact-card';
        card.innerHTML = `
            <i class="${contact.icon}"></i>
            <h3>${contact.platform}</h3>
            <span>${contact.username}</span>
        `;
        contactGrid.appendChild(card);
    });

    // Render untuk mobile carousel
    contactTrack.innerHTML = '';
    contacts.forEach(contact => {
        const card = document.createElement('a');
        card.href = contact.link;
        card.target = '_blank';
        card.className = 'contact-card';
        card.innerHTML = `
            <i class="${contact.icon}"></i>
            <h3>${contact.platform}</h3>
            <span>${contact.username}</span>
        `;
        contactTrack.appendChild(card);
    });

    // ===== CAROUSEL NAVIGATION =====
    // Admin carousel
    const adminCarousel = document.getElementById('adminCarousel');
    document.getElementById('carouselPrev').addEventListener('click', () => {
        adminCarousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
    document.getElementById('carouselNext').addEventListener('click', () => {
        adminCarousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Contact carousel (mobile only)
    const contactCarousel = document.getElementById('contactCarousel');
    document.getElementById('contactPrev').addEventListener('click', () => {
        contactCarousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
    document.getElementById('contactNext').addEventListener('click', () => {
        contactCarousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // ===== SEARCH =====
    document.getElementById('searchMember').addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase().trim();
        if (keyword === '') {
            renderMembers(members);
        } else {
            const filtered = members.filter(m => 
                m.name.toLowerCase().includes(keyword) || 
                m.username.toLowerCase().includes(keyword)
            );
            renderMembers(filtered);
        }
    });

    // ===== MODAL =====
    const modal = document.getElementById('memberModal');
    document.getElementById('closeModal').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    // ===== FUNGSI NAVBAR =====
    function getNavbarHeight() {
        return navbar ? navbar.offsetHeight : 80;
    }

    function updateScrollPadding() {
        document.documentElement.style.scrollPaddingTop = (getNavbarHeight() + 20) + 'px';
    }

    function setActiveSection(sectionId) {
        navItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            if (link && link.dataset.target === sectionId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function getSectionBoundaries() {
        const navbarHeight = getNavbarHeight();
        
        return {
            home: { start: 0, end: sections.about.offsetTop - navbarHeight - 20 },
            about: { start: sections.about.offsetTop - navbarHeight - 20, end: sections.member.offsetTop - navbarHeight - 20 },
            member: { start: sections.member.offsetTop - navbarHeight - 20, end: sections.admin.offsetTop - navbarHeight - 20 },
            admin: { start: sections.admin.offsetTop - navbarHeight - 20, end: sections.contact.offsetTop - navbarHeight - 20 },
            contact: { start: sections.contact.offsetTop - navbarHeight - 20, end: Infinity }
        };
    }

    function checkActiveSection() {
        const scrollY = window.scrollY;
        const boundaries = getSectionBoundaries();
        
        if (scrollY < boundaries.about.start) {
            setActiveSection('home');
        } else if (scrollY < boundaries.member.start) {
            setActiveSection('about');
        } else if (scrollY < boundaries.admin.start) {
            setActiveSection('member');
        } else if (scrollY < boundaries.contact.start) {
            setActiveSection('admin');
        } else {
            setActiveSection('contact');
        }
    }

    // ===== MOBILE MENU =====
    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    document.addEventListener('click', (e) => {
        if (navMenu && navToggle && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // ===== SMOOTH SCROLL =====
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.dataset.target;
            const navbarHeight = getNavbarHeight();
            
            if (navMenu) {
                navMenu.classList.remove('active');
                if (navToggle) navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            if (targetId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = sections[targetId];
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }
        });
    });

    // ===== PARALLAX EFFECT =====
    const heroImg = document.getElementById('heroImg');
    if (heroImg) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            heroImg.style.transform = `translateY(${scrollY * 0.2}px)`;
        });
    }

    // ===== SCROLL REVEAL ANIMATION - BISA DIULANG =====
    const revealSections = document.querySelectorAll('section');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            } else {
                entry.target.classList.remove('revealed');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px' });

    revealSections.forEach(section => {
        revealObserver.observe(section);
    });

    // ===== EVENT LISTENERS =====
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
        scrollTimeout = requestAnimationFrame(checkActiveSection);
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateScrollPadding();
            checkActiveSection();
        }, 100);
    });

    // ===== INITIALIZATION =====
    window.scrollTo(0, 0);
    updateScrollPadding();
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            updateScrollPadding();
            checkActiveSection();
            setActiveSection('home');
        }, 200);
    });
})();