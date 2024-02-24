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
import {
  BloodStationSearchResponse,
  BloodStationWithNeeds,
  PaginatedAllNamesBloodStationList,
  PaginatedBloodStationWithNeedsList,
  PaginatedMapBloodStationSearchList,
  PaginatedPlannedUserList,
  PaginatedSelectedBSSerialzierList,
  PaginatedUserTopList,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

@Service()
export class BloodStationInformationApi<SecurityDataType = unknown> {
  constructor(public http: HttpClient<SecurityDataType>) {
    this.http = Container.get(HttpClient) as HttpClient<SecurityDataType>;
  }

  /**
   * @description Retrieves a list of all blood stations along with detailed information.
   *
   * @tags Blood Station Information
   * @name BloodStationsList
   * @summary List All Blood Stations
   * @request GET:/api/blood_stations/
   * @secure
   */
  bloodStationsList = (
    query?: {
      blood_group?: string;
      city_id?: number;
      city_slug?: string;
      closed?: boolean;
      for_moscow?: boolean;
      open_on_saturday?: boolean;
      open_on_sunday?: boolean;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      page_size?: number;
      q?: string;
      /** A search term. */
      search?: string;
      with_typing?: boolean;
      without_registration?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<PaginatedBloodStationWithNeedsList, any>({
      path: `/api/blood_stations/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves detailed information about a specific blood station.
   *
   * @tags Blood Station Information
   * @name BloodStationsRetrieve
   * @summary Retrieve Specific Blood Station Details
   * @request GET:/api/blood_stations/{id}/
   * @secure
   */
  bloodStationsRetrieve = (id: number, params: RequestParams = {}) =>
    this.http.request<BloodStationWithNeeds, any>({
      path: `/api/blood_stations/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves users who have planned donations at a specific blood station.
   *
   * @tags Blood Station Information
   * @name BloodStationsPlannedList
   * @summary Retrieve Users with Planned Donations
   * @request GET:/api/blood_stations/{id}/planned/
   * @secure
   */
  bloodStationsPlannedList = (
    id: number,
    query?: {
      blood_group?: string;
      city_id?: number;
      city_slug?: string;
      closed?: boolean;
      for_moscow?: boolean;
      open_on_saturday?: boolean;
      open_on_sunday?: boolean;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      page_size?: number;
      q?: string;
      /** A search term. */
      search?: string;
      with_typing?: boolean;
      without_registration?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<PaginatedPlannedUserList, any>({
      path: `/api/blood_stations/${id}/planned/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves top users based on their donation history at a specific blood station.
   *
   * @tags Blood Station Information
   * @name BloodStationsTopList
   * @summary Retrieve Top Users for Blood Station
   * @request GET:/api/blood_stations/{id}/top/
   * @secure
   */
  bloodStationsTopList = (
    id: number,
    query?: {
      blood_group?: string;
      city_id?: number;
      city_slug?: string;
      closed?: boolean;
      for_moscow?: boolean;
      open_on_saturday?: boolean;
      open_on_sunday?: boolean;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      page_size?: number;
      q?: string;
      /** A search term. */
      search?: string;
      with_typing?: boolean;
      without_registration?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<PaginatedUserTopList, any>({
      path: `/api/blood_stations/${id}/top/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves top users based on their half-year donation history at a specific blood station.
   *
   * @tags Blood Station Information
   * @name BloodStationsTopHalfyearList
   * @summary Retrieve Top Users for Blood Station over Half Year
   * @request GET:/api/blood_stations/{id}/top_halfyear/
   * @secure
   */
  bloodStationsTopHalfyearList = (
    id: number,
    query?: {
      blood_group?: string;
      city_id?: number;
      city_slug?: string;
      closed?: boolean;
      for_moscow?: boolean;
      open_on_saturday?: boolean;
      open_on_sunday?: boolean;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      page_size?: number;
      q?: string;
      /** A search term. */
      search?: string;
      with_typing?: boolean;
      without_registration?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<PaginatedUserTopList, any>({
      path: `/api/blood_stations/${id}/top_halfyear/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a list of all blood stations, with optional search and city filtering.
   *
   * @tags Blood Station Information
   * @name BloodStationsAllNamesList
   * @summary List All Blood Station Names
   * @request GET:/api/blood_stations/all_names/
   * @secure
   */
  bloodStationsAllNamesList = (
    query?: {
      blood_group?: string;
      /** City ID to filter blood stations by their city. */
      city_id?: number;
      city_slug?: string;
      closed?: boolean;
      for_moscow?: boolean;
      open_on_saturday?: boolean;
      open_on_sunday?: boolean;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      page_size?: number;
      q?: string;
      /** Search parameter to filter blood stations by title. */
      s?: string;
      /** A search term. */
      search?: string;
      with_typing?: boolean;
      without_registration?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<PaginatedAllNamesBloodStationList, any>({
      path: `/api/blood_stations/all_names/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves blood stations located within a specified map boundary.
   *
   * @tags Blood Station Information
   * @name BloodStationsMapList
   * @summary Retrieve Blood Stations within Map Boundary
   * @request GET:/api/blood_stations/map/
   * @secure
   */
  bloodStationsMapList = (
    query?: {
      blood_group?: string;
      city_id?: number;
      city_slug?: string;
      closed?: boolean;
      for_moscow?: boolean;
      open_on_saturday?: boolean;
      open_on_sunday?: boolean;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      page_size?: number;
      q?: string;
      /** A search term. */
      search?: string;
      with_typing?: boolean;
      without_registration?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<PaginatedMapBloodStationSearchList, any>({
      path: `/api/blood_stations/map/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Performs a search among blood stations and cities based on given parameters.
   *
   * @tags Blood Station Information
   * @name BloodStationsSearchRetrieve
   * @summary Search Blood Stations and Cities
   * @request GET:/api/blood_stations/search/
   * @secure
   */
  bloodStationsSearchRetrieve = (params: RequestParams = {}) =>
    this.http.request<BloodStationSearchResponse, any>({
      path: `/api/blood_stations/search/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves selected blood stations based on criteria like latest, favorite, and in-need.
   *
   * @tags Blood Station Information
   * @name BloodStationsSelectedList
   * @summary List Selected Blood Stations
   * @request GET:/api/blood_stations/selected/
   * @secure
   */
  bloodStationsSelectedList = (
    query?: {
      blood_group?: string;
      /** City ID to filter blood stations by their city. */
      city_id?: number;
      city_slug?: string;
      closed?: boolean;
      for_moscow?: boolean;
      open_on_saturday?: boolean;
      open_on_sunday?: boolean;
      /** Which field to use when ordering the results. */
      ordering?: string;
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      page_size?: number;
      q?: string;
      /** A search term. */
      search?: string;
      with_typing?: boolean;
      without_registration?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<PaginatedSelectedBSSerialzierList, any>({
      path: `/api/blood_stations/selected/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a list of blood stations with their current needs. Supports filtering by city and blood group.
   *
   * @tags Blood Station Information
   * @name NeedsList
   * @summary List Blood Stations with Needs
   * @request GET:/api/needs/
   * @secure
   */
  needsList = (
    query?: {
      /** Blood group to filter blood stations. */
      blood_group?: string;
      /** City ID to filter blood stations. */
      city_id?: number;
      msk?: boolean;
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
    this.http.request<PaginatedBloodStationWithNeedsList, any>({
      path: `/api/needs/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get detailed information about a specific blood station by ID.
   *
   * @tags Blood Station Information
   * @name NeedsRetrieve
   * @summary Retrieve Blood Station Details
   * @request GET:/api/needs/{id}/
   * @secure
   */
  needsRetrieve = (id: number, params: RequestParams = {}) =>
    this.http.request<BloodStationWithNeeds, any>({
      path: `/api/needs/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves available blood stations based on city and blood group needs.
   *
   * @tags Blood Station Information
   * @name NeedsAvailableRetrieve
   * @summary Get Available Blood Stations
   * @request GET:/api/needs/available/
   * @secure
   */
  needsAvailableRetrieve = (params: RequestParams = {}) =>
    this.http.request<
      {
        cities?: any[];
        groups?: any[];
      },
      any
    >({
      path: `/api/needs/available/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
