(function() {
    // Data Members
    const members = [
        { 
            name: 'Gery', 
            username: '@gerysenwith_lapiskeju', 
            tiktok: 'https://www.tiktok.com/@gerysenwith_lapiskeju', 
            photo: 'images/member1.jpg', 
            quote: 'Bahkan hal sederhana seperti azan magrib bisa menjadi sepesial hijau engkau menantikan nya'
        },
        { 
            name: 'Rora', 
            username: '@roraxml', 
            tiktok: 'https://www.tiktok.com/@kasugano_sora87', 
            photo: 'images/member2.jpeg', 
            quote: 'Manusia memang tidak bisa mengubah waktu, tapi dengan berjalan nya waktu manusia bisa berubah'
        },
        { 
            name: 'Izabella', 
            username: '@queen.izabellaz', 
            tiktok: 'https://www.tiktok.com/@queen.izabellaz', 
            photo: 'images/member3.jpeg', 
            quote: 'Manusia akan banyak berubah ketika hatinya terluka'
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
            quote: 'Seorang pria dengan sebilah tombak adalah sebuah benteng'
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
            quote: 'Hidup itu pilihan so just gambling bro'
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
            name: 'Qwenty', 
            username: '@qwenty.ft', 
            tiktok: 'https://www.tiktok.com/@qwenty.ft', 
            photo: 'images/member12.jpg', 
            quote: 'Semua manusia hanyalah alat'
        },
        { 
            name: 'Akira', 
            username: '@akira.imut', 
            tiktok: 'https://www.tiktok.com/@akiraa.imut', 
            photo: 'images/member13.jpg', 
            quote: 'Lahhh, gw mah jago'
        },
        { 
            name: 'Dree', 
            username: '@daktau_256', 
            tiktok: 'https://www.tiktok.com/@daktau_256', 
            photo: 'images/member14.jpg', 
            quote: 'AFK njirrr orang nya.'
        },
        { 
            name: 'Zunda', 
            username: '@shaglenv02y', 
            tiktok: 'https://www.tiktok.com/@shaglenv02y', 
            photo: 'images/member15.jpg', 
            quote: 'Jika kamu lapar makan lah (walaupun belum buka mokel aja)'
        },
        { 
            name: 'Yushaa Von Khaslana', 
            username: '@kachusyaa', 
            tiktok: 'https://www.tiktok.com/@kachusyaa', 
            photo: 'images/member16.jpeg', 
            quote: 'Jangan lupa makan'
        }
        { 
            name: 'Zakk', 
            username: '@sb_prst', 
            tiktok: 'https://www.tiktok.com/@sb_prst?_r=1&_t=ZS-946jrKwcwxo', 
            photo: 'images/member17.jpeg', 
            quote: 'Jangan lupa main epep'
        },
        {
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

    // Fungsi untuk menentukan kelas berdasarkan panjang username
    function getUsernameClass(username) {
        const length = username.length;
        if (length > 25) return 'username-very-long';
        if (length > 20) return 'username-long';
        if (length > 15) return 'username-medium';
        return 'username-small';
    }

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
            
            const avatarDiv = document.createElement('div');
            avatarDiv.className = 'member-avatar';
            
            const img = document.createElement('img');
            img.src = member.photo;
            img.alt = member.name;
            img.style.objectPosition = 'center';
            img.style.objectFit = 'cover';
            img.onerror = function() { 
                this.style.display = 'none'; 
                const span = document.createElement('span');
                span.style.cssText = 'font-size:2rem;color:white;';
                span.textContent = member.name.charAt(0);
                this.parentElement.appendChild(span);
            };
            
            avatarDiv.appendChild(img);
            
            const infoDiv = document.createElement('div');
            infoDiv.className = 'member-info';
            
            const nameH4 = document.createElement('h4');
            nameH4.textContent = member.name;
            
            const usernameDiv = document.createElement('div');
            usernameDiv.className = 'username ' + getUsernameClass(member.username);
            usernameDiv.textContent = member.username;
            
            infoDiv.appendChild(nameH4);
            infoDiv.appendChild(usernameDiv);
            
            card.appendChild(avatarDiv);
            card.appendChild(infoDiv);
            
            card.addEventListener('click', () => {
                document.getElementById('modalAvatar').innerHTML = '';
                const modalImg = document.createElement('img');
                modalImg.src = member.photo;
                modalImg.alt = member.name;
                modalImg.style.objectPosition = 'center';
                modalImg.style.objectFit = 'cover';
                modalImg.onerror = function() { 
                    this.style.display = 'none'; 
                    const span = document.createElement('span');
                    span.style.cssText = 'font-size:3rem;color:white;';
                    span.textContent = member.name.charAt(0);
                    this.parentElement.appendChild(span);
                };
                document.getElementById('modalAvatar').appendChild(modalImg);
                
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
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'admin-avatar';
        
        const img = document.createElement('img');
        img.src = admin.photo;
        img.alt = admin.name;
        img.style.objectPosition = 'center';
        img.style.objectFit = 'cover';
        img.onerror = function() { 
            this.style.display = 'none'; 
            const span = document.createElement('span');
            span.style.cssText = 'font-size:3rem;color:white;';
            span.textContent = admin.name.charAt(0);
            this.parentElement.appendChild(span);
        };
        
        avatarDiv.appendChild(img);
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'admin-info';
        
        const nameH4 = document.createElement('h4');
        nameH4.textContent = admin.name;
        
        const usernameDiv = document.createElement('div');
        usernameDiv.className = 'admin-username ' + getUsernameClass(admin.username);
        usernameDiv.textContent = admin.username;
        
        const roleDiv = document.createElement('div');
        roleDiv.className = 'admin-role';
        roleDiv.textContent = admin.role;
        
        const tiktokLink = document.createElement('a');
        tiktokLink.href = admin.tiktok;
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

    // Render Contacts Desktop
    const contactGrid = document.getElementById('contactGrid');
    contactGrid.innerHTML = '';
    contacts.forEach(contact => {
        const card = document.createElement('a');
        card.href = contact.link;
        card.target = '_blank';
        card.className = 'contact-card';
        
        const icon = document.createElement('i');
        icon.className = contact.icon;
        
        const h3 = document.createElement('h3');
        h3.textContent = contact.platform;
        
        const span = document.createElement('span');
        span.textContent = contact.username;
        
        card.appendChild(icon);
        card.appendChild(h3);
        card.appendChild(span);
        
        contactGrid.appendChild(card);
    });

    // Render Contacts Mobile
    const contactTrack = document.getElementById('contactTrack');
    contactTrack.innerHTML = '';
    contacts.forEach(contact => {
        const card = document.createElement('a');
        card.href = contact.link;
        card.target = '_blank';
        card.className = 'contact-card';
        
        const icon = document.createElement('i');
        icon.className = contact.icon;
        
        const h3 = document.createElement('h3');
        h3.textContent = contact.platform;
        
        const span = document.createElement('span');
        span.textContent = contact.username;
        
        card.appendChild(icon);
        card.appendChild(h3);
        card.appendChild(span);
        
        contactTrack.appendChild(card);
    });

    // Carousel Navigation
    const adminCarousel = document.getElementById('adminCarousel');
    document.getElementById('carouselPrev').addEventListener('click', () => {
        adminCarousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
    document.getElementById('carouselNext').addEventListener('click', () => {
        adminCarousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    const contactCarousel = document.getElementById('contactCarousel');
    document.getElementById('contactPrev').addEventListener('click', () => {
        contactCarousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
    document.getElementById('contactNext').addEventListener('click', () => {
        contactCarousel.scrollBy({ left: 300, behavior: 'smooth' });
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

    // Close menu
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





