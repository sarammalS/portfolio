import { Briefcase, BookOpen, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5 animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl bg-primary-200 flex items-center justify-center">
                <div className="text-9xl">👨‍💻</div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-4xl">👨‍💻</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary-600 mb-6"></div>
            <p className="text-lg text-secondary-700 mb-6">
              I'm Sarammal S., a Java Developer Intern at Innobyte Services with experience in full-stack development. I enjoy building impactful backend systems and exploring cloud-based web solutions.
            </p>
            <p className="text-lg text-secondary-700 mb-6">
              Currently, I'm pursuing an M.Sc. in Computer Science at PSG College of Arts and Science, preparing for UGC NET CS, and actively contributing to personal and open-source projects.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-medium text-secondary-900">Experience</h3>
                  <p className="text-secondary-600">Java Developer Intern</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-medium text-secondary-900">Education</h3>
                  <p className="text-secondary-600">M.Sc. Computer Science</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-medium text-secondary-900">Location</h3>
                  <p className="text-secondary-600">Coimbatore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
