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
    id: 'dadar-gulung',
    title: 'Telur Dadar Gulung Akhir Bulan',
    ingredients: ['2 butir telur ayam', '3 siung bawang merah iris', '1/2 sdt garam', '1 sdm kecap manis', '2 sdm minyak goreng'],
    tools: ['Teflon', 'Spatula', 'Wadah pengocok'],
    ingredientsSummary: '🥚🥚🧅🧂 Kecap sisa semalam',
    stepsMarkdown: `1. Pecahkan 2 butir telur ayam ke dalam mangkuk bersih.
2. Masukkan 3 siung irisan bawang merah, 1/2 sdt garam, dan 1 sdm kecap manis.
3. Kocok telur secara merata hingga sedikit berbusa.
4. Panaskan teflon dengan api kecil dan tuang 2 sdm minyak goreng.
5. Tuangkan sebagian adonan telur, ratakan ke seluruh permukaan teflon.
6. Gulung perlahan ke satu sisi saat bagian bawah mulai set.
7. Tuangkan sisa adonan di sisi yang kosong, biarkan menyatu dengan gulungan pertama, lalu gulung kembali hingga habis.
8. Masak sebentar hingga matang sempurna, angkat, dan potong sesuai selera.`,
    videoUrl: 'https://www.youtube.com/embed/S_8qK2y466M',
    cookTime: '15 menit',
    servings: '2 orang',
    chefName: 'Chef Pasrah',
    chefAvatar: 'https://picsum.photos/seed/chef1/100/100',
    imageUrl: 'https://picsum.photos/seed/egg1/400/300',
    eggsCount: 2
  },
  {
    id: 'kecap-pontianak',
    title: 'Telur Kecap Pontianak Estetik',
    ingredients: ['2 butir telur ayam', '2 siung bawang putih cincang', '3 buah cabai rawit iris', '2 sdm kecap manis', '1 piring nasi hangat'],
    tools: ['Wajan/Teflon', 'Sutil', 'Piring saji'],
    ingredientsSummary: '🥚🥚🧄🌶️ Kecap Manis Legendaris',
    stepsMarkdown: `1. Buat saus dengan mencampur 2 sdm kecap manis, bawang putih cincang, dan cabai rawit dalam wadah kecil.
2. Panaskan minyak di wajan dengan api sedang cenderung besar agar pinggiran telur garing.
3. Masukkan 2 butir telur ayam secara hati-hati untuk membuat telur mata sapi.
4. Biarkan bagian tepi telur menjadi garing kecokelatan namun kuning telur tetap cair (setengah matang).
5. Tuangkan campuran bumbu saus kecap tepat di atas telur yang sedang digoreng.
6. Masak selama kurang lebih 30 detik hingga saus mendidih dan aroma bawang putih keluar.
7. Angkat dan sajikan langsung di atas nasi putih hangat.`,
    videoUrl: 'https://www.youtube.com/embed/jZf-8w9C0_A',
    cookTime: '10 menit',
    servings: '1 orang',
    chefName: 'Mami Kost',
    chefAvatar: 'https://picsum.photos/seed/chef2/100/100',
    imageUrl: 'https://picsum.photos/seed/egg2/400/300',
    eggsCount: 2
  },
  {
    id: 'semur-pasrah',
    title: 'Semur Telur Pasrah Nyaris Selesai',
    ingredients: ['4 butir telur rebus', '3 sdm kecap manis', '1 buah kentang potong dadu', '1/2 sdt garam & lada', '200ml air'],
    tools: ['Panci', 'Sendok sayur'],
    ingredientsSummary: '🥚🧂🥔 Air kran secukupnya',
    stepsMarkdown: `1. Rebus 4 butir telur dalam panci selama 10 menit hingga matang sempurna.
2. Rendam telur dalam air dingin agar kulitnya mudah dikupas. Kupas perlahan.
3. Panaskan panci, masukkan 200ml air, 3 sdm kecap manis, 1/2 sdt garam, dan lada secukupnya.
4. Masukkan potongan kentang dadu ke dalam kuah. Masak hingga air mendidih.
5. Setelah kentang mulai empuk, masukkan telur rebus yang sudah dikupas.
6. Kecilkan api dan masak (simmer) hingga kuah meresap dan warna telur berubah menjadi cokelat gelap serta kentang matang sempurna.`,
    videoUrl: 'https://www.youtube.com/embed/kYj6oN_fKTM',
    cookTime: '30 menit',
    servings: '4 orang',
    chefName: 'Mahasiswa Abadi',
    chefAvatar: 'https://picsum.photos/seed/chef3/100/100',
    imageUrl: 'https://picsum.photos/seed/egg3/400/300',
    eggsCount: 4
  },
  {
    id: 'telur-balado',
    title: 'Telur Balado Pedas Nampol',
    ingredients: ['4 butir telur rebus', '5 buah cabai merah keriting', '3 siung bawang merah', '1 buah tomat iris', '1/2 sdt garam'],
    tools: ['Cobek/Blender', 'Wajan', 'Spatula'],
    ingredientsSummary: '🥚🥚🥚🥚🌶️🌶️ Merah Merona',
    stepsMarkdown: `1. Goreng 4 butir telur rebus yang sudah dikupas hingga kulit luarnya sedikit berkulit kecokelatan. Angkat dan tiriskan.
2. Haluskan cabai merah keriting, bawang merah, dan garam menggunakan cobek atau blender.
3. Tumis bumbu halus dengan sedikit minyak hingga harum dan matang (warna berubah menjadi gelap).
4. Masukkan irisan tomat, aduk hingga tomat layu dan menyatu dengan bumbu.
5. Masukkan telur rebus yang sudah digoreng tadi ke dalam tumisan bumbu.
6. Aduk rata hingga seluruh permukaan telur terbalut bumbu balado. Masak selama 2 menit dengan api kecil.`,
    videoUrl: 'https://www.youtube.com/embed/8oF_8O2pW0k',
    cookTime: '20 menit',
    servings: '2 orang',
    chefName: 'Bang Jago',
    chefAvatar: 'https://picsum.photos/seed/chef4/100/100',
    imageUrl: 'https://picsum.photos/seed/egg4/400/300',
    eggsCount: 4
  },
  {
    id: 'orak-arik-sayur',
    title: 'Orak Arik Telur Sayur Sehat',
    ingredients: ['2 butir telur ayam', '1 buah wortel serut/potong korek', '5 batang buncis iris tipis', '2 siung bawang putih geprek', '1/2 sdt kaldu jamur'],
    tools: ['Wajan', 'Sutil'],
    ingredientsSummary: '🥚🥚🥕🥬 Menu sehat tanggal tua',
    stepsMarkdown: `1. Tumis bawang putih geprek hingga harum.
2. Masukkan wortel dan buncis yang sudah diiris. Tambahkan sedikit air agar sayuran cepat empuk.
3. Setelah sayuran setengah matang, sisihkan ke pinggir wajan.
4. Pecahkan 2 butir telur di bagian tengah wajan yang kosong. Biarkan sebentar hingga agak set.
5. Aduk telur secara acak (orak-arik) hingga berbutir-butir.
6. Campurkan telur dengan sayuran, tambahkan kaldu jamur dan garam. Aduk rata hingga kering dan matang.`,
    videoUrl: 'https://www.youtube.com/embed/6iW4J2-iUvE',
    cookTime: '12 menit',
    servings: '2 orang',
    chefName: 'Bu Kost Sayang',
    chefAvatar: 'https://picsum.photos/seed/chef5/100/100',
    imageUrl: 'https://picsum.photos/seed/egg5/400/300',
    eggsCount: 2
  },
  {
    id: 'dadar-padang-kw',
    title: 'Telur Dadar Padang Tebal Mantap',
    ingredients: ['3 butir telur ayam', '2 sdm tepung beras', '3 batang daun bawang iris', '1 sdt bubuk kari/cabai', '1/2 sdt garam'],
    tools: ['Mangkuk besar', 'Teflon anti lengket', 'Spatula'],
    ingredientsSummary: '🥚🥚🥚🌿 Tebal & Gurih Banget',
    stepsMarkdown: `1. Kocok 3 butir telur dalam mangkuk besar. 
2. Masukkan irisan daun bawang yang banyak, bubuk kari, dan garam.
3. Larutkan 2 sdm tepung beras dengan 1 sdm air, lalu masukkan ke adonan telur. Tepung beras ini kuncinya agar dadar tebal dan kokoh.
4. Panaskan minyak yang agak banyak di teflon dengan api sedang-kecil.
5. Tuang adonan telur. Masak dengan api kecil agar bagian dalamnya matang sempurna tanpa gosong di luar.
6. Balik telur dengan hati-hati saat bagian bawah sudah sangat kokoh. Masak hingga kedua sisi garing kecokelatan.`,
    videoUrl: 'https://www.youtube.com/embed/S26M7M-0nF8',
    cookTime: '15 menit',
    servings: '3 orang',
    chefName: 'Uni Rancak',
    chefAvatar: 'https://picsum.photos/seed/chef6/100/100',
    imageUrl: 'https://picsum.photos/seed/egg6/400/300',
    eggsCount: 3
  },
  {
    id: 'fuyunghai-ekonomis',
    title: 'Fuyunghai Telur Krispi Saus Asam Manis',
    ingredients: ['2 butir telur ayam', '1 lembar kol iris halus', '1 sdm tepung terigu', '3 sdm saus tomat (untuk saus)', '1 sdt gula pasir'],
    tools: ['Wajan', 'Mangkuk', 'Panci kecil'],
    ingredientsSummary: '🥚🥚🥬🍅 Ala Resto versi Low Budget',
    stepsMarkdown: `1. Campurkan telur, kol iris, tepung terigu, dan garam. Kocok hingga rata.
2. Goreng adonan dalam minyak panas hingga menjadi dadar yang krispi di pinggirnya. Sisihkan.
3. Buat saus: Campur saus tomat, gula pasir, dan sedikit air dalam panci kecil. Masak hingga mendidih dan mengental.
4. Siramkan saus asam manis di atas telur dadar yang sudah digoreng tadi.
5. Sajikan selagi hangat agar tekstur krispinya masih terasa.`,
    videoUrl: 'https://www.youtube.com/embed/X99M-07_1A4',
    cookTime: '15 menit',
    servings: '1 orang',
    chefName: 'Chef Chinese Food Palsu',
    chefAvatar: 'https://picsum.photos/seed/chef7/100/100',
    imageUrl: 'https://picsum.photos/seed/egg7/400/300',
    eggsCount: 2
  },
  {
    id: 'mayak-eggs',
    title: 'Mayak Eggs (Telur Rendam Kecap)',
    ingredients: ['4 butir telur setengah matang', '5 sdm kecap asin', '2 sdm air', '1 batang daun bawang iris', '1 sdt wijen (opsional)'],
    tools: ['Panci rebusan', 'Toples/Wadah kedap air'],
    ingredientsSummary: '🥚🥚🥚🥚🍶 Korea vibes di kosan',
    stepsMarkdown: `1. Rebus 4 butir telur selama tepat 6-7 menit agar bagian kuningnya masih lumer. Langsung masukkan ke air es setelah matang.
2. Kupas telur dengan sangat hati-hati.
3. Buat bumbu rendaman: Campur kecap asin, air, daun bawang iris, dan wijen dalam toples.
4. Masukkan telur rebus ke dalam rendaman bumbu hingga tenggelam.
5. Simpan di kulkas minimal 6 jam atau semalaman agar bumbu meresap sempurna ke dalam telur.
6. Nikmati dengan nasi putih hangat.`,
    videoUrl: 'https://www.youtube.com/embed/jZf-8w9C0_A',
    cookTime: '10 menit (plus rendam)',
    servings: '4 orang',
    chefName: 'Oppa Kosan',
    chefAvatar: 'https://picsum.photos/seed/chef8/100/100',
    imageUrl: 'https://picsum.photos/seed/egg8/400/300',
    eggsCount: 4
  },
  {
    id: 'gulai-telur',
    title: 'Gulai Telur Tanpa Santan',
    ingredients: ['4 butir telur rebus', '2 sdm susu bubuk/krimer', '1 sdt kunyit bubuk', '2 siung bawang merah halus', '250ml air'],
    tools: ['Panci', 'Spatula'],
    ingredientsSummary: '🥚🥚🥚🥚🥣 Gurih tapi gak bikin kolesterol',
    stepsMarkdown: `1. Tumis bawang merah dan kunyit bubuk hingga harum.
2. Masukkan air dan aduk hingga mendidih.
3. Masukkan susu bubuk atau krimer sebagai pengganti santan. Aduk terus agar tidak pecah.
4. Tambahkan garam dan kaldu bubuk sesuai selera.
5. Masukkan 4 butir telur rebus yang sudah dikupas.
6. Masak dengan api kecil hingga kuah sedikit menyusut dan meresap ke dalam telur.`,
    videoUrl: 'https://www.youtube.com/embed/kYj6oN_fKTM',
    cookTime: '20 menit',
    servings: '2 orang',
    chefName: 'Anak Rantau Sehat',
    chefAvatar: 'https://picsum.photos/seed/chef9/100/100',
    imageUrl: 'https://picsum.photos/seed/egg9/400/300',
    eggsCount: 4
  },
  {
    id: 'pizza-mie-telur',
    title: 'Martabak Mie Telur (Pizza Mie)',
    ingredients: ['2 butir telur ayam', '1 bungkus mie instan goreng', '2 buah sosis iris tipis', '1 batang daun bawang iris'],
    tools: ['Panci (rebus mie)', 'Teflon anti lengket', 'Spatula'],
    ingredientsSummary: '🥚🥚🍜🌭 Comfort food legendaris',
    stepsMarkdown: `1. Rebus mie instan hingga matang, tiriskan, dan campur dengan bumbu mienya.
2. Kocok 2 butir telur dalam mangkuk, masukkan mie yang sudah berbumbu, sosis, dan daun bawang. Aduk rata.
3. Panaskan sedikit minyak di teflon. Tuang seluruh campuran mie dan telur.
4. Ratakan hingga membentuk lingkaran seperti pizza.
5. Masak dengan api sedang-kecil. Balik saat bagian bawah sudah kering dan kecokelatan.
6. Masak sisi satunya hingga matang merata. Potong-potong seperti pizza saat disajikan.`,
    videoUrl: 'https://www.youtube.com/embed/oG06m69I_hQ',
    cookTime: '10 menit',
    servings: '1 orang',
    chefName: 'Master Mie',
    chefAvatar: 'https://picsum.photos/seed/chef10/100/100',
    imageUrl: 'https://picsum.photos/seed/egg10/400/300',
    eggsCount: 2
  }
];

