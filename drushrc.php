/*
 * Customize this associative array with your own tables. This is the list of
 * tables whose *data* is skipped by the 'sql-dump' and 'sql-sync' commands when
 * a structure-tables-key is provided. You may add new tables to the existing
 * array or add a new element.
 */
$options['structure-tables'] = array(
  'common' => array(
    'cache', 
    'cache_filter', 
    'cache_menu', 
    'cache_page', 
    'history', 
    'sessions', 
    'watchdog',
    ),
  );
