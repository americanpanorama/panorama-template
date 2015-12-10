#CartoDB data tables used in this application

**This file contains the queries used to generate each of the derived tables used by the application.** We call these tables "materialized", even though they are not technically [Materialized Views](http://www.postgresql.org/docs/9.3/static/sql-creatematerializedview.html) in the PostgreSQL sense. They are simply copies.

**Why do we do this?**

1. Using these copied tables is more efficient, because the query doesn't have to be run every time a new user loads the application.
2. They allow us to make the derived table public (so the application does not require API keys) while keeping the source data private.
3. They make the application more resilient in case the source data tables are undergoing modification or development. Using materialized tables means that the application will always be using a version of the data that is known to work.

**How to use these queries:**

1. Create a new empty table in the CartoDB web interface. This table will be used only temporarily, from which to create our materialized table.
2. Paste the SQL into the CartoDB "Custom SQL query" panel. Click "Apply query".
3. Select "Dataset from query" in the "Edit" menu.
4. Click on the name of the new table to change the name from `untitled_table_NN_copy` to `site_tablename_materialized`.
5. Select "Change privacy" in the "Edit" menu, so that the table is accessible to anyone "With link".
6. (optional) You can now delete the empty table you created in step 1.

The following sections list the names of each of the tables used by the application. The "Tables" section is a list of the source tables used by the query. The "SQL" section documents the query used to generate the derived table.


####site_sampledata_materialized
**Tables:**
`source_sampledata_table1`, `source_sampledata_table2`

**SQL**
```sql
SELECT a.area_sqmi, a.estimate, a.inmigrations, a.name, b.nhgis_join, b.population, b.prev_population, b.state_terr, b.year FROM source_sampledata_table1 a JOIN source_sampledata_table2 b ON a.nhgis_join = b.nhgis_join
```
