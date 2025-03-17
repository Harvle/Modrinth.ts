import { RESTRoute } from "rest";
import type { Dispatcher } from "undici";

export interface RESTOptions {
    baseURL?: string;
    apiVersion?: number;
    userAgent?: string;
    token?: string;
};

export type RESTError = {
    /**
     * The name of the error.
     */
    error: string;

    /**
     * The contents of the error.
     */
    description: string;
};

// Internal function for NumberRange
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>;

/**
 * Creates a restricted Number type between 2 specified values
 * @param F Lowest value (inclusive)
 * @param T Highest value (exclusive)
 * @returns list of valid integers, starting with the value of F (inclusive) and ending with the value of T (exclusive)
 */
export type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export type QueryParametersResolvable =
    | QueryParameter
    | QueryParameter[]
    | object;

export type QueryParameter = {
    key: string;
    value: string;
};

export type BodyResolvable =
    | object
    | string;

export type RequestResolvable =
    | RESTRoute
    | RequestData;

export type RequestData = {
    url: string;
    method: Dispatcher.HttpMethod;
    queryParams?: QueryParametersResolvable;
    body?: BodyResolvable;
    apiVersionOverride?: number;
};