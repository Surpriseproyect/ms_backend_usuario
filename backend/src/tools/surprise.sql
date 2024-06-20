-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-06-2024 a las 18:44:12
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

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
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_BUSCAR_USUARIO` (IN `_CORREO` VARCHAR(200))   BEGIN

SELECT correo, contrasena FROM usuarios WHERE correo = _CORREO LIMIT 1;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR_FACTURA` (IN `_IDUSUARIO` INT(10), IN `_IDMETODOPAGO` INT(10), IN `_ESTADO` VARCHAR(10), IN `_NCUENTA` INT(15), IN `_FECHA` TIMESTAMP)   BEGIN

INSERT INTO facturas(idusuario, fecha, idmetodopago, estado, ncuenta)
VALUES (_IDUSUARIO, _FECHA, _IDMETODOPAGO, _ESTADO, _NCUENTA);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR_METODOPAGO` (IN `_TIPOPAGO` VARCHAR(20))   BEGIN

INSERT INTO metodopago(tipopago) VALUES (_TIPOPAGO);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR_PRODUCTO` (IN `_PRODUCTO` VARCHAR(100), IN `_CATEGORIA` VARCHAR(100), IN `_PRECIOU` INT(10), IN `_DESCRIPCION` VARCHAR(200), IN `_IMAGEN` TEXT, IN `_STOCK` INT(10))   BEGIN

INSERT INTO productos(producto, categoria, preciou, descripcion, imagen, stock) VALUES
(_PRODUCTO, _CATEGORIA, _PRECIOU, _DESCRIPCION, _IMAGEN, _STOCK);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR_PROVEEDORES` (IN `PROVEEDOR` VARCHAR(100))   BEGIN

INSERT INTO proveedores(proveedor) VALUES (PROVEEDOR);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR_USUARIO` (IN `_IDENTIFICACION` INT(10), IN `_NOMBRES` VARCHAR(100), IN `_TELEFONO` VARCHAR(10), IN `_CORREO` VARCHAR(200), IN `_CONTRASENA` VARCHAR(200), IN `_ROL` VARCHAR(15), IN `_ESTADO` VARCHAR(10))   BEGIN

INSERT INTO usuarios(identificacion, nombres, telefono, correo, contrasena,
rol, estado) VALUES (_IDENTIFICACION, _NOMBRES, _TELEFONO, _CORREO, _CONTRASENA,
_ROL, _ESTADO);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR_PRODUCTO` (IN `_IDPRODUCTO` INT(10))   BEGIN

DELETE FROM productos WHERE idproducto = _IDPRODUCTO;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR_PROVEEDOR` (IN `_IDPROVEEDOR` INT(10))   BEGIN

DELETE FROM proveedores WHERE idproveedor = _IDPROVEEDOR;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR_USUARIO` (IN `_ID_NOMBRE` INT(10))   BEGIN

DELETE FROM usuarios WHERE idusuario = _ID_NOMBRE;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTARPEDIDO` ()   BEGIN
SELECT p.Id_pedido, u.nombres, pr.producto, m.tipopago, p.hora, p.cantidad, p.total FROM pedido p INNER JOIN usuarios u ON p.idusuario = u.idusuario INNER JOIN productos pr ON p.idproducto = pr.idproducto INNER JOIN metodopago m ON p.idmetodopago = m.idmetodopago;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_FACTURA` ()   BEGIN

SELECT f.idfacturas, u.nombres, p.producto, f.fecha, m.tipopago, f.estado FROM facturas f INNER JOIN usuarios u ON f.idusuario = u.idusuario INNER JOIN productos p ON f.idproducto = p.idproducto INNER JOIN metodopago m ON f.idmetodopago = m.idmetodopago ;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_FIADO` ()   SELECT * FROM usuarios WHERE estado = "fiado" or estado = "pendiente"$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_METODOPAGO` ()   BEGIN

SELECT * FROM metodopago;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_PRODUCTO` ()   BEGIN

SELECT * FROM productos;


END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_PROVEEDORES` ()   BEGIN

SELECT * FROM proveedores;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_USUARIO` ()   BEGIN

