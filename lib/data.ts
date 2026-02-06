import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'iyadchirifi940@gmail.com',

    emailSubject: "Let's connect !",
    emailBody: 'Hi Iyad, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/4xeoz' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/iyad-cherifi-189a59292/',
    },
    {
        name: 'instagram',
        url: 'https://instagram.com/yourusername', // Replace with actual Instagram URL
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'MoneyGrad - Green Tech Jam Competition',
        slug: 'moneygrad',
        liveUrl: 'https://v0-moneygrad-website.vercel.app/',
        year: 2025,
        description: `
        An award-winning full-stack AI-powered financial literacy app built during the Green Tech Jam inter-university competition. Tackles UN SDG 4 (Quality Education) and SDG 8 (Economic Growth).<br/><br/>

        Key Features:<br/>
        <ul>
          <li>📊 OCR-to-AI pipeline for reading and classifying spending habits</li>
          <li>🤖 Google LLMs generate personalized financial feedback</li>
          <li>🐳 Dockerized microservices tested via SSH on local Linux machines</li>
          <li>🧠 Microlearning with gamified financial simulations</li>
        </ul>
        `,
        role: `
        Project Manager & AI Developer<br/>
        <ul>
          <li>🧩 Led a team of 6 developers/designers, running agile sprints and daily standups</li>
          <li>🔍 Built the AI pipeline using Google Vision OCR and LLMs</li>
          <li>💻 Deployed and tested the stack using Docker and local CI scripts</li>
        </ul>
        `,
        techStack: [
            'Next.js',
            'Google Vision API',
            'Docker',
            'Python',
            'LLMs',
            'MongoDB',
        ],
        thumbnail: '/projects/thumbnail/moneygrad.webp',
        longThumbnail: '/projects/long/moneygrad.webp',
        images: [],
    },
    {
        title: 'Blockchain Certificates - EncodeAI Hackathon',
        slug: 'encodeai',
        liveUrl: '',
        year: 2025,
        description: `
        Blockchain-based certification platform created for the EncodeAI Hackathon. Bridges AI assessments with on-chain credentials.<br/><br/>

        Key Features:<br/>
        <ul>
          <li>🪙 Solana blockchain for verifiable learning credentials</li>
          <li>🦄 Phantom wallet integration and Web3 auth</li>
          <li>🎨 Motion-enhanced UI using Framer Motion and GSAP</li>
        </ul>
        `,
        role: `
        Blockchain Engineer & Frontend Developer<br/>
        <ul>
          <li>🔗 Wrote Rust smart contracts to store learner data on Solana</li>
          <li>🔐 Implemented wallet auth and on-chain verification</li>
          <li>🎭 Designed interactive animations to boost engagement</li>
        </ul>
        `,
        techStack: [
            'Solana',
            'Rust',
            'React',
            'Web3',
            'Phantom',
            'Framer Motion',
            'GSAP',
        ],
        thumbnail: '/projects/thumbnail/encodeai.webp',
        longThumbnail: '/projects/long/encodeai.webp',
        images: [],
    },
    {
        title: 'NeuroBridge AI — Microsoft Hackathon',
        slug: 'neurobridge',
        liveUrl: '',
        year: 2025,
        description: `
        Personalized AI-powered learning assistant built for Microsoft Hackathon. Adapts content to user interests and reading level.<br/><br/>

        Key Features:<br/>
        <ul>
          <li>🎤 TTS voice generation tailored to user profile</li>
          <li>🧠 Azure OpenAI rephrasing for clearer explanations</li>
          <li>⚙️ Dynamic content pipelines</li>
        </ul>
        `,
        role: `
        Full-Stack AI Developer<br/>
        <ul>
          <li>🛠️ Integrated Azure OpenAI APIs for semantic rephrasing</li>
          <li>🗣️ Deployed adaptive text-to-speech voice synthesis</li>
          <li>📦 Designed data flow for personalized education delivery</li>
        </ul>
        `,
        techStack: [
            'Azure OpenAI',
            'Next.js',
            'TTS APIs',
            'Python',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/neurobridge.webp',
        longThumbnail: '/projects/long/neurobridge.webp',
        images: [],
    },
    {
        title: 'Moderating System — Surrey Hackathon 24',
        slug: 'university-moderating-system',
        liveUrl: '',
        year: 2024,
        description: `
        Moderation tool created at Surrey Hackathon 2024 to help educators manage roles and content access.<br/><br/>

        Key Features:<br/>
        <ul>
          <li>🔐 Role-based access control (RBAC)</li>
          <li>🌐 Django REST back-end with React front-end</li>
          <li>📂 AWS S3 for secure media storage</li>
        </ul>
        `,
        role: `
        Backend & Full-Stack Developer<br/>
        <ul>
          <li>📦 Built Django REST API with RBAC support</li>
          <li>🧩 Connected AWS S3 for scalable file storage</li>
          <li>🚀 Deployed MVP in under 72 hours</li>
        </ul>
        `,
        techStack: ['Django', 'React', 'AWS S3', 'Python', 'REST API'],
        thumbnail: '/projects/thumbnail/moderating-system.webp',
        longThumbnail: '/projects/long/moderating-system.webp',
        images: [],
    },
    {
        title: 'CompSoc Full-Stack Application',
        slug: 'compsoc-app',
        liveUrl: 'https://compsoc-lovat.vercel.app/',
        year: 2024,
        description: `
        Internal platform for University of Surrey’s Computing Society.<br/><br/>
        Key Features:<ul>
          <li>Next.js 14 App Router with Tailwind & Prisma</li>
          <li>Typed API layer and auth via Clerk</li>
          <li>Playwright testing and GitHub CI/CD</li>
        </ul>
        `,
        role: `
        Tech Lead & Web Master<br/>
        <ul>
          <li>Built and maintained the full app architecture</li>
          <li>Led 2 devs in Agile sprints and retrospectives</li>
        </ul>
        `,
        techStack: [
            'Next.js',
            'Prisma',
            'MongoDB',
            'Tailwind CSS',
            'Clerk',
            'Playwright',
        ],
        thumbnail: '/projects/thumbnail/compsoc.webp',
        longThumbnail: '/projects/long/compsoc.webp',
        images: [],
    },
    {
        title: 'Percent App',
        slug: 'percent-app',
        liveUrl: 'https://www.percentapp.org/',
        year: 2024,
        description: `
        A productivity tracker and goal management mobile/web app.<br/><br/>
        Key Features:<ul>
          <li>SwiftUI frontend for iOS</li>
          <li>Firebase backend with analytics</li>
          <li>Next.js dashboard for data sync</li>
        </ul>
        `,
        role: `
        Full-Stack Developer<br/>
        <ul>
          <li>Built iOS frontend and integrated Firebase</li>
          <li>Created web dashboard and user sync logic</li>
        </ul>
        `,
        techStack: ['SwiftUI', 'Next.js', 'Firebase', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/percent.webp',
        longThumbnail: '/projects/long/percent.webp',
        images: [],
    },
    {
        title: 'Full-Stack E-Commerce Web App',
        slug: 'ecommerce-shiraz',
        liveUrl: 'https://github.com/4xeoz/e-commerce-shiraz',
        year: 2023,
        description: `
        Secure and scalable full-stack online store with auth and payments.<br/><br/>
        Key Features:<ul>
          <li>Stripe payments, image CDN via Cloudinary</li>
          <li>OWASP top-10 compliant authentication</li>
        </ul>
        `,
        role: `
        Solo Full-Stack Developer<br/>
        <ul>
          <li>Implemented Stripe payments and secure auth</li>
          <li>Used Prisma/MongoDB for the data layer</li>
        </ul>
        `,
        techStack: ['Next.js', 'Prisma', 'MongoDB', 'Stripe', 'Cloudinary'],
        thumbnail: '/projects/thumbnail/ecommerce.webp',
        longThumbnail: '/projects/long/ecommerce.webp',
        images: [],
    },
    {
        title: 'Morse Code Decoder',
        slug: 'morse-code-decoder',
        liveUrl: 'https://github.com/4xeoz/Morse-Code-Decoder',
        year: 2023,
        description: `
        Hardware-level Morse code decoder using Raspberry Pi Pico.<br/><br/>
        Key Features:<ul>
          <li>Multiplexed 7-segment display</li>
          <li>Auditory feedback via buzzer</li>
        </ul>
        `,
        role: `
        Embedded Systems Developer<br/>
        <ul>
          <li>Built firmware in C++ for decoding logic</li>
          <li>Handled I/O multiplexing and signal timing</li>
        </ul>
        `,
        techStack: ['C++', 'Raspberry Pi Pico', 'Microcontrollers'],
        thumbnail: '/projects/thumbnail/morse.webp',
        longThumbnail: '/projects/long/morse.webp',
        images: [],
    },
    {
        title: 'Buy It — Cross-Platform Shopping App',
        slug: 'buy-it',
        liveUrl: '',
        year: 2023,
        description: `
        Flutter-based shopping list app for households.<br/><br/>
        Key Features:<ul>
          <li>Real-time sync via Firebase</li>
          <li>Google Analytics for behavior-driven updates</li>
        </ul>
        `,
        role: `
        Mobile App Developer<br/>
        <ul>
          <li>Implemented cross-device data sharing</li>
          <li>Optimized UX through analytics feedback</li>
        </ul>
        `,
        techStack: ['Flutter', 'Firebase', 'Google Analytics'],
        thumbnail: '/projects/thumbnail/buyit.webp',
        longThumbnail: '/projects/long/buyit.webp',
        images: [],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software / AI Developer Contributor',
        company: 'AI2030Marketplace',
        duration: 'Jan 2025 – Present',
    },
    {
        title: 'Founding Software Engineer (Equity)',
        company: 'Hushtap',
        duration: 'May 2025 – Present',
    },
    {
        title: 'Co-Founder & Tech Lead',
        company: 'WeTrends',
        duration: 'Apr 2025 – Present',
    },
    {
        title: 'Web Master',
        company: 'CompSoc SU',
        duration: 'Jun 2024 – Jun 2025',
    },
];
