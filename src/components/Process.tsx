import { MessageCircle, PenTool, Hammer, HandHeart } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Konsultasi & Diskusi Visi",
      description: "Kami dengar kebutuhan, anggaran, dan impian interior Anda secara detail"
    },
    {
      icon: PenTool,
      number: "02", 
      title: "Desain 3D + BoQ Transparan",
      description: "Visualisasi 3D yang akurat plus rincian biaya yang jelas dan transparan"
    },
    {
      icon: Hammer,
      number: "03",
      title: "Pembangunan Interior Tepat Waktu",
      description: "Eksekusi dengan standar kontraktor profesional sesuai timeline yang disepakati"
    },
    {
      icon: HandHeart,
      number: "04",
      title: "Handover + Garansi After Sales",
      description: "Serah terima yang sempurna plus garansi dan layanan after sales terpercaya"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Bagaimana{" "}
            <span className="text-primary">Proses Kerja</span>
            {" "}Kami?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proses yang terstruktur dan transparan dari awal hingga akhir, memastikan kepuasan Anda di setiap tahap.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary/60 to-primary/20 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 border border-border group hover:-translate-y-1">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-4xl font-bold text-primary/20 font-heading mt-2">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;