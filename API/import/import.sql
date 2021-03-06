BEGIN;

TRUNCATE TABLE nurse, cabinet, cabinet_has_nurse, patient, logbook, medical_act, logbook_has_medical_act, tour, tour_has_patient RESTART IDENTITY;

-- Insertions d'infirmiers
INSERT INTO nurse(siren_code, firstname, lastname, email, password, phone_number) VALUES
('917222465', 'Olivier', 'Raynal', 'olivier@raynal.com', '$2b$10$3myfxCP.3aIIG3X1n0xUXeH.dvYgrlqHWOvKVhs75.TK.GdvV/HCq', '0612345678'), -- 'gyefgecz' // nurseID 1
('586239453', 'Camille', 'Janvier', 'camille.janvier@gmail.com', '$2b$10$w4O9QKFInW7fbBrdPz8WDeU64OCDfF/dIXcfg9GLQtwpT4xiJzCka', '0265341896'), -- 'Monchat1' // nurseID 2
('326985275', 'Carine', 'Guerino', 'carine.guerino@hotmail.fr', '$2b$10$aAj6cG1WVzeEmLnYekR9eeXxV2dXniAQ/eC1CBsjGFyid3uX1fs9e', '0678952264'), --'24011981' // nurseID 3
('917594153', 'Jérémy', 'Chemin', 'j.chemin@gmail.com', '$2b$10$lJE148ekT39RyxrfIX/MF.8wV89tLoqi2QGzSD/K33iqL9Fu6uIn2', '0765289512'), -- 'ADB28964' // nurseID 4
('295632456', 'Sandrine', 'Pasquier', 'sandrine.pasquier@hotmail.fr', '$2b$10$H5Qm26X3JvTTsYQdSzE9LO3QdCmogR/Q8zXVJ9H0NJ2AttbKaQZNm', '0349586213'), -- 'Lottie11' // nurseID 5
('561235164', 'Judith', 'Noleen', 'judith.noleen@gmail.com', '$2b$10$L62bnM6rcI/4nqaedaYpeudEFA3Zl1AWVCh4VT6yRLyfrpXaBRyCi', '0175089235'), -- 'Jgreed' // nurseID 6
('829442366', 'Ludivine', 'Marques', 'marques.ludivine@yahoo.fr', '$2b$10$b/th8Bc1aKuSY1zJ4cz6yOUiFcLhJa7mTRjQNkgRaQB6XjCbcj1Ue', '0248966542'), -- 'Groot' // nurseID 7
('264584652', 'Marjolaine', 'Archer', 'm.archer@gmail.com', '$2b$10$j/ho/spOJJ1tP11jc3Yxku5OjqcPlp9z35Rii017AvJJjnzfZ2jFu', '0686523495'), -- 'Hutte85' // nurseID 8
('956425351', 'Victor', 'Huster', 'victor.huster@gmail.com', '$2b$10$lRUIXn0u3.TF27Kmu8YGhOsqoYiYdnI/ziussYPZOdkRqOo9GxYIu', '0786523621'), -- 'jambonetdemi' // nurseID 9
('946532125', 'Luc', 'Jasmin', 'luc.jasmin@hotmail.fr', '$2b$10$g7uxeFTeINxZGsz.wPzovOh7eHKjxg7PFowqroqxBwm1EjbaGWFTm', '0696526322'), -- 'poppie25' // nurseID 10
('321652456', 'Pauline', 'Revest', 'p.revest@gmail.com', '$2b$10$Odw5E5xhQT4oTbvyAGZHGekbIh5iwC5NqO4vcI9D.vH9YPZaX0g56', '0362326659'), -- 'poulichedu22' // nurseID 11
('362511298', 'Noé', 'Ambert', 'noe.ambert@hotmail.fr', '$2b$10$vgWtZljf30cOsr3jM1iC4.bYVDBoKC.GOJpEKZj/Bne2W9qljEShW', '0654126398'), -- '265532' // nurseID 12
('466898234', 'Matthieu', 'Balon', 'matthieu.balon@gmail.com', '$2b$10$gwW/.uxJocRlSh7hisQG8OSjwCLR4M2BWwzT7.p2vKWhtNihy59Ai', '0723784598'), -- 'toto4ever' // nurseID 13
('982012367', 'Olivia', 'Halinski', 'olivia.halinski@gmail.com', '$2b$10$5lR./ZDTXdO4gB5KkzIfL.rkkCPNky1faiHHUvc35/wvtG.OHik7u', '0627945800'), -- 'pokh78zKC' // nurseID 14
('982635287', 'Pauline', 'Humbert', 'pauline.humbert@gmail.com', '$2b$10$wK0hCpKnpVNaHYW4phBIZeitwkq4RnPmJ.NcrvTu/u.f.6yIq1DiS', '0610946758'), -- 'AZTYHD58' // nurseID 15
('098238475', 'Edouard', 'Anselin', 'edouard.ancelin@gmail.com', '$2b$10$5Ipoa0n39dVDp1FXc3uqyumIw0zfNZvrnZrN7N2mlwOYnG2n6REgu', '0634892490'); -- 'loto145' // nurseID 16

-- Insertions des cabinets

INSERT INTO cabinet(name, address, zip_code, city, phone_number, pin_code, owner_id) VALUES
('Cabinet Modjo', '12 impasse des fleurs', '45210', 'Charmille', '0248956325', 'secretcode', 2),
('Cabinet Pezzo', '24 rue du val Fleury', '78200', 'Grassoully', '0465235212', 'codepin', 3),
('Cabinet Responza', '6 chemin du 16 novembre 1956', '18200', 'Orval', '0231624524', 'pin1234', 3),
('Cabinet Bota', '5 rue Firmin', '67000', 'Strasbourg', '0334985765', 'secret4', 5);

-- Insertions cabinet_has_nurse

INSERT INTO cabinet_has_nurse(cabinet_id, nurse_id, default_cabinet, allowed) VALUES
-- NURSE CABINET 1 - MODJO // Patient 1 à 68
(1, 1, default, default), -- Olivier Raynal 
(1, 2, true, default), -- Camille Janvier -- OWNER
(1, 4, true, default), -- Jérémy Chemin
(1, 6, true, default), -- Judith Noleen
(1, 8, true, default), -- Marjolaine Archer
(1, 14, default, default), -- Olivia Halinski
(1, 16, default, default), -- Edouard Anselin

-- NURSE CABINET 2 - PEZZO // Patient 69 à 139
(2, 1, true, default), -- Olivier Raynal
(2, 2, false, default), -- Camille Janvier
(2, 3, true, default), -- Carine Guerino -- OWNER
(2, 4, default, default), -- Jérémy Chemin
(2, 5, default, default), -- Sandrine Pasquier
(2, 6, default, default), -- Judith Noleen
(2, 10, true, default), -- Luc Jasmin
(2, 12, true, default), -- Noé Ambert

-- NURSE CABINET 3 - RESPONZA // PATIENT 140 à 196
(3, 3, default, default), -- Carine Guerino -- OWNER
(3, 7, true, default), -- Ludivine Marques
(3, 9, default, default), -- Victor Huster
(3, 10, default, default), -- Luc Jasmin
(3, 11, true, default), -- Pauline Revest
(3, 12, default, default), -- Noé Ambert
(3, 14, default, default), -- Olivia Halinski
(3, 15, true, default), -- Pauline Humbert

-- NURSE CABINET 4 - BOTA // PATIENT 197 à 261
(4, 5, true, default), -- Sandrine Pasquier -- OWNER
(4, 7, default, default), -- Ludivine Marques
(4, 8, default, default), -- Marjolaine Archer
(4, 9, true, default), -- Victor Huster
(4, 11, default, default), -- Pauline Revest
(4, 13, true, default), -- Matthieu Balon
(4, 14, true, default), -- Olivia Halinski
(4, 15, default, default), -- Pauline Humbert
(4, 16, true, default); -- Edouard Anselin


-- insertions patients

INSERT INTO patient(firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking, cabinet_id) VALUES

-- Cabinet 1 // Patient 1 à 68
('Ninette', 'Cressac', '1966-02-11', 'F', '76 rue du Gue Jacquet', '78400', 'Chatou', '0108715496', '', false, 1, 1), 
('Lirienne', 'Fréchette', '1926-06-29', 'F', '74 rue des Coudriers', '68100', 'Mulhouse', '0352975656', '', false, 1, 1),
('Honoré', 'Cuillerier', '1934-01-30', 'M', '39 rue de Geneve', '80080', 'Amiens', '0373617017', '', false, 1, 1),
('Odo', 'Brunelle', '1922-10-13', 'M', '58 rue Nationale', '75003', 'Paris', '0193616709', 'ATCD de K du poumon', true, 1, 1), -- 4
('Jacqueline', 'Lessard', '1941-03-07', 'F', '48 rue Joseph Vernet', '84000', 'Avignon', '0425053402', 'Première opération de fistule rectale non compliquée', true, 2, 1), --5
('Gaspar', 'Querry', '1960-12-07', 'M', '43 rue des frères Ruellan', '95110', 'Sannois', '0176954864', '', false, 1, 1),
('Leroy', 'Berger', '1954-11-13', 'M', '21 avenue de Provence', '56000', 'Vannes', '0215977097', 'Mélanome au niveau du coude en 1998', false, 1, 1),
('Marjolaine', 'Caillot', '1952-01-20', 'F', '22 rue de la Pompe', '78200', 'Mantes la Jolie', '010415526', 'K du sein sous chimio', true, 1, 1), --8
('Jeanine', 'Brian', '1971-10-24', 'F', '73 rue du Faubourg National', '65000', 'Tarbes', '0556648868', '', false, 1, 1),
('Virginie', 'Berie', '1985-11-03', 'F', '79 rue Epeule', '76000', 'Rouen', '0276143132', '', false, 1, 1), --10
('Coralie', 'Tisserand', '1966-04-30', 'F', '4 rue du Faubourg National', '95150', 'Taverny', '0132837995', 'ATCD de cancer du col de l utérus, résection utérine', false, 1, 1),
('Arlette', 'Soucy', '1957-10-14', 'F', '88 rue Joseph Vernet', '84000', 'Avignon', '0458134317', 'K du poumon sous radiothérapie, ablation du poumon droit', true, 1, 1), --12
('Véronique', 'Mercier', '1949-01-24', 'F', '3 place Charles de Gaulles', '59650', 'Chambris', '0352009533', '', false, 1, 1),
('Julie', 'Lamy', '1971-12-19', 'F', '26 rue Gustave Effeil', '69140', 'Rilleux le Pape', '0411467401', 'Hyperthyroidïe sous Levothyrox', false, 1, 1),
('Mélodie', 'Lépicier', '1971-01-24', 'F', '30 rue Sadi Carnot', '89000', 'Auxerre', '0383042931', '', false, 1, 1), --15
('Astolpho', 'Davignon', '1956-12-27', 'M', '50 rue des Six Frères Ruellan', '95200', 'Sarcelles', '0122830333', '', false, 1, 1),
('Blanche', 'Riquier', '1982-11-28', 'F', '75 avenue de Provence', '06220', 'Vallauris', '0178239845', '', false, 1, 1),

