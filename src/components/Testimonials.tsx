import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      project: "Renovasi Rumah Tinggal",
      location: "Yogyakarta",
      rating: 5,
      text: "Arfatama benar-benar profesional! Hasil renovasi rumah kami sangat memuaskan. Timeline tepat waktu, komunikasi lancar, dan harga sesuai kesepakatan awal. Recommended!"
    },
    {
      name: "Sari Wijaya",
      project: "Interior Kost 20 Kamar",
      location: "Solo", 
      rating: 5,
      text: "Project kost kami selesai lebih cepat dari jadwal. Kualitas bangunan sangat baik dan desain interior modern. Tim sangat responsif dan mudah dihubungi."
    },
    {
      name: "CV. Maju Jaya",
      project: "Renovasi Kantor",
      location: "Semarang",
      rating: 5,
      text: "Sebagai perusahaan yang butuh hasil cepat dan berkualitas, Arfatama Interior adalah pilihan tepat. Tidak ada drama, semua berjalan sesuai rencana."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Apa Kata{" "}
            <span className="text-primary">Klien Kami?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Inilah pengalaman mereka bekerja sama dengan Arfatama Interior.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 border border-border relative group hover:-translate-y-1"
            >
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.project}
                </p>
                <p className="text-sm text-primary">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;