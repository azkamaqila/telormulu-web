'use server';
/**
 * @fileOverview A Genkit flow for generating unique and detailed telor recipes.
 *
 * - generateEggRecipe - A function that handles the telor recipe generation process.
 * - GenerateEggRecipeInput - The input type for the generateEggRecipe function.
 * - GenerateEggRecipeOutput - The return type for the generateEggRecipe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEggRecipeInputSchema = z.object({
  eggsCount: z.number().int().min(1).max(7).describe('The number of telors available.'),
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
    .describe('Detailed, step-by-step cooking instructions. Use simple numbered lists (1., 2., etc.). Each step MUST be on its own line with a double newline between steps. Do NOT use markdown symbols like # or * for headings or emphasis.'),
});
export type GenerateEggRecipeOutput = z.infer<typeof GenerateEggRecipeOutputSchema>;

export async function generateEggRecipe(input: GenerateEggRecipeInput): Promise<GenerateEggRecipeOutput> {
  return generateEggRecipeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEggRecipePrompt',
  input: {schema: GenerateEggRecipeInputSchema},
  output: {schema: GenerateEggRecipeOutputSchema},
  prompt: `You are a professional chef specializing in creative telor-based cuisine.

Based on the following available ingredients and tools, create a high-quality, detailed recipe. The tone should be informative and professional.

--- INPUT ---
Telor yang dimiliki: {{{eggsCount}}} butir
Bahan Utama: {{#each mainIngredients}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{#if additionalIngredients}}Tambahan: {{{additionalIngredients}}}{{/if}}
Alat yang Dimiliki: {{#each cookingTools}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

--- INSTRUCTIONS ---
1. **Title**: Create a professional title.
2. **Cook Time**: Accurate estimation.
3. **Ingredients List**: Precise list with measurements.
4. **Tools Used**: List tools needed.
5. **Steps**: Provide detailed instructions. Use simple numbering (1. 2. 3.). 
IMPORTANT: Each step MUST be on a NEW LINE. Press Enter twice between steps.
Do NOT use any # symbols for headings or * symbols for bold/italic. Just use plain text with numbering.

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
