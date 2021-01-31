require('dotenv').config();
const axios = require('axios').default;

// Fonction pour convertir les nom et prénom sans accent et en majuscule
const namesWithoutAccents = name => {

    name = name
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

    return name;
}

const checkSiren = {

    async checkInfos(info) {

        // Récupère les infos et on les met au format voulu
        const verifSiren = parseInt(info.siren_code, 10);
        const verifFirstname = namesWithoutAccents(info.firstname);
        const verifLastname = namesWithoutAccents(info.lastname);

        // Appel à l'API en fournissant le SIREN
        // Liste des champs à récupérer : siren, prenom1UniteLegale, dateDernierTraitementUniteLegale, nombrePeriodesUniteLegale, dateFin, dateDebut, nomUniteLegale, activitePrincipaleUniteLegale, nicSiegeUniteLegale

        const response = await axios.get(`https://api.insee.fr/entreprises/sirene/V3/siren/${verifSiren}?masquerValeursNulles=true?champs=siren%2C%20prenom1UniteLegale%2C%20dateDernierTraitementUniteLegale%2C%20nombrePeriodesUniteLegale%2C%20dateFin%2C%20dateDebut%2C%20nomUniteLegale%2C%20activitePrincipaleUniteLegale%2C%20nicSiegeUniteLegale`, {
            headers: {
                "Accept": "application/json",
                "Authorization" : `Bearer ${process.env.SIREN_TOKEN}`
            }
        });

        if(response.status != 200) {
            return null;
        }

        // Objet avec les infos INSEE dont un tableau de périodes d'unité légale
        const nurseBySiren = response.data.uniteLegale;

        // il faut récupérer l'objet du tableau pour lequel la date de fin est nulle
        // ce qui signifie que le professionel exerçe toujours
        const validPeriod = nurseBySiren.periodesUniteLegale.find(el => el.dateFin == null);

        // Si il n'y en a pas c'est que le professionnel n'a plus le droit d'exerçer
        if(!validPeriod) {
            return null;
        }

        // Objet représentant les infos de l'INSEE dont nous avons besoin pour vérifier
        const INSEE = {
            siren: nurseBySiren.siren,
            firstname: nurseBySiren.prenom1UniteLegale,
            lastname: validPeriod.nomUniteLegale,
            ape: validPeriod.activitePrincipaleUniteLegale,
            etablissement: validPeriod.nicSiegeUniteLegale
        };

        console.log(INSEE, "Infos INSEE");
        // Si le code APE est différent de '86.90D' le Siren ne correspond pas à :
        // Activités des infirmiers et des sages-femmes (8690D)
        if(INSEE.ape != '86.90D') {
            return null;
        }

        // On vérifie que les nom et prénom communiquées
        // correspondent à ceux enregistrés par l'INSEE
        if(INSEE.firstname != verifFirstname || INSEE.lastname != verifLastname) {
            return null
        }

        return true;

    }

};

module.exports = checkSiren;

