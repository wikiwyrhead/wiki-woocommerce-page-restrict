<?php
require_once('wp-load.php');
$bypass_roles = get_option('prwc_bypass_roles', ['administrator']);
var_dump($bypass_roles);
