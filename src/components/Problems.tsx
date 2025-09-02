import { AlertTriangle, Clock, Users, MapPin, PhoneOff, Eye } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Takut kecewa hasil akhir",
      description: "Khawatir interior yang dibangun tidak sesuai ekspektasi dan impian"
    },
    {
      icon: Eye,
      title: "Bingung memilih desain & material",
      description: "Terlalu banyak pilihan membuat sulit mengambil keputusan yang tepat"
    },
    {
      icon: Clock,
      title: "Tidak punya waktu mengelola",
      description: "Sibuk bekerja dan tidak ada waktu untuk mengawasi progres pembangunan"
    },
    {
      icon: MapPin,
      title: "Krisis kepercayaan project jarak jauh",
      description: "Ragu memilih kontraktor yang tidak bisa dipantau langsung"
    },
    {
      icon: PhoneOff,
      title: "Vendor lemot & tidak terorganisir",
      description: "Frustrasi dengan kontraktor yang sulit dihubungi dan tidak profesional"
    },
    {
      icon: Users,
      title: "Sulit menerjemahkan visi ke nyata",
      description: "Kesulitan mengkomunikasikan ide interior kepada tim pelaksana"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Kami Tahu Tantangan Anda dalam{" "}
            <span className="text-primary">Membangun Interior</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Setiap klien memiliki kekhawatiran yang sama. Kami memahami betul masalah yang Anda hadapi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 border border-border group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;