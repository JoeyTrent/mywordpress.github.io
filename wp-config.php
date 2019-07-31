<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
define('WPLANG', 'zh_CN');
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '123456');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'QsR]#HfK#bozX9sr(`)zU;3yMmU<)3E?l54]Fi/??Ii@Sc,IWX61vBHfI:ibSPlB');
define('SECURE_AUTH_KEY',  'u`~A~kJF?C,aaUeO-|}}_:[.qa,<|D#ZEThSM2bsxi ^N acy8>2JUH*l+nAfD?X');
define('LOGGED_IN_KEY',    '4G<ayaIJ^qg&BkCh[I}vlHB_n9QEsG`38vIhosr/eyV_ql]|6A&SCvoW Ih=rdh2');
define('NONCE_KEY',        'ZZ79|k:Ra4<mJR4`9@j;n2zWn3CkKaKn4!(mqs:,e(6U&XL9=]&>AEdt8p``Gdt+');
define('AUTH_SALT',        'I/aro_q~A->_<P;}%(@_x,c<N`H%KbsmN<%+Y !F4/Id_nG#?~;j=1(V,o^YXlx3');
define('SECURE_AUTH_SALT', '2_< P< mM$GGF[PcIrl,zjrdS+g7mr;bc%Z=F,p6Z1zIlvju{tvo8T3SGx!`|CSe');
define('LOGGED_IN_SALT',   't|k9C_8],.n/=%jMPy*gC*b%qv S#*AsP0& zmzy?P0N*+ sT%13sU^@(<6;sAUY');
define('NONCE_SALT',       'xnxYq!Z+-@1auEpW`5Y*Pf:C2:eLp<9qfmfl)hJb2V|53bOiZ]*X-`>~I-}lSkf^');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
