<?php
/**
 * @file
 * insight_publish.features.inc
 */

/**
 * Implements hook_node_info().
 */
function insight_publish_node_info() {
  $items = array(
    'insight_microblog' => array(
      'name' => t('Insight Microblog'),
      'base' => 'node_content',
      'description' => t('Content type for Microblogging posts
Developed for Fedora Insight'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
