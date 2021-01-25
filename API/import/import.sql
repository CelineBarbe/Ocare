BEGIN;

TRUNCATE TABLE nurse, cabinet, cabinet_has_nurse, patient, logbook, patient_has_logbook RESTART IDENTITY;

-- Insertions d'infirmiers
INSERT INTO nurse(siren_code, firstname, lastname, email, password, phone_number) VALUES
('917222465', 'Olivier', 'Raynal', 'olivier@raynal.com', 'gyefgecz', '0612345678'),
('586239453', 'Camille', 'Janvier', 'camille.janvier@gmail.com', 'Monchat1', '0265341896'),
('326985275', 'Carine', 'Guerino', 'carine.guerino@hotmail.fr', '24011981', '0678952264'),
('917594153', 'Jérémy', 'Chemin', 'j.chemin@gmail.com', 'ADB28964', '0765289512'),
('295632456', 'Sandrine', 'Pasquier', 'sandrine.pasquier@hotmail.fr', 'Lottie11', '0349586213'),
('561235164', 'Judith', 'Noleen', 'judith.noleen@gmail.com', 'Jgreed', '0175089235'),
('829442366', 'Ludivine', 'Marques', 'marques.ludivine@yahoo.fr', 'Groot', '0248966542'),
('264584652', 'Marjolaine', 'Archer', 'm.archer@gmail.com', 'Hutte85', '0686523495'),
('956425351', 'Victor', 'Huster', 'victor.huster@gmail.com', 'jambonetdemi', '0786523621'),
('946532125', 'Luc', 'Jasmin', 'luc.jasmin@hotmail.fr', 'poppie25', '0696526322'),
('321652456', 'Pauline', 'Revest', 'p.revest@gmail.com', 'poulichedu22', '0362326659'),
('362511298', 'Noé', 'Ambert', 'noe.ambert@hotmail.fr', '265532', '0654126398'),
('466898234', 'Matthieu', 'Balon', 'Matthieu.balon@gmail.com', 'toto4ever', '0723784598'),
('982012367', 'Olivia', 'Halinski', 'olivia.halinski@gmail.com', 'pokh78zKC', '0627945800'),
('982635287', 'Pauline', 'Humbert', 'pauline.humbert@gmail.com', 'AZTYHD58', '0610946758'),
('098238475', 'Edouard', 'Anselin', 'edouard.ancelin@gmail.com', 'loto145', '0634892490');

-- Insertions des cabinets

INSERT INTO cabinet(name, address, zip_code, city, phone_number, pin_code, owner_id) VALUES
('Cabinet Modjo', '12 impasse des fleurs', '45210', 'Charmille', '0248956325', 'secretcode', 2),
('Cabinet Pezzo', '24 rue du val Fleury', '78200', 'Grassoully', '0465235212', 'codepin', 3),
('Cabinet Responza', '6 chemin du 16 novembre 1956', '18200', 'Orval', '0231624524', 'pin1234', 3),
('Cabinet Bota', '5 rue Firmin', '67000', 'Strasbourg', '0334985765', 'secret4', 5);

-- Insertions cabinet_has_nurse

INSERT INTO cabinet_has_nurse(cabinet_id, nurse_id, default_cabinet, allowed) VALUES
(1, 1, default, default), -- Olivier Raynal - cab 1
(1, 2, true, default),
(1, 4, true, default),
(1, 6, true, default),
(1, 8, true, default),
(1, 14, default, default),
(1, 16, default, default),
(2, 1, true, default), -- Olivier Raynal - cab 2
(2, 2, false, default),
(2, 3, true, default),
(2, 4, default, default),
(2, 5, default, default),
(2, 6, default, default),
--(2, 7, default, default), -- A supprimer doublon avec la ligne 53
(2, 10, true, default),
(2, 12, true, default),
--(3, 3, true, default), -- A supprimer doublon avec la ligne 52
(3, 3, default, default),
(2, 7, true, default),
(3, 9, default, default),
(3, 10, default, default),
(3, 11, true, default),
(3, 12, default, default),
(3, 14, default, default),
(3, 15, true, default),
(4, 5, true, default),
(4, 7, default, default),
(4, 8, default, default),
(4, 9, true, default),
(4, 11, default, default),
(4, 13, true, default),
(4, 14, true, default),
(4, 15, default, default),
(4, 16, default, default);


-- insertions patients

INSERT INTO patient(firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking, cabinet_id) VALUES

