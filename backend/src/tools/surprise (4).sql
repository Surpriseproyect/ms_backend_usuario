-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-06-2024 a las 22:35:21
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `surprise`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_BUSCAR_USUARIO` (IN `_CORREO` VARCHAR(200))  BEGIN

SELECT correo, contrasena FROM usuarios WHERE correo = _CORREO LIMIT 1;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR_FACTURA` (IN `_IDUSUARIO` INT(10), IN `_IDMETODOPAGO` INT(10), IN `_ESTADO` VARCHAR(10), IN `_NCUENTA` INT(15))  BEGIN

INSERT INTO facturas(idusuario, idmetodopago, estado, ncuenta)
VALUES (_IDUSUARIO, _IDMETODOPAGO, _ESTADO, _NCUENTA);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR_METODOPAGO` (IN `_TIPOPAGO` VARCHAR(20))  BEGIN

INSERT INTO metodopago(tipopago) VALUES (_TIPOPAGO);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR_PRODUCTO` (IN `_PRODUCTO` VARCHAR(100), IN `_CATEGORIA` VARCHAR(100), IN `_PRECIOU` INT(10), IN `_DESCRIPCION` VARCHAR(200), IN `_IMAGEN` TEXT, IN `_STOCK` INT(10))  BEGIN

INSERT INTO productos(producto, categoria, preciou, descripcion, imagen, stock) VALUES
(_PRODUCTO, _CATEGORIA, _PRECIOU, _DESCRIPCION, _IMAGEN, _STOCK);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR_PROVEEDORES` (IN `PROVEEDOR` VARCHAR(100))  BEGIN

INSERT INTO proveedores(proveedor) VALUES (PROVEEDOR);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR_USUARIO` (IN `_IDENTIFICACION` INT(10), IN `_NOMBRES` VARCHAR(100), IN `_TELEFONO` VARCHAR(10), IN `_CORREO` VARCHAR(200), IN `_CONTRASENA` VARCHAR(200), IN `_ROL` VARCHAR(15), IN `_ESTADO` VARCHAR(10))  BEGIN

INSERT INTO usuarios(identificacion, nombres, telefono, correo, contrasena,
rol, estado) VALUES (_IDENTIFICACION, _NOMBRES, _TELEFONO, _CORREO, _CONTRASENA,
_ROL, _ESTADO);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR_PRODUCTO` (IN `_IDPRODUCTO` INT(10))  BEGIN

DELETE FROM productos WHERE idproducto = _IDPRODUCTO;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR_PROVEEDOR` (IN `_IDPROVEEDOR` INT(10))  BEGIN

DELETE FROM proveedores WHERE idproveedor = _IDPROVEEDOR;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR_USUARIO` (IN `_ID_NOMBRE` INT(10))  BEGIN

DELETE FROM usuarios WHERE idusuario = _ID_NOMBRE;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_FACTURA` ()  BEGIN

SELECT * FROM facturas;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_FIADO` ()  SELECT * FROM usuarios WHERE estado = "fiado" or estado = "pendiente"$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_METODOPAGO` ()  BEGIN

SELECT * FROM metodopago;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_PRODUCTO` ()  BEGIN

SELECT * FROM productos;


END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_PROVEEDORES` ()  BEGIN

SELECT * FROM proveedores;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_USUARIO` ()  BEGIN

SELECT * FROM usuarios;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_PRODUCTO` (IN `_IDPRODUCTO` INT(10), IN `_PRODUCTO` VARCHAR(100), IN `_CATEGORIA` VARCHAR(100), IN `_PRECIOU` INT(10), IN `_DESCRIPCION` VARCHAR(200), IN `_IMAGEN` TEXT, IN `_STOCK` INT(10))  BEGIN

UPDATE productos SET producto = _PRODUCTO, categoria = _CATEGORIA,
preciou = _PRECIOU, descripcion = _DESCRIPCION, imagen = _IMAGEN, stock = _STOCK WHERE idproducto = _IDPRODUCTO;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_USUARIO` (IN `_ID_NOMBRE` INT(10), IN `_IDENTIFICACION` INT(10), IN `_NOMBRE` VARCHAR(100), IN `_TELEFONO` VARCHAR(10), IN `_CORREO` VARCHAR(200), IN `_CONTRASENA` VARCHAR(200), IN `_ROL` VARCHAR(10), IN `_ESTADO` VARCHAR(10))  BEGIN
UPDATE usuarios SET identificacion = _IDENTIFICACION, nombres = _NOMBRE, telefono = _TELEFONO,
correo = _CORREO, contrasena = _CONTRASENA, rol = _ROL, estado = _ESTADO WHERE idusuario = _ID_NOMBRE;


END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR_FACTURA` (IN `_IDFACTURA` INT)  BEGIN

