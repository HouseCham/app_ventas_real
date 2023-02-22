CREATE TABLE cliente 
(
	id INT IDENTITY(1,1) PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL
);

CREATE TABLE venta 
(
	id BIGINT IDENTITY(1,1) PRIMARY KEY,
	fecha DATETIME NOT NULL,
	total decimal(16,2) NULL,
	id_cliente INT

	FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

CREATE TABLE producto 
(
	id INT IDENTITY(1,1) PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	precioUnitario DECIMAL(16,2) NOT NULL,
	costo DECIMAL(16,2) NOT NULL,
);

CREATE TABLE concepto 
(
	id BIGINT IDENTITY(1,1) PRIMARY KEY,
	id_venta BIGINT NOT NULL,
	cantidad INT NOT NULL,
	precioUnitario DECIMAL(16,2) NOT NULL,
	importe DECIMAL(16,2) NOT NULL,
	id_producto INT NOT NULL

	FOREIGN KEY (id_venta) REFERENCES venta(id),
	FOREIGN KEY (id_producto) REFERENCES producto(id)
);

--ALTER TABLE cliente
--ADD apellido_p VARCHAR(50) NOT NULL
--ADD apellido_m VARCHAR(50) NOT NULL
--ADD email VARCHAR(150) UNIQUE NOT NULL
--ADD telefono VARCHAR(20)

INSERT INTO cliente (nombre, apellido_p, apellido_m, email, telefono)
VALUES('Ramses', 'Ramirez', 'Vallejo', 'chamses1999@gmail.com', '3121332750');

DELETE FROM cliente;
DBCC CHECKIDENT('cliente', RESEED, 0);

SELECT * FROM cliente;