('Jeanne', 'Crignoux', '1967-04-16', 'F', '48 impasse des poissons', '25640', 'Marchaux', '0126987843','', false, 1, 1),
('Annette', 'Labbé', '1985-11-27', 'F', '16 chemin des Bateliers', '81000', 'Albi', '0566353755', '', false,1, 1),
('Gaëtan', 'Richer', '1992-02-03', 'M', '31 Faubourg Saint Honoré', '75020', 'Paris', '0131990596','fracture du péroné', true, 1,1), --20
('Eloise', 'Durepos', '1971-10-16', 'F', '71 avenue des Tuileries', '91350', 'Grigny', '0134617155', '', false, 1,1),
('Esmeraude', 'Beausoleil', '1989-07-24', 'F', '30 rue du Palais', '91150', 'Etampes', '0110458175', 'psoriasis', false, 1, 1),
('Romain', 'Arnoux', '1942-08-9', 'M', '8 chemin Challet', '87100', 'Limoges', '0525544009', '', false,1,1),
('Tyson', 'Garnier', '1953-12-20', 'M', '20 rue Lenotre', '78120', 'Rambouillet', '0197150593', '', false, 1,1),
('Thibaut', 'Paulet', '1938-07-23', 'M', '43 rue Sebastopol', '97230', 'Sainte-Marie', '0525047272', 'paraplégie accident de machine agricole', true, 1, 1), --25
('Aloin', 'Duhamel', '1957-01-13', 'M', '22 rue de la mairie', '76100', 'Rouen', '0276642532', '', false, 1, 1),
('Arienne', 'Roussel', '1934-02-28', 'F', '22 avenue de Bouvines', '89100', 'Sens', '0311926029','crise de goutte', false, 1, 1),
('Hilaire', 'Charpentier', '1945-07-01', 'M', '78 rue des lieutenants Thomazo', '21000', 'Dijon', '0362257879','', false, 1, 1),
('Marie', 'Perillard', '1996-10-03', 'F', '30 place Napoléon', '02000', 'Laon', '0368330663', 'bras cassé',false, 1, 1),
('Sophie', 'Perillard', '1996-10-03', 'F', '30 place Napoléon', '02000', 'Laon', '0368330663', 'bras cassé', false, 1, 1), --30
('Cosette', 'Artois', '1954-03-24', 'F', '3 rue de la HUlotais', '83700', 'Saint Raphaël', '0403826600', '', false, 1, 1),
('Madeleine', 'Giguère', '1958-06-27', 'F', '58 rue Marie de Médicis', '06400', ' Cannes', '044194234', '', true, 2, 1), --32
('Olivia', 'Lunde', '1934-04-08', 'F', '57 rue du renard', '17000', 'La Rochelle', '0588900105', '', false, 1, 1),
('Lika', 'Izmailova', '1982-10-25', 'F', '2 place Maurice Charretier', '94500', 'Champigny sur Marne', '0185047139', '', false, 1, 1),
('Alain', 'Loiseau', '1960-03-06', 'M', '16 rue des Dunes', '94100', 'Saint Maur des Fossés', '0112576446', 'cancer du colon', true, 2, 1), --35
('Odelette', 'de Chateaub', '1955-10-03', 'F', '58 rue des renards blancs', '76000', 'Rouen', '0272228437', '', false, 1, 1),
('Louis', 'Laisné', '1949-01-10', 'M', '75 place Napoléon', '59130', 'Lambersart', '0323851162', '', false, 1, 1),
('Anton', 'Gaudreau', '1976-03-24', 'M', '65 rue Sébastopol', '17100', 'Saintes', '0590876292', '', false, 1, 1),
('Armand', 'Chastain', '1982-02-01', 'M', '81 square de la Couronne', '77330', 'Ozoir la Ferrière', '0109782629', '', false, 1, 1),
('Methena', 'Gougeon', '1956-10-01', 'F', '71 rue Nationale', '75006', 'Paris', '0163288354', '', false, 1, 1), --40
('Thibaut', 'Couture', '1965-05-22', 'M', '89 place de la Madeleine', '75011', 'Paris', '0127161424', '', true, 2, 1), --41
('Félicien', 'Beaudouin', '1968-12-27', 'M', '15 rue Isambard', '95130', 'Franconville la Garenne', '0112217697', '', false, 1, 1),
('Miranda', 'Diggle', '1966-07-12', 'F', '51 rue Grande Fusterie', '91800', 'Brunoy', '0121126779', '', false, 1, 1),
('Thorsten', 'Beckenbauer', '1971-11-25', 'M', '88 rue de Lille', '59280', 'Armentières', '0356663425', '', false, 1, 1 ),
('Sebastian', 'Ackermann', '1969-09-11', 'M', '8 rue Jean Vilar', '33130', 'Bègles', '0557647379', '', false, 1, 1), --45
('Eglantine', 'Franchet', '1957-10-21', 'F', '42 boulevard de Normandie', '94120', 'Fontenay Sous Bois', '0197080052', '', true, 2, 1), --46
('Musette', 'Gaulin', '1989-11-20', 'F', '8 rue La Boétie', '75014', 'Paris', '0142805650', '', false, 1, 1),
('Raina', 'Aupry', '1958-10-14', 'F', '66 rue Nationale', '75007', 'Paris', '0179198463', 'déficience respiratoire', false, 1, 1),
('Octave', 'Deruisseaux', '1984-07-09', 'M', '33 avenue de Marlioz', 'Annemasse', '74100', '0492595662', '', false, 1, 1),
('Yvon', 'Bouchard', '1948-10-20', 'M', '70 avenue de Bouvines', 'Sedan', '08200', '0328952801', '', false, 1, 1), --50
('Agate', 'Doyon', '1979-03-03', 'M', '17 rue La Boétie', 'Paris', '75014', '0119788889', '', false, 1, 1),
('Agathe', 'Royer', '1926-03-11', 'F', '50 rue du Faubourg National', 'Thionville', '57100', '0362242761', 'fatigue générale due à son âge', true, 1, 1), --52
('France', 'Leroux', '1978-12-13', 'F', '33 rue Descartes', 'Strasbourg', '67200', '0326427116', '', false, 1, 1),
('Fabien', 'St Pierre', '1921-10-08', 'M', '39 avenue Jules Ferry', 'Sèvres', '92310', '0192230549', '', true, 2, 1), --54
('Coralie', 'Bernier', '1969-10-15', 'F', '22 rue Adolphe Wurtz', 'Le Plessis Robinson', '92350', '0129691655', '', false, 1, 1), -- 55
('Gemma', 'Panetier', '1936-01-05', 'F', '67 rue Charles Corbeau', 'Foix', '09000', '0535154166', '', false, 1, 1),
('Simone', 'Audibert', '1994-06-30', 'F', '21 rue Gustave Eiffel', 'Rezé', '44400', '0208747996', 'accident de ski jambe cassée', false, 1, 1),
('Hamilton', 'Rochon', '1962-03-15', 'M', '79 rue Charles Corbeau', 'Evry', '91000', '0118229133', '', false, 1, 1),
('Elrond', 'de Fondcombe', '1937-09-21', 'M', '88 place de la Terre du Milieu', 'Rivendell', '01010', '0102030405', 'oreilles surdimensionnées', false, 1, 1),
('Jessamine', 'Therrien', '1956-04-24', 'F', '56 cours Maréchal Joffre', 'Décines Charpieu', '69150', '0406478117', '', false, 1, 1), --60
('Belisarda', 'Dionne', '1981-03-24', 'F', '86 rue Ernest Renan', 'Cherbourg', '50100', '0237653647', '', false, 1, 1),
('Stéphanie', 'Bourassa', '1958-01-26', 'F', '70 rue de la Mare aux Carats', 'Montpellier', '34070', '0422888537', '', true, 1, 1), --62
('Dominique', 'Labrie', '1973-06-19', 'F', '41 rue Clement Marot', '93380', 'Pierrefitte sur Seine', '0170945451', '', false, 1, 1),
('Andre', 'Danielsen', '1948-11-09', 'M', '68 rue des Coudriers', '76130', 'Mont Saint Aignan', '0265510202', '', false, 1, 1),
('Martin', 'Gilje', '1975-02-05', 'M', '64 rue Hubert de Lisle', '34400', 'Lunel', '0438857561', '', false, 1, 1), --65
('Serge', 'Du Trieux', '1924-08-07', 'M', '42 avenue Frdinand de Lesseps', '38000', 'Grenoble', '0459525888', '', true, 1, 1), --66
('Orlene', 'Piedalue', '1976-06-02', 'F', '62 boulevard de Bourgogne', '92170', 'Vanves', '0118267433', 'grossesse difficile', true, 2, 1), --67
('Frédéric', 'Gaudreau', '1983-05-18', 'M', '28 rue des Dunes', '97150', 'Saint Martin', '0569051325', '',false, 1, 1), --68


-- Cabinet 2 // Patient 69 à 139
('Edouard', 'Lacharité', '1976-09-27', 'M', '13 boulevard de Prague', '94130', 'Nogent sur Marne', '0185988560', '', false, 1, 2),
('Juraj', 'Bacic', '1949-02-07', 'M', '11 rue des Chaligny', '06100', 'Nice', '0474700873', 'Diabète, plaie du pied récurrente', true, 1, 2), --70
('Fauna', 'Mousseau', '1957-04-12', 'F', '25 rue Gontier-Patin', '80100', 'Abbeville', '0300457505', 'allergie au latex', false, 1, 2),
('Fayette', 'Quessy', '1970-07-03', 'F', '30 rue Victor Hugo', '59210', 'Coudekerque Branche', '0396058279', '', false, 1, 2),
('Garland', 'Lamontagne', '1982-10-08', 'M', '56 avenue de la Provence', '56000', 'Vannes', '0244141370', 'Maladie de Cronh', false, 1, 2),
('Carolos', 'Lalonde', '1961-08-19', 'M', '34 rue de la Boetie', '92120', 'Chatou', '0592076682', '', false, 1, 2),
('Lilie', 'Audibert', '1977-05-20', 'F', '4 place du Jeu de Paume', '91270', 'Vigneux sur Seine', '0196935409', '', false, 1, 2), --75
('Inès', 'Grégoire', '1928-09-07', 'F', '22 rue Sadi Carnot', '89000', 'Auxerre', '0476107946', '', true, 1, 2),
('Bruno', 'Doiron', '1932-12-20', 'M', '30 rue Marie de Médicis', '62400', 'Bethune', '0214589973', '', false, 1, 2),
('Marlon', 'Robitaille', '1956-04-22', 'M', '99 rue Léon Dierx', '91160', 'Longjumeau', '0107401746', '', false, 1, 2),
('Leone', 'Lereau', '1934-07-26', 'F', '10 cours Jean Jaures', '33200', 'Bordeaux', '0549954217', '', false, 1, 2),
('Pomeroy', 'Bussière', '1924-04-14', 'M', '48 rue Frédéric Chopin', '78000', 'Versailles', '0174325252', '', false, 1, 2), --80
('Raoul', 'Boulet', '1934-08-16', 'M', '13 place Charles de Gaulle', '59650', 'Villeneuve dAsq', '0542096019','', false, 1, 2),
('Peppin', 'Chandonnet', '1959-10-25', 'M', '67 rue Marguerite', '91170', 'Viry Chatillon', '0132593627', '', false, 1, 2),
('Burkett', 'Nadeau', '1968-09-11', 'M', '61 rue Saint Ferreol', '69330', 'Meyzieu', '0440804063', '', false, 1, 2),
('Charles', 'Trudeau', '1978-12-13', 'M', '91 rue des Groussay', '93110', 'Rosny-Sous-Bois', '0145426060', '', false, 1, 2),
('Moïse', 'Legget', '1979-08-27', 'M', '4 rue Hubert de Lisle', '34400', 'Lunel', '0479902654', '', false, 1, 2), --85
('Yolande', 'Chrétien', '1942-08-27', 'F', '36 rue Michel Ange', '94270', 'Le Kremlin Bicetre', '0141537797', '', false, 1, 2),
('Dorene', 'Lebel', '1981-01-18', 'F', '80 avenue Jean Portalis', '19000', 'Tulle', '0568538508', '', false, 1, 2),
('Norbert', 'Garland', '1976-11-10', 'M', '52 rue Hubert de Lisle', '39000', 'Lons le Saunier', '0287228522', '', false, 1, 2),
('Pierre', 'Beaulac', '1970-07-23', 'M', '97 quai des Belges', '77100', 'Meaux', '0100434530', '', false, 1, 2),

