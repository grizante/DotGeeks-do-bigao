document.addEventListener('DOMContentLoaded', () => {
    const languageBtn = document.getElementById('language-btn');
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;
    const featureContainers = document.querySelectorAll('.feature'); // Select all feature containers

    let currentLanguage = 'pt'; // Default language is Portuguese
    let isDarkMode = false; // Default theme is Light Mode

    const translations = {
        pt: {
            button: '🇧🇷 PT',
            heroTitle: 'Transforme seu Aprendizado Tech',
            heroSubtitle: 'Explore. Aprenda. Domine.',
            navHome: 'Home',
            navCourses: 'Cursos',
            navAbout: 'Sobre',
            navContact: 'Contato',
            ctaPrimaryCTA: 'Ver Cursos',
            ctaSecondaryCTA: 'Saiba Mais',
            featureCourses: 'Cursos Interativos',
            featureDescription1: 'Aprenda programação de forma divertida e prática',
            featureTech: 'Tecnologias Modernas',
            featureDescription2: 'Node.js, Express, MongoDB e muito mais',
            featureCommunity: 'Comunidade Geek',
            featureDescription3: 'Conecte-se com outros desenvolvedores',
            footerRights: '© 2024 DotGeeks. Todos os direitos reservados.'
        },
        en: {
            button: '🇺🇸 EN',
            heroTitle: 'Transform Your Tech Learning',
            heroSubtitle: 'Explore. Learn. Master.',
            navHome: 'Home',
            navCourses: 'Courses',
            navAbout: 'About',
            navContact: 'Contact',
            ctaPrimaryCTA: 'View Courses',
            ctaSecondaryCTA: 'Learn More',
            featureCourses: 'Interactive Courses',
            featureDescription1: 'Learn programming in a fun and practical way',
            featureTech: 'Modern Technologies',
            featureDescription2: 'Node.js, Express, MongoDB, and more',
            featureCommunity: 'Geek Community',
            featureDescription3: 'Connect with other developers',
            footerRights: '© 2024 DotGeeks. All rights reserved.'
        }
    };

    // Function to update language
    const updateLanguage = (lang) => {
        currentLanguage = lang;
        const content = translations[lang];

        // Update language button text
        languageBtn.textContent = content.button;

        // Update all elements with data-lang attributes
        document.querySelectorAll('[data-lang]').forEach((element) => {
            const key = element.dataset.lang;
            element.textContent = content[key];
        });
    };

    // Theme toggle functionality
    const updateTheme = () => {
        isDarkMode = !isDarkMode;

        // Toggle dark mode class on body
        body.classList.toggle('dark-mode');

        // Update theme button text
        themeBtn.textContent = isDarkMode ? '🌙 Dark' : '☀️ Light';

        
        featureContainers.forEach((feature) => {
            feature.style.backgroundColor = isDarkMode
                ? 'var(--custom)'
                : 'var(--secondary-color)';
        });
    };

    // Add event listeners
    themeBtn.addEventListener('click', updateTheme);

    languageBtn.addEventListener('click', () => {
        const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
        updateLanguage(newLanguage);
    });

    // Initialize default settings
    updateLanguage(currentLanguage); // Set initial language
    themeBtn.textContent = '☀️ Light'; // Set initial theme text

    featureContainers.forEach((feature) => {
        feature.style.backgroundColor = 'var(--secondary-color)';
    });
});
