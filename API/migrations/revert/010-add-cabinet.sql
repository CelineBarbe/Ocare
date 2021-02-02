-- Revert ocare:010-add-cabinet from pg

BEGIN;

DROP TABLE cabinet;

COMMIT;
