import { useState, useEffect } from "react";
import { Mail, GitPullRequest, Linkedin, Send, Download, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent
} from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

// Smart response suggestions based on message subject and content
const getResponseSuggestions = (subject: string, message: string): string[] => {
  const subjectLower = subject.toLowerCase();
  const messageLower = message.toLowerCase();
  
  if (messageLower.includes("job") || messageLower.includes("position") || messageLower.includes("hire") || subjectLower.includes("job")) {
    return [
      "Thank you for considering me for this opportunity. I'd be happy to discuss my qualifications and how I can contribute to your team.",
      "I'm very interested in learning more about this position and how my Java development skills could be a good fit for your needs.",
      "I appreciate your interest in my work. I'm currently open to new opportunities and would love to discuss how I can bring value to your team."
    ];
  }
  
  if (messageLower.includes("project") || messageLower.includes("collaboration") || subjectLower.includes("project")) {
    return [
      "I'm excited about the possibility of collaborating on this project. Let's schedule a call to discuss the details and how I can contribute.",
      "Your project sounds interesting! I'd be happy to share my insights on how we might approach the technical challenges involved.",
      "Thank you for sharing your project idea. I believe my experience with Java and Spring Boot would be valuable for this type of work."
    ];
  }
  
  if (messageLower.includes("question") || messageLower.includes("help") || messageLower.includes("advice") || subjectLower.includes("question")) {
    return [
      "I'd be happy to help answer your questions about Java development. Please provide more details so I can give you the most useful response.",
      "Thanks for reaching out with your question. Based on my experience, I'd recommend approaching this by focusing on clean architecture and test-driven development.",
      "I appreciate your interest in my technical expertise. I'd be glad to share what I've learned about this topic from my work on similar projects."
    ];
  }
  
  // Default suggestions
  return [
    "Thank you for your message. I'll review it carefully and get back to you soon.",
    "I appreciate you taking the time to reach out. I'll respond to your inquiry as quickly as possible.",
    "Thanks for contacting me. I look forward to discussing this further and will reply shortly."
  ];
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  // Update suggestions whenever subject or message changes
  useEffect(() => {
    const subject = form.watch("subject") || "";
    const message = form.watch("message") || "";
    
    if (subject.length > 3 || message.length > 10) {
      setSuggestions(getResponseSuggestions(subject, message));
    }
  }, [form.watch("subject"), form.watch("message")]); 

  const applySuggestion = (suggestion: string) => {
    form.setValue("message", suggestion);
    setShowSuggestions(false);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setShowSuggestions(false);
    
    // We'll use a fully client-side approach for the demo
    try {
      // Simulate a delay as if we're sending data to a server
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form submitted with data:", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      form.reset();
      setSuggestions([]);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Let's connect! Reach out to discuss projects, opportunities, or just to say hello.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md animate-slide-up">
            <h3 className="text-xl font-bold text-secondary-900 mb-6">Send Me a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-secondary-700">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Name" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-secondary-700">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your@email.com" 
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-secondary-700">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Subject of your message" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-sm font-medium text-secondary-700">Message</FormLabel>
                        {suggestions.length > 0 && (
                          <Popover open={showSuggestions} onOpenChange={setShowSuggestions}>
                            <PopoverTrigger asChild>
                              <Button 
                                type="button" 
                                variant="outline" 
                                size="sm"
                                className="px-2 py-1 text-xs bg-primary-50 text-primary-600 border-primary-200 hover:bg-primary-100"
                              >
                                <Sparkles className="w-4 h-4 mr-1" /> AI Suggestions
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-0">
                              <div className="p-4 border-b border-gray-100">
                                <h4 className="font-medium text-sm flex items-center">
                                  <Sparkles className="w-4 h-4 text-primary-500 mr-2" /> 
                                  AI Response Suggestions
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">
                                  Click a suggestion to use it in your message
                                </p>
                              </div>
                              <div className="max-h-60 overflow-y-auto py-2">
                                {suggestions.map((suggestion, index) => (
                                  <button
                                    key={index}
                                    type="button"
                                    className="w-full text-left px-4 py-2 text-sm hover:bg-primary-50 cursor-pointer transition-colors text-secondary-800"
                                    onClick={() => applySuggestion(suggestion)}
                                  >
                                    {suggestion}
                                  </button>
                                ))}
                              </div>
                            </PopoverContent>
                          </Popover>
                        )}
                      </div>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message here..." 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" 
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-medium rounded-md shadow-md transition-colors flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⋮</span> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-xl font-bold text-secondary-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <Mail className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">Email</h4>
                    <a href="mailto:sarammalselva@gmail.com" className="text-primary-700 hover:text-primary-800 transition-colors">sarammalselva@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <GitPullRequest className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">GitPullRequest</h4>
                    <a href="https://github.com/sarammal" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-primary-800 transition-colors">github.com/sarammal</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <Linkedin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">LinkedIn</h4>
                    <a href="https://linkedin.com/in/sarammal" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-primary-800 transition-colors">linkedin.com/in/sarammal</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 p-6 rounded-xl text-white shadow-lg">
              <h4 className="text-lg font-semibold mb-4">Looking for a Java Developer?</h4>
              <p className="mb-6">I'm currently open to new opportunities and would love to bring my expertise to your team.</p>
              <Button variant="outline" className="bg-white text-primary-700 hover:bg-gray-100">
                <Download className="w-5 h-5 mr-2" /> Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
