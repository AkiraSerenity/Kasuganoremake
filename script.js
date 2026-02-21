(function() {
    // Data Members
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
            quote: 'Belajar untuk memahami diri kita sendiri, terkadang kita tidak harus memahami seseorang, bahkan juga orang belum bisa memahami kita sepenuhnya, maka belajar lah untuk menerima kenyataan'
        },
        { 
            name: 'Ezan', 
            username: '@ezan_xd', 
            tiktok: 'https://www.tiktok.com/@ezan_xd', 
            photo: 'images/member6.png', 
            quote: 'Sederhana tapi berarti, itulah keluarga.'
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
            quote: 'Aduh kok aku jadi cewek siehh'
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
            quote: 'Jangan takut salah, karena dari salah kita belajar.'
        },
        { 
            name: 'Zunda', 
            username: '@shaglenv02y', 
            tiktok: 'https://www.tiktok.com/@shaglenv02y', 
            photo: 'images/member15.jpg', 
            quote: 'Emel yok'
        },
        { 
            name: 'Yushaa Von Khaslana', 
            username: '@kachusyaa', 
            tiktok: 'https://www.tiktok.com/@kachusyaa', 
            photo: 'images/member16.jpeg', 
            quote: 'Jangan lupa makan'
        }
    ];

    const admins = [
        { name: 'Shora', username: '@codename_shora.v02', role: 'Admin', tiktok: 'https://www.tiktok.com/@codename_shora.v02', photo: 'images/admin1.webp' },
        { name: 'Sora', username: '@kasugano_sora52', role: 'Pemilik & Pendiri', tiktok: 'https://www.tiktok.com/@kasugano.rora', photo: 'images/admin2.jpg' },
        { name: 'Haruka', username: '@kasugano_harukaa', role: 'Pemilik', tiktok: 'https://www.tiktok.com/@kasugano.harukaa', photo: 'images/admin3.jpg' },
        { name: 'Zero', username: '@zero.znzx', role: 'Admin', tiktok: 'https://www.tiktok.com/@zero.znzx', photo: 'images/admin4.jfif' },
        { name: 'Serlina', username: '@diiputraa28_', role: 'Admin', tiktok: 'https://www.tiktok.com/@diiputraa28_', photo: 'images/admin5.jpeg' },
        { name: '???', username: '@???', role: '???', tiktok: 'https://www.tiktok.com', photo: 'images/admin6.png' }
    ];

    const contacts = [
        { platform: 'TikTok', username: '@kasugano.official', link: 'https://www.tiktok.com/@kasugano.official', icon: 'fab fa-tiktok' },
        { platform: 'TikTok', username: '@kasugano.store', link: 'https://www.tiktok.com/@kasugano.store', icon: 'fab fa-tiktok' },
        { platform: 'Instagram', username: '@kasugano.family', link: 'https://www.instagram.com/kasugano.family', icon: 'fab fa-instagram' },
        { platform: 'Instagram', username: '@kasuganostore', link: 'https://www.instagram.com/kasuganostore', icon: 'fab fa-instagram' },
        { platform: 'WhatsApp', username: '+62 852-3240-6495', link: 'https://wa.me/6285232406495', icon: 'fab fa-whatsapp' },
        { platform: 'Email', username: 'kasuganofamilyy@gmail.com', link: 'mailto:kasuganofamilyy@gmail.com', icon: 'far fa-envelope' }
    ];

    // DOM Elements
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
    
    // Skeleton loading
    memberContainer.classList.add('skeleton');
    for (let i = 0; i < 9; i++) {
        const skeletonCard = document.createElement('div');
        skeletonCard.className = 'member-card skeleton';
        skeletonCard.style.height = '180px';
        memberContainer.appendChild(skeletonCard);
    }

    setTimeout(() => {
        memberContainer.classList.remove('skeleton');
        memberContainer.innerHTML = '';
        renderMembers(members);
    }, 800);

    // Render Members
    function renderMembers(filteredMembers = members) {
        memberContainer.innerHTML = '';
        
        if (filteredMembers.length === 0) {
            memberContainer.innerHTML = '<div style="text-align: center; padding: 40px; color: #ffb0e6;"><i class="fas fa-user-slash" style="font-size: 3rem; margin-bottom: 10px;"></i><p>Anggota tidak ditemukan</p></div>';
            return;
        }
        
        filteredMembers.forEach(member => {
            const card = document.createElement('div');
            card.className = 'member-card';
            
            card.innerHTML = `
                <div class="member-avatar">
                    <img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none'; this.parentElement.innerHTML += '<span style=\'font-size:2rem;color:white;\'>${member.name.charAt(0)}</span>';">
                </div>
                <div class="member-info">
                    <h4>${member.name}</h4>
                    <div class="username">${member.username}</div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                // Set modal content - hanya quotes dan tiktok
                document.getElementById('modalAvatar').innerHTML = `<img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none'; this.parentElement.innerHTML += '<span style=\'font-size:3rem;color:white;\'>${member.name.charAt(0)}</span>';">`;
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

    // Render Admins
    const adminTrack = document.getElementById('adminTrack');
    adminTrack.innerHTML = '';
    
    admins.forEach(admin => {
        const card = document.createElement('div');
        card.className = 'admin-card';
        card.innerHTML = `
            <div class="admin-avatar">
                <img src="${admin.photo}" alt="${admin.name}" onerror="this.style.display='none'; this.innerHTML='${admin.name.charAt(0)}';">
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

    // Render Contacts
    const contactGrid = document.getElementById('contactGrid');
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

    // Search Member
    const searchInput = document.getElementById('searchMember');
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

    // Modal
    const modal = document.getElementById('memberModal');
    const closeModal = document.getElementById('closeModal');
    
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Navbar Functions
    function getNavbarHeight() {
        return navbar ? navbar.offsetHeight : 80;
    }

    function updateScrollPadding() {
        document.documentElement.style.scrollPaddingTop = (getNavbarHeight() + 30) + 'px';
    }

    // Navbar Toggle
    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && navToggle && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Nav links click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.dataset.target;
            const navbarHeight = getNavbarHeight();
            
            navMenu.classList.remove('active');
            if (navToggle) navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            
            if (targetId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = sections[targetId];
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - navbarHeight - 30;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }
        });
    });

    // Hero parallax
    const heroImg = document.getElementById('heroImg');
    if (heroImg) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            heroImg.style.transform = `translateY(${scrollY * 0.2}px)`;
        });
    }

    // Reveal sections
    const revealSections = document.querySelectorAll('section');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.15 });

    revealSections.forEach(section => {
        revealObserver.observe(section);
    });

    // Resize event
    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateScrollPadding();
        }, 100);
    });

    // Initial setup
    window.scrollTo(0, 0);
    updateScrollPadding();
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            updateScrollPadding();
        }, 200);
    });

})();
