import { Router } from '../interfaces/Router';
import v1Router from './v1/router';


export const versions: Array<{[key: string]: Router}> = [v1Router] as any;

export const latestVersion = versions.length;

export async function getRoute(version: number, categoryPath: string, routePath: string) {
  let route = {... await getAbsoluteRoute(1, categoryPath, routePath), version: 1};
  if (version === 1) return route;
  for (let i = 1; i < version; i++) {
    const versionRoute = await getAbsoluteRoute(i + 1, categoryPath, routePath)
    route = {...route , ...versionRoute, version: i + 1}
    
  }
  return route;
}

export async function getAbsoluteRoute(version: number, categoryPath: string, routePath: string) {
  const router = versions[version - 1][categoryPath];
  const routes = await router?.routes();
  return {parentRouter: router, route: routes?.[routePath]};
}