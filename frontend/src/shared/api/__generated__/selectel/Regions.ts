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
import { City, Country, PaginatedCityList, PaginatedCountryList, PaginatedRegionList, Region } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

@Service()
export class RegionsApi<SecurityDataType = unknown> {
  constructor(public http: HttpClient<SecurityDataType>) {
    this.http = Container.get(HttpClient) as HttpClient<SecurityDataType>;
  }

  /**
   * @description Retrieves a list of cities within specified CIS countries. Supports optional search and filtering.
   *
   * @tags Regions
   * @name CitiesList
   * @summary List Cities
   * @request GET:/api/cities/
   * @secure
   */
  citiesList = (
    query?: {
      /** Include all blood stations. */
      all_bs?: boolean;
      country?: number;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      page_size?: number;
      region?: number;
      /** Search term for city title. */
      s?: string;
      /** A search term. */
      search?: string;
      /** Filter cities with blood stations. */
      with_bs?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<PaginatedCityList, any>({
      path: `/api/cities/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get detailed information about a specific city by ID or slug.
   *
   * @tags Regions
   * @name CitiesRetrieve
   * @summary Retrieve a City
   * @request GET:/api/cities/{id}/
   * @secure
   */
  citiesRetrieve = (id: number, params: RequestParams = {}) =>
    this.http.request<City, any>({
      path: `/api/cities/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Finds a city based on provided longitude and latitude.
   *
   * @tags Regions
   * @name CitiesByLocationRetrieve
   * @summary Find City by Location
   * @request GET:/api/cities/by_location/
   * @secure
   */
  citiesByLocationRetrieve = (
    query?: {
      /**
       * Latitude
       * @format double
       */
      lat?: number;
      /**
       * Longitude
       * @format double
       */
      lng?: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<City, any>({
      path: `/api/cities/by_location/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a list of countries filtered by optional search criteria. This endpoint allows any user.
   *
   * @tags Regions
   * @name CountriesList
   * @summary List Countries
   * @request GET:/api/countries/
   * @secure
   */
  countriesList = (
    query?: {
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      page_size?: number;
      /** Search term to filter countries by title. */
      s?: string;
      /** A search term. */
      search?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<PaginatedCountryList, any>({
      path: `/api/countries/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a single country by its ID. This endpoint allows any user.
   *
   * @tags Regions
   * @name CountriesRetrieve
   * @summary Retrieve a Country
   * @request GET:/api/countries/{id}/
   * @secure
   */
  countriesRetrieve = (id: number, params: RequestParams = {}) =>
    this.http.request<Country, any>({
      path: `/api/countries/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a list of regions within specified CIS countries. Supports optional search.
   *
   * @tags Regions
   * @name RegionsList
   * @summary List Regions
   * @request GET:/api/regions/
   * @secure
   */
  regionsList = (
    query?: {
      country?: number;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      page_size?: number;
      /** Search term for region title. */
      s?: string;
      /** A search term. */
      search?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<PaginatedRegionList, any>({
      path: `/api/regions/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get detailed information about a specific region by ID.
   *
   * @tags Regions
   * @name RegionsRetrieve
   * @summary Retrieve a Region
   * @request GET:/api/regions/{id}/
   * @secure
   */
  regionsRetrieve = (id: number, params: RequestParams = {}) =>
    this.http.request<Region, any>({
      path: `/api/regions/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
