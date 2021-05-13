-- Verify ocare:051-add-column-to-patient on pg

BEGIN;

UPDATE patient SET additional_address = 'test';

ROLLBACK;
