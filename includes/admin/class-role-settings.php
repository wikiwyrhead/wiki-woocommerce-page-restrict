<?php
/**
 * Role settings administration
 *
 * @link       vladogrcic.com
 * @since      1.6.8
 *
 * @package    PageRestrictForWooCommerce\Admin
 */
namespace PageRestrictForWooCommerce\Admin;

/**
 * Role settings management class.
 *
 * Handles the admin interface for role-based access control settings.
 *
 * @package    PageRestrictForWooCommerce\Admin
 * @author     Your Name
 */
class Role_Settings {
    /**
     * Initialize the class and set its properties.
     *
     * @since    1.6.8
     */
    public function __construct() {
        add_action('admin_init', [$this, 'register_settings']);
        add_action('admin_menu', [$this, 'add_settings_menu'], 99);
    }

    /**
     * Add settings menu item
     */
    public function add_settings_menu() {
        add_submenu_page(
            'woocommerce',
            __('Page Restrict Role Settings', 'page_restrict_domain'),
            __('Page Restrict Roles', 'page_restrict_domain'),
            'manage_options',
            'prwc-role-settings',
            [$this, 'render_settings_page']
        );
    }

    /**
     * Render the settings page
     */
    public function render_settings_page() {
        if (!current_user_can('manage_options')) {
            return;
        }
        ?>
        <div class="wrap">
            <h1><?= esc_html(get_admin_page_title()); ?></h1>
            <form action="options.php" method="post">
                <?php
                settings_fields('prwc_options');
                do_settings_sections('prwc_settings');
                submit_button(__('Save Settings', 'page_restrict_domain'));
                ?>
            </form>
        </div>
        <?php
    }

    /**
     * Register the settings
     */
    public function register_settings() {
        register_setting(
            'prwc_options',
            'prwc_bypass_roles',
            [
                'type' => 'array',
                'description' => 'Roles that can bypass content restrictions',
                'sanitize_callback' => [$this, 'sanitize_roles'],
                'default' => ['administrator']
            ]
        );

        add_settings_section(
            'prwc_role_settings',
            __('Role-Based Access Settings', 'page_restrict_domain'),
            [$this, 'render_section'],
            'prwc_settings'
        );

        add_settings_field(
            'prwc_bypass_roles',
            __('Bypass Roles', 'page_restrict_domain'),
            [$this, 'render_roles_field'],
            'prwc_settings',
            'prwc_role_settings'
        );
    }

    /**
     * Render the settings section description
     */
    public function render_section() {
        echo '<p>' . esc_html__('Select which user roles can bypass content restrictions.', 'page_restrict_domain') . '</p>';
    }

    /**
     * Render the roles selection field
     */
    public function render_roles_field() {
        $roles = wp_roles()->get_names();
        $selected_roles = get_option('prwc_bypass_roles', ['administrator']);

        echo '<fieldset>';
        foreach ($roles as $role_id => $role_name) {
            printf(
                '<label><input type="checkbox" name="prwc_bypass_roles[]" value="%s" %s> %s</label><br>',
                esc_attr($role_id),
                checked(in_array($role_id, $selected_roles), true, false),
                esc_html($role_name)
            );
        }
        echo '</fieldset>';
        echo '<p class="description">' . esc_html__('Users with selected roles will bypass all content restrictions.', 'page_restrict_domain') . '</p>';
    }

    /**
     * Sanitize the roles array
     *
     * @param array $roles Array of role slugs
     * @return array Sanitized array of role slugs
     */
    public function sanitize_roles($roles) {
        if (!is_array($roles)) {
            return ['administrator'];
        }
        return array_map('sanitize_text_field', $roles);
    }
}
