<?php
// $Id: og_subgroups_views_handler_filter_og_group_nid_override.inc,v 1.1.2.1 2010/11/03 01:46:41 bschilt Exp $

/**
 * @file
 * This file overrides the og_views_handler_filter_og_group_nid handler in 
 * order to provide support for OG Subgroups.
 * 
 * Much of this code was taken from the 
 * hs_taxonomy_views_handler_filter_term_node_tid handler.
 */

class og_subgroups_views_handler_filter_og_group_nid_override extends views_handler_filter_many_to_one {
  function init(&$view, $options) {
    parent::init($view, $options);
    
    // Bootstrap the Hierarcical Select JS
    // Taken from hs_taxonomy_views_handler_filter_term_node_tid
    if ($this->select_type_is_hierarchical_select()) {
      // Add JS and CSS required for Hierarchical Select to work.
      _hierarchical_select_setup_js();

      // Ensure that Drupal.HierarchicalSelect.prepareGETSubmit() gets called.
      require_once(drupal_get_path('module', 'hierarchical_select') . '/includes/common.inc');
      hierarchical_select_common_add_views_js();
    }
  }

  function has_extra_options() { return module_exists('og_subgroups_hs'); }

  function option_definition() {
    $options = parent::option_definition();
    $options['type'] = array('default' => 'select');

    return $options;
  }

  function get_value_options() {
    $this->value_options = $this->allowed_values();
  }

  function allowed_values() {
    $options = og_subgroups_get_eligable_groups('accessibale');
    $inaccessibale = og_subgroups_get_eligable_groups('inaccessibale');
    $options_tree = og_subgroups_tree($options, NULL, $inaccessibale);
    unset($options_tree[0]);
    return $options_tree;
  }

  function value_form(&$form, &$form_state) {
    if (!$this->select_type_is_hierarchical_select()) {
      parent::value_form($form, $form_state);
    }
    else {
      $optional   = $this->options['expose']['optional'];
      $view_name  = $this->view->name;
      $filter_id  = $this->options['id'];
      $display_id = _og_subgroup_hs_get_display_id_for_filter($this->view, $filter_id);
      $identifier = $this->options['expose']['identifier'];
      $default_value = (!empty($this->view->exposed_input)) ? $this->view->exposed_input[$identifier] : array();

      // Basic settings for the form item.
      $form['value']['#type']          = 'hierarchical_select';
      $form['value']['#default_value'] = $default_value;
      $form['value']['#required']      = !((bool) $optional);
      $form['value']['#config']        = array(
        'module' => 'og_subgroups_hs', 
        'params' => array(
          'nid' => NULL,
          'optional' => (bool) $optional,
        ),
        'special_items' => array(
          OG_SUBGROUPS_HS_ANY_OPTION => array('none', 'exclusive'),
         ),
        'render_flat_select' => 1,
        'path' => "og_subgroups_hs_views_json/$view_name/$display_id",
        'resizable' => 0,
      );

      // When not exposed: settings form.
      if (empty($form_state['exposed'])) {
        $default_value = (isset($this->value) && !empty($this->value)) ? $this->value : array();

        $form['value']['#config']['render_flat_select'] = 0;
        $form['value']['#config']['params']['optional'] = 0;
        $form['value']['#config']['special_items'] = array();
        $form['value']['#default_value'] = $default_value;

        // Add the dropbox to the HS widget in the filter settings form.
        $form['value']['#config']['dropbox'] = array(
          'status' => 1,
          'title' => t('Groups to filter by'),
        );
      }
    }
  }

  function value_submit($form, &$form_state) {
    // prevent array_filter from messing up our arrays in parent submit.
  }

  function expose_form_right(&$form, &$form_state) {
    // The form with the "Optional", "Force single" and "Remember" checkboxes.
    parent::expose_form_right($form, $form_state);

    // When the selection type is Hierarchical Select, remove the "Force
    // single" checkbox.
    if ($this->select_type_is_hierarchical_select()) {
      unset($form['expose']['single']);
    }
  }

  /**
   * Create form that allows admins to choose the subgroup widget type.
   */
  function extra_options_form(&$form, &$form_state) {
    $form['type'] = array(
      '#type' => 'radios',
      '#title' => t('Selection type'),
      '#options' => array('select' => t('Standard select menu'), 'hierarchical_select' => t('Hierarchical select widget')),
      '#default_value' => $this->options['type'],
      '#description' => t('Choose how the subgroup filter options should be displayed.'),
    );
  }

  /**
   * Check whether the "Selection type" (in the configuration of the exposed
   * filter) is Hierarchical Select.
   *
   * This function is used in almost every overridden method to determine
   * whether our custom logic should be used or the parent class's, i.e. the
   * parent method in the views_handler_filter_term_node_tid class.
   */
  function select_type_is_hierarchical_select() {
    return $this->options['type'] == 'hierarchical_select';
  }

  /**
   * Check to see if input from the exposed filters should change
   * the behavior of this filter.
   *
   * Don't filter the view if OG_SUBGROUPS_HS_ANY_OPTION is selected.
   */
  function accept_exposed_input($input) {
    $identifier = $this->options['expose']['identifier'];
    if ($this->select_type_is_hierarchical_select()) {
      return ($input[$identifier] == OG_SUBGROUPS_HS_ANY_OPTION) ? FALSE : TRUE;
    }
    else {
      return parent::accept_exposed_input($input);
    }
  }
}