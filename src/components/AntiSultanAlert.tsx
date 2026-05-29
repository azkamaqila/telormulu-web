import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { XCircle } from "lucide-react";

export function AntiSultanAlert() {
  return (
    <Alert variant="destructive" className="bg-white border-primary border-2 shadow-xl animate-in zoom-in-95 duration-300">
      <XCircle className="h-5 w-5 text-primary" />
      <AlertTitle className="font-bold text-primary text-lg">Peringatan: Spek Terlalu Tinggi!</AlertTitle>
      <AlertDescription className="text-primary font-medium italic mt-2">
        "Maaf bos, Anda terdeteksi bukan mahasiswa rantau yang kesulitan. Spek dompet Anda terlalu tinggi untuk website telormulu. Silakan buat restoran sendiri atau sewa koki pribadi!"
      </AlertDescription>
    </Alert>
  );
}
