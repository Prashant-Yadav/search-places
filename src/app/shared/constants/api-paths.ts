import {environment} from '../../../../environments/environment';

export class ApiPaths {

  public static login: string = environment.baseApiUrl + 'login';
  public static register: string = environment.baseApiUrl + 'register';
}
