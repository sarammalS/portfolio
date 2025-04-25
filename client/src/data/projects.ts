export interface Project {
  id: number;
  emoji: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  linkText: string;
}

export const projects: Project[] = [
  {
    id: 1,
    emoji: "⚽",
    title: "Turf Management System",
    description: "A full-stack web application for managing sports turf rentals, bookings, and payments with comprehensive admin dashboard and user management.",
    technologies: ["Spring Boot", "MySQL", "REST API", "Java", "JPA/Hibernate"],
    link: "https://github.com/sarammalS/turf-management-system",
    linkText: "View on GitHub"
  },
  {
    id: 2,
    emoji: "🚆",
    title: "Train Ticket Booking System",
    description: "A console-based application that supports dynamic seat allocation, PNR generation, waiting list handling, and partial cancellations.",
    technologies: ["Java", "OOP", "File I/O"],
    link: "https://replit.com/@sarammal/train-ticket-booking",
    linkText: "Run on Replit"
  },
  {
    id: 3,
    emoji: "🎓",
    title: "Student Management System",
    description: "Console application to perform CRUD operations on student data using JDBC connectivity to a MySQL database.",
    technologies: ["Java", "JDBC", "MySQL"],
    link: "https://replit.com/@sarammal/student-management",
    linkText: "View Project"
  },
  {
    id: 4,
    emoji: "💬",
    title: "Java Chat Application",
    description: "A multi-user chat app using TCP sockets that allows real-time communication via the console.",
    technologies: ["Java", "Networking", "Multithreading"],
    link: "https://replit.com/@sarammal/java-chat-app",
    linkText: "Try It"
  }
];
