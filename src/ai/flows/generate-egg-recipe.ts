'use server';
/**
 * @fileOverview A Genkit flow for generating unique, humorous, and culturally relevant egg recipes.
 *
 * - generateEggRecipe - A function that handles the egg recipe generation process.
 * - GenerateEggRecipeInput - The input type for the generateEggRecipe function.
 * - GenerateEggRecipeOutput - The return type for the generateEggRecipe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEggRecipeInputSchema = z.object({
  eggsCount: z.number().int().min(1).max(10).describe('The number of eggs available.'),
  mainIngredients: z.array(z.string()).describe('A list of common boarding house ingredients available.'),
  additionalIngredients: z
    .string()
    .optional()
    .describe('Any additional ingredients the user has manually entered.'),
  cookingTools: z.array(z.string()).describe('A list of cooking tools available, such as "Kompor & Teflon", "Rice Cooker", or "Setrikaan (Nekat)".'),
});
export type GenerateEggRecipeInput = z.infer<typeof GenerateEggRecipeInputSchema>;

const GenerateEggRecipeOutputSchema = z.object({
  title: z.string().describe('A creative, humorous, and Indonesian slang-filled title for the recipe.'),
  cookTime: z.string().describe('Estimated cooking time, e.g., "10 menit" or "15 mins".'),
  ingredientsList: z.array(z.string()).describe('A plain list of ingredients used with measurements, without any emojis (e.g., ["2 butir telur", "1 sdm kecap"]).'),
  ingredientsSummary: z.string().describe('A summary of ingredients used, presented with relevant emojis.'),
  stepsMarkdown: z
    .string()
    .describe('Step-by-step cooking instructions formatted in markdown, using engaging, funny Indonesian boarding-house slang.'),
});
export type GenerateEggRecipeOutput = z.infer<typeof GenerateEggRecipeOutputSchema>;

export async function generateEggRecipe(input: GenerateEggRecipeInput): Promise<GenerateEggRecipeOutput> {
  return generateEggRecipeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEggRecipePrompt',
  input: {schema: GenerateEggRecipeInputSchema},
  output: {schema: GenerateEggRecipeOutputSchema},
  prompt: `You are an expert chef specializing in budget-friendly, creative, and hilarious egg recipes for Indonesian college students living in boarding houses (anak kos).
Your persona is casual, witty, empathetic, and full of Indonesian slang and cultural references.

Based on the following available ingredients and cooking tools, create a unique and funny egg recipe. Focus on making it delicious yet simple, suitable for a tight budget and limited equipment.

--- INPUT ---
Telur yang dimiliki: {{{eggsCount}}} butir
Bahan Utama: {{#each mainIngredients}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{#if additionalIngredients}}Tambahan: {{{additionalIngredients}}}{{/if}}
Alat yang Dimiliki: {{#each cookingTools}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

--- INSTRUCTIONS ---
1.  **Title**: Create a recipe title that is catchy, humorous, and uses Indonesian slang relevant to the anak kos lifestyle.
2.  **Cook Time**: Estimate how long it takes to cook this recipe.
3.  **Ingredients List**: Provide a plain string array of the specific ingredients needed WITH measurements (e.g., ["2 butir telur", "1 sdm Kecap manis", "1 siung bawang merah"]). DO NOT include emojis here.
4.  **Ingredients Summary**: List the main ingredients used in the recipe, summarized with appropriate emojis. For example, "🥚🥚🧅🌶️ kecap manis".
5.  **Steps Markdown**: Provide step-by-step instructions in markdown format. Make these steps highly engaging, funny, and incorporate common Indonesian boarding-house slang.

Respond strictly in JSON format according to the output schema.`,
});

const generateEggRecipeFlow = ai.defineFlow(
  {
    name: 'generateEggRecipeFlow',
    inputSchema: GenerateEggRecipeInputSchema,
    outputSchema: GenerateEggRecipeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  },
);
