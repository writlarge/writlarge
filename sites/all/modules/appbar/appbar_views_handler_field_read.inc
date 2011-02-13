<?php
// $Id$

/**
 * @file
 *   Rewrites the "read" status as a class name.
 */

/**
 * Field handler to rewrite the "read" status.
 */
class appbar_views_handler_field_read extends views_handler_field {
  function render($values) {
    if ($values->appbar_status) {
      return ' appbar-new';
    }
    return '';
  }
}