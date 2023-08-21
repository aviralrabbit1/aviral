# [Aviral](https://www.npmjs.com/package/aviral)

## To interact in your terminal, run command - 
```
npx aviral
```

## To check patch/major version, run

```
npm version patch
```

or 

```
npm version major
```

## To publish on [npm](https://www.npmjs.com/), run
```
npm publish
```

### For renaming a npm package, use
```
npm install @tiaanduplessis/pkg-rename
```

#### If the package was published less than 24 hours ago, it can be unpublished with:

```
npm unpublish <wrong package name> --force
```

#### For unpublishing within 72 hours(if matching the speicific requirement), run:

```
npm unpublish <package_name> -f
```

You can also add the `--publish` flag to publish the new package name as part of the same action.

```
pkg-rename old-package-name --publish
```

### To make our output stylish, use:

```
npm i prettyjson
```

### To omit over some specific data from a group of data (json),
```
npm i lodash.omit
```

### Pokemon themed command-line app, Pokesay
```
npm i pokesay
```

#### which works as:
```bash
pokesay "message" pokemon-name
```

where 
- `"message"` is the second argument,
- `pokemon-name`: It can be **pikachu**(default), **bulbasaur**, **squirtle** or **charmander**.

### To leverage our modules, in `bin` (in pacakge.json)
- Earlier it was `./cli.js`, 
- Now it is `npm run start`, where
- "start" : "pokesay \\" `Message` \\" `pokemon-name` && `./cli.js`"

#### add the following script in `./cli.js`

```javascript
const pkg = require('..') //package name
console.log(pkg())
```

For example, to read arguments from command line,
```javascript
const minimist = require('minimist')
const pkg = require('.')

const options = {
  alias: { json: 'j' } // -j is a flag to access raw json data, running `npx package_name -j`
}

const argv = minimist(process.argv.slice(2), options)

console.log(pkg(argv))
```

