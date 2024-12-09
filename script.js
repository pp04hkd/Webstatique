script.js : 
const metiers = [
    {
        "nom": "Développeur Web",
        "details": `
            <h2>Parcours scolaire en Suisse pour devenir Développeur Web</h2>
            <ul>
                <li>École secondaire (orientation informatique si disponible)</li>
                <li>Formation professionnelle (CFC) en informatique avec spécialisation en développement d'applications</li>
                <li>Possibilité de suivre une HES (Haute École Spécialisée) en informatique</li>
                <li>Certifications spécifiques (comme un bootcamp ou un diplôme en développement web)</li>
            </ul>
            <p>Le développeur web crée des sites internet, des applications web et gère le développement technique d'une plateforme...</p>
        `,
        "question1": "interieur",
        "question2": "seul",
        "question3": "machines"
    },
    {
        "nom": "Analyste de données",
        "details": `
            <h2>Parcours scolaire en Suisse pour devenir Analyste de données</h2>
            <ul>
                <li>École secondaire (orientation scientifique ou économique)</li>
                <li>Formation professionnelle (CFC) en informatique ou en mathématiques appliquées</li>
                <li>HES ou Université : Bachelor en sciences des données, informatique ou mathématiques</li>
                <li>Master en sciences des données ou statistiques dans une université ou HES</li>
            </ul>
            <p>L'analyste de données transforme des données brutes en informations exploitables pour la prise de décisions stratégiques...</p>
        `,
        "question1": "interieur",
        "question2": "seul",
        "question3": "machines"
    },
    {
        "nom": "Architecte",
        "details": `
            <h2>Parcours scolaire en Suisse pour devenir Architecte</h2>
            <ul>
                <li>École secondaire (orientation technique ou artistique)</li>
                <li>Maturité fédérale en orientation artistique ou technique</li>
                <li>HES : Bachelor en architecture</li>
                <li>Université ou École polytechnique fédérale (EPF) : Master en architecture</li>
            </ul>
            <p>L'architecte conçoit des bâtiments et gère leur construction tout en respectant les contraintes techniques, réglementaires et environnementales...</p>
        `,
        "question1": "exterieur",
        "question2": "equipe",
        "question3": "gens"
    },
    {
        "nom": "Ingénieur civil",
        "details": `
            <h2>Parcours scolaire en Suisse pour devenir Ingénieur civil</h2>
            <ul>
                <li>École secondaire avec orientation scientifique ou technique</li>
                <li>Maturité fédérale (option mathématiques et physique ou sciences de l'ingénieur)</li>
                <li>HES : Bachelor en génie civil</li>
                <li>Université ou EPF : Master en génie civil</li>
            </ul>
            <p>L'ingénieur civil conçoit et supervise la construction de structures telles que des routes, ponts, bâtiments, et autres infrastructures...</p>
        `,
        "question1": "exterieur",
        "question2": "equipe",
        "question3": "gens"
    },
    {
        "nom": "Mécanicien",
        "details": `
            <h2>Parcours scolaire en Suisse pour devenir Mécanicien</h2>
            <ul>
                <li>École secondaire avec orientation technique</li>
                <li>Formation professionnelle (CFC) en mécanique ou mécatronicien</li>
                <li>Éventuellement une formation continue dans une HES ou des certifications spécifiques pour la spécialisation dans certains domaines</li>
            </ul>
            <p>Le mécanicien est chargé de l'entretien et des réparations des machines et des véhicules. Il peut se spécialiser dans différents domaines comme l'automobile, l'industrie ou l'aviation...</p>
        `,
        "question1": "interieur",
        "question2": "seul",
        "question3": "machines"
    }
];
 
function genererSuggestions() {
    const question1 = document.getElementById("question1").value;
    const question2 = document.getElementById("question2").value;
    const question3 = document.getElementById("question3").value;
 
    // Validation : vérifier que chaque question a une réponse
    if (question1 === "" || question2 === "" || question3 === "") {
        alert("Veuillez répondre à toutes les questions avant de continuer.");
        return;
    }
 
    const metierList = document.getElementById("metier-list");
    metierList.innerHTML = ''; // Effacer les résultats précédents
 
    // Filtrer les métiers en fonction des réponses
    const suggestions = metiers.filter(metier => {
        return metier.question1 === question1 &&
               metier.question2 === question2 &&
               metier.question3 === question3;
    });
 
    // Afficher les résultats
    if (suggestions.length > 0) {
        document.getElementById("suggestions").style.display = "block";
        suggestions.forEach(function(metier) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = metier.nom;
            a.onclick = function() { afficherDetails(metier); };
            li.appendChild(a);
            metierList.appendChild(li);
        });
    }
}
 
function afficherDetails(metier) {
    document.getElementById("metier-nom").textContent = metier.nom;
    document.getElementById("metier-details").innerHTML = metier.details;
    document.getElementById("suggestions").style.display = "none";
    document.getElementById("details").style.display = "block";
}
 
function retourAccueil() {
    document.getElementById("details").style.display = "none";
    document.getElementById("suggestions").style.display = "block";
}