/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     10/15/2017 10:30:30 AM                       */
/*==============================================================*/


drop table if exists MONEDA;

drop table if exists TIP_TRANSACCION;

drop table if exists TRANSACCIONES;

/*==============================================================*/
/* Table: MONEDA                                                */
/*==============================================================*/
create table MONEDA
(
   ID                   int not null,
   NOMBRE               varchar(150),
   SIMBOLO              varchar(5),
   primary key (ID)
);

/*==============================================================*/
/* Table: TIP_TRANSACCION                                       */
/*==============================================================*/
create table TIP_TRANSACCION
(
   ID                   int not null,
   NOMBRE               varchar(100),
   primary key (ID)
);

/*==============================================================*/
/* Table: TRANSACCIONES                                         */
/*==============================================================*/
create table TRANSACCIONES
(
   ID                   int not null,
   TIP_TRANSACCION_ID   int,
   IMPORTE              decimal(18,2),
   MONEDA_ID            int,
   MONEDA_REF_ID        int,
   TIPO_CAMBIO          decimal(18,4),
   primary key (ID)
);

alter table TRANSACCIONES add constraint FK_REFERENCE_1 foreign key (TIP_TRANSACCION_ID)
      references TIP_TRANSACCION (ID) on delete restrict on update restrict;

alter table TRANSACCIONES add constraint FK_REFERENCE_2 foreign key (MONEDA_ID)
      references MONEDA (ID) on delete restrict on update restrict;

