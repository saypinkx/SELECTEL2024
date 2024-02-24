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

import Container, { Service } from "typedi";
import { AddressNeed, AddressNeedSerializerDetail, PaginatedAddressNeedList } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

@Service()
export class AddressNeedsApi<SecurityDataType = unknown> {
  constructor(public http: HttpClient<SecurityDataType>) {
    this.http = Container.get(HttpClient) as HttpClient<SecurityDataType>;
  }

  /**
   * @description Retrieves a list of address needs. The list can be filtered by city, main page status, and blood group.
   *
   * @tags Address Needs
   * @name AddressNeedsList
   * @summary List Address Needs
   * @request GET:/api/address_needs/
   * @secure
   */
  addressNeedsList = (
    query?: {
      blood_station?: number;
      id?: number;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      page_size?: number;
      /** A search term. */
      search?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<PaginatedAddressNeedList, any>({
      path: `/api/address_needs/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new address need. If the user is authenticated, it is associated with their account. Otherwise, it is created with a status of on moderation.
   *
   * @tags Address Needs
   * @name AddressNeedsCreate
   * @summary Create an Address Need
   * @request POST:/api/address_needs/
   * @secure
   */
  addressNeedsCreate = (data: AddressNeed, params: RequestParams = {}) =>
    this.http.request<AddressNeedSerializerDetail, any>({
      path: `/api/address_needs/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets detailed information about a specific address need.
   *
   * @tags Address Needs
   * @name AddressNeedsRetrieve
   * @summary Retrieve Address Need Details
   * @request GET:/api/address_needs/{id}/
   * @secure
   */
  addressNeedsRetrieve = (id: number, params: RequestParams = {}) =>
    this.http.request<AddressNeedSerializerDetail, any>({
      path: `/api/address_needs/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
