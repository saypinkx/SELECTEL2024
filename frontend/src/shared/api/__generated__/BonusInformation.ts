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

import { Service } from "typedi";
import { BonusDetail, PaginatedBonusListList } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

@Service()
export class BonusInformationApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;
  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieve a list of available bonuses with their basic information.
   *
   * @tags Bonus Information
   * @name BonusesList
   * @summary List all available bonuses
   * @request GET:/api/bonuses/
   * @secure
   */
  bonusesList = (
    query?: {
      city_id?: number;
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
    this.http.request<PaginatedBonusListList, any>({
      path: `/api/bonuses/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get detailed information about a specific bonus.
   *
   * @tags Bonus Information
   * @name BonusesRetrieve
   * @summary Retrieve Bonus Details
   * @request GET:/api/bonuses/{id}/
   * @secure
   */
  bonusesRetrieve = (id: number, params: RequestParams = {}) =>
    this.http.request<BonusDetail, any>({
      path: `/api/bonuses/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