('Stéphane', 'Lessard', '1926-06-20', 'M', '78 quai des Belges', '13016', 'Marseille', '0431699104', '', false, 1, 2), --90
('Elodie', 'Doucet', '1983-10-29', 'F', '77 avenue des Tuileries', '78820', 'Guyancourt', '0158494922', '', false, 1, 2),
('Aloin', 'Robert', '1984-03-16', 'M', '72 rue de Strasbourg', '92110', 'Clichy', '0164971190', '', false, 1, 2),
('Pierre', 'Tanguay', '1969-01-12', 'M', '18 chemin du Lavarin Sud', '06800', 'Cagnes Sur Mer', '0409100840', '', false, 1, 2),
('Patricia', 'Quirron', '1951-04-20', 'F', '63 chemin Challet', '62800', 'Liévin', '0375077681', '', true, 1, 2),
('Loyal', 'Corbeil', '1972-08-07', 'M', '47 chemin Challet', '59000', 'Lille', '0316120567', 'Plaie purulente', true, 2, 2), --95
('Trinette', 'Lebel', '1929-02-20', 'F', '1 rue Ernest Renan', '77500', 'Chelles', '0194676704', '', false, 1,2),
('Nicolas', ' Saucier', '1988-10-14', 'M', '26 rue St Ferréol', '57070', 'Metz', '0312743487', '', false, 1, 2),
('Aymon', 'Aupry', '1979-01-06', 'M', '44 rue de la Grande Fusterie', '62700', 'Freguer', '0240809962', '', false, 1, 2),
('Simon', 'Lesage', '1948-09-29', 'M', '66 rue de Strasbourg', '93390', 'Clichy sous bois', '0176845923', '', false, 1, 2),
('Baptiste', 'Desruisseaux', '1965-04-17', 'M', '83 avenue Voltaire', '71000', 'Mâcon', '0330127899', '', false, 1, 2), --100
('Vincent', 'Bois', '1945-12-26', 'M', '3 boulevard de la Libération', '13011', 'Marseille', '0405107194','sénilité', false, 1, 2),
('Forrest', 'Goudreau', '1977-02-07', 'M', '99 rue des Nations Unies', '92210', 'Saint Cloud', '0144172062', '', false, 1, 2),
('Algernon', 'Lapresse', '1946-04-22', 'M', '1 boulevard Aristide Briand', '71200', 'Le Creusot', '0331193676', '', false, 1, 2),
('Clarice', 'Gadbois', '1975-04-06', 'F', '43 rue des Nations Unies', '93200', 'Saint Denis', '0113491664', '', false, 1, 2),
('Blondelle', 'Marloux', '1935-07-03', 'F', '28 rue de la République', '69002', 'Lyon', '0406033902', '', false, 1, 2), --105
('Timothée', 'Lévesque', '1956-07-05', 'M', '43 avenue Millies Lacroix', '78990', 'Elancourt', '0183913945', '', false, 1, 2),
('Laurence', 'Lefèbvre', '1964-08-13', 'F', '84 avenue Jean Portalis', '19000', 'Tulle', '0588606906', '', true, 2, 2),
('Amber', 'Authier', '1976-10-31', 'F', '57 boulevard Albin Durand', '73000', 'Chambéry', '0413941412', '', false, 1, 2),
('Sébastien', 'Moquin', '1972-03-03', 'M', '52 rue Pierre de Coubertin', '31200', 'Toulouse', '0599307761', '', false, 1, 2),
('Alphonsine', 'Laforge', '1936-10-10', 'F', '25 avenue du Maréchal Juin', '97450', 'Saint Louis', '0280600667', '', true, 1, 2), --110
('Lotye', 'Auger', '1995-07-08', 'M', '71 boulevard Bryas', '59170', 'Croix', '0375933442', '', false, 1, 2),
('Quincy', 'Grandbois', '1994-04-25','M', '27 rue du Fossé des Tanneurs', '83000', 'Toulon', '0427726708', 'bras cassé-accident de skateboard', false, 1, 2),
('Edith', 'Primeau', '1956-09-13', 'F', '66 rue Léon Dierx', '87280', 'Limoges', '0583650242', '', false, 1, 2),
('Alphonsine', 'Saurel', '1975-03-09', 'F', '16 avenue Millies Lacroix', '97610', 'Dzaoudzi', '0220279417', '', false, 1, 2),
('Ruby', 'Paquin', '1968-11-27', 'F', '11 chemin des Bateliers', '16000', 'Angoulême', '0511092482', '', false, 1, 2), --115
('Namo', 'Allaire', '1990-03-02', 'M', '74 rue de Groussay', '93230', 'Romainville', '0135298934', 'Déchirure musculaire', true,2, 2),
('Gérard', 'Charette', '1944-06-16', 'M', '93 rue La Boétie', '75015', 'Paris', '0165634204', '', false, 1, 2),
('Danielle', 'Beaulieu', '1951-05-01', 'F', '20 rue des Lacs', '95220', 'Herblay', '0429989071', '', false, 1, 2),
('Martin', 'Gadbois', '1955-09-16', 'M', '23 rue Goya', '97160', 'Le Moule', '0509928766', '', false, 1, 2),
('Maurelle', 'Roy', '1990-08-12', 'F', '37 rue de la mer aux diamants', '92120', 'Montrouge', '0118291224', 'repos après infarctus', true, 2, 2), --120
('Karel', 'Lessard', '1940-11-25', 'M', '95 avenue Jean Portalis', '37200', 'Tours', '0241194519', '', false, 1, 2),
('Anton', 'Déziel', '1930-11-16', 'M', '45 rue des lieutenants de Provence', '39100', 'Dole', '0381159084', '', false, 1, 2),
('Ansel', 'Richard', '1924-09-07', 'M', '51 place Charles de Gaulle', '93250', 'Villemomble', '0131342583', '', true, 1, 2),
('Claudette', 'Houde', '1994-05-13', 'F', '32 rue Gouin de Beauchesne', '44600', 'Saint-Nazaire', '0292249503', '', false, 1, 2),
('Vincent', 'Veronneau', '1963-09-05', 'M', '99 rue Bonnet', '94400', 'Vitry-sur-Seine', '0100861780', '',false, 1, 1), --125
('Patrice', 'Baron', '1971-03-01', 'M', '9 rue Ernest Renan', '77500', 'Chelles', '0143489705', 'vomissements chroniques', false, 1, 2),
('Marcel', 'Grenier', '1975-12-04', 'M', '89 rue Sébastopol', '97230', 'Sainte-Marie', '0560411365', '', false, 1, 2),
('Kari', 'Lavoie', '1984-02-17', 'F', '8 avenue Jules Ferry', '92310', 'Sèvres', '0120007235', '', false, 1, 2),
('Edith', 'Paradis', '1989-02-07', 'F', '34 rue Clement Marot', '66100', 'Perpignan', '0426033935', '', false, 1, 2),
('Brie', 'Rocher', '1964-02-11', 'F', '42 rue Gue Jacquet', '36000', 'Châteauroux', '0295743904', '', false, 1, 2), --130
('Avril', 'Bureau', '1978-02-02', 'F', '61 avenue Jules Ferry', '93240', 'Stains', '0127417303', '',false, 1, 2),
('Ormazd', 'Covillon', '1982-07-24', 'M', '38 rue Michel Ange', '76610', 'Le Havre', '0297550917', 'mélanome de la cuisse', false, 1, 2),
('Joseph', 'Baril', '1965-11-24', 'M', '48 rue du Fossé des Tanneurs', '74200', 'Thonon-Les-Bains', '0101040506', '', false, 1, 2),
('Juliette', 'Caya', '1989-04-08', 'F', '3 rue Pierre Motte', '69110', 'Sainte-Foy-lès-Lyon', '0506081236','', true, 2, 2),
('Marin', 'Chesnay', '1982-11-02', 'M', '64 rue Jean Monnet', '95500', 'Gonesse', '0118765130', '', false, 1, 2), --135
('David', 'Guay', '1985-12-25', 'M', '80 rue Jean Villar', '60000', 'Beauvais', '0367158540', '', false, 1, 2),
('Fabien', 'Dupont', '1992-02-26', 'M', '45 rue du Pape', '84000', 'Avignon', '0439541595', 'pied écrasé par machine industrielle', true, 1, 2),
('Estelle', 'Therrien', '1990-01-13', 'F', '83 place Maurice Charretier', '08000', 'Charleville-Mézières', '0338583996', '', false, 1, 2),
('Agate', 'Allard', '1971-07-10', 'F', '66 rue Cazade', '93700', 'Drancy', '0120739683', '', false, 1, 2), --139

