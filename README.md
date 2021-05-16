# Ocare 

## Application Web pour les infimiers libéraux

![Ocare image](./Ocare.PNG "Ocare dashboard")

## Tech

  - react
  - redux
  - sass
  - sqitch
  - express
  - postgres
  - heroku

## Pourquoi ?

Les infirmiers libéraux doivent s’occuper de patients 365 jours par an.
Pour qu’il n’y ait pas de discontinuité dans le soin mais que les infirmiers puissent avoir des jours de repos, ils s’organisent en équipe, regroupés au sein d’un cabinet. 
Chaque cabinet est composé au minimum de deux infirmiers.
Le nombre de patients au sein d’un cabinet est important, les journées sont très chargées et les infirmiers manquent de temps pour bien s'organiser et bien communiquer. 
Chaque jour un infirmier prend en charge une “tournée” qui est en fait la liste des patients à voir ainsi que ce qui doit leur être fait comme soin. 
Certains patients sont récurrents et donc vus tous les jours ou 2 jours, d’autres viennent en plus en fonction de besoins ponctuels.
Après leurs tournées les équipes se téléphonent pour se transmettre les informations importantes. 
Ce sont ces transmissions d’informations que nous avons cherché à optimiser avec notre application afin que les infirmiers passent moins de temps le soir sur cette tâche alors que leur journée a déjà été bien occupée.
Nous avons pensé une application tout d’abord mobile car l’infirmier libéral est toujours en déplacement et utilise plutôt son téléphone.
Deux types d'entités pourront avoir recours à notre application : les infirmiers et les cabinets.
Ce sont les cabinets qui disposent d’une patientèle qui est répartie entre les différents infirmiers. 
Le cabinet disposera donc du droit d’inviter des infirmiers à composer son staff et à confier sa patientèle.
De son côté, chaque infirmier peut travailler dans plusieurs cabinets.
Il lui sera donc possible après création de son profil de rejoindre un ou plusieurs cabinets. 
En sélectionnant un cabinet il aura accès à un dashboard reprenant les transmissions, les tournées et les patients de ce cabinet.
