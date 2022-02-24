# Release Flow

## (1) Update version in package.json

- package.json

```json
{
  // ...
  "version": "1.2.0"
  // ...
}
```

## (2) Run build

```bash
npm run build
```

## (3) Create a new release tag and push it to the origin

```
git tag <tag-name>
git push origin <tag-name>
```

And the gihub action would do the rest.

- create release note
- publish it to npm