-- Cabinet 3 // Patient 140 à 196
('Fanchon', 'Vaillancour', '1948-03-12', 'F', '13 avenue Voltaire', '06520', 'Magagnosc', '0424124935', '', false, 1, 3), --140
('Fortuné', 'Métivier', '1958-06-12', 'M', '76 rue du Limas', '64100', 'Bayonne', '0559521106', 'ATCD de crise cardiaque en mai 2018', false, 1, 3),
('Nathalie', 'Vadeboncoeur', '1941-06-28', 'F', '78 rue des six Frères Ruellan', '13300', 'Salon de Provence', '0452820139', '', false, 1, 3),
('Elita', 'Gracia', '1962-06-30', 'F', '73 rue Cazade', '93700', 'Drancy', '0154999509', '', false, 1, 3),
('Armand', 'Bousquet', '1945-12-22', 'M', '9 rue de Limas', '21200', 'Beaune', '0357193826', 'ATCD de phlébite et embolie pulmonaire', false, 1, 3),
('Jayden', 'Armstrong', '1962-04-28', 'M', '70 place du Jeu de Paume', '69400', 'Villefranche sur Saône', '0474660447', '', false, 1, 3), --145
('Matthieu', 'Avare', '1959-03-16', 'M', '48 cours Franklin Roosevelet', '13006', 'Marseille', '0429023840', '', false, 1, 3),
('Dominique', 'Veronneau', '1923-11-21', 'F', '88 rue Marie de Medicis', '64200', 'Biarritz', '0345472405','Début de sénilité due à lâge', true, 1, 3),
('Camille', 'Brisette', '1942-04-19', 'F', '97 chemin des Bateliers', '13001', 'Marseille', '0439168184', '', false, 1, 3),
('Raymond', 'Gagnon', '1942-12-04', 'M', '73 rue des Violettes', '18200', 'Orval', '0248964034', '', true, 1, 3),
('Russell', 'Descoteaux', '1957-11-20', 'M', '51 place de la Gare', '68000', 'Colmar', '0350721887', '', false, 1, 3), --150
('Bertrand', 'Gradasso', '1959-12-12', 'M', '89 rue des Lilas', '14500', 'Cassote', '0233215293', '', false, 1, 3),
('Thierry', 'Gribois', '1934-02-23', 'M', '77 avenue des Amandiers', '93140', 'Bondy', '0160618151', 'Mélanome de la cuisse', true, 1, 3),
('Eugène', 'Barrientos', '1947-02-01', 'M', '63 rue Contrescarpe', '94350', 'Villiers sur Marne', '0187650599', '', false, 1, 3),
('Mercer', 'Mailly', '1978-06-30', 'M', '53 rue des Etangs', '76000', 'Rouen', '0287181178', 'AT : main prise dans une machine', true, 1, 3),
('Félicien', 'Dufresne', '1944-01-23', 'M', '96 rue Reine Elisabeth', '48000', 'Mende', '0491470636', '', false, 1, 3), --155
('Emilie', 'Charron', '1988-09-05', 'F', '2 rue de la Paroisse' ,'33260', 'La Tête de Buch', '0586965231', 'Suite de couche', true, 1, 3),
('Millard', 'Mireault', '1983-08-23', 'M', '55 rue Marie de Medicis', '06400', 'Cannes', '0482818419', '', false, 1, 3),
('Gauthier', 'Panetier', '1948-05-23', 'M', '84 rue des six frères Ruellan', '57200', 'Sarguemines', '0348709489', '', false, 1, 3),
('Marsilius', 'Jalbert', '1934-08-14', 'M', '6 avenue des Amandiers', '93000', 'Bobigny', '0125481631', '', false, 1, 3),
('Véronique', 'Sevier', '1967-05-27', 'F', '27 rue Lenotre', '35700', 'Rennes', '0268922315','En fauteil', true, 1, 3), --160
('Maureen', 'Dostie', '1938-09-01', 'F', '29 avenue des Prés', '95160', 'Montmorency', '0110771911', '', false, 1, 3),
('Marshall', 'Roy', '1962-11-01', 'M', '63 boulevard Albin Durand', '95800', 'Cergy', '0145745526', '', false, 1, 3),
('Ruth', 'Plante', '1971-04-25', 'F', '14 rue Porte Verte', '81100', 'Castres', '0547310000', '', false, 1, 3),
('Yseult', 'Avise', '1927-02-16', 'F', '55 rue Adolphe Wurtz', '97231', 'Le Robert', '0574650627', '', false, 1, 3),
('Amid', 'Bourassa', '1946-11-13', 'M', '49 avenue Millies Lacroix', '38130', 'Echirolles', '0548961265', '', false, 1, 3), --165
('Honorée', 'Poissonnier', '1959-08-05', 'F', '85 rue du Lavarin Sud', '14000', 'Caen', '0248675925', 'Accident de voiture, retour au domicile après 4 mois hospitalisé', true, 1, 3),
('Raina', 'Quirion', '1974-01-02', 'F', '73 avenue des Jacynthes', '41000', 'Blois', '0465862354', '', false, 1, 3),
('Justin', 'Coupart', '1936-08-08', 'M', '4 rue des Coudriers', '68200', 'Mulhouse', '0578959983', '', false, 1, 3),
('Cécile', 'Majory', '1947-07-08', 'F', '93 place Maurice-Charretier', '94500', 'Champigny sur Marne', '0185763918', '', false, 1, 3),
('Xavière', 'Tisserand', '1957-08-05', 'F', '53 boulevard de la Libération', '13011', 'Marseille', '0495355369', '', false, 1, 3), --170

('Marja', 'Trevo', '1963-02-13', 'F', '29 rue Pierre de Coubertin', '31300', 'Toulouse', '0504275940', 'Diabète sous Glucophage', false, 1, 3),
('Maija', 'Rajala', '1947-12-12', 'F', '18 avenue deS tilleuls', '23000', 'Guéret', '0502517624', '', false, 1, 3),
('Eulalié', 'Aubé', '1951-08-08', 'F', '80 avenue des Prés', '34000', 'Montpellier', '0492954756', 'mélanome bras droit', true,1 ,3),
('Alice', 'Jacques', '1931-12-20', 'F', '93 rue Sébastopol', '17100', 'Saintes', '0568029095', '', false, 1, 3),
('Guérin', 'Savard', '1983-01-04', 'M', '79 place Charles de Gaulle', '59491', 'Villeneuve-dAscq', '0391056394', '', false, 1, 3), --175
('Marcel', 'Beaudoin', '1959-12-20', 'M', '33 rue Adolphe Wurtz', '76140', 'Le Petit-Quevilly', '0297385359', '', false, 1, 3),
('Verney', 'Montminy', '2002-05-29', 'M', '96 rue de la Pompe', '04100', 'Manosque', '0409197528', '', false, 1, 3),
('Karlotte', 'René', '1986-02-17', 'F', '81 rue Bonneterie', '59370', 'Mons-En-Baroeul', '0370045112', 'Accouchement à la maison', true, 1, 3),
('Claudette', 'de Chateaub', '2007-01-09', 'F', '59 rue Marie de Médicis', '95870', 'Bezons', '0137184637', '', false, 1, 3),
('Nemo', 'Descoteaux', '1961-02-21', 'M', '64 rue de Simferopol', '97230', 'Sainte-Marie', '0549424403', 'fracture de la clavicule', true, 2, 3), --180
('Arthur', 'De La Vergne', '2005-08-22', 'M', '88 rue de Strasbourg', '92110', 'Clichy', '0152499112', '',false, 1, 3),
('Percy', 'Lavallée', '1948-03-08', 'M', '37 route de Lyon', '92130', 'Issy-Les-Moulineaux', '0111097592','', false, 1, 3),
('Fannie', 'Truchon', '2000-01-19', 'F', '80 route de Lyon', '13800', 'Istres', '0416168932', 'infarctus en janvier 2020', false, 1, 3),
('Isabelle', 'Lagrange', '1951-02-12', 'F', '48 rue Isambard', '94260', 'Fresnes', '0126007007', 'diabétique', true, 2, 3),
('Brie', 'Lambert', '1960-05-07', 'F', '75 cours du Maréchal Joffre', 'Denain', '59220', '0308635578','', false, 1, 3), --185
('Raoul', 'Longpré', '1974-03-30', 'M', '16 rue de la Gra,de Fusterie', 'Brunoy', '91800', '0112202194','', false, 1, 3),
('Gilles', 'Sicard', '1977-06-07', 'M', '83 place Napoléon', 'Lambersart', '59130', '0311734978','', false,1, 3),
('Zachary', 'Desilets', '1937-06-03', 'M', '31 avenue de Marliotz', 'Antibes', '06600', '0498033664','', false, 1, 3),
('Manon', 'Grimard', '1972-01-29', 'F', '21 rue Margueritte', 'Villiers-Le-Bel', '95400', '0171504748', '', false, 1, 3),
('Véronique', 'Lereau', '2007-03-07', 'F', '26 rue du Clair Blocage', 'La Seyne-Sur-mer', '83500', '0432143199', '', false, 1, 3), --190
('Charles', 'Douffet', '1982-11-24', 'M', '38 rue des Dunes', 'Saint-Maur-Des-Fossès', '94100', '0119821124', 'souffle au coeur', true, 1, 3),
('Emilie', 'Moquin', '1971-01-30', 'F', '27 place Vaclav Havel', 'Villenave-Dornon', '33140', '0319710130', '', false, 1, 3 ),
('Maureen', 'Cressac', '1959-07-30', 'F', '51 rue de la goutte argentée', 'Rouen', '76000', '0263032184','', false, 1, 3),
('Marie', 'Racine', '1962-11-25', 'F', '58 rue Isambard', '35300', 'Fougères', '0264280080', '', false, 1, 3),
('Fabien', 'Tessier', '1999-04-17', 'M', '1 boulevard Albin Durand', 'Châlons-en-Champagne', '51000', '0360436138', 'Hyperventilation', false, 1, 3), --195
('Juliette', 'Martineau', '1972-05-01', 'F', '92 avenue de Bouvines', 'Sedan', '08200', '0370472199', '', false, 1, 3), --196



-- Cabinet 4 // Patient 197 à 261
('Kathy', 'Rodriguez Cedillo', '1951-12-20', 'F', '72 avenue des Bouvines', '89100', 'Sens', '0378802105', '', false, 1, 4), --197
('Melville', 'Fouquet', '1922-05-12', 'M', '40 avenue de Provence', '06220', 'Vallauris', '0488101630', 'Grabataire, sous Polimur et Stérasine', true, 2, 4),
('Laurence', 'Marchesseault', '1920-03-01', 'F', '27 boulevard du Cerf', '79000', 'Niort', '0580137533', 'Diabète sous Glucophage', true, 1, 4),
('Laetitia', 'Chalut', '1933-01-22', 'F', '91 rue Saint Germain', '92230', 'Gennevilliers', '0170971946', '', true, 2, 4), --200
('Coralie', 'Gougeon', '1990-03-04', 'F', '88 square de la Couronne', '77330', 'Ozoir la Ferriere', '0168615940', '', false, 1, 4),
('Odette', 'Lamotte', '1952-08-12', 'F', '80 rue Jean Vilar', '33130', 'Bègles', '0568987487', '', false, 1, 4),
('Qiao', 'Tang', '1926-10-01', 'M', '44 boulevard Albin Durand', '71100', 'Chalon sur Saône', '0399795850', 'Mauvaise continence aux selles et aux urines', true, 2, 4),
('Callum', 'Hurst', '1948-07-30', 'M',  '25 cours Maréchal-Joffre', '76200', 'Dieppe','0247364702', '', false, 1, 4),
('Harriette', 'Covillon', '1961-06-07', 'F', '2 rue de Lille', '59280', 'Armentières', '0322518646', '', false, 1, 4), --205
('Linette', 'Favreau', '1956-01-11', 'M', '20 place de la Gare', '92700', 'Colombes', '0111495118', 'ATCD de névrite optique non complètement résolue', false, 1, 4),
('Soren', 'Villeneuve', '1949-03-10', 'M', '53 rue des Dunes', '94100', 'Saint-Maur-Des-Fosses', '0106040721', '', false, 1, 4),
('Arnaud', 'Clément', '1979-11-17', 'F', '34 rue Bonnet', '94400', 'Vitry-Sur-Seine', '0181150181', 'Accident de moto, broches au niveau des deux tibias', true, 1, 4),
('Harbin', 'Daigle', '1943-09-06', 'M', '46 rue Beauveau', '13002', 'Marseille', '0431789788', 'Prothèse de genou', false, 1, 4),
('Arthur', 'Riquier', '1935-10-21', 'M', '3 rue Porte Orange', '84200', 'Carpentras', '0481175075', 'Névrite diabétique', true, 1, 4), --210

