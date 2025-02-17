<?php
/**
 * Role-based access control for content restrictions
 *
 * @link       vladogrcic.com
 * @since      1.6.8
 *
 * @package    PageRestrictForWooCommerce\Common
 */
namespace PageRestrictForWooCommerce\Common;

/**
 * Role-based access control class.
 *
 * Handles role-based bypassing of content restrictions.
 *
 * @package    PageRestrictForWooCommerce\Common
 * @author     Your Name
 */
class Role_Based_Access {
    /**
     * Roles that can bypass restrictions
     *
     * @since    1.6.8
     * @access   private
     * @var      array    $bypass_roles    Array of role slugs that can bypass restrictions
     */
    private $bypass_roles;

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.6.8
     */
    public function __construct() {
        $this->bypass_roles = get_option('prwc_bypass_roles', ['administrator']);
    }

    /**
     * Check if the current user can bypass restrictions
     *
     * @since     1.6.8
     * @param     int       $post_id    Optional post ID to check against
     * @return    boolean               True if user can bypass, false otherwise
     */
    public function can_bypass_restrictions($post_id = null) {
        $user = wp_get_current_user();
        if (!$user->ID) {
            return false;
        }

        if (in_array('administrator', $user->roles)) {
            return true;
        }

        if ($post_id) {
            $page_roles = get_post_meta($post_id, '_prwc_bypass_roles', false);
            $is_page_specific = !empty($page_roles) && is_array($page_roles);

            if ($is_page_specific) {
                $can_bypass = false;
                foreach ($page_roles as $role) {
                    if (in_array($role, $user->roles)) {
                        $can_bypass = true;
                        break;
                    }
                }
                return apply_filters('prwc_can_bypass_restrictions', $can_bypass, $post_id);
            }
        }

        foreach ($this->bypass_roles as $role) {
            if (in_array($role, $user->roles)) {
                return true;
            }
        }

        return apply_filters('prwc_can_bypass_restrictions', false, $post_id);
    }

    /**
     * Get the list of roles that can bypass restrictions
     *
     * @since     1.6.8
     * @param     int       $post_id    Optional post ID to get roles for
     * @return    array                 Array of role slugs
     */
    public function get_bypass_roles($post_id = null) {
        if ($post_id) {
            $page_roles = get_post_meta($post_id, '_prwc_bypass_roles', true);
            $is_page_specific = get_post_meta($post_id, '_prwc_bypass_roles_set', true);

            if ($is_page_specific && is_array($page_roles)) {
                return $page_roles;
            }
        }
        return $this->bypass_roles;
    }

    /**
     * Update the list of roles that can bypass restrictions
     *
     * @since     1.6.8
     * @param     array     $roles      Array of role slugs
     * @param     int       $post_id    Optional post ID to update roles for
     * @return    boolean               True if update successful, false otherwise
     */
    public function update_bypass_roles($roles, $post_id = null) {
        if (!is_array($roles)) {
            return false;
        }

        $roles = array_map('sanitize_text_field', $roles);

        if ($post_id) {
            update_post_meta($post_id, '_prwc_bypass_roles', $roles);
            update_post_meta($post_id, '_prwc_bypass_roles_set', true);
            return true;
        }

        return update_option('prwc_bypass_roles', $roles);
    }
}
