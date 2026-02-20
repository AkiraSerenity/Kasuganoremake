// Data
const members = [
    { name: 'Gery', username: '@gerysenwith_lapiskeju', tiktok: 'https://tiktok.com/@gerysenwith_lapiskeju', photo: 'images/member1.jpg', quote: 'Kamu rimuru bukan?' },
    { name: 'Rora', username: '@roraxml', tiktok: 'https://tiktok.com/@kasugano_sora87', photo: 'images/member2.jpeg', quote: 'Aku mah raja' },
    { name: 'Izabella', username: '@queen.izabellaz', tiktok: 'https://tiktok.com/@queen.izabellaz', photo: 'images/member3.jpeg', quote: 'Mending turu' },
    { name: 'Erie', username: '@kasugano_erie', tiktok: 'https://tiktok.com/@kasugano_erie', photo: 'images/member4.jpg', quote: 'Gw butuh uang!!!' },
    { name: 'Fuyi', username: '@fuyii_npc', tiktok: 'https://tiktok.com/@fuyii_npc', photo: 'images/member5.png', quote: 'Belajar untuk memahami diri kita sendiri' },
    { name: 'Ezan', username: '@ezan_xd', tiktok: 'https://tiktok.com/@ezan_xd', photo: 'images/member6.png', quote: 'Sederhana tapi berarti' },
    { name: 'V3iin', username: '@iyainirhmd', tiktok: 'https://tiktok.com/@iyainirhmd', photo: 'images/member7.jpg', quote: 'bntr' },
    { name: 'Shaglen', username: '@xmj.shaglen', tiktok: 'https://tiktok.com/@xmj.shaglen', photo: 'images/member8.jpg', quote: 'Id have' },
    { name: 'Valen', username: '@naineyuko', tiktok: 'https://tiktok.com/@naineyuko', photo: 'images/member9.jpg', quote: 'Aduh kok aku jadi cewek' },
    { name: 'Yuuta', username: '@yuutaxml_', tiktok: 'https://tiktok.com/@yuutaxml_', photo: 'images/member10.jpg', quote: 'You never know until you try' },
    { name: 'Jarzz', username: '@jarzz.dw.skuy', tiktok: 'https://tiktok.com/@jarzz.dw.skuy', photo: 'images/member11.jpg', quote: 'Laparr' },
    { name: 'Qwentty', username: '@qwentty.ft', tiktok: 'https://tiktok.com/@qwenty.ft', photo: 'images/member12.jpg', quote: 'Semua manusia hanyalah alat' },
    { name: 'Akira', username: '@akira.imut', tiktok: 'https://tiktok.com/@akiraa.imut', photo: 'images/member13.jpg', quote: 'Imut gini kalo bantai lu sabi' },
    { name: 'Dree', username: '@daktau_256', tiktok: 'https://tiktok.com/@daktau_256', photo: 'images/member14.jpg', quote: 'Jangan takut salah' },
    { name: 'Zunda', username: '@shaglenv02y', tiktok: 'https://tiktok.com/@shaglenv02y', photo: 'images/member15.jpg', quote: 'Emel yok' },
    { name: 'Yushaa', username: '@kachusyaa', tiktok: 'https://tiktok.com/@kachusyaa', photo: 'images/member16.jpeg', quote: 'Jangan lupa makan' }
];

const admins = [
    { name: 'Shora', username: '@codename_shora.v02', role: 'Admin', tiktok: 'https://tiktok.com/@codename_shora.v02', photo: 'images/admin1.webp' },
    { name: 'Sora', username: '@kasugano_sora52', role: 'Pemilik & Pendiri', tiktok: 'https://tiktok.com/@kasugano.rora', photo: 'images/admin2.jpg' },
    { name: 'Haruka', username: '@kasugano_harukaa', role: 'Pemilik', tiktok: 'https://tiktok.com/@kasugano.harukaa', photo: 'images/admin3.jpg' },
    { name: 'Zero', username: '@zero.znzx', role: 'Admin', tiktok: 'https://tiktok.com/@zero.znzx', photo: 'images/admin4.jfif' },
    { name: 'Serlina', username: '@diiputraa28_', role: 'Admin', tiktok: 'https://tiktok.com/@diiputraa28_', photo: 'images/admin5.jpeg' },
    { name: '???', username: '@???', role: '???', tiktok: 'https://tiktok.com', photo: 'images/admin6.png' }
];

