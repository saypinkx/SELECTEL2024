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
import { Picture } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

@Service()
export class PictureApi<SecurityDataType = unknown> {
  constructor(public http: HttpClient<SecurityDataType>) {
    this.http = Container.get(HttpClient) as HttpClient<SecurityDataType>;
  }

  /**
   * @description Accepts multipart form with the only field called `image`, or a raw body, like this: ``` curl       -X PUT       -H "Authorization: Token 50152a5d7af1fab20a87744e2024b2a110916edc"       -H "Content-Disposition: attachment; filename=filename.jpg"       --data-binary @"/Downloads/tsjh.jpg"       http://127.0.0.1:8000/api/picture/ ```
   *
   * @tags picture
   * @name PictureCreate
   * @request POST:/api/picture/
   * @secure
   */
  pictureCreate = (data: Picture, params: RequestParams = {}) =>
    this.http.request<Picture, any>({
      path: `/api/picture/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
}
