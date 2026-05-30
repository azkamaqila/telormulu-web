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
    title: 'Telor Ceplok Kecap Pontianak',
    ingredients: ['2 butir telor ayam', '2 siung bawang putih cincang', '3 buah cabai rawit iris', '2 sdm kecap manis', '1 sdm minyak goreng'],
    tools: ['Teflon', 'Spatula', 'Wadah kecil'],
    ingredientsSummary: '🥚🥚🧄🌶️ Legend & Simpel',
    stepsMarkdown: `1. Siapkan bumbu siram: Campurkan kecap manis, bawang putih cincang, and cabai rawit dalam wadah kecil.
2. Panaskan minyak di teflon dengan api sedang cenderung besar agar pinggiran telor garing.
3. Ceplok 2 butir telor. Biarkan bagian tepi telor menjadi garing kecokelatan namun kuning telor tetap setengah matang.
4. Tuangkan campuran bumbu kecap tepat di atas telor yang sedang digoreng.
5. Masak selama 30 detik hingga bumbu mendidih and meresap. Angkat segera.`,
    videoUrl: 'https://www.youtube.com/embed/jZf-8w9C0_A',
    cookTime: '5 menit',
    servings: '1 orang',
    chefName: 'Mami Kost',
    chefAvatar: 'https://picsum.photos/seed/chef2/100/100',
    imageUrl: 'https://picsum.photos/seed/egg2/400/300',
    eggsCount: 2
  },
  {
    id: 'dadar-gobal-gabul',
    title: 'Telor Dadar Gobal-Gabul',
    ingredients: ['3 butir telor ayam', '3 batang daun bawang iris', '5 siung bawang merah iris', '4 buah cabai rawit iris', '1/2 sdt garam & kaldu'],
    tools: ['Mangkuk pengocok', 'Teflon', 'Spatula'],
    ingredientsSummary: '🥚🥚🥚🌿 Cabai Melimpah',
    stepsMarkdown: `1. Pecahkan 3 butir telor ke dalam mangkuk.
2. Masukkan irisan daun bawang, bawang merah, and cabai rawit yang banyak. Tambahkan garam and kaldu.
3. Kocok telor dengan kuat sampai berbusa agar hasilnya mengembang and teksturnya "gobal-gabul".
4. Panaskan minyak yang agak banyak di teflon dengan api sedang.
5. Tuang adonan telor, ratakan. Kecilkan api sedikit agar bagian dalam matang tanpa gosong di luar.
6. Balik telor saat bagian bawah sudah kokoh, masak hingga kedua sisi garing.`,
    videoUrl: 'https://www.youtube.com/embed/S26M7M-0nF8',
    cookTime: '10 menit',
    servings: '2 orang',
    chefName: 'Chef Pasrah',
    chefAvatar: 'https://picsum.photos/seed/chef1/100/100',
    imageUrl: 'https://picsum.photos/seed/egg1/400/300',
    eggsCount: 3
  },
  {
    id: 'orak-arik-semalam',
    title: 'Orak-Arik Telor Sisa Semalam',
    ingredients: ['2 butir telor ayam', '1 piring nasi sisa semalam (opsional)', '2 buah sosis iris', '1 sdm kecap manis', '1/2 sdt garam'],
    tools: ['Wajan', 'Sutil'],
    ingredientsSummary: '🥚🥚🌭 Pemanfaatan Logistik',
    stepsMarkdown: `1. Panaskan sedikit minyak di wajan. Tumis irisan sosis hingga sedikit berubah warna.
2. Pecahkan 2 butir telor langsung ke wajan. Biarkan 5 detik lalu orak-arik hingga hancur kasar.
3. Masukkan nasi sisa semalam jika ada, atau cukup sosis and telor saja.
4. Tambahkan kecap manis and garam. Aduk cepat dengan api besar agar aroma "smoky" keluar.
5. Masak hingga telor benar-benar kering and bumbu merata.`,
    videoUrl: 'https://www.youtube.com/embed/6iW4J2-iUvE',
    cookTime: '8 menit',
    servings: '1 orang',
    chefName: 'Mahasiswa Abadi',
    chefAvatar: 'https://picsum.photos/seed/chef3/100/100',
    imageUrl: 'https://picsum.photos/seed/egg3/400/300',
    eggsCount: 2
  },
  {
    id: 'kukus-rice-cooker',
    title: 'Telor Kukus Rice Cooker',
    ingredients: ['2 butir telor ayam', '150ml air hangat', '1 batang daun bawang iris', '1 sdt kecap asin', '1/4 sdt merica'],
    tools: ['Mangkuk tahan panas', 'Rice Cooker'],
    ingredientsSummary: '🥚🥚🍶 Lembut Tanpa Minyak',
    stepsMarkdown: `1. Kocok lepas 2 butir telor dalam mangkuk tahan panas.
2. Campurkan air hangat, kecap asin, and merica. Aduk perlahan agar tidak terlalu banyak buih.
3. Masukkan irisan daun bawang.
4. Masukkan mangkuk ke dalam rice cooker saat nasi sedang dimasak (setengah matang) atau gunakan fungsi "Steam".
5. Kukus selama 10-15 menit hingga tekstur telor set seperti puding.`,
    videoUrl: 'https://www.youtube.com/embed/oG06m69I_hQ',
    cookTime: '15 menit',
    servings: '1 orang',
    chefName: 'Anak Rantau Sehat',
    chefAvatar: 'https://picsum.photos/seed/chef9/100/100',
    imageUrl: 'https://picsum.photos/seed/egg9/400/300',
    eggsCount: 2
  },
  {
    id: 'dadar-asam-manis',
    title: 'Telor Dadar Kuah Asam Manis',
    ingredients: ['2 butir telor ayam', '3 sdm saus tomat', '1 sdm saus sambal', '1/2 buah bawang bombay iris', '100ml air'],
    tools: ['Teflon', 'Panci kecil (untuk saus)', 'Sutil'],
    ingredientsSummary: '🥚🥚🍅 Sauce Magic',
    stepsMarkdown: `1. Goreng 2 butir telor menjadi dadar krispi standar. Sisihkan and potong menjadi 4 bagian.
2. Buat saus: Tumis bawang bombay hingga layu.
3. Masukkan saus tomat, saus sambal, and air. Aduk hingga mendidih and mengental.
4. Koreksi rasa dengan sedikit gula and garam.
5. Siramkan saus asam manis di atas potongan telor dadar sebelum disajikan.`,
    videoUrl: 'https://www.youtube.com/embed/X99M-07_1A4',
    cookTime: '12 menit',
    servings: '1 orang',
    chefName: 'Chef Chinese Food Palsu',
    chefAvatar: 'https://picsum.photos/seed/chef7/100/100',
    imageUrl: 'https://picsum.photos/seed/egg7/400/300',
    eggsCount: 2
  },
  {
    id: 'ceplok-balado-iris',
    title: 'Telor Ceplok Balado Iris',
    ingredients: ['2 butir telor ayam', '5 buah cabai merah iris serong', '3 siung bawang merah iris', '1 buah tomat potong dadu', '1/2 sdt garam'],
    tools: ['Wajan', 'Sutil'],
    ingredientsSummary: '🥚🥚🌶️ Pedas Praktis',
    stepsMarkdown: `1. Ceplok 2 butir telor hingga matang atau setengah matang sesuai selera. Sisihkan.
2. Tumis bawang merah and cabai iris hingga layu and harum.
3. Masukkan potongan tomat, masak hingga tomat hancur and mengeluarkan sari air.
4. Tambahkan garam and sedikit air jika terlalu kering.
5. Masukkan kembali telor ceplok, aduk perlahan agar bumbu iris menempel.`,
    videoUrl: 'https://www.youtube.com/embed/8oF_8O2pW0k',
    cookTime: '10 menit',
    servings: '1 orang',
    chefName: 'Bang Jago',
    chefAvatar: 'https://picsum.photos/seed/chef4/100/100',
    imageUrl: 'https://picsum.photos/seed/egg4/400/300',
    eggsCount: 2
  },
  {
    id: 'tamagoyaki-kw',
    title: 'Tamagoyaki KW (Telor Gulung Teflon)',
    ingredients: ['2 butir telor ayam', '2 sdm susu cair (opsional)', '1/2 sdt kaldu jamur', 'Sedikit minyak goreng'],
    tools: ['Teflon anti lengket', 'Spatula/Sumpit', 'Mangkuk'],
    ingredientsSummary: '🥚🥚🥛 Ala Jepang Versi Kosan',
    stepsMarkdown: `1. Kocok telor bersama susu cair and kaldu jamur hingga benar-benar rata.
2. Panaskan teflon dengan api sangat kecil, olesi minyak tipis-tipis menggunakan tisu.
3. Tuangkan sebagian adonan telor hingga menutupi permukaan teflon.
4. Saat bagian bawah mulai set tapi atas masih agak basah, gulung telor perlahan ke satu sisi.
5. Geser gulungan ke pinggir, tuang lagi adonan telor di sisi kosong. Ulangi proses hingga adonan habis.
6. Tekan-tekan lembut agar bentuknya kotak rapi, angkat and potong-potong.`,
    videoUrl: 'https://www.youtube.com/embed/S_8qK2y466M',
    cookTime: '15 menit',
    servings: '1 orang',
    chefName: 'Oppa Kosan',
    chefAvatar: 'https://picsum.photos/seed/chef8/100/100',
    imageUrl: 'https://picsum.photos/seed/egg8/400/300',
    eggsCount: 2
  },
  {
    id: 'sarden-telur',
    title: 'Sarden Telor Orak-Arik',
    ingredients: ['2 butir telor ayam', '1 kaleng kecil sarden', '2 siung bawang putih iris', '3 buah cabai rawit iris'],
    tools: ['Wajan', 'Sutil'],
    ingredientsSummary: '🥚🥚🥫 Protein Double',
    stepsMarkdown: `1. Tumis bawang putih and cabai rawit hingga harum.
2. Pecahkan 2 butir telor, orak-arik kasar hingga setengah matang.
3. Masukkan satu kaleng sarden. Hancurkan ikan sarden jika ingin tekstur yang lebih menyatu dengan telor.
4. Masak hingga kuah sarden mendidih and meresap ke dalam telor.
5. Tidak perlu ditambah garam karena sarden biasanya sudah cukup asin.`,
    videoUrl: 'https://www.youtube.com/embed/6iW4J2-iUvE',
    cookTime: '10 menit',
    servings: '2 orang',
    chefName: 'Bu Kost Sayang',
    chefAvatar: 'https://picsum.photos/seed/chef5/100/100',
    imageUrl: 'https://picsum.photos/seed/egg5/400/300',
    eggsCount: 2
  },
  {
    id: 'omelet-interjunet',
    title: 'Omelet Mi Interjunet',
    ingredients: ['2 butir telor ayam', '1 bungkus mi instan goreng', '1 batang daun bawang iris', 'Sedikit kornet (opsional)'],
    tools: ['Panci (rebus mi)', 'Teflon', 'Spatula'],
    ingredientsSummary: '🥚🥚 Ramen Kenyang Maksimal',
    stepsMarkdown: `1. Rebus mi instan hingga matang, tiriskan. Campur dengan bumbu bawaan mi.
2. Kocok 2 butir telor, masukkan mi yang sudah berbumbu and daun bawang.
3. Tambahkan kornet jika ada untuk rasa yang lebih mewah.
4. Panaskan sedikit minyak, tuang adonan mi telor ke teflon.
5. Masak dengan api kecil agar matang merata. Balik saat satu sisi sudah garing kecokelatan.`,
    videoUrl: 'https://www.youtube.com/embed/oG06m69I_hQ',
    cookTime: '10 menit',
    servings: '1 orang',
    chefName: 'Master Mie',
    chefAvatar: 'https://picsum.photos/seed/chef10/100/100',
    imageUrl: 'https://picsum.photos/seed/egg10/400/300',
    eggsCount: 2
  },
  {
    id: 'rendang-instan',
    title: 'Telor Bumbu Rendang Instan',
    ingredients: ['4 butir telor rebus', '1 sachet bumbu rendang instan', '100ml air', '1 sdm minyak goreng'],
    tools: ['Panci kecil/Wajan', 'Sendok sayur'],
    ingredientsSummary: '🥚🥚🥚🥚🥥 Rasa Resto Padang',
    stepsMarkdown: `1. Goreng telor rebus yang sudah dikupas hingga kulitnya sedikit keriting kecokelatan. Sisihkan.
2. Tumis bumbu rendang instan dengan sedikit minyak hingga aromanya keluar.
3. Masukkan air, aduk rata hingga mendidih.
4. Masukkan telor rebus goreng. Kecilkan api.
5. Masak (simmer) hingga kuah rendang menyusut and bumbu meresap sempurna ke dalam telor.`,
    videoUrl: 'https://www.youtube.com/embed/kYj6oN_fKTM',
    cookTime: '20 menit',
    servings: '2 orang',
    chefName: 'Uni Rancak',
    chefAvatar: 'https://picsum.photos/seed/chef6/100/100',
    imageUrl: 'https://picsum.photos/seed/egg6/400/300',
    eggsCount: 4
  }
];