-- Cabinet 1 
('Ninette', 'Cressac', '1966-02-11', 'F', '76 rue du Gue Jacquet', '78400', 'Chatou', '0108715496', '', false, 1, 1),
('Lirienne', 'Fréchette', '1926-06-29', 'F', '74 rue des Coudriers', '68100', 'Mulhouse', '0352975656', '', false, 1, 1),
('Honoré', 'Cuillerier', '1934-01-30', 'M', '39 rue de Geneve', '80080', 'Amiens', '0373617017', '', false, 1, 1),
('Odo', 'Brunelle', '1922-10-13', 'M', '58 rue Nationale', '75003', 'Paris', '0193616709', 'ATCD de K du poumon', true, 1, 1),
('Jacqueline', 'Lessard', '1941-03-07', 'F', '48 rue Joseph Vernet', '84000', 'Avignon', '0425053402', 'Première opération de fistule rectale non compliquée', true, 2, 1),
('Gaspar', 'Querry', '1960-12-07', 'M', '43 rue des frères Ruellan', '95110', 'Sannois', '0176954864', '', false, 1, 1),
('Leroy', 'Berger', '1954-11-13', 'M', '21 avenue de Provence', '56000', 'Vannes', '0215977097', 'Mélanome au niveau du coude en 1998', false, 1, 1),
('Marjolaine', 'Caillot', '1952-01-20', 'F', '22 rue de la Pompe', '78200', 'Mantes la Jolie', '010415526', 'K du sein sous chimio', true, 1, 1),
('Jeanine', 'Brian', '1971-10-24', 'F', '73 rue du Faubourg National', '65000', 'Tarbes', '0556648868', '', false, 1, 1),
('Virginie', 'Berie', '1985-11-03', 'F', '79 rue Epeule', '76000', 'Rouen', '0276143132', '', false, 1, 1),
('Coralie', 'Tisserand', '1966-04-30', 'F', '4 rue du Faubourg National', '95150', 'Taverny', '0132837995', 'ATCD de cancer du col de l utérus, résection utérine', false, 1, 1),
('Arlette', 'Soucy', '1957-10-14', 'F', '88 rue Joseph Vernet', '84000', 'Avignon', '0458134317', 'K du poumon sous radiothérapie, ablation du poumon droit', true, 1, 1),
('Véronique', 'Mercier', '1949-01-24', 'F', '3 place Charles de Gaulles', '59650', 'Chambris', '0352009533', '', false, 1, 1),
('Julie', 'Lamy', '1971-12-19', 'F', '26 rue Gustave Effeil', '69140', 'Rilleux le Pape', '0411467401', 'Hyperthyroidïe sous Levothyrox', false, 1, 1),
('Mélodie', 'Lépicier', '1971-01-24', 'F', '30 rue Sadi Carnot', '89000', 'Auxerre', '0383042931', '', false, 1, 1),
('Astolpho', 'Davignon', '1956-12-27', 'M', '50 rue des Six Frères Ruellan', '95200', 'Sarcelles', '0122830333', '', false, 1, 1),
('Blanche', 'Riquier', '1982-11-28', 'F', '75 avenue de Provence', '06220', 'Vallauris', '0178239845', '', false, 1, 1),

