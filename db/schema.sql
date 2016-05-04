DROP TABLE IF EXISTS stars CASCADE;

CREATE TABLE stars (
       stars_id SERIAL UNIQUE PRIMARY KEY,
       starname VARCHAR(255),
       appmag INTEGER,
       absmag INTEGER,
       bv INTEGER,
       radius INTEGER
);
