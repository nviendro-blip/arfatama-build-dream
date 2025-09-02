import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20untuk%20konsultasi%20interior%20design", "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Interior dengan{" "}
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                  Standar Kontraktor
                </span>
                {" "}– Semua Desain Pasti Bisa Dibangun.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dari desain, perencanaan, hingga pembangunan. Profesional, transparan, dan tepat waktu.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={handleWhatsAppClick}
                className="group"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis Sekarang
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="professional" size="xl">
                Lihat Paket & Estimasi
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-heading">100+</div>
                <div className="text-sm text-muted-foreground">Proyek Selesai</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-heading">5+</div>
                <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-heading">3</div>
                <div className="text-sm text-muted-foreground">Kota Dilayani</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Interior design yang profesional dan berkualitas tinggi oleh Arfatama Interior" 
              className="rounded-lg shadow-strong w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;