-- Cabinet 2 
('Edouard', 'Lacharité', '1976-09-27', 'M', '13 boulevard de Prague', '94130', 'Nogent sur Marne', '0185988560', '', false, 1, 2),
('Juraj', 'Bacic', '1949-02-07', 'M', '11 rue des Chaligny', '06100', 'Nice', '0474700873', 'Diabète, plaie du pied récurrente', true, 1, 2),
('Fauna', 'Mousseau', '1957-04-12', 'F', '25 rue Gontier-Patin', '80100', 'Abbeville', '0300457505', 'allergie au latex', false, 1, 2),
('Fayette', 'Quessy', '1970-07-03', 'F', '30 rue Victor Hugo', '59210', 'Coudekerque Branche', '0396058279', '', false, 1, 2),
('Garland', 'Lamontagne', '1982-10-08', 'M', '56 avenue de la Provence', '56000', 'Vannes', '0244141370', 'Maladie de Cronh', false, 1, 2),
('Carolos', 'Lalonde', '1961-08-19', 'M', '34 rue de la Boetie', '92120', 'Chatou', '0592076682', '', false, 1, 2),
('Lilie', 'Audibert', '1977-05-20', 'F', '4 place du Jeu de Paume', '91270', 'Vigneux sur Seine', '0196935409', '', false, 1, 2),
('Inès', 'Grégoire', '1928-09-07', 'F', '22 rue Sadi Carnot', '89000', 'Auxerre', '0476107946', '', true, 1, 2),
('Bruno', 'Doiron', '1932-12-20', 'M', '30 rue Marie de Médicis', '62400', 'Bethune', '0214589973', '', false, 1, 2),
('Marlon', 'Robitaille', '1956-04-22', 'M', '99 rue Léon Dierx', '91160', 'Longjumeau', '0107401746', '', false, 1, 2),
('Leone', 'Lereau', '1934-07-26', 'F', '10 cours Jean Jaures', '33200', 'Bordeaux', '0549954217', '', false, 1, 2),
('Pomeroy', 'Bussière', '1924-04-14', 'M', '48 rue Frédéric Chopin', '78000', 'Versailles', '0174325252', '', false, 1, 2),
('Raoul', 'Boulet', '1934-08-16', 'M', '13 place Charles de Gaulle', '59650', 'Villeneuve dAsq', '0542096019','', false, 1, 2),
('Peppin', 'Chandonnet', '1959-10-25', 'M', '67 rue Marguerite', '91170', 'Viry Chatillon', '0132593627', '', false, 1, 2),
('Burkett', 'Nadeau', '1968-09-11', 'M', '61 rue Saint Ferreol', '69330', 'Meyzieu', '0440804063', '', false, 1, 2),
('Charles', 'Trudeau', '1978-12-13', 'M', '91 rue des Groussay', '93110', 'Rosny-Sous-Bois', '0145426060', '', false, 1, 2),
('Moïse', 'Legget', '1979-08-27', 'M', '4 rue Hubert de Lisle', '34400', 'Lunel', '0479902654', '', false, 1, 2),
('Yolande', 'Chrétien', '1942-08-27', 'F', '36 rue Michel Ange', '94270', 'Le Kremlin Bicetre', '0141537797', '', false, 1, 2),
('Dorene', 'Lebel', '1981-01-18', 'F', '80 avenue Jean Portalis', '19000', 'Tulle', '0568538508', '', false, 1, 2),
('Norbert', 'Garland', '1976-11-10', 'M', '52 rue Hubert de Lisle', '39000', 'Lons le Saunier', '0287228522', '', false, 1, 2),
('Pierre', 'Beaulac', '1970-07-23', 'M', '97 quai des Belges', '77100', 'Meaux', '0100434530', '', false, 1, 2),

