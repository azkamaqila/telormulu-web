"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, Minus, ChefHat, ArrowLeft, Youtube, Sparkles, Loader2, Clock, Wrench, Utensils, ShoppingBasket, Search, Heart } from "lucide-react";
import { COMMUNITY_RECIPES, type StaticRecipe, getYouTubeLink } from "@/lib/recipes-data";
import { AntiSultanAlert } from "@/components/AntiSultanAlert";
import { generateEggRecipe, type GenerateEggRecipeOutput } from "@/ai/flows/generate-egg-recipe";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

type PageState = "home" | "masak_sendiri" | "detail_menu";

export default function TelorMuluApp() {
  const [page, setPage] = useState<PageState>("home");
  const [selectedRecipe, setSelectedRecipe] = useState<StaticRecipe | GenerateEggRecipeOutput | null>(null);
  const { toast } = useToast();
  
  // Form States
  const [eggsCount, setEggsCount] = useState(1);
  const [mainIngredients, setMainIngredients] = useState<string[]>([]);
  const [showAdditional, setShowAdditional] = useState(false);
  const [additionalIngredients, setAdditionalIngredients] = useState("");
  const [cookingTool, setCookingTool] = useState("Teflon");
  const [isSultan, setIsSultan] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleMainIngredient = (id: string) => {
    setMainIngredients(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleManualCook = async () => {
    const sultanWords = ["wagyu", "caviar", "truffle", "lobster", "foie gras"];
    const inputLower = additionalIngredients.toLowerCase();
    
    if (sultanWords.some(word => inputLower.includes(word))) {
      setIsSultan(true);
      return;
    }
    
    setIsSultan(false);
    setIsLoading(true);
    
    try {
      const result = await generateEggRecipe({
        eggsCount,
        mainIngredients,
        additionalIngredients,
        cookingTools: [cookingTool]
      });
      setSelectedRecipe(result);
      setPage("detail_menu");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Waduh, Chef AI lagi mogok!",
        description: "Kayaknya internetnya lagi bapuk atau servernya lagi puyeng. Coba lagi ya!",
      });
      console.error("AI Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderHome = () => (
    <div className="max-w-4xl mx-auto p-6 space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div 
          className="cursor-pointer transition-all hover:scale-105 flex items-center gap-2 group" 
          onClick={() => setPage("home")}
        >
          <span className="text-6xl md:text-7xl group-hover:rotate-12 transition-transform duration-300">🍳</span>
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tighter leading-[0.8] uppercase flex flex-col">
              <span>TELOR</span>
              <span>MULU!</span>
            </h1>
          </div>
        </div>
        <Button 
          onClick={() => setPage("masak_sendiri")}
          className="bg-white hover:bg-secondary/10 text-primary font-bold py-5 px-8 text-lg rounded-full shadow-xl border-2 border-primary transition-all hover:scale-105 active:scale-95"
        >
          👨‍🍳&nbsp;&nbsp;Masak Sendiri
        </Button>
      </header>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-primary">🥚 TOP 10 Masakan Telor Trending di Indonesia 🇮🇩</h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {COMMUNITY_RECIPES.map((recipe) => (
            <Card 
              key={recipe.id} 
              className="cursor-pointer border-none shadow-md hover:shadow-lg transition-all bg-[#f9f8f4] overflow-hidden flex flex-col sm:flex-row h-auto sm:h-48 group"
              onClick={() => {
                setSelectedRecipe(recipe);
                setPage("detail_menu");
              }}
            >
              <div className="relative w-full sm:w-48 h-48 sm:h-full flex-shrink-0">
                <Image 
                  src={recipe.imageUrl} 
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-black leading-tight">{recipe.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {recipe.ingredients.join(' • ')}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {recipe.cookTime}
                  </span>
                </div>
              </CardContent>
              <div className="bg-primary w-24 sm:w-32 flex flex-col items-center justify-center gap-1 p-2 flex-shrink-0">
                <div className="grid grid-cols-2 gap-1 items-center justify-center">
                  {Array.from({ length: recipe.eggsCount }).map((_, i) => (
                    <span key={i} className="text-xl sm:text-2xl drop-shadow-sm">🥚</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Romanticizing Telor Section */}
      <section className="py-12 border-t-2 border-primary/10 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-black text-primary tracking-tight flex items-center justify-center gap-3">
            <Heart className="w-8 h-8 fill-primary" /> Kenapa Telor?
          </h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8 text-lg text-center leading-relaxed text-black/80 font-medium italic">
          <p className="bg-secondary/5 p-6 rounded-3xl border border-dashed border-primary/20">
            "Bagi pejuang rantau, telor bukan sekadar sumber protein. Ia adalah sahabat setia di tanggal tua, 
            pahlawan tanpa tanda jasa yang selalu ada saat dompet mulai membisu dan perut mulai berontak. 
            Dalam satu butir telor, tersimpan harapan akan rasa kenyang yang jujur, hangat, dan menenangkan."
          </p>
          
          <p>
            Lihatlah bagaimana ia begitu tulus. Bisa jadi ceplok yang garing di pinggir, dadar yang 
            lembut merayu, atau orak-arik yang berantakan namun penuh cinta. Telor tak pernah menghakimi 
            seberapa mahir tanganmu mengayun spatula; ia selalu memberikan yang terbaik bagi mereka yang lapar.
          </p>
          
          <p className="text-primary font-bold">
            Ia adalah saksi bisu perjuanganmu mengejar gelar, menemani malam-malam panjang mengerjakan tugas, 
            dan menjadi perayaan kecil atas keberhasilanmu bertahan hidup. 
            Telor adalah kemewahan yang sederhana. Karena pada akhirnya, semua akan telor pada waktunya.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center pt-4 gap-6">
          <span className="text-4xl">🥚✨🍳</span>
          <div className="text-muted-foreground/70 text-base font-bold tracking-[0.2em] lowercase">
            @jayuk.id
          </div>
        </div>
      </section>
    </div>
  );

  const renderMasakSendiri = () => (
    <div className="max-w-2xl mx-auto p-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Button 
        variant="outline"
        onClick={() => setPage("home")}
        className="flex items-center gap-2 text-primary font-bold rounded-full border-primary px-6 hover:bg-secondary/10"
      >
        <ArrowLeft className="w-4 h-4" /> Balik ke Menu Utama
      </Button>

      <div className="text-center py-4 border-y-2 border-primary/10">
        <h2 className="text-3xl font-black text-primary tracking-tight">BUKU MENU PERTELORAN 🥚</h2>
        <div className="h-1.5 w-32 bg-secondary mx-auto mt-1 rounded-full" />
      </div>

      <Card className="border-2 border-primary shadow-2xl bg-white overflow-hidden">
        <div className="bg-primary text-white p-6">
          <h2 className="text-2xl flex items-center gap-2 font-bold">
            <ChefHat className="w-8 h-8" /> Cari masakan telor yang pas buat loe!
          </h2>
          <p className="text-white/80 italic text-sm">Pas-in dulu sama apa aja yang loe punya.</p>
        </div>
        <CardContent className="p-8 space-y-8">
          {isSultan && <AntiSultanAlert />}

          {/* Section 1: Eggs Count */}
          <div className="space-y-4">
            <Label className="text-2xl font-bold block text-center">Stok Telor yang Loe Punya!</Label>
            <div className="flex items-center gap-6 bg-secondary/10 p-4 rounded-2xl border-2 border-dashed border-primary">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={(e) => { e.stopPropagation(); setEggsCount(Math.max(1, eggsCount - 1)); }}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Minus className="w-5 h-5" />
              </Button>
              <div className="text-center min-w-[100px] flex-1">
                <span className="text-4xl font-bold">
                  {eggsCount === 6 ? "6 !" : eggsCount === 7 ? "7 !?" : eggsCount}
                </span>
                <span className="block text-xs font-bold uppercase tracking-widest mt-1">BUTIR</span>
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={(e) => { e.stopPropagation(); setEggsCount(Math.min(7, eggsCount + 1)); }}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Plus className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Section 2: Main Ingredients */}
          <div className="space-y-4">
            <Label className="text-lg font-bold">Ada Bahan Tambahan?</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Kecap", emoji: "🍾" },
                { name: "Minyak Goreng", emoji: "🍶" },
                { name: "Garam", emoji: "🧂" },
                { name: "Cabai", emoji: "🌶️" },
                { name: "Mentega", emoji: "🧈" }
              ].map((item) => (
                <div key={item.name} className="flex items-center space-x-2 bg-white border border-primary/20 p-3 rounded-lg hover:bg-secondary/5 transition-colors cursor-pointer" onClick={() => toggleMainIngredient(item.name)}>
                  <Checkbox 
                    id={item.name} 
                    checked={mainIngredients.includes(item.name)} 
                    onCheckedChange={() => toggleMainIngredient(item.name)}
                    className="border-primary data-[state=checked]:bg-primary"
                  />
                  <label htmlFor={item.name} className="text-sm font-medium leading-none cursor-pointer">
                    {item.name} {item.emoji}
                  </label>
                </div>
              ))}
              <Button 
                variant="outline" 
                onClick={() => setShowAdditional(!showAdditional)}
                className="border-primary/20 hover:bg-secondary/5 h-auto py-3 font-bold justify-start text-primary"
              >
                <Search className="w-4 h-4 mr-2" /> Lainnya?
              </Button>
            </div>
            {showAdditional && (
              <Input 
                placeholder="Sosis, Royco, atau daun bawang..." 
                value={additionalIngredients}
                onChange={(e) => setAdditionalIngredients(e.target.value)}
                className="border-primary focus-visible:ring-secondary mt-2"
              />
            )}
          </div>

          {/* Section 3: Tools */}
          <div className="space-y-4">
            <Label className="text-lg font-bold">Masak Pake Apa?</Label>
            <RadioGroup value={cookingTool} onValueChange={setCookingTool} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Teflon", emoji: "🍳" },
                { name: "Rice Cooker", emoji: "🍚" },
                { name: "Wajan", emoji: "🥘" },
                { name: "Air Fryer", emoji: "🌬️" },
                { name: "Panci", emoji: "🍲" },
                { name: "Microwave", emoji: "⏲️" }
              ].map((tool) => (
                <div key={tool.name} className={`flex flex-col items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all ${cookingTool === tool.name ? 'bg-secondary border-primary shadow-md scale-105' : 'bg-white border-primary/20 hover:border-primary/50'}`} onClick={() => setCookingTool(tool.name)}>
                  <RadioGroupItem value={tool.name} id={tool.name} className="sr-only" />
                  <span className="text-2xl mb-1">{tool.emoji}</span>
                  <Label htmlFor={tool.name} className="text-[10px] font-bold text-center cursor-pointer">{tool.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-8 text-xl rounded-2xl border-2 border-primary shadow-lg transition-transform active:scale-95 disabled:opacity-50"
            onClick={handleManualCook}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2 text-white">
                <Loader2 className="w-6 h-6 animate-spin" /> Lagi tanya Chef AI...
              </span>
            ) : (
              <span className="flex items-center gap-2 text-white">
                <Sparkles className="w-6 h-6" /> Gas Masak!
              </span>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderDetail = () => {
    if (!selectedRecipe) return null;
    const isGenerated = !('id' in selectedRecipe);
    const videoUrl = getYouTubeLink(selectedRecipe.title);
    
    const ingredients = 'ingredients' in selectedRecipe 
      ? selectedRecipe.ingredients 
      : (selectedRecipe as GenerateEggRecipeOutput).ingredientsList || [];

    const tools = 'tools' in selectedRecipe
      ? selectedRecipe.tools
      : (selectedRecipe as GenerateEggRecipeOutput).toolsUsed || [];

    const cookTime = 'cookTime' in selectedRecipe ? selectedRecipe.cookTime : '15 menit';

    return (
      <div className="max-w-5xl mx-auto p-6 space-y-8 animate-in fade-in zoom-in-95 duration-500">
        <Button 
          variant="outline"
          onClick={() => setPage(isGenerated ? "masak_sendiri" : "home")}
          className="flex items-center gap-2 text-primary font-bold rounded-full border-primary px-6 hover:bg-secondary/10"
        >
          <ArrowLeft className="w-4 h-4" /> Balik
        </Button>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-4xl font-extrabold text-primary leading-tight text-center md:text-left flex-1">
            {selectedRecipe.title}
          </h1>
          <div className="flex items-center gap-2 bg-secondary/20 px-6 py-2 rounded-full border-2 border-primary/20 self-center md:self-auto">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary">{cookTime}</span>
          </div>
        </div>

        <Card className="border-2 border-primary bg-white shadow-2xl overflow-hidden">
          <CardContent className="p-0 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-primary/20">
            {/* Left Column: Ingredients & Tools */}
            <div className="md:w-[35%] p-8 bg-secondary/5">
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 underline decoration-secondary">
                    <ShoppingBasket className="w-6 h-6 text-primary" /> Bahannya
                  </h2>
                  <ul className="space-y-4">
                    {ingredients.map((item, i) => (
                      <li key={i} className="text-lg font-medium text-black/80 flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 underline decoration-secondary">
                    <Utensils className="w-6 h-6 text-primary" /> Alat-alat
                  </h2>
                  <ul className="space-y-4">
                    {tools.map((item, i) => (
                      <li key={i} className="text-lg font-medium text-black/80 flex items-start gap-3">
                        <Wrench className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                    {tools.length === 0 && <li className="text-muted-foreground italic">Cukup alat dapur standar aja.</li>}
                  </ul>
                </section>
              </div>
            </div>

            {/* Right Column: Steps */}
            <div className="flex-1 p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <ChefHat className="w-6 h-6" /> Cara Masak
              </h2>
              <div className="recipe-markdown text-lg leading-relaxed text-black/90">
                {selectedRecipe.stepsMarkdown.split('\n').map((line, i) => (
                  <p key={i} className={line.trim() === "" ? "h-2" : ""}>{line}</p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Section */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-primary flex items-center gap-2 justify-center md:justify-start">
            <Youtube className="w-6 h-6 text-red-600" /> Tonton Biar Gak Gagal 🎬
          </h3>
          <div className="aspect-video w-full rounded-3xl overflow-hidden border-4 border-primary shadow-2xl bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src={videoUrl} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Button 
            onClick={() => {
              setSelectedRecipe(null);
              setPage("home");
            }}
            variant="outline"
            className="border-2 border-primary text-primary font-bold px-12 py-6 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            Balik ke awal
          </Button>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen pb-20 selection:bg-secondary">
      {page === "home" && renderHome()}
      {page === "masak_sendiri" && renderMasakSendiri()}
      {page === "detail_menu" && renderDetail()}
    </main>
  );
}
