# Package name - aviral

## command - 
```
npx aviral
```

## To publish, run

```
npm version patch
npm publish
```

or 

```
npm version major
npm publish
```

### To rename a npm package
```
npm install @tiaanduplessis/pkg-rename
```

If the package was published less than 24 hours ago:

```
npm unpublish <wrong package name> --force
```

for 72 hours, 

```
npm unpublish <package_name> -f
```

You can also add the --publish flag to publish the new package name as part of the same action.

```
pkg-rename old-package-name --publish
```

### To make our output stylish,

```
npm i prettyjson
```

### To leverage our modules, in `cli.js`, add the script
```
const pkg = require('..') //package name
console.log(pkg())
```

### To omit over some data,
```
npm i lodash.omit
```

### Pokemon themed command-line app, Pokesay
```
npm i pokesay
```

