import { CheckCircle, DollarSign, Clock, Wrench, MessageSquare } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: CheckCircle,
      title: "Designer Berpengalaman",
      description: "Tim designer profesional dengan portfolio puluhan proyek interior berkualitas tinggi"
    },
    {
      icon: DollarSign,
      title: "Harga Jelas & Transparan",
      description: "BOQ detail dan tidak ada biaya tersembunyi. Anda tahu persis kemana uang Anda digunakan"
    },
    {
      icon: Clock,
      title: "Tepat Waktu Sesuai Kontrak",
      description: "Timeline yang jelas dan komitmen penuh untuk menyelesaikan proyek sesuai jadwal"
    },
    {
      icon: Wrench,
      title: "Full Service (Sipil, MEP, Interior)",
      description: "Satu pintu untuk semua kebutuhan: dari struktur, instalasi, hingga finishing interior"
    },
    {
      icon: MessageSquare,
      title: "Komunikasi Mudah & Terorganisir",
      description: "Update progres berkala dan mudah dihubungi kapan saja melalui berbagai channel"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Kenapa Pilih{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              Arfatama Interior?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pengalaman sebagai kontraktor membuat kami memahami betul bagaimana membangun interior yang tidak hanya indah, tapi juga kuat dan fungsional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 border border-border group hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;