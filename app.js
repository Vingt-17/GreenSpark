const translations = {
    ar: {
        aboutTitle: "من نحن؟",
        aboutContent: "S-Kotch هو منصة تهدف إلى دعم الطلاب المغاربة في مسارهم الدراسي والمهني...",
        visionTitle: "رؤيتنا",
        visionContent: "إلهام الطلاب لتحقيق إمكاناتهم الكاملة...",
        missionTitle: "مهمتنا",
        missionContent: "تقديم الدعم في جميع مراحل التعليم...",
        valuesTitle: "قيمنا",
        valuesContent: "التميز والابتكار...",
        resourcesTitle: "مواردنا",
        resourcesContent: "نوفر دروس فيديو وPDF...",
        contactTitle: "اتصل بنا",
        contactContent: "لأي استفسارات، تواصل معنا عبر البريد الإلكتروني..."
    },
    fr: {
        aboutTitle: "Qui sommes-nous ?",
        aboutContent: "S-Kotch est une plateforme dédiée à l'accompagnement...",
        visionTitle: "Notre vision",
        visionContent: "Inspirer les étudiants à atteindre leur plein potentiel...",
        missionTitle: "Notre mission",
        missionContent: "Offrir un accompagnement personnalisé...",
        valuesTitle: "Nos valeurs",
        valuesContent: "Excellence, accessibilité, innovation...",
        resourcesTitle: "Nos ressources",
        resourcesContent: "Vidéos, PDF, exercices...",
        contactTitle: "Nous contacter",
        contactContent: "Pour toute demande, contactez-nous par e-mail..."
    },
    en: {
        aboutTitle: "Who are we?",
        aboutContent: "S-Kotch is a platform dedicated to supporting students...",
        visionTitle: "Our Vision",
        visionContent: "Inspiring students to achieve their full potential...",
        missionTitle: "Our Mission",
        missionContent: "Providing support at every stage of education...",
        valuesTitle: "Our Values",
        valuesContent: "Excellence, accessibility, innovation...",
        resourcesTitle: "Our Resources",
        resourcesContent: "Videos, PDFs, exercises...",
        contactTitle: "Contact Us",
        contactContent: "For any inquiries, contact us via email..."
    }
};

function updateContent(language) {
    const translation = translations[language];
    document.querySelector("#about-us h1").textContent = translation.aboutTitle;
    document.querySelector("#about-us p").textContent = translation.aboutContent;

    document.querySelector("#vision h2").textContent = translation.visionTitle;
    document.querySelector("#vision p").textContent = translation.visionContent;

    document.querySelector("#mission h2").textContent = translation.missionTitle;
    document.querySelector("#mission p").textContent = translation.missionContent;

    document.querySelector("#values h2").textContent = translation.valuesTitle;
    document.querySelector("#values p").textContent = translation.valuesContent;

    document.querySelector("#resources h2").textContent = translation.resourcesTitle;
    document.querySelector("#resources p").textContent = translation.resourcesContent;

    document.querySelector("#contact h2").textContent = translation.contactTitle;
    document.querySelector("#contact p").textContent = translation.contactContent;
}

document.getElementById("language-select").addEventListener("change", (e) => {
    updateContent(e.target.value);
});

updateContent("ar");
