<?php
// $Id$

/**
 * @file
 *   Admin forms for the Appbar module.
 */

/**
 * Settings form.
 */
function appbar_admin(&$form_state) {
  $form['appbar_css'] = array(
    '#type' => 'select',
    '#title' => t('Style'),
    '#description' => t('Select the style you would like to use for the appbar.'),
    '#required' => TRUE,
    '#default_value' => variable_get('appbar_css', 'default'),
    '#options' => _appbar_add_css(TRUE),
  );
  if (module_exists('views')) {
    $views = views_get_all_views();
    $list = array('appbar-default' => t('Default'));
    foreach ($views as $name => $view) {
      if ($view->disabled == 0) {
        $list[$name] = $name;
      }
    }
    unset($views);
    unset($view);
    $form['appbar_view'] = array(
      '#type' => 'select',
      '#title' => t('View for alert list'),
      '#description' => t('If you use a View instead of the default list, you will lose the default styling, and you may not be able to visually differentiate new alerts.')
        .' '. t('Note that Appbar will use the default display of the View, if you choose one.')
        .' '. t('Also, the View (if you use one) should have one argument that takes multiple User IDs.'),
      '#default_value' => variable_get('appbar_view', 'appbar-default'),
      '#options' => $list,
    );
  }
  $form['appbar_hijack'] = array(
    '#type' => 'radios',
    '#title' => t('Hijack system messages for alerts'),
    '#description' => t('If you choose to show system messages in the Appbar alert dialog, the messages will be saved in the Appbar table in the database so that they can be viewed later.')
      .' '. t('However, please note that this can be confusing to users if a message meant to show up on one specific page is viewed in the alert dialog on another.'),
    '#required' => TRUE,
    '#default_value' => variable_get('appbar_hijack', 'no'),
    '#options' => array(
      'no' => t('Do not hijack system messages'),
      'yes-clear' => t('Use system message for alerts, and do not also show them above the content area'),
      'yes-no' => t('Use system messages for alerts, but also show them above the content area'),
    ),
  );
  $form['appbar_min'] = array(
    '#type' => 'select',
    '#title' => t('Minimum number of alerts to show'),
    '#description' => t('All new alerts will always be shown, but if the number of new alerts is less than the number you specify here,'.
      ' Appbar will retrieve old alerts to make up the difference.'),
    '#required' => TRUE,
    '#default_value' => variable_get('appbar_min', 5),
    '#options' => drupal_map_assoc(range(1, 20)),
  );
  $form['appbar_cron_cleanup'] = array(
    '#type' => 'select',
    '#title' => t('Delete Appbar alerts from database after'),
    '#description' => t('Appbar will delete alerts from the database that are older than this value when cron is run. Disabled by default.'),
    '#required' => TRUE,
    '#default_value' => variable_get('appbar_cron_cleanup', 0),
    '#options' => array(
      0 => t('Disabled'),
      604800 => t('1 week'),
      1209600 => t('2 weeks'),
      2592000 => t('1 month'),
      7862400 => t('3 months'),
      15811200 => t('6 months'),
      31536000 => t('1 year'),
    ),
  );
  $form['appbar_cron_limit'] = array(
    '#type' => 'textfield',
    '#title' => t('Rows to delete per cron run'),
    '#description' => t('Delete this number of appbar alerts from the database during cron runs. Only used if option above is not set to Disabled.'),
    '#required' => TRUE,
    '#default_value' => variable_get('appbar_cron_limit', 1000),
  );
  $form['appbar_time'] = array(
    '#type' => 'textfield',
    '#title' => t('Refresh rate'),
    '#description' => t('The number of milliseconds Appbar will delay before checking to see if there are any new alerts. (There are 1000 milliseconds in a second.) Be very careful with this, as it can quickly eat your server resources.'),
    '#required' => TRUE,
    '#default_value' => variable_get('appbar_time', 20000),
  );
  $form['appbar_uid1'] = array(
    '#type' => 'checkbox',
    '#title' => t('Record alerts from User 1'),
    '#description' => t('Allows you to suppress all alerts from the super administrator.'),
    '#default_value' => variable_get('appbar_uid1', 1),
  );
  $form['appbar_use_alerts'] = array(
    '#type' => 'checkbox',
    '#title' => t('Use the Appbar alert system'),
    '#description' => t('If you disable this, the alert system on the right side of the Appbar will disappear.'),
    '#default_value' => variable_get('appbar_use_alerts', 1),
  );

  /**
   * This section is largely copied from block.admin.inc.
   */
  $form['user_vis_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('User specific visibility settings'),
    '#collapsible' => TRUE,
  );
  $form['user_vis_settings']['appbar_user_vis'] = array(
    '#type' => 'radios',
    '#title' => t('Custom visibility settings'),
    '#options' => array(
      t('Users cannot control whether or not they see the Application Toolbar.'),
      t('Show the Application Toolbar by default, but let individual users hide it.'),
      t('Hide the Application Toolbar by default but let individual users show it.')
    ),
    '#description' => t('Allow individual users to customize the visibility of the appbar in their account settings.'),
    '#default_value' => variable_get('appbar_user_vis', 0),
  );
  $form['page_vis_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Page specific visibility settings'),
    '#collapsible' => TRUE,
  );
  $access = user_access('use PHP for block visibility');
  if (variable_get('appbar_page_vis', 0) == 2 && !$access) {
    $form['page_vis_settings'] = array();
    $form['page_vis_settings']['visibility'] = array('#type' => 'value', '#value' => 2);
    $form['page_vis_settings']['pages'] = array('#type' => 'value', '#value' => variable_get('appbar_vis_list', ''));
  }
  else {
    $options = array(t('Show on every page except the listed pages.'), t('Show on only the listed pages.'));
    $description = t("Enter one page per line as Drupal paths. The '*' character is a wildcard. Example paths are %blog for the blog page and %blog-wildcard for every personal blog. %front is the front page.", array('%blog' => 'blog', '%blog-wildcard' => 'blog/*', '%front' => '<front>'));
    if ($access) {
      $options[] = t('Show if the following PHP code returns <code>TRUE</code> (PHP-mode, experts only).');
      $description .= ' '. t('If the PHP-mode is chosen, enter PHP code between %php. Note that executing incorrect PHP-code can break your Drupal site.', array('%php' => '<?php ?>'));
    }
    $form['page_vis_settings']['appbar_page_vis'] = array(
      '#type' => 'radios',
      '#title' => t('Show block on specific pages'),
      '#options' => $options,
      '#default_value' => variable_get('appbar_page_vis', 0),
    );
    $form['page_vis_settings']['appbar_vis_list'] = array(
      '#type' => 'textarea',
      '#title' => t('Pages'),
      '#default_value' => variable_get('appbar_vis_list', ''),
      '#description' => $description,
    );
  }

  $form['appbar_extra'] = array(
    '#type' => 'fieldset',
    '#title' => t('Messages'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['appbar_extra']['appbar_admin'] = array(
    '#type' => 'textarea',
    '#title' => t('Send a message to all users'),
    '#description' => t('Use with caution!'),
    '#rows' => 5,
  );
  $form['#validate'][] = 'appbar_admin_validate';
  $form['#submit'][] = 'appbar_admin_submit';
  return system_settings_form($form);
}

/**
 * Validate function for the admin settings form.
 */
function appbar_admin_validate($form, &$form_state) {
  $n = $form_state['values']['appbar_time'];
  if (!is_int($n) && $n < 1) {
    form_set_error('appbar_time', t('The refresh rate must be a positive integer.'));
  }
  $l = $form_state['values']['appbar_cron_limit'];
  if (!is_int($l) && $l < 0) {
    form_set_error('appbar_cron_limit', t('The rows to delete per cron run must be a positive integer.'));
  }
}

/**
 * Submit function for the admin settings form.
 */
function appbar_admin_submit($form, &$form_state) {
  $message = trim(filter_xss_admin($form_state['values']['appbar_admin']));
  if ($message) {
    appbar_set_message($message, 'all');
  }
  if ($form_state['values']['appbar_css'] != variable_get('appbar_css', 'default')) {
    drupal_clear_css_cache();
  }
}
