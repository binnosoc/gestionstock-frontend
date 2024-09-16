/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authenticate } from '../fn/auth-controller/authenticate';
import { Authenticate$Params } from '../fn/auth-controller/authenticate';
import { AuthenticationResponse } from '../models/authentication-response';
import { confirm } from '../fn/auth-controller/confirm';
import { Confirm$Params } from '../fn/auth-controller/confirm';
import { findByEmail } from '../fn/auth-controller/find-by-email';
import { FindByEmail$Params } from '../fn/auth-controller/find-by-email';
import { register } from '../fn/auth-controller/register';
import { Register$Params } from '../fn/auth-controller/register';
import { UserDto } from '../models/user-dto';

@Injectable({ providedIn: 'root' })
export class AuthControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `register()` */
  static readonly RegisterPath = '/api/auth/register';

  /**
   * Enregistrer un nouvel utilisateur.
   *
   * Cette méthode permet d'enregistrer un nouvel utilisateur.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: Register$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return register(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer un nouvel utilisateur.
   *
   * Cette méthode permet d'enregistrer un nouvel utilisateur.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: Register$Params, context?: HttpContext): Observable<any> {
    return this.register$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `authenticate()` */
  static readonly AuthenticatePath = '/api/auth/authenticate';

  /**
   * Authentifier un utilisateur.
   *
   * Cette méthode permet d'authentifier un utilisateur et de retourner un token JWT.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate$Response(params: Authenticate$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return authenticate(this.http, this.rootUrl, params, context);
  }

  /**
   * Authentifier un utilisateur.
   *
   * Cette méthode permet d'authentifier un utilisateur et de retourner un token JWT.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate(params: Authenticate$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.authenticate$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }

  /** Path part for operation `findByEmail()` */
  static readonly FindByEmailPath = '/api/auth/search';

  /**
   * Trouver l'utilisateur.
   *
   * Cette méthode permet de trouver un  utilisateur via son email
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEmail$Response(params: FindByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return findByEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * Trouver l'utilisateur.
   *
   * Cette méthode permet de trouver un  utilisateur via son email
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEmail(params: FindByEmail$Params, context?: HttpContext): Observable<UserDto> {
    return this.findByEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /** Path part for operation `confirm()` */
  static readonly ConfirmPath = '/api/auth/activate-account';

  /**
   * Activer un compte utilisateur.
   *
   * Cette méthode permet d'activer un compte utilisateur via un token envoyé par email.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirm()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirm$Response(params: Confirm$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return confirm(this.http, this.rootUrl, params, context);
  }

  /**
   * Activer un compte utilisateur.
   *
   * Cette méthode permet d'activer un compte utilisateur via un token envoyé par email.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confirm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirm(params: Confirm$Params, context?: HttpContext): Observable<void> {
    return this.confirm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
