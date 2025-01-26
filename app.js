// Obtenez les références des éléments à traduire
const menuHome = document.getElementById('menu-home');
const menuCourses = document.getElementById('menu-courses');
const menuSkills = document.getElementById('menu-skills');
const joinUs = document.getElementById('join-us');
const contentTitle = document.getElementById('content-title');
const contentDescription = document.getElementById('content-description');

// Définir les traductions pour chaque langue
const translations = {
    ar: {
        home: "الرئيسية",
        courses: "الدورات",
        skills: "المهارات",
        joinUs: "انضم إلينا",
        title: "مرحبا بكم في S-Kotch",
        description: "هذه منصة تعليمية عبر الإنترنت تقدم دورات شاملة ومهارات عملية."
    },
    fr: {
        home: "Accueil",
        courses: "Cours",
        skills: "Compétences",
        joinUs: "Rejoignez-nous",
        title: "Bienvenue sur S-Kotch",
        description: "Ceci est une plateforme éducative en ligne offrant des cours complets et des compétences pratiques."
    },
    en: {
        home: "Home",
        courses: "Courses",
        skills: "Skills",
        joinUs: "Join us",
        title: "Welcome to S-Kotch",
        description: "This is an online educational platform offering comprehensive courses and practical skills."
    }
};

// Fonction pour changer la langue
function changeLanguage(language) {
    const translation = translations[language];
    if (translation) {
        menuHome.textContent = translation.home;
        menuCourses.textContent = translation.courses;
        menuSkills.textContent = translation.skills;
        joinUs.textContent = translation.joinUs;
        contentTitle.textContent = translation.title;
        contentDescription.textContent = translation.description;
    }
}

// Écouteur d'événement sur le sélecteur de langue
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
});

// Charger la langue par défaut (Darija)
changeLanguage('ar');
