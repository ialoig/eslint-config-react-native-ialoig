# eslint-config-react-native-ialoig [![github](https://img.shields.io/github/package-json/v/ialoig/react-native-touchable-scale-reanimated)](https://img.shields.io/github/package-json/v/ialoig/eslint-config-react-native-ialoig) [![npm](https://img.shields.io/npm/v/eslint-config-react-native-ialoig?color=red)](https://img.shields.io/npm/v/eslint-config-react-native-ialoig?color=red)

### Hi 👋

### this is an [`ESLint`](https://eslint.org/) configuration for [`React Native`](http://reactnative.dev/) developers

## 🚀 Getting Started

### Installation

```shell
    npm install eslint-config-react-native-ialoig
```

## 📏 Rules

### [indent](https://eslint.org/docs/rules/indent)

```
⛔️ error if not tabbed indentation
```

### [quotes](https://eslint.org/docs/rules/quotes)

```
⚠️ warning if not double
```

### [semi](https://eslint.org/docs/rules/semi)

```
⛔️ disallows semicolons as the end of statements
```

### [curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)

```
✅ require spaces between curly braces
```

### [sort-imports](https://eslint.org/docs/rules/sort-imports)

```
    ⛔️ error if not correctly sorted
    ✅ ignores the case-sensitivity of the imports local name
    ✅ Ignores the sorting of import declaration statements
    ✅ Do not ignores the member sorting within a multiple member import declaration
    ✅ default member syntax sort order is:
        * `none` - import module without exported bindings
        * `all` - import all members provided by exported bindings
        * `multiple` - import multiple members
        * `single` - import single member
```

## 🔌 Plugins

### [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native)

```
✅ detect unused StyleSheet rules in React components
✅ enforce using platform specific filenames when necessary
✅ no inline styles in components. 
Styles should be separate from the view layout
✅ detect color literals in styles. 
Color definitions should be stored in variables instead of hardcoding them inside styles
✅ all strings should be wrapped with a Text component
✅ no Single Element Style Arrays are allowed.
These cause unnecessary re-renders as each time the array's identity changes.
```

### [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)

```
✅ Ensure imports point to a file/module that can be resolved
✅ Ensure named imports correspond to a named export in the remote file
✅ Ensure imported namespaces contain dereferenced properties as they are dereferenced
✅ Ensure a default export is present, given a default import
```

```js
✅ Enforce a convention in module import order
the order is as shown in the following example:

// 1. node "builtin" modules
import fs from 'fs';
import path from 'path';
// 2. "external" modules
import _ from 'lodash';
import chalk from 'chalk';
// 3. "internal" modules
// (if you have configured your path or webpack to handle your internal paths differently)
import foo from 'src/foo';
// 4. modules from a "parent" directory
import foo from '../foo';
import qux from '../../foo/qux';
// 5. "sibling" modules from the same or a sibling's directory
import bar from './bar';
import baz from './bar/baz';
// 6. "index" of the current directory
import main from './';
```

### [eslint-plugin-i18n-json](https://github.com/godaddy/eslint-plugin-i18n-json)

```
✅ ICU Message syntax validation
✅ linting of each JSON translation file
✅ automatic case-sensitive ascending sort of all keys in the translation file
✅ compare each translation file's key structure with a reference translation file to ensure consistency
```

## VS Code configuration to auto fix

Create `.vscode/settings.json`

```json
{
    "editor.formatOnSave": true,
    "eslint.run": "onSave",
    "eslint.alwaysShowStatus": true,
    "eslint.format.enable": true,
}
```

----

made with 🧠 by ialoig
