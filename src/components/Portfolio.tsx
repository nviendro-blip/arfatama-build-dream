import beforeImage from "@/assets/before-renovation.jpg";
import afterImage from "@/assets/after-renovation.jpg";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Renovasi Rumah Modern",
      location: "Yogyakarta",
      before: beforeImage,
      after: afterImage,
      description: "Transformasi ruang tamu klasik menjadi modern minimalis dengan pencahayaan optimal"
    },
    {
      title: "Interior Kost Premium", 
      location: "Solo",
      before: beforeImage,
      after: afterImage,
      description: "Desain kamar kost yang nyaman dan fungsional dengan storage maksimal"
    },
    {
      title: "Office Space Renovation",
      location: "Semarang", 
      before: beforeImage,
      after: afterImage,
      description: "Kantor yang produktif dengan zona kerja yang terorganisir dan modern"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Lihat{" "}
            <span className="text-primary">Hasil Karya</span>
            {" "}Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Setiap proyek adalah bukti komitmen kami terhadap kualitas dan kepuasan klien. Dari rumah tinggal hingga properti komersial.
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium mb-4">{project.location}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative">
                  {/* Before Image */}
                  <div className="relative">
                    <img 
                      src={project.before} 
                      alt={`Sebelum renovasi ${project.title}`}
                      className="w-full h-64 object-cover rounded-lg shadow-soft"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Sebelum
                      </span>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex justify-center my-4">
                    <div className="bg-primary p-2 rounded-full shadow-medium">
                      <ArrowRight className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="relative">
                    <img 
                      src={project.after} 
                      alt={`Sesudah renovasi ${project.title}`}
                      className="w-full h-64 object-cover rounded-lg shadow-soft"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Sesudah
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;