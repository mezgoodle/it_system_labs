-- Can be used to manually verify (based on startup logs when this changeset is applied)
-- that correct timeouts were applied from beforeEachMigrate.sql
show statement_timeout;
show lock_timeout;