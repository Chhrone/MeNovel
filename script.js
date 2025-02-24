// Data Works dan Authors
const works = [
    {
        title: 'Dibalik Gerbang Dunia Lain: Aku Menjadi Raja Iblis',
        publishedTime: '2 jam yang lalu',
        thumbnail: '/image/cover5.jpg',
        views: 1250
    },
    {
        title: 'Regresi ke Masa SMA: Aku yang Menjadi Sang Legenda',
        publishedTime: '3 jam yang lalu',
        thumbnail: '/image/cover1.jpg',
        views: 986
    },
    {
        title: 'Reinkarnasi Sebagai Putri Ditolak: Hidup Baru di Istana Musuh',
        publishedTime: '4 jam yang lalu',
        thumbnail: '/image/cover15.jpg',
        views: 754
    },
    {
        title: 'Dunia Paralel: Ketika Aku Bertemu Diriku yang Lain',
        publishedTime: '5 jam yang lalu',
        thumbnail: '/image/cover3.jpg',
        views: 1100
    },
    {
        title: 'Cinta di Antara Dua Dunia: Kamu yang dari Masa Depan',
        publishedTime: '6 jam yang lalu',
        thumbnail: '/image/cover2.jpg',
        views: 842
    },
    {
        title: 'Aku yang Terlempar ke Dunia Game: Menjadi NPC Terkuat',
        publishedTime: '7 jam yang lalu',
        thumbnail: '/image/cover4.jpg',
        views: 1300
    },
    {
        title: 'Reinkarnasi Sebagai Pedagang di Dunia Sihir',
        publishedTime: '8 jam yang lalu',
        thumbnail: '/image/cover16.jpg',
        views: 1500
    },
    {
        title: 'Dibalik Layar Dunia: Aku yang Menulis Takdir',
        publishedTime: '9 jam yang lalu',
        thumbnail: '/image/cover6.jpg',
        views: 1400
    },
    {
        title: 'Cinta Terlarang di Dunia Virtual',
        publishedTime: '10 jam yang lalu',
        thumbnail: '/image/cover7.jpg',
        views: 2000
    },
    {
        title: 'Regresi ke Masa Lalu: Menyelamatkan Dunia Sebelum Runtuh',
        publishedTime: '11 jam yang lalu',
        thumbnail: '/image/cover8.jpg',
        views: 1800
    },
    {
        title: 'Reinkarnasi Sebagai Anak Jalanan di Dunia Fantasi',
        publishedTime: '12 jam yang lalu',
        thumbnail: '/image/cover9.jpg',
        views: 1600
    },
    {
        title: 'Dunia yang Berbeda: Aku dan Kamu di Garis Waktu yang Berbeda',
        publishedTime: '13 jam yang lalu',
        thumbnail: '/image/cover10.jpg',
        views: 1700
    },
    {
        title: 'Cinta di Tengah Kekacauan Dunia Sihir',
        publishedTime: '14 jam yang lalu',
        thumbnail: '/image/cover11.jpg',
        views: 1900
    },
    {
        title: 'Regresi Sebagai Pahlawan yang Terlupakan',
        publishedTime: '15 jam yang lalu',
        thumbnail: '/image/cover12.jpg',
        views: 1200
    },
    {
        title: 'Reinkarnasi Sebagai Monster: Aku yang Menjadi Raja Kegelapan',
        publishedTime: '16 jam yang lalu',
        thumbnail: '/image/cover13.jpg',
        views: 2100
    },
    {
        title: 'Dunia Lain: Aku yang Menjadi Sistem',
        publishedTime: '17 jam yang lalu',
        thumbnail: '/image/cover14.jpg',
        views: 2200
    },
    {
        title: 'Cinta di Antara Dua Waktu: Kamu yang dari Masa Lalu',
        publishedTime: '18 jam yang lalu',
        thumbnail: '/image/cover15.jpg',
        views: 2300
    },
    {
        title: 'Regresi ke Masa Kecil: Aku yang Menjadi Jenius',
        publishedTime: '19 jam yang lalu',
        thumbnail: '/image/cover16.jpg',
        views: 2400
    },
    {
        title: 'Reinkarnasi Sebagai Putra Kaisar yang Terbuang',
        publishedTime: '20 jam yang lalu',
        thumbnail: '/image/cover1.jpg',
        views: 2500
    },
    {
        title: 'Dunia yang Berbeda: Aku dan Kamu di Garis Waktu yang Sama',
        publishedTime: '21 jam yang lalu',
        thumbnail: '/image/cover2.jpg',
        views: 2600
    }
];

const authors = [
    { name: 'Risa Yamamoto', profilePic: '/image/profile1.jpg', worksCount: 12 },
    { name: 'Akiko Tanaka', profilePic: '/image/profile2.jpg', worksCount: 10 },
    { name: 'Kenji Nakamura', profilePic: '/image/profile3.jpg', worksCount: 8 },
    { name: 'Yuki Takahashi', profilePic: '/image/profile4.jpg', worksCount: 15 },
    { name: 'Aiko Suzuki', profilePic: '/image/profile5.jpg', worksCount: 20 },
    { name: 'Haruto Watanabe', profilePic: '/image/profile6.jpg', worksCount: 18 },
    { name: 'Sakura Kobayashi', profilePic: '/image/profile7.jpg', worksCount: 14 },
    { name: 'Kaito Ishida', profilePic: '/image/profile8.jpg', worksCount: 16 },
    { name: 'Mina Endo', profilePic: '/image/profile9.jpg', worksCount: 13 },
    { name: 'Ren Mori', profilePic: '/image/profile10.jpg', worksCount: 11 },
    { name: 'Hana Fujimoto', profilePic: '/image/profile11.jpg', worksCount: 9 },
    { name: 'Riku Sakurai', profilePic: '/image/profile12.jpg', worksCount: 7 },
    { name: 'Emi Takagi', profilePic: '/image/profile13.jpg', worksCount: 17 },
    { name: 'Daiki Yoshida', profilePic: '/image/profile14.jpg', worksCount: 19 },
    { name: 'Nao Ito', profilePic: '/image/profile15.jpg', worksCount: 22 },
    { name: 'Rin Matsuda', profilePic: '/image/profile16.jpg', worksCount: 21 },
    { name: 'Kenta Shimizu', profilePic: '/image/profile17.jpg', worksCount: 10 },
    { name: 'Mei Nakamura', profilePic: '/image/profile18.jpg', worksCount: 12 },
    { name: 'Tsubasa Ogawa', profilePic: '/image/profile19.jpg', worksCount: 14 },
    { name: 'Aya Kimura', profilePic: '/image/profile20.jpg', worksCount: 16 },
];

