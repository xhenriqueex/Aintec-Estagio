-- Gerado por Oracle SQL Developer Data Modeler 17.3.0.261.1529
--   em:        2017-11-15 15:48:12 BRST
--   site:      Oracle Database 11g
--   tipo:      Oracle Database 11g

--drop table atendimento;
--drop table centroestudos;
--drop table chaves_busca;
----drop table cli_palavraschave; -- remover
--drop table cpf_palavrachave;
--drop table cpj_palavrachave;
--drop table cliente;
--drop table clientepf;
--drop table clientepj;
--drop table contato;
--drop table usuarios;
--drop table departamento;
----drop table documentos;
--drop table endereco;
--drop table docente_palavrachave;
--drop table docente;

CREATE TABLE atendimento (
    ate_id          INTEGER NOT NULL,
    cli_id      INTEGER,
    ate_data        DATE,
    ate_descricao   VARCHAR(4000) NOT NULL
);
--DROP SEQUENCE ate_seq;
CREATE SEQUENCE ate_seq INCREMENT 1 START 1;
ALTER TABLE atendimento ADD CONSTRAINT atendimento_pk PRIMARY KEY ( ate_id );



CREATE TABLE centroestudos (
    cen_id       INTEGER NOT NULL,
    cen_sigla	 VARCHAR(4),
    cen_centro   VARCHAR(40) NOT NULL
);
----DROP SEQUENCE cen_seq;
-- CREATE SEQUENCE cen_seq INCREMENT 1 START 1;
ALTER TABLE centroestudos ADD CONSTRAINT centroestudos_pk PRIMARY KEY ( cen_id );


CREATE TABLE chaves_busca (
    cha_id        INTEGER NOT NULL,
    cha_palavra   VARCHAR(64) NOT NULL
   -- id1       INTEGER NOT NULL
);
--DROP SEQUENCE cha_seq;
CREATE SEQUENCE cha_seq INCREMENT 1 START 1;
CREATE UNIQUE INDEX chaves_busca_idx ON
    chaves_busca ( cha_id ASC );
ALTER TABLE chaves_busca ADD CONSTRAINT chaves_busca_pk PRIMARY KEY ( cha_id );


--CREATE TABLE cli_palavraschave (
--    cch_id   INTEGER NOT NULL,
--    cli_id   INTEGER,
--    cha_id   INTEGER
--);
----DROP SEQUENCE cch_seq;
--CREATE SEQUENCE cch_seq INCREMENT 1 START 1;
--ALTER TABLE cli_palavraschave ADD CONSTRAINT cli_palavraschave_pk PRIMARY KEY ( cch_id );

-- CREATE TABLE cli_palavraschavev1 (
--     id       INTEGER NOT NULL,
--     cli_id   INTEGER,
--     cha_id   INTEGER,
--     id1      INTEGER NOT NULL,
--     id2      INTEGER,
--     id11     INTEGER
-- );
-- 
-- ALTER TABLE cli_palavraschavev1 ADD CONSTRAINT cli_palavraschavev1_pk PRIMARY KEY ( id );


CREATE TABLE cliente (
    cli_id               INTEGER NOT NULL, 
--  Pessoa Física - F
--  Pessoa Jurídica - J
--  Docente - D
    cli_tipo             CHAR NOT NULL,
--  código para dados do cliente
    cli_code             INTEGER NOT NULL,
-- aponta para professor, pessoa física ou pessoa juridica (De acordo com tipo)
    ate_id   INTEGER NOT NULL
);
--DROP SEQUENCE cli_seq;
CREATE SEQUENCE cli_seq INCREMENT 1 START 1;
ALTER TABLE cliente ADD CONSTRAINT cliente_pk PRIMARY KEY ( cli_id );


CREATE TABLE clientepf (
    cpf_id       INTEGER NOT NULL,
    cpf_nome     VARCHAR(40) NOT NULL,
    end_id   INTEGER,
    cpf_rg             VARCHAR(13),
    cpf_rgdata         DATE, 
--  Orgão de expedição do RG
    cpf_rgorgao        VARCHAR(30),
    cpf_cpf            VARCHAR(15),
	cpf_email	VARCHAR(30),
	cpf_fone	VARCHAR(15),
	cpf_cel		VARCHAR(15)
--     id1      INTEGER NOT NULL,
--     id2      INTEGER NOT NULL
);
--DROP SEQUENCE cpf_seq;
CREATE SEQUENCE cpf_seq INCREMENT 1 START 1;
ALTER TABLE clientepf ADD CONSTRAINT clientepf_pk PRIMARY KEY ( cpf_id );
-- CREATE UNIQUE INDEX clientepf__idx ON
--     clientepf ( id1 ASC );
-- 
-- CREATE UNIQUE INDEX clientepf__idxv1 ON
--     clientepf ( id2 ASC );

