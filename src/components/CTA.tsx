import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, Phone } from "lucide-react";

const CTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20untuk%20konsultasi%20interior%20design", "_blank");
  };

  const handleEstimateClick = () => {
    window.open("https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20melihat%20paket%20dan%20estimasi%20harga%20interior", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/90"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Wujudkan Interior Rumah, Kost, atau Gedung Anda Bersama{" "}
            <span className="text-accent">Arfatama</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Jangan biarkan proyek interior Anda tertunda lagi. Mulai konsultasi gratis sekarang dan dapatkan solusi terbaik untuk kebutuhan Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Gratis Sekarang
            </Button>
            <Button 
              variant="professional" 
              size="xl"
              onClick={handleEstimateClick}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <FileText className="w-5 h-5" />
              Lihat Paket & Estimasi Harga
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center mx-auto">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground">Konsultasi Gratis</h3>
              <p className="text-sm text-primary-foreground/80">Diskusi kebutuhan tanpa biaya</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground">BoQ Transparan</h3>
              <p className="text-sm text-primary-foreground/80">Rincian biaya yang jelas</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground">Support 24/7</h3>
              <p className="text-sm text-primary-foreground/80">Tim selalu siap membantu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;