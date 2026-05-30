'use server';
/**
 * @fileOverview A Genkit flow for generating unique and detailed egg recipes.
 *
 * - generateEggRecipe - A function that handles the egg recipe generation process.
 * - GenerateEggRecipeInput - The input type for the generateEggRecipe function.
 * - GenerateEggRecipeOutput - The return type for the generateEggRecipe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEggRecipeInputSchema = z.object({
  eggsCount: z.number().int().min(1).max(10).describe('The number of telors available.'),
  mainIngredients: z.array(z.string()).describe('A list of common boarding house ingredients available.'),
  additionalIngredients: z
    .string()
    .optional()
    .describe('Any additional ingredients the user has manually entered.'),
  cookingTools: z.array(z.string()).describe('A list of cooking tools available.'),
});
export type GenerateEggRecipeInput = z.infer<typeof GenerateEggRecipeInputSchema>;

const GenerateEggRecipeOutputSchema = z.object({
  title: z.string().describe('A creative and professional title for the recipe.'),
  cookTime: z.string().describe('Estimated cooking time, e.g., "10 menit".'),
  ingredientsList: z.array(z.string()).describe('A plain list of ingredients with precise measurements.'),
  toolsUsed: z.array(z.string()).describe('A list of cooking tools required for this specific recipe.'),
  stepsMarkdown: z
    .string()
    .describe('Detailed, step-by-step cooking instructions in markdown format. Focus on clarity, technique, and precise timing. Avoid unnecessary jokes.'),
});
export type GenerateEggRecipeOutput = z.infer<typeof GenerateEggRecipeOutputSchema>;

export async function generateEggRecipe(input: GenerateEggRecipeInput): Promise<GenerateEggRecipeOutput> {
  return generateEggRecipeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEggRecipePrompt',
  input: {schema: GenerateEggRecipeInputSchema},
  output: {schema: GenerateEggRecipeOutputSchema},
  prompt: `You are a professional chef specializing in creative telor-based cuisine for limited kitchen environments.

Based on the following available ingredients and tools, create a high-quality, detailed recipe. The tone should be informative and professional.

--- INPUT ---
Telor yang dimiliki: {{{eggsCount}}} butir
Bahan Utama: {{#each mainIngredients}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{#if additionalIngredients}}Tambahan: {{{additionalIngredients}}}{{/if}}
Alat yang Dimiliki: {{#each cookingTools}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

--- INSTRUCTIONS ---
1. **Title**: Create a catchy yet professional title.
2. **Cook Time**: Accurate estimation of cooking time.
3. **Ingredients List**: Precise list with measurements (e.g., "2 butir telor", "1 sdm Kecap manis").
4. **Tools Used**: Identify which of the available tools are used in this recipe.
5. **Steps Markdown**: Provide detailed, structured instructions. Explain techniques clearly (e.g., "pecahkan telor ke wadah terpisah", "panaskan minyak dengan api sedang"). Do not use slang or "jokes nyeleneh". Focus on making the recipe easy to follow correctly.

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
