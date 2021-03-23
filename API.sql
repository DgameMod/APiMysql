use RegistroAPI;

drop table registro;
Create table Registro(
id int not null primary key auto_increment,
Numero int not null,
FechaRegistro date);

insert into Registro(Numero, FechaRegistro) VALUE (1,str_to_date('   10.10.2021', get_format(date, 'USA')) );
insert into Registro(Numero, FechaRegistro) VALUE (1,curdate());

select * from Registro;
select  MAX(FechaRegistro), MAX(Numero)  as Numero from  Registro;

select Max(FechaRegistro) as FechaRegistro, Max(Numero) as Numero from Registro;

Select * from Registro order by('Numero', 'FechaRegistro'); 
select * from Registro where id=1;

SELECT * FROM Registro ORDER BY Registro.id DESC;