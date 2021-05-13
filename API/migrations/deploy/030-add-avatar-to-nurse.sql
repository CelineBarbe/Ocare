-- Deploy ocare:030-add-avatar-to-nurse to pg

BEGIN;

-- rename nurse_id to owner_id
ALTER TABLE cabinet RENAME nurse_id TO owner_id;

-- add field avatar in table nurse
ALTER TABLE nurse 
    ADD COLUMN avatar TEXT NOT NULL DEFAULT 'https://zupimages.net/up/21/03/p5y2.png';


COMMIT;
