export interface StaticRecipe {
  id: string;
  title: string;
  ingredients: string[];
  tools: string[];
  ingredientsSummary: string;
  stepsMarkdown: string;
  videoUrl: string;
  cookTime: string;
  servings: string;
  chefName: string;
  chefAvatar: string;
  imageUrl: string;
  eggsCount: number;
}

export const COMMUNITY_RECIPES: StaticRecipe[] = [
  {
    id: 'ceplok-pontianak',
    title: 'Telor Ceplok Kecap Bawang Putih',
    ingredients: ['2 butir telor ayam', '2 siung bawang putih cincang halus', '3 buah cabai rawit iris', '2 sdm kecap manis kualitas tinggi', '1 sdm minyak goreng'],
    tools: ['Wajan Anti Lengket (Teflon)', 'Spatula', 'Wadah kecil'],
    ingredientsSummary: '🥚🥚🧄🌶️ Perpaduan Gurih & Manis',
    stepsMarkdown: `1. Persiapan Bumbu Siram: Campurkan kecap manis, bawang putih yang telah dicincang halus, dan irisan cabai rawit ke dalam wadah kecil. Aduk hingga rata agar aroma bawang putih keluar.
2. Pemanasan Wajan: Panaskan minyak di atas teflon menggunakan api sedang. Pastikan minyak sudah cukup panas sebelum telor dimasukkan agar menghasilkan pinggiran yang renyah (crispy edges).
3. Teknik Menggoreng: Pecahkan telor satu per satu ke dalam wajan. Biarkan bagian putih telor mengeras dan membentuk tekstur garing kecokelatan di bagian tepi, namun pastikan kuning telor tetap setengah matang untuk tekstur yang lebih creamy.
4. Karamelisasi: Tuangkan campuran bumbu kecap tepat di atas permukaan telor yang sedang digoreng. Biarkan selama kurang lebih 30-45 detik hingga bumbu mendidih dan sedikit mengental (karamelisasi) di permukaan telor.
5. Penyajian: Matikan api, angkat telor secara perlahan menggunakan spatula, dan sajikan segera di atas nasi hangat.`,
    videoUrl: 'https://www.youtube.com/embed/jZf-8w9C0_A',
    cookTime: '5 menit',
    servings: '1 orang',
    chefName: 'Chef Mami',
    chefAvatar: 'https://picsum.photos/seed/chef2/100/100',
    imageUrl: 'https://picsum.photos/seed/egg2/400/300',
    eggsCount: 2
  },
  {
    id: 'dadar-gobal-gabul',
    title: 'Telor Dadar Tebal Spesial Daun Bawang',
    ingredients: ['3 butir telor ayam segar', '3 batang daun bawang (iris halus)', '5 siung bawang merah (iris tipis)', '4 buah cabai rawit (iris halus)', '1/2 sdt garam & kaldu jamur'],
    tools: ['Mangkuk pengocok', 'Teflon diameter 18-20cm', 'Spatula'],
    ingredientsSummary: '🥚🥚🥚🌿 Tekstur Padat & Berempah',
    stepsMarkdown: `1. Pengocokan Udara: Pecahkan 3 butir telor ke dalam mangkuk besar. Masukkan garam dan kaldu jamur. Kocok telor dengan kecepatan tinggi selama 1-2 menit hingga benar-benar berbusa dan mengembang. Udara yang terjebak di dalamnya akan membuat dadar lebih tebal.
2. Persiapan Bahan Isian: Masukkan irisan daun bawang, bawang merah, dan cabai rawit ke dalam adonan telor. Aduk perlahan agar isian tersebar merata.
3. Teknik Penggorengan: Panaskan minyak dalam jumlah yang cukup banyak di teflon menggunakan api sedang. Minyak yang panas sangat krusial untuk membuat telor langsung mengembang saat dituang.
4. Pematangan Merata: Tuangkan seluruh adonan telor. Setelah bagian bawah mulai mengeras, kecilkan api ke posisi rendah. Tutup teflon selama 2-3 menit agar bagian dalam matang sempurna tanpa menghanguskan bagian luar.
5. Balik Dadar: Balik telor dengan hati-hati saat bagian bawah sudah berwarna cokelat keemasan. Masak sisi lainnya hingga matang merata. Angkat dan tiriskan sebelum disajikan.`,
    videoUrl: 'https://www.youtube.com/embed/S26M7M-0nF8',
    cookTime: '10 menit',
    servings: '2 orang',
    chefName: 'Chef Professional',
    chefAvatar: 'https://picsum.photos/seed/chef1/100/100',
    imageUrl: 'https://picsum.photos/seed/egg1/400/300',
    eggsCount: 3
  },
  {
    id: 'orak-arik-semalam',
    title: 'Orak-Arik Telor Sosis Pedas',
    ingredients: ['2 butir telor ayam', '2 buah sosis sapi/ayam (iris serong)', '1 siung bawang putih cincang', '1 sdm kecap manis', '1/2 sdt garam & lada hitam'],
    tools: ['Wajan', 'Sutil (Turner)'],
    ingredientsSummary: '🥚🥚🌭 Praktis & Bergizi',
    stepsMarkdown: `1. Tumis Aroma: Panaskan 1 sdm minyak di atas wajan dengan api sedang. Masukkan bawang putih cincang, tumis hingga mengeluarkan aroma harum dan berwarna kecokelatan ringan.
2. Pengolahan Protein: Masukkan irisan sosis. Masak hingga sisi sosis sedikit berubah warna dan teksturnya menjadi agak kencang.
3. Teknik Scrambling: Pecahkan 2 butir telor langsung ke tengah wajan. Diamkan selama kurang lebih 10 detik hingga bagian bawah telor sedikit set, kemudian gunakan sutil untuk mengaduk secara kasar (orak-arik) hingga terbentuk gumpalan telor yang bertekstur.
4. Bumbu & Karakter: Tambahkan kecap manis, garam, and lada hitam. Tingkatkan api menjadi besar sejenak, aduk cepat selama 30 detik. Teknik ini akan memberikan sedikit aroma smoky (wok hei) pada masakan.
5. Penyajian Akhir: Segera angkat masakan agar telor tidak menjadi terlalu kering (overcooked). Sajikan sebagai pendamping nasi atau roti.`,
    videoUrl: 'https://www.youtube.com/embed/6iW4J2-iUvE',
    cookTime: '8 menit',
    servings: '1 orang',
    chefName: 'Chef Spesialis Sarapan',
    chefAvatar: 'https://picsum.photos/seed/chef3/100/100',
    imageUrl: 'https://picsum.photos/seed/egg3/400/300',
    eggsCount: 2
  },
  {
    id: 'kukus-rice-cooker',
    title: 'Telor Kukus Lembut Spesial',
    ingredients: ['2 butir telor ayam kualitas baik', '150ml kaldu cair hangat', '1 batang daun bawang (iris halus)', '1 sdt kecap asin', 'Sedikit minyak wijen'],
    tools: ['Mangkuk keramik/tahan panas', 'Rice Cooker dengan tray pengukus'],
    ingredientsSummary: '🥚🥚🍶 Tekstur Halus Seperti Puding',
    stepsMarkdown: `1. Pencampuran Adonan: Kocok lepas 2 butir telor dalam mangkuk tahan panas secara perlahan agar tidak banyak buih terbentuk.
2. Rasio Kaldu: Campurkan kaldu cair hangat (suhu suam-suam kuku) dengan kecap asin dan minyak wijen. Tuangkan secara bertahap ke dalam kocokan telor sambil terus diaduk perlahan.
3. Teknik Penyaringan: Saring adonan menggunakan saringan halus untuk memastikan tidak ada gumpalan telor putih yang tersisa, sehingga hasil akhir akan mulus seperti puding.
4. Proses Pengukusan: Masukkan mangkuk ke dalam rice cooker. Gunakan fungsi Steam atau letakkan di atas nasi yang sedang dimasak (pastikan nasi sudah hampir matang). Tutup mangkuk dengan aluminium foil agar air uap tidak menetes ke dalam adonan.
5. Pematangan: Kukus selama 12-15 menit. Cek kekentalan dengan menggoyang mangkuk sedikit; jika bagian tengah hanya sedikit bergoyang (jiggle), telor sudah matang sempurna. Taburkan daun bawang di atasnya.`,
    videoUrl: 'https://www.youtube.com/embed/oG06m69I_hQ',
    cookTime: '15 menit',
    servings: '1 orang',
    chefName: 'Chef Kuliner Sehat',
    chefAvatar: 'https://picsum.photos/seed/chef9/100/100',
    imageUrl: 'https://picsum.photos/seed/egg9/400/300',
    eggsCount: 2
  },
  {
    id: 'dadar-asam-manis',
    title: 'Telor Dadar Siram Saus Asam Manis',
    ingredients: ['2 butir telor ayam', '3 sdm saus tomat', '1 sdm saus sambal', '1/2 buah bawang bombay (iris memanjang)', '100ml air bersih'],
    tools: ['Teflon', 'Panci saus kecil', 'Spatula'],
    ingredientsSummary: '🥚🥚🍅 Citarasa Oriental Modern',
    stepsMarkdown: `1. Pembuatan Dadar: Buat telor dadar krispi menggunakan 2 butir telor. Goreng hingga matang dan berwarna cokelat keemasan. Angkat, tiriskan, dan potong menjadi beberapa bagian sesuai selera. Letakkan di piring saji.
2. Penumisan Saus: Di panci kecil, tumis bawang bombay dengan sedikit minyak hingga layu dan aromanya harum.
3. Pengentalan Saus: Masukkan saus tomat, saus sambal, dan air. Aduk hingga mendidih. Jika ingin saus yang lebih kental, Anda bisa menambahkan sedikit larutan maizena.
4. Koreksi Rasa: Tambahkan sedikit gula pasir dan garam untuk menyeimbangkan rasa asam dari saus tomat. Masak hingga saus mencapai kekentalan yang diinginkan.
5. Finishing: Siramkan saus asam manis yang masih panas secara merata ke atas potongan telor dadar. Sajikan segera selagi hangat agar tekstur dadar tetap terjaga.`,
    videoUrl: 'https://www.youtube.com/embed/X99M-07_1A4',
    cookTime: '12 menit',
    servings: '1 orang',
    chefName: 'Chef Fusion',
    chefAvatar: 'https://picsum.photos/seed/chef7/100/100',
    imageUrl: 'https://picsum.photos/seed/egg7/400/300',
    eggsCount: 2
  },
  {
    id: 'ceplok-balado-iris',
    title: 'Telor Ceplok Bumbu Balado Iris',
    ingredients: ['2 butir telor ayam', '5 buah cabai merah (iris serong)', '3 siung bawang merah (iris tipis)', '1 buah tomat merah (potong dadu)', '1/2 sdt garam'],
    tools: ['Wajan', 'Sutil'],
    ingredientsSummary: '🥚🥚🌶️ Sensasi Pedas Segar',
    stepsMarkdown: `1. Penggorengan Telor: Goreng 2 butir telor secara ceplok (mata sapi). Anda bisa memilih tingkat kematangan kuning telor sesuai selera. Sisihkan telor di piring saji.
2. Penumisan Bumbu Iris: Gunakan sisa minyak menggoreng telor (sekitar 1-2 sdm). Tumis bawang merah hingga layu, kemudian masukkan irisan cabai merah. Masak hingga cabai tidak berbau langu.
3. Pengolahan Tomat: Masukkan potongan tomat. Tekan-tekan lembut tomat menggunakan sutil hingga mengeluarkan air dan teksturnya hancur menyatu dengan bumbu lainnya.
4. Seasoning: Tambahkan garam dan sedikit air jika tumisan terlalu kering. Masak hingga bumbu meresap dan tomat membentuk saus kasar yang kental.
5. Finishing: Letakkan kembali telor ceplok ke dalam wajan, aduk perlahan selama 15 detik agar bumbu menempel sempurna di permukaan telor. Matikan api dan sajikan.`,
    videoUrl: 'https://www.youtube.com/embed/8oF_8O2pW0k',
    cookTime: '10 menit',
    servings: '1 orang',
    chefName: 'Chef Masakan Nusantara',
    chefAvatar: 'https://picsum.photos/seed/chef4/100/100',
    imageUrl: 'https://picsum.photos/seed/egg4/400/300',
    eggsCount: 2
  },
  {
    id: 'tamagoyaki-kw',
    title: 'Telor Gulung Jepang (Tamagoyaki)',
    ingredients: ['2 butir telor ayam', '2 sdm susu cair full cream', '1/2 sdt kaldu jamur', 'Sedikit minyak untuk olesan'],
    tools: ['Teflon anti lengket (persegi lebih baik)', 'Spatula/Sumpit', 'Mangkuk pengocok'],
    ingredientsSummary: '🥚🥚🥛 Tekstur Lembut & Estetik',
    stepsMarkdown: `1. Preparasi Adonan: Kocok telor bersama susu cair dan kaldu jamur. Pastikan adonan benar-benar tercampur rata dan tidak ada bagian putih telor yang menggumpal. Saring adonan untuk hasil yang lebih halus.
2. Pengaturan Suhu: Panaskan teflon dengan api sangat kecil. Olesi permukaan teflon dengan sedikit minyak menggunakan tisu dapur agar merata dan tidak terlalu berminyak.
3. Layer Pertama: Tuangkan sekitar 1/4 bagian adonan telor hingga menutupi seluruh permukaan teflon secara tipis. Biarkan hingga bagian bawah set namun bagian atas masih agak basah.
4. Teknik Menggulung: Gulung telor secara perlahan dari satu sisi ke sisi lainnya menggunakan sumpit atau spatula. Geser gulungan ke salah satu ujung teflon.
5. Layer Selanjutnya: Olesi kembali sisi kosong teflon dengan sedikit minyak. Tuang lagi sebagian adonan telor, pastikan adonan baru masuk ke bawah gulungan telor sebelumnya agar menyambung. Ulangi proses ini hingga adonan habis.
6. Pemadatan: Setelah semua adonan tergulung, tekan-tekan lembut gulungan telor di pojok teflon untuk membentuk kotak yang rapi. Angkat, diamkan sebentar, lalu potong-potong dengan pisau tajam.`,
    videoUrl: 'https://www.youtube.com/embed/S_8qK2y466M',
    cookTime: '15 menit',
    servings: '1 orang',
    chefName: 'Chef Spesialis Bento',
    chefAvatar: 'https://picsum.photos/seed/chef8/100/100',
    imageUrl: 'https://picsum.photos/seed/egg8/400/300',
    eggsCount: 2
  },
  {
    id: 'sarden-telur',
    title: 'Tumis Sarden Orak-Arik Telor',
    ingredients: ['2 butir telor ayam', '1 kaleng kecil sarden (pilih varian favorit)', '2 siung bawang putih (iris halus)', '3 buah cabai rawit (iris serong)'],
    tools: ['Wajan', 'Sutil'],
    ingredientsSummary: '🥚🥚🥫 Tinggi Protein & Praktis',
    stepsMarkdown: `1. Dasar Aroma: Tumis bawang putih dan cabai rawit dengan 1 sdm minyak hingga harum dan berwarna kuning keemasan.
2. Scrambling Telor: Pecahkan 2 butir telor ke dalam wajan. Biarkan sebentar hingga bagian bawahnya set, lalu orak-arik secara kasar. Masak hingga telor mencapai tingkat kematangan sekitar 70%.
3. Integrasi Sarden: Tuangkan seluruh isi kaleng sarden ke dalam wajan. Gunakan sutil untuk membelah ikan sarden menjadi ukuran yang lebih kecil agar bumbu lebih meresap dan tercampur rata dengan telor.
4. Proses Reduksi: Masak dengan api sedang hingga kuah sarden mendidih dan sedikit menyusut (reduksi). Hal ini akan memperkuat rasa saus sarden pada telor.
5. Finishing: Koreksi rasa. Biasanya tidak perlu garam tambahan karena saus sarden sudah cukup asin. Sajikan selagi panas dengan nasi putih.`,
    videoUrl: 'https://www.youtube.com/embed/6iW4J2-iUvE',
    cookTime: '10 menit',
    servings: '2 orang',
    chefName: 'Chef Kuliner Praktis',
    chefAvatar: 'https://picsum.photos/seed/chef5/100/100',
    imageUrl: 'https://picsum.photos/seed/egg5/400/300',
    eggsCount: 2
  },
  {
    id: 'omelet-interjunet',
    title: 'Martabak Mi Telor Kornet',
    ingredients: ['2 butir telor ayam', '1 bungkus mi instan goreng', '1 batang daun bawang (iris halus)', '2 sdm kornet sapi'],
    tools: ['Panci kecil (untuk rebus mi)', 'Teflon diameter 20cm', 'Spatula'],
    ingredientsSummary: '🥚🥚🍜 Tekstur Garing Luar Lembut Dalam',
    stepsMarkdown: `1. Persiapan Mi: Rebus mi instan dalam air mendidih hingga mencapai tingkat kematangan al dente (jangan terlalu lembek). Tiriskan mi dan campurkan dengan seluruh bumbu bawaan mi instan.
2. Adonan Utama: Dalam mangkuk, kocok 2 butir telor. Masukkan mi yang sudah berbumbu, irisan daun bawang, dan kornet sapi. Aduk hingga kornet hancur dan tercampur merata dengan telor dan mi.
3. Teknik Menggoreng: Panaskan 1 sdm minyak di teflon menggunakan api sedang cenderung kecil. Tuangkan seluruh adonan, ratakan hingga membentuk lingkaran sempurna.
4. Pematangan Perlahan: Masak perlahan hingga bagian bawah benar-benar garing dan berwarna cokelat gelap (namun tidak gosong). Penggunaan api kecil sangat penting agar bagian dalam yang tebal bisa matang sempurna.
5. Finishing: Balik martabak mi dengan bantuan piring atau spatula lebar. Masak sisi sebaliknya hingga garing. Potong-potong seperti pizza dan sajikan dengan saus sambal.`,
    videoUrl: 'https://www.youtube.com/embed/oG06m69I_hQ',
    cookTime: '10 menit',
    servings: '1 orang',
    chefName: 'Chef Kreasi Mi',
    chefAvatar: 'https://picsum.photos/seed/chef10/100/100',
    imageUrl: 'https://picsum.photos/seed/egg10/400/300',
    eggsCount: 2
  },
  {
    id: 'rendang-instan',
    title: 'Telor Rebus Goreng Bumbu Rendang',
    ingredients: ['4 butir telor (rebus dan kupas)', '1 sachet bumbu rendang instan premium', '100ml air santan/air', '1 sdm minyak goreng'],
    tools: ['Panci kecil/Wajan', 'Sendok sayur'],
    ingredientsSummary: '🥚🥚🥚🥚🥥 Citarasa Mewah Tradisional',
    stepsMarkdown: `1. Tekstur Telor: Panaskan sedikit minyak dalam wajan. Goreng telor rebus yang sudah dikupas hingga seluruh permukaannya berubah menjadi kecokelatan dan bertekstur keriting (deep fried). Teknik ini membuat bumbu rendang lebih mudah menempel. Angkat dan sisihkan.
2. Penumisan Bumbu: Tumis bumbu rendang instan dengan sedikit minyak sisa menggoreng telor hingga aromanya keluar dan warna bumbu sedikit lebih gelap.
3. Simmering: Tuangkan air atau santan cair ke dalam bumbu. Aduk hingga rata dan biarkan mendidih.
4. Proses Meresap: Masukkan telor rebus goreng ke dalam bumbu. Kecilkan api ke posisi paling rendah. Masak (simmer) sambil sesekali diaduk agar bumbu tidak gosong di dasar panci.
5. Finishing: Masak terus hingga cairan menyusut dan bumbu rendang menjadi kental serta mengeluarkan minyak (dedak rendang). Pastikan seluruh permukaan telor terbalut bumbu dengan tebal. Sajikan.`,
    videoUrl: 'https://www.youtube.com/embed/kYj6oN_fKTM',
    cookTime: '20 menit',
    servings: '2 orang',
    chefName: 'Chef Masakan Padang',
    chefAvatar: 'https://picsum.photos/seed/chef6/100/100',
    imageUrl: 'https://picsum.photos/seed/egg6/400/300',
    eggsCount: 4
  }
];

