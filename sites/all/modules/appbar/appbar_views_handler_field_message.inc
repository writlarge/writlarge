<?php
// $Id$

/**
 * @file
 *   Handles rendering the alert message for Views.
 */

/**
 * Field handler to mark messages as read. Also, views_handler_field will
 * check_plain() unless we override it.
 */
class appbar_views_handler_field_message extends views_handler_field {
  function render($values) {
    $value = $values->{$this->field_alias};
    db_query("UPDATE {appbar} SET is_new = 0 WHERE is_new = 1 AND aid = %d", $values->appbar_aid);
    return $value;
  }
}