export interface Venture {
    id: string;
    name: string;
    tagline: string;
    description: string;
    status: 'active' | 'upcoming' | 'acquired';
    highlights: string[];
    website: string;
}

export const ventures: Venture[] = [
    {
        id: '1',
        name: 'TechVenture One',
        tagline: 'Revolutionizing AI Services',
        description: 'A leading provider of AI-driven solutions for enterprise scalability and efficiency.',
        status: 'active',
        highlights: ['Served 50+ Enterprise Clients', 'Awarded Best AI Startup 2024'],
        website: 'https://example.com',
    },
    {
        id: '2',
        name: 'E-Com Next',
        tagline: 'Next Gen E-commerce',
        description: 'An innovative e-commerce platform empowering small businesses to reach global markets.',
        status: 'upcoming',
        highlights: ['Beta launch Q4 2025', 'Waitlist over 10k users'],
        website: '#',
    }
];