('Fleur', 'Racicot', '1988-07-11', 'F', '50 Cours Eisenhower', 'Denain', '59220', '0374097175', '', false, 1, 4),
('Julienne', 'Neufville', '1969-03-03', 'F', '60 rue Lenôtre', 'Rennes', '35000', '0285267754', 'antécédents infarctus septembre 2017', false, 1, 4),
('Charline', 'Davignon', '1950-12-04', 'F', '41 rue Pierre de Coubertin', 'Toulouse', '31100', '0551232088', '', false, 1, 4),
('Serge', 'Soucy', '1982-07-29', 'M', '13 place de la gare', 'Colombes', '92700', '0131939489', '', true, 2, 4),
('Patricia', 'Laux', '1997-03-13', 'F', '5 place de la République', 'Lyon', '69004', '0494052986', '', false,1, 4), --215
('Orane', 'Dupuis', '1965-03-16', 'F', '4 rue du Paille en queue', 'Levallois-Perret', '92300', '0125644035', '', false, 1, 4 ),
('Patricia', 'Chesnay', '1969-02-08', 'F', '23 rue Banaudon', 'Lyon', '69008', '0449380650', 'Maladie deCronh', false, 1, 4),
('Benjamin', 'Moreau', '1999-10-23', 'M', '62 rue Gouin de Beauchesne', 'Saint-Nazaire', '44600', '0283815318', '', true, 1, 4),
('Armand', 'Paulet', '1989-01-06', 'M', '36 boulevard Amiral Courbet', 'Orvault', '44700', '0294670020', '', false, 1, 4),
('Madeleine', 'Mathieu', '1969-06-13', 'F', '90 rue Bonnet', 'Voiron', '38500', '0458273696', '', false, 1, 4), --220
('Mathilde', 'Etoile', '1978-08-10', 'F', '50 rue de la Bonneterie', 'Montauban', '82000', '0593420133', '', true, 2, 4),
('Angelette', 'Beaupré', '1992-02-03', 'F', '3 rue des six frères Ruellan', 'Sarreguemines', '57200', '0355128573', '', false, 1, 4),
('Louis', 'Rousseau', '1972-12-29', 'M', '55 rue des Soeurs', 'Juan-Les-Pins', '06160', '0421173263', '', false, 1, 4),
('André', 'Girard', '1973-10-17', 'M', '73 rue de Chaligny', 'Nevers', '58000', '0380675802', '', false, 1, 4),
('Karel', 'Moïse', '1978-08-25', 'M', '47 rue du Fossé des Tanneurs', 'Torcy', '77200', '0125586754', 'antécédents diabète+crse cardiaque', true, 2, 4), --225
('Hamilton', 'Bouvier', '1961-08-03', 'M', '4 rue Ernest Renan', 'Choisy-Le-Roi', '94600', '0172203191', '', false, 1, 4),
('Pascale', 'Louineaux', '1946-06-09', 'F', '85 rue de Genève', 'Alfortville', '94140', '0189615529', '', false, 1, 4),
('Vanessa', 'Parizeau', '1971-07-06', 'F', '11 rue Victor Hugo', 'Compiègne', '60200', '0396077361', '', true, 2, 4),
('Geneviève', 'Coupart', '1969-05-28', 'F', '17 rue Marie de Médicis', 'Biarritz', '64200', '0504483452','', false,1, 4),
('Marko', 'Kaiser', '2001-05-21', 'M', '77 rue SAdi Carnot', 'Aurillac', '15000', '0454477880', '', false, 1, 4), --230
('Wolfgang', 'Ackerman', '1986-02-04', 'M', '56 rue Nationale', 'Paris', '75007', '0132484412', '', false,1, 4),
('Taylor', 'Farrell', '1949-07-23', 'M', '59 rue des Soeurs', 'La Celle-Saint-Cloud', '78170', '0159378051', '', false, 1, 4),
('Enzo', 'Gomes Silva', '1963-09-02', 'M', '2 rue de Kiev', 'Saint-Etienne', '42000', '0407128699', 'insuffisance rénale', true, 1, 4),
('Andreas', 'Krogh', '1937-10-11', 'M', '31 rue Goya', 'Le Moule', '97160', '0518360158', '', false, 1, 4),
('Mads', 'Lind', '1973-11-22', 'M', '35 rue DuBailly', 'Reims', '51100', '0338896035', '', false, 1, 4), --235
('Carole', 'Grégoire', '1990-12-05', 'F', '96 rue Reine Elisabeth', 'Metz', '57000', '0322372537', '', false, 1, 4),
('Franck', 'Veilleux', '1994-03-27', 'M', '75 chemin du Lavarin Sud', 'Calais', '62100', '0378591578', '',false, 1, 4),
('Murielle', 'Meunier', '1970-07-23', 'F', '9 avenue de Provence', ' Valence', '26000', '0465198489', '', false, 1, 4),
('Valentin', 'Desjardins', '1954-01-11', 'M', '11 rue Jean Vilar', 'Bergerac', '24100', '0573545383', '', false, 1, 4),
('Telford', 'Moïse', '1958-02-15', 'M', '6 place Napoléon', 'Le Blanc-Mesnil', '93150', '0121933825', '',true, 2, 4), --240
('Murielle', 'Gauvin', '1953-12-09', 'F', '17 rue Léon Dierx', 'Longjumeau', '91160', '0134018274', 'cander du poumon', false, 1, 4),
('Géraldine', 'Hiver', '1945-04-06', 'F', '91 square de la Couronne', 'Paris', '75002', '0193531509', '', false, 1 , 4),
('Gérard', 'LaGarde', '1983-05-12', 'H', '5 place Talleyrand', 'Laval', '53000', '0216433189', '', false, 1, 4),
('Nathalie', 'Houle', '1961-06-06', 'F', '1 route de Lyon', 'Joué-Les-Tours', '37300', '0245323263', '', false, 1, 4),
('Serge', 'Barjavel', '1943-11-25', 'H', '41 rue de la Hulotais', 'Saint-pol-Sur-Mer', '59430', '0357246558', '', false, 1, 4), --245
('Fabienne', 'Poirier', '1968-08-26', 'F', '72 rue Cazade', 'Dreux', '28100', '0211876713', '', true, 1, 4),
('Jeanne', 'Doiron', '1991-04-17', 'F', '40 rue Beauvau', 'Marseille', '13001', '0461799654', '', false, 1, 4),
('Alphonsine', 'Jolicoeur', '1953-09-20', 'F', '22 rue de la Boétie', 'Poissy', '78300', '0104461214', '', false, 1, 4),
('Sacripant', 'Bériault', '2001-10-15', 'M', '5 rue Margueritte', '94300', 'Vincennes', '0125129503', 'bras cassé accident de moto', false, 1, 4),
('Ranugad', 'Tuk', '1971-04-18', 'M', '19 place de Miremont', '94140', 'Villeneuve Saint Georges', '0137028712', '', true, 2, 4), --250
('Meneaduc', 'Roper', '1955-03-21', 'M', '13 rue de la petite Fusterie', '19100', 'Brive la Gaillarde','0576969657', '', false, 1, 4),
('Himeka', 'Kumagai','1951-05-08', 'F', '72 rue de la Hulotais', '02100', 'Saint-Quentin', '0341774972', '', false, 1, 4),
('Sergey', 'Bobrov', '1935-10-19', 'M', '38 place de la gare', '31770', 'Colomiers', '0572074467', '', false, 1, 4),
('Janina', 'Belyakova', '1954-01-15', 'F', '2 chemin du lavarin sud', '94230', 'Cachan', '0183486675', '',false, 1, 4),
('Jana', 'Novosadova', '1965-06-29', 'F', '53 boulevard Albin Durand', '95800', 'Cergy', '0144968259', '', false, 1, 4), --255
('Dominik', 'Maclean', '1995-07-19', 'M', '45 boulevard Aristide Briand', '76120', 'Le Grand Quevilly', '0290564410', '', false, 1, 4),
('Colin', 'Gordon', '1986-12-12', 'M', '12 place Bouvard', '59130', 'Lambersart', '0318671783', 'bras cassé accident du travail', false, 1, 4),
('Ragnar', 'Ragnarsson', '1998-08-15', 'M', '38 route de Lyon', '92130', 'Issy-Les-Moulineaux', '0183157356', '', false, 1, 4),
('Szepes', 'Rezsx', '1993-01-13', 'M', '24 rue Charles Corbeau', '76400', 'Fécamp', '0227861684', '', false, 1, 4),
('Juliette', 'Guédry', '1942-08-02', 'F', '80 rue des trois dragons', '38300', 'Bourgoin-Jallieu', '0453464100', '', false, 1, 4), --260
('Cerise', 'Vertefeuille', '1974-12-25', 'F', '43 rue Saint Germain', '85140', 'Garges-Lès-Gonesse', '0143344408', '', false, 1, 4); --261