SELECT * FROM usuarios;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_PRODUCTO` (IN `_IDPRODUCTO` INT(10), IN `_PRODUCTO` VARCHAR(100), IN `_CATEGORIA` VARCHAR(100), IN `_PRECIOU` INT(10), IN `_DESCRIPCION` VARCHAR(200), IN `_IMAGEN` TEXT, IN `_STOCK` INT(10))   BEGIN

UPDATE productos SET producto = _PRODUCTO, categoria = _CATEGORIA,
preciou = _PRECIOU, descripcion = _DESCRIPCION, imagen = _IMAGEN, stock = _STOCK WHERE idproducto = _IDPRODUCTO;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_USUARIO` (IN `_ID_USUARIO` INT(10), IN `_IDENTIFICACION` INT(10), IN `_NOMBRE` VARCHAR(100), IN `_TELEFONO` VARCHAR(10), IN `_CONTRASENA` VARCHAR(200), IN `_ROL` VARCHAR(15), IN `_ESTADO` VARCHAR(10))   BEGIN
UPDATE usuarios SET identificacion = _IDENTIFICACION, nombres = _NOMBRE, telefono = _TELEFONO, contrasena = _CONTRASENA, rol = _ROL, estado = _ESTADO WHERE idusuario = _ID_USUARIO;


END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR_FACTURA` (IN `_IDFACTURA` INT)   BEGIN

SELECT * FROM facturas WHERE idfacturas = _IDFACTURA;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR_METODOPAGO` (IN `_IDMETODOPAGO` INT)   BEGIN

SELECT * FROM metodopago WHERE idmetodopago = _IDMETODOPAGO;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR_PRODUCTO` (IN `_IDPRODUCTO` INT(10))   BEGIN

SELECT idproducto, producto, categoria, preciou, descripcion, imagen, stock
FROM productos WHERE idproducto = _IDPRODUCTO;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR_PROVEEDOR` (IN `_IDPROVEEDOR` INT)   BEGIN

SELECT * FROM proveedores WHERE idproveedor = _IDPROVEEDOR;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR_USUARIO` (IN `_ID_USUARIO` INT)   BEGIN

SELECT idusuario, identificacion, nombres, telefono, correo, contrasena,
rol, estado FROM usuarios WHERE idusuario = _ID_USUARIO;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_PAGOS_ATRASADOS` (IN `pagos_atrasados` INT)   BEGIN

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
  `idpedido` int(10) NOT NULL,
  `idusuario` int(10) NOT NULL,
  `idproducto` int(10) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `idmetodopago` int(10) NOT NULL,
  `total` int(100) NOT NULL,
  `estado` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`idfacturas`, `idpedido`, `idusuario`, `idproducto`, `fecha`, `idmetodopago`, `total`, `estado`) VALUES
