export type Locale = 'es' | 'en';

export const translations: Record<Locale, Record<string, string>> = {
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.education': 'Educación',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    'nav.resume': 'Currículum',
    'nav.downloadResume': 'Descargar CV',

    // Profile Header
    'profile.viewResume': 'Ver CV',

    // Experience
    'experience.title': 'Experiencia Profesional',
    'experience.subtitle': 'Mi trayectoria profesional',
    'experience.present': 'Actualidad',

    // Skills
    'skills.title': 'Habilidades y Experiencia',
    'skills.subtitle': 'Tecnologías y herramientas con las que trabajo',
    'skills.proficiency': 'Nivel:',
    'skills.expert': 'Experto (90%+)',
    'skills.advanced': 'Avanzado (75%+)',
    'skills.intermediate': 'Intermedio (60%+)',

    // Education
    'education.title': 'Educación',
    'education.subtitle': 'Formación académica y cualificaciones',
    'education.in': 'en',

    // Certifications
    'certifications.title': 'Certificaciones',
    'certifications.subtitle': 'Certificaciones profesionales y credenciales',
    'certifications.issued': 'Emitida',
    'certifications.expires': 'Caduca',
    'certifications.viewCredential': 'Ver Credencial',

    // Languages
    'languages.title': 'Idiomas',

    // Portfolio
    'portfolio.title': 'Mi Portafolio',
    'portfolio.subtitle': 'Explora mis proyectos y trabajos',
    'portfolio.featured': 'Destacado',
    'portfolio.viewDetails': 'Ver detalles',
    'portfolio.featuredProjects': 'Proyectos Destacados',
    'portfolio.featuredSubtitle': 'Una selección de mi trabajo reciente',
    'portfolio.viewAll': 'Ver todos los proyectos',
    'portfolio.noProjects': 'No se encontraron proyectos en esta categoría.',
    'portfolio.backToPortfolio': 'Volver al Portafolio',
    'portfolio.keyHighlights': 'Aspectos Destacados',
    'portfolio.technologiesUsed': 'Tecnologías Utilizadas',
    'portfolio.role': 'Rol',
    'portfolio.duration': 'Duración',
    'portfolio.category': 'Categoría',
    'portfolio.viewLiveSite': 'Ver Sitio en Vivo',
    'portfolio.viewSource': 'Ver Código Fuente',
    'portfolio.projectNotFound': 'Proyecto No Encontrado',

    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Hablemos de tu próximo proyecto',
    'contact.contactInfo': 'Información de Contacto',
    'contact.connectWith': 'Conéctame',
    'contact.sendMessage': 'Enviar un Mensaje',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.phone': 'Teléfono',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.messageSent': '¡Mensaje Enviado!',
    'contact.thankYou': 'Gracias por contactarme. Te responderé pronto.',
    'contact.sendAnother': 'Enviar Otro Mensaje',
    'contact.error': 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
    'contact.location': 'Ubicación',
    'contact.availability': 'Disponibilidad',
    'contact.availabilityValue': 'Abierto a oportunidades',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'tu@email.com',
    'contact.subjectPlaceholder': '¿De qué trata?',
    'contact.messagePlaceholder': 'Tu mensaje...',
    'contact.validation.name': 'El nombre debe tener al menos 2 caracteres',
    'contact.validation.email': 'Por favor, introduce un correo válido',
    'contact.validation.subject': 'El asunto debe tener al menos 5 caracteres',
    'contact.validation.message': 'El mensaje debe tener al menos 10 caracteres',

    // Footer
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.connect': 'Conectar',
    'footer.allRightsReserved': 'Todos los derechos reservados.',
    'footer.builtWith': 'Hecho con',
    'footer.usingNext': 'usando Next.js',
    'footer.home': 'Inicio',
    'footer.printVersion': 'Versión para Imprimir',

    // Print
    'print.summary': 'Resumen',
    'print.experience': 'Experiencia',
    'print.skills': 'Habilidades',
    'print.education': 'Educación',
    'print.certifications': 'Certificaciones',
    'print.languages': 'Idiomas',
    'print.friendlyVersion': 'Versión para imprimir del currículum',

    // Language toggle
    'lang.switch': 'EN',

    // Employment types
    'employment.full-time': 'Tiempo completo',
    'employment.part-time': 'Medio tiempo',
    'employment.contract': 'Contrato',
    'employment.freelance': 'Freelance',

    // Skill categories
    'category.Móvil': 'Móvil',
    'category.Lenguajes': 'Lenguajes',
    'category.Backend': 'Backend',
    'category.IA / LLM': 'IA / LLM',
    'category.Cloud': 'Cloud',
    'category.DevOps': 'DevOps',

    // Misc
    'education.gpa': 'Promedio',
    'skills.yearsSuffix': 'a',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    'nav.downloadResume': 'Download Resume',

    // Profile Header
    'profile.viewResume': 'View Resume',

    // Experience
    'experience.title': 'Work Experience',
    'experience.subtitle': 'My professional journey',
    'experience.present': 'Present',

    // Skills
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'Technologies and tools I work with',
    'skills.proficiency': 'Proficiency:',
    'skills.expert': 'Expert (90%+)',
    'skills.advanced': 'Advanced (75%+)',
    'skills.intermediate': 'Intermediate (60%+)',

    // Education
    'education.title': 'Education',
    'education.subtitle': 'Academic background and qualifications',
    'education.in': 'in',

    // Certifications
    'certifications.title': 'Certifications',
    'certifications.subtitle': 'Professional certifications and credentials',
    'certifications.issued': 'Issued',
    'certifications.expires': 'Expires',
    'certifications.viewCredential': 'View Credential',

    // Languages
    'languages.title': 'Languages',

    // Portfolio
    'portfolio.title': 'My Portfolio',
    'portfolio.subtitle': 'Explore my projects and work',
    'portfolio.featured': 'Featured',
    'portfolio.viewDetails': 'View Details',
    'portfolio.featuredProjects': 'Featured Projects',
    'portfolio.featuredSubtitle': 'A selection of my recent work',
    'portfolio.viewAll': 'View All Projects',
    'portfolio.noProjects': 'No projects found in this category.',
    'portfolio.backToPortfolio': 'Back to Portfolio',
    'portfolio.keyHighlights': 'Key Highlights',
    'portfolio.technologiesUsed': 'Technologies Used',
    'portfolio.role': 'Role',
    'portfolio.duration': 'Duration',
    'portfolio.category': 'Category',
    'portfolio.viewLiveSite': 'View Live Site',
    'portfolio.viewSource': 'View Source',
    'portfolio.projectNotFound': 'Project Not Found',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's discuss your next project",
    'contact.contactInfo': 'Contact Information',
    'contact.connectWith': 'Connect with me',
    'contact.sendMessage': 'Send a Message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.messageSent': 'Message Sent!',
    'contact.thankYou': "Thank you for reaching out. I'll get back to you soon.",
    'contact.sendAnother': 'Send Another Message',
    'contact.error': 'Failed to send message. Please try again later.',
    'contact.location': 'Location',
    'contact.availability': 'Availability',
    'contact.availabilityValue': 'Open to opportunities',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subjectPlaceholder': 'What is this about?',
    'contact.messagePlaceholder': 'Your message...',
    'contact.validation.name': 'Name must be at least 2 characters',
    'contact.validation.email': 'Please enter a valid email',
    'contact.validation.subject': 'Subject must be at least 5 characters',
    'contact.validation.message': 'Message must be at least 10 characters',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.allRightsReserved': 'All rights reserved.',
    'footer.builtWith': 'Built with',
    'footer.usingNext': 'using Next.js',
    'footer.home': 'Home',
    'footer.printVersion': 'Print Version',

    // Print
    'print.summary': 'Summary',
    'print.experience': 'Experience',
    'print.skills': 'Skills',
    'print.education': 'Education',
    'print.certifications': 'Certifications',
    'print.languages': 'Languages',
    'print.friendlyVersion': 'Print-friendly resume version',

    // Language toggle
    'lang.switch': 'ES',

    // Employment types
    'employment.full-time': 'Full-time',
    'employment.part-time': 'Part-time',
    'employment.contract': 'Contract',
    'employment.freelance': 'Freelance',

    // Skill categories
    'category.Móvil': 'Mobile',
    'category.Lenguajes': 'Languages',
    'category.Backend': 'Backend',
    'category.Cloud': 'Cloud',
    'category.DevOps': 'DevOps',

    // Misc
    'education.gpa': 'GPA',
    'skills.yearsSuffix': 'y',
  },
};

export function t(key: string, locale: Locale): string {
  return translations[locale][key] ?? key;
}