-- Cabinet 3 
('Fanchon', 'Vaillancour', '1948-03-12', 'F', '13 avenue Voltaire', '06520', 'Magagnosc', '0424124935', '', false, 1, 3),
('Fortuné', 'Métivier', '1958-06-12', 'M', '76 rue du Limas', '64100', 'Bayonne', '0559521106', 'ATCD de crise cardiaque en mai 2018', false, 1, 3),
('Nathalie', 'Vadeboncoeur', '1941-06-28', 'F', '78 rue des six Frères Ruellan', '13300', 'Salon de Provence', '0452820139', '', false, 1, 3),
('Elita', 'Gracia', '1962-06-30', 'F', '73 rue Cazade', '93700', 'Drancy', '0154999509', '', false, 1, 3),
('Armand', 'Bousquet', '1945-12-22', 'M', '9 rue de Limas', '21200', 'Beaune', '0357193826', 'ATCD de phlébite et embolie pulmonaire', false, 1, 3),
('Jayden', 'Armstrong', '1962-04-28', 'M', '70 place du Jeu de Paume', '69400', 'Villefranche sur Saône', '0474660447', '', false, 1, 3),
('Matthieu', 'Avare', '1959-03-16', 'M', '48 cours Franklin Roosevelet', '13006', 'Marseille', '0429023840', '', false, 1, 3),
('Dominique', 'Veronneau', '1923-11-21', 'F', '88 rue Marie de Medicis', '64200', 'Biarritz', '0345472405','Début de sénilité due à lâge', true, 1, 3),
('Camille', 'Brisette', '1942-04-19', 'F', '97 chemin des Bateliers', '13001', 'Marseille', '0439168184', '', false, 1, 3),
('Raymond', 'Gagnon', '1942-12-04', 'M', '73 rue des Violettes', '18200', 'Orval', '0248964034', '', true, 1, 3),
('Russell', 'Descoteaux', '1957-11-20', 'M', '51 place de la Gare', '68000', 'Colmar', '0350721887', '', false, 1, 3),
('Bertrand', 'Gradasso', '1959-12-12', 'M', '89 rue des Lilas', '14500', 'Cassote', '0233215293', '', false, 1, 3),
('Thierry', 'Gribois', '1934-02-23', 'M', '77 avenue des Amandiers', '93140', 'Bondy', '0160618151', 'Mélanome de la cuisse', true, 1, 3),
('Eugène', 'Barrientos', '1947-02-01', 'M', '63 rue Contrescarpe', '94350', 'Villiers sur Marne', '0187650599', '', false, 1, 3),
('Mercer', 'Mailly', '1978-06-30', 'M', '53 rue des Etangs', '76000', 'Rouen', '0287181178', 'AT : main prise dans une machine', true, 1, 3),
('Félicien', 'Dufresne', '1944-01-23', 'M', '96 rue Reine Elisabeth', '48000', 'Mende', '0491470636', '', false, 1, 3),
('Emilie', 'Charron', '1988-09-05', 'F', '2 rue de la Paroisse' ,'33260', 'La Tête de Buch', '0586965231', 'Suite de couche', true, 1, 3),
('Millard', 'Mireault', '1983-08-23', 'M', '55 rue Marie de Medicis', '06400', 'Cannes', '0482818419', '', false, 1, 3),
('Gauthier', 'Panetier', '1948-05-23', 'M', '84 rue des six frères Ruellan', '57200', 'Sarguemines', '0348709489', '', false, 1, 3),
('Marsilius', 'Jalbert', '1934-08-14', 'M', '6 avenue des Amandiers', '93000', 'Bobigny', '0125481631', '', false, 1, 3),
('Véronique', 'Sevier', '1967-05-27', 'F', '27 rue Lenotre', '35700', 'Rennes', '0268922315','En fauteil', true, 1, 3),
('Maureen', 'Dostie', '1938-09-01', 'F', '29 avenue des Prés', '95160', 'Montmorency', '0110771911', '', false, 1, 3),
('Marshall', 'Roy', '1962-11-01', 'M', '63 boulevard Albin Durand', '95800', 'Cergy', '0145745526', '', false, 1, 3),
('Ruth', 'Plante', '1971-04-25', 'F', '14 rue Porte Verte', '81100', 'Castres', '0547310000', '', false, 1, 3),
('Yseult', 'Avise', '1927-02-16', 'F', '55 rue Adolphe Wurtz', '97231', 'Le Robert', '0574650627', '', false, 1, 3),
('Amid', 'Bourassa', '1946-11-13', 'M', '49 avenue Millies Lacroix', '38130', 'Echirolles', '0548961265', '', false, 1, 3),
('Honorée', 'Poissonnier', '1959-08-05', 'F', '85 rue du Lavarin Sud', '14000', 'Caen', '0248675925', 'Accident de voiture, retour au domicile après 4 mois hospitalisé', true, 1, 3),
('Raina', 'Quirion', '1974-01-02', 'F', '73 avenue des Jacynthes', '41000', 'Blois', '0465862354', '', false, 1, 3),
('Justin', 'Coupart', '1936-08-08', 'M', '4 rue des Coudriers', '68200', 'Mulhouse', '0578959983', '', false, 1, 3),
('Cécile', 'Majory', '1947-07-08', 'F', '93 place Maurice-Charretier', '94500', 'Champigny sur Marne', '0185763918', '', false, 1, 3),
('Xavière', 'Tisserand', '1957-08-05', 'F', '53 boulevard de la Libération', '13011', 'Marseille', '0495355369', '', false, 1, 3),


