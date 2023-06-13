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

## check tags
```
grep tags {libs,apps}/**/project.json
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