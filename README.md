# aviral-npx_card


## to rename a npm package
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