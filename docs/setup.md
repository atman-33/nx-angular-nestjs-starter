## change to your choice of directory
open shell
```
cd ~/Sites
```
> ~/Sites is example

## create nx workspace NestJS app
```
npx create-nx-workspace@latest --preset nest
```
> preset angular-nest does not exist.

- create your workspace?(workspace name) => nx-angular-nestjs-starter
- application name => server
- generate a Dockerfile? => No
- to make your CI faster? => Yes

## add Angular app
```
npm install @nrwl/angular
```
```
nx generate @nrwl/angular:application --name client
```
- stylesheet => sccs
- configure routing => false
- standalone components => false

## add domain in the library
```
npx nx generate @nx/js:library shared/domain
```
- unit test runner => none
- bundler => none

> if you don't need shared-domain.ts, remove it.