const contacts = [
    { platform: 'TikTok', username: '@kasugano.official', link: 'https://tiktok.com/@kasugano.official', icon: 'fab fa-tiktok' },
    { platform: 'TikTok', username: '@kasugano.store', link: 'https://tiktok.com/@kasugano.store', icon: 'fab fa-tiktok' },
    { platform: 'Instagram', username: '@kasugano.family', link: 'https://instagram.com/kasugano.family', icon: 'fab fa-instagram' },
    { platform: 'Instagram', username: '@kasuganostore', link: 'https://instagram.com/kasuganostore', icon: 'fab fa-instagram' },
    { platform: 'WhatsApp', username: '+62 852-3240-6495', link: 'https://wa.me/6285232406495', icon: 'fab fa-whatsapp' },
    { platform: 'Email', username: 'kasuganofamilyy@gmail.com', link: 'mailto:kasuganofamilyy@gmail.com', icon: 'far fa-envelope' }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const memberGrid = document.getElementById('memberGrid');
const searchInput = document.getElementById('searchInput');
const adminTrack = document.getElementById('adminTrack');
const contactGrid = document.getElementById('contactGrid');
const modal = document.getElementById('memberModal');
const modalClose = document.querySelector('.modal-close');
const modalAvatar = document.getElementById('modalAvatar');
const modalName = document.getElementById('modalName');
const modalUsername = document.getElementById('modalUsername');
const modalQuote = document.getElementById('modalQuote');
const modalTiktok = document.getElementById('modalTiktok');
const modalTiktokText = document.getElementById('modalTiktokText');

// Navbar Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        const navHeight = navbar.offsetHeight;
        const targetPos = target.offsetTop - navHeight - 20;
        
        window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
        });
        
        navMenu.classList.remove('active');
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Render Members with Skeleton
memberGrid.innerHTML = '';
for (let i = 0; i < 8; i++) {
    const skeleton = document.createElement('div');
    skeleton.className = 'member-card skeleton';
    skeleton.style.height = '200px';
    memberGrid.appendChild(skeleton);
}

setTimeout(() => {
    renderMembers(members);
}, 1000);

function renderMembers(memberList) {
    memberGrid.innerHTML = '';
    
    memberList.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <div class="member-avatar">
                <img src="${member.photo}" alt="${member.name}" onerror="this.src='https://via.placeholder.com/100/ff69c2/ffffff?text=${member.name.charAt(0)}'">
            </div>
            <h4>${member.name}</h4>
            <div class="username">${member.username}</div>
        `;
        
        card.addEventListener('click', () => {
            modalAvatar.innerHTML = `<img src="${member.photo}" alt="${member.name}" onerror="this.src='https://via.placeholder.com/120/ff69c2/ffffff?text=${member.name.charAt(0)}'">`;
            modalName.textContent = member.name;
            modalUsername.textContent = member.username;
            modalQuote.textContent = member.quote || 'Bersama Kasugano, kita bersinar';
            modalTiktok.href = member.tiktok;
            modalTiktokText.textContent = member.username;
            modal.classList.add('active');
        });
        
        memberGrid.appendChild(card);
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = members.filter(m => 
        m.name.toLowerCase().includes(searchTerm) || 
        m.username.toLowerCase().includes(searchTerm)
    );
    renderMembers(filtered);
});

// Render Admin Carousel
adminTrack.innerHTML = '';
admins.forEach(admin => {
    const card = document.createElement('div');
    card.className = 'admin-card';
    card.innerHTML = `
        <div class="admin-avatar">
            <img src="${admin.photo}" alt="${admin.name}" onerror="this.src='https://via.placeholder.com/120/ff69c2/ffffff?text=${admin.name.charAt(0)}'">
        </div>
        <h4>${admin.name}</h4>
        <div class="admin-username">${admin.username}</div>
        <div class="admin-role">${admin.role}</div>
        <a href="${admin.tiktok}" target="_blank" class="admin-tiktok">
            <i class="fab fa-tiktok"></i> TikTok
        </a>
    `;
    adminTrack.appendChild(card);
});

// Carousel buttons
document.getElementById('adminPrev').addEventListener('click', () => {
    adminTrack.scrollBy({ left: -300, behavior: 'smooth' });
});

document.getElementById('adminNext').addEventListener('click', () => {
    adminTrack.scrollBy({ left: 300, behavior: 'smooth' });
});

// Render Contact Grid
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

// Modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Prevent scroll when modal open
modal.addEventListener('click', (e) => {
    e.stopPropagation();
});
