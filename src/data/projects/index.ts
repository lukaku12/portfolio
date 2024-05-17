import IconLaravel from "@/components/icons/technologies/IconLaravel.vue";
import IconReact from "@/components/icons/technologies/IconReact.vue";
import IconTypescript from "@/components/icons/technologies/IconTypescript.vue";
import IconVue from "@/components/icons/technologies/IconVue.vue";
import IconCSS from "@/components/icons/technologies/IconCSS.vue";
import IconHTML from "@/components/icons/technologies/IconHTML.vue";
import IconJavascript from "@/components/icons/technologies/IconJavascript.vue";
import IconI18n from "@/components/icons/technologies/IconI18n.vue";
import IconAxios from "@/components/icons/technologies/IconAxios.vue";
import IconCypress from "@/components/icons/technologies/IconCypress.vue";
import IconPhpUnit from "@/components/icons/technologies/IconPhp.vue";
import IconPhp from "@/components/icons/technologies/IconPhp.vue";
import IconLaravelEcho from "@/components/icons/technologies/IconLaravelEcho.vue";
import IconJWT from "@/components/icons/technologies/IconJWT.vue";
import IconLaravelSocialite from "@/components/icons/technologies/IconLaravelSocialite.vue";
import IconESLint from "@/components/icons/technologies/IconESLint.vue";
import IconPrettier from "@/components/icons/technologies/IconPrettier.vue";
import IconTailwind from "@/components/icons/technologies/IconTailwind.vue";
import IconVitest from "@/components/icons/technologies/IconVitest.vue";
import IconPusher from "@/components/icons/technologies/IconPusher.vue";
import IconVite from "@/components/icons/technologies/IconVite.vue";
import IconWebsockets from "@/components/icons/technologies/IconWebsockets.vue";
import IconSqlite from "@/components/icons/technologies/IconSqlite.vue";
import IconMysql from "@/components/icons/technologies/IconMysql.vue";
import IconInertia from "@/components/icons/technologies/IconInertia.vue";

import MovieQuotesAuthLanding from "@/assets/images/projects/movie-quotes/auth-landing.png";
import MovieQuotesNotAuthLanding from "@/assets/images/projects/movie-quotes/not-auth-landing.png";
import MovieQuotesLogin from "@/assets/images/projects/movie-quotes/login.png";

import SocialSyncLanding from "@/assets/images/projects/social-sync/landing.png";
import SocialSyncLogin from "@/assets/images/projects/social-sync/login.png";
import SocialSyncRegister from "@/assets/images/projects/social-sync/register.png";

import CoronatimeAuthLanding from "@/assets/images/projects/coronatime/auth-landing.png";
import CoronatimeLogin from "@/assets/images/projects/coronatime/login.png";
import CoronatimeRegister from "@/assets/images/projects/coronatime/register.png";
import CoronatimeResetPassword from "@/assets/images/projects/coronatime/reset-password.png";
import CoronatimeStatistics from "@/assets/images/projects/coronatime/statistics.png";

import ProjectaDashboard from "@/assets/images/projects/projecta/dashboard.png";
import ProjectaLogin from "@/assets/images/projects/projecta/login.png";
import ProjectaProfileEdit from "@/assets/images/projects/projecta/profile-edit.png";
import ProjectaProjects from "@/assets/images/projects/projecta/projects.png";

import WizaryInfo from "@/assets/images/projects/wizary/info.png";
import WizaryLanding from "@/assets/images/projects/wizary/landing.png";
import WizaryMain from "@/assets/images/projects/wizary/main.png";

import EscFirst from "@/assets/images/projects/esc/first.png";
import EscSecond from "@/assets/images/projects/esc/second.png";
import EscThird from "@/assets/images/projects/esc/third.png";

import GskLanding from "@/assets/images/projects/gsk/landing.png";
import GskExplore from "@/assets/images/projects/gsk/explore.png";
import GskDiscover from "@/assets/images/projects/gsk/discover.png";
import GskCameraAccess from "@/assets/images/projects/gsk/camera-access.png";
import GskCamera from "@/assets/images/projects/gsk/camera.png";
import GskFeedback from "@/assets/images/projects/gsk/feedback.png";

import FlappyBirdLanding from "@/assets/images/projects/flappy-bird/landing.png";
import FlappyBirdPlaying from "@/assets/images/projects/flappy-bird/playing.png";

import BlockBreakerGame from "@/assets/images/projects/block-breaker/game.png";
import BlockBreakerGameWithSettings from "@/assets/images/projects/block-breaker/game-with-settings.png";

