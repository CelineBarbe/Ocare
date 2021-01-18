-- Revert ocare:020-role from pg

BEGIN;

-- Remove the nursing role
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM "user";
REVOKE USAGE ON SCHEMA public FROM "user";
DROP ROLE "user";

COMMIT;
