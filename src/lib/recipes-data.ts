export interface StaticRecipe {
  id: string;
  title: string;
  ingredientsSummary: string;
  stepsMarkdown: string;
  videoUrl: string;
}

export const COMMUNITY_RECIPES: StaticRecipe[] = [
  {
    id: 'dadar-gulung',
    title: 'Telur Dadar Gulung Akhir Bulan',
    ingredientsSummary: '🥚🥚🧅🧂 Kecap sisa semalam',
    stepsMarkdown: `1. Pecahin telur dengan penuh doa dan harapan.
2. Kocok lepas, jangan sekencang beban hidup.
3. Tuang tipis-tipis di teflon, gulung perlahan kayak lagi nutupin aib.
4. Ulangi sampe telurnya abis. Potong-potong biar keliatan banyak.`,
    videoUrl: 'https://www.youtube.com/embed/S_8qK2y466M'
  },
  {
    id: 'kecap-pontianak',
    title: 'Telur Kecap Pontianak Estetik',
    ingredientsSummary: '🥚🥚🧄🌶️ Kecap Manis Legendaris',
    stepsMarkdown: `1. Goreng telur mata sapi, usahakan pinggirannya garing (crispy) tapi tengahnya masih malu-malu (setengah matang).
2. Tumis bawang putih dan cabai iris pake sisa minyak tadi.
3. Guyur pake kecap manis yang banyak biar hidup terasa lebih manis.
4. Tuang bumbu kecap ke atas telur. Sajikan bareng nasi anget.`,
    videoUrl: 'https://www.youtube.com/embed/jZf-8w9C0_A'
  },
  {
    id: 'semur-pasrah',
    title: 'Semur Telur Pasrah Nyaris Selesai',
    ingredientsSummary: '🥚🧂🥔 Air kran secukupnya',
    stepsMarkdown: `1. Rebus telur sampe keras sekeras hati mantan.
2. Kupas kulitnya (hati-hati jangan sampe telurnya ikut kebuang).
3. Masak air, kecap, garam, dan lada. Masukin telur rebus tadi.
4. Tunggu sampe airnya surut dan warnanya jadi cokelat estetik nan pasrah.`,
    videoUrl: 'https://www.youtube.com/embed/kYj6oN_fKTM'
  }
];

export const getYouTubeLink = (title: string) => {
  if (title.toLowerCase().includes('dadar')) return 'https://www.youtube.com/embed/S_8qK2y466M';
  if (title.toLowerCase().includes('kecap')) return 'https://www.youtube.com/embed/jZf-8w9C0_A';
  if (title.toLowerCase().includes('semur')) return 'https://www.youtube.com/embed/kYj6oN_fKTM';
  if (title.toLowerCase().includes('rice cooker')) return 'https://www.youtube.com/embed/oG06m69I_hQ';
  if (title.toLowerCase().includes('setrika')) return 'https://www.youtube.com/embed/dQw4w9WgXcQ';
  return 'https://www.youtube.com/embed/oG06m69I_hQ'; // Default fallback
};
