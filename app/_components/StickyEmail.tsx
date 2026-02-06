import { SOCIAL_LINKS } from '@/lib/data';
import { Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const StickyEmail = () => {
    const getIcon = (name: string) => {
        switch (name) {
            case 'instagram':
                return <Instagram size={24} />;
            case 'linkedin':
                return <Linkedin size={24} />;
            default:
                return null;
        }
    };

    return (
        <div className="max-xl:hidden fixed bottom-32 right-10 block space-y-4">
            {SOCIAL_LINKS.filter(link => link.name === 'linkedin' || link.name === 'instagram').map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 text-muted-foreground transition-all hover:text-foreground block transform origin-center"
                    aria-label={link.name}
                >
                    {getIcon(link.name)}
                </a>
            ))}
        </div>
    );
};

export default StickyEmail;
