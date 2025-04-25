import { Mail, GitPullRequest, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold flex items-center">
              <span className="text-2xl mr-2">👨‍💻</span> Sarammal S.
            </a>
            <p className="text-gray-400 mt-2">Java Developer & Backend Specialist</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:sarammalselva@gmail.com" 
              className="w-10 h-10 bg-secondary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/sarammal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-secondary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors"
              aria-label="GitPullRequest"
            >
              <GitPullRequest className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/sarammal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-secondary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Sarammal S. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
