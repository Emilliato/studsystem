-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2020 at 04:04 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_001`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add student', 7, 'add_student'),
(26, 'Can change student', 7, 'change_student'),
(27, 'Can delete student', 7, 'delete_student'),
(28, 'Can view student', 7, 'view_student'),
(29, 'Can add student details', 8, 'add_studentdetails'),
(30, 'Can change student details', 8, 'change_studentdetails'),
(31, 'Can delete student details', 8, 'delete_studentdetails'),
(32, 'Can view student details', 8, 'view_studentdetails'),
(33, 'Can add student address', 9, 'add_studentaddress'),
(34, 'Can change student address', 9, 'change_studentaddress'),
(35, 'Can delete student address', 9, 'delete_studentaddress'),
(36, 'Can view student address', 9, 'view_studentaddress'),
(37, 'Can add parent details', 10, 'add_parentdetails'),
(38, 'Can change parent details', 10, 'change_parentdetails'),
(39, 'Can delete parent details', 10, 'delete_parentdetails'),
(40, 'Can view parent details', 10, 'view_parentdetails'),
(41, 'Can add subject', 11, 'add_subject'),
(42, 'Can change subject', 11, 'change_subject'),
(43, 'Can delete subject', 11, 'delete_subject'),
(44, 'Can view subject', 11, 'view_subject'),
(45, 'Can add mark', 12, 'add_mark'),
(46, 'Can change mark', 12, 'change_mark'),
(47, 'Can delete mark', 12, 'delete_mark'),
(48, 'Can view mark', 12, 'view_mark'),
(49, 'Can add grade', 13, 'add_grade'),
(50, 'Can change grade', 13, 'change_grade'),
(51, 'Can delete grade', 13, 'delete_grade'),
(52, 'Can view grade', 13, 'view_grade');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$180000$dEy1ZHdvjCyG$4uM1Jjh0xbAaabxUa1Nxhly9StVTfnYzVj7EZCUKAAQ=', '2020-03-08 13:32:25.020683', 1, 'emilliom', '', '', '', 1, 1, '2020-02-22 12:45:08.587577');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2020-02-22 14:07:09.078447', '8', 'Grade object (8)', 2, '[{\"added\": {\"name\": \"student\", \"object\": \"Student object (1)\"}}, {\"added\": {\"name\": \"student\", \"object\": \"Student object (2)\"}}, {\"added\": {\"name\": \"student\", \"object\": \"Student object (3)\"}}]', 13, 1),
(2, '2020-03-08 13:32:47.900978', '9', 'Grade1			2020			Term2', 2, '[{\"changed\": {\"fields\": [\"Grade year\"]}}]', 13, 1),
(3, '2020-03-08 13:49:39.315548', '11', 'Grade11			2020			Term4', 1, '[{\"added\": {}}]', 13, 1);

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(13, 'management', 'grade'),
(12, 'management', 'mark'),
(10, 'management', 'parentdetails'),
(7, 'management', 'student'),
(9, 'management', 'studentaddress'),
(8, 'management', 'studentdetails'),
(11, 'management', 'subject'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2020-02-22 12:40:04.552698'),
(2, 'auth', '0001_initial', '2020-02-22 12:40:04.654721'),
(3, 'admin', '0001_initial', '2020-02-22 12:40:04.972406'),
(4, 'admin', '0002_logentry_remove_auto_add', '2020-02-22 12:40:05.050788'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2020-02-22 12:40:05.059792'),
(6, 'contenttypes', '0002_remove_content_type_name', '2020-02-22 12:40:05.127047'),
(7, 'auth', '0002_alter_permission_name_max_length', '2020-02-22 12:40:05.164139'),
(8, 'auth', '0003_alter_user_email_max_length', '2020-02-22 12:40:05.178135'),
(9, 'auth', '0004_alter_user_username_opts', '2020-02-22 12:40:05.193126'),
(10, 'auth', '0005_alter_user_last_login_null', '2020-02-22 12:40:05.223109'),
(11, 'auth', '0006_require_contenttypes_0002', '2020-02-22 12:40:05.227095'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2020-02-22 12:40:05.236102'),
(13, 'auth', '0008_alter_user_username_max_length', '2020-02-22 12:40:05.252143'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2020-02-22 12:40:05.268132'),
(15, 'auth', '0010_alter_group_name_max_length', '2020-02-22 12:40:05.283124'),
(16, 'auth', '0011_update_proxy_permissions', '2020-02-22 12:40:05.296112'),
(17, 'sessions', '0001_initial', '2020-02-22 12:40:05.312108'),
(18, 'management', '0001_initial', '2020-02-22 13:12:37.231221'),
(19, 'management', '0002_auto_20200222_1603', '2020-02-22 14:04:07.048084'),
(20, 'management', '0003_auto_20200222_1635', '2020-02-22 14:35:25.898111'),
(21, 'management', '0004_auto_20200315_2026', '2020-03-15 18:27:13.843686'),
(22, 'management', '0005_auto_20200315_2026', '2020-03-15 18:27:13.928377'),
(23, 'management', '0006_auto_20200316_2210', '2020-03-16 20:14:31.991024'),
(24, 'management', '0007_auto_20200316_2212', '2020-03-16 20:14:32.003008'),
(25, 'management', '0008_auto_20200316_2214', '2020-03-16 20:14:32.011006');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('bilw2jzjue2pzbv1xtvn3o4ltgksns87', 'YTIwMjdmYjI1YTBmZmYyYjg0OTYyOGZkNTI1NzAwNmVlOGQ5NWQ4NTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwZTY5NDg2MGI1NDFmNzYwZDVhYjRmZDlkZjUwZGVmMDM5OTg1MTU1In0=', '2020-03-07 14:04:52.242904'),
('mdqwvfhl91t0rsqw29wc8x9pfc6la9if', 'YTIwMjdmYjI1YTBmZmYyYjg0OTYyOGZkNTI1NzAwNmVlOGQ5NWQ4NTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwZTY5NDg2MGI1NDFmNzYwZDVhYjRmZDlkZjUwZGVmMDM5OTg1MTU1In0=', '2020-03-22 13:32:25.040673');

-- --------------------------------------------------------

--
-- Table structure for table `grade`
--

CREATE TABLE `grade` (
  `grade_id` int(11) NOT NULL,
  `name` varchar(10) NOT NULL,
  `grade_year` varchar(4) NOT NULL,
  `number_of_students` int(11) DEFAULT NULL,
  `average` int(11) DEFAULT NULL,
  `term` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grade`
