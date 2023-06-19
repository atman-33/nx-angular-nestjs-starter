## change to your choice of directory
open shell
```
cd ~/Sites
```
> ~/Sites is example

## create nx workspace NestJS app
```
npx create-nx-workspace@latest --preset nest /
--name nx-angular-nestjs-template \
--appName server \
--nxCloud true
```
> preset angular-nest does not exist.

## add Angular app
```
npm install @nrwl/angular
```
```
nx generate @nrwl/angular:application --name client \
--style scss \
--prefix nans \
--tags scope:client,type:app \
--strict \
--backendProject server \
--standalone \
--routing
```
> prefix nans is nx-nangular-nestjs-template

## add domain in the library
```
npx nx generate @nx/js:library domain --directory=shared --importPath=@libs/shared/domain --tags=scope:shared,type:domain
```
- unit test runner => none
- bundler => none

> if you don't need shared-domain.ts, remove it.