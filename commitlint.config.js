export default {
  extends: ['@commitlint/config-conventional'],
  // собственные правила
  rules: {
    'scope-empty': [2, 'never'],
    'scope-case': [0],
    'scope-pattern-custom': [2, 'always', /^IT-\d+$/],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [1, 'always', 72],
    'body-leading-blank': [0, 'always'],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'hotfix', 'chore', 'refactor', 'test', 'docs', 'style', 'ci'],
    ],
  },
  plugins: [
    {
      rules: {
        'scope-pattern-custom': ({ scope }, when, pattern) => {
          if (!scope) {
            return [false, 'scope is required and must match pattern IT-<number>']
          }

          const regex = new RegExp(pattern)
          const valid = regex.test(scope)

          return [valid, `scope must match the pattern ${pattern}`]
        },
      },
    },
  ],
}

