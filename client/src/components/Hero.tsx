import { Code, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="md:w-3/5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4">
              Java Developer <span className="text-primary-700">Portfolio</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-secondary-600 mb-6">
              Sarammal S.
            </h2>
            <p className="text-lg text-secondary-700 mb-8 max-w-2xl">
              I'm passionate about backend development, building robust applications in Java, and developing scalable web solutions using Spring Boot and MySQL. Currently pursuing an M.Sc. in Computer Science at PSG College of Arts and Science.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-medium rounded-md shadow-md transition-colors flex items-center">
                <Code className="w-5 h-5 mr-2" /> View Projects
              </a>
              <a href="#contact" className="px-6 py-3 bg-white hover:bg-gray-100 text-primary-700 font-medium rounded-md shadow-md border border-primary-200 transition-colors flex items-center">
                <Mail className="w-5 h-5 mr-2" /> Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary-100 border-8 border-white shadow-xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-primary-100 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
