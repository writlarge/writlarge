<?php
// $Id$

/**
 * @file
 * Provide views data and handlers for the Application Toolbar module.
 */

/**
 * Implementation of hook_views_data().
 */
function appbar_views_data() {
  //Basic table information.
  $data['appbar']['table']['group']  = t('Application Toolbar');
  $data['appbar']['table']['join'] = array(
    'users' => array(
      'left_field' => 'uid',
      'field' => 'uid',
      'type' => 'INNER',
    ),
  );

  //Advertise this table as a possible base table.
  $data['appbar']['table']['base'] = array(
    'field' => 'uid',
    'title' => t('Application Toolbar Alerts'),
    'help' => t('Appbar alert listings.'),
    'weight' => 10,
  );

  $data['appbar']['aid'] = array(
    'title' => t('Alert ID'),
    'help' => t('The ID of the Appbar alert.'),
    'field' => array(
      'handler' => 'views_handler_field',
      'click sortable' => TRUE,
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_numeric',
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'argument' => array(
      'handler' => 'views_handler_argument_numeric',
    ),
  );

  $data['appbar']['uid'] = array(
    'title' => t('User ID'),
    'help' => t('The User ID of the user to whom the alert should be shown.'),
    'field' => array(
      'handler' => 'views_handler_field',
      'click sortable' => TRUE,
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_numeric',
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'argument' => array(
      'handler' => 'views_handler_argument_numeric',
    ),
  );

  $data['appbar']['is_new'] = array(
    'title' => t('Alert is new'),
    'help' => t('Whether the alert is read or unread. The field returns either the "appbar-new" class or nothing.'),
    'field' => array(
      'handler' => 'appbar_views_handler_field_read',
      'click sortable' => TRUE,
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_numeric',
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'argument' => array(
      'handler' => 'views_handler_argument_numeric',
    ),
  );

  $data['appbar']['created'] = array(
    'title' => t('Alert time'),
    'help' => t('The time the alert was recorded.'),
    'field' => array(
      'handler' => 'views_handler_field_date',
      'click sortable' => TRUE,
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_date',
    ),
  );

  $data['appbar']['message'] = array(
    'title' => t('Alert message'),
    'help' => t('The text of the alert message.'),
    'field' => array(
      'handler' => 'appbar_views_handler_field_message',
      'click sortable' => TRUE,
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_string',
    ),
  );

  return $data;
}

/**
 * Implementation of hook_views_handlers().
 */
function appbar_views_handlers() {
  return array(
    'info' => array(
      'path' => drupal_get_path('module', 'appbar'),
    ),
    'handlers' => array(
      'appbar_views_handler_field_message' => array(
        'parent' => 'views_handler_field',
      ),
      'appbar_views_handler_field_read' => array(
        'parent' => 'views_handler_field',
      ),
    ),
  );
}