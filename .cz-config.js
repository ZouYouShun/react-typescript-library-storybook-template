'use strict';
// here is the example for cz-config
// https://github.com/leonardoanalista/cz-customizable/blob/master/cz-config-EXAMPLE.js
// git commit emoji.md
// https://gist.github.com/parmentf/035de27d6ed1dce0b36a

module.exports = {
  messages: {
    // type: "Select the type of change that you're committing:",
    // scope: 'Denote the SCOPE of this change: (press ⬆️ choice custom to typing scope)',
    // // used if allowCustomScopes is true
    // customScope: 'Denote the SCOPE of this change:',
    // subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    // body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    // footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    // confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
  types: [
    {
      value: 'feat',
      name: '✨  feat:     A new feature',
    },
    {
      value: 'fix',
      name: '🐛  fix:      A bug fix',
    },
    {
      value: 'docs',
      name: '📚  docs:     Documentation only changes',
    },
    {
      value: 'style',
      name:
        '🎨  style:    Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name:
        '🔨  refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: '⚡  perf:     A code change that improves performance',
    },
    {
      value: 'test',
      name: '🚨  test:     Add unit tests or correcting existing tests',
    },
    {
      value: 'build',
      name:
        '🚀  build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    },
    {
      value: 'ci',
      name:
        '👷  ci:       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
    },
    {
      value: 'chore',
      name: "🗯  chore:    Other changes that don't modify src or test files",
    },
    {
      value: 'revert',
      name: '⏪  revert:   Revert to a commit',
    },
  ],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'],
};
