<?php

/**
 * Page-specific role bypass settings
 *
 * @link       vladogrcic.com
 * @since      1.6.8
 *
 * @package    PageRestrictForWooCommerce\Admin
 */
namespace PageRestrictForWooCommerce\Admin;

/**
 * Handles per-page role bypass settings
 *
 * @package    PageRestrictForWooCommerce\Admin
 * @author     Your Name
 */
class Page_Role_Meta {
    /**
     * Initialize the class
     *
     * @since    1.6.8
     */
    public function __construct() {
        add_action('add_meta_boxes', [$this, 'add_meta_box']);
        add_action('save_post', [$this, 'save_meta_box']);
    }

    /**
     * Add the meta box to posts and pages
     *
     * @since    1.6.8
     */
    public function add_meta_box() {
        $screens = ['post', 'page'];
        foreach ($screens as $screen) {
            add_meta_box(
                'prwc_role_bypass_meta',
                __('Page Restrict WC - Role Bypass', 'page_restrict_domain'),
                [$this, 'render_meta_box'],
                $screen,
                'side',
                'default'
            );
        }
    }

    /**
     * Render the meta box content
     *
     * @since    1.6.8
     * @param    WP_Post    $post    The post object
     */
    public function render_meta_box($post) {
        wp_nonce_field('prwc_page_roles_nonce', 'prwc_page_roles_nonce');

        $roles = get_post_meta($post->ID, '_prwc_bypass_roles', false);
        $is_page_specific = !empty($roles) && is_array($roles);
        
        // Get all roles
        $all_roles = wp_roles()->roles;
        
        // Get global roles for reference
        $global_roles = get_option('prwc_bypass_roles', ['administrator']);
        
        ?>
        <div class="prwc-role-settings">
            <p>
                <label>
                    <input type="checkbox" name="prwc_inherit_global" <?php checked(!$is_page_specific); ?> />
                    <?php _e('Inherit Global Settings', 'page-restrict-for-woocommerce'); ?>
                </label>
                <br/>
                <small><?php 
                    _e('Current global bypass roles: ', 'page-restrict-for-woocommerce');
                    echo implode(', ', $global_roles);
                ?></small>
            </p>
            
            <div class="prwc-page-roles" <?php echo (!$is_page_specific ? 'style="display:none;"' : ''); ?>>
                <p><?php _e('Select roles that can bypass restrictions for this page:', 'page-restrict-for-woocommerce'); ?></p>
                <?php
                foreach ($all_roles as $role_id => $role) {
                    $checked = is_array($roles) && in_array($role_id, $roles);
                    ?>
                    <label>
                        <input type="checkbox" 
                               name="prwc_bypass_roles[]" 
                               value="<?php echo esc_attr($role_id); ?>"
                               <?php checked($checked); ?> />
                        <?php echo esc_html($role['name']); ?>
                    </label><br/>
                    <?php
                }
                ?>
            </div>
        </div>
        <script>
        jQuery(document).ready(function($) {
            $('input[name="prwc_inherit_global"]').change(function() {
                if ($(this).is(':checked')) {
                    $('.prwc-page-roles').slideUp();
                } else {
                    $('.prwc-page-roles').slideDown();
                }
            });
        });
        </script>
        <?php
    }

    /**
     * Save the meta box data
     *
     * @since    1.6.8
     * @param    int    $post_id    The post ID
     */
    public function save_meta_box($post_id) {
        if (!isset($_POST['prwc_page_roles_nonce'])) {
            return;
        }

        if (!wp_verify_nonce($_POST['prwc_page_roles_nonce'], 'prwc_page_roles_nonce')) {
            return;
        }

        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }

        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        $inherit_global = isset($_POST['prwc_inherit_global']) ? true : false;

        if ($inherit_global) {
            delete_post_meta($post_id, '_prwc_bypass_roles');
            return;
        }

        $roles = isset($_POST['prwc_bypass_roles']) ? (array) $_POST['prwc_bypass_roles'] : array();
        $roles = array_map('sanitize_text_field', $roles);

        delete_post_meta($post_id, '_prwc_bypass_roles');
        if (!empty($roles)) {
            foreach ($roles as $role) {
                add_post_meta($post_id, '_prwc_bypass_roles', $role);
            }
        }
    }
}
