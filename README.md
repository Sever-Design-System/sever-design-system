# uplane-ui design system

## Set up development

Run following commands from the root folder terminal:

    yarn install

---

    husky install

## Contributing
Please use pull requests to propose changes to the codebase.
1. Create "feature" branch from master.
Please try to choose branch name so that describes what changes you would like to do

   `git checkiut -b feature/{YOUR_BRANCH_NAME}`
2. Push changes.
3. Create pull request on GitHub and assign a reviewer.

## Running commands
You can use [Lerna](https://lerna.js.org/) to run package.json commands from the root foolder e.g. `lerna run test`
or navigate to the certain package and run commands via yarn. For example run following commands in your terminal:
1. `cd packages/react`
2. `yarn run storybook`

## Library versioning
Please create new versions from master branch.
1. Run `lerna version`.
2. Choose version semantic yo would like to create
3. Wait for CI completed and check a result in the npm package registry

Command [lerna version](https://lerna.js.org/docs/features/version-and-publish#versioning)
updates the package.json with the version number, commits the change, adds a corresponding version tag (e.g. v1.0.0) and pushes the commit and the tag to the remote repository.
After that GitHub Actions publish a new library version to the npm package registry after CI passed.
