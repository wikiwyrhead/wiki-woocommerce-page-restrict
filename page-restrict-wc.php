<?php

/**
 * The plugin bootstrap file
 *
 * Page Restrict for WooCommerce is a plugin that sells access to pages, posts and custom post types through WooCommerce.
 *
 * @link              vladogrcic.com
 * @since             1.0.0
 * @package           Page_Restrict_Wc
 *
 * @wordpress-plugin
 * Plugin Name:       		Page Restrict for WooCommerce
 * Description:       		Restricts access to pages using WooCommerce products.
 * Version:           		1.6.7
 * WC requires at least: 	3.0.0
 * WC tested up to: 		8.9
 * Author:            		Vlado Grčić
 * Author URI:        		vladogrcic.com
 * License:           		GPL-2.0+
 * License URI:       		http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       		page_restrict_domain
 * Domain Path:       		/languages
 */
namespace PageRestrictForWooCommerce;
use PageRestrictForWooCommerce\Includes\Page_Restrict_Wc;
use PageRestrictForWooCommerce\Includes\Core\Activator;
use PageRestrictForWooCommerce\Includes\Core\Deactivator;
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'PAGE_RESTRICT_WC_VERSION', '1.6.8' );
define( 'PAGE_RESTRICT_WC_NAME', 'page-restrict-wc' );
define( 'PAGE_RESTRICT_WC_TITLE', esc_html__('Page Restrict for WooCommerce', 'page_restrict_domain') );

define( 'PAGE_RESTRICT_WC_LOCATION_URL', plugin_dir_url( __FILE__ ) );
define( 'PAGE_RESTRICT_WC_LOCATION_DIR', plugin_dir_path( __FILE__ ) );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/core/class-activator.php
 */
function activate_page_restrict_wc() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/core/class-activator.php';
	Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/core/class-deactivator.php
 */
function deactivate_page_restrict_wc() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/core/class-deactivator.php';
	Deactivator::deactivate();
}

register_activation_hook( __FILE__, __NAMESPACE__.'\activate_page_restrict_wc' );
register_deactivation_hook( __FILE__, __NAMESPACE__.'\deactivate_page_restrict_wc' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-page-restrict-wc.php';

/**
 * Various general functions.
 */
require plugin_dir_path( __FILE__ ) . 'includes/functions.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_page_restrict_wc() {
	if(version_compare(PHP_VERSION, '7.0', '>')) {
		// Load core files first
		require_once plugin_dir_path( __FILE__ ) . 'includes/core/class-loader.php';
		require_once plugin_dir_path( __FILE__ ) . 'includes/core/class-i18n.php';
		require_once plugin_dir_path( __FILE__ ) . 'includes/core/class-activator.php';
		require_once plugin_dir_path( __FILE__ ) . 'includes/core/class-deactivator.php';
		
		// Load common files
		require_once plugin_dir_path( __FILE__ ) . 'includes/common/class-helpers.php';
		require_once plugin_dir_path( __FILE__ ) . 'includes/common/class-page-plugin-options.php';
		require_once plugin_dir_path( __FILE__ ) . 'includes/common/class-restrict-types.php';
		require_once plugin_dir_path( __FILE__ ) . 'includes/common/class-role-based-access.php';
		require_once plugin_dir_path( __FILE__ ) . 'includes/common/class-section-blocks.php';
		require_once plugin_dir_path( __FILE__ ) . 'includes/common/class-user-restrict-data.php';
		require_once plugin_dir_path( __FILE__ ) . 'includes/common/class-role-setup.php';
		
		// Load admin files
		require_once plugin_dir_path( __FILE__ ) . 'includes/admin/class-role-settings.php';
		require_once plugin_dir_path( __FILE__ ) . 'includes/admin/class-page-role-meta.php';
		
		// Initialize page-specific role settings
		if (is_admin()) {
			new \PageRestrictForWooCommerce\Admin\Page_Role_Meta();
		}
		
		$plugin = new Page_Restrict_Wc();
		$plugin->run();
	}
}
run_page_restrict_wc();
