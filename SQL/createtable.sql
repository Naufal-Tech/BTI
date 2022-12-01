CREATE TABLE USER
( id_user serial NOT NULL PRIMARY KEY,
  user_id char(50) NOT NULL,
  age char(50) NOT NULL,
);

CREATE TABLE ASSET
( id_item serial NOT NULL PRIMARY KEY,
  item char(50) NOT NULL,
  user_id REFERENCES "USER" (id_user)
);

-- RESULT 1
SELECT DISTINCT item FROM "ASSET" i;

--RESULT 2
SELECT name, item AS asset FROM "USER" p 
JOIN "ASSET" i ON a.user_id = p.id ;