export const getYouTubeLink = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('dadar gulung')) return 'https://www.youtube.com/embed/S_8qK2y466M';
  if (t.includes('pontianak') || t.includes('kecap')) return 'https://www.youtube.com/embed/jZf-8w9C0_A';
  if (t.includes('semur') || t.includes('gulai')) return 'https://www.youtube.com/embed/kYj6oN_fKTM';
  if (t.includes('balado')) return 'https://www.youtube.com/embed/8oF_8O2pW0k';
  if (t.includes('orak arik')) return 'https://www.youtube.com/embed/6iW4J2-iUvE';
  if (t.includes('padang')) return 'https://www.youtube.com/embed/S26M7M-0nF8';
  if (t.includes('fuyunghai')) return 'https://www.youtube.com/embed/X99M-07_1A4';
  if (t.includes('mayak')) return 'https://www.youtube.com/embed/jZf-8w9C0_A';
  if (t.includes('pizza') || t.includes('martabak mie')) return 'https://www.youtube.com/embed/oG06m69I_hQ';
  if (t.includes('rice cooker')) return 'https://www.youtube.com/embed/oG06m69I_hQ';
  if (t.includes('setrika')) return 'https://www.youtube.com/embed/dQw4w9WgXcQ';
  return 'https://www.youtube.com/embed/oG06m69I_hQ'; // Default fallback
};
