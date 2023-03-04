--  creation table produit



CREATE TABLE IF NOT EXISTS public.product
(
    ingredients character varying(255) ,
    description character varying(255) ,
    idproduct integer NOT NULL,
    price integer,
    sizeproduct character varying(100) ,
    statut character varying(200) ,
    idimage integer,
    nameproduct character varying(255)
    CONSTRAINT product_pkey PRIMARY KEY (idproduct),
    CONSTRAINT foreign_key_image FOREIGN KEY (idimage)
        REFERENCES public.image (idimage) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
		
		
		
		) ;
		
	
--sequence pour la table product 


CREATE SEQUENCE product_id_seq
  START WITH 1
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;


-- creation table image 


CREATE TABLE IF NOT EXISTS public.image
(
    filename character varying(255) ,
    url character varying(255) ,
    extensionimage character varying(255) ,
    idimage integer NOT NULL,
    idproduct integer,
    CONSTRAINT image_pkey PRIMARY KEY (idimage)
)	

--sequence pour la table image 


CREATE SEQUENCE image_id_seq
  START WITH 1
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;