import ShoppingCart from "@/assets/images/projects/shopping-cart/cart.png";
import ShoppingCartShop from "@/assets/images/projects/shopping-cart/shop.png";

import CovidQuestionaryLanding from "@/assets/images/projects/covid-questionary/lading.png";
import CovidQuestionaryFirst from "@/assets/images/projects/covid-questionary/first.png";
import CovidQuestionarySecond from "@/assets/images/projects/covid-questionary/second.png";
import CovidQuestionaryFourth from "@/assets/images/projects/covid-questionary/fourth.png";


export enum SourceCode {
    frontend = "frontend",
    backend = "backend",
}

export enum Status {
    completed = "_completed",
    in_progress = "_in-progress",
    paused = "_paused",
}

enum Technologies {
    react = "react",
    vue = "vue",
    typescript = "typescript",
    css = "css",
    html = "html",
    php = "php",
    javascript = "javascript",
    laravel = "laravel",
    inertia = "inertia",
    i18n = "i18n",
    axios = "axios",
    cypress = "cypress",
    phpunit = "phpunit",
    laravel_echo = "laravel_echo",
    jwt = "jwt",
    laravel_socialite = "laravel_socialite",
    vue_router = "vue_router",
    ESLint = "ESLint",
    Prettier = "Prettier",
    pinia = "pinia",
    tailwind_css = "tailwind_css",
    vitest = "vitest",
    pusherJs = "pusherJs",
    vite = "vite",
    websockets = "websockets",
    mysql = "mysql",
    sqlite = "sqlite",
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    tag: string;
    status: {
        status: Status;
        color: string;
    };
    start_date: string;
    end_date: string;
    website: string;
    sourceCode: {
        [SourceCode.backend]: string;
        [SourceCode.frontend]: string;
    } | string;
    description: string;
    main_image: string;
    images: string[];
    main_technologies: any[];
    technologies: any;
}

export const status = {
    completed: {
        status: Status.completed,
        color: "#43D9AD",
    },
    in_progress: {
        status: Status.in_progress,
        color: "#FFD700",
    },
    paused: {
        status: Status.paused,
        color: "#FF6347",
    },
};