-- Cabinet 4 
('Kathy', 'Rodriguez Cedillo', '1951-12-20', 'F', '72 avenue des Bouvines', '89100', 'Sens', '0378802105', '', false, 1, 4),
('Melville', 'Fouquet', '1922-05-12', 'M', '40 avenue de Provence', '06220', 'Vallauris', '0488101630', 'Grabataire, sous Polimur et Stérasine', true, 2, 4),
('Laurence', 'Marchesseault', '1920-03-01', 'F', '27 boulevard du Cerf', '79000', 'Niort', '0580137533', 'Diabète sous Glucophage', true, 1, 4),
('Laetitia', 'Chalut', '1933-01-22', 'F', '91 rue Saint Germain', '92230', 'Gennevilliers', '0170971946', '', true, 2, 4),
('Coralie', 'Gougeon', '1990-03-04', 'F', '88 square de la Couronne', '77330', 'Ozoir la Ferriere', '0168615940', '', false, 1, 4),
('Odette', 'Lamotte', '1952-08-12', 'F', '80 rue Jean Vilar', '33130', 'Bègles', '0568987487', '', false, 1, 4),
('Qiao', 'Tang', '1926-10-01', 'M', '44 boulevard Albin Durand', '71100', 'Chalon sur Saône', '0399795850', 'Mauvaise continence aux selles et aux urines', true, 2, 4),
('Callum', 'Hurst', '1948-07-30', 'M',  '25 cours Maréchal-Joffre', '76200', 'Dieppe','0247364702', '', false, 1, 4),
('Harriette', 'Covillon', '1961-06-07', 'F', '2 rue de Lille', '59280', 'Armentières', '0322518646', '', false, 1, 4),
('Linette', 'Favreau', '1956-01-11', 'M', '20 place de la Gare', '92700', 'Colombes', '0111495118', 'ATCD de névrite optique non complètement résolue', false, 1, 4),
('Soren', 'Villeneuve', '1949-03-10', 'M', '53 rue des Dunes', '94100', 'Saint-Maur-Des-Fosses', '0106040721', '', false, 1, 4),
('Arnaud', 'Clément', '1979-11-17', 'F', '34 rue Bonnet', '94400', 'Vitry-Sur-Seine', '0181150181', 'Accident de moto, broches au niveau des deux tibias', true, 1, 4),
('Harbin', 'Daigle', '1943-09-06', 'M', '46 rue Beauveau', '13002', 'Marseille', '0431789788', 'Prothèse de genou', false, 1, 4),
('Arthur', 'Riquier', '1935-10-21', 'M', '3 rue Porte Orange', '84200', 'Carpentras', '0481175075', 'Névrite diabétique', true, 1, 4);


-- carnet de suivi
INSERT INTO logbook(creation_date, planned_date, done_date, observations, daily, done, ending_date, nurse_id, patient_id) VALUES
-- cabinet 1 / patients 1 à 17 /nurses 1,2,4,6,8,14 et 16
('2021-01-23', '2021-01-24', null, 'Faire une prise de sang et contrôler la tension', false, false, null, 1, 2),
('2021-01-23', '2021-01-24', null, 'Nettoyage de plaie/pansement', true, false, '2021-01-27', 1, 3),
('2020-12-23', '2020-12-24', '2020-12-24', 'Prise de sang à domicile', false, true, null, 1, 6),
('2020-11-14', '2020-11-15', '2020-12-15', 'Injection traitement', true, true, '2020-12-15', 8, 8),
('2021-01-22', '2021-01-23', null, 'Vérification des points suite opération genou', true, false, '2021-02-08', 8, 10),
('2021-01-22', '2021-01-23', null, 'Nettoyage cathéter', true, false, '2021-02-16', 4, 12),
('2019-06-12', '2019-06-13', '2019-06-13', 'Première prise traitement injectable', false, true, null, 4, 14),
('2019-08-30', '2019-09-01', '2019-09-01', 'Prise de sang', false, true, null, 6, 15),
('2019-10-12', '2019-10-13', '2019-11-23', 'Prise en charge plaie du pied', true, true, '2019-11-23', 6, 19);

-- Camille Janvier
('2020-12-14', '2020-12-15', '2020-12-15', 'Prise de sang à domicile', false, true, null, 2, 18),

('2021-01-23', '2021-01-24', null, 'Nettoyage de plaie, vérification points', true, false, '2021-02-12', 2, 19),
('2021-01-19', '2021-01-20', '2021-01-20', 'Controle de la glycémie, normal', false, true, null, 2, 19),
('2020-12-04', '2020-12-05', '2020-12-05', 'Controle de la glycémie, 1,13', false, true, null, 2, 19),

('2020-12-14', '2020-12-15', '2020-12-15', 'Prise de sang à domicile', false, true, null, 2, 20),
('2019-05-08', '2019-05-10', '2019-05-10', 'Prise de sang à domicile', false, true, null, 2, 20),

('2018-03-01', '2018-03-02', '2018-03-06', 'Pansement à refaire sur plaie genou', true, true, '2018-03-06', 2, 21),