CREATE TABLE cpf_palavrachave (
    fch_id           INTEGER NOT NULL,
    cpf_id           INTEGER,
    cha_id           INTEGER
);
--DROP SEQUENCE fch_seq;
CREATE SEQUENCE fch_seq INCREMENT 1 START 1;
ALTER TABLE cpf_palavrachave ADD CONSTRAINT cpf_palavrachave_pk PRIMARY KEY ( fch_id );



CREATE TABLE clientepj (
    cpj_id       INTEGER NOT NULL,
    cpj_nome     VARCHAR(40) NOT NULL,
    cpj_cnpj	VARCHAR(17),
    end_id   INTEGER NOT NULL
--     id1      INTEGER NOT NULL
);
--DROP SEQUENCE cpj_seq;
CREATE SEQUENCE cpj_seq INCREMENT 1 START 1;
-- CREATE UNIQUE INDEX clientepj__idx ON
--     clientepj ( id1 ASC );
ALTER TABLE clientepj ADD CONSTRAINT clientepj_pk PRIMARY KEY ( cpj_id );


CREATE TABLE cpj_palavrachave (
    jch_id           INTEGER NOT NULL,
    cpj_id           INTEGER,
    cha_id           INTEGER
);
--DROP SEQUENCE jch_seq;
CREATE SEQUENCE jch_seq INCREMENT 1 START 1;
ALTER TABLE cpj_palavrachave ADD CONSTRAINT cpj_palavrachave_pk PRIMARY KEY ( jch_id );


CREATE TABLE contato (
    con_id         INTEGER NOT NULL,
    con_email      VARCHAR(30),
    con_fone       VARCHAR(15),
    con_cel        VARCHAR(15),
    con_nome       VARCHAR(40) NOT NULL,
    con_vinculo    VARCHAR(20),
    cpj_id         INTEGER
);
--DROP SEQUENCE con_seq;
CREATE SEQUENCE con_seq INCREMENT 1 START 1;
--CREATE UNIQUE INDEX contato__idx ON
--    contato ( cpj_id ASC );
ALTER TABLE contato ADD CONSTRAINT contato_pk PRIMARY KEY ( con_id );


CREATE TABLE departamento (
    dep_id                 INTEGER NOT NULL,
    dep_departamento       VARCHAR(55) NOT NULL,
    cen_id   INTEGER NOT NULL
);
----DROP SEQUENCE dep_seq;
--CREATE SEQUENCE depn_seq INCREMENT 1 START 1;
ALTER TABLE departamento ADD CONSTRAINT departamento_pk PRIMARY KEY ( dep_id );



CREATE TABLE endereco (
    end_id             INTEGER NOT NULL,
    end_logradouro     VARCHAR(40),
    end_num            VARCHAR(6),
    end_complemento    VARCHAR(15),
    end_cep            VARCHAR(9),
    end_cidade         VARCHAR(20),
    end_estado         VARCHAR(2)
);
--DROP SEQUENCE end_seq;
CREATE SEQUENCE end_seq INCREMENT 1 START 1;
ALTER TABLE endereco ADD CONSTRAINT endereco_pk PRIMARY KEY ( end_id );



CREATE TABLE docente_palavrachave (
    dch_id                INTEGER NOT NULL,
    dct_id           INTEGER,
    cha_id            INTEGER
);
--DROP SEQUENCE dch_seq;
CREATE SEQUENCE dch_seq INCREMENT 1 START 1;
ALTER TABLE docente_palavrachave ADD CONSTRAINT docente_palavrachave_pk PRIMARY KEY ( dch_id );

CREATE TABLE usuarios (
    usu_id                INTEGER NOT NULL,
    usu_login           VARCHAR(20) NOT NULL,
    usu_senha            VARCHAR(64) NOT NULL,
    usu_email		VARCHAR(40) not null,
    usu_tipo		CHAR not null
);
--DROP SEQUENCE usu_seq;
CREATE SEQUENCE usu_seq INCREMENT 1 START 1;
ALTER TABLE usuarios ADD CONSTRAINT usuarios_pk PRIMARY KEY ( usu_id );

CREATE TABLE docente (
    dct_id          INTEGER NOT NULL,
 --   pch_id          INTEGER NOT NULL,
    dct_nome        VARCHAR(40) NOT NULL,
    dep_id          INTEGER,
    dct_email      VARCHAR(30),
    dct_fone       VARCHAR(15),
    dct_cel        VARCHAR(15),
--    doc_id          INTEGER NOT NULL,
    dct_lattes     VARCHAR(30)    
);
--DROP SEQUENCE dct_seq;
CREATE SEQUENCE dct_seq INCREMENT 1 START 1;
ALTER TABLE docente ADD CONSTRAINT docente_pk PRIMARY KEY ( dct_id );

