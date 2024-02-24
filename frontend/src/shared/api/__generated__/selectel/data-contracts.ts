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

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 */
export enum AMinusAf7Enum {
  Need = "need",
  NoNeed = "no_need",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 * * `unknown` - нет данных
 */
export enum AMinusC07Enum {
  Need = "need",
  NoNeed = "no_need",
  Unknown = "unknown",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 */
export enum APlusAf7Enum {
  Need = "need",
  NoNeed = "no_need",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 * * `unknown` - нет данных
 */
export enum APlusC07Enum {
  Need = "need",
  NoNeed = "no_need",
  Unknown = "unknown",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 */
export enum AbMinusAf7Enum {
  Need = "need",
  NoNeed = "no_need",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 * * `unknown` - нет данных
 */
export enum AbMinusC07Enum {
  Need = "need",
  NoNeed = "no_need",
  Unknown = "unknown",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 */
export enum AbPlusAf7Enum {
  Need = "need",
  NoNeed = "no_need",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 * * `unknown` - нет данных
 */
export enum AbPlusC07Enum {
  Need = "need",
  NoNeed = "no_need",
  Unknown = "unknown",
}

export interface AddressNeed {
  /**
   * Фото реципиента
   * Минимальный размер 190x190, Максимальный размер 10000x10000
   * @format uri
   */
  _image?: string | null;
  /** A(II) Rh- */
  a_minus?: AMinusAf7Enum;
  /** A(II) Rh+ */
  a_plus?: APlusAf7Enum;
  /** AB(IV) Rh- */
  ab_minus?: AbMinusAf7Enum;
  /** AB(IV) Rh+ */
  ab_plus?: AbPlusAf7Enum;
  author: string;
  /** B(III) Rh- */
  b_minus?: BMinusAf7Enum;
  /** B(III) Rh+ */
  b_plus?: BPlusAf7Enum;
  /**
   * Дата рождения реципиента
   * @format date
   */
  birth_date?: string | null;
  /** Тип крови */
  blood_class?: BloodClassEnum;
  blood_station: BloodStationSmall;
  blood_station_id: number;
  /** Тип автора */
  content_type?: number | null;
  /**
   * Дата добавления
   * @format date-time
   */
  created_at: string | null;
  /**
   * Отображаемая часть
   * @maxLength 255
   */
  cropping?: string;
  /**
   * Имя реципиента
   * @maxLength 255
   */
  first_name: string;
  id: number;
  image: string;
  joined_users: AddressNeedJoinedUserForBase[];
  /**
   * Крайний срок
   * @format date
   */
  last_date: string;
  /**
   * Фамилия реципиента
   * @maxLength 255
   */
  last_name: string;
  /**
   * Отчество реципиента
   * @maxLength 255
   */
  middle_name?: string | null;
  /** O(I) Rh- */
  o_minus?: OMinusAf7Enum;
  /** O(I) Rh+ */
  o_plus?: OPlusAf7Enum;
  /**
   * Автор
   * @min 0
   * @max 2147483647
   */
  object_id?: number | null;
  /**
   * Требуемое количество доноров
   * @min 0
   * @max 2147483647
   */
  required_donors_count: number;
  /** Причина поиска */
  search_reason: string;
  /** Статус */
  status?: StatusEnum | BlankEnum | NullEnum | null;
  /** По расписанию центра крови */
  time_by_blood_station?: boolean;
  time_slots: AddressNeedTimeSlotForBase[];
  total_joined_count: number;
}

export interface AddressNeedJoinedUserForBase {
  /**
   * Дата добавления
   * @format date-time
   */
  created_at: string;
  id: number;
  /** Выбранное время */
  timeslot: number;
  /**
   * Дата изменения
   * @format date-time
   */
  updated_at: string;
  user: UserTop;
}

export interface AddressNeedSerializerDetail {
  /**
   * Фото реципиента
   * Минимальный размер 190x190, Максимальный размер 10000x10000
   * @format uri
   */
  _image?: string | null;
  /** A(II) Rh- */
  a_minus?: AMinusAf7Enum;
  /** A(II) Rh+ */
  a_plus?: APlusAf7Enum;
  /** AB(IV) Rh- */
  ab_minus?: AbMinusAf7Enum;
  /** AB(IV) Rh+ */
  ab_plus?: AbPlusAf7Enum;
  author: string;
  /** B(III) Rh- */
  b_minus?: BMinusAf7Enum;
  /** B(III) Rh+ */
  b_plus?: BPlusAf7Enum;
  /**
   * Дата рождения реципиента
   * @format date
   */
  birth_date: string | null;
  /** Тип крови */
  blood_class: BloodClassEnum;
  blood_station: BloodStationSmall;
  blood_station_id: number;
  /** Тип автора */
  content_type?: number | null;
  /**
   * Дата добавления
   * @format date-time
   */
  created_at: string | null;
  /**
   * Отображаемая часть
   * @maxLength 255
   */
  cropping?: string;
  /**
   * Имя реципиента
   * @maxLength 255
   */
  first_name: string;
  id: number;
  image: string;
  joined_users: AddressNeedJoinedUserForBase[];
  /**
   * Крайний срок
   * @format date
   */
  last_date: string;
  /**
   * Фамилия реципиента
   * @maxLength 255
   */
  last_name: string;
  /**
   * Отчество реципиента
   * @maxLength 255
   */
  middle_name?: string | null;
  /** O(I) Rh- */
  o_minus?: OMinusAf7Enum;
  /** O(I) Rh+ */
  o_plus?: OPlusAf7Enum;
  /**
   * Автор
   * @min 0
   * @max 2147483647
   */
  object_id?: number | null;
  requested_blood_type: any[];
  /**
   * Требуемое количество доноров
   * @min 0
   * @max 2147483647
   */
  required_donors_count: number;
  /** Причина поиска */
  search_reason: string;
  /** Статус */
  status?: StatusEnum | BlankEnum | NullEnum | null;
  /** @default true */
  time_by_blood_station?: boolean;
  time_slots: AddressNeedTimeSlotForBase[];
  total_joined_count: number;
  user_status: string;
}

export interface AddressNeedTimeSlotForBase {
  /**
   * День
   * @format date
   */
  date: string;
  id: number;
  joined_count: number;
}

export interface AllNamesBloodStation {
  id: number;
  /**
   * Название
   * @maxLength 255
   */
  title: string;
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 */
export enum BMinusAf7Enum {
  Need = "need",
  NoNeed = "no_need",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 * * `unknown` - нет данных
 */
export enum BMinusC07Enum {
  Need = "need",
  NoNeed = "no_need",
  Unknown = "unknown",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 */
export enum BPlusAf7Enum {
  Need = "need",
  NoNeed = "no_need",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 * * `unknown` - нет данных
 */
export enum BPlusC07Enum {
  Need = "need",
  NoNeed = "no_need",
  Unknown = "unknown",
}

export enum BlankEnum {
  Value = "",
}

/**
 * * `blood` - Цельная кровь
 * * `plasma` - Плазма
 * * `platelets` - Тромбоциты
 * * `erythrocytes` - Эритроциты
 * * `leukocytes` - Гранулоциты (Лейкоциты)
 * * `any` - Любой
 */
export enum BloodClassEnum {
  Blood = "blood",
  Plasma = "plasma",
  Platelets = "platelets",
  Erythrocytes = "erythrocytes",
  Leukocytes = "leukocytes",
  Any = "any",
}

/**
 * * `o_plus` - O(I) Rh+
 * * `o_minus` - O(I) Rh-
 * * `a_plus` - A(II) Rh+
 * * `a_minus` - A(II) Rh-
 * * `b_plus` - B(III) Rh+
 * * `b_minus` - B(III) Rh-
 * * `ab_plus` - AB(IV) Rh+
 * * `ab_minus` - AB(IV) Rh-
 */
export enum BloodGroupEnum {
  OPlus = "o_plus",
  OMinus = "o_minus",
  APlus = "a_plus",
  AMinus = "a_minus",
  BPlus = "b_plus",
  BMinus = "b_minus",
  AbPlus = "ab_plus",
  AbMinus = "ab_minus",
}

export interface BloodStationAddress {
  /**
   * Адрес
   * @maxLength 255
   */
  address?: string;
}

export interface BloodStationPhone {
  /** Коментарий */
  comment?: string;
  id: number;
  /**
   * Номер телефона
   * @maxLength 25
   */
  phone: string;
}

export interface BloodStationSchedule {
  dow: string;
  /** @format time */
  end: string;
  id: number;
  /** @format time */
  start: string;
}

export interface BloodStationSearch {
  address: string;
  city: City;
  city_id: number;
  /**
   * Ликвидирован
   * Если данный центр крови больше не существует, то не будет показан в поиске, где сдать кровь. Однако при добавлении донаций, доноры могут найти этот центр крови, чтобы отметить свои старые донации.
   */
  closed?: boolean;
  /**
   * В зачёт почётного донора Москвы
   * Сдавая в этом центре крови можно получить звание Почётного донора Москвы
   */
  for_moscow?: boolean;
  id: number;
  lat: string;
  lng: string;
  phone_numbers: BloodStationPhone[];
  /**
   * Донаций добавлено
   * @min 0
   * @max 2147483647
   */
  priority?: number;
  schedule: BloodStationSchedule[];
  /**
   * Название
   * @maxLength 255
   */
  title: string;
  /** @default "blood_station" */
  type: string;
  /**
   * Можно пройти типирование
   * Здесь вы можете войти в <a href="https://wmdd2020.donorsearch.org" target="_blank">регистр доноров костного мозга</a>
   */
  with_typing?: boolean;
  /**
   * Можно сдавать без прописки
   * Центры крови принимает доноров без местной прописки
   */
  without_registration?: boolean;
}

export interface BloodStationSearchResponse {
  blood_stations: BloodStationSearch[];
  cities: CitySearch[];
}

export interface BloodStationSmall {
  /** A(II) Rh- */
  a_minus?: AMinusC07Enum;
  /** A(II) Rh+ */
  a_plus?: APlusC07Enum;
  /** AB(IV) Rh- */
  ab_minus?: AbMinusC07Enum;
  /** AB(IV) Rh+ */
  ab_plus?: AbPlusC07Enum;
  /**
   * Адрес
   * @maxLength 255
   */
  address?: string;
  /** B(III) Rh- */
  b_minus?: BMinusC07Enum;
  /** B(III) Rh+ */
  b_plus?: BPlusC07Enum;
  /** Цельная кровь */
  blood?: LeukocytesEnum;
  /** Потребности центра крови */
  blood_group?: BloodGroupEnum | BlankEnum;
  city: City;
  city_id: number;
  /**
   * Ликвидирован
   * Если данный центр крови больше не существует, то не будет показан в поиске, где сдать кровь. Однако при добавлении донаций, доноры могут найти этот центр крови, чтобы отметить свои старые донации.
   */
  closed?: boolean;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string;
  /** Эритроциты */
  erythrocytes?: LeukocytesEnum;
  /**
   * В зачёт почётного донора Москвы
   * Сдавая в этом центре крови можно получить звание Почётного донора Москвы
   */
  for_moscow?: boolean;
  id: number;
  /**
   * Принимать потребности у службы крови?
   * Данные будут обновляться каждый день в час ночи.
   */
  is_get_from_parser?: boolean;
  lat: string;
  /** Гранулоциты (Лейкоциты) */
  leukocytes?: LeukocytesEnum;
  lng: string;
  /** O(I) Rh- */
  o_minus?: OMinusC07Enum;
  /** O(I) Rh+ */
  o_plus?: OPlusC07Enum;
  /**
   * Страница в службе крови
   * @format uri
   * @maxLength 200
   */
  parser_url?: string | null;
  /**
   * Телефоны
   * Устаревшее поле
   * @maxLength 255
   */
  phones?: string;
  /** Плазма */
  plasma?: LeukocytesEnum;
  /** Тромбоциты */
  platelets?: LeukocytesEnum;
  /**
   * Донаций добавлено
   * @min 0
   * @max 2147483647
   */
  priority?: number;
  /**
   * Сайт
   * @maxLength 255
   */
  site?: string;
  /**
   * Название
   * @maxLength 255
   */
  title: string;
  /**
   * Можно пройти типирование
   * Здесь вы можете войти в <a href="https://wmdd2020.donorsearch.org" target="_blank">регистр доноров костного мозга</a>
   */
  with_typing?: boolean;
  /**
   * Можно сдавать без прописки
   * Центры крови принимает доноров без местной прописки
   */
  without_registration?: boolean;
  /**
   * Режим работы
   * Устаревшее поле
   * @maxLength 255
   */
  worktime?: string;
}

export interface BloodStationWithNeeds {
  /** A(II) Rh- */
  a_minus?: AMinusC07Enum;
  /** A(II) Rh+ */
  a_plus?: APlusC07Enum;
  /** AB(IV) Rh- */
  ab_minus?: AbMinusC07Enum;
  /** AB(IV) Rh+ */
  ab_plus?: AbPlusC07Enum;
  /**
   * Адрес
   * @maxLength 255
   */
  address?: string;
  /** B(III) Rh- */
  b_minus?: BMinusC07Enum;
  /** B(III) Rh+ */
  b_plus?: BPlusC07Enum;
  /** Цельная кровь */
  blood?: LeukocytesEnum;
  blood_group: string;
  blood_status: string;
  city: City;
  city_id: number;
  /**
   * Ликвидирован
   * Если данный центр крови больше не существует, то не будет показан в поиске, где сдать кровь. Однако при добавлении донаций, доноры могут найти этот центр крови, чтобы отметить свои старые донации.
   */
  closed?: boolean;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string;
  /** Эритроциты */
  erythrocytes?: LeukocytesEnum;
  /**
   * В зачёт почётного донора Москвы
   * Сдавая в этом центре крови можно получить звание Почётного донора Москвы
   */
  for_moscow?: boolean;
  has_blood_group: string;
  id: number;
  /**
   * Принимать потребности у службы крови?
   * Данные будут обновляться каждый день в час ночи.
   */
  is_get_from_parser?: boolean;
  lat: string;
  /** Гранулоциты (Лейкоциты) */
  leukocytes?: LeukocytesEnum;
  lng: string;
  /** O(I) Rh- */
  o_minus?: OMinusC07Enum;
  /** O(I) Rh+ */
  o_plus?: OPlusC07Enum;
  /**
   * Страница в службе крови
   * @format uri
   * @maxLength 200
   */
  parser_url?: string | null;
  phone_numbers: BloodStationPhone[];
  /**
   * Телефоны
   * Устаревшее поле
   * @maxLength 255
   */
  phones?: string;
  /** Плазма */
  plasma?: LeukocytesEnum;
  /** Тромбоциты */
  platelets?: LeukocytesEnum;
  /**
   * Донаций добавлено
   * @min 0
   * @max 2147483647
   */
  priority?: number;
  schedule: BloodStationSchedule[];
  /**
   * Сайт
   * @maxLength 255
   */
  site?: string;
  /**
   * Название
   * @maxLength 255
   */
  title: string;
  /**
   * Можно пройти типирование
   * Здесь вы можете войти в <a href="https://wmdd2020.donorsearch.org" target="_blank">регистр доноров костного мозга</a>
   */
  with_typing?: boolean;
  /**
   * Можно сдавать без прописки
   * Центры крови принимает доноров без местной прописки
   */
  without_registration?: boolean;
  /**
   * Режим работы
   * Устаревшее поле
   * @maxLength 255
   */
  worktime?: string;
}

export interface BonusDetail {
  /**
   * Изображение бонуса
   * Минимальный размер 10x10, Максимальный размер 10000x10000
   * @format uri
   */
  _bonus_image: string;
  /** Ограничения бонуса */
  bonus_confines: string;
  /** Описание бонуса */
  bonus_description: string;
  /**
   * Название бонуса
   * Максимум 48 символов
   * @maxLength 48
   */
  bonus_name: string;
  cities: City[];
  /**
   * Срок действия
   * @format date
   */
  date_validity: string;
  h: number;
  /** @default false */
  has_feedback: boolean;
  id: number;
  /** @default false */
  is_expired: boolean;
  /** Опубликован? */
  is_published?: boolean;
  is_taken: string;
  partner_image: string;
  /**
   * Имя партнера
   * Максимум 29 символов
   * @maxLength 29
   */
  partner_name: string;
  /**
   * Ссылка на партнера
   * @format uri
   * @maxLength 200
   */
  partner_url: string;
  promocode: string;
  state: string;
  w: number;
}

export interface BonusList {
  bonus_image: string;
  /**
   * Название бонуса
   * Максимум 48 символов
   * @maxLength 48
   */
  bonus_name: string;
  /** Доступен в городах */
  cities?: number[];
  /**
   * Срок действия
   * @format date
   */
  date_validity: string;
  h: number;
  id: number;
  /** Опубликован? */
  is_published?: boolean;
  is_taken: string;
  partner_image: string;
  /**
   * Имя партнера
   * Максимум 29 символов
   * @maxLength 29
   */
  partner_name: string;
  /**
   * Приоритет
   * Чем больше число, тем выше в списке
   * @min 0
   * @max 2147483647
   */
  priority?: number;
  w: number;
}

export interface City {
  country: Country;
  id: number;
  lat: string;
  lng: string;
  /**
   * Приоритет
   * @min 0
   * @max 2147483647
   */
  priority?: number;
  region: Region;
  region_id: number;
  /**
   * Название
   * Строковый идентификатор сущности.
   * @maxLength 255
   */
  slug?: string;
  /**
   * Название
   * @maxLength 255
   */
  title: string;
}

export interface CitySearch {
  address: string;
  id: number;
  lat: string;
  lng: string;
  /**
   * Название
   * Строковый идентификатор сущности.
   * @maxLength 255
   */
  slug?: string;
  /**
   * Название
   * @maxLength 255
   */
  title: string;
  /** @default "city" */
  type: string;
}

export interface Country {
  id: number;
  /**
   * Название
   * @maxLength 255
   */
  title: string;
}

export interface DonationAgg {
  /**
   * Цельная кровь
   * @min 0
   * @max 2147483647
   */
  blood?: number;
  /**
   * Донаций за все время
   * @min 0
   * @max 2147483647
   */
  count?: number;
  /**
   * Эритроциты
   * @min 0
   * @max 2147483647
   */
  erythrocytes?: number;
  /**
   * Дата последней донации
   * @format date
   */
  last_donation_at?: string | null;
  /**
   * Гранулоциты (Лейкоциты)
   * @min 0
   * @max 2147483647
   */
  leukocytes?: number;
  /**
   * Плазма
   * @min 0
   * @max 2147483647
   */
  plasma?: number;
  /**
   * Тромбоциты
   * @min 0
   * @max 2147483647
   */
  platelets?: number;
  /**
   * Не подтверждённые
   * @min 0
   * @max 2147483647
   */
  unconfirmed_donations?: number;
}

export interface DonationAggTop {
  /**
   * Цельная кровь
   * @min 0
   * @max 2147483647
   */
  blood?: number;
  /**
   * Цельная кровь за донорский год
   * @min 0
   * @max 2147483647
   */
  blood_year?: number;
  /**
   * Донаций за все время
   * @min 0
   * @max 2147483647
   */
  count?: number;
  /**
   * Донаций за донорский год
   * @min 0
   * @max 2147483647
   */
  count_year?: number;
  /**
   * Эритроциты
   * @min 0
   * @max 2147483647
   */
  erythrocytes?: number;
  /**
   * Эритроциты за донорский год
   * @min 0
   * @max 2147483647
   */
  erythrocytes_year?: number;
  /**
   * Дата последней донации
   * @format date
   */
  last_donation_at?: string | null;
  /**
   * Гранулоциты (Лейкоциты)
   * @min 0
   * @max 2147483647
   */
  leukocytes?: number;
  /**
   * Лейкоциты за донорский год
   * @min 0
   * @max 2147483647
   */
  leukocytes_year?: number;
  /**
   * Плазма
   * @min 0
   * @max 2147483647
   */
  plasma?: number;
  /**
   * Плазма за донорский год
   * @min 0
   * @max 2147483647
   */
  plasma_year?: number;
  /**
   * Тромбоциты
   * @min 0
   * @max 2147483647
   */
  platelets?: number;
  /**
   * Тромбоциты за донорский год
   * @min 0
   * @max 2147483647
   */
  platelets_year?: number;
  /**
   * Не подтверждённые
   * @min 0
   * @max 2147483647
   */
  unconfirmed_donations?: number;
}

export interface DonationAggTopLight {
  /**
   * Цельная кровь
   * @min 0
   * @max 2147483647
   */
  blood?: number;
  /**
   * Донаций за все время
   * @min 0
   * @max 2147483647
   */
  count?: number;
  /**
   * Эритроциты
   * @min 0
   * @max 2147483647
   */
  erythrocytes?: number;
  /**
   * Гранулоциты (Лейкоциты)
   * @min 0
   * @max 2147483647
   */
  leukocytes?: number;
  /**
   * Плазма
   * @min 0
   * @max 2147483647
   */
  plasma?: number;
  /**
   * Тромбоциты
   * @min 0
   * @max 2147483647
   */
  platelets?: number;
}

export interface DonorStatus {
  /**
   * Цвет фона
   * @maxLength 100
   */
  background_color?: string;
  /**
   * Количество донаций
   * @min 0
   * @max 2147483647
   */
  donations_count: number;
  id: number;
  /**
   * Название
   * @maxLength 50
   */
  name: string;
  /**
   * Цвет текста
   * @maxLength 100
   */
  text_color?: string;
}

export interface DonorsRequirement {
  /** Требования к донорам */
  event: number;
  id: number;
  /**
   * Требование
   * @maxLength 255
   */
  requirement: string;
}

export interface EmailRegistration {
  /** @format email */
  email: string;
  first_name: string;
  password: string;
  tag?: string;
}

export interface EmailVerificationSerialzier {
  code: number;
  /** @format email */
  email: string;
  user_id: number;
}

export interface EventBase {
  /**
   * Адрес
   * Необязательно для онлайн мероприятий
   * @maxLength 255
   */
  address?: string | null;
  author: string;
  available_slots: string;
  blood_station: BloodStationSmall;
  category: EventCategory;
  city: City;
  city_id: number;
  /** Тип организатора */
  content_type: number;
  /**
   * Дата добавления
   * @format date-time
   */
  created_at: string;
  /** Описание */
  description: string;
  donors_requirements: DonorsRequirement[];
  /**
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Конец
   * @format date-time
   */
  end_date: string;
  id: number;
  individual_partners: IndividualEventPartner[];
  /**
   * Приватное
   * Статус "Приватное" означает, что мероприятие будет доступно только по прямой ссылке.
   */
  is_private?: boolean;
  /**
   * Количество записавшихся
   * @min 0
   * @max 2147483647
   */
  joined_count?: number;
  joined_users: string;
  /**
   * Название
   * @maxLength 255
   */
  name: string;
  /**
   * ID Организатора
   * @min 0
   * @max 2147483647
   */
  object_id: number;
  /**
   * Телефон
   * @maxLength 25
   */
  phone?: string;
  reports: EventReport[];
  socialnetworks: EventSocialNetworks[];
  /**
   * Начало
   * @format date-time
   */
  start_date: string;
  time_slots: EventTimeSlotForBase[];
  type: string;
  unity_partners: UnityEventPartner[];
  /**
   * Дата изменения
   * @format date-time
   */
  updated_at: string;
  user_status: string;
  /**
   * Web-сайт
   * @format uri
   * @maxLength 200
   */
  website?: string;
}

export interface EventCategory {
  id: number;
  /** @maxLength 255 */
  name: string;
}

export interface EventList {
  /**
   * Адрес
   * Необязательно для онлайн мероприятий
   * @maxLength 255
   */
  address?: string | null;
  author: string;
  available_slots: string;
  blood_station: BloodStationAddress;
  category: EventCategory;
  city: City;
  city_id: number;
  /** Описание */
  description: string;
  /**
   * Конец
   * @format date-time
   */
  end_date: string;
  id: number;
  individual_partners: IndividualEventPartner[];
  /**
   * Количество записавшихся
   * @min 0
   * @max 2147483647
   */
  joined_count?: number;
  joined_users: string;
  /**
   * Название
   * @maxLength 255
   */
  name: string;
  /**
   * ID Организатора
   * @min 0
   * @max 2147483647
   */
  object_id: number;
  /**
   * Начало
   * @format date-time
   */
  start_date: string;
  type: string;
  unity_partners: OrganizationPartner[];
}

export interface EventReport {
  id: number;
  images: EventReportImages[];
  /** СМИ о нас */
  massmedia_about?: string;
  video_urls: EventReportVideoURL[];
}

export interface EventReportImages {
  id?: number;
  /** @format uri */
  image?: string;
}

export interface EventReportVideoURL {
  id?: number;
  /** Видео с мероприятия */
  url?: string;
}

export interface EventSocialNetworks {
  id: number;
  /** Название */
  social: SocialEnum;
  /**
   * Ссылка
   * @format uri
   * @maxLength 200
   */
  url: string;
}

export interface EventTimeSlotForBase {
  /**
   * Количество участников
   * @min 0
   * @max 2147483647
   */
  count?: number;
  /**
   * День
   * @format date
   */
  date: string;
  /**
   * Конец
   * @format time
   */
  end_time: string;
  id?: number;
  joined_count: number;
  /**
   * Начало
   * @format time
   */
  start_time: string;
}

/**
 * * `male` - Мужской
 * * `female` - Женский
 */
export enum GenderEnum {
  Male = "male",
  Female = "female",
}

export interface IndividualEventPartner {
  /**
   * Дата добавления
   * @format date-time
   */
  created_at: string;
  /**
   * Отображаемая часть
   * @maxLength 255
   */
  cropping?: string;
  event: number;
  id: number;
  /** @format uri */
  image: string;
  /**
   * Название
   * @maxLength 255
   */
  name: string;
  /**
   * Дата изменения
   * @format date-time
   */
  updated_at: string;
  /**
   * Ссылка
   * @format uri
   * @maxLength 200
   */
  url: string;
}

export interface InlinePicture {
  /** @format uri */
  image: string;
}

/**
 * * `accept` - принимает
 * * `no_accept` - не принимает
 * * `unknown` - нет данных
 */
export enum LeukocytesEnum {
  Accept = "accept",
  NoAccept = "no_accept",
  Unknown = "unknown",
}

export interface MainPageDonationAggTop {
  /**
   * Цельная кровь
   * @min 0
   * @max 2147483647
   */
  blood?: number;
  /**
   * Цельная кровь за донорский год
   * @min 0
   * @max 2147483647
   */
  blood_year?: number;
  /**
   * Донаций за все время
   * @min 0
   * @max 2147483647
   */
  count?: number;
  /**
   * Донаций за донорский год
   * @min 0
   * @max 2147483647
   */
  count_year?: number;
  /**
   * Эритроциты
   * @min 0
   * @max 2147483647
   */
  erythrocytes?: number;
  /**
   * Эритроциты за донорский год
   * @min 0
   * @max 2147483647
   */
  erythrocytes_year?: number;
  /**
   * Дата последней донации
   * @format date
   */
  last_donation_at?: string | null;
  /**
   * Гранулоциты (Лейкоциты)
   * @min 0
   * @max 2147483647
   */
  leukocytes?: number;
  /**
   * Лейкоциты за донорский год
   * @min 0
   * @max 2147483647
   */
  leukocytes_year?: number;
  /**
   * Плазма
   * @min 0
   * @max 2147483647
   */
  plasma?: number;
  /**
   * Плазма за донорский год
   * @min 0
   * @max 2147483647
   */
  plasma_year?: number;
  /**
   * Тромбоциты
   * @min 0
   * @max 2147483647
   */
  platelets?: number;
  /**
   * Тромбоциты за донорский год
   * @min 0
   * @max 2147483647
   */
  platelets_year?: number;
}

export interface MapBloodStationSearch {
  /** A(II) Rh- */
  a_minus?: AMinusC07Enum;
  /** A(II) Rh+ */
  a_plus?: APlusC07Enum;
  /** AB(IV) Rh- */
  ab_minus?: AbMinusC07Enum;
  /** AB(IV) Rh+ */
  ab_plus?: AbPlusC07Enum;
  address: string;
  /** B(III) Rh- */
  b_minus?: BMinusC07Enum;
  /** B(III) Rh+ */
  b_plus?: BPlusC07Enum;
  /** Цельная кровь */
  blood?: LeukocytesEnum;
  blood_group: string;
  blood_status: string;
  city: City;
  city_id: number;
  /**
   * Ликвидирован
   * Если данный центр крови больше не существует, то не будет показан в поиске, где сдать кровь. Однако при добавлении донаций, доноры могут найти этот центр крови, чтобы отметить свои старые донации.
   */
  closed?: boolean;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string;
  /** Эритроциты */
  erythrocytes?: LeukocytesEnum;
  /**
   * В зачёт почётного донора Москвы
   * Сдавая в этом центре крови можно получить звание Почётного донора Москвы
   */
  for_moscow?: boolean;
  has_blood_group: string;
  id: number;
  /**
   * Принимать потребности у службы крови?
   * Данные будут обновляться каждый день в час ночи.
   */
  is_get_from_parser?: boolean;
  lat: string;
  /** Гранулоциты (Лейкоциты) */
  leukocytes?: LeukocytesEnum;
  lng: string;
  /** O(I) Rh- */
  o_minus?: OMinusC07Enum;
  /** O(I) Rh+ */
  o_plus?: OPlusC07Enum;
  /**
   * Страница в службе крови
   * @format uri
   * @maxLength 200
   */
  parser_url?: string | null;
  phone_numbers: BloodStationPhone[];
  /**
   * Телефоны
   * Устаревшее поле
   * @maxLength 255
   */
  phones?: string;
  /** Плазма */
  plasma?: LeukocytesEnum;
  /** Тромбоциты */
  platelets?: LeukocytesEnum;
  /**
   * Донаций добавлено
   * @min 0
   * @max 2147483647
   */
  priority?: number;
  schedule: BloodStationSchedule[];
  /**
   * Сайт
   * @maxLength 255
   */
  site?: string;
  /**
   * Название
   * @maxLength 255
   */
  title: string;
  /** @default "blood_station" */
  type: string;
  /**
   * Можно пройти типирование
   * Здесь вы можете войти в <a href="https://wmdd2020.donorsearch.org" target="_blank">регистр доноров костного мозга</a>
   */
  with_typing?: boolean;
  /**
   * Можно сдавать без прописки
   * Центры крови принимает доноров без местной прописки
   */
  without_registration?: boolean;
  /**
   * Режим работы
   * Устаревшее поле
   * @maxLength 255
   */
  worktime?: string;
}

export type NullEnum = null;

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 */
export enum OMinusAf7Enum {
  Need = "need",
  NoNeed = "no_need",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 * * `unknown` - нет данных
 */
export enum OMinusC07Enum {
  Need = "need",
  NoNeed = "no_need",
  Unknown = "unknown",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 */
export enum OPlusAf7Enum {
  Need = "need",
  NoNeed = "no_need",
}

/**
 * * `need` - нужна
 * * `no_need` - не нужна
 * * `unknown` - нет данных
 */
export enum OPlusC07Enum {
  Need = "need",
  NoNeed = "no_need",
  Unknown = "unknown",
}

export interface OrganizationPartner {
  /**
   * Изображение
   * Минимальный размер 190x190, Максимальный размер 10000x10000
   * @format uri
   */
  _image?: string | null;
  id: number;
  image: string;
  /**
   * Название
   * @maxLength 255
   */
  name: string;
}

export interface PaginatedAddressNeedList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: AddressNeed[];
}

export interface PaginatedAllNamesBloodStationList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: AllNamesBloodStation[];
}

export interface PaginatedBloodStationWithNeedsList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: BloodStationWithNeeds[];
}

export interface PaginatedBonusListList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: BonusList[];
}

export interface PaginatedCityList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: City[];
}

export interface PaginatedCountryList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: Country[];
}

export interface PaginatedEventListList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: EventList[];
}

export interface PaginatedMapBloodStationSearchList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: MapBloodStationSearch[];
}

export interface PaginatedPlannedUserList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: PlannedUser[];
}

export interface PaginatedRegionList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: Region[];
}

export interface PaginatedSelectedBSSerialzierList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: SelectedBSSerialzier[];
}

export interface PaginatedUserTopList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: UserTop[];
}

export interface PhoneRegistration {
  first_name: string;
  password: string;
  phone: string;
  tag?: string;
}

export interface PhoneVerificationSerialzier {
  code: number;
  phone: string;
  user_id: number;
}

export interface Picture {
  /**
   * Дата добавления
   * @format date-time
   */
  date_added: string;
  id: number;
  /** @format uri */
  image: string;
}

export interface PlannedUser {
  /**
   * Имя
   * @maxLength 255
   */
  first_name: string;
  id: number;
  /**
   * Фамилия
   * @maxLength 255
   */
  last_name?: string;
  legacy_avatar: string;
  /**
   * Отчество
   * @maxLength 255
   */
  middle_name?: string;
  photo: InlinePicture;
}

/**
 * * `facebook` - Facebook
 * * `vkontakte` - VK
 * * `twitter` - Twitter
 * * `odnoklassniki` - Odnoklassniki
 * * `google` - Google
 * * `yandex` - Yandex
 * * `apple` - Apple
 */
export enum ProviderEnum {
  Facebook = "facebook",
  Vkontakte = "vkontakte",
  Twitter = "twitter",
  Odnoklassniki = "odnoklassniki",
  Google = "google",
  Yandex = "yandex",
  Apple = "apple",
}

export interface Region {
  id: number;
  /**
   * Название
   * @maxLength 255
   */
  title: string;
}

export type Registration = EmailRegistration | PhoneRegistration;

export interface ResetPassword {
  password: string;
  token: string;
}

export interface SelectedBSSerialzier {
  /** A(II) Rh- */
  a_minus?: AMinusC07Enum;
  /** A(II) Rh+ */
  a_plus?: APlusC07Enum;
  /** AB(IV) Rh- */
  ab_minus?: AbMinusC07Enum;
  /** AB(IV) Rh+ */
  ab_plus?: AbPlusC07Enum;
  /**
   * Адрес
   * @maxLength 255
   */
  address?: string;
  /** B(III) Rh- */
  b_minus?: BMinusC07Enum;
  /** B(III) Rh+ */
  b_plus?: BPlusC07Enum;
  /** Цельная кровь */
  blood?: LeukocytesEnum;
  blood_group: string;
  city: City;
  city_id: number;
  /**
   * Ликвидирован
   * Если данный центр крови больше не существует, то не будет показан в поиске, где сдать кровь. Однако при добавлении донаций, доноры могут найти этот центр крови, чтобы отметить свои старые донации.
   */
  closed?: boolean;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string;
  /** Эритроциты */
  erythrocytes?: LeukocytesEnum;
  /**
   * В зачёт почётного донора Москвы
   * Сдавая в этом центре крови можно получить звание Почётного донора Москвы
   */
  for_moscow?: boolean;
  id: number;
  /**
   * Принимать потребности у службы крови?
   * Данные будут обновляться каждый день в час ночи.
   */
  is_get_from_parser?: boolean;
  lat: string;
  /** Гранулоциты (Лейкоциты) */
  leukocytes?: LeukocytesEnum;
  lng: string;
  /** O(I) Rh- */
  o_minus?: OMinusC07Enum;
  /** O(I) Rh+ */
  o_plus?: OPlusC07Enum;
  /**
   * Страница в службе крови
   * @format uri
   * @maxLength 200
   */
  parser_url?: string | null;
  phone_numbers: BloodStationPhone[];
  /**
   * Телефоны
   * Устаревшее поле
   * @maxLength 255
   */
  phones?: string;
  /** Плазма */
  plasma?: LeukocytesEnum;
  /** Тромбоциты */
  platelets?: LeukocytesEnum;
  /**
   * Донаций добавлено
   * @min 0
   * @max 2147483647
   */
  priority?: number;
  schedule: BloodStationSchedule[];
  /**
   * Сайт
   * @maxLength 255
   */
  site?: string;
  status: string;
  /**
   * Название
   * @maxLength 255
   */
  title: string;
  /**
   * Можно пройти типирование
   * Здесь вы можете войти в <a href="https://wmdd2020.donorsearch.org" target="_blank">регистр доноров костного мозга</a>
   */
  with_typing?: boolean;
  /**
   * Можно сдавать без прописки
   * Центры крови принимает доноров без местной прописки
   */
  without_registration?: boolean;
  /**
   * Режим работы
   * Устаревшее поле
   * @maxLength 255
   */
  worktime?: string;
}

export interface SimpleUserSocialAuth {
  email: string | null;
  id: number;
  /** Публичный профиль */
  is_public?: boolean;
  /** Провайдер */
  provider: ProviderEnum;
  /** ID профиля */
  uid: string;
}

/**
 * * `vk` - Вконтакте
 * * `facebook` - Facebook
 * * `twitter` - Twitter
 * * `instagram` - Instagram
 * * `ok` - Одноклассники
 * * `telegram` - Telegram
 */
export enum SocialEnum {
  Vk = "vk",
  Facebook = "facebook",
  Twitter = "twitter",
  Instagram = "instagram",
  Ok = "ok",
  Telegram = "telegram",
}

/**
 * * `donors_found` - Доноры найдены
 * * `search_completed` - Поиск завершен
 * * `search_in_progress` - Поиск доноров продолжается
 * * `on_moderation` - На модерации
 * * `rejected` - Отклонена
 */
export enum StatusEnum {
  DonorsFound = "donors_found",
  SearchCompleted = "search_completed",
  SearchInProgress = "search_in_progress",
  OnModeration = "on_moderation",
  Rejected = "rejected",
}

export interface Top100Response {
  items: Top100User[];
  user_info: UserInfo;
}

export interface Top100User {
  blood_group: string;
  bs_count: string;
  city: City;
  count_blood_temp: string;
  count_erythrocytes_temp: string;
  count_leukocytes_temp: string;
  count_plasma_temp: string;
  count_platelets_temp: string;
  count_temp: string;
  donation_agg: DonationAggTopLight;
  donor_status: DonorStatus;
  /**
   * Имя
   * @maxLength 255
   */
  first_name: string;
  id: number;
  is_request_user: boolean;
  /**
   * Фамилия
   * @maxLength 255
   */
  last_name?: string;
  photo: InlinePicture;
}

export interface TopUsers {
  blood_group: string;
  bs_count: string;
  city: City;
  donation_agg: DonationAggTop;
  donor_status: DonorStatus;
  /**
   * Имя
   * @maxLength 255
   */
  first_name: string;
  id: number;
  is_request_user: boolean;
  /**
   * Фамилия
   * @maxLength 255
   */
  last_name?: string;
  photo: InlinePicture;
}

export interface UnityEventPartner {
  id: number;
  image: string;
  /**
   * Название
   * @maxLength 255
   */
  name: string;
}

export interface User {
  /** 100 */
  is_pin_100?: boolean;
  /** 20 */
  is_pin_20?: boolean;
  /**
   * О себе
   * @maxLength 130
   */
  about?: string;
  /**
   * Дата рождения
   * @format date
   */
  birth_date?: string | null;
  blood_group: string;
  city: City;
  city_id: number;
  /**
   * Дата регистрации
   * @format date-time
   */
  date_joined: string;
  donation_agg: DonationAgg;
  /** Получено удостоверение почётного донора */
  donor_certificate?: boolean;
  donor_status: DonorStatus;
  /**
   * Адрес электронной почты
   * @format email
   */
  email: string;
  /**
   * Дата подтверждения почты через баннер
   * @format date-time
   */
  email_reconfirmed_at?: string | null;
  /**
   * Имя
   * @maxLength 255
   */
  first_name: string;
  /** Пол */
  gender?: GenderEnum | BlankEnum;
  has_password: string;
  id: number;
  invited_users: TopUsers[];
  is_email_verified: string;
  is_phone_verified: string;
  joined_events: string;
  joined_organizations: string;
  /**
   * Фамилия
   * @maxLength 255
   */
  last_name?: string;
  legacy_avatar: string;
  /** Вход по номеру телефон */
  login_via_phone?: boolean;
  /**
   * Девичья фамилия
   * @maxLength 255
   */
  maiden_name?: string;
  managed_organizations: string;
  /**
   * Отчество
   * @maxLength 255
   */
  middle_name?: string;
  next_donation: string;
  next_donation_date: string;
  parent_user: TopUsers;
  /** Номер телефона */
  phone: string;
  /**
   * Дата подтверждения телефона через баннер
   * @format date-time
   */
  phone_reconfirmed_at?: string | null;
  photo: InlinePicture;
  photo_id?: number | null;
  /**
   * Реферальный код
   * @format uuid
   */
  referal_code: string;
  socials: SimpleUserSocialAuth[];
  start_donor_year: string;
  /** @maxLength 50 */
  username: string;
}

export interface UserInfo {
  place: string;
}

export interface UserTop {
  blood_group: string;
  count: string;
  count_blood: string;
  count_bs: string;
  count_erythrocytes: string;
  count_leukocytes: string;
  count_plasma: string;
  count_platelets: string;
  donation_agg: MainPageDonationAggTop;
  donor_status: DonorStatus;
  /**
   * Имя
   * @maxLength 255
   */
  first_name: string;
  /** Почетный донор */
  honor_donor?: boolean;
  id: number;
  is_request_user: string;
  /**
   * Фамилия
   * @maxLength 255
   */
  last_name?: string;
  legacy_avatar: string;
  /**
   * Отчество
   * @maxLength 255
   */
  middle_name?: string;
  photo: InlinePicture;
}
