# React Typescript Library with storybook template

React Typescript Library with Storybook 🧡

A quick start with storybook template, provide you can easy to use with `react` and `storybook` to create `library`.

Provide all you need during the whole library creation process.

# Quick start

```bash
# change package name in package.json
nano package.json

# install
npm install

# build package
npm run package

# publish your package
cd dist && npm publish
```

# Feature

## 1. Run storybook

```ts
/**
 * run with no typescript document generate,
 * that speed will be fast when in development mode.
 */
npm start

/** run with typescript doc generate full with props document */
npm run storybook:docgen
```

or just use vscode `Task`, `cmd+shift+p` => `Tasks: Run Task` => `Run App` or `Run App with doc`

## 2. React Typescript library packager.

package the whole library and prepare some need file.

```bash
npm run package
```

## 3. Markdown to MDX, **CHANGELOG**, **README**, **CONTRIBUTION**

```bash
npm run update-mdx
```

## 4. UI snapshot testing

```ts
/**
 * update story book snapshot.
 */
npm run update-storybook-snapshot

/**
 * update all snapshot.
 */
npm run update-snapshot
```

5. Commitizen format commit message

   https://github.com/leoforfree/cz-customizable

   that will help you to make commit message standardize, also provide you a easy way to custom your message in `.cz-config.js`

   ```ts
   npm run commit
   ```

## 6. Auto changelog and version update by commit message

All message should follow(Commitizen will help you to create that format)
https://www.conventionalcommits.org/en/v1.0.0/

and run one of release

```ts
npm run release-patch // release current version and start next patch version
npm run release-minor // release current version and start next minor version
npm run release-major // release current version and start next major version
```

## 7. Create Component Easier

You can use vscode `Run` select `create component` to create a component template.
also can custom your template in `scripts/generator/component/Function` and that template will auto replace `__name__` to your Target component Name, replace `__prefix__` with `--prefix=` option.

or just run command like below:

```ts
npm run create-component -- Button --prefix=Az
```

## 8. Debug Easier

You can use vscode to debug more easier, use `launch` for open new chrome or just use `attach` for create a attach with exist chrome `storybook` **(remember open whole chrome with debug mode, run task with `Open Chrome`)**