-- carnet de suivi
INSERT INTO logbook(creation_date, planned_date, done_date, observations, daily, done, ending_date, nurse_id, patient_id) VALUES
-- cabinet 1 / patients 1 à 17 /nurses 1,2,4,6,8,14 et 16
('2021-01-23', '2021-01-24', '2021-01-24', 'Faire une prise de sang et contrôler la tension', false, true, null, 1, 1), -- Logbook 1
('2021-01-23', '2021-01-25', '2021-01-25', 'Nettoyage de plaie/pansement', true, true, '2021-01-27', 2, 2),
('2020-12-26', '2020-12-26', '2020-12-26', 'Prise de sang à domicile', false, true, null, 4,3),
('2020-11-14', '2020-11-15', '2020-12-15', 'Injection traitement', true, true, '2020-12-15', 6, 4),
('2021-01-22', '2021-01-23', '2021-01-23', 'Vérification des points suite opération genou', true, true, '2021-02-08', 8, 5), -- Logbook 5
('2021-01-27', '2021-01-27', '2021-01-27', 'Nettoyage cathéter', true, true, '2021-02-16', 14, 6),
('2021-01-28', '2021-01-28', '2021-01-28', 'Première prise traitement injectable', false, true, null, 16, 7),
('2021-01-29', '2021-01-29', '2021-01-29', 'Prise de sang', false, true, null, 1, 8),
('2020-12-14', '2020-12-15', '2020-12-15', 'Prise de sang à domicile', false, true, null, 2, 9), 
('2021-01-23', '2021-01-24', '2021-01-24', 'Nettoyage de plaie, vérification points', true, true, '2021-02-12', 4, 10), -- Logbook 10
('2021-01-19', '2021-01-20', '2021-01-20', 'Controle de la glycémie, normal', false, true, null, 6, 11),
('2020-12-04', '2020-12-05', '2020-12-05', 'Controle de la glycémie, 1,13', false, true, null, 8, 12),
('2019-10-12', '2019-10-13', '2019-10-13', 'Prise en charge plaie du pied', true, true, '2019-11-23', 14, 13),
('2021-01-25', '2021-01-25', '2021-01-25', 'RAS', false, false, null, 16, 14),
('2021-01-25', '2021-01-28', '2021-01-28', 'nouveau pansement à partir du 28', true, true, '2021-01-31', 1, 15), -- Logbook 15
('2020-12-14', '2020-12-15', '2020-12-15', 'Prise de sang à domicile', false, true, null, 2, 16),
('2019-05-08', '2019-05-10', '2019-05-10', 'Prise de sang à domicile', false, true, null, 4, 17),
('2018-03-01', '2018-03-02', '2018-03-02', 'Pansement à refaire sur plaie genou', true, true, '2018-03-06', 6, 18),
('2018-04-21', '2018-04-22', '2018-04-22', 'Lavement, conseils', false, true, null, 8, 19),
('2018-06-07', '2018-06-08', '2018-06-08', 'Problèmes pour aller à la selle, lavement', false, true, null, 14, 20), -- Logbook 20
('2019-11-02', '2019-11-03', '2019-11-03', 'Crise, prise en charge journalière', true, true, '2019-12-30', 16, 21),
('2020-03-12', '2020-03-13', '2020-03-13', 'Lavement, conseils', false, true, null, 2, 22), 
('2020-08-21', '2020-08-22', '2020-08-22', 'Nettoyage de cathéter', false, true, null, 1, 23),
('2020-09-12', '2020-09-13', '2020-09-13', 'Nettoyage de cathéter + pansement', false, true, null, 2, 24),
('2020-10-27', '2020-10-28', '2020-10-28', 'Prise de sang', false, true, null, 4, 25), -- Logbook 25
('2020-11-27', '2020-12-28', '2020-12-28', 'Vérification des points, pansement', false, true, null, 6, 26),
('2021-01-25', '2021-01-28', '2021-01-28', 'attention patient dur à piquer', false, true, '2021-01-31', 8, 27),
('2021-01-25', '2021-01-25', '2021-01-25', 'Lavement, conseils', false, true, null, 14, 28),
('2021-01-25', '2021-01-25', '2021-01-25', 'Problèmes pour aller à la selle, lavement', false, true, null, 16, 29),
-- LOGBOOKS
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaie un peu rouge, à surveiller', false, true, null, 1, 30), -- Logbook 30
('2021-02-01', '2021-02-01', '2021-02-01', 'Infection urinaire toujours en cours', false, true, null, 2, 31),
('2021-02-01', '2021-02-01', '2021-02-01', 'Tension 13/7', false, true, null, 4, 32),
('2021-02-01', '2021-02-01', '2021-02-01', 'En bonne forme à la dernière visite', false, true, null, 6, 33),
('2021-02-01', '2021-02-01', '2021-02-01', 'Surveillance de points', false, true, null, 8, 34), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Récupérer l ordonnance', false, true, null, 14, 35), -- Logbook 35
('2021-02-01', '2021-02-01', '2021-02-01', 'Fausse route, gorge toujours irritée', false, true, null, 16, 36), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Changement d ordonnance, vérifier posologie', false, true, null, 1, 37),
('2021-02-01', '2021-02-01', '2021-02-01', 'Prégabaline à augmenter, vu avec le neuro', false, true, null, 2, 38),
('2021-02-01', '2021-02-01', '2021-02-01', 'Rappeler le RDV avec son médecin pour le 15/02', false, true, null, 4, 39),
('2021-02-01', '2021-02-01', '2021-02-01', 'Dernière prise 11/6', false, true, null, 6, 40), -- Logbook 40
('2021-02-01', '2021-02-01', '2021-02-01', 'Dernier point à retirer', false, true, null, 8, 41), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaie cicatrisant mal, à surveiller ++', false, true, null, 14, 42),
('2021-02-01', '2021-02-01', '2021-02-01', 'Doliprane 500 en +', false, true, null, 16, 43), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Mauvaise chute en sortant de la douche, surveiller les hématomes', false, true, null, 1, 44), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaie plantaire, coupure verre', false, true, null, 2, 45), -- Logbook 45
('2021-02-01', '2021-02-01', '2021-02-01', 'Peau fragile, vérifier l absence d hématome après injection', false, true, null, 4, 46),
('2021-02-01', '2021-02-01', '2021-02-01', 'Vérifier les papiers pour la visite chez le généraliste', false, true, null, 6, 47), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Fin d ordonnance, vérifier la nouvelle', false, true, null, 8, 48), 
('2021-02-01', '2021-02-01', '2021-02-01', 'RAS', false, true, null, 14, 49), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Lavage cheveux, demander pour le coiffeur', false, true, null, 16, 50), -- Logbook 50
('2021-02-01', '2021-02-01', '2021-02-01', 'Glaires normaux', false, true, null, 1, 51), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Cloques suite à une brulure, pansement gras', false, true, null, 2, 52),
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaie purulente', false, true, null, 4, 53), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Nausées post chimio', false, true, null, 6, 54), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaques d eczéma derrière les genoux à surveiller', false, true, null, 8, 55), -- Logbook 55
('2021-02-02', '2021-02-02', '2021-02-02', 'Urines troubles, ECBU à prévoir', false, true, null, 14, 56),
('2021-02-02', '2021-02-02', '2021-02-02', 'Sondage difficile', false, true, null, 16, 57), 
('2021-02-02', '2021-02-02', '2021-02-02', 'RAS', false, true, null, 1, 58), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Revérifier le cathé', false, true, null, 2, 59),
('2021-02-02', '2021-02-02', '2021-02-02', 'Poser cataplasme', false, true, null, 4, 60), -- Logbook 60
('2021-02-02', '2021-02-02', '2021-02-02', 'Revoir ordo avant PDS', false, true, null, 6, 61), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Nouvelle ordonnance', false, true, null, 8, 62), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Reprise après arrachage de sonde', false, true, null, 14, 63), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Plaie du cuir chevelu suturée', false, true, null, 16, 64), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Tension 12/8', false, true, null, 1, 65), -- Logbook 65
('2021-02-02', '2021-02-02', '2021-02-02', 'Encore douloureuse', false, true, null, 2, 66),
('2021-02-02', '2021-02-02', '2021-02-02', 'Lavement avant coloscopie', false, true, null, 4, 67), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Reprise de fistule', false, true, null, 6, 68),

-- LOGBOOK PATIENT CABINET 2 // PATIENT 69 à 139

('2021-02-01', '2021-02-01', '2021-02-01', 'Plaie un peu rouge, à surveiller', false, true, null, 3, 69), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Infection urinaire toujours en cours', false, true, null, 5, 70), -- Logbook 70
('2021-02-01', '2021-02-01', '2021-02-01', 'Tension 13/7', false, true, null, 10, 71), 
('2021-02-01', '2021-02-01', '2021-02-01', 'En bonne forme à la dernière visite', false, true, null, 12, 72),
('2021-02-01', '2021-02-01', '2021-02-01', 'Surveillance de points', false, true, null, 3, 73),
('2021-02-01', '2021-02-01', '2021-02-01', 'Récupérer l ordonnance', false, true, null, 5, 74), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Fausse route, gorge toujours irritée', false, true, null, 10, 75), -- Logbook 75
('2021-02-01', '2021-02-01', '2021-02-01', 'Changement d ordonnance, vérifier posologie', false, true, null, 12, 76), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Prégabaline à augmenter, vu avec le neuro', false, true, null, 3, 77),
('2021-02-01', '2021-02-01', '2021-02-01', 'Rappeler le RDV avec son médecin pour le 15/02', false, true, null, 5, 78), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Dernière prise 11/6', false, true, null, 10, 79),
('2021-02-01', '2021-02-01', '2021-02-01', 'Dernier point à retirer', false, true, null, 12, 80), -- Logbook 80
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaie cicatrisant mal, à surveiller ++', false, true, null, 3, 81),
('2021-02-01', '2021-02-01', '2021-02-01', 'Doliprane 500 en +', false, true, null, 5, 82),
('2021-02-01', '2021-02-01', '2021-02-01', 'Mauvaise chute en sortant de la douche, surveiller les hématomes', false, true, null, 10, 83),
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaie plantaire, coupure verre', false, true, null, 12, 84), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Peau fragile, vérifier l absence d hématome après injection', false, true, null, 3, 85), -- Logbook 85
('2021-02-01', '2021-02-01', '2021-02-01', 'Vérifier les papiers pour la visite chez le généraliste', false, true, null, 5, 86), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Fin d ordonnance, vérifier la nouvelle', false, true, null, 10, 87), 
('2021-02-01', '2021-02-01', '2021-02-01', 'RAS', false, true, null, 12, 88), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Lavage cheveux, demander pour le coiffeur', false, true, null, 3, 89), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Glaires normaux', false, true, null, 5, 90), -- Logbook 90
('2021-02-01', '2021-02-01', '2021-02-01', 'Cloques suite à une brulure, pansement gras', false, true, null, 10, 91),
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaie purulente', false, true, null, 12, 92), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Nausées post chimio', false, true, null, 3, 93), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaques d eczéma derrière les genoux à surveiller', false, true, null, 5, 94),
('2021-02-02', '2021-02-02', '2021-02-02', 'Urines troubles, ECBU à prévoir', false, true, null, 10, 95), -- Logbook 95
('2021-02-02', '2021-02-02', '2021-02-02', 'Sondage difficile', false, true, null, 12, 96), 
('2021-02-02', '2021-02-02', '2021-02-02', 'RAS', false, true, null, 3, 97),
('2021-02-02', '2021-02-02', '2021-02-02', 'Revérifier le cathé', false, true, null, 5, 98), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Poser cataplasme', false, true, null, 10, 99), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Revoir ordo avant PDS', false, true, null, 12, 100), -- Logbook 100
('2021-02-02', '2021-02-02', '2021-02-02', 'Nouvelle ordonnance', false, true, null, 3, 101), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Reprise après arrachage de sonde', false, true, null, 5, 102), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Plaie du cuir chevelu suturée', false, true, null, 10, 103),
('2021-02-02', '2021-02-02', '2021-02-02', 'Tension 12/8', false, true, null, 12, 104), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Encore douloureuse', false, true, null, 3, 105), -- Logbook 105
('2021-02-02', '2021-02-02', '2021-02-02', 'Lavement avant coloscopie', false, true, null, 5, 106), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Reprise de fistule', false, true, null, 10, 107), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaie un peu rouge, à surveiller', false, true, null, 12, 108), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Infection urinaire toujours en cours', false, true, null, 3, 109),
('2021-02-01', '2021-02-01', '2021-02-01', 'Tension 13/7', false, true, null, 5, 110), -- Logbook 110
('2021-02-01', '2021-02-01', '2021-02-01', 'En bonne forme à la dernière visite', false, true, null, 10, 111),
('2021-02-01', '2021-02-01', '2021-02-01', 'Surveillance de points', false, true, null, 12, 112),
('2021-02-01', '2021-02-01', '2021-02-01', 'Récupérer l ordonnance', false, true, null, 3, 113),
('2021-02-01', '2021-02-01', '2021-02-01', 'Fausse route, gorge toujours irritée', false, true, null, 5, 114),
('2021-02-01', '2021-02-01', '2021-02-01', 'Changement d ordonnance, vérifier posologie', false, true, null, 10, 115), -- Logbook 115
('2021-02-01', '2021-02-01', '2021-02-01', 'Prégabaline à augmenter, vu avec le neuro', false, true, null, 12, 116), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Rappeler le RDV avec son médecin pour le 15/02', false, true, null, 3, 117), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Dernière prise 11/6', false, true, null, 5, 118), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Dernier point à retirer', false, true, null, 10, 119), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaie cicatrisant mal, à surveiller ++', false, true, null, 12, 120), -- Logbook 120
('2021-02-01', '2021-02-01', '2021-02-01', 'Doliprane 500 en +', false, true, null, 3, 121), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Mauvaise chute en sortant de la douche, surveiller les hématomes', false, true, null, 5, 122), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaie plantaire, coupure verre', false, true, null, 10, 123), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Peau fragile, vérifier l absence d hématome après injection', false, true, null, 12, 124),
('2021-02-01', '2021-02-01', '2021-02-01', 'Vérifier les papiers pour la visite chez le généraliste', false, true, null, 3, 125), -- Logbook 125 
('2021-02-01', '2021-02-01', '2021-02-01', 'Fin d ordonnance, vérifier la nouvelle', false, true, null, 5, 126), 
('2021-02-01', '2021-02-01', '2021-02-01', 'RAS', false, true, null, 10, 127),
('2021-02-01', '2021-02-01', '2021-02-01', 'Lavage cheveux, demander pour le coiffeur', false, true, null, 12, 128), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Glaires normaux', false, true, null, 3, 129), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Cloques suite à une brulure, pansement gras', false, true, null, 5, 130), -- Logbook 130
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaie purulente', false, true, null, 10, 131), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Nausées post chimio', false, true, null, 12, 132), 
('2021-02-01', '2021-02-01', '2021-02-01', 'Plaques d eczéma derrière les genoux à surveiller', false, true, null, 3, 133), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Urines troubles, ECBU à prévoir', false, true, null, 5, 134),
('2021-02-02', '2021-02-02', '2021-02-02', 'Sondage difficile', false, true, null, 10, 135), -- Logbook 135
('2021-02-02', '2021-02-02', '2021-02-02', 'RAS', false, true, null, 12, 136),
('2021-02-02', '2021-02-02', '2021-02-02', 'Revérifier le cathé', false, true, null, 3, 137),
('2021-02-02', '2021-02-02', '2021-02-02', 'Poser cataplasme', false, true, null, 5, 138), 
('2021-02-02', '2021-02-02', '2021-02-02', 'Revoir ordo avant PDS', false, true, null, 10, 139),