--

INSERT INTO `grade` (`grade_id`, `name`, `grade_year`, `number_of_students`, `average`, `term`) VALUES
(1, 'Grade1', '2020', 50, NULL, 'Term1'),
(2, 'Grade2', '2020', 50, NULL, 'Term1'),
(3, 'Grade3', '2020', 50, NULL, 'Term1'),
(4, 'Grade4', '2020', 50, NULL, 'Term1'),
(5, 'Grade5', '2020', 50, NULL, 'Term1'),
(6, 'Grade6', '2020', 50, NULL, 'Term1'),
(7, 'Grade7', '2020', 50, NULL, 'Term1'),
(8, 'Grade8', '2020', 50, NULL, 'Term1'),
(9, 'Grade1', '2020', 60, 0, 'Term2'),
(11, 'Grade11', '2020', NULL, NULL, 'Term4'),
(12, 'Grade9', '2020', NULL, NULL, 'Term4'),
(13, 'Grade12', '2020', NULL, NULL, 'Term1'),
(14, 'Grade13', '2020', NULL, NULL, 'Term3'),
(15, 'T', '2020', NULL, NULL, 'Test1');

-- --------------------------------------------------------

--
-- Table structure for table `mark`
--

CREATE TABLE `mark` (
  `mark_id` int(11) NOT NULL,
  `mark_type` varchar(4) DEFAULT NULL,
  `mark_name` varchar(10) NOT NULL,
  `mark` decimal(10,0) NOT NULL,
  `subject_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `parent_details`
--

CREATE TABLE `parent_details` (
  `parent_details_id` int(11) NOT NULL,
  `name` varchar(25) DEFAULT NULL,
  `surname` varchar(25) DEFAULT NULL,
  `cell` varchar(25) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `occupation` varchar(25) DEFAULT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parent_details`
--

INSERT INTO `parent_details` (`parent_details_id`, `name`, `surname`, `cell`, `email`, `occupation`, `student_id`) VALUES
(1, 'Charles', 'Marambo', '0774990045', 'charlesmarambo@gmail.com', 'Vendor', 1);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `student_number` varchar(25) NOT NULL,
  `student_name` varchar(25) NOT NULL,
  `student_surname` varchar(25) NOT NULL,
  `grade_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `student_number`, `student_name`, `student_surname`, `grade_id`) VALUES
(1, '11111', 'Emillio', 'Marambo', 8),
(2, '222222', 'Tawanda', 'Chuma', 8),
(3, '33333', 'Micheal', 'Guveya', 8),
(4, '', 'Tanaka', 'Marambo', 1);

-- --------------------------------------------------------

--
-- Table structure for table `student_address`
--

CREATE TABLE `student_address` (
  `address_id` int(11) NOT NULL,
  `street_address` varchar(25) NOT NULL,
  `location` varchar(25) DEFAULT NULL,
  `town` varchar(25) DEFAULT NULL,
  `province` varchar(25) DEFAULT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student_details`
--

CREATE TABLE `student_details` (
  `student_details_id` int(11) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(1) DEFAULT NULL,
  `id_number` varchar(25) DEFAULT NULL,
  `cell_number` varchar(25) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `subject_id` int(11) NOT NULL,
  `subject_name` varchar(10) NOT NULL,
  `final_mark` decimal(10,0) DEFAULT NULL,
  `grade_id` int(11) NOT NULL,
  `student_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `grade`
--
ALTER TABLE `grade`
  ADD PRIMARY KEY (`grade_id`);

--
-- Indexes for table `mark`
--
ALTER TABLE `mark`
  ADD PRIMARY KEY (`mark_id`),
  ADD KEY `mark_subject_id_a0c4063b_fk_subject_subject_id` (`subject_id`);

--
-- Indexes for table `parent_details`
--
ALTER TABLE `parent_details`
  ADD PRIMARY KEY (`parent_details_id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `parent_details_student_id_9e0eb37f_fk_student_student_id` (`student_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`),
  ADD UNIQUE KEY `student_number` (`student_number`),
  ADD KEY `student_grade_id_eaf6ea9d_fk_grade_grade_id` (`grade_id`);

--
-- Indexes for table `student_address`
--
ALTER TABLE `student_address`
  ADD PRIMARY KEY (`address_id`),
  ADD UNIQUE KEY `street_address` (`street_address`),
  ADD KEY `student_address_student_id_724bd9a3_fk_student_student_id` (`student_id`);

--
-- Indexes for table `student_details`
--
ALTER TABLE `student_details`
  ADD PRIMARY KEY (`student_details_id`),
  ADD KEY `student_details_student_id_7e0efa18_fk_student_student_id` (`student_id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subject_id`),
  ADD KEY `subject_grade_id_2679d678_fk_grade_grade_id` (`grade_id`),
  ADD KEY `subject_student_id_9e343032_fk_student_student_id` (`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `grade`
--
ALTER TABLE `grade`
  MODIFY `grade_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `mark`
--
ALTER TABLE `mark`
  MODIFY `mark_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parent_details`
--
ALTER TABLE `parent_details`
  MODIFY `parent_details_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `student_address`
--
ALTER TABLE `student_address`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student_details`
--
ALTER TABLE `student_details`
  MODIFY `student_details_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `mark`
--
ALTER TABLE `mark`
  ADD CONSTRAINT `mark_subject_id_a0c4063b_fk_subject_subject_id` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`subject_id`);

--
-- Constraints for table `parent_details`
--
ALTER TABLE `parent_details`
  ADD CONSTRAINT `parent_details_student_id_9e0eb37f_fk_student_student_id` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_grade_id_eaf6ea9d_fk_grade_grade_id` FOREIGN KEY (`grade_id`) REFERENCES `grade` (`grade_id`);

--
-- Constraints for table `student_address`
--
ALTER TABLE `student_address`
  ADD CONSTRAINT `student_address_student_id_724bd9a3_fk_student_student_id` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`);

--
-- Constraints for table `student_details`
--
ALTER TABLE `student_details`
  ADD CONSTRAINT `student_details_student_id_7e0efa18_fk_student_student_id` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`);

--
-- Constraints for table `subject`
--
ALTER TABLE `subject`
  ADD CONSTRAINT `subject_grade_id_2679d678_fk_grade_grade_id` FOREIGN KEY (`grade_id`) REFERENCES `grade` (`grade_id`),
  ADD CONSTRAINT `subject_student_id_9e343032_fk_student_student_id` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
