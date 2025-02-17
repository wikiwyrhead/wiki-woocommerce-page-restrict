=== Page Restrict for WooCommerce - Role-Based Bypass Extension ===
Contributors: vladogrcic
Tags: restrict, pages, woocommerce, pay, product, sell pages, sell posts, role-based-access, content-restriction
Author URI: https://vladogrcic.com
Author: Vlado Grčić
Requires at least: 4.8.12
Tested up to: 6.7
Requires PHP: 7.0.25
Stable tag: trunk
Version: 1.6.8
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A fork of the original Page Restrict for WooCommerce plugin, adding role-based bypass functionality to allow specific user roles to access restricted content.

== Description ==

This is a fork of the original Page Restrict for WooCommerce plugin, adding essential role-based bypass functionality that was not available in the original version. While the original plugin effectively restricts page access based on WooCommerce purchases, this fork adds the ability to bypass restrictions for specific user roles.

= Why This Fork? =

The original plugin lacks the ability to bypass page restrictions for specific user roles, which is crucial for:

* Administrators who need to view all content
* Content editors who need access for review
* Custom roles that require unrestricted access
* Testing and quality assurance purposes

= New Features =

**Role-Based Bypass System:**

* Added comprehensive role-based bypass functionality
* Introduced 'bypasscustomer' role for flexible access management
* Implemented per-page role override capabilities
* Added global and page-specific role settings
* Maintained all original plugin functionality while adding bypass features

**Development Improvements:**

* Updated @wordpress/scripts to v30.11.0
* Enhanced build system configuration
* Improved code organization and maintainability
* Added comprehensive development tooling

**Documentation Updates:**

* Added detailed role-based bypass documentation
* Updated plugin support links
* Improved inline code documentation

**Code Quality:**

* Removed debug logging for production
* Optimized role-based access checks
* Improved error handling and security
* Enhanced WordPress coding standards compliance

= Original Plugin Features =

The fork maintains all the original functionality:

* Restrict content from pages, posts and custom post types based on WooCommerce products
* Restrict entire page or just sections of it
* Use one or multiple products to restrict content
* Restrict by time - Set a time limit for access
* Restrict by views - Set a view count limit
* Use custom pages for Restricted Messages
* Redirect to chosen pages
* Built for both Gutenberg and classic editor
* Use blocks or shortcodes for section restriction

= Requirements =

* WordPress 6.7 or higher
* WooCommerce 8.9 or higher
* PHP 7.0.25 or higher
* Guest checkout needs to be disabled

= Important Note =

This fork is maintained separately from the original plugin and adds functionality specifically for environments requiring role-based bypass capabilities. If you don't need role-based bypass, the original plugin may be sufficient for your needs.

