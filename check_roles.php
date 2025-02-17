<?php
require_once('wp-load.php');
$roles = wp_roles();
var_dump($roles->get_names());
var_dump(get_option('prwc_bypass_roles'));