(41, 0, 35, 2, '2023-08-19 05:00:00', 2, 0, 'Cancelada'),
(42, 0, 36, 2, '2023-09-05 05:00:00', 2, 0, 'Pagada'),
(43, 0, 37, 2, '2023-09-13 05:00:00', 2, 0, 'Pagada'),
(44, 0, 38, 2, '2023-10-21 05:00:00', 1, 0, 'Pagada'),
(45, 0, 39, 2, '2023-10-29 05:00:00', 1, 0, 'Pendiente'),
(46, 0, 40, 2, '2023-11-06 05:00:00', 1, 0, 'Pagada'),
(47, 0, 41, 2, '2023-11-25 05:00:00', 1, 0, 'Pagada'),
(48, 0, 42, 2, '2023-12-04 05:00:00', 2, 0, 'Cancelada'),
(49, 0, 43, 2, '2024-01-02 05:00:00', 2, 0, 'Pagada'),
(50, 0, 44, 2, '2024-01-10 05:00:00', 1, 0, 'Pagada'),
(51, 0, 45, 2, '2024-02-18 05:00:00', 1, 0, 'Pendiente'),
(53, 0, 41, 2, '2024-06-02 00:50:46', 1, 0, 'Pagada'),
(54, 0, 42, 2, '2024-06-02 01:31:13', 2, 0, 'Pagada'),
(68, 2, 31, 49, '2024-06-20 16:27:02', 2, 0, 'Pendiente'),
(69, 3, 86, 14, '2024-06-20 16:30:10', 1, 0, 'Pendiente'),
(70, 4, 1, 10, '2024-06-20 16:42:43', 1, 45000, 'Pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodopago`
--

CREATE TABLE `metodopago` (
  `idmetodopago` int(10) NOT NULL,
  `tipopago` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `metodopago`
--

INSERT INTO `metodopago` (`idmetodopago`, `tipopago`) VALUES
(1, 'Efectivo'),
(2, 'Transferencia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `Id_pedido` int(10) NOT NULL,
  `idusuario` int(10) NOT NULL,
  `idproducto` int(10) NOT NULL,
  `idmetodopago` int(10) NOT NULL,
  `hora` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `cantidad` int(11) NOT NULL,
  `total` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`Id_pedido`, `idusuario`, `idproducto`, `idmetodopago`, `hora`, `cantidad`, `total`) VALUES
(0, 29, 49, 1, '2024-06-20 16:17:52', 0, 1000),
(2, 31, 49, 2, '2024-06-20 16:27:02', 1, 2),
(3, 86, 14, 1, '2024-06-20 16:30:10', 9, 2),
(4, 1, 10, 1, '2024-06-20 16:42:43', 3, 3000);

--
-- Disparadores `pedido`
--
DELIMITER $$
CREATE TRIGGER `generar_factura_despues_insert` AFTER INSERT ON `pedido` FOR EACH ROW BEGIN
	DECLARE valor_unitario int(100);
    DECLARE total_pedido int(100);
    
    -- Obtener el valor unitario del producto del pedido
    SELECT preciou INTO valor_unitario
    FROM productos
    WHERE idproducto = NEW.idproducto;
    
    -- Calcular el total del pedido
    SET total_pedido = NEW.cantidad * valor_unitario;
    
    -- Insertar un registro en la tabla facturas
    INSERT INTO facturas (idpedido, idusuario, idproducto, idmetodopago, estado, total)
    VALUES (NEW.Id_pedido, NEW.idusuario, NEW.idproducto, NEW.idmetodopago, 'Pendiente', total_pedido);
END
$$
DELIMITER ;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idproducto`, `producto`, `categoria`, `preciou`, `descripcion`, `imagen`, `stock`) VALUES
(2, 'Omelette de Champiñones', 'Desayuno', 5000, 'Un omelette esponjoso relleno de champiñones frescos, acompañado de tostadas de pan integral y una ensalada de frutas frescas', 'https://lh5.googleusercontent.com/proxy/mwODIni5bH02ANZxL-PQDxW_dVwJ3RIaQJ8BV1vOSa--Sd74YzpS3WnBLjbDiMwtO5qqVZdYX4DZoSUjna8xG60sAg_C8FS8F8DAPbmHLm3-YrDbj48R5fmfi8GSwkw', 50),
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
(20, 'Tomates Frescos', 'Tienda', 1000, 'Paquete de tomates frescos y jugosos, perfectos para ensaladas y salsas', 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/11/tomates-frescos-2130325.jpg?tf=3840x', 70),
(21, 'Cereal de Chocolate', 'Tienda', 2600, 'Caja de cereal de chocolate, crujiente y delicioso', 'https://s.libertaddigital.com/2022/03/01/1920/1080/fit/chocolate-breakfast-cereala-hrefhttpsccnulldefotografmarco-verch-relnoreferrer-nofollowprofessional-photographeraa-hrefhttptwitchtvwue.jpg', 90),
(22, 'Helado de Vainilla', 'Tienda', 3000, 'Envase de helado de vainilla cremoso y suave', 'https://www.recetasnestle.com.do/sites/default/files/srh_recipes/62099096785a3c939a1a1eefb06bf358.jpg', 90),
(23, 'Pasta de Dientes', 'Tienda', 4000, 'Tubo de pasta de dientes con flúor, para una limpieza profunda y protección contra caries', 'https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center-relaunch/latam/product-detail-pages/2023/colgate-total-12-professional-whitening/colgate-total-12-professional-whitening.jpg', 30),
(24, 'Aceitunas Verdes', 'Tienda', 5000, 'Frascos de aceitunas verdes marinadas, perfectas como aperitivo o en ensaladas', 'https://mercantilmx.com/v1/wp-content/uploads/2023/09/aceitunas-verdes-en-plato.webp', 50),
(25, 'Chocolate Negro', 'Tienda', 3700, 'Tableta de chocolate negro intenso y suave, una delicia para los amantes del chocolate', 'https://www.hogarmania.com/archivos/201907/chocolate-negro-xl-1280x720x80xX.jpg', 60),
(28, 'pollo', 'tienda', 1200, 'pollo muy rico', 'https://www.elespectador.com/resizer/qnmcZB28733ovmkLlBjlcnCiLPc=/arc-anglerfish-arc2-prod-elespectador/public/BF5ZMLR24NHKJHJJ3L23WDFF7Q.jpg', 100),
(29, 'pollo de tercera', 'tienda', 10000, 'pollo asado de segunda', 'https://estaticos-cdn.prensaiberica.es/clip/ef0f2855-f04b-464a-b26f-b62a1d069657_16-9-aspect-ratio_default_0.jpg', 100),
(31, 'Bandeja Paisa', 'Almuerzo', 1000, 'Bandeja Paisa 100% natural', 'https://cdn.colombia.com/gastronomia/2011/08/02/bandeja-paisa-1616.gif', 70),
(49, 'Curry', 'Almuerzo', 1000, 'Curry rico', 'https://www.kitchensanctuary.com/wp-content/uploads/2022/09/Air-Fryer-Chicken-Curry-square-FS-36.jpg', 10),
(52, 'Yan Carlos', 'asco', 10000, 'miedoso', 'https://image.shutterstock.com/image-photo/3d-cute-colorful-unicorn-valentines-260nw-2401151293.jpg', 1),
(54, 'Ensalada Rusa', 'Almuerzo', 12000, 'De Rusia', 'https://www.comedera.com/wp-content/uploads/2018/05/ensalada-rusa-1.jpg', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `idproveedor` int(10) NOT NULL,
  `proveedor` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`idproveedor`, `proveedor`) VALUES
(1, 'Green Harvest Foods'),
(2, 'Fresh Farms Co.'),
(3, 'Natures Bounty Suppliers'),
(4, 'Prime Produce Distributors'),
(5, 'Organic Oasis Suppliers'),
(28, 'sakarasas');

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
  `contrasena` varchar(500) NOT NULL,
  `rol` varchar(15) NOT NULL,
  `estado` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `identificacion`, `nombres`, `telefono`, `correo`, `contrasena`, `rol`, `estado`) VALUES
(1, 123456789, 'Ana María Pérez López', '2', 'ana223@gmail.com', '$2b$04$Y8sa7cGkRNPeT0Rmemkco.Ru451xnkZvz2kRgS2sr.DuxPzTSXTcm', 'Gerente', 'Fiado'),
(2, 987654321, 'Juan David García Martínez', '310 765 43', 'juandavid@gmail.com', 'Juan123456', 'Cliente', 'Fiado'),
(3, 234567890, 'Laura Sofía Gómez Ramírez', '320 234 56', 'laura67352@gmail.com', 'Laura123456', 'Cliente', 'Fiado'),
(4, 456789012, 'Pedro Antonio Rodríguez González', '330 345 67', 'pedrogonzalez@gmail.com', 'Pedro123456', 'Cliente', 'Fiado'),
(5, 567890123, 'Isabella Valentina Restrepo Díaz', '340 456 78', 'isarestrepo@gmail.com', 'Isabella123456', 'Cliente', 'Pendiente'),
(6, 83648839, 'Andres Restrepo Villa', '304 728769', 'andres56783@gmail.com', '87348andre', 'Cliente', 'Fiado'),
(27, 1234567890, 'María García', '555-1234', 'maria.garcia@example.com', '12345678', 'Cliente', 'Fiado'),
(28, 2147483647, 'Juan Pérez', '555-5678', 'juan.perez@example.com', '$2b$04$OgquC.zCigd9RjofW6KJyOtSHZUaapc.2PQ3etQE5xQtFd91kst46', 'Cliente', 'Pagado'),
(29, 2147483647, 'Ana Martínez', '555-9876', 'ana.martinez@example.com', 'qwerty', 'Cliente', 'Fiado'),
(30, 2147483647, 'Luis Rodríguez', '555-4321', 'luis.rodriguez@example.com', '$2b$04$Zsi9MgDsHGDdISdY11sYgeE7hrO2pKWw2U/23dJUmBz8x8Agoscrm', 'Cliente', 'Pagado'),
(31, 2147483647, 'Carmen López', '555-8763', 'carmen.lopez@example.com', '$2b$04$WFVmLUXLir3lVmiTcFWdv.H48oLYbJkRl1/sireHaOUWrHKJ2yikq', 'Cliente', 'Fiado'),
(32, 2147483647, 'Roberto Sánchez', '555-2468', 'roberto.sanchez@example.com', '$2b$04$x0Y5lI6wjv8izmsCb5Z5QeybaawVOh6ka0OzueVU83fVbq/p0xwoG', 'Cliente', 'Pagado'),
(33, 2147483647, 'Julia Fernández', '555-1357', 'julia.fernandez@example.com', '$2b$04$e.mYUNflnkq9LZRwCc09q.YCmshJVwVrcetC6dT1rsPMdR5e07p5K', 'Cliente', 'Fiado'),
(34, 2147483647, 'Pablo Gómez', '555-3698', 'pablo.gomez@example.com', '$2b$04$hWA9KG2sp7Py6.hu7G3rH.TnoTBLAG1A6wKscQ4rlMXMSucDsVSOa', 'Cliente', 'Pagado'),
(35, 2147483647, 'Laura Díaz', '555-7532', 'laura.diaz@example.com', '$2b$04$UB3nWNEX6LQnLGVnqB85qeltGqyfLXCI/Vt/8.seQU50fEutuM6hW', 'Cliente', 'Fiado'),
(36, 123456789, 'Diego Ramírez', '555-6842', 'diego.ramirez@example.com', '$2b$04$kaqaQPaxuoVV9Q.6Rcu0Jexy1vvijYnobigf00NPUHg/k67ZdVsOa', 'Cliente', 'Pagado'),
(37, 1234509876, 'Sara Sánchez', '555-9870', 'sara.sanchez@example.com', '$2b$04$38s4Pu1dzAb2iPdImq3LtOaK8q5yfKlYS9h25FQpCRFdyDOJcPFFu', 'Cliente', 'Pagado'),
(38, 2147483647, 'Manuel García', '555-6789', 'manuel.garcia@example.com', '$2b$04$3d67Dt3Tnjya3bhIVMj/d.BI6Y8WzpMztwW3VWmTQN9vNHv.usUiy', 'Cliente', 'Fiado'),
(39, 2147483647, 'Elena Martínez', '555-0987', 'elena.martinez@example.com', '$2b$04$B8KxpO3yM6kRx2Oovh/ncuhLGDroCeEeVektT.scb9dQTbWaEDTNG', 'Cliente', 'Pagado'),
(40, 2147483647, 'Pedro Pérez', '555-8901', 'pedro.perez@example.com', '$2b$04$Ac8fgynF8as6q6C1OEdIHe6UbtHTquykAbZmc4nDMzqPeWl.fphBa', 'Cliente', 'Fiado'),
(41, 2147483647, 'Ana López', '555-5432', 'ana.lopez@example.com', '$2b$04$KJ8ZOkattqaB3KcCbT1M1.sc0UPr8WP46NSWwQTjopOBtwPmmZTc.', 'Cliente', 'Pagado'),
(42, 2147483647, 'Juan García', '555-2345', 'juan.garcia@example.com', '$2b$04$r1qbg45ZkpVYdCZLUgn5C.qqUgpryoMJFoK10iJmO/mSNHqhz8SRK', 'Cliente', 'Fiado'),
(43, 2147483647, 'María Martínez', '555-4567', 'maria.martinez@example.com', '$2b$04$wQXjKdpPKuK.4M1aFgeauuaQwnWTSKR1v6ICp78I00eCFyaE/MA12', 'Cliente', 'Pagado'),
(44, 2147483647, 'Carlos Rodríguez', '555-7890', 'carlos.rodriguez@example.com', '$2b$04$tgHEt3fmIADxK1mX1pSAFOt84la3YkrKGS4HI88RgEcvdDAcxSvUK', 'Cliente', 'Fiado'),
(45, 2147483647, 'Laura Sánchez', '555-2109', 'laura.sanchez@example.com', '$2b$04$RgL/UptkTiTYKe3XuiM9MOYBnxqlvlgSU/gSFrIoH7M6Q1NqPEfcq', 'Cliente', 'Pagado'),
(47, 1040521345, 'Jhoan Monsalve', '123456789', 'jhoanmonsalve121@gmail.com', '$2b$04$UGXyQWMdZID6EnVqznmn4u9mDPg2LNC20RYdDHAGESZU2sRfNg/PC', 'Programador', 'Pagado'),
(48, 1231234567, 'Esneider Giraldo', '123454321', 'esneidergiraldo@gmail.com', '$2b$04$6cQESD3u4sf.e2slPKC/YOPrHsYJaVtOhAldnZJHqsSUMsNL6QVIq', 'Programador', 'Pendiente'),
(73, 12, 'Jhoangerente', '318834212', 'jhoanmonsalve@gmail.com', '$2b$04$cvj3JJ2rd.4TT3aQ0lqfu.tm9eNzchzneoBRoRotQVHiJRBnQJ.r6', 'Programador', 'Fiado'),
(76, 10, 'Jhoan', '3188342121', 'jhoanpruebatoken@gmail.com', '$2b$04$8PMMRi6jbqalvM6PnPp/kuSDniXyaoEqBXLFgip0IVoF97lObdoly', 'Programador', 'Pendiente'),
(79, 12, 'Jhoan', '21234123', 'hola@gmail.com', '$2b$04$nOv6NFrE2/mlCEPd4.ZjvOAqZcufxSoUmvYjMaC16vZcLg8ALpHj.', 'Gerente', 'Pagado'),
(85, 12, 'PRUEBA', '2123412362', 'pruebatoken@gmail.com', '$2b$04$H.YiPEArZzaQ52xiV3Ra1eOFc6Z0rM66ZUMeEeO1WqO0Cz/qQ1u1y', 'Gerente', 'Pagado'),
(86, 12, 'Klimber Barret', '23233', 'klimber@gmail.com', '$2b$04$9E0rxV9ajAFEx4tUOt19S.Pf1wvlcaPjaEjo/nHx1BmZnXG0HnfUa', 'Cliente', 'Pagado');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`idfacturas`),
  ADD KEY `facturas_ibfk_1` (`idmetodopago`),
  ADD KEY `facturas_ibfk_2` (`idusuario`),
  ADD KEY `fk_factura_idproducto` (`idproducto`) USING BTREE,
  ADD KEY `facturas_ibfk_4` (`idpedido`);

--
-- Indices de la tabla `metodopago`
--
ALTER TABLE `metodopago`
  ADD PRIMARY KEY (`idmetodopago`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`Id_pedido`),
  ADD KEY `fk_pedido_idusuario` (`idusuario`) USING BTREE,
  ADD KEY `fk_metodopago_idmetodopago` (`idmetodopago`) USING BTREE,
  ADD KEY `fk_pedido_idproducto` (`idproducto`) USING BTREE;

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idproducto`);

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
  MODIFY `idfacturas` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de la tabla `metodopago`
--
ALTER TABLE `metodopago`
  MODIFY `idmetodopago` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `Id_pedido` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idproducto` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `idproveedor` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD CONSTRAINT `facturas_ibfk_1` FOREIGN KEY (`idmetodopago`) REFERENCES `metodopago` (`idmetodopago`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `facturas_ibfk_2` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `facturas_ibfk_3` FOREIGN KEY (`idproducto`) REFERENCES `productos` (`idproducto`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `facturas_ibfk_4` FOREIGN KEY (`idpedido`) REFERENCES `pedido` (`Id_pedido`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`),
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`idmetodopago`) REFERENCES `metodopago` (`idmetodopago`),
  ADD CONSTRAINT `pedido_ibfk_3` FOREIGN KEY (`idproducto`) REFERENCES `productos` (`idproducto`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
