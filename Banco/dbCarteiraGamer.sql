CREATE DATABASE dbcarteiragamer;

USE dbcarteiragamer;

/* Tabelas usadas para selects*/
create table Genero(
id_genero int primary key,
genero varchar(25)
);

create table Status(
id_status int primary key,
status varchar(25)
);

create table Avaliacao(
id_avaliacao int primary key,
descricao char(10)
);

insert into Genero(id_genero, genero) 
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

insert into Status(id_status, status)
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

insert into Avaliacao(id_avaliacao, descricao)
values
(1, "1 estrela"),
(2, "2 estrelas"),
(3, "3 estrelas"),
(4, "4 estrelas"),
(5, "5 estrelas"),
(6, "indefinido");


/* Tabelas principais */
create table Usuario(
id_usuario int primary key auto_increment,
email varchar(50) unique,
nome varchar(50),
senha varchar(50),
sexo char(1) default "",
data_nasc char(10),
deletado int default 0
);

create table Jogo(
id_jogo int primary key auto_increment,
id_genero int,
id_status int,
nome varchar(30),
desenvolvedora varchar(30),
publisher varchar(30),
descricao varchar(100),
deletado int default 0,

constraint fk_genero foreign key (id_genero)
references Genero(id_genero),
constraint fk_status foreign key (id_status)
references Status(id_status)
);


insert into Jogo(nome_jogo, desenvolvedora, publisher, descricao, id_genero, id_Status)
values("Hollow Knight", "Team Cherry", "Team Cherry", "Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis.", 11, 1);

select * from Genero;
select * from Status;
select * from Usuario;
select * from Jogo;