SELECT * FROM facturas WHERE idfacturas = _IDFACTURA;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR_METODOPAGO` (IN `_IDMETODOPAGO` INT)  BEGIN

SELECT * FROM metodopago WHERE idmetodopago = _IDMETODOPAGO;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR_PRODUCTO` (IN `_IDPRODUCTO` INT(10))  BEGIN

SELECT idproducto, producto, categoria, preciou, descripcion, imagen, stock
FROM productos WHERE idproducto = _IDPRODUCTO;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR_PROVEEDOR` (IN `_IDPROVEEDOR` INT)  BEGIN

SELECT * FROM proveedores WHERE idproveedor = _IDPROVEEDOR;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR_USUARIO` (IN `_ID_USUARIO` INT)  BEGIN

SELECT idusuario, identificacion, nombres, telefono, correo, contrasena,
rol, estado FROM usuarios WHERE idusuario = _ID_USUARIO;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_PAGOS_ATRASADOS` (IN `pagos_atrasados` INT)  BEGIN

SELECT 
  usuarios.identificacion,
  usuarios.nombres,
  usuarios.telefono,
  facturas.estado,
  facturas.ncuenta
FROM usuarios
INNER JOIN facturas ON usuarios.idusuario = facturas.idusuario
WHERE facturas.estado = 'fiado'
ORDER BY facturas.fecha ASC;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `idfacturas` int(10) NOT NULL,
  `idusuario` int(10) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `idmetodopago` int(10) NOT NULL,
  `estado` varchar(10) NOT NULL,
  `ncuenta` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`idfacturas`, `idusuario`, `fecha`, `idmetodopago`, `estado`, `ncuenta`) VALUES
(27, 1, '2023-01-15 05:00:00', 1, 'Pagada', '8723683'),
(28, 2, '2023-02-03 05:00:00', 2, 'Pendiente', '5432198'),
(29, 3, '2023-02-12 05:00:00', 2, 'Pagada', '9345671'),
(30, 4, '2023-03-07 05:00:00', 2, 'Cancelada', '7865432'),
(31, 5, '2023-03-15 05:00:00', 1, 'Pagada', '6754321'),
(32, 6, '2023-04-02 05:00:00', 2, 'Pendiente', '8954321'),
(33, 27, '2023-04-11 05:00:00', 2, 'Pagada', '1245678'),
(34, 28, '2023-05-01 05:00:00', 2, 'Cancelada', '3654789'),
(35, 29, '2023-05-09 05:00:00', 1, 'Pagada', '4567890'),
(36, 30, '2023-06-17 05:00:00', 1, 'Pagada', '9876543'),
(37, 31, '2023-06-25 05:00:00', 1, 'Pendiente', '5678901'),
(38, 32, '2023-07-03 05:00:00', 2, 'Pagada', '6789012'),
(39, 33, '2023-07-22 05:00:00', 2, 'Pagada', '5432789'),
(40, 34, '2023-08-11 05:00:00', 2, 'Pendiente', '9812345'),
(41, 35, '2023-08-19 05:00:00', 2, 'Cancelada', '7890123'),
(42, 36, '2023-09-05 05:00:00', 2, 'Pagada', '8901234'),
(43, 37, '2023-09-13 05:00:00', 2, 'Pagada', '2345678'),
(44, 38, '2023-10-21 05:00:00', 1, 'Pagada', '4567890'),
(45, 39, '2023-10-29 05:00:00', 1, 'Pendiente', '5678901'),
(46, 40, '2023-11-06 05:00:00', 1, 'Pagada', '1234567'),
(47, 41, '2023-11-25 05:00:00', 1, 'Pagada', '3456789'),
(48, 42, '2023-12-04 05:00:00', 2, 'Cancelada', '4567890'),
(49, 43, '2024-01-02 05:00:00', 2, 'Pagada', '6789012'),
(50, 44, '2024-01-10 05:00:00', 1, 'Pagada', '2345678'),
(51, 45, '2024-02-18 05:00:00', 1, 'Pendiente', '7890123'),
(52, 46, '2024-02-26 05:00:00', 1, 'Pagada', '8901234'),
(53, 41, '2024-06-02 00:50:46', 1, 'Pagada', '53953895'),
(54, 42, '2024-06-02 01:31:13', 2, 'Pagada', '899283'),
(56, 47, '2024-06-05 01:02:08', 4, 'pagada', '1234567'),
(59, 48, '2024-06-05 01:03:08', 4, 'pagada', '1234567');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodopago`
--

