import { Router } from '../interfaces/Router';
import v1Router from './v1/router';


export const versions: Array<Router[]> = [v1Router] as any;

export const latestVersion = versions.length;

