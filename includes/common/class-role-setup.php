<?php
namespace PageRestrictForWooCommerce\Common;

/**
 * Role setup class.
 *
 * Handles the setup of custom roles and their bypass permissions.
 *
 * @package    PageRestrictForWooCommerce\Common
 */
class Role_Setup {
    /**
     * Initialize the class and set its properties.
     *
     * @since    1.6.8
     */
    public function __construct() {
        // Run setup immediately if in admin context
        if (is_admin()) {
            $this->setup_roles();
        }
    }

    /**
     * Setup custom roles and their bypass permissions
     */
    public function setup_roles() {
        if (!is_admin()) {
            return;
        }

        $role = get_role('bypasscustomer');
        if (!$role) {
            add_role(
                'bypasscustomer',
                'Bypass Customer',
                [
                    'read' => true,
                    'level_0' => true
                ]
            );
        }

        // Add bypasscustomer to the bypass roles list if not already present
        $bypass_roles = get_option('prwc_bypass_roles', ['administrator']);
        if (!in_array('bypasscustomer', $bypass_roles)) {
            $bypass_roles[] = 'bypasscustomer';
            update_option('prwc_bypass_roles', $bypass_roles);
        }
    }
}

// Initialize the class
$role_setup = new Role_Setup();