Original plugin by Vlado Grčić:
* WordPress Plugin: [Page Restrict for WooCommerce](https://wordpress.org/plugins/page-restrict-for-woocommerce/)
* GitHub: [vladogrcic/page-restrict-for-woocommerce](https://github.com/vladogrcic/page-restrict-for-woocommerce)

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/page-restrict-wc` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Configure the plugin settings under WooCommerce > Settings > Page Restrict
4. Set up role-based bypass permissions as needed

== Frequently Asked Questions ==

= How does the role-based bypass work? =

Administrators and users with the 'bypasscustomer' role can automatically bypass content restrictions. You can also configure additional roles and per-page bypass settings.

= Is this compatible with the original plugin? =

This fork maintains full compatibility with the original plugin's features while adding role-based bypass functionality.

= Can I migrate from the original plugin? =

Yes, this fork is a drop-in replacement for the original plugin. Your existing restrictions and settings will be preserved.

== Changelog ==

= 1.6.8 =
* Added comprehensive role-based bypass functionality
* Introduced 'bypasscustomer' role
* Added global and per-page role settings
* Updated @wordpress/scripts to v30.11.0
* Improved code quality and documentation
* Enhanced development tooling

= 1.6.7 =
* Fixed sidebar not loading.
* Update class-front.php.
* Fixed WC "High-Performance Order Storage (HPOS)" incompatibility issue.
* Fixed wording of already expired pages.

= 1.6.6 =
* Possible fix for page slowdown for unregistered users.

= 1.6.5 =
* Fixed count error for view restriction.

= 1.6.4 =
* Fixed some warnings.

= 1.6.3 =
* Added notice for custom post types where the feature "Custom Fields" is missing.

= 1.6.2 =
* Fixed "PHP Fatal error:  Uncaught TypeError: in_array(): Argument #2 ($haystack) must be of type array..." error.

= 1.6.1 =
* Fixed undefined array key 0 that happened.

= 1.6.0 =
* Added prwc_restricted_pages_products shortcode.
* Minor fixes

= 1.4.13 =
* Fixed "Lock by Products" not able to accept more than 1 product on "Pages" page.

= 1.4.12 =
* Fixed Time Table not showing pages with bought products with no expiration.

= 1.4.11 =
* Fixed issue with $all_pages.

= 1.4.10 =
* Fixed issue with not bought and not logged in restrict message options not showing any pages on the classic editor.
* Added further warnings for redirecting to private pages.
* Removed unused code (future feature).
* Refactored "Quick Start" page.

= 1.4.9 =
* Fixed issue where the list of pages isn't the same in the Pages page and the Settings page.

= 1.4.8 =
* Performance fixes. It should be considerably faster now.
* Fixed various PHP warnings.

= 1.4.7 =
* Fixed bool passed to count error.

= 1.4.6 =
* Fixed custom post types not showing in "User Overview" and "Page Restrict" page on My Account.

= 1.4.5 =
* Added features to view ant time table on My Account page.
* Fixed issue with loading a limited number of pages for views.
* Rephrased the "Not all products required" option description in the Quick Start page.
* Fixed shortcode issue on Quick Start page.
* Translation fixes.

= 1.4.4 =
* Fixed showing pages when product wasn't bought.
* Fixed "ModuleNotFoundError: Module not found: Error: Can't resolve 'react' in" which seems to happen in the admin/assets/src/scss/admin.scss file.
* Changed Quick Start text.

= 1.4.3 =
* Fixed translation issues.

= 1.4.2 =
* Fixed issue with User Overview page not showing pages restricted by products.

= 1.4.1 =
* Fixed problems with Views tab in User Overview that prevents from showing users that bought product unless they viewed the page at least once.
* Smaller design issues (horizontal bar in User Overview).
* My Account fixes.

= 1.4.0 =
* Design changes.
* Showing order, product ids on User Overview page.
* Refactored variables
* Fixed issues with my-account Page Restrict tab.
* Design changes to "User Overview" page.

= 1.3.5 =
* Fixed issue with "User Overview" not showing users correctly, restricting also didn't work.
* Some minor refactoring
* Design changes to "User Overview" page.
* Language files update.

= 1.3.4 =
* Fixed issue with reverse block where it doesn't show for guests.

= 1.3.3 =
* Fixed "My Account" pages restricted pages list page not showing active restricted pages at all.

= 1.3.2 =
* Fixed issue where the "User Overview" page would be empty if timeout would not be set. It should be able to show if you only need to show if product purchased.
* Fixed issue with incorrect expiration time.

= 1.3.1 =
* Updated Javascript dependencies.
* Removed unnecessary code.

= 1.3.0 =
* Updated the React JS code to be in JSX.
* Some smaller changes.

= 1.2.0 =
* Adding "Not all products required" feature.
* Fixed bugs
    * Fixed problems with existing products bought checking. It counted only the first full set of products if users needed to buy multiple products.
    * Incorrect order list.

= 1.1.1 =
* Fixed Quick Start text.
* Fixing bugs.
  * Fixed incorrect namespace used.
  * Fixed guest users executing table list code.
  * Fixed $_POST not having nonce.

= 1.1.0 =
* Admins now can see which users have bought products needed to access pages. It shows users who recently bought it and are valid as a blue color and the users who have expired pages have those in red.
* Regular users can see their bought (expired or still valid) pages for their account as well. They can see it in their WooCommerce My Account page, or on a separate page using a Gutenberg block or shortcode.
* Added animation for pagination.
* Fixed not removing everything on uninstall.
* Fixed adding data that is not needed.

= 1.0.0 =
* Initial commit. 

== Upgrade Notice ==

= 1.6.8 =
* Added comprehensive role-based bypass functionality
* Introduced 'bypasscustomer' role
* Added global and per-page role settings
* Updated @wordpress/scripts to v30.11.0
* Improved code quality and documentation
* Enhanced development tooling

= 1.6.7 =
* Fixed sidebar not loading.
* Update class-front.php.
* Fixed WC "High-Performance Order Storage (HPOS)" incompatibility issue.
* Fixed wording of already expired pages.

= 1.6.6 =
* Possible fix for page slowdown for unregistered users.

= 1.6.5 =
* Fixed count error for view restriction.

= 1.6.4 =
* Fixed some warnings.

= 1.6.3 =
* Added notice for custom post types where the feature "Custom Fields" is missing.

= 1.6.2 =
* Fixed "PHP Fatal error:  Uncaught TypeError: in_array(): Argument #2 ($haystack) must be of type array..." error.

= 1.6.1 =
* Fixed undefined array key 0 that happened.

= 1.6.0 =
* Added prwc_restricted_pages_products shortcode.
* Minor fixes

= 1.4.13 =
* Fixed "Lock by Products" not able to accept more than 1 product on "Pages" page.

= 1.4.12 =
* Fixed Time Table not showing pages with bought products with no expiration.

= 1.4.11 =
* Fixed issue with $all_pages.

= 1.4.10 =
* Fixed issue with not bought and not logged in restrict message options not showing any pages on the classic editor.
* Added further warnings for redirecting to private pages.
* Removed unused code (future feature).
* Refactored "Quick Start" page.

= 1.4.9 =
* Fixed issue where the list of pages isn't the same in the Pages page and the Settings page.

= 1.4.8 =
* Performance fixes. It should be considerably faster now.
* Fixed various PHP warnings.

= 1.4.7 =
* Fixed bool passed to count error.

= 1.4.6 =
* Fixed custom post types not showing in "User Overview" and "Page Restrict" page on My Account.

= 1.4.5 =
* Added features to view ant time table on My Account page.
* Fixed issue with loading a limited number of pages for views.
* Rephrased the "Not all products required" option description in the Quick Start page.
* Fixed shortcode issue on Quick Start page.
* Translation fixes.

= 1.4.4 =
* Fixed showing pages when product wasn't bought.
* Fixed "ModuleNotFoundError: Module not found: Error: Can't resolve 'react' in" which seems to happen in the admin/assets/src/scss/admin.scss file.
* Changed Quick Start text.

= 1.4.3 =
* Fixed translation issues.

= 1.4.2 =
* Fixed issue with User Overview page not showing pages restricted by products.

= 1.4.1 =
* Fixed problems with Views tab in User Overview that prevents from showing users that bought product unless they viewed the page at least once.
* Smaller design issues (horizontal bar in User Overview).
* My Account fixes.

= 1.4.0 =
* Design changes.
* Showing order, product ids on User Overview page.
* Refactored variables
* Fixed issues with my-account Page Restrict tab.
* Design changes to "User Overview" page.

= 1.3.5 =
* Fixed issue with "User Overview" not showing users correctly, restricting also didn't work.
* Some minor refactoring
* Design changes to "User Overview" page.
* Language files update.

= 1.3.4 =
* Fixed issue with reverse block where it doesn't show for guests.

= 1.3.3 =
* Fixed "My Account" pages restricted pages list page not showing active restricted pages at all.

= 1.3.2 =
* Fixed issue where the "User Overview" page would be empty if timeout would not be set. It should be able to show if you only need to show if product purchased.
* Fixed issue with incorrect expiration time.

= 1.3.1 =
* Updated Javascript dependencies.
* Removed unnecessary code.

= 1.3.0 =
* Updated the React JS code to be in JSX.
* Some smaller changes.

= 1.2.0 =
* Adding "Not all products required" feature.
* Fixed bugs
    * Fixed problems with existing products bought checking. It counted only the first full set of products if users needed to buy multiple products.
    * Incorrect order list.

= 1.1.1 =
* Fixed Quick Start text.
* Fixing bugs.
  * Fixed incorrect namespace used.
  * Fixed guest users executing table list code.
  * Fixed $_POST not having nonce.

= 1.1.0 =
* Admins now can see which users have bought products needed to access pages. It shows users who recently bought it and are valid as a blue color and the users who have expired pages have those in red.
* Regular users can see their bought (expired or still valid) pages for their account as well. They can see it in their WooCommerce My Account page, or on a separate page using a Gutenberg block or shortcode.
* Added animation for pagination.
* Fixed not removing everything on uninstall.
* Fixed adding data that is not needed.

= 1.0.0 =
* Initial commit. 
