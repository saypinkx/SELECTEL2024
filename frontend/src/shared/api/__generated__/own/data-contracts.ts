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

/** Body_create_donation_api_donations__post */
export interface BodyCreateDonationApiDonationsPost {
  /**
   * File
   * @format binary
   */
  file?: File;
}

/** Body_update_donation_api_donations__donation_id__put */
export interface BodyUpdateDonationApiDonationsDonationIdPut {
  /**
   * File
   * @format binary
   */
  file?: File;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}
