## run the server NestJS
```
nx serve server
```

## run the client Angular
```
nx serve client
```

## run the client and server
```
nx run-many --target=serve --projects=client,server
```
or  
```
nx run-many --target=serve --all
```

## generate NestJS component
```
npx nx generate @nx/nest:library feature-todo \
--directory=server \
--controller \
--importPath=@libs/server/feature-todo \
--service \
--strict \
--tags=scope:server,type:feature
```

## generate Angular component
```
nx generate @nrwl/angular:library FeatureDashboard \
--style=scss \
--directory=client \
--importPath=@libs/client/feature-dashboard \
--routing \
--skipModule \
--standalone \
--tags=scope:client,type:feature
```
> if you would not add prefix client, add --simpleName

```
nx generate @nrwl/angular:library DataAccess \
--style=scss \
--directory=client \
--importPath=@libs/client/data-access \
--simpleName \
--skipModule \
--standalone
```

```
nx generate @schematics/angular:service Api \
--project=client-data-access \
--path=libs/client/data-access/src/lib
```

## check tags
```
grep tags {libs,apps}/**/project.json
```

## lint all
```
nx run-many --target=lint --all
```

## stop listening server
check PID  
```
lsof -i :3000
```
kill PID  
```
kill <PID>
```