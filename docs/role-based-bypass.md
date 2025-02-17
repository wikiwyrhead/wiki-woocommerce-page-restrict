# Role-Based Content Bypass

This document describes the role-based bypass feature in Page Restrict for WooCommerce.

## Overview

The role-based bypass system allows specific WordPress user roles to bypass content restrictions. This can be configured both globally and on a per-page basis.

## Global Settings

### Location
Navigate to WooCommerce > Settings > Page Restrict > Role Settings

### Features
- Select which user roles can bypass all content restrictions
- Administrator role is enabled by default and always has bypass permissions
- Changes affect all restricted content unless overridden by page-specific settings

## Page-Specific Settings

### Location
Edit any post or page and look for the "Page Restrict WC - Role Bypass" meta box in the sidebar.

### Features
- Override global role settings for specific pages
- Choose to inherit from global settings or set page-specific roles
- Changes only affect the current page

## Programmatic Usage

### Check if User Can Bypass

```php
$role_access = new Role_Based_Access();

// Check if current user can bypass restrictions
if ($role_access->can_bypass_restrictions()) {
    // User can bypass all restrictions
}

// Check page-specific bypass
if ($role_access->can_bypass_restrictions($post_id)) {
    // User can bypass restrictions for this page
}
```

### Get and Update Bypass Roles

```php
$role_access = new Role_Based_Access();

// Get global bypass roles
$global_roles = $role_access->get_bypass_roles();

// Get page-specific bypass roles
$page_roles = $role_access->get_bypass_roles($post_id);

// Update global bypass roles
$role_access->update_bypass_roles(['administrator', 'editor']);

// Update page-specific bypass roles
$role_access->update_bypass_roles(['shop_manager'], $post_id);
```

### Add Custom Bypass Logic

```php
add_filter('prwc_can_bypass_restrictions', function($can_bypass, $post_id) {
    // Add custom logic here
    if (current_user_can('custom_capability')) {
        return true;
    }
    return $can_bypass;
}, 10, 2);
```

## Best Practices

1. **Security First**: Only grant bypass permissions to trusted roles
2. **Use Page-Specific Settings Sparingly**: They override global settings and may cause confusion
3. **Document Changes**: Keep track of which roles have bypass permissions
4. **Regular Audits**: Periodically review bypass settings
5. **Default Role**: The 'administrator' role always has bypass permissions by default

## Troubleshooting

### Common Issues

1. **Bypass Not Working**
   - Verify user has the correct role
   - Check if page has specific settings overriding global settings
   - Ensure the role is properly saved in the database
   - Verify the user is logged in

2. **Settings Not Saving**
   - Check user permissions (must have capability to edit posts)
   - Verify nonce security check is passing
   - Check if the role exists in WordPress

3. **Role Inheritance Issues**
   - Verify global settings are properly set
   - Check if page-specific settings are accidentally overriding global settings
   - Clear WordPress cache if changes are not reflecting

### Checking Current Settings

```php
// Get instance of Role_Based_Access
$role_access = new Role_Based_Access();

// Check current global bypass roles
$global_roles = $role_access->get_bypass_roles();
var_dump($global_roles);

// Check page-specific roles
$page_roles = $role_access->get_bypass_roles($post_id);
var_dump($page_roles);

// Check if current user can bypass
$can_bypass = $role_access->can_bypass_restrictions($post_id);
var_dump($can_bypass);
```

## Support

For additional support or feature requests, please visit:
[Plugin Support Page](https://wordpress.org/plugins/page-restrict-for-woocommerce/)