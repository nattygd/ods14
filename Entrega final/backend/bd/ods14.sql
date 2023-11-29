-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2023 a las 19:10:32
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ods14`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `idComentario` int(11) NOT NULL,
  `comentario` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comuna`
--

CREATE TABLE `comuna` (
  `idComuna` int(11) NOT NULL,
  `nombreComuna` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `region`
--

CREATE TABLE `region` (
  `idRegion` int(11) NOT NULL,
  `nombreRegion` varchar(255) DEFAULT NULL,
  `comuna_idComuna` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reportaje`
--

CREATE TABLE `reportaje` (
  `idReportaje` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `autor` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reportaje`
--

INSERT INTO `reportaje` (`idReportaje`, `titulo`, `autor`, `descripcion`, `link`) VALUES
(1, 'a', 'aa', 'aaa', 'aaaa'),
(2, 'b', 'bb', 'bbb', 'ccc'),
(3, 'c', 'cc', 'ccc', 'cccc'),
(4, 'd', 'dd', 'ddd', 'dddd'),
(5, 'prueba1', 'a', 'a', 'a'),
(6, 'prueba2', 'a', 'a', 'a'),
(7, 'prueba3', 'a', 'a', 'a'),
(8, 'prueba4', 'b', 'bb', 'bbb'),
(9, 'prueba5', 'c', 'cc', 'ccc'),
(10, 'oiuyt', 'ddd', 'ddd', 'ddd'),
(12, 'kk', 'k', 'k', 'k'),
(13, 'sdds', 'sdcdac', 'das', 'asd'),
(14, 'pokp', 'sldkm', 'smdcsm', 'kmscd'),
(15, 'pokp', 'sldkm', 'smdcsm', 'kmscd'),
(16, 'aaaaaaaaaa', 'ds', 'e', 's'),
(17, 'fucj', 'd', 's', 's'),
(18, 'csd', 'cs', 'csdc', 'ca'),
(19, 'yapo', 'ss', 's', 'd'),
(20, 'csdc', 'sdc', 'sdc', 'sdc'),
(21, 'scd', 'sdc', 'csd', 'sdc'),
(22, 'svd', 'svd', 'wsd', 'wsdf'),
(23, 'pruebaw', 'ks', 'sk', 'sk'),
(24, 'mostrar', 'sc', 'sd', 'fs'),
(25, 'pasion', 'juan', 'scsdcscaskd', 'kmdsldc.cl'),
(26, 'a', 'aa', 'bbb', 'aaaa'),
(27, '', 'aa', '', 'aaaa'),
(28, 'a', 'aa', 'bbb', 'aaaa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `idRol` int(11) NOT NULL,
  `nombreRol` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sistema`
--

CREATE TABLE `sistema` (
  `usuario_idUsuario` int(11) NOT NULL,
  `reportaje_idReportaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `rut` varchar(20) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `direccion_idRegion` int(11) DEFAULT NULL,
  `rol_idRol` int(11) DEFAULT NULL,
  `comentario_idComentario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`idComentario`);

--
-- Indices de la tabla `comuna`
--
ALTER TABLE `comuna`
  ADD PRIMARY KEY (`idComuna`);

--
-- Indices de la tabla `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`idRegion`);

--
-- Indices de la tabla `reportaje`
--
ALTER TABLE `reportaje`
  ADD PRIMARY KEY (`idReportaje`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `sistema`
--
ALTER TABLE `sistema`
  ADD PRIMARY KEY (`usuario_idUsuario`,`reportaje_idReportaje`),
  ADD KEY `reportaje_idReportaje` (`reportaje_idReportaje`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `idComentario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comuna`
--
ALTER TABLE `comuna`
  MODIFY `idComuna` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `region`
--
ALTER TABLE `region`
  MODIFY `idRegion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reportaje`
--
ALTER TABLE `reportaje`
  MODIFY `idReportaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `sistema`
--
ALTER TABLE `sistema`
  ADD CONSTRAINT `sistema_ibfk_1` FOREIGN KEY (`usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`),
  ADD CONSTRAINT `sistema_ibfk_2` FOREIGN KEY (`reportaje_idReportaje`) REFERENCES `reportaje` (`idReportaje`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
