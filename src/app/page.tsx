"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, Minus, ChefHat, ArrowLeft, Youtube, Sparkles, Loader2 } from "lucide-react";
import { COMMUNITY_RECIPES, type StaticRecipe, getYouTubeLink } from "@/lib/recipes-data";
import { AntiSultanAlert } from "@/components/AntiSultanAlert";
import { generateEggRecipe, type GenerateEggRecipeOutput } from "@/ai/flows/generate-egg-recipe";
import { useToast } from "@/hooks/use-toast";

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
  const [cookingTool, setCookingTool] = useState("Kompor & Teflon");
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
    <div className="max-w-4xl mx-auto p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div 
          className="cursor-pointer transition-all hover:scale-105 flex items-center gap-3 group" 
          onClick={() => setPage("home")}
        >
          <span className="text-6xl md:text-7xl group-hover:rotate-12 transition-transform duration-300">🍳</span>
          <div className="flex flex-col -space-y-1 md:-space-y-2">
            <h1 className="text-3xl md:text-4xl font-black text-primary tracking-tighter leading-tight uppercase">
              TELOR<br/>MULU!
            </h1>
          </div>
        </div>
        <Button 
          onClick={() => setPage("masak_sendiri")}
          className="bg-white hover:bg-secondary/10 text-primary font-bold py-6 px-8 rounded-full shadow-lg border-2 border-primary transition-all hover:scale-105"
        >
          👨‍🍳 Masak Sendiri
        </Button>
      </header>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-secondary" />
          <h2 className="text-xl font-bold text-primary">Masakan Telur Populer ✨</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMUNITY_RECIPES.map((recipe) => (
            <Card 
              key={recipe.id} 
              className="cursor-pointer border-2 border-primary hover:shadow-xl transition-all hover:-translate-y-1 bg-white overflow-hidden group"
              onClick={() => {
                setSelectedRecipe(recipe);
                setPage("detail_menu");
              }}
            >
              <CardHeader className="bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <CardTitle className="text-lg text-primary">{recipe.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-2xl mb-2">{recipe.ingredientsSummary}</p>
                <p className="text-sm italic text-primary/60">Klik buat liat tutorial pasrahnya...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );

  const renderMasakSendiri = () => (
    <div className="max-w-2xl mx-auto p-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={() => setPage("home")}
        className="flex items-center gap-2 text-primary font-semibold hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Balik ke Menu Utama
      </button>

      <Card className="border-2 border-primary shadow-2xl bg-white overflow-hidden">
        <CardHeader className="bg-primary text-white p-6">
          <CardTitle className="text-2xl flex items-center gap-2 font-bold">
            <ChefHat className="w-8 h-8" /> Atur Strategi Masak
          </CardTitle>
          <p className="text-white/80 italic text-sm">Pilih senjata dan amunisi yang ada di kosan.</p>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          {isSultan && <AntiSultanAlert />}

          {/* Section 1: Eggs Count */}
          <div className="space-y-4">
            <Label className="text-lg font-bold">1. Telur yang dimiliki (Maksimal 10)</Label>
            <div className="flex items-center gap-6 bg-secondary/10 p-4 rounded-2xl border-2 border-dashed border-primary">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setEggsCount(Math.max(1, eggsCount - 1))}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Minus className="w-5 h-5" />
              </Button>
              <div className="text-center min-w-[100px]">
                <span className="text-4xl font-bold">{eggsCount}</span>
                <span className="block text-xs font-bold uppercase tracking-widest mt-1">Butir</span>
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setEggsCount(Math.min(10, eggsCount + 1))}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Plus className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Section 2: Main Ingredients */}
          <div className="space-y-4">
            <Label className="text-lg font-bold">2. Bahan Utama (Khas Kosan)</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Kecap", "Bawang Merah", "Garam", "Cabai", "Mie Instan"].map((item) => (
                <div key={item} className="flex items-center space-x-2 bg-white border border-primary/20 p-3 rounded-lg hover:bg-secondary/5 transition-colors cursor-pointer" onClick={() => toggleMainIngredient(item)}>
                  <Checkbox 
                    id={item} 
                    checked={mainIngredients.includes(item)} 
                    onCheckedChange={() => toggleMainIngredient(item)}
                    className="border-primary data-[state=checked]:bg-primary"
                  />
                  <label htmlFor={item} className="text-sm font-medium leading-none cursor-pointer">{item}</label>
                </div>
              ))}
              <Button 
                variant="ghost" 
                onClick={() => setShowAdditional(!showAdditional)}
                className="text-primary hover:text-primary hover:bg-secondary/20 h-auto py-2 font-bold"
              >
                + Tambahan
              </Button>
            </div>
            {showAdditional && (
              <Input 
                placeholder="Misal: Sosis, Royco, Daun Bawang..." 
                value={additionalIngredients}
                onChange={(e) => setAdditionalIngredients(e.target.value)}
                className="border-primary focus-visible:ring-secondary mt-2"
              />
            )}
          </div>

          {/* Section 3: Tools */}
          <div className="space-y-4">
            <Label className="text-lg font-bold">3. Alat yang Dimiliki</Label>
            <RadioGroup value={cookingTool} onValueChange={setCookingTool} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Kompor & Teflon", "Rice Cooker", "Setrikaan (Nekat)"].map((tool) => (
                <div key={tool} className={`flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all ${cookingTool === tool ? 'bg-secondary border-primary shadow-md scale-105' : 'bg-white border-primary/20 hover:border-primary/50'}`} onClick={() => setCookingTool(tool)}>
                  <RadioGroupItem value={tool} id={tool} className="sr-only" />
                  <Label htmlFor={tool} className="text-xs font-bold text-center cursor-pointer">{tool}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Button 
            className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-8 text-xl rounded-2xl border-2 border-primary shadow-lg transition-transform active:scale-95 disabled:opacity-50"
            onClick={handleManualCook}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-6 h-6 animate-spin" /> Menghubungi Chef AI...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sparkles className="w-6 h-6" /> Pecut AI untuk Masak!
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

    return (
      <div className="max-w-3xl mx-auto p-6 space-y-8 animate-in fade-in zoom-in-95 duration-500">
        <button 
          onClick={() => setPage(isGenerated ? "masak_sendiri" : "home")}
          className="flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali
        </button>

        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-primary leading-tight">{selectedRecipe.title}</h1>
          
          <div className="bg-white border-2 border-primary rounded-3xl p-6 shadow-xl flex items-center justify-center gap-4">
            <span className="text-sm font-bold uppercase tracking-wider text-primary/60">Amunisi:</span>
            <span className="text-3xl tracking-[0.5em]">{selectedRecipe.ingredientsSummary}</span>
          </div>

          <Card className="border-2 border-primary bg-white">
            <CardHeader className="border-b-2 border-primary/10">
              <CardTitle className="flex items-center gap-2 text-primary">
                <ChefHat className="w-6 h-6" /> Tutorial Langkah Demi Langkah
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="recipe-markdown text-lg text-primary/90">
                {selectedRecipe.stepsMarkdown.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <Youtube className="w-6 h-6 text-red-600" /> Referensi Visual (Biar Gak Gagal)
            </h3>
            <div className="aspect-video w-full rounded-3xl overflow-hidden border-4 border-primary shadow-2xl">
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
              className="border-2 border-primary text-primary font-bold px-12 py-6 rounded-full"
            >
              Udah Kenyang? Balik Home
            </Button>
          </div>
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
