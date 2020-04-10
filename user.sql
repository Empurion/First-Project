-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 11 mrt 2020 om 01:21
-- Serverversie: 10.4.8-MariaDB
-- PHP-versie: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `empernet`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user`
--

CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `xp` int(255) NOT NULL,
  `level` int(255) NOT NULL,
  `credits` int(255) NOT NULL,
  `sigils` int(255) NOT NULL,
  `pickaxe` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `user`
--

INSERT INTO `user` (`id`, `xp`, `level`, `credits`, `sigils`, `pickaxe`) VALUES
('192359884073730048', 388912, 23, 14913, 24, 0),
('186783154671976449', 20590, 3, 5396, 1, 0),
('109762470918291456', 1823, 1, 500, 2, 0),
('339366818571354113', 5095, 2, 1709, 7, 0),
('341689396300480512', 1121, 1, 771, 0, 0),
('324817151493931008', 534, 1, 500, 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
