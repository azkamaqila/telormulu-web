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
    stepsMarkdown: `1. Pecahkan telur ayam ke dalam mangkuk bersih.
2. Masukkan irisan bawang merah, garam, dan kecap manis.
3. Kocok telur hingga tercampur rata dan sedikit berbusa.
4. Panaskan teflon dengan api kecil dan beri sedikit minyak goreng.
5. Tuangkan sebagian adonan telur, ratakan, lalu gulung perlahan ke satu sisi.
6. Tuangkan sisa adonan, biarkan menyatu dengan gulungan pertama, lalu gulung kembali hingga matang sempurna.
7. Angkat dan potong-potong sesuai selera.`,
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
    stepsMarkdown: `1. Siapkan bumbu saus dengan mencampurkan kecap manis, sedikit air, bawang putih cincang, dan cabai rawit.
2. Panaskan minyak di wajan dengan api sedang cenderung besar.
3. Masukkan telur ayam untuk membuat telur mata sapi. Goreng hingga bagian tepi garing kecokelatan namun kuning telur masih agak cair.
4. Tuangkan campuran bumbu saus kecap di atas telur yang sedang digoreng.
5. Masak selama 30 detik hingga saus mendidih dan meresap ke dalam telur.
6. Sajikan segera di atas nasi putih hangat.`,
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
    stepsMarkdown: `1. Rebus telur ayam dalam panci berisi air hingga matang sempurna (sekitar 9-10 menit).
2. Kupas kulit telur dengan hati-hati agar permukaan telur tetap halus.
3. Siapkan panci, masukkan air, kecap manis, garam, lada, dan potongan kentang.
4. Masak hingga air mendidih dan kentang mulai empuk.
5. Masukkan telur rebus yang sudah dikupas ke dalam kuah semur.
6. Kecilkan api dan masak hingga kuah meresap dan warna telur berubah menjadi cokelat gelap.`,
    videoUrl: 'https://www.youtube.com/embed/kYj6oN_fKTM',
    cookTime: '30 menit',
    servings: '4 orang',
    chefName: 'Mahasiswa Abadi',
    chefAvatar: 'https://picsum.photos/seed/chef3/100/100',
    imageUrl: 'https://picsum.photos/seed/egg3/400/300',
    eggsCount: 4
  }
];

export const getYouTubeLink = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('dadar')) return 'https://www.youtube.com/embed/S_8qK2y466M';
  if (t.includes('kecap')) return 'https://www.youtube.com/embed/jZf-8w9C0_A';
  if (t.includes('semur')) return 'https://www.youtube.com/embed/kYj6oN_fKTM';
  if (t.includes('rice cooker')) return 'https://www.youtube.com/embed/oG06m69I_hQ';
  if (t.includes('setrika')) return 'https://www.youtube.com/embed/dQw4w9WgXcQ';
  return 'https://www.youtube.com/embed/oG06m69I_hQ'; // Default fallback
};
