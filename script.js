(function() {
    // Data anggota
    const members = [
        { 
            name: 'Gery', 
            username: '@gerysenwith_lapiskeju', 
            tiktok: 'https://www.tiktok.com/@gerysenwith_lapiskeju', 
            photo: 'images/member1.jpg', 
            quote: 'Kamu rimuru bukan?' 
        },
        { 
            name: 'Rora', 
            username: '@roraxml', 
            tiktok: 'https://www.tiktok.com/@kasugano_sora87', 
            photo: 'images/member2.jpeg', 
            quote: 'Aku mah raja' 
        },
        { 
            name: 'Izabella', 
            username: '@queen.izabellaz', 
            tiktok: 'https://www.tiktok.com/@queen.izabellaz', 
            photo: 'images/member3.jpeg', 
            quote: 'Mending turu' 
        },
        { 
            name: 'Erie', 
            username: '@kasugano_erie', 
            tiktok: 'https://www.tiktok.com/@kasugano_erie', 
            photo: 'images/member4.jpg', 
            quote: 'Gw butuh uang!!!' 
        },
        { 
            name: 'Fuyi', 
            username: '@fuyii_npc', 
            tiktok: 'https://www.tiktok.com/@fuyii_npc', 
            photo: 'images/member5.png', 
            quote: 'Belajar untuk memahami diri kita sendiri' 
        },
        { 
            name: 'Ezan', 
            username: '@ezan_xd', 
            tiktok: 'https://www.tiktok.com/@ezan_xd', 
            photo: 'images/member6.png', 
            quote: 'Sederhana tapi berarti' 
        },
        { 
            name: 'V3iin', 
            username: '@iyainirhmd', 
            tiktok: 'https://www.tiktok.com/@iyainirhmd', 
            photo: 'images/member7.jpg', 
            quote: 'bntr' 
        },
        { 
            name: 'Shaglen', 
            username: '@xmj.shaglen', 
            tiktok: 'https://www.tiktok.com/@xmj.shaglen', 
            photo: 'images/member8.jpg', 
            quote: 'Id have' 
        },
        { 
            name: 'Valen', 
            username: '@naineyuko', 
            tiktok: 'https://www.tiktok.com/@naineyuko', 
            photo: 'images/member9.jpg', 
            quote: 'Aduh kok aku jadi cewek' 
        },
        { 
            name: 'Yuuta', 
            username: '@yuutaxml_', 
            tiktok: 'https://www.tiktok.com/@yuutaxml_', 
            photo: 'images/member10.jpg', 
            quote: 'You never know until you try' 
        },
        { 
            name: 'Jarzz', 
            username: '@jarzz.dw.skuy', 
            tiktok: 'https://www.tiktok.com/@jarzz.dw.skuy', 
            photo: 'images/member11.jpg', 
            quote: 'Laparr' 
        },
        { 
            name: 'Qwentty', 
            username: '@qwentty.ft', 
            tiktok: 'https://www.tiktok.com/@qwenty.ft', 
            photo: 'images/member12.jpg', 
            quote: 'Semua manusia hanyalah alat' 
        },
        { 
            name: 'Akira', 
            username: '@akira.imut', 
            tiktok: 'https://www.tiktok.com/@akiraa.imut', 
            photo: 'images/member13.jpg', 
            quote: 'Imut gini kalo bantai lu sabi kali' 
        },
        { 
            name: 'Dree', 
            username: '@daktau_256', 
            tiktok: 'https://www.tiktok.com/@daktau_256', 
            photo: 'images/member14.jpg', 
            quote: 'Jangan takut salah' 
        },
        { 
            name: 'Zunda', 
            username: '@shaglenv02y', 
            tiktok: 'https://www.tiktok.com/@shaglenv02y', 
            photo: 'images/member15.jpg', 
            quote: 'Emel yok' 
        },
        { 
            name: 'Yushaa', 
            username: '@kachusyaa', 
            tiktok: 'https://www.tiktok.com/@kachusyaa', 
            photo: 'images/member16.jpeg', 
            quote: 'Jangan lupa makan' 
        }
    ];

    // Data admin
    const admins = [
        { name: 'Shora', username: '@codename_shora.v02', role: 'Admin', tiktok: 'https://www.tiktok.com/@codename_shora.v02', photo: 'images/admin1.webp' },
        { name: 'Sora', username: '@kasugano_sora52', role: 'Pemilik & Pendiri', tiktok: 'https://www.tiktok.com/@kasugano.rora', photo: 'images/admin2.jpg' },
        { name: 'Haruka', username: '@kasugano_harukaa', role: 'Pemilik', tiktok: 'https://www.tiktok.com/@kasugano.harukaa', photo: 'images/admin3.jpg' },
        { name: 'Zero', username: '@zero.znzx', role: 'Admin', tiktok: 'https://www.tiktok.com/@zero.znzx', photo: 'images/admin4.jfif' },
        { name: 'Serlina', username: '@diiputraa28_', role: 'Admin', tiktok: 'https://www.tiktok.com/@diiputraa28_', photo: 'images/admin5.jpeg' },
        { name: '???', username: '@???', role: '???', tiktok: 'https://www.tiktok.com', photo: 'images/admin6.png' }
    ];

    // Data kontak
    const contacts = [
        { platform: 'TikTok', username: '@kasugano.official', link: 'https://www.tiktok.com/@kasugano.official', icon: 'fab fa-tiktok' },
        { platform: 'TikTok', username: '@kasugano.store', link: 'https://www.tiktok.com/@kasugano.store', icon: 'fab fa-tiktok' },
        { platform: 'Instagram', username: '@kasugano.family', link: 'https://www.instagram.com/kasugano.family', icon: 'fab fa-instagram' },
        { platform: 'Instagram', username: '@kasuganostore', link: 'https://www.instagram.com/kasuganostore', icon: 'fab fa-instagram' },
        { platform: 'WhatsApp', username: '+62 852-3240-6495', link: 'https://wa.me/6285232406495', icon: 'fab fa-whatsapp' },
        { platform: 'Email', username: 'kasuganofamilyy@gmail.com', link: 'mailto:kasuganofamilyy@gmail.com', icon: 'far fa-envelope' }
    ];

    // Ambil elemen DOM
    const memberContainer = document.getElementById('memberContainer');
    const adminTrack = document.getElementById('adminTrack');
    const contactGrid = document.getElementById('contactGrid');
    const contactTrack = document.getElementById('contactTrack');
    const searchInput = document.getElementById('searchMember');
    const modal = document.getElementById('memberModal');
    const closeModal = document.getElementById('closeModal');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Cek elemen penting
    if (!memberContainer || !adminTrack || !contactGrid || !contactTrack || !modal || !closeModal) {
        console.error('Elemen tidak ditemukan!');
        return;
    }

    // ===== FUNGSI MODAL =====
    function openModal(member) {
        document.getElementById('modalAvatar').innerHTML = `<img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none';">`;
        document.getElementById('modalName').textContent = member.name;
        document.getElementById('modalUsername').textContent = member.username;
        document.getElementById('quoteText').textContent = member.quote || 'Bersama Kasugano, kita bersinar';
        document.getElementById('modalTiktokLink').href = member.tiktok;
        document.getElementById('modalTiktokText').textContent = member.username;
        
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }

    function closeModalHandler() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    closeModal.addEventListener('click', closeModalHandler);
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });

    // ===== RENDER MEMBERS =====
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
                    <img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none';">
                </div>
                <div class="member-info">
                    <h4>${member.name}</h4>
                    <div class="username">${member.username}</div>
                </div>
            `;
            
            card.addEventListener('click', () => openModal(member));
            memberContainer.appendChild(card);
        });
    }

    renderMembers(members);

    // ===== RENDER ADMINS =====
    adminTrack.innerHTML = '';
    admins.forEach(admin => {
        const card = document.createElement('div');
        card.className = 'admin-card';
        card.innerHTML = `
            <div class="admin-avatar">
                <img src="${admin.photo}" alt="${admin.name}" onerror="this.style.display='none';">
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

    // ===== RENDER CONTACTS =====
    contactGrid.innerHTML = '';
    contactTrack.innerHTML = '';
    
    contacts.forEach(contact => {
        const cardDesktop = document.createElement('a');
        cardDesktop.href = contact.link;
        cardDesktop.target = '_blank';
        cardDesktop.className = 'contact-card';
        cardDesktop.innerHTML = `
            <i class="${contact.icon}"></i>
            <h3>${contact.platform}</h3>
            <span>${contact.username}</span>
        `;
        contactGrid.appendChild(cardDesktop);

        const cardMobile = document.createElement('a');
        cardMobile.href = contact.link;
        cardMobile.target = '_blank';
        cardMobile.className = 'contact-card';
        cardMobile.innerHTML = `
            <i class="${contact.icon}"></i>
            <h3>${contact.platform}</h3>
            <span>${contact.username}</span>
        `;
        contactTrack.appendChild(cardMobile);
    });

    // ===== CAROUSEL NAVIGATION =====
    const adminCarousel = document.getElementById('adminCarousel');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');

    if (carouselPrev && adminCarousel) {
        carouselPrev.addEventListener('click', () => {
            adminCarousel.scrollBy({ left: -250, behavior: 'smooth' });
        });
    }
    
    if (carouselNext && adminCarousel) {
        carouselNext.addEventListener('click', () => {
            adminCarousel.scrollBy({ left: 250, behavior: 'smooth' });
        });
    }

    const contactCarousel = document.getElementById('contactCarousel');
    const contactPrev = document.getElementById('contactPrev');
    const contactNext = document.getElementById('contactNext');

    if (contactPrev && contactCarousel) {
        contactPrev.addEventListener('click', () => {
            contactCarousel.scrollBy({ left: -250, behavior: 'smooth' });
        });
    }
    
    if (contactNext && contactCarousel) {
        contactNext.addEventListener('click', () => {
            contactCarousel.scrollBy({ left: 250, behavior: 'smooth' });
        });
    }

    // ===== SEARCH =====
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
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
    }

    // ===== NAVBAR TOGGLE =====
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // ===== NAVIGATION LINKS =====
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.dataset.target;
            
            if (navMenu && navToggle) {
                navMenu.classList.remove('active');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar-modern').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 15;
                
                window.scrollTo({ 
                    top: targetId === 'home' ? 0 : targetPosition, 
                    behavior: 'smooth' 
                });
            }
        });
    });

    // ===== ACTIVE SECTION =====
    function setActiveSection() {
        const scrollY = window.scrollY;
        const navbarHeight = document.querySelector('.navbar-modern').offsetHeight;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 15;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                document.querySelectorAll('.nav-item').forEach(item => {
                    const link = item.querySelector('.nav-link');
                    if (link && link.dataset.target === sectionId) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveSection);
    window.addEventListener('load', setActiveSection);
})();
