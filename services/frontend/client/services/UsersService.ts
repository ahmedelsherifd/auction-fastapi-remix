/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_login_for_access_token } from '../models/Body_login_for_access_token';
import type { Token } from '../models/Token';
import type { User } from '../models/User';
import type { UserInput } from '../models/UserInput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Login For Access Token
     * @param formData
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static loginForAccessToken(
        formData: Body_login_for_access_token,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Users Me
     * @returns User Successful Response
     * @throws ApiError
     */
    public static readUsersMe(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me/',
        });
    }

    /**
     * Create User
     * @param requestBody
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static createUser(
        requestBody: UserInput,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