('2018-04-21', '2018-04-22', '2018-04-22', 'Lavement, conseils', false, true, null, 2, 22 ),
('2018-06-07', '2018-06-08', '2018-06-08', 'Problèmes pour aller à la selle, lavement', false, true, null, 2, 22 ),
('2019-11-02', '2019-11-03', '2019-12-30', 'Crise, prise en charge journalière', true, true, '2019-12-30', 2, 22 ),
('2020-03-12', '2018-04-22', '2018-04-22', 'Lavement, conseils', false, true, null, 2, 22 ),

('2020-08-21', '2020-08-22', '2020-08-22', 'Nettoyage de cathéter', false, true, null, 2, 23),
('2020-09-12', '2020-09-13', '2020-09-13', 'Nettoyage de cathéter + pansement', false, true, null, 2, 23),
('2020-10-27', '2020-10-28', '2020-10-28', 'Prise de sang', false, true, null, 2, 23),

('2020-11-27', '2020-12-28', '2020-12-28', 'Vérification des points, pansement', false, true, null, 2, 24);


-- patient_has_logbook
-- INSERT INTO patient_has_logbook(patient_id, logbook_id) VALUES
-- (1, 1),
-- (3, 2),
-- (5, 3),
-- (6, 4),
-- (6, 5),
-- (8, 6),
-- (10, 7),
-- (12, 8),
-- (14, 9),
-- (15, 10),
-- (19, 11);

INSERT INTO medical_act(name, category) VALUES
-- Prélèvements et injections
(`Prélèvement par ponction veineuse directe`,`Prélèvements et injections`),
(`Saignée`,`Prélèvements et injections`),
(`Prélèvement aseptique cutané ou de sécrétions muqueuses, prélèvement de selles ou d’urine pour examens cytologiques, bactériologiques, mycologiques, virologiques ou parasitologiques`,`Prélèvements et injections`),
(`Injection intraveineuse directe isolée`,`Prélèvements et injections`),
(`Injection intraveineuse directe en série`,`Prélèvements et injections`),
(`Injection intraveineuse directe chez un enfant de moins de cinq ans`,`Prélèvements et injections`),
(`Injection intramusculaire`,`Prélèvements et injections`),
(`Supplément pour vaccination antigrippale hors-primo injection dans le cadre de la campagne de vaccination anti-grippale organisée par l’assurance maladie`,`Prélèvements et injections`),
(`Injection d’un sérum d’origine humaine ou animale selon la méthode de besredka, y compris la surveillance`,`Prélèvements et injections`),
(`Injection sous-cutanée`,`Prélèvements et injections`),
(`Supplément pour vaccination antigrippale hors-primo injection dans le cadre de la campagne de vaccination anti-grippale organisée par l’assurance maladie`,`Prélèvements et injections`),
(`Injection intradermique`,`Prélèvements et injections`),
(`Injection d’un ou plusieurs allergènes, poursuivant un traitement d’hyposensibilisation spécifique, selon le protocole écrit, y compris la surveillance, la tenue du dossier de soins, la transmission des informations au médecin prescripteur`,`Prélèvements et injections`),
(`Injection d’un implant souscutané`,`Prélèvements et injections`),
(`Injection en goutte à goutte par voie rectale`,`Prélèvements et injections`),

-- Pansements courants
(`Pansement de stomie`,`Pansements courants`),
(`Pansement de trachéotomie, y compris l’aspiration et l’éventuel changement de canule ou sonde`,`Pansements courants`),
(`Ablation de fils ou d’agrafes, dix ou moins, y compris le pansement éventuel`,`Pansements courants`),
(`Ablation de fils ou d’agrafes, plus de dix, y compris le pansement éventuel`,`Pansements courants`),
(`Autre pansement`,`Pansements courants`),

