const CONSTANTS = {
  COMPONENT_TEMPLATE_PATH: `${__dirname}/templates/component.txt`,
  STYLES_TEMPLATE_PATH: `${__dirname}/templates/styles.txt`,
  TEST_TEMPLATE_PATH: `${__dirname}/templates/test.txt`,
  STORIES_TEMPLATE_PATH: `${__dirname}/templates/stories.txt`,

  COMPONENT_OUTPUT_FILE: './index.js',
  STYLES_OUTPUT_FILE: './styles.scss',
  TEST_OUTPUT_FILE: './#{name}.test.js',
  STORIES_OUTPUT_FILE: './#{name}.stories.js',

  TEMPLATE_NAME_STR: '#{name}',
  OUTPUT_FILE_NAME_STR: '#{name}'
}

module.exports = CONSTANTS;