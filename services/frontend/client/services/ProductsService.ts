/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from '../models/Product';
import type { ProductInput } from '../models/ProductInput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductsService {

    /**
     * Get Products
     * @returns Product Successful Response
     * @throws ApiError
     */
    public static getProducts(): CancelablePromise<Array<Product>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/',
        });
    }

    /**
     * Create Product
     * @param requestBody
     * @returns Product Successful Response
     * @throws ApiError
     */
    public static createProduct(
        requestBody: ProductInput,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Product
     * @param pk
     * @returns Product Successful Response
     * @throws ApiError
     */
    public static getProduct(
        pk: string,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/{pk}',
            path: {
                'pk': pk,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