export const getYouTubeLink = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('pontianak') || t.includes('ceplok kecap')) return 'https://www.youtube.com/embed/jZf-8w9C0_A';
  if (t.includes('gobal-gabul') || t.includes('dadar padang')) return 'https://www.youtube.com/embed/S26M7M-0nF8';
  if (t.includes('orak-arik') && t.includes('semalam')) return 'https://www.youtube.com/embed/6iW4J2-iUvE';
  if (t.includes('kukus') || t.includes('rice cooker')) return 'https://www.youtube.com/embed/oG06m69I_hQ';
  if (t.includes('asam manis')) return 'https://www.youtube.com/embed/X99M-07_1A4';
  if (t.includes('balado')) return 'https://www.youtube.com/embed/8oF_8O2pW0k';
  if (t.includes('tamagoyaki') || t.includes('gulung teflon')) return 'https://www.youtube.com/embed/S_8qK2y466M';
  if (t.includes('sarden')) return 'https://www.youtube.com/embed/6iW4J2-iUvE';
  if (t.includes('interjunet') || t.includes('mie')) return 'https://www.youtube.com/embed/oG06m69I_hQ';
  if (t.includes('rendang')) return 'https://www.youtube.com/embed/kYj6oN_fKTM';
  return 'https://www.youtube.com/embed/oG06m69I_hQ'; // Default fallback
};