-- LOGBOOK PATIENT CABINET 3 // PATIENT 140 à 196

('2021-02-03', '2021-02-03', '2021-02-03', 'Plaie un peu rouge, à surveiller', false, true, null, 3, 140), -- Logbook 140
('2021-02-03', '2021-02-03', '2021-02-03', 'Infection urinaire toujours en cours', false, true, null, 7, 141), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Tension 13/7', false, true, null, 9, 142), 
('2021-02-03', '2021-02-03', '2021-02-03', 'En bonne forme à la dernière visite', false, true, null, 10, 143),
('2021-02-03', '2021-02-03', '2021-02-03', 'Surveillance de points', false, true, null, 11, 144),
('2021-02-03', '2021-02-03', '2021-02-03', 'Récupérer l ordonnance', false, true, null, 12, 145), -- Logbook 145
('2021-02-03', '2021-02-03', '2021-02-03', 'Fausse route, gorge toujours irritée', false, true, null, 14, 146), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Changement d ordonnance, vérifier posologie', false, true, null, 15, 147), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Prégabaline à augmenter, vu avec le neuro', false, true, null, 3, 148),
('2021-02-03', '2021-02-03', '2021-02-03', 'Rappeler le RDV avec son médecin pour le 15/02', false, true, null, 7, 149), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Dernière prise 11/6', false, true, null, 9, 150), -- Logbook 150
('2021-02-03', '2021-02-03', '2021-02-03', 'Dernier point à retirer', false, true, null, 10, 151), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Plaie cicatrisant mal, à surveiller ++', false, true, null, 11, 152),
('2021-02-03', '2021-02-03', '2021-02-03', 'Doliprane 500 en +', false, true, null, 12, 153),
('2021-02-03', '2021-02-03', '2021-02-03', 'Mauvaise chute en sortant de la douche, surveiller les hématomes', false, true, null, 14, 154),
('2021-02-03', '2021-02-03', '2021-02-03', 'Plaie plantaire, coupure verre', false, true, null, 15, 155), -- Logbook 155
('2021-02-03', '2021-02-03', '2021-02-03', 'Peau fragile, vérifier l absence d hématome après injection', false, true, null, 3, 156), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Vérifier les papiers pour la visite chez le généraliste', false, true, null, 7, 157), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Fin d ordonnance, vérifier la nouvelle', false, true, null, 9, 158), 
('2021-02-03', '2021-02-03', '2021-02-03', 'RAS', false, true, null, 10, 159), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Lavage cheveux, demander pour le coiffeur', false, true, null, 11, 160), -- Logbook 160
('2021-02-03', '2021-02-03', '2021-02-03', 'Glaires normaux', false, true, null, 12, 161), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Cloques suite à une brulure, pansement gras', false, true, null, 14, 162),
('2021-02-03', '2021-02-03', '2021-02-03', 'Plaie purulente', false, true, null, 15, 163), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Nausées post chimio', false, true, null, 3, 164), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Plaques d eczéma derrière les genoux à surveiller', false, true, null, 7, 165), -- Logbook 165
('2021-02-03', '2021-02-03', '2021-02-03', 'Urines troubles, ECBU à prévoir', false, true, null, 9, 166),
('2021-02-03', '2021-02-03', '2021-02-03', 'Sondage difficile', false, true, null, 10, 167), 
('2021-02-03', '2021-02-03', '2021-02-03', 'RAS', false, true, null, 11, 168),
('2021-02-03', '2021-02-03', '2021-02-03', 'Revérifier le cathé', false, true, null, 12, 169), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Poser cataplasme', false, true, null, 14, 170), -- Logbook 170
('2021-02-03', '2021-02-03', '2021-02-03', 'Revoir ordo avant PDS', false, true, null, 15, 171), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Nouvelle ordonnance', false, true, null, 3, 172), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Reprise après arrachage de sonde', false, true, null, 7, 173), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Plaie du cuir chevelu suturée', false, true, null, 9, 174),
('2021-02-03', '2021-02-03', '2021-02-03', 'Tension 12/8', false, true, null, 10, 175), -- Logbook 175
('2021-02-03', '2021-02-03', '2021-02-03', 'Encore douloureuse', false, true, null, 11, 176), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Lavement avant coloscopie', false, true, null, 12, 177), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Reprise de fistule', false, true, null, 14, 178), 
('2021-02-03', '2021-02-03', '2021-02-03', 'Plaie un peu rouge, à surveiller', false, true, null, 15, 179), 
('2021-02-04', '2021-02-04', '2021-02-04', 'Infection urinaire toujours en cours', false, true, null, 3, 180), -- Logbook 180
('2021-02-04', '2021-02-04', '2021-02-04', 'Tension 13/7', false, true, null, 7, 181),
('2021-02-04', '2021-02-04', '2021-02-04', 'En bonne forme à la dernière visite', false, true, null, 9, 182),
('2021-02-04', '2021-02-04', '2021-02-04', 'Surveillance de points', false, true, null, 10, 183),
('2021-02-04', '2021-02-04', '2021-02-04', 'Récupérer l ordonnance', false, true, null, 11, 184),
('2021-02-04', '2021-02-04', '2021-02-04', 'Fausse route, gorge toujours irritée', false, true, null, 12, 185), -- Logbook 185
('2021-02-04', '2021-02-04', '2021-02-04', 'Changement d ordonnance, vérifier posologie', false, true, null, 14, 186),
('2021-02-04', '2021-02-04', '2021-02-04', 'Prégabaline à augmenter, vu avec le neuro', false, true, null, 15, 187), 
('2021-02-04', '2021-02-04', '2021-02-04', 'Rappeler le RDV avec son médecin pour le 15/02', false, true, null, 3, 188), 
('2021-02-04', '2021-02-04', '2021-02-04', 'Dernière prise 11/6', false, true, null, 7, 189), 
('2021-02-04', '2021-02-04', '2021-02-04', 'Dernier point à retirer', false, true, null, 9, 190), -- Logbook 190
('2021-02-04', '2021-02-04', '2021-02-04', 'Plaie cicatrisant mal, à surveiller ++', false, true, null, 10, 191),
('2021-02-04', '2021-02-04', '2021-02-04', 'Doliprane 500 en +', false, true, null, 11, 192), 
('2021-02-04', '2021-02-04', '2021-02-04', 'Mauvaise chute en sortant de la douche, surveiller les hématomes', false, true, null, 12, 193), 
('2021-02-04', '2021-02-04', '2021-02-04', 'Plaie plantaire, coupure verre', false, true, null, 14, 194), 
('2021-02-04', '2021-02-04', '2021-02-04', 'Peau fragile, vérifier l absence d hématome après injection', false, true, null, 15, 195), -- Logbook 195
('2021-02-04', '2021-02-04', '2021-02-04', 'Vérifier les papiers pour la visite chez le généraliste', false, true, null, 3, 196), 

-- LOGBOOK PATIENT CABINET 4 // PATIENT 197 à 261

('2021-02-05', '2021-02-05', '2021-02-05', 'Plaie un peu rouge, à surveiller', false, true, null, 5, 197), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Infection urinaire toujours en cours', false, true, null, 7, 198), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Tension 13/7', false, true, null, 8, 199), 
('2021-02-05', '2021-02-05', '2021-02-05', 'En bonne forme à la dernière visite', false, true, null, 9, 200), -- Logbook 200
('2021-02-05', '2021-02-05', '2021-02-05', 'Surveillance de points', false, true, null, 11, 201),
('2021-02-05', '2021-02-05', '2021-02-05', 'Récupérer l ordonnance', false, true, null, 13, 202), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Fausse route, gorge toujours irritée', false, true, null, 14, 203), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Changement d ordonnance, vérifier posologie', false, true, null, 15, 204), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Prégabaline à augmenter, vu avec le neuro', false, true, null, 16, 205), -- Logbook 205
('2021-02-05', '2021-02-05', '2021-02-05', 'Rappeler le RDV avec son médecin pour le 15/02', false, true, null, 5, 206), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Dernière prise 11/6', false, true, null, 7, 207),
('2021-02-05', '2021-02-05', '2021-02-05', 'Dernier point à retirer', false, true, null, 8, 208), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Plaie cicatrisant mal, à surveiller ++', false, true, null, 9, 209),
('2021-02-05', '2021-02-05', '2021-02-05', 'Doliprane 500 en +', false, true, null, 11, 210), -- Logbook 210
('2021-02-05', '2021-02-05', '2021-02-05', 'Mauvaise chute en sortant de la douche, surveiller les hématomes', false, true, null, 13, 211),
('2021-02-05', '2021-02-05', '2021-02-05', 'Plaie plantaire, coupure verre', false, true, null, 14, 212), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Peau fragile, vérifier l absence d hématome après injection', false, true, null, 15, 213), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Vérifier les papiers pour la visite chez le généraliste', false, true, null, 16, 214), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Fin d ordonnance, vérifier la nouvelle', false, true, null, 5, 215), -- Logbook 215 
('2021-02-05', '2021-02-05', '2021-02-05', 'RAS', false, true, null, 7, 216), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Lavage cheveux, demander pour le coiffeur', false, true, null, 8, 217), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Glaires normaux', false, true, null, 9, 218), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Cloques suite à une brulure, pansement gras', false, true, null, 11, 219),
('2021-02-05', '2021-02-05', '2021-02-05', 'Plaie purulente', false, true, null, 13, 220), -- Logbook 220
('2021-02-05', '2021-02-05', '2021-02-05', 'Nausées post chimio', false, true, null, 14, 221), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Plaques d eczéma derrière les genoux à surveiller', false, true, null, 15, 222),
('2021-02-05', '2021-02-05', '2021-02-05', 'Urines troubles, ECBU à prévoir', false, true, null, 16, 223),
('2021-02-05', '2021-02-05', '2021-02-05', 'Sondage difficile', false, true, null, 5, 224), 
('2021-02-05', '2021-02-05', '2021-02-05', 'RAS', false, true, null, 7, 225), -- Logbook 225
('2021-02-05', '2021-02-05', '2021-02-05', 'Revérifier le cathé', false, true, null, 8, 226), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Poser cataplasme', false, true, null, 9, 227), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Revoir ordo avant PDS', false, true, null, 11, 228), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Nouvelle ordonnance', false, true, null, 13, 229), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Reprise après arrachage de sonde', false, true, null, 14, 230), -- Logbook 230 
('2021-02-05', '2021-02-05', '2021-02-05', 'Plaie du cuir chevelu suturée', false, true, null, 15, 231),
('2021-02-05', '2021-02-05', '2021-02-05', 'Tension 12/8', false, true, null, 16, 232), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Encore douloureuse', false, true, null, 5, 233), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Lavement avant coloscopie', false, true, null, 7, 234), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Reprise de fistule', false, true, null, 8, 235), -- Logbook 235
('2021-02-05', '2021-02-05', '2021-02-05', 'Plaie un peu rouge, à surveiller', false, true, null, 9, 236), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Infection urinaire toujours en cours', false, true, null, 11, 237),
('2021-02-05', '2021-02-05', '2021-02-05', 'Tension 13/7', false, true, null, 13, 238),
('2021-02-05', '2021-02-05', '2021-02-05', 'En bonne forme à la dernière visite', false, true, null, 14, 239),
('2021-02-05', '2021-02-05', '2021-02-05', 'Surveillance de points', false, true, null, 15, 240), -- Logbook 240
('2021-02-05', '2021-02-05', '2021-02-05', 'Récupérer l ordonnance', false, true, null, 16, 241),
('2021-02-05', '2021-02-05', '2021-02-05', 'Fausse route, gorge toujours irritée', false, true, null, 5, 242),
('2021-02-05', '2021-02-05', '2021-02-05', 'Changement d ordonnance, vérifier posologie', false, true, null, 7, 243),
('2021-02-05', '2021-02-05', '2021-02-05', 'Prégabaline à augmenter, vu avec le neuro', false, true, null, 8, 244), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Rappeler le RDV avec son médecin pour le 15/02', false, true, null, 9, 245), -- Logbook 245 
('2021-02-05', '2021-02-05', '2021-02-05', 'Dernière prise 11/6', false, true, null, 11, 246), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Dernier point à retirer', false, true, null, 13, 247), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Plaie cicatrisant mal, à surveiller ++', false, true, null, 14, 248),
('2021-02-05', '2021-02-05', '2021-02-05', 'Doliprane 500 en +', false, true, null, 15, 249), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Mauvaise chute en sortant de la douche, surveiller les hématomes', false, true, null, 16, 250), -- Logbook 250 
('2021-02-05', '2021-02-05', '2021-02-05', 'Plaie plantaire, coupure verre', false, true, null, 5, 251), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Peau fragile, vérifier l absence d hématome après injection', false, true, null, 7, 252),
('2021-02-05', '2021-02-05', '2021-02-05', 'Vérifier les papiers pour la visite chez le généraliste', false, true, null, 8, 253),
('2021-02-05', '2021-02-05', '2021-02-05', 'Fin d ordonnance, vérifier la nouvelle', false, true, null, 9, 254),
('2021-02-05', '2021-02-05', '2021-02-05', 'RAS', false, true, null, 11, 255), -- Logbook 255
('2021-02-05', '2021-02-05', '2021-02-05', 'Lavage cheveux, demander pour le coiffeur', false, true, null, 13, 256), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Glaires normaux', false, true, null, 14, 257), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Cloques suite à une brulure, pansement gras', false, true, null, 15, 258),
('2021-02-05', '2021-02-05', '2021-02-05', 'Plaie purulente', false, true, null, 16, 259), 
('2021-02-05', '2021-02-05', '2021-02-05', 'Nausées post chimio', false, true, null, 5, 260), -- Logbook 260 
('2021-02-05', '2021-02-05', '2021-02-05', 'Plaques d eczéma derrière les genoux à surveiller', false, true, null, 7, 261); 