// Function untuk membuat item artikelnya
function createworkPreview(work) {
    const preview = document.createElement('div');
    preview.className = 'work-preview';
    
    preview.innerHTML = `
        <div style="display: flex; gap: 1rem; align-items: center;">
            <a href="/" style="display: inline-block;">
                <img src="${work.thumbnail}" alt="${work.title}" style="width: 70px; height: 70px; border-radius: 4px;">
            </a>
            <div>
                <a href="/" style="text-decoration: none; color: inherit;">
                    <h3 style="font-size: 0.9rem; margin-bottom: 0.25rem;">${work.title}</h3>
                </a>
                <div style="display: flex; gap: 1rem; color: #666; font-size: 0.9rem;">
                    <span>Diterbitkan ${work.publishedTime}</span>
                    <span>${work.views} pembaca</span>
                </div>
            </div>
        </div>
    `;
    
    return preview;
}



// Function untuk membuat list artikel
function renderworkList(works) {
    const workList = document.querySelector('.work-list');
    workList.innerHTML = '';
    
    // Batasi artikel menjadi hanya 10
    const limitedworks = works.slice(0, 6);
    
    limitedworks.forEach(work => {
        workList.appendChild(createworkPreview(work));
    });
}

// Sorting list artikel
document.getElementById('sort-dropdown').addEventListener('change', (e) => {
    const sortBy = e.target.value;
    let sortedworks = [...works];
    
    if (sortBy === 'latest') {
        sortedworks = sortedworks.sort((a, b) => {
            return new Date(b.publishedTime) - new Date(a.publishedTime);
        });
    } else if (sortBy === 'popularity') {
        sortedworks = sortedworks.sort((a, b) => {
            return b.views - a.views;
        });
    }
    
    // Render hanya 10 artikel setelah sorting
    renderworkList(sortedworks);
});

// Render artikel awal (default)
renderworkList(works);

function createWorkItem(work) {
    const item = document.createElement('div');
    item.className = 'work-item';

    // Membuat elemen HTML dengan struktur baru
    item.innerHTML = `
        <a href="#" class="work-link">
            <img src="${work.thumbnail}" alt="${work.title}">
            <h3>${work.title}</h3>
        </a>
        <div class="details">
            <span class="published-time">Diterbitkan ${work.publishedTime}</span>
            <span class="views">${work.views} pembaca</span>
        </div>
    `;
    return item;
}

// Function untuk membuat list artikel
function renderOtherWorksList(works) {
    const workGrid = document.querySelector('.other-works .work-grid');
    workGrid.innerHTML = '';

    // Batasi artikel menjadi hanya 12 (untuk grid)
    const limitedWorks = works.slice(0, 12);

    limitedWorks.forEach((work) => {
        workGrid.appendChild(createWorkItem(work));
    });
}

// Sorting list artikel
document.getElementById('sort-dropdown-other').addEventListener('change', (e) => {
    const sortBy = e.target.value;
    let sortedWorks = [...works];

    if (sortBy === 'latest') {
        sortedWorks = sortedWorks.sort((a, b) => {
            return new Date(b.publishedTime) - new Date(a.publishedTime);
        });
    } else if (sortBy === 'popularity') {
        sortedWorks = sortedWorks.sort((a, b) => {
            return b.views - a.views;
        });
    }

    // Render hanya 12 artikel setelah sorting
    renderOtherWorksList(sortedWorks);
});

// Render artikel awal (default)
renderOtherWorksList(works);


// Fungsi untuk membuat preview penulis
function createAuthorPreview(author) {
    const preview = document.createElement('div');
    preview.className = 'author-preview';

    preview.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
            <img src="${author.profilePic}" alt="${author.name}" style="width: 50px; height: 50px; border-radius: 50%;">
            <div>
                <h3 style="font-size: 1rem; margin: 0;">${author.name}</h3>
                <p style="color: #666; font-size: 0.9rem;">${author.worksCount} karya diterbitkan</p>
            </div>
        </div>
    `;

    return preview;
}

// Render daftar penulis dalam carousel
let currentPage = 0;
const itemsPerPage = 10;

function renderAuthorList(page) {
    const authorList = document.querySelector('.author-list');
    authorList.innerHTML = ''; // Hapus konten sebelumnya

    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const currentAuthors = authors.slice(start, end);

    currentAuthors.forEach((author) => {
        authorList.appendChild(createAuthorPreview(author));
    });
}

// Inisialisasi carousel
renderAuthorList(currentPage);

// Event listener untuk tombol navigasi carousel
document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');

    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            renderAuthorList(currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        if ((currentPage + 1) * itemsPerPage < authors.length) {
            currentPage++;
            renderAuthorList(currentPage);
        }
    });
});