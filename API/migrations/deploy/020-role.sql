-- Deploy ocare:020-role to pg

BEGIN;

-- Adding the nursing role
CREATE ROLE "user" WITH LOGIN;
GRANT USAGE ON SCHEMA public TO "user";
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO "user";


COMMIT;