export const getYouTubeLink = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('bawang putih') || t.includes('ceplok kecap')) return 'https://www.youtube.com/embed/jZf-8w9C0_A';
  if (t.includes('tebal') || t.includes('dadar padang')) return 'https://www.youtube.com/embed/S26M7M-0nF8';
  if (t.includes('orak-arik') && t.includes('sosis')) return 'https://www.youtube.com/embed/6iW4J2-iUvE';
  if (t.includes('kukus') || t.includes('soft steam')) return 'https://www.youtube.com/embed/oG06m69I_hQ';
  if (t.includes('asam manis')) return 'https://www.youtube.com/embed/X99M-07_1A4';
  if (t.includes('balado')) return 'https://www.youtube.com/embed/8oF_8O2pW0k';
  if (t.includes('tamagoyaki') || t.includes('jepang')) return 'https://www.youtube.com/embed/S_8qK2y466M';
  if (t.includes('sarden')) return 'https://www.youtube.com/embed/6iW4J2-iUvE';
  if (t.includes('mi telor') || t.includes('martabak')) return 'https://www.youtube.com/embed/oG06m69I_hQ';
  if (t.includes('rendang')) return 'https://www.youtube.com/embed/kYj6oN_fKTM';
  return 'https://www.youtube.com/embed/oG06m69I_hQ'; // Default fallback
};