export const technologies = {
    react: {
        label: "React.js",
        value: Technologies.react,
        icon: IconReact,
        description: "Front-end library for building user interfaces.",
        color: "#61DAFB",
    },
    php: {
        label: "PHP",
        value: Technologies.php,
        icon: IconPhp,
        description: "A popular general-purpose scripting language that is especially suited to web development.",
        color: "#777BB4",
    },
    typescript: {
        label: "TypeScript",
        value: Technologies.typescript,
        icon: IconTypescript,
        description:
            "A typed superset of JavaScript that compiles to plain JavaScript.",
        color: "#007ACC",
    },
    laravel: {
        label: "Laravel",
        value: Technologies.laravel,
        icon: IconLaravel,
        description: "A PHP framework for web artisans.",
        color: "#FF2D20",
    },
    vue: {
        label: "Vue.js",
        value: Technologies.vue,
        icon: IconVue,
        description:
            "A progressive JavaScript framework for building interactive web interfaces.",
        color: "#42B883",
    },
    css: {
        label: "CSS",
        value: Technologies.css,
        icon: IconCSS,
        description:
            "A stylesheet language used to describe the presentation of a document written in HTML.",
        color: "#1572B6",
    },
    html: {
        label: "HTML",
        value: Technologies.html,
        icon: IconHTML,
        description:
            "The standard markup language for documents designed to be displayed in a web browser.",
        color: "#E34F26",
    },
    javascript: {
        label: "JavaScript",
        value: Technologies.javascript,
        icon: IconJavascript,
        description:
            "A programming language that conforms to the ECMAScript specification.",
        color: "#F7DF1E",
    },
    inertia: {
        label: "Inertia.js",
        value: "inertia",
        icon: IconInertia,
        description:
            "A library that allows you to create fully client-side rendered, single-page apps, without much of the complexity that comes with modern SPAs.",
        color: "#9553e9",
    },
    i18n: {
        label: "i18n",
        value: "i18n",
        icon: IconI18n,
        description:
            "Internationalization is the process of designing and preparing your app to be usable in different languages.",
        color: "#1E857BFF",
    },
    axios: {
        label: "Axios",
        value: "axios",
        icon: IconAxios,
        description:
            "Promise-based HTTP client for the browser and Node.js.",
        color: "#671ddf",
    },
    cypress: {
        label: "Cypress",
        value: "cypress",
        icon: IconCypress,
        description:
            "Fast, easy and reliable testing for anything that runs in a browser.",
        color: "#1E857BFF",
    },
    phpunit: {
        label: "PHPUnit",
        value: "phpunit",
        icon: IconPhpUnit,
        description: "The PHP testing framework.",
        color: "#4F5B93"
    },
    laravel_echo: {
        label: "Laravel Echo",
        value: "laravel_echo",
        icon: IconLaravelEcho,
        description:
            "A tool that makes it easy to bring the power of WebSockets to your Laravel applications.",
    },
    jwt: {
        label: "JWT",
        value: "jwt",
        icon: IconJWT,
        description:
            "JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.",
        color: "#d63aff"
    },
    laravel_socialite: {
        label: "Laravel Socialite",
        value: "laravel_socialite",
        icon: IconLaravelSocialite,
        description:
            "Laravel Socialite provides an expressive, fluent interface to OAuth authentication with Facebook, Twitter, Google, LinkedIn, GitHub, GitLab and Bitbucket.",
        color: "#ff2d20"
    },
    vue_router: {
        label: "Vue Router",
        value: "vue_router",
        icon: IconVue,
        description: "The official router for Vue.js.",
        color: "#42B883",
    },
    ESLint: {
        label: "ESLint",
        value: "ESLint",
        icon: IconESLint,
        description:
            "Find and fix problems in your JavaScript code.",
        color: "#4B32C3",
    },
    Prettier: {
        label: "Prettier",
        value: "Prettier",
        icon: IconPrettier,
        description:
            "An opinionated code formatter.",
        color: "#1A2B34",
    },
    pinia: {
        label: "Pinia",
        value: "pinia",
        icon: IconVue,
        description:
            "The Vue Store that you will actually enjoy using.",
        color: "#42B883",
    },
    tailwind_css: {
        label: "Tailwind CSS",
        value: "tailwind_css",
        icon: IconTailwind,
        description:
            "A utility-first CSS framework for rapidly building custom designs.",
        color: "#38B2AC",
    },
    vitest: {
        label: "Vitest",
        value: "vitest",
        icon: IconVitest,
        description:
            "A modern test runner for Vue.",
        color: "#42B883",
    },
    pusherJs: {
        label: "Pusher.js",
        value: "pusherJs",
        icon: IconPusher,
        description:
            "A Node.js client for Pusher.",
        color: "#4A154B",
    },
    vite: {
        label: "Vite",
        value: "vite",
        icon: IconVite,
        description:
            "A build tool that aims to provide a faster and leaner development experience for modern web projects.",
        color: "#646CFF",
    },
    websockets: {
        label: "WebSockets",
        value: "websockets",
        icon: IconWebsockets,
        description:
            "A communication protocol that provides full-duplex communication channels over a single TCP connection.",
        color: "#4A154B",
    },
    mysql: {
        label: "MySQL",
        value: "mysql",
        icon: IconMysql,
        description: "An open-source relational database management system.",
        color: "#00758F",
    },
    sqlite: {
        label: "SQLite",
        value: "sqlite",
        icon: IconSqlite,
        description: "A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.",
        color: "#003B57",
    },


};

export const main_technologies = [
    technologies.react,
    technologies.vue,
    technologies.laravel,
    technologies.php,
    technologies.typescript,
    technologies.css,
    technologies.html,
    technologies.javascript,
];

