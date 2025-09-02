import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6281234567890", "_blank");
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">Arfatama Interior</h3>
            <p className="text-background/80 leading-relaxed">
              Interior dengan standar kontraktor. Profesional, transparan, dan tepat waktu untuk semua kebutuhan desain interior Anda.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-accent-foreground" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Layanan Kami</h4>
            <ul className="space-y-2 text-background/80">
              <li>Desain Interior</li>
              <li>Renovasi Rumah</li>
              <li>Interior Kost</li>
              <li>Renovasi Kantor</li>
              <li>Konstruksi Bangunan</li>
              <li>Konsultasi MEP</li>
            </ul>
          </div>

          {/* Coverage Area */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Area Layanan</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-background/80">Yogyakarta</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-background/80">Solo</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-background/80">Semarang</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-background/80">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-background/80">info@arfatama.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-accent" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  WhatsApp Business
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 mb-2">
            © 2024 Arfatama Interior. All rights reserved.
          </p>
          <p className="text-accent font-medium">
            "Interior yang Bisa Dibangun, Transparan & Tepat Waktu."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;