-- Medical Act
INSERT INTO medical_act(name, category) VALUES
('Soins infirmiers', 'category'),
('Prise de sang', 'category'),
('Pilulier', 'category'),
('Nursing', 'category'),
('Pansement', 'category'),
('Injection', 'category'),
('Sonde urinaire', 'category'),
('Aspiration trachéo', 'category'),
('Lavage urinaire', 'category'),
('Prise de tension', 'category');

-- Medical Act in Logbook
INSERT INTO logbook_has_medical_act(logbook_id, medical_act_id) VALUES
(1, 5),
(2, 2),
(3, 4),
(4, 3),
(5, 7),
(6, 6),
(7, 5),
(8, 2),
(9, 4),
(10, 4),
(11, 7),
(12, 8),
(13, 2),
(14, 5),
(15, 6),
(16, 5),
(17, 8),
(18, 1),
(19, 4),
(20, 9),
(21, 2),
(22, 8),
(23, 4),
(24, 5),
(25, 2),
(26, 1),
(27, 3),
(28, 9),
(29, 4),
(30, 1),
(31, 7),
(32, 10),
(33, 1),
(34, 5),
(35, 1),
(36, 8),
(37, 3),
(38, 3),
(39, 1),
(40, 10),
(41, 5),
(42, 5),
(43, 3),
(44, 1),
(45, 5),
(46, 6),
(47, 1),
(48, 1),
(49, 1),
(50, 1),
(51, 8),
(52, 5),
(53, 5),
(54, 1),
(55, 1),
(56, 9),
(57, 7),
(58, 1),
(59, 6),
(60, 1),
(61, 2),
(62, 3),
(63, 7),
(64, 5),
(65, 10),
(66, 9),
(67, 1),
(68, 1),
(69, 1),
(70, 7),
(71, 10),
(72, 1),
(73, 5),
(74, 1),
(75, 8),
(76, 3),
(77, 3),
(78, 1),
(79, 10),
(80, 5),
(81, 5),
(82, 3),
(83, 1),
(84, 5),
(85, 6),
(86, 1),
(87, 1),
(88, 1),
(89, 1),
(90, 8),
(91, 5),
(92, 5),
(93, 1),
(94, 1),
(95, 9),
(96, 7),
(97, 1),
(98, 6),
(99, 1),
(100, 2),
(101, 3),
(102, 7),
(103, 5),
(104, 10),
(105, 9),
(106, 1),
(107, 1),
(108, 1),
(109, 7),
(110, 10),
(111, 1),
(112, 5),
(113, 1),
(114, 8),
(115, 3),
(116, 3),
(117, 1),
(118, 10),
(119, 5),
(120, 5),
(121, 3),
(122, 1),
(123, 5),
(124, 6),
(125, 1),
(126, 1),
(127, 1),
(128, 1),
(129, 8),
(130, 5),
(131, 5),
(132, 1),
(133, 1),
(134, 9),
(135, 7),
(136, 1),
(137, 6),
(138, 1),
(139, 2),
(140, 1),
(141, 7),
(142, 10),
(143, 1),
(144, 5),
(145, 1),
(146, 8),
(147, 3),
(148, 3),
(149, 1),
(150, 10),
(151, 5),
(152, 5),
(153, 3),
(154, 1),
(155, 5),
(156, 6),
(157, 1),
(158, 1),
(159, 1),
(160, 1),
(161, 8),
(162, 5),
(163, 5),
(164, 1),
(165, 1),
(166, 9),
(167, 7),
(168, 1),
(169, 6),
(170, 1),
(171, 2),
(172, 3),
(173, 7),
(174, 5),
(175, 10),
(176, 9),
(177, 1),
(178, 1),
(179, 1),
(180, 7),
(181, 10),
(182, 1),
(183, 5),
(184, 1),
(185, 8),
(186, 3),
(187, 3),
(188, 1),
(189, 10),
(190, 5),
(191, 5),
(192, 3),
(193, 1),
(194, 5),
(195, 6),
(196, 1),
(197, 1),
(198, 7),
(199, 10),
(200, 1),
(201, 5),
(202, 1),
(203, 8),
(204, 3),
(205, 3),
(206, 1),
(207, 10),
(208, 5),
(209, 5),
(210, 3),
(211, 1),
(212, 5),
(213, 6),
(214, 1),
(215, 1),
(216, 1),
(217, 1),
(218, 8),
(219, 5),
(220, 5),
(221, 1),
(222, 1),
(223, 9),
(224, 7),
(225, 1),
(226, 6),
(227, 1),
(228, 2),
(229, 3),
(230, 7),
(231, 5),
(232, 10),
(233, 9),
(234, 1),
(235, 1),
(236, 1),
(237, 7),
(238, 10),
(239, 1),
(240, 5),
(241, 1),
(242, 8),
(243, 3),
(244, 3),
(245, 1),
(246, 10),
(247, 5),
(248, 5),
(249, 3),
(250, 1),
(251, 5),
(252, 6),
(253, 1),
(254, 1),
(255, 1),
(256, 1),
(257, 8),
(258, 5),
(259, 5),
(260, 1),
(261, 1);


-- Tour
-- INSERT INTO tour(date, information, nurse_id, cabinet_id) VALUES
-- Cabinet 1
-- ('2021-02-04', 'Première tournée de test : Camille Janvier', 2, 1),
-- ('2021-02-02', 'Deuxième tournée de test : Camille Janvier', 2, 1),
-- ('2021-02-03', 'Troisième tournée, changement d infirmier : Olivier Raynal', 1, 1),
-- ('2021-02-04', 'Quatrième tournée, toujours Olivier Raynal', 1, 1);

-- Tour has patient
-- INSERT INTO tour_has_patient(tour_id, patient_id, order_tour) VALUES

-- Tournée 1, cabinet 1, patients 1 à 68
-- (1, 2, 1),
-- (1, 3, 2),
-- (1, 6, 3),
-- (1, 8, 4),
-- (1, 10, 5),
-- (1, 54, 6),
-- (1, 32, 7),
-- (1, 16, 8),
-- (1, 65, 10),
-- (1, 26, 11),
-- (1, 12, 12),
-- (1, 17, 13),
-- (1, 21, 14),
-- (1, 22, 15),
-- (1, 31, 16),
-- (1, 33, 17),
-- (1, 34, 18),
-- (1, 41, 19),
-- (1, 42, 20),
-- (1, 46, 21),
-- (1, 48, 22),
-- (1, 47, 23),
-- (1, 62, 24),
-- (1, 64, 25),
-- (1, 67, 26),
-- Tournée 2
-- (2, 2, 1),
-- (2, 3, 2),
-- (2, 6, 3),
-- (2, 8, 4),
-- (2, 11, 5),
-- (2, 54, 6),
-- (2, 32, 7),
-- (2, 16, 8),
-- (2, 5, 9),
-- (2, 57, 10),
-- (2, 26, 11),
-- (2, 13, 12),
-- (2, 17, 13),
-- (2, 21, 14),
-- (2, 26, 15),
-- (2, 31, 16),
-- (2, 33, 17),
-- (2, 37, 18),
-- (2, 41, 19),
-- (2, 42, 20),
-- (2, 45, 21),
-- (2, 48, 22),
-- (2, 47, 23),
-- (2, 62, 24),
-- (2, 65, 25),
-- (2, 67, 26),
-- Tournée 3
-- (3, 2, 1),
-- (3, 4, 2),
-- (3, 6, 3),
-- (3, 9, 4),
-- (3, 10, 5),
-- (3, 54, 6),
-- (3, 32, 7),
-- (3, 15, 8),
-- (3, 5, 9),
-- (3, 62, 10),
-- (3, 25, 11),
-- (3, 12, 12),
-- (3, 18, 13),
-- (3, 21, 14),
-- (3, 22, 15),
-- (3, 31, 16),
-- (3, 33, 17),
-- (3, 38, 18),
-- (3, 41, 19),
-- (3, 42, 20),
-- (3, 46, 21),
-- (3, 48, 22),
-- (3, 52, 23),
-- Tournée 4
-- (4, 2, 1),
-- (4, 4, 2),
-- (4, 6, 3),
-- (4, 8, 4),
-- (4, 11, 5),
-- (4, 12, 6),
-- (4, 32, 7),
-- (4, 16, 8),
-- (4, 5, 9),
-- (4, 64, 10),
-- (4, 26, 11),
-- (4, 15, 12),
-- (4, 17, 13),
-- (4, 21, 14),
-- (4, 22, 15),
-- (4, 31, 16),
-- (4, 33, 17),
-- (4, 34, 18),
-- (4, 41, 19),
-- (4, 45, 20),
-- (4, 46, 21),
-- (4, 48, 22),
-- (4, 47, 23),
-- (4, 63, 24),
-- (4, 56, 25),
-- (4, 67, 26);

COMMIT;