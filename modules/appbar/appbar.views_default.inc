<?php
// $Id$

/**
 * @file
 *   Holds the default Views for the Application Toolbar module.
 */

/**
 * Implementation of hook_views_default_views().
 */
function appbar_views_default_views() {
  $view = new view;
  $view->name = 'appbar_alerts';
  $view->description = 'Displays a list of appbar alerts.';
  $view->tag = 'appbar';
  $view->view_php = '';
  $view->base_table = 'appbar';
  $view->is_cacheable = FALSE;
  $view->api_version = 2;
  $view->disabled = FALSE;
  $handler = $view->new_display('default', 'Defaults', 'default');
  $handler->override_option('fields', array(
    'is_new' => array(
      'label' => '',
      'alter' => array(
        'alter_text' => 0,
        'text' => '',
        'make_link' => 0,
        'path' => '',
        'link_class' => '',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'html' => 0,
        'strip_tags' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'exclude' => 1,
      'id' => 'is_new',
      'table' => 'appbar',
      'field' => 'is_new',
      'relationship' => 'none',
    ),
    'created' => array(
      'label' => '',
      'alter' => array(
        'alter_text' => 0,
        'text' => '',
        'make_link' => 0,
        'path' => '',
        'link_class' => '',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'html' => 0,
        'strip_tags' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'date_format' => 'small',
      'custom_date_format' => '',
      'exclude' => 1,
      'id' => 'created',
      'table' => 'appbar',
      'field' => 'created',
      'relationship' => 'none',
    ),
    'message' => array(
      'label' => '',
      'alter' => array(
        'alter_text' => 1,
        'text' => '<div class="appbar_alert [is_new]">
    [message] <span class="appbar_time">[created]</span>
    </div>',
        'make_link' => 0,
        'path' => '',
        'link_class' => '',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'html' => 0,
        'strip_tags' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'exclude' => 0,
      'id' => 'message',
      'table' => 'appbar',
      'field' => 'message',
      'relationship' => 'none',
    ),
  ));
  $handler->override_option('sorts', array(
    'is_new' => array(
      'order' => 'DESC',
      'id' => 'is_new',
      'table' => 'appbar',
      'field' => 'is_new',
      'relationship' => 'none',
    ),
    'created' => array(
      'order' => 'DESC',
      'id' => 'created',
      'table' => 'appbar',
      'field' => 'created',
      'relationship' => 'none',
    ),
    'aid' => array(
      'order' => 'DESC',
      'id' => 'aid',
      'table' => 'appbar',
      'field' => 'aid',
      'relationship' => 'none',
    ),
  ));
  $handler->override_option('arguments', array(
    'uid' => array(
      'default_action' => 'default',
      'style_plugin' => 'default_summary',
      'style_options' => array(),
      'wildcard' => 'all',
      'wildcard_substitution' => 'All',
      'title' => '',
      'breadcrumb' => '',
      'default_argument_type' => 'current_user',
      'default_argument' => '',
      'validate_type' => 'user',
      'validate_fail' => 'not found',
      'break_phrase' => 0,
      'not' => 0,
      'id' => 'uid',
      'table' => 'appbar',
      'field' => 'uid',
      'validate_user_argument_type' => 'uid',
      'validate_user_roles' => array(
        '2' => 0,
        '3' => 0,
        '4' => 0,
      ),
      'relationship' => 'none',
      'default_options_div_prefix' => '',
      'default_argument_user' => 0,
      'default_argument_fixed' => '',
      'default_argument_php' => '',
      'validate_argument_node_type' => array(
        'og' => 0,
        'page' => 0,
      ),
      'validate_argument_node_access' => 0,
      'validate_argument_nid_type' => 'nid',
      'validate_argument_vocabulary' => array(
        '4' => 0,
        '1' => 0,
        '3' => 0,
        '2' => 0,
      ),
      'validate_argument_type' => 'tid',
      'validate_argument_transform' => 0,
      'validate_user_restrict_roles' => 0,
      'validate_argument_node_flag_name' => '*relationship*',
      'validate_argument_node_flag_test' => 'flaggable',
      'validate_argument_node_flag_id_type' => 'id',
      'validate_argument_user_flag_name' => '*relationship*',
      'validate_argument_user_flag_test' => 'flaggable',
      'validate_argument_user_flag_id_type' => 'id',
      'validate_argument_php' => '',
    ),
  ));
  $handler->override_option('access', array(
    'type' => 'perm',
    'perm' => 'use appbar',
  ));
  $handler->override_option('cache', array(
    'type' => 'none',
  ));
  $handler->override_option('title', 'Alerts');
  $handler->override_option('items_per_page', 5);
  $handler->override_option('use_more', 1);
  $handler->override_option('distinct', 0);
  $handler = $view->new_display('page', 'Page', 'page_1');
  $handler->override_option('path', 'alerts');
  $handler->override_option('menu', array(
    'type' => 'none',
    'title' => '',
    'description' => '',
    'weight' => 0,
    'name' => 'navigation',
  ));
  $handler->override_option('tab_options', array(
    'type' => 'none',
    'title' => '',
    'description' => '',
    'weight' => 0,
    'name' => 'navigation',
  ));
  $views[$view->name] = $view;
  return $views;
}