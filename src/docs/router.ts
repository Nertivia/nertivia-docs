import { Router } from '../interfaces/Router';
import v1Router from './v1/router';


const versions: Array<Router[]> = [v1Router] as any;


export function mergedRoutes(version: number) {
  if (version === 1) return versions[0];
  return versions[0].map(rootRouter => {
    for (let i = 1; i < version; i++) {
      const versionRouters = versions[i];
      versionRouters.forEach(versionRouter => {
        if (versionRouter.path == rootRouter.path) {
          rootRouter.name = versionRouter.name;
          rootRouter.description = versionRouter.description;
          rootRouter.routes = versionRouter.routes;
        }
      })
      
    }
  })
  
}
