/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import Container, { Service } from 'typedi';
import { EventBase, PaginatedEventListList } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

@Service()
export class EventsApi<SecurityDataType = unknown> {
    constructor(public http: HttpClient<SecurityDataType>) {
        this.http = Container.get(HttpClient) as HttpClient<SecurityDataType>;
    }

    /**
     * @description Retrieves a list of events with optional filtering and ordering.
     *
     * @tags Events
     * @name EventsList
     * @summary List Events
     * @request GET:/api/events/
     * @secure
     */
    eventsList = (
        query?: {
            blood_station?: number;
            by_blood_station?: string;
            by_date?: string;
            id?: number;
            /** Which field to use when ordering the results. */
            ordering?: string;
            organization_id?: string;
            /** A page number within the paginated result set. */
            page?: number;
            /** Number of results to return per page. */
            page_size?: number;
            /** A search term. */
            search?: string;
        },
        params: RequestParams = {},
    ) =>
        this.http.request<PaginatedEventListList, any>({
            path: `/api/events/`,
            method: 'GET',
            query: query,
            secure: true,
            format: 'json',
            ...params,
        });
    /**
     * @description Retrieves detailed information about a specific event.
     *
     * @tags Events
     * @name EventsRetrieve
     * @summary Retrieve Specific Event Details
     * @request GET:/api/events/{id}/
     * @secure
     */
    eventsRetrieve = (id: number, params: RequestParams = {}) =>
        this.http.request<EventBase, any>({
            path: `/api/events/${id}/`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        });
}
