-- phpMyAdmin SQL Dump
-- version 4.2.5
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:3306
-- Tiempo de generación: 18-02-2015 a las 20:34:13
-- Versión del servidor: 5.5.40
-- Versión de PHP: 5.5.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `jgonzalez_proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Carta`
--

CREATE TABLE IF NOT EXISTS `Carta` (
`Codigo` int(3) unsigned zerofill NOT NULL,
  `Menu` varchar(15) NOT NULL,
  `Bebida` varchar(10) NOT NULL,
  `idreserva` int(3) unsigned zerofill NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=233 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Clientes`
--

CREATE TABLE IF NOT EXISTS `Clientes` (
`codigo` int(3) unsigned zerofill NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellidos` varchar(15) NOT NULL,
  `telefono` varchar(15) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=641 ;

--
-- Volcado de datos para la tabla `Clientes`
--

INSERT INTO `Clientes` (`codigo`, `nombre`, `apellidos`, `telefono`) VALUES
(620, 'jacob', 'cogollos', '7574574'),
(621, 'juanfran ', 'aokdfmaosdkfm', '63456'),
(626, 'jacobo ', 'ayudaaaaa', '.5665.'),
(627, 'jacobo ', 'que no ayudas', '.543534.'),
(628, 'Jacbo ', 'fewf', '.63454353.'),
(629, '', '', '..'),
(631, 'panxo ', 'few', '.fw.'),
(632, 'mjh ', 'mj', '.mhj.'),
(633, 'undefined ', 'undefined', '.undefined.'),
(634, 'csd ', 'cds', '.43423.'),
(635, 'hdfdf ', 'hdfhdf', '.5555.'),
(636, 'pene ', 'hdfhdf', '.5555.'),
(637, 'jacobo ', 'apruebame con 5', '.55444556.'),
(638, 'Jacobo ', 'Aprueba Por fa', '523252355'),
(639, 'Javi ', 'Gonza', 'gweg'),
(640, 'undefined ', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Reservas`
--

CREATE TABLE IF NOT EXISTS `Reservas` (
`Codigo` int(3) unsigned zerofill NOT NULL,
  `Idcliente` int(3) unsigned zerofill NOT NULL,
  `npersonas` int(4) NOT NULL,
  `mesa` varchar(15) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=329 ;

--
-- Volcado de datos para la tabla `Reservas`
--

INSERT INTO `Reservas` (`Codigo`, `Idcliente`, `npersonas`, `mesa`, `Fecha`, `Hora`) VALUES
(327, 620, 6, 'Altillo', '2015-05-30', '20:30:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Tareas`
--

CREATE TABLE IF NOT EXISTS `Tareas` (
`id` int(3) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `descripcion` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuario`
--

CREATE TABLE IF NOT EXISTS `Usuario` (
  `id_usuario` varchar(3) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Usuario`
--

INSERT INTO `Usuario` (`id_usuario`, `usuario`, `nombre`, `apellido`, `password`) VALUES
('JGM', 'proyectobbdd', 'javi', 'gonza', 'Troyano.89');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Carta`
--
ALTER TABLE `Carta`
 ADD PRIMARY KEY (`Codigo`), ADD KEY `idreserva` (`idreserva`);

--
-- Indices de la tabla `Clientes`
--
ALTER TABLE `Clientes`
 ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `Reservas`
--
ALTER TABLE `Reservas`
 ADD PRIMARY KEY (`Codigo`), ADD KEY `Idcliente` (`Idcliente`);

--
-- Indices de la tabla `Tareas`
--
ALTER TABLE `Tareas`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Usuario`
--
ALTER TABLE `Usuario`
 ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Carta`
--
ALTER TABLE `Carta`
MODIFY `Codigo` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=233;
--
-- AUTO_INCREMENT de la tabla `Clientes`
--
ALTER TABLE `Clientes`
MODIFY `codigo` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=641;
--
-- AUTO_INCREMENT de la tabla `Reservas`
--
ALTER TABLE `Reservas`
MODIFY `Codigo` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=329;
--
-- AUTO_INCREMENT de la tabla `Tareas`
--
ALTER TABLE `Tareas`
MODIFY `id` int(3) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Carta`
--
ALTER TABLE `Carta`
ADD CONSTRAINT `Carta_ibfk_1` FOREIGN KEY (`idreserva`) REFERENCES `Reservas` (`Codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `Reservas`
--
ALTER TABLE `Reservas`
ADD CONSTRAINT `Reservas_ibfk_1` FOREIGN KEY (`Idcliente`) REFERENCES `Clientes` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
