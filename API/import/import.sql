TRUNCATE TABLE nurse, cabinet, cabinet_has_nurse RESTART IDENTITY;


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
(1, 8, default, default),
(1, 14, default, default),
(1, 16, default, default),
(2, 1, true, default), -- Olivier Raynal - cab 2
(2, 2, false, default),
(2, 3, true, default),
(2, 4, default, default),
(2, 5, default, default),
(2, 6, default, default),
(2, 7, default, default),
(2, 10, true, default),
(2, 12, true, default),
(3, 3, true, default),
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
