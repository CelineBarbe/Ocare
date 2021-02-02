-- Revert ocare:120-add-document from pg

BEGIN;

DROP VIEW logbook_with_nurse_infos_documents;
            
-- drop field document in logbook
ALTER TABLE logbook 
    DROP document;

COMMIT;