export const PROJECT_DATA: Project[] = [
    {
        id: 1,
        title: "Movie Quotes",
        slug: "movie-quotes",
        tag: "_social-network",
        description:
            "Movies Quotes is a professional platform that enables users to register, log in, and access a curated collection of inspiring movie quotes. Upon registration, users gain the ability to add, edit, and remove movie quotes, as well as view quotes contributed by other users. Additionally, users can engage with the content by leaving comments and expressing appreciation through likes." +
            "<br><br>" +
            "Furthermore, our platform offers robust email verification and password reset functionalities to ensure a secure and seamless user experience. For added convenience, users can also opt for authentication through their Google accounts." +
            "<br><br>" +
            "As part of my role in this project, I was responsible for creating the responsive front-end using Vue.js. To ensure a secure and efficient user experience, I implemented Jwt Token-based authentication. Additionally, I integrated the Laravel Echo package for real-time notifications, enabling users to receive instant updates when others comment on or like a movie quote." +
            "<br><br>" +
            "In addition to front-end development, I also handled the back-end tasks using Laravel. This involved designing and developing APIs with Jwt Token-based authentication. I meticulously crafted models, routes, and controllers to ensure smooth data flow and optimal functionality." +
            "<br><br>" +
            "To further enhance the user experience, I integrated Laravel Socialite to facilitate seamless authentication with Google accounts. This feature adds an extra layer of convenience for users who prefer using their Google credentials to access the platform." +
            "<br><br>" +
            "Throughout the development process, I prioritized quality and robustness by conducting rigorous testing. Utilizing Cypress, I crafted comprehensive tests to validate the front-end functionality. For the back-end, I wrote PHP unit tests, achieving 100% test coverage. This meticulous approach ensured that the platform was free of bugs and delivered a seamless user experience.",
        main_image: MovieQuotesAuthLanding,
        images: [
            MovieQuotesAuthLanding,
            MovieQuotesNotAuthLanding,
            MovieQuotesLogin,
        ],
        main_technologies: [technologies.laravel, technologies.vue],
        technologies: {
            [Technologies.vue]: technologies.vue,
            [Technologies.laravel]: technologies.laravel,
            [Technologies.php]: technologies.php,
            [Technologies.mysql]: technologies.mysql,
            [Technologies.css]: technologies.css,
            [Technologies.html]: technologies.html,
            [Technologies.javascript]: technologies.javascript,
            [Technologies.i18n]: technologies.i18n,
            [Technologies.axios]: technologies.axios,
            [Technologies.cypress]: technologies.cypress,
            [Technologies.phpunit]: technologies.phpunit,
            [Technologies.laravel_echo]: technologies.laravel_echo,
            [Technologies.jwt]: technologies.jwt,
            [Technologies.laravel_socialite]: technologies.laravel_socialite,
            [Technologies.vue_router]: technologies.vue_router,
            [Technologies.ESLint]: technologies.ESLint,
            [Technologies.Prettier]: technologies.Prettier,
            [Technologies.pinia]: technologies.pinia,
            [Technologies.tailwind_css]: technologies.tailwind_css,
            [Technologies.vitest]: technologies.vitest,
            [Technologies.pusherJs]: technologies.pusherJs,
            [Technologies.vite]: technologies.vite,
            [Technologies.websockets]: technologies.websockets,
        },
        status: status.completed,
        sourceCode: {
            frontend: 'https://github.com/lukaku12/upgraded-movie-quotes-front',
            backend: 'https://github.com/lukaku12/upgraded-movie-quotes-back',
        },
        website: "",
        start_date: "02-02-2022",
        end_date: "02-04-2022",
    },
    {
        id: 2,
        title: "SocialSync",
        slug: "social-sync",
        tag: "_social-network",
        description:
            "Welcome to Social Sync, a real-time social app designed to connect you with friends and family. Social Sync offers seamless real-time chat, allowing you to exchange messages instantly. Users can create posts, share updates, and manage their contacts effortlessly." +
            " The app supports voice and video calls, ensuring you can connect in the way that suits you best. Stay informed with instant notifications for messages, friend requests, and updates. With robust user authentication, " +
            "registering, logging in, and resetting passwords is simple and secure.<br><br> Social Sync also enables multimedia messaging, including the exchange of files, voice messages, GIFs, and emotes. " +
            "Customize your chat experience with custom names, colors, and emojis to make each conversation unique. Dive into the world of Social Sync today and enjoy a comprehensive suite of functionalities " +
            "designed to keep you connected and synchronized in real-time. <br><br>" +
            " I designed and developed this website entirely, from backend to frontend, ensuring a seamless and intuitive user experience.",
        main_image: SocialSyncLogin,
        images: [
            SocialSyncLanding,
            SocialSyncLogin,
            SocialSyncRegister,
        ],
        main_technologies: [technologies.laravel, technologies.vue],
        technologies: {
            [Technologies.vue]: technologies.vue,
            [Technologies.laravel]: technologies.laravel,
            [Technologies.php]: technologies.php,
            [Technologies.mysql]: technologies.mysql,
            [Technologies.css]: technologies.css,
            [Technologies.html]: technologies.html,
            [Technologies.javascript]: technologies.javascript,
            [Technologies.i18n]: technologies.i18n,
            [Technologies.axios]: technologies.axios,
            [Technologies.cypress]: technologies.cypress,
            [Technologies.phpunit]: technologies.phpunit,
            [Technologies.laravel_echo]: technologies.laravel_echo,
            [Technologies.jwt]: technologies.jwt,
            [Technologies.laravel_socialite]: technologies.laravel_socialite,
            [Technologies.vue_router]: technologies.vue_router,
            [Technologies.ESLint]: technologies.ESLint,
            [Technologies.Prettier]: technologies.Prettier,
            [Technologies.pinia]: technologies.pinia,
            [Technologies.tailwind_css]: technologies.tailwind_css,
            [Technologies.vitest]: technologies.vitest,
            [Technologies.pusherJs]: technologies.pusherJs,
            [Technologies.vite]: technologies.vite,
            [Technologies.websockets]: technologies.websockets,
        },
        status: status.in_progress,
        sourceCode: {
            frontend: 'https://github.com/lukaku12/social-sync-front-vue',
            backend: 'https://github.com/lukaku12/social-sync-back',
        },
        website: "",
        start_date: "02-04-2024",
        end_date: "",
    },
    {
        id: 3,
        title: "Projecta",
        slug: "projecta",
        tag: "_project-management",
        description: "Projecta your all-in-one project management solution designed to streamline collaboration and productivity. Built with React, Inertia.js, and Laravel, Projecta offers a seamless user experience with powerful functionalities to enhance project organization and efficiency.<br><br>" +
            "Starting with a secure login page, Projecta ensures user privacy and data security. New users can easily register for an account, while convenient password reset functionalities are in place for those who may need assistance accessing their accounts. Leveraging Laravel's email capabilities, Projecta enables efficient communication with users, including email notifications for password resets and account verifications.<br><br>" +
            "Once logged in, users are greeted with a dynamic dashboard where they can effortlessly manage projects, tasks, and assignments. From creating new projects to assigning tasks and tracking progress, Projecta empowers users with comprehensive project management tools at their fingertips. Users can easily view pending, in-progress, and completed tasks, facilitating efficient collaboration and workflow management.<br><br>" +
            "In addition to project management features, Projecta allows users to customize their profiles, providing options to edit and update personal information. The platform also implements user roles, including default and admin roles, enabling flexible access control and permissions management.<br><br>" +
            "Projecta is designed with a user-centric approach, offering a sleek and intuitive interface optimized for usability and accessibility. Whether accessed on desktop or mobile devices, users can navigate seamlessly, making Projecta the go-to solution for project management needs.<br><br>" +
            "Projecta represents the culmination of meticulous design and development efforts, with every aspect of the project crafted by Me. From concept to execution, Projecta embodies a commitment to providing users with a reliable and efficient project management tool to drive success and productivity.",
        main_image: ProjectaDashboard,
        images: [
            ProjectaDashboard,
            ProjectaLogin,
            ProjectaProfileEdit,
            ProjectaProjects,
        ],
        sourceCode: "https://github.com/lukaku12/project-managment",
        start_date: "03-23-2024",
        end_date: "04-12-2024",
        main_technologies: [technologies.laravel, technologies.react],
        technologies: {
            [Technologies.react]: technologies.react,
            [Technologies.laravel]: technologies.laravel,
            [Technologies.php]: technologies.php,
            [Technologies.inertia]: technologies.inertia,
            [Technologies.css]: technologies.css,
            [Technologies.html]: technologies.html,
            [Technologies.mysql]: technologies.mysql,
            [Technologies.javascript]: technologies.javascript,
            [Technologies.tailwind_css]: technologies.tailwind_css,
            [Technologies.axios]: technologies.axios,
        },
        website: "",
        status: status.completed,
    },
    {
        id: 4,
        title: "Wizary",
        slug: "wizary",
        tag: "_crypto-casino",
        description: "Wizary is an innovative crypto casino website where users can seamlessly log in and play a variety of games using cryptocurrency. Implementing token authentication for security, the platform offers role-based access, ensuring customized permissions for different user levels. The website boasts an intuitive admin panel, enabling comprehensive control over user management, game selection, transactions, and content editing, empowering administrators to tailor the platform to their preferences.<br><br> Throughout the project, I contributed to various aspects including optimization and design, ensuring fast performance, visually appealing interfaces, and the successful implementation of essential features like token authentication. Wizary represents the future of online gaming, merging the thrill of casino entertainment with the security and transparency of cryptocurrency, offering a premium gaming experience for crypto enthusiasts worldwide.",
        main_image: WizaryLanding,
        images: [
            WizaryLanding,
            WizaryMain,
            WizaryInfo,
        ],
        status: status.completed,
        start_date: "06-23-2022",
        end_date: "03-15-2023",
        main_technologies: [technologies.laravel, technologies.vue],
        technologies: {
            [Technologies.vue]: technologies.vue,
            [Technologies.laravel]: technologies.laravel,
            [Technologies.php]: technologies.php,
            [Technologies.mysql]: technologies.mysql,
            [Technologies.css]: technologies.css,
            [Technologies.html]: technologies.html,
            [Technologies.javascript]: technologies.javascript,
            [Technologies.i18n]: technologies.i18n,
            [Technologies.axios]: technologies.axios,
            [Technologies.cypress]: technologies.cypress,
            [Technologies.phpunit]: technologies.phpunit,
            [Technologies.laravel_echo]: technologies.laravel_echo,
            [Technologies.jwt]: technologies.jwt,
            [Technologies.laravel_socialite]: technologies.laravel_socialite,
            [Technologies.vue_router]: technologies.vue_router,
            [Technologies.ESLint]: technologies.ESLint,
            [Technologies.Prettier]: technologies.Prettier,
            [Technologies.pinia]: technologies.pinia,
            [Technologies.tailwind_css]: technologies.tailwind_css,
            [Technologies.vitest]: technologies.vitest,
            [Technologies.pusherJs]: technologies.pusherJs,
            [Technologies.websockets]: technologies.websockets,
        },
        website: "https://wizary.com/",
        sourceCode: "_private",
    },
    {
        id: 5,
        title: "Esc - solar",
        slug: "esc",
        tag: "_eccomerce",
        description: "Welcome to Energy Service Center, your premier destination for comprehensive energy solutions in the Netherlands. Specializing in sustainable and efficient energy services, we are committed to helping you optimize your energy usage and reduce costs. Our expertise covers a wide range of services, including energy audits, consultancy, and the implementation of renewable energy systems.<br><br>" +
            "I played a key role in developing this website, utilizing React and Laravel to create a seamless and responsive user experience. My primary focus was on the development of the admin panel, ensuring it is intuitive and efficient for managing the various aspects of our services.<br>" +
            "At Energy Service Center, we offer tailored energy solutions for both residential and commercial clients. Our services include energy efficiency assessments, solar panel installations, and innovative energy management systems designed to meet your specific needs. Our team of experienced professionals is dedicated to delivering high-quality, reliable services that help you achieve greater energy efficiency and sustainability.<br><br>" +
            "Explore our website to learn more about our services, view case studies, and find out how we can assist you in creating a more energy-efficient future. Whether you are looking to reduce your carbon footprint, lower your energy bills, or upgrade your energy systems, Energy Service Center is your trusted partner in sustainable energy solutions.",
        main_image: EscThird,
        images: [
            EscFirst,
            EscSecond,
            EscThird,
        ],
        status: status.completed,
        start_date: "03-23-2023",
        end_date: "06-15-2023",
        main_technologies: [technologies.laravel, technologies.react],
        technologies: {
            [Technologies.react]: technologies.react,
            [Technologies.laravel]: technologies.laravel,
            [Technologies.php]: technologies.php,
            [Technologies.mysql]: technologies.mysql,
            [Technologies.css]: technologies.css,
            [Technologies.html]: technologies.html,
            [Technologies.javascript]: technologies.javascript,
            [Technologies.i18n]: technologies.i18n,
            [Technologies.axios]: technologies.axios,
            [Technologies.cypress]: technologies.cypress,
            [Technologies.phpunit]: technologies.phpunit,
            [Technologies.jwt]: technologies.jwt,
            [Technologies.ESLint]: technologies.ESLint,
            [Technologies.Prettier]: technologies.Prettier,
            [Technologies.tailwind_css]: technologies.tailwind_css,
            [Technologies.websockets]: technologies.websockets,
        },
        website: "https://www.energyservicecenter.nl/",
        sourceCode: "_private",
    },
    {
        id: 6,
        title: "Gsk - medical",
        slug: "gsk",
        tag: "_medical",
        description: "GSK is leading the charge with its revolutionary approach to user engagement and functionality. Built from the ground up with HTML, CSS, and JavaScript, GSK is a dynamic web application comprising six distinct pages, each meticulously crafted to provide users with a seamless browsing experience like no other.<br><br>" +
            "From the moment users land on the captivating Landing page, they are greeted with stunning visuals and compelling content that invite them to explore further. With an intuitive layout and easy navigation, the Explore page beckons users to delve deeper, where they uncover a treasure trove of features and content carefully curated for their enjoyment.<br><br>" +
            "The Discover page takes user engagement to new heights, offering an interactive hub where users can unearth hidden gems and unlock exciting opportunities. But the innovation doesn't stop there. GSK goes beyond the traditional boundaries of web development with its Camera Access page, giving users the power to harness the capabilities of their device's camera for immersive experiences and innovative functionalities.<br><br>" +
            "And for those seeking the ultimate in virtual reality experiences, GSK delivers with its Virtual Reality page, transporting users to immersive environments brought to life by cutting-edge technologies. But perhaps most importantly, GSK values user feedback, providing a seamless way for users to share their thoughts and experiences with the GSK team, driving ongoing improvements and enhancements to the platform.<br><br>" +
            "Developed in record time, GSK is a testament to the power of efficient development and thoughtful design. With its fully responsive layout and robust functionality, GSK sets a new standard for web applications, offering users an unparalleled experience that seamlessly blends form and function. As users journey through the captivating interface of GSK, their feedback fuels ongoing enhancements, ensuring that GSK remains at the forefront of innovation and user satisfaction.",
        main_image: GskLanding,
        images: [
            GskLanding,
            GskExplore,
            GskDiscover,
            GskCameraAccess,
            GskCamera,
            GskFeedback,
        ],
        status: status.completed,
        start_date: "03-24-2023",
        end_date: "04-10-2023",
        main_technologies: [technologies.html, technologies.javascript],
        technologies: {
            [Technologies.css]: technologies.css,
            [Technologies.html]: technologies.html,
            [Technologies.javascript]: technologies.javascript,
        },
        website: "",
        sourceCode: "_private",
    },
    {
        id: 7,
        title: "Coronatime",
        slug: "coronatime",
        tag: "_covid-19-tracker",
        description:
            "CoronaTime is your comprehensive platform designed to track and monitor COVID-19 cases worldwide, providing users with up-to-date information and essential features to stay informed and connected during these challenging times. Built with the powerful Laravel backend and Vue 3 frontend framework, CoronaTime offers a seamless user experience with robust functionality. <br><br>" +
            "The platform begins with a secure login page, ensuring user privacy and data protection. New users can easily register for an account, while those who may have forgotten their password can utilize the convenient forget and reset password pages, all seamlessly integrated into the system.<br><br>" +
            "Utilizing Laravel's email sending capabilities, CoronaTime enables users to receive important notifications and updates, including password reset links and account verification emails. This ensures that users can stay connected and informed wherever they are.<br><br>" +
            "Once authenticated, users are greeted with a personalized dashboard, providing a comprehensive overview of new cases, total cases, and deaths, empowering users with vital statistics at a glance. From the dashboard, users can seamlessly navigate to explore global statistics, allowing them to delve into country-specific data and trends, gaining valuable insights into the global impact of COVID-19.<br><br>" +
            "Behind the scenes, CoronaTime employs Laravel console commands and background tasks to fetch updated COVID-19 data every 24 hours, ensuring that users have access to the most current information available. This automated process streamlines data management, allowing users to rely on CoronaTime for accurate and timely updates.<br><br>" +
            "With its sleek and intuitive design crafted with Tailwind CSS, CoronaTime offers a user-friendly interface that prioritizes usability and accessibility. Whether accessing the platform on desktop or mobile devices, users can navigate with ease, making CoronaTime a valuable tool for staying informed and empowered during the pandemic.<br><br>" +
            "CoronaTime is the culmination of dedication and expertise, with every aspect of the project meticulously designed and implemented by Me. From concept to completion, CoronaTime represents a commitment to providing users with a reliable and indispensable resource for navigating the challenges of COVID-19.",
        sourceCode: "https://github.com/lukaku12/coronatime",
        main_image: CoronatimeAuthLanding,
        images: [
            CoronatimeAuthLanding,
            CoronatimeStatistics,
            CoronatimeLogin,
            CoronatimeRegister,
            CoronatimeResetPassword,
        ],
        main_technologies: [technologies.laravel, technologies.vue],
        technologies: {
            [Technologies.vue]: technologies.vue,
            [Technologies.laravel]: technologies.laravel,
            [Technologies.php]: technologies.php,
            [Technologies.css]: technologies.css,
            [Technologies.html]: technologies.html,
            [Technologies.mysql]: technologies.mysql,
            [Technologies.javascript]: technologies.javascript,
            [Technologies.tailwind_css]: technologies.tailwind_css,
            [Technologies.axios]: technologies.axios,
            [Technologies.phpunit]: technologies.phpunit,
        },
        website: "",
        status: status.completed,
        start_date: "05-14-2022",
        end_date: "06-03-2022",
    },
    {
        id: 8,
        title: "Shopping Cart",
        slug: "shopping-cart",
        tag: "_ecommerce",
        description: "Discover the convenience of online shopping with React Store, a user-friendly app built with React and TypeScript. Seamlessly navigate through three essential pages: Home, Store, and About, each designed to enhance your shopping experience. Browse through a diverse selection of items in the Store page, where you can easily add desired products to your cart with a simple click. With intuitive controls, you can effortlessly manage your shopping cart, adding or removing items as needed. Whether you're looking for everyday essentials or unique finds, React Store offers a streamlined shopping experience tailored to your needs. Explore, shop, and learn more about the app with the About page, providing insights into its development and features. Experience the future of online shopping with React Store, where convenience meets innovation.",
        main_image: ShoppingCartShop,
        images: [
            ShoppingCartShop,
            ShoppingCart,
        ],
        status: status.completed,
        start_date: "10-11-2023",
        end_date: "10-24-2023",
        main_technologies: [technologies.react, technologies.typescript],
        technologies: {
            [Technologies.css]: technologies.css,
            [Technologies.html]: technologies.html,
            [Technologies.javascript]: technologies.javascript,
            [Technologies.react]: technologies.react,
            [Technologies.typescript]: technologies.typescript,
        },
        website: "",
        sourceCode: "https://github.com/lukaku12/shopping-cart",
    },
    {
        id: 9,
        title: "Covid Questionary",
        slug: "covid-questionary",
        tag: "_form",
        description: "The Covid Questionnaire is an application that Redberry's new employees need to complete to understand their attitude towards the Covid situation and how Redbury can improve and contribute to the company's internal Covid policy. The questionnaire consists of 6 pages:<br><br>" +
            "Questionnaire home page," +
            "Personal Information," +
            "Developer Covid-status," +
            "Are you vaccinated or not?," +
            "Preferred covid policy in the company," +
            "Thanks page",
        main_image: CovidQuestionaryFourth,
        images: [
            CovidQuestionaryFourth,
            CovidQuestionaryLanding,
            CovidQuestionaryFirst,
            CovidQuestionarySecond,
        ],
        status: status.completed,
        start_date: "04-11-2022",
        end_date: "04-24-2022",
        main_technologies: [technologies.vue, technologies.tailwind_css],
        technologies: {
            [Technologies.vue]: technologies.vue,
            [Technologies.tailwind_css]: technologies.tailwind_css,
            [Technologies.css]: technologies.css,
            [Technologies.html]: technologies.html,
            [Technologies.javascript]: technologies.javascript,
            [Technologies.typescript]: technologies.typescript,
        },
        website: "",
        sourceCode: "https://github.com/lukaku12/covid-questionary",
    },
    {
        id: 10,
        title: "flappy bird",
        slug: "flappy-bird",
        tag: "_canvas-game",
        description: "Experience the nostalgia of Flappy Bird in your browser with this HTML, CSS, and JavaScript rendition. Navigate through a series of obstacles, tapping your way to victory with simple yet addictive gameplay. Built with smooth animations and responsive design, this web version of Flappy Bird brings the beloved classic to life on any device. Get ready to flap your way to high scores in this addictive web adaptation of the timeless favorite.",
        main_image: FlappyBirdPlaying,
        images: [
            FlappyBirdLanding,
            FlappyBirdPlaying,
        ],
        status: status.completed,
        start_date: "09-10-2023",
        end_date: "09-24-2023",
        main_technologies: [technologies.html, technologies.javascript],
        technologies: {
            [Technologies.css]: technologies.css,
            [Technologies.html]: technologies.html,
            [Technologies.javascript]: technologies.javascript,
        },
        website: "https://lukaku12.github.io/flappy-bird/",
        sourceCode: "https://github.com/lukaku12/flappy-bird",
    },
    {
        id: 11,
        title: "Block Breaker",
        slug: "block-breaker",
        tag: "_canvas-game",
        description: "Block Breaker: A Classic Arcade Experience on Your Browser <br><br>" +
            "Embark on a journey back to the golden age of gaming with Block Breaker, a thrilling HTML, CSS, and JavaScript canvas creation. Control the paddle and guide the ball to demolish blocks in this addictive twist on the classic paddle ball game. With smooth animations and intuitive controls, Block Breaker delivers an authentic arcade experience right in your browser. Customize your gameplay with adjustable settings, allowing you to tweak the game speed and block size to your liking. Get ready to test your reflexes and aim as you embark on an epic quest to smash through barriers and claim victory in this captivating web adventure.",
        main_image: BlockBreakerGame,
        images: [
            BlockBreakerGame,
            BlockBreakerGameWithSettings,
        ],
        status: status.completed,
        start_date: "10-11-2023",
        end_date: "10-24-2023",
        main_technologies: [technologies.html, technologies.javascript],
        technologies: {
            [Technologies.css]: technologies.css,
            [Technologies.html]: technologies.html,
            [Technologies.javascript]: technologies.javascript,
        },
        website: "https://lukaku12.github.io/ball-game/",
        sourceCode: "https://github.com/lukaku12/ball-game",
    },


];

export default PROJECT_DATA;











