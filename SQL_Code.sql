create database Spitaliexample
use Spitaliexample

create table Spitali (
Spitali_ID int primary key, 
Emri varchar(50) not null,
Adresa varchar (50) not null,
Qyteti varchar (25) not null,
Zipkodi int,
Klinika varchar (50) not null
)
create table Stafi (
Stafi_ID int primary key,
Emri varchar(50) not null,
Mbiemri varchar(50) not null,
Reparti varchar(50) not null,
Spitali_ID int, foreign key (Spitali_ID) references Spitali(Spitali_ID)
)
create table Doktori (
Doktori_ID int primary key,
Emri varchar(50) not null,
Mbiemri varchar(50) not null,
Ditelindja date,
Gjinia char (1),
Email varchar (25) not null,
Niveli_i_specializimit varchar(25),
Reparti varchar(25) not null,
Paga money,
Spitali_ID int, foreign key (Spitali_ID) references Spitali(Spitali_ID),
Stafi_ID int, foreign key (Stafi_ID) references Stafi(Stafi_ID)
)
create table Pacienti (
Pacienti_ID int primary key,
Emri varchar(50) not null,
Mbiemri varchar(50) not null,
Ditelindja date,
Gjinia char (1),
Email varchar (25) not null,
Historia_shendetsore varchar(100),
Adresa varchar(25) not null,
Grupi_gjakut char(10),
Spitali_ID int, foreign key (Spitali_ID) references Spitali(Spitali_ID),
Doktori_ID int, foreign key (Doktori_ID) references Doktori(Doktori_ID)
)
Create table Laboratori (
Laboratori_ID int primary key,
Lloji varchar (25) not null,
Rezultati varchar (25) not null,
Data_rezultateve date,
Spitali_ID int, foreign key (Spitali_ID) references Spitali(Spitali_ID),
Doktori_ID int, foreign key (Doktori_ID) references Doktori(Doktori_ID)
)
Create table Semundjet (
Semundjet_ID int primary key,
Emri varchar (50) not null,
Simptomat varchar (50) not null,
Niveli  varchar (50) not null,
Pacienti_ID int, foreign key (Pacienti_ID) references Pacienti(Pacienti_ID),
)
Create table Barnat (
Barnat_ID int primary key,
Emri varchar (50) not null,
Receta varchar (50) not null,
Doza  varchar (50) not null,
Pacienti_ID int, foreign key (Pacienti_ID) references Pacienti(Pacienti_ID),
)
Create table Terminet (
Terminet_ID int primary key,
Data_e_termineve varchar (50) not null,
Doktori varchar (50) not null,
Menyra_e_konsultes  varchar (50) not null,
Pacienti_ID int, foreign key (Pacienti_ID) references Pacienti(Pacienti_ID),
Doktori_ID int, foreign key (Doktori_ID) references Doktori(Doktori_ID)
)
create table Pagesat(
Pagesa_ID int primary key,
Pacienti varchar(50) not null,
Sherbimet varchar(50) not null,
Qendrimi_ditor varchar (50) not null,
Sherbimet_ekstra varchar (50) not null,
Menyra_e_pageses varchar(50) not null,
Pacienti_ID int, foreign key (Pacienti_ID) references Pacienti(Pacienti_ID)
)
create table Qyteti (
Qyteti_ID int primary key,
Emri varchar (50) not null,
Zipkodi varchar (50) not null,
Vendbanimi varchar (50) not null,
Vendlindja varchar (50) not null,
Pacienti_ID int, foreign key (Pacienti_ID) references Pacienti(Pacienti_ID),
Doktori_ID int, foreign key (Doktori_ID) references Doktori(Doktori_ID)
)
create table Shteti (
Shteti_ID int primary key,
Emri varchar (50) not null,
Spitali_ID int, foreign key (Spitali_ID) references Spitali(Spitali_ID)
)
create table Dhoma (
Dhoma_ID int primary key,
Nr_dhomes int,
Kati int,
Lloji_dhomes varchar (50) not null,
Nr_pacientit int,
Pacienti_ID int, foreign key (Pacienti_ID) references Pacienti(Pacienti_ID),
Spitali_ID int, foreign key (Spitali_ID) references Spitali(Spitali_ID),
)
create table Orari(
Orari_ID int primary key,
Fillimi time,
Fundi time,
Overtime time,
Doktori_ID int, foreign key (Doktori_ID) references Doktori(Doktori_ID),
Stafi_ID int, foreign key (Stafi_ID) references Stafi(Stafi_ID)
)
create table Sherbimet (
Sherbimet_ID int primary key,
Kujdesi_shendetsor varchar (100) not null,
Kujdesi_postoperativ varchar (100) not null,
Kujdesi_postnatal varchar (100) not null,
Pacienti_ID int, foreign key (Pacienti_ID) references Pacienti(Pacienti_ID),
Stafi_ID int, foreign key (Stafi_ID) references Stafi(Stafi_ID)
)
create table Medikamentet(
Medikamentet_ID int primary key,
RecetaMjekesore varchar(100) not null,
Emri varchar(100) not null,
Doza int
)
