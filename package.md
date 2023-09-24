# Package

## To interact in your terminal, run command - 
```sh
# <package_manager> aviral, where <package_manager> = npx, pnpx or bun. For optimized loading, use
bunx aviral
```

## To check the current package version, run
- ```sh
  # For updating the patch version:
  npm version patch
  ```
- ```sh
  # For updating the major version:
  npm version major
  ```

## To publish the package [npm](https://www.npmjs.com/) registry, run
```sh
npm publish
```

### To rename a npm package,

1. #### Unpublishing a Package from the npm registry Within 24 Hours of Publication,
  ```sh
  npm unpublish <package_name> --force
  ```

2. #### Unpublishing a Package Within 72 Hours (Subject to Specific Requirements):
  ```sh
  npm unpublish <package_name> -f
  ```

3. #### Renaming and Publishing a New Package Name:
  ```sh
  pkg-rename old-package-name --publish
  ```
  