CREATE TABLE `metodopago` (
  `idmetodopago` int(10) NOT NULL,
  `tipopago` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `metodopago`
--

INSERT INTO `metodopago` (`idmetodopago`, `tipopago`) VALUES
(1, 'Efectivo'),
(2, 'Transferencia'),
(3, 'transferencia'),
(4, 'efectivo'),
(5, 'transferencia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos_atrasados`
--

CREATE TABLE `pagos_atrasados` (
  `idpagos_atrasados` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `idmetodopago` int(11) NOT NULL,
  `comentarios` varchar(200) DEFAULT NULL,
  `fecha_vencimiento` varchar(20) NOT NULL,
  `estado` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idproducto` int(10) NOT NULL,
  `producto` varchar(150) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `preciou` int(11) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `imagen` text NOT NULL,
  `stock` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idproducto`, `producto`, `categoria`, `preciou`, `descripcion`, `imagen`, `stock`) VALUES
(1, 'Desayuno Continental', 'Desayuno', 1000, 'Una selección de panecillos frescos, mermeladas, mantequilla, jugo de naranja y café o té', 'https://www.hogarmania.com/archivos/202305/desayuno-continental-huevo-salchichas-1280x720x80xX.jpg', 100),
(2, 'Omelette de Champiñones', 'Desayuno', 5000, 'Un omelette esponjoso relleno de champiñones frescos, acompañado de tostadas de pan integral y una 		  ensalada de frutas frescas', 'https://lh5.googleusercontent.com/proxy/mwODIni5bH02ANZxL-PQDxW_dVwJ3RIaQJ8BV1vOSa--Sd74YzpS3WnBLjbDiMwtO5qqVZdYX4DZoSUjna8xG60sAg_C8FS8F8DAPbmHLm3-YrDbj48R5fmfi8GSwkw', 50),
(3, 'Waffles con Jarabe de Arce', 'Desayuno', 10000, 'Waffles dorados y crujientes servidos con mantequilla derretida y jarabe de arce genuino, 			acompañados de una guarnición de frutas frescas', 'https://img.freepik.com/fotos-premium/jarabe-arce-vierte-sobre-waffle_921860-8394.jpg', 80),
(4, 'Huevos Benedictinos', 'Desayuno', 5000, 'Dos huevos pochados sobre muffins ingleses, con lonchas de jamón, cubiertos con salsa holandesa y             acompañados de papas a la francesa', 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2023-06/Eggs%20Benedict.jpg', 100),
(5, 'Tortitas de Plátano', 'Desayuno', 5000, 'Tortitas esponjosas hechas con plátanos maduros, servidas con mantequilla y jarabe de arce', 'https://www.comedera.com/wp-content/uploads/2021/03/tortitas-de-platano-544712_1920.jpg', 70),
(6, 'Sándwich de Pollo a la Parrilla', 'Almuerzo', 15000, 'Jugoso pollo a la parrilla con lechuga, tomate, queso suizo y mayonesa, servido en un             panecillo tostado', 'https://www.goya.com/media/4249/smoky-south-of-the-border-chicken-sandwiches.jpg?quality=80', 200),
(7, 'Ensalada César con Pollo', 'Almuerzo', 15000, 'Lechuga romana fresca, crutones de ajo, queso parmesano rallado y tiras de pollo a la parrilla,           todo cubierto con aderezo César cremoso', 'https://www.recetasnestle.cl/sites/default/files/srh_recipes/3a5e42e262ec4394def6f80a9cc038b4.jpg', 20),
(8, 'Pasta Alfredo con Camarones', 'Almuerzo', 15000, 'Pasta fettuccine al dente en una salsa cremosa de queso parmesano y mantequilla, con camarones         jugosos y espolvoreada con perejil fresco', 'https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/09/pasta-alfredo-con-camarones-1.jpg', 80),
(9, 'Hamburguesa Clásica', 'Almuerzo', 15000, 'Carne de res a la parrilla con lechuga, tomate, cebolla, pepinillos y salsa especial, servida en un             bollo de hamburguesa tostado', 'https://assets.unileversolutions.com/recipes-v2/218401.jpg', 70),
(10, 'Filete de Salmón a la Parrilla', 'Almuerzo', 15000, 'Filete de salmón fresco a la parrilla, marinado en hierbas y limón, acompañado de arroz             pilaf y espárragos al vapor', 'https://es.cravingsjournal.com/wp-content/uploads/2022/09/pescado-a-la-parrilla-6.jpg', 100),
(11, 'Pan Blanco', 'Tienda', 2000, 'Pan blanco fresco y esponjoso, perfecto para sandwiches y tostadas', 'https://enfamilia.codionline.es/wp-content/uploads/2022/04/como-se-hace-pan-blanco.jpg', 90),
(12, 'Papas Fritas', 'Tienda', 800, 'Bolsa de papas fritas crujientes y saladas, ideal para picar', 'https://scm-assets.constant.co/scm/unilever/86c9fcb727c4d90deffba18b2593a9cf/84b57886-fee2-4f98-8920-027f8afd654c.png', 60),
(13, 'Refresco de Cola', 'Tienda', 2500, 'Lata de refresco de cola, refrescante y burbujeante', 'https://www.eluniversal.com.mx/resizer/OLuA3mQxIk74kykokIDaUvNKPlU=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/3DKOA3GI7VHYDPXL7WHW64INXU.jpg', 100),
(14, 'Leche Entera', 'Tienda', 2500, 'Botella de leche entera fresca, rica en calcio y nutrientes', 'https://maxitenjo.com.co/cdn/shop/products/rr_2c53f68c-2989-48bd-84fa-6f8c4955dc8a_2400x.jpg?v=1597095679', 50),
(15, 'Huevos Frescos', 'Tienda', 800, 'Docena de huevos frescos, excelentes para cocinar y hornear', 'https://estaticosgn-cdn.deia.eus/clip/c9af31ca-07af-4bfe-aa8b-f14fd05a9069_16-9-discover-aspect-ratio_default_0.jpg', 60),
(16, 'Queso Cheddar', 'Tienda', 3000, 'Bloque de queso cheddar, delicioso y cremoso, ideal para sándwiches y aperitivos', 'https://comosefabrica.com/img/entradas/queso-cheddar.jpg', 100),
(17, 'Yogur Natural', 'Tienda', 1700, 'Envase de yogur natural sin sabor, rico en probióticos y calcio', 'https://i0.wp.com/www.pasionthermomix.co/wp-content/uploads/2020/02/yogur-para-bowl.jpg?fit=768%2C480&ssl=1', 100),
(18, 'Manzanas Granny Smith', 'Tienda', 1600, 'Bolsa de manzanas Granny Smith frescas y crujientes', 'https://greenandfresh.com.co/wp-content/uploads/2018/12/manzana-granny-smith.jpg', 100),
(19, 'Cerveza Artesanal', 'Tienda', 4500, 'Botella de cerveza artesanal, sabrosa y con cuerpo', 'https://www.republicacervecerashop.com.mx/cdn/shop/articles/cerveza-artesanal_1600x.jpg?v=1703130948', 100),
(20, 'Tomates Frescos', 'Tienda', 1000, 'Paquete de tomates frescos y jugosos, perfectos para ensaladas y salsas', 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/11/tomates-frescos-2130325.jpg?tf=3840x', 70),
(21, 'Cereal de Chocolate', 'Tienda', 2600, 'Caja de cereal de chocolate, crujiente y delicioso', 'https://s.libertaddigital.com/2022/03/01/1920/1080/fit/chocolate-breakfast-cereala-hrefhttpsccnulldefotografmarco-verch-relnoreferrer-nofollowprofessional-photographeraa-hrefhttptwitchtvwue.jpg', 90),
(22, 'Helado de Vainilla', 'Tienda', 3000, 'Envase de helado de vainilla cremoso y suave', 'https://www.recetasnestle.com.do/sites/default/files/srh_recipes/62099096785a3c939a1a1eefb06bf358.jpg', 90),
(23, 'Pasta de Dientes', 'Tienda', 4000, 'Tubo de pasta de dientes con flúor, para una limpieza profunda y protección contra caries', 'https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center-relaunch/latam/product-detail-pages/2023/colgate-total-12-professional-whitening/colgate-total-12-professional-whitening.jpg', 30),
(24, 'Aceitunas Verdes', 'Tienda', 5000, 'Frascos de aceitunas verdes marinadas, perfectas como aperitivo o en ensaladas', 'https://mercantilmx.com/v1/wp-content/uploads/2023/09/aceitunas-verdes-en-plato.webp', 50),
(25, 'Chocolate Negro', 'Tienda', 3700, 'Tableta de chocolate negro intenso y suave, una delicia para los amantes del chocolate', 'https://www.hogarmania.com/archivos/201907/chocolate-negro-xl-1280x720x80xX.jpg', 60),
(26, 'comidas fritas', 'tienda', 5000, 'comidas fritas de calidad y clasicas', 'https://www.recetasnestle.com.co/sites/default/files/inline-images/comidas-fritas-plato-apanado-ensalada.jpg', 100),
(28, 'pollo', 'tienda', 1200, 'pollo muy rico', 'https://www.elespectador.com/resizer/qnmcZB28733ovmkLlBjlcnCiLPc=/arc-anglerfish-arc2-prod-elespectador/public/BF5ZMLR24NHKJHJJ3L23WDFF7Q.jpg', 100),
(29, 'pollo de tercera', 'tienda', 10000, 'pollo asado de segunda', 'https://estaticos-cdn.prensaiberica.es/clip/ef0f2855-f04b-464a-b26f-b62a1d069657_16-9-aspect-ratio_default_0.jpg', 100),
(31, 'Bandeja Paisa', 'Almuerzo', 1000, 'Bandeja Paisa 100% natural', 'https://cdn.colombia.com/gastronomia/2011/08/02/bandeja-paisa-1616.gif', 70),
(33, 'papitas margarita', 'Tienda', 1000, 'papas de buena calidad y natural', 'https://pbs.twimg.com/ext_tw_video_thumb/1595885004382420993/pu/img/NezSOxZcdQK3l0rZ.jpg', 10),
(49, 'Curry', 'Almuerzo', 1000, 'Curry rico', 'https://www.kitchensanctuary.com/wp-content/uploads/2022/09/Air-Fryer-Chicken-Curry-square-FS-36.jpg', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `idproveedor` int(10) NOT NULL,
  `proveedor` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`idproveedor`, `proveedor`) VALUES
(1, 'Green Harvest Foods'),
(2, 'Fresh Farms Co.'),
(3, 'Natures Bounty Suppliers'),
(4, 'Prime Produce Distributors'),
(5, 'Organic Oasis Suppliers'),
(6, 'FRISBY');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` int(10) NOT NULL,
  `identificacion` int(10) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `rol` varchar(15) NOT NULL,
  `estado` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `identificacion`, `nombres`, `telefono`, `correo`, `contrasena`, `rol`, `estado`) VALUES
(1, 123456789, 'Ana María Pérez López', '300 123 45', 'ana223@gmail.com', 'Ana123456', 'Gerente', 'Fiado'),
(2, 987654321, 'Juan David García Martínez', '310 765 43', 'juandavid@gmail.com', 'Juan123456', 'Cliente', 'Fiado'),
(3, 234567890, 'Laura Sofía Gómez Ramírez', '320 234 56', 'laura67352@gmail.com', 'Laura123456', 'Cliente', 'Fiado'),
(4, 456789012, 'Pedro Antonio Rodríguez González', '330 345 67', 'pedrogonzalez@gmail.com', 'Pedro123456', 'Cliente', 'Fiado'),
(5, 567890123, 'Isabella Valentina Restrepo Díaz', '340 456 78', 'isarestrepo@gmail.com', 'Isabella123456', 'Cliente', 'pendiente'),
(6, 83648839, 'Andres Restrepo Villa', '304 728769', 'andres56783@gmail.com', '87348andre', 'Cliente', 'Fiado'),
(27, 1234567890, 'María García', '555-1234', 'maria.garcia@example.com', '12345678', 'Cliente', 'fiado'),
(28, 2147483647, 'Juan Pérez', '555-5678', 'juan.perez@example.com', 'abcdefg', 'Cliente', 'pagado'),
(29, 2147483647, 'Ana Martínez', '555-9876', 'ana.martinez@example.com', 'qwerty', 'Cliente', 'fiado'),
(30, 2147483647, 'Luis Rodríguez', '555-4321', 'luis.rodriguez@example.com', 'password123', 'Cliente', 'pagado'),
(31, 2147483647, 'Carmen López', '555-8763', 'carmen.lopez@example.com', '87654321', 'Cliente', 'fiado'),
(32, 2147483647, 'Roberto Sánchez', '555-2468', 'roberto.sanchez@example.com', 'pass1234', 'Cliente', 'pagado'),
(33, 2147483647, 'Julia Fernández', '555-1357', 'julia.fernandez@example.com', 'fernandez123', 'Cliente', 'fiado'),
(34, 2147483647, 'Pablo Gómez', '555-3698', 'pablo.gomez@example.com', 'gomez456', 'Cliente', 'pagado'),
(35, 2147483647, 'Laura Díaz', '555-7532', 'laura.diaz@example.com', 'lauradiaz', 'Cliente', 'fiado'),
(36, 123456789, 'Diego Ramírez', '555-6842', 'diego.ramirez@example.com', 'ramirez567', 'Cliente', 'pagado'),
(37, 1234509876, 'Sara Sánchez', '555-9870', 'sara.sanchez@example.com', 'sanchez789', 'Cliente', 'pagado'),
(38, 2147483647, 'Manuel García', '555-6789', 'manuel.garcia@example.com', 'manuelgarcia', 'Cliente', 'fiado'),
(39, 2147483647, 'Elena Martínez', '555-0987', 'elena.martinez@example.com', 'elenamartinez', 'Cliente', 'pagado'),
(40, 2147483647, 'Pedro Pérez', '555-8901', 'pedro.perez@example.com', 'perezpedro', 'Cliente', 'fiado'),
(41, 2147483647, 'Ana López', '555-5432', 'ana.lopez@example.com', 'analorena', 'Cliente', 'pagado'),
(42, 2147483647, 'Juan García', '555-2345', 'juan.garcia@example.com', 'juangarcia', 'Cliente', 'fiado'),
(43, 2147483647, 'María Martínez', '555-4567', 'maria.martinez@example.com', 'mariamartinez', 'Cliente', 'pagado'),
(44, 2147483647, 'Carlos Rodríguez', '555-7890', 'carlos.rodriguez@example.com', 'carlosrodriguez', 'Cliente', 'fiado'),
(45, 2147483647, 'Laura Sánchez', '555-2109', 'laura.sanchez@example.com', 'laurasanchez', 'Cliente', 'pagado'),
(46, 1234564321, 'Diego Pérez', '555-8765', 'diego.perez@example.com', 'diegoperez', 'Cliente', 'fiado'),
(47, 1040521345, 'Jhoan Monsalve', '123456789', 'jhoanmonsalve121@gmail.com', '12345', 'PROGRAMADOR', 'PAZYSALVO'),
(48, 1231234567, 'Esneider Giraldo', '123454321', 'esneidergiraldo@gmail.com', '123123123', 'programado', 'pazysalvo'),
(73, 12, 'Jhoangerente', '318834212', 'jhoanmonsalve@gmail.com', '$2b$04$cZd5brRKm2xRfhDcgwghg.NBrwxqBTFmU8/L8baXt.l', 'programador/ger', 'pazys'),
(76, 12, 'Jhoangerente', '3188342121', 'jhoanpruebatoken@gmail.com', '$2b$04$ESc4FCWlNbjLsPbmTF90QuQa62iY6WBt5PdRttugRIbX1sGzbZ/sq', 'programador/ger', 'pazys');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`idfacturas`),
  ADD KEY `facturas_ibfk_1` (`idmetodopago`),
  ADD KEY `facturas_ibfk_2` (`idusuario`);

--
-- Indices de la tabla `metodopago`
--
ALTER TABLE `metodopago`
  ADD PRIMARY KEY (`idmetodopago`);

--
-- Indices de la tabla `pagos_atrasados`
--
ALTER TABLE `pagos_atrasados`
  ADD PRIMARY KEY (`idpagos_atrasados`),
  ADD KEY `idusuario` (`idusuario`),
  ADD KEY `idmetodopago` (`idmetodopago`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idproducto`),
  ADD UNIQUE KEY `producto` (`producto`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`idproveedor`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `telefono` (`telefono`),
  ADD KEY `identificacion` (`identificacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `idfacturas` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `metodopago`
--
ALTER TABLE `metodopago`
  MODIFY `idmetodopago` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `pagos_atrasados`
--
ALTER TABLE `pagos_atrasados`
  MODIFY `idpagos_atrasados` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idproducto` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `idproveedor` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD CONSTRAINT `facturas_ibfk_1` FOREIGN KEY (`idmetodopago`) REFERENCES `metodopago` (`idmetodopago`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `facturas_ibfk_2` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pagos_atrasados`
--
ALTER TABLE `pagos_atrasados`
  ADD CONSTRAINT `pagos_atrasados_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`),
  ADD CONSTRAINT `pagos_atrasados_ibfk_2` FOREIGN KEY (`idmetodopago`) REFERENCES `metodopago` (`idmetodopago`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
