CREATE DATABASE carteiraGamer;

USE carteiraGamer;

create table tbl_usuario(
id_usuario int primary key auto_increment,
nome_usuario varchar(30),
email_usuario varchar(30),
senha_usuario varchar(30),
sexo char(1) default "",
data_nasc date,
deletado int default 0
);

create table tbl_genero(
id_genero int primary key,
genero varchar(25)
);

create table tbl_status(
id_status int primary key,
status varchar(25)
);

create table tbl_jogo(
id_jogo int primary key auto_increment,
nome_jogo varchar(30),
desenvolvedora varchar(30),
publisher varchar(30),
descricao varchar(100),
id_genero int,
id_status int,
deletado int default 0,
constraint fk_genero foreign key (id_genero)
references tbl_genero(id_genero),
constraint fk_status foreign key (id_status)
references tbl_status(id_status)
);

insert into tbl_genero(id_genero, genero) 
values
(1, "Ação"),
(2, "Aventura"),
(3, "RPG de Ação"),
(4, "RPG de Turno"),
(5, "Estratégia"),
(6, "Puzzle"),
(7, "Luta"),
(8, "Hack-n-slash"),
(9, "Souls-Like"),
(10, "Rogue-Like"),
(11, "Metroidvania"),
(12, "Terror"),
(13, "Survival Horror");

insert into tbl_status(id_status, status)
values
(1, "Platinado"),
(2, "Zerado"),
(3, "Jogando"),
(4, "Em pausa"),
(5, "Na fila"),
(6, "Dropado"),
(7, "Na lista de desejos"),
(8, "Esperando promoção"),
(9, "Eperando o lançamento");

insert into tbl_usuario(nome_usuario, email_usuario, senha_usuario, sexo, data_nasc)
values("David Ramos", "daviddivad@gmail.com", "David@123", "M", 20041225);

insert into tbl_jogo(nome_jogo, desenvolvedora, publisher, descricao, id_genero, id_Status)
values("Hollow Knight", "Team Cherry", "Team Cherry", "Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis.", 11, 1);

select * from tbl_genero;
select * from tbl_status;
select * from tbl_usuario;
select * from tbl_jogo;