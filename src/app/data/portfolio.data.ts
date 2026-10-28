import { Portfolio } from '../models/portfolio.model';

/** ONE FILE TO EDIT: all site content lives here. */
export const PORTFOLIO: Portfolio = {
  profile: {
    name: 'Uzair Dor',
    title: 'Full-Stack Web Developer',
    tagline: 'I build secure, scalable web apps and REST APIs with Node.js, Angular, PHP and SQL, from database design to the final screen.',
    photo: '',
    stats: [
      { value: '4+', label: 'Years of experience' },
      { value: '16', label: 'Client projects delivered' },
      { value: '4', label: 'Figma wireframe sets' },
    ],
    summary:
      'Full-Stack Web Developer with 4+ years of experience building secure, scalable web applications and RESTful APIs using Node.js, Angular, PHP (CodeIgniter, Yii), MySQL, and Microsoft SQL Server. I have delivered 16 client projects spanning risk assessment, inventory management, healthcare reporting, e-commerce, and MIS platforms. I am skilled in backend architecture, database design, frontend development, and Figma wireframing, and I focus on clean, maintainable code that fits business requirements.',
    languages: ['Gujarati (Native)', 'Hindi (Conversational)', 'English (Conversational)'],
  },
  contact: {
    email: 'uzairfdor@gmail.com',
    phone: '+91 90998 90915',
    location: 'Rajkot, Gujarat, India',
    linkedin: 'https://in.linkedin.com/in/uzair-dor-087166173',
    github: '', // TODO: add your GitHub URL, e.g. 'https://github.com/yourname'
  },
  skills: [
    { category: 'Backend', items: ['Node.js', 'PHP', 'CodeIgniter', 'Yii', 'RESTful APIs', 'MVC Architecture', 'Authentication & Authorization'] },
    { category: 'Frontend', items: ['Angular', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Responsive Design'] },
    { category: 'Databases', items: ['MySQL', 'Microsoft SQL Server', 'Database Design & Optimization'] },
    { category: 'Design & Tools', items: ['Figma (Wireframing/UI Design)', 'Adobe Photoshop', 'Adobe Illustrator'] },
  ],
  experience: [
    {
      role: 'Full-Stack Web Developer', company: 'Addit Infotech', location: 'Remote', period: 'July 2022 – Present',
      highlights: [
        'Developed full-stack platforms with Node.js, Angular, and MySQL/MSSQL, including Risk Assessment, Stock Management, and Future-Fit for multiple clients.',
        'Converted the Excel-based Future-Fit Business Benchmark process into a web platform with Risk Profiler dashboards and sustainability tracking, replacing manual spreadsheet workflows.',
        'Built a multilingual Generic Family Tree portal and admin dashboard with hereditary cancer risk analysis, automated personalized reports, promo code management, and user controls.',
        'Engineered an inventory system (Grantine-Le-Pelley) with stock in/out, customizable invoicing, low-stock alerts, and delivery tracking.',
        'Delivered 9 PHP web applications (CodeIgniter, Yii) with role-based access, admin panels, payment tracking, and reporting, including MIS Vizn, Call Log System, and Buy Sell.',
        'Designed Figma wireframes for 4 projects and produced brochures and marketing materials, improving UI consistency and developer handoff.',
      ],
    },
  ],
  education: [
    { degree: 'Diploma in Computer Engineering', institute: 'B & B Institute of Technology, Anand, Gujarat', period: '2017 – 2019' },
    { degree: 'S.S.C.', institute: 'Shree Maharana Pratap High School, Kotda Sangani, Gujarat', period: '2017', note: '70%' },
  ],
  // Newest first. Add a `link: 'https://...'` to any project to show a "View project" button.
  projects: [
    { name: 'Grantine-Le-Pelley Stock & Inventory', period: 'Feb 2026 – Apr 2026', stack: ['Node.js', 'Angular'], description: 'Inventory system for job-site material planning with stock in/out, discounts, custom invoices, low-stock alerts, and delivery tracking.' },
    { name: 'Generic Family Tree Admin Portal', period: 'Jan 2026 – Mar 2026', stack: ['Angular'], description: 'Admin dashboard for managing users, promo codes, reporting, and the family and health data submitted through the GFT portal.' },
    { name: 'Generic Family Tree (GFT)', period: 'Oct 2025 – Mar 2026', stack: ['Angular'], description: 'Multilingual hereditary cancer risk portal that captures multi-generational history and generates personalized reports with next-step recommendations.' },
    { name: 'Future-Fit Progress Calculator', period: 'Apr 2025 – Present', stack: ['Node.js', 'Angular', 'Figma'], description: 'Web platform replacing an Excel benchmark process, with Risk Profiler dashboards, assessment forms, and sustainability tracking.' },
    { name: 'Stock Management', period: 'Feb 2025 – Apr 2025', stack: ['Node.js', 'Angular', 'Figma'], description: 'IT asset reporting for hardware service providers with Excel data upload, carbon-savings tracking, and certificate generation.' },
    { name: 'Risk Assessment', period: 'Dec 2024 – Present', stack: ['Node.js', 'Angular', 'Figma'], description: 'Businesses calculate risk with a BRA form and generate reports; admins manage profiles and scores.' },
    { name: 'Social Connect', period: 'Jul 2024 – Aug 2024', stack: ['Figma'], description: 'UI/UX wireframes for an Instagram-style social platform with event creation and venue management.' },
    { name: 'Cuisine JE', period: 'Apr 2024 – Jul 2024', stack: ['PHP Yii'], description: 'Food ordering platform where customers browse menus and order, and restaurants register and upload menus.' },
    { name: 'Buy Sell', period: 'Jan 2024 – Apr 2024', stack: ['PHP CodeIgniter'], description: 'Marketplace for listing and browsing products across categories, with listing management for buyers and sellers.' },
    { name: 'Vizn Teachers App', period: 'Dec 2023 – Jan 2024', stack: ['PHP CodeIgniter'], description: 'Helps teachers generate syllabus-aligned test papers by choosing board, medium, and standard.' },
    { name: 'MIS Vizn', period: 'Jun 2023 – Present', stack: ['PHP CodeIgniter'], description: 'Order and payment management with multiple roles (super admin, sales, PR, accounts, support) and business-wide reports.' },
    { name: 'Natural Discipleship', period: 'Mar 2023 – Jun 2023', stack: ['PHP CodeIgniter'], description: 'Users donate to listed places and families, read news, and submit prayer requests; all content is managed from an admin panel.' },
    { name: 'Mission Tours and Travels', period: 'Feb 2023 – Jul 2023', stack: ['PHP CodeIgniter'], description: 'Trip booking and customization platform for worldwide travel, with admin-editable trip details and prices.' },
    { name: 'Call Log System', period: 'Dec 2022 – Feb 2023', stack: ['PHP CodeIgniter'], description: 'Ticketing system to create tickets, assign them to executives, and track follow-ups after client calls.' },
    { name: 'Federal Appraisal', period: 'Nov 2022 – Aug 2023', stack: ['PHP CodeIgniter'], description: 'Users request to sell pre-owned jewelry, watches, and rings, get an estimated price, and sell to a certified buyer.' },
    { name: 'Trip Market', period: 'Oct 2022 – Nov 2022', stack: ['PHP CodeIgniter'], description: 'Lucky draw and referral-win platform.' },
  ],
};