-- Pansements lourds et complexes nécessitant des conditions d’asepsie rigoureuse
(`Pansements de brûlure étendue ou de plaie chimique ou thermique étendue, sur une surface supérieures à 5 % de la surface corporelle`,`Pansements lourds et complexes nécessitant des conditions d’asepsie rigoureuse`),
(`Pansement d’ulcère étendu ou de greffe cutanée, sur une surface supérieure à 60 cm²`,`Pansements lourds et complexes nécessitant des conditions d’asepsie rigoureuse`),
(`Pansement d’amputation nécessitant détersion, épluchage et régularisation`,`Pansements lourds et complexes nécessitant des conditions d’asepsie rigoureuse`),
(`Pansement de fistule digestive`,`Pansements lourds et complexes nécessitant des conditions d’asepsie rigoureuse`),
(`Pansement pour pertes de substance traumatique ou néoplasique, avec lésions profondes, sous aponévrotiques, musculaires, tendineuses ou osseuses`,`Pansements lourds et complexes nécessitant des conditions d’asepsie rigoureuse`),
(`Pansement chirurgical nécessitant un méchage ou une irrigation`,`Pansements lourds et complexes nécessitant des conditions d’asepsie rigoureuse`),
(`Pansement d’escarre profonde et étendue atteignant les muscles ou les tendons`,`Pansements lourds et complexes nécessitant des conditions d’asepsie rigoureuse`),
(`Pansement chirurgical avec matériel d’ostéosynthèse extériorisé`,`Pansements lourds et complexes nécessitant des conditions d’asepsie rigoureuse`),

-- Pose de sonde et alimentation
(`Pose de sonde gastrique`,`Pose de sonde et alimentation`),
(`Alimentation entérale par gavage ou en déclive ou par nutri-pompe, y compris la surveillance, par séance`,`Pose de sonde et alimentation`),
(`Alimentation entérale par voie jéjunale avec sondage de la stomie, y compris le pansement et la surveillance, par séance`,`Pose de sonde et alimentation`),

-- Soins portant sur l’appareil respiratoire
(`Séance d’aérosol`,`Soins portant sur l’appareil respiratoire`),
(`Lavage d’un sinus`,`Soins portant sur l’appareil respiratoire`),

-- Soins portant sur l’appareil génito-urinaire
(`Injection vaginale`,`Soins portant sur l’appareil génito-urinaire`),
(`Soins gynécologiques au décours immédiat d’un traitement par curiethérapie`,`Soins portant sur l’appareil génito-urinaire`),
(`Cathétérisme urétral chez la femme`,`Soins portant sur l’appareil génito-urinaire`),
(`Cathétérisme urétral chez l’homme`,`Soins portant sur l’appareil génito-urinaire`),
(`Changement de sonde urinaire à demeure chez la femme`,`Soins portant sur l’appareil génito-urinaire`),
(`Changement de sonde urinaire à demeure chez l’homme`,`Soins portant sur l’appareil génito-urinaire`),
(`Education à l’autosondage comprenant le sondage éventuel, avec un maximum de dix séances`,`Soins portant sur l’appareil génito-urinaire`),
(`Réadaptation de vessie neurologique comprenant le sondage éventuel`,`Soins portant sur l’appareil génito-urinaire`),
(`Instillation et/ou lavage vésical (sonde en place)`,`Soins portant sur l’appareil génito-urinaire`),
(`Pose isolée d’un étui pénien, une fois par vingt-quatre heures`,`Soins portant sur l’appareil génito-urinaire`),

--  Soins portant sur l’appareil digestif
(`Soins de bouche avec application de produits médicamenteux au décours immédiat d’une radiothérapie`,`Soins portant sur l’appareil digestif`),
(`Lavement évacuateur ou médicamenteux`,`Soins portant sur l’appareil digestif`),
(`Extraction de fécalome ou extraction manuelle des selles`,`Soins portant sur l’appareil digestif`),

-- Test et soins portant sur l’enveloppe cutanée
(`Pulvérisation de produit(s) médicamenteux`,`Test et soins portant sur l’enveloppe cutanée`),
(`Réalisation de test tuberculinique`,`Test et soins portant sur l’enveloppe cutanée`),
(`Lecture d’un timbre tuberculinique et transmission d’informations au médecin prescripteur`,`Test et soins portant sur l’enveloppe cutanée`),

--Surveillance et observation d’un patient à domicile
(`Administration et surveillance d’une thérapeutique orale au domicile des patients présentant des troubles psychiatriques avec établissement d’une fiche de surveillance, par passage`,`Surveillance et observation d’un patient à domicile`),
(`Au-delà du premier mois, par passage`,`Surveillance et observation d’un patient à domicile`),
(`Surveillance et observation d’un patient lors de la mise en oeuvre d’un traitement ou lors de la modification de celui-ci, sauf pour les patients diabétiques insulino-dépendants, avec établissement d’une fiche de surveillance, avec un maximum de quinze jours, par jour`,`Surveillance et observation d’un patient à domicile`);

COMMIT;