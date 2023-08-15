# Online Gaming Board

Welcome to the Online Gaming Board project! This README will guide you through setting up, developing, and maintaining this project with ease.

## Table of Contents
- [Development Server](#development-server)
- [Code Scaffolding](#code-scaffolding)
- [NgRx Schematics](#ngrx-schematics)
- [ESLint Rules](#eslint-rules)
- [Build](#build)
- [Unit Tests](#unit-tests)
- [End-to-End Tests](#end-to-end-tests)
- [Need Help?](#further-help)

## Development Server

To start the development server, execute the command `ng serve`. This will launch the server at `http://localhost:4200/`. Any changes you make to the source files will automatically trigger a live reload of the application.

## Code Scaffolding

Generating components, directives, pipes, services, and more is simple. Use the `ng generate` command followed by the element's type and name. For example:
- `ng generate component component-name`
- `ng generate directive|pipe|service|class|guard|interface|enum|module`

## NgRx Schematics

The NgRx schematics offer streamlined commands for generating various store-related elements, making state management easier.

### Generate Store

Run `ng generate store State` to create a new NgRx store. Replace `State` with your desired state name.

### Generate Actions

Execute `ng generate action Actions` to generate new NgRx actions. Replace `Actions` with your action name.

### Generate Reducer

Use `ng generate reducer reducers/feature` to make a new NgRx reducer. Replace `reducers/feature` with your desired reducer path.

### Generate Effects

Run `ng generate effect effects/feature` to generate new NgRx effects. Replace `effects/feature` with your desired effects path.

### Generate Entity

Execute `ng generate entity models/entity` to generate a new NgRx entity. Replace `models/entity` with your entity's path and name.

### Generate Facade

Use `ng generate facade facades/feature` to create a new NgRx facade. Replace `facades/feature` with your desired facade path.

## ESLint Rules

We prioritize code quality using ESLint to enforce best practices. Below are the ESLint rules applied in this project:

- **root**: The configuration starts from the project root.
- **ignorePatterns**: Ignores specific patterns (e.g., "projects/**/*").
- **overrides**:
  - **files**: Rules apply only to TypeScript files (`*.ts`).
  - **extends**: Extends recommended ESLint, TypeScript, and Angular ESLint configurations.
  - **rules**: A detailed list of applied rules:
    ...
- **Refer to `.eslintrc.json` for the complete ESLint configuration.**

## Build

Build the project with `ng build`. The build artifacts will be saved in the `dist/` directory.

## Unit Tests

Run unit tests via [Karma](https://karma-runner.github.io) using `ng test`.

## End-to-End Tests

To execute end-to-end tests on your preferred platform, use `ng e2e`. Note that you need to add a suitable package for end-to-end testing capabilities.

## Further Help

For more assistance regarding Angular CLI, use `ng help`, or explore the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. Happy coding!
