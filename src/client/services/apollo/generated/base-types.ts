/* WARNING: THIS FILE IS GENERATED, DO NOT EDIT! */
/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  /** Get user by id */
  user: User;
  /** Get current user */
  me: User;
  /** Vendor category fields */
  vendorCategories: Array<ResultVendorCategories>;
  /** Vendor count by each category */
  vendorCategoryCount: Array<VendorCategoryCount>;
  state: State;
  /** Get all states */
  states: Array<State>;
  /** Get file by id */
  file: File;
  vendor: Vendor;
  /** List vendors */
  vendors: VendorPagination;
  /** Check if vendor by slug is exists */
  checkVendorSlugUnique: Scalars['Boolean'];
  /** Current user vendors */
  myVendors: Array<Vendor>;
  /** Vendor cities */
  vendorCities: Array<City>;
  publicSearchFilters: Scalars['JSON'];
  /** Path to csv file with db of vendors */
  vendorsToCsv: Scalars['String'];
  store: Store;
  storeById: Store;
  /** Get all stores */
  stores: StorePagination;
  /** Get single DMA */
  dma: Dma;
  /** Get list of DMA */
  dmaList: Array<Dma>;
  country: Country;
  /** Get all countries */
  countries: Array<Country>;
  /** List plans */
  plans: PlanPagination;
  /** Get plan by id */
  plan: Plan;
  /** Get DocuSign connect url */
  docusignConnectUrl: Scalars['String'];
  /** Get DocuSign connect status */
  docusignConnectStatus: Scalars['Boolean'];
  /** Purchase list */
  purchases: PurchasePagination;
  purchase: Purchase;
  businessInsurance: BusinessInsurance;
  businessInsurances: BusinessInsurancePagination;
};

export type QueryUserArgs = {
  id: Scalars['String'];
};

export type QueryVendorCategoriesArgs = {
  category?: Maybe<VendorProfileCategory>;
};

export type QueryStateArgs = {
  id: Scalars['String'];
};

export type QueryFileArgs = {
  id: Scalars['String'];
};

export type QueryVendorArgs = {
  slug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type QueryVendorsArgs = {
  dto?: Maybe<SearchVendorsDto>;
};

export type QueryCheckVendorSlugUniqueArgs = {
  slug: Scalars['String'];
  id: Scalars['String'];
};

export type QueryPublicSearchFiltersArgs = {
  dto?: Maybe<ListVendorsFiltersDto>;
};

export type QueryStoreArgs = {
  id: Scalars['String'];
};

export type QueryStoreByIdArgs = {
  storeId: Scalars['ID'];
};

export type QueryStoresArgs = {
  dto?: Maybe<ListStoresDto>;
};

export type QueryDmaArgs = {
  id: Scalars['String'];
};

export type QueryDmaListArgs = {
  dto?: Maybe<ListDmaDto>;
};

export type QueryCountryArgs = {
  id: Scalars['String'];
};

export type QueryPlansArgs = {
  dto?: Maybe<ListPlansDto>;
};

export type QueryPlanArgs = {
  id: Scalars['String'];
};

export type QueryDocusignConnectUrlArgs = {
  state?: Maybe<Scalars['String']>;
  redirectUrl: Scalars['String'];
};

export type QueryPurchasesArgs = {
  dto?: Maybe<ListPurchasesDto>;
};

export type QueryPurchaseArgs = {
  id: Scalars['String'];
};

export type QueryBusinessInsuranceArgs = {
  id: Scalars['String'];
};

export type QueryBusinessInsurancesArgs = {
  dto?: Maybe<ListBusinessInsuranceDto>;
};

export type User = {
  /** User id (uuid) */
  id: Scalars['String'];
  /** DBI User Id */
  extId?: Maybe<Scalars['String']>;
  /** User role */
  role: UserRole;
  /** User status */
  status: UserStatus;
  /** User unique email */
  email: Scalars['String'];
  /** Is email verified */
  emailVerified: Scalars['Boolean'];
  /** User phone number */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Is phone number verified */
  phoneNumberVerified: Scalars['Boolean'];
  /** User first name */
  firstName: Scalars['String'];
  /** User last name */
  lastName: Scalars['String'];
  /** User full name */
  fullName: Scalars['String'];
  /** User created date */
  createdAt: Scalars['Date'];
  /** User created by user */
  createdBy?: Maybe<User>;
  /** User updated date */
  updatedAt: Scalars['Date'];
  /** User updated by user */
  updatedBy?: Maybe<User>;
  /** User role in vendors */
  vendorUsers: Array<VendorUser>;
};

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
}

export type VendorUser = {
  /** Vendor User id (uuid) */
  id: Scalars['String'];
  /** Vendor User role */
  role: VendorUserRole;
  /** Vendor User created date */
  createdAt: Scalars['Date'];
  /** Vendor User created by user */
  createdBy?: Maybe<User>;
  /** Vendor User updated date */
  updatedAt: Scalars['Date'];
  /** Vendor User updated by user */
  updatedBy?: Maybe<User>;
  /** Vendor */
  vendor: Vendor;
  /** User */
  user: User;
};

export enum VendorUserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
}

export type Vendor = {
  /** Vendor id (uuid) */
  id: Scalars['String'];
  /** Vendor status */
  status: VendorStatus;
  /** Vendor premium */
  isPremium: Scalars['Boolean'];
  /** Vendor premium expiration date */
  premiumExpiresAt?: Maybe<Scalars['Date']>;
  /** DocuSign contract id */
  contractId?: Maybe<Scalars['String']>;
  /** DocuSign contract url */
  contractUrl?: Maybe<Scalars['String']>;
  /** Is vendor signed a contract  */
  isContractSigned: Scalars['Boolean'];
  /** Vendor created date */
  createdAt: Scalars['Date'];
  /** Vendor created by user */
  createdBy?: Maybe<User>;
  /** Vendor updated date */
  updatedAt: Scalars['Date'];
  /** Vendor updated by user */
  updatedBy?: Maybe<User>;
  /** Vendor profile */
  profile?: Maybe<VendorProfile>;
  /** Vendor pending profile */
  pendingProfile?: Maybe<VendorProfile>;
  /** Vendor users */
  vendorUsers: Array<VendorUser>;
  /** Vendor purchases */
  purchases?: Maybe<Array<Purchase>>;
  /** Vendor stores */
  vendorStores: Array<VendorStore>;
  /** Vendor files */
  files: Array<File>;
  /** Braintree customer id */
  customerId?: Maybe<Scalars['String']>;
  /** Able to receive payments */
  isSolvent: Scalars['Boolean'];
  stores?: Maybe<Array<Store>>;
};

export enum VendorStatus {
  DRAFT = 'DRAFT',
  LISTED = 'LISTED',
  NOT_LISTED = 'NOT_LISTED',
  DELETED = 'DELETED',
}

export type VendorProfile = {
  /** Vendor Profile id (uuid) */
  id: Scalars['String'];
  /** Vendor Profile category */
  category?: Maybe<VendorProfileCategory>;
  /** Vendor Profile status */
  status: VendorProfileStatus;
  /** Vendor Profile name */
  name?: Maybe<Scalars['String']>;
  /** Vendor Profile description */
  description?: Maybe<Scalars['String']>;
  /** Vendor Profile title */
  title?: Maybe<Scalars['String']>;
  /** Vendor Profile corporate email */
  corporateEmail?: Maybe<Scalars['String']>;
  /** Vendor Profile corporate phone number */
  corporatePhoneNumber?: Maybe<Scalars['String']>;
  /** Vendor Profile public phone number */
  publicPhoneNumber?: Maybe<Scalars['String']>;
  /** Vendor Profile contact first name */
  contactFirstName?: Maybe<Scalars['String']>;
  /** Vendor Profile contact last name name */
  contactLastName?: Maybe<Scalars['String']>;
  /** Vendor Profile years in business */
  yearsInBusiness?: Maybe<Scalars['Int']>;
  /** Vendor Profile category fields information */
  info?: Maybe<Scalars['JSON']>;
  /** Vendor Profile address */
  address_1?: Maybe<Scalars['String']>;
  /** Vendor Profile address 2 */
  address_2?: Maybe<Scalars['String']>;
  /** Vendor Profile city */
  city?: Maybe<Scalars['String']>;
  /** Vendor Profile zip code */
  zip?: Maybe<Scalars['String']>;
  /** Vendor location */
  location?: Maybe<LocationObjectType>;
  /** Vendor Profile unique slug */
  slug?: Maybe<Scalars['String']>;
  /** Vendor Profile created date */
  createdAt: Scalars['Date'];
  /** Vendor Profile created by user */
  createdBy?: Maybe<User>;
  /** Vendor Profile updated date */
  updatedAt: Scalars['Date'];
  /** Vendor Profile updated by user */
  updatedBy?: Maybe<User>;
  /** Vendor Profile state */
  state?: Maybe<State>;
  /** Vendor Profile country */
  country?: Maybe<Country>;
  /** Vendor Profile logo */
  logo?: Maybe<File>;
  /** Vendor Profile images */
  images?: Maybe<Array<File>>;
  /** Vendor Profile awards */
  awards?: Maybe<Array<File>>;
  /** Vendor Profile venue rooms */
  venue?: Maybe<Array<File>>;
  /** Vendor */
  vendor: Vendor;
  /** Vendor Profile additional info */
  additionalInfo?: Maybe<AdditionalInfoObjectType>;
  /** Vendor Profile schedule */
  schedule?: Maybe<ScheduleObjectType>;
  /** Business insurances */
  businessInsurances?: Maybe<PaginatedBusinessInsurance>;
};

export type VendorProfileBusinessInsurancesArgs = {
  dto?: Maybe<ListBusinessInsuranceDto>;
};

export enum VendorProfileCategory {
  BAKERY = 'BAKERY',
  CATERING = 'CATERING',
  ENTERTAINMENT = 'ENTERTAINMENT',
  FLOWERS = 'FLOWERS',
  GROOMS_ATTIRE = 'GROOMS_ATTIRE',
  HAIR_MAKEUP = 'HAIR_MAKEUP',
  HEALTH_WELLNESS = 'HEALTH_WELLNESS',
  INVITATIONS_STATIONARY = 'INVITATIONS_STATIONARY',
  JEWELRY = 'JEWELRY',
  OFFICIANT = 'OFFICIANT',
  PHOTO_VIDEOGRAPHER = 'PHOTO_VIDEOGRAPHER',
  PLANNER_COORDINATOR = 'PLANNER_COORDINATOR',
  TRANSPORTATION = 'TRANSPORTATION',
  VENUE = 'VENUE',
}

export enum VendorProfileStatus {
  DRAFT = 'DRAFT',
  AWAITING_REVIEW = 'AWAITING_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export type LocationObjectType = {
  /** location.x */
  x: Scalars['Float'];
  /** location.y */
  y: Scalars['Float'];
};

export type State = {
  /** Two-letter state code (ISO 3166-2) */
  id: Scalars['String'];
  /** State name */
  name: Scalars['String'];
  /** State tax rate */
  taxRate?: Maybe<Scalars['Float']>;
  /** Stripe tax id */
  stripeTaxId?: Maybe<Scalars['String']>;
  country: Country;
};

export type Country = {
  /** Two-letter country code (ISO 3166-1) */
  id: Scalars['String'];
  /** Country name */
  name: Scalars['String'];
  /** Country status */
  status: CountryStatus;
  /** Country states (US only) */
  states?: Maybe<Array<State>>;
};

export enum CountryStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export type File = {
  /** File id (uuid) */
  id: Scalars['String'];
  /** File type */
  type: FileType;
  /** File status */
  status: FileStatus;
  /** File name */
  name?: Maybe<Scalars['String']>;
  /** Direct URL to file */
  url?: Maybe<Scalars['String']>;
  /** AWS S3 bucket name */
  bucket?: Maybe<Scalars['String']>;
  /** AWS S3 file key */
  key?: Maybe<Scalars['String']>;
  /** File size in bytes */
  size: Scalars['Int'];
  /** Virtual file path (section / directory) */
  path: Scalars['String'];
  /** File extension */
  ext: Scalars['String'];
  /** File MIME type */
  mime: Scalars['String'];
  /** File created date */
  createdAt: Scalars['Date'];
  /** File created by user */
  createdBy: User;
  /** File update date */
  updatedAt?: Maybe<Scalars['Date']>;
  /** File created by user */
  updatedBy?: Maybe<User>;
  /** File vendor */
  vendor: Vendor;
  /** File thumbs */
  thumbs: Array<Thumb>;
};

export enum FileType {
  LOGO = 'LOGO',
  IMAGE = 'IMAGE',
  AWARD = 'AWARD',
  VENUE = 'VENUE',
  BUSINESS_INSURANCE = 'BUSINESS_INSURANCE',
}

export enum FileStatus {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  INACTIVE = 'INACTIVE',
}

export type Thumb = {
  /** Thumb Id (uuid) */
  id: Scalars['String'];
  /** Thumb type */
  type: ThumbType;
  /** Direct url to file */
  url?: Maybe<Scalars['String']>;
  /** AWS S3 bucket name */
  bucket?: Maybe<Scalars['String']>;
  /** AWS S3 file key */
  key?: Maybe<Scalars['String']>;
  /** Thumb height in pixels */
  height: Scalars['Int'];
  /** Thumb width in pixels */
  width: Scalars['Int'];
  /** Thumb size in bytes */
  size: Scalars['Int'];
  /** Thumb created date */
  createdAt: Scalars['Date'];
  /** Thumb file */
  file?: Maybe<File>;
};

export enum ThumbType {
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
}

export type AdditionalInfoObjectType = {
  /** Vendor Profile social links */
  links?: Maybe<Array<SocialLinkObjectType>>;
};

export type SocialLinkObjectType = {
  /** Vendor Profile link type */
  key: VendorProfileSocialLinks;
  /** Vendor Profile link value */
  value: Scalars['String'];
};

export enum VendorProfileSocialLinks {
  WEBSITE = 'WEBSITE',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
  PINTEREST = 'PINTEREST',
  GOOGLE = 'GOOGLE',
  YELP = 'YELP',
}

export type ScheduleObjectType = {
  /** work day */
  sunday?: Maybe<WorkDayObjectType>;
  /** work day */
  monday?: Maybe<WorkDayObjectType>;
  /** work day */
  tuesday?: Maybe<WorkDayObjectType>;
  /** work day */
  wednesday?: Maybe<WorkDayObjectType>;
  /** work day */
  thursday?: Maybe<WorkDayObjectType>;
  /** work day */
  friday?: Maybe<WorkDayObjectType>;
  /** work day */
  saturday?: Maybe<WorkDayObjectType>;
};

export type WorkDayObjectType = {
  /** is day is checked */
  isChecked: Scalars['Boolean'];
  /** when working day begins */
  from: WorkTimeObjectType;
  /** when working day is end */
  to: WorkTimeObjectType;
};

export type WorkTimeObjectType = {
  /** Work Time */
  time: Scalars['String'];
  /** Work Day Period */
  period: Scalars['String'];
};

export type ListBusinessInsuranceDto = {
  /** Page number */
  page?: Maybe<Scalars['Int']>;
  /** Page limit */
  limit?: Maybe<Scalars['Int']>;
  /** Business insurance status */
  status?: Maybe<BusinessInsuranceStatus>;
  /** Vendor Profile Id */
  vendorProfileId?: Maybe<Scalars['String']>;
  /** Ordering direction */
  orderDirection?: Maybe<OrderDirection>;
  /** Column name, which we want to order */
  orderColumn?: Maybe<OrderColumn>;
};

export enum BusinessInsuranceStatus {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
}

export enum OrderDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum OrderColumn {
  CREATED_AT = 'CREATED_AT',
}

export type PaginatedBusinessInsurance = {
  items: Array<BusinessInsurance>;
  itemCount: Scalars['Int'];
  totalItems: Scalars['Int'];
  pageCount: Scalars['Int'];
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
};

export type BusinessInsurance = {
  /** Business insurance id (uuid) */
  id: Scalars['String'];
  /** Business insurance status */
  status: BusinessInsuranceStatus;
  /** Business insurance certificate */
  certificate: Scalars['String'];
  /** Business insurance expiration date */
  expirationDate: Scalars['Date'];
  /** Business insurance effective date */
  effectiveDate?: Maybe<Scalars['Date']>;
  /** Business insurance provider name */
  providerName: Scalars['String'];
  /** Business insurance file pdf, png, jpeg */
  file: File;
  /** Person, who verified business insurance */
  verifiedBy?: Maybe<User>;
  /** Date, when person verified business insurance */
  verifiedAt?: Maybe<Scalars['Date']>;
  /** Reasons and description of rejection */
  rejection?: Maybe<BusinessInsuranceObjectType>;
  /** Vendor created date */
  createdAt: Scalars['Date'];
  /** Vendor created by user */
  createdBy?: Maybe<User>;
  /** Vendor updated date */
  updatedAt: Scalars['Date'];
  /** Vendor updated by user */
  updatedBy?: Maybe<User>;
  /** Vendor Profile */
  vendorProfile?: Maybe<VendorProfile>;
};

export type BusinessInsuranceObjectType = {
  /** Reasons of Rejection */
  reasons?: Maybe<Array<Scalars['String']>>;
  /** Description of rejection */
  description?: Maybe<Scalars['String']>;
};

export type Purchase = {
  /** Purchase id (uuid) */
  id: Scalars['String'];
  /** Purchase type */
  type: PurchaseType;
  /** Purchase status */
  status: PurchaseStatus;
  /** Purchase three-letter currency code (ISO 4217) */
  currency?: Maybe<Scalars['String']>;
  /** Purchase total price */
  total?: Maybe<Scalars['Float']>;
  /** Purchase tax rate */
  taxRate?: Maybe<Scalars['Float']>;
  /** Purchase tax */
  tax?: Maybe<Scalars['Float']>;
  /** Purchase subtotal */
  subtotal?: Maybe<Scalars['Float']>;
  /** Purchase transaction rate */
  transactionRate?: Maybe<Scalars['Float']>;
  /** Purchase transaction fee */
  transactionFee?: Maybe<Scalars['Float']>;
  /** Stripe transaction id */
  stripeTransactionId?: Maybe<Scalars['String']>;
  /** Stripe transaction info */
  stripeTransactionInfo?: Maybe<Scalars['JSON']>;
  /** Purchase receipt url */
  receiptUrl?: Maybe<Scalars['String']>;
  /** Purchase note */
  note?: Maybe<Scalars['String']>;
  vendor?: Maybe<Vendor>;
  /** Purchase plan */
  plan?: Maybe<Plan>;
  /** Purchase created date */
  createdAt: Scalars['Date'];
  /** Purchase created by user */
  createdBy?: Maybe<User>;
  /** Purchase updated date */
  updatedAt: Scalars['Date'];
  /** Purchase updated by user */
  updatedBy?: Maybe<User>;
};

export enum PurchaseType {
  CHARGE = 'CHARGE',
  REFUND = 'REFUND',
  UNKNOWN = 'UNKNOWN',
}

export enum PurchaseStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export type Plan = {
  /** Plan id (uuid) */
  id: Scalars['String'];
  /** Plan status */
  status: PlanStatus;
  /** Plan name */
  name: Scalars['String'];
  /** Plan description */
  description?: Maybe<Scalars['String']>;
  /** Plan three-letter currency code (ISO 4217) */
  currency: Scalars['String'];
  /** Plan price */
  amount: Scalars['Float'];
  /** Plan interval type */
  interval: PlanInterval;
  /** Plan interval count */
  intervalCount: Scalars['Int'];
  /** Plan trial period in days */
  trialPeriodDays: Scalars['Int'];
  /** Stripe plan id */
  stripePlanId?: Maybe<Scalars['String']>;
  /** Braintree plan id */
  braintreePlanId?: Maybe<Scalars['String']>;
  /** Plan created date */
  createdAt: Scalars['Date'];
  /** Plan created by user */
  createdBy?: Maybe<User>;
  /** Plan updated date */
  updatedAt: Scalars['Date'];
  /** Plan updated by user */
  updatedBy?: Maybe<User>;
};

export enum PlanStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum PlanInterval {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

export type VendorStore = {
  /** Vendor Store subscription status */
  subscriptionStatus?: Maybe<SubscriptionStatus>;
  /** Vendor Store id (uuid) */
  id: Scalars['String'];
  /** Comment, why admin canceled store subscription */
  cancelComment?: Maybe<Scalars['String']>;
  /** Billing period end date (braintree) */
  billingPeriodEndDate?: Maybe<Scalars['Date']>;
  /** 1 year expiration date */
  yearExpirationDate?: Maybe<Scalars['Date']>;
  /** Plan price */
  amount?: Maybe<Scalars['Float']>;
  /** Vendor User created date */
  createdAt: Scalars['Date'];
  /** Vendor Store created by user */
  createdBy?: Maybe<User>;
  /** Store User updated date */
  updatedAt: Scalars['Date'];
  /** Vendor Store updated by user */
  updatedBy?: Maybe<User>;
  /** Vendor */
  vendor: Vendor;
  /** Store */
  store: Store;
  /** Braintree subscription id */
  subscriptionId?: Maybe<Scalars['String']>;
};

export enum SubscriptionStatus {
  SUBSCRIBED = 'SUBSCRIBED',
  UNSUBSCRIBED = 'UNSUBSCRIBED',
  AWAITING_UNSUBSCRIBE = 'AWAITING_UNSUBSCRIBE',
}

export type Store = {
  /** Store id (uuid) */
  id: Scalars['ID'];
  /** Store status */
  status: StoreStatus;
  /** Store personal id Str */
  storeId: Scalars['ID'];
  /** Store name */
  name: Scalars['String'];
  /** Designated Market Area (DMA) */
  dma?: Maybe<Dma>;
  /** Store created date */
  createdAt: Scalars['Date'];
  /** Store created by user */
  createdBy?: Maybe<User>;
  /** Store updated date */
  updatedAt: Scalars['Date'];
  /** Store updated by user */
  updatedBy?: Maybe<User>;
  /** Store plan */
  plan?: Maybe<Plan>;
  /** Details of Store payment subscription */
  paymentDetails?: Maybe<PaymentDetails>;
};

export type StorePaymentDetailsArgs = {
  vendorId: Scalars['String'];
};

export enum StoreStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export type Dma = {
  /** DMA id (uuid) */
  id: Scalars['ID'];
  /** Designated Market Area Rank */
  rank: Scalars['String'];
  /** Designated Market Area */
  area: Scalars['String'];
  /** State */
  state: State;
  /** Stores */
  stores?: Maybe<Array<Store>>;
};

export type PaymentDetails = {
  /** Vendor Store id (uuid) */
  id: Scalars['String'];
  /** status of payment subscription */
  subscriptionStatus: SubscriptionStatus;
  /** Comment, why admin canceled store subscription */
  cancelComment?: Maybe<Scalars['String']>;
  /** Current plan price */
  amount?: Maybe<Scalars['Float']>;
  /** 1 year expiration date */
  yearExpirationDate?: Maybe<Scalars['Date']>;
};

export type ResultVendorCategories = VendorCategory | VendorCategoryRow;

export type VendorCategory = {
  /** Vendor Profile category id */
  id: VendorProfileCategory;
  /** Vendor category rows */
  rows: Array<VendorCategoryRow>;
};

export type VendorCategoryRow = {
  /** Row name */
  name: Scalars['String'];
  /** Row columns */
  items: Array<VendorCategoryCol>;
};

export type VendorCategoryCol = {
  /** Number of columns */
  columns: Scalars['String'];
  /** Column fields */
  items: Array<VendorCategoryField>;
};

export type VendorCategoryField = {
  /** Field id */
  id: Scalars['String'];
  /** Field name */
  name: Scalars['String'];
  /** Field type */
  type: Scalars['String'];
  /** Field active */
  isActive: Scalars['Boolean'];
  /** Field required */
  isRequired: Scalars['Boolean'];
  /** Field default value */
  defaultValue: VendorCategoryFieldValue;
  /** Field default value */
  values?: Maybe<Array<Maybe<VendorCategoryFieldValue>>>;
  /** Field placeholder */
  placeholder?: Maybe<Scalars['String']>;
  /** Field has other */
  hasOther?: Maybe<Scalars['Boolean']>;
};

export type VendorCategoryFieldValue = {
  /** Value id */
  id: Scalars['String'];
  /** Value name */
  name: Scalars['String'];
};

export type VendorCategoryCount = {
  /** Vendor Profile category id */
  category: VendorProfileCategory;
  /** Total vendors listed in category */
  count: Scalars['Int'];
};

export type SearchVendorsDto = {
  /** Page number */
  page?: Maybe<Scalars['Int']>;
  /** Page limit */
  limit?: Maybe<Scalars['Int']>;
  /** Vendor status */
  status?: Maybe<Array<VendorStatus>>;
  /** Vendor Profile category */
  category?: Maybe<Array<VendorProfileCategory>>;
  /** Search query */
  search?: Maybe<Scalars['String']>;
  /** Name query */
  name?: Maybe<Array<Scalars['String']>>;
  /** Order direction */
  orderDirection?: Maybe<OrderDirection>;
  /** Order column */
  orderColumn?: Maybe<VendorOrderColumn>;
  /** Vendor Profile city */
  city?: Maybe<Array<Scalars['String']>>;
  /** Vendor Profile state */
  state?: Maybe<Array<Scalars['String']>>;
  /** Vendor Profile location */
  location?: Maybe<LocationInputType>;
  /** Vendor Profile status */
  review?: Maybe<Array<VendorProfileStatus>>;
  /** Vendor info search term filters */
  termFilters?: Maybe<Array<TermFilterItem>>;
  /** Vendor info search range filters */
  rangeFilters?: Maybe<Array<RangeFilterItem>>;
};

export enum VendorOrderColumn {
  NAME = 'NAME',
  CREATED_AT = 'CREATED_AT',
}

export type LocationInputType = {
  /** location.x */
  x: Scalars['Float'];
  /** location.y */
  y: Scalars['Float'];
};

export type TermFilterItem = {
  /** Filter name */
  name: Scalars['String'];
  /** Filter value */
  value: Scalars['String'];
};

export type RangeFilterItem = {
  /** Filter name */
  name: Scalars['String'];
  /** Filter value */
  value: RangeFilterValues;
};

export type RangeFilterValues = {
  /** Range from value */
  from: Scalars['Int'];
  /** Range to value */
  to: Scalars['Int'];
};

export type VendorPagination = {
  items: Array<Vendor>;
  itemCount: Scalars['Int'];
  totalItems: Scalars['Int'];
  pageCount: Scalars['Int'];
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
};

export type City = {
  /** City name */
  name: Scalars['String'];
};

export type ListVendorsFiltersDto = {
  /** Vendor Profile category */
  category?: Maybe<Array<VendorProfileCategory>>;
};

export type ListStoresDto = {
  /** Page number */
  page?: Maybe<Scalars['Int']>;
  /** Page limit */
  limit?: Maybe<Scalars['Int']>;
  /** Country Id */
  countryId?: Maybe<Scalars['String']>;
  /** State Ids */
  stateIds?: Maybe<Array<Scalars['String']>>;
  /** Order direction */
  orderDirection?: Maybe<OrderDirection>;
  /** Order column */
  orderColumn?: Maybe<StoreOrderColumn>;
  /** Search query */
  search?: Maybe<Scalars['String']>;
  /** Store status */
  statuses?: Maybe<Array<StoreStatus>>;
  /** Store fee range */
  feeRange?: Maybe<RangeFilterItem>;
  /** List of store ids that are excluded */
  excludedStoreIds?: Maybe<Array<Scalars['String']>>;
};

export enum StoreOrderColumn {
  NAME = 'NAME',
  FEE = 'FEE',
}

export type StorePagination = {
  items: Array<Store>;
  itemCount: Scalars['Int'];
  totalItems: Scalars['Int'];
  pageCount: Scalars['Int'];
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
};

export type ListDmaDto = {
  /** Country Id */
  countryId?: Maybe<Scalars['String']>;
};

export type ListPlansDto = {
  /** Page number */
  page?: Maybe<Scalars['Int']>;
  /** Page limit */
  limit?: Maybe<Scalars['Int']>;
  /** User status */
  status?: Maybe<Scalars['String']>;
};

export type PlanPagination = {
  items: Array<Plan>;
  itemCount: Scalars['Int'];
  totalItems: Scalars['Int'];
  pageCount: Scalars['Int'];
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
};

export type ListPurchasesDto = {
  /** Page number */
  page?: Maybe<Scalars['Int']>;
  /** Page limit */
  limit?: Maybe<Scalars['Int']>;
  /** Purchase status */
  statuses?: Maybe<Array<PurchaseStatus>>;
  /** Purchase type */
  types?: Maybe<Array<PurchaseType>>;
  /** Order direction */
  orderDirection?: Maybe<OrderDirection>;
  /** Order column */
  orderColumn?: Maybe<PurchasesOrderColumn>;
  /** Search query */
  search?: Maybe<Scalars['String']>;
  /** Purchase amount paid range */
  amountPaidRange?: Maybe<RangeFilterItem>;
  /** Purchases from */
  fromDate?: Maybe<Scalars['Date']>;
  /** Purchases to */
  toDate?: Maybe<Scalars['Date']>;
};

export enum PurchasesOrderColumn {
  DATE = 'DATE',
}

export type PurchasePagination = {
  items: Array<Purchase>;
  itemCount: Scalars['Int'];
  totalItems: Scalars['Int'];
  pageCount: Scalars['Int'];
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
};

export type BusinessInsurancePagination = {
  items: Array<BusinessInsurance>;
  itemCount: Scalars['Int'];
  totalItems: Scalars['Int'];
  pageCount: Scalars['Int'];
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
};

export type Mutation = {
  /** Complete user */
  completeUser: User;
  /** Update vendor profile */
  updateVendorProfile: VendorProfile;
  /** Update file */
  updateFile: File;
  /** Upload files */
  uploadFiles: Array<File>;
  /** Create draft vendor */
  createVendor: Vendor;
  /** Update vendor */
  updateVendor: Vendor;
  /** Delete vendor */
  deleteVendor: Vendor;
  /** Process subscription payment */
  processPayment: Vendor;
  /** Unsubscribe vendor store */
  unsubscribeVendorStore: Store;
  /** Revert vendor store subscription */
  revertSubscriptionVendorStore: Store;
  /** Create store */
  createStore: Store;
  /** Update store */
  updateStore: Store;
  /** Create DocuSign contract */
  createDocusignContract: DocusignContract;
  /** Connect DocuSign */
  connectDocusign: Scalars['Boolean'];
  /** Resend envelope to signers */
  resendEnvelope: Scalars['Boolean'];
  /** Create Business Insurance */
  createBusinessInsurance: BusinessInsurance;
  /** Update Business Insurance */
  updateBusinessInsurance: BusinessInsurance;
};

export type MutationCompleteUserArgs = {
  dto: CompleteUserDto;
};

export type MutationUpdateVendorProfileArgs = {
  dto: UpdateVendorProfileDto;
};

export type MutationUpdateFileArgs = {
  dto: UpdateFileDto;
  id: Scalars['String'];
};

export type MutationUploadFilesArgs = {
  files: Array<Scalars['Upload']>;
  type: FileType;
  vendorId: Scalars['String'];
};

export type MutationUpdateVendorArgs = {
  vendorProfile: UpsertVendorProfileDto;
  vendor: UpdateVendorDto;
};

export type MutationDeleteVendorArgs = {
  id: Scalars['String'];
};

export type MutationProcessPaymentArgs = {
  subscription: SubscriptionDto;
};

export type MutationUnsubscribeVendorStoreArgs = {
  unsubscription: VendorStoreUnsubscribedDto;
};

export type MutationRevertSubscriptionVendorStoreArgs = {
  subscriptionDto: VendorStoreSubscribedDto;
};

export type MutationCreateStoreArgs = {
  dto: CreateStoreDto;
};

export type MutationUpdateStoreArgs = {
  dto: UpdateStoreDto;
};

export type MutationCreateDocusignContractArgs = {
  dto: CreateDocusignContractDto;
};

export type MutationConnectDocusignArgs = {
  code: Scalars['String'];
};

export type MutationResendEnvelopeArgs = {
  vendorId: Scalars['String'];
};

export type MutationCreateBusinessInsuranceArgs = {
  dto: CreateBusinessInsuranceDto;
};

export type MutationUpdateBusinessInsuranceArgs = {
  dto: UpdateBusinessInsuranceDto;
};

export type CompleteUserDto = {
  /** Id token generated by Oauth2 server */
  idToken: Scalars['String'];
};

export type UpdateVendorProfileDto = {
  /** Vendor id */
  id: Scalars['ID'];
  /** Vendor Profile category */
  category?: Maybe<VendorProfileCategory>;
  /** Vendor Profile status */
  status?: Maybe<VendorProfileStatus>;
  /** Vendor Profile name */
  name?: Maybe<Scalars['String']>;
  /** Vendor Profile description */
  description?: Maybe<Scalars['String']>;
  /** Vendor Profile title */
  title?: Maybe<Scalars['String']>;
  /** Vendor Profile corporate email */
  corporateEmail?: Maybe<Scalars['String']>;
  /** Vendor Profile corporate phone number */
  corporatePhoneNumber?: Maybe<Scalars['String']>;
  /** Vendor Profile public phone number */
  publicPhoneNumber?: Maybe<Scalars['String']>;
  /** Vendor Profile contact first name */
  contactFirstName?: Maybe<Scalars['String']>;
  /** Vendor Profile contact last name */
  contactLastName?: Maybe<Scalars['String']>;
  /** Vendor Profile years in business */
  yearsInBusiness?: Maybe<Scalars['Int']>;
  /** Vendor Profile category fields information */
  info?: Maybe<Scalars['JSON']>;
  /** Vendor Profile address */
  address_1?: Maybe<Scalars['String']>;
  /** Vendor Profile address 2 */
  address_2?: Maybe<Scalars['String']>;
  /** Vendor Profile city */
  city?: Maybe<Scalars['String']>;
  /** Vendor Profile state id */
  stateId?: Maybe<Scalars['String']>;
  /** Vendor Profile zip code */
  zip?: Maybe<Scalars['String']>;
  /** Vendor location */
  location?: Maybe<LocationInputType>;
  /** Vendor Profile additional info */
  additionalInfo?: Maybe<AdditionalInfoInputType>;
  /** Vendor Profile unique slug */
  slug?: Maybe<Scalars['String']>;
  /** Vendor Profile schedule */
  schedule?: Maybe<ScheduleInputType>;
  /** Vendor Profile logo id (File id) */
  logoId?: Maybe<Scalars['String']>;
  /** Vendor Profile image ids (File id) */
  imagesIds: Array<Maybe<Scalars['String']>>;
  /** Vendor Profile award ids (File id) */
  awardsIds: Array<Maybe<Scalars['String']>>;
  /** Vendor Profile venue rooms ids (File id) */
  venueIds: Array<Maybe<Scalars['String']>>;
};

export type AdditionalInfoInputType = {
  /** Vendor Profile social links */
  links?: Maybe<Array<SocialLinkInputType>>;
};

export type SocialLinkInputType = {
  /** Vendor Profile link type */
  key: VendorProfileSocialLinks;
  /** Vendor Profile link value */
  value: Scalars['String'];
};

export type ScheduleInputType = {
  /** work day */
  sunday?: Maybe<WorkDayInputType>;
  /** work day */
  monday?: Maybe<WorkDayInputType>;
  /** work day */
  tuesday?: Maybe<WorkDayInputType>;
  /** work day */
  wednesday?: Maybe<WorkDayInputType>;
  /** work day */
  thursday?: Maybe<WorkDayInputType>;
  /** work day */
  friday?: Maybe<WorkDayInputType>;
  /** work day */
  saturday?: Maybe<WorkDayInputType>;
};

export type WorkDayInputType = {
  /** is day is checked */
  isChecked: Scalars['Boolean'];
  /** when working day begins */
  from: WorkTimeInputType;
  /** when working day is end */
  to: WorkTimeInputType;
};

export type WorkTimeInputType = {
  /** Work Time */
  time: Scalars['String'];
  /** Work Day Period */
  period: Scalars['String'];
};

export type UpdateFileDto = {
  /** File path */
  path?: Maybe<Scalars['String']>;
};

export type UpsertVendorProfileDto = {
  /** Vendor id */
  id?: Maybe<Scalars['ID']>;
  /** Vendor Profile category */
  category?: Maybe<VendorProfileCategory>;
  /** Vendor Profile status */
  status?: Maybe<VendorProfileStatus>;
  /** Vendor Profile name */
  name?: Maybe<Scalars['String']>;
  /** Vendor Profile description */
  description?: Maybe<Scalars['String']>;
  /** Vendor Profile title */
  title?: Maybe<Scalars['String']>;
  /** Vendor Profile corporate email */
  corporateEmail?: Maybe<Scalars['String']>;
  /** Vendor Profile corporate phone number */
  corporatePhoneNumber?: Maybe<Scalars['String']>;
  /** Vendor Profile public phone number */
  publicPhoneNumber?: Maybe<Scalars['String']>;
  /** Vendor Profile contact first name */
  contactFirstName?: Maybe<Scalars['String']>;
  /** Vendor Profile contact last name */
  contactLastName?: Maybe<Scalars['String']>;
  /** Vendor Profile years in business */
  yearsInBusiness?: Maybe<Scalars['Int']>;
  /** Vendor Profile category fields information */
  info?: Maybe<Scalars['JSON']>;
  /** Vendor Profile address */
  address_1?: Maybe<Scalars['String']>;
  /** Vendor Profile address 2 */
  address_2?: Maybe<Scalars['String']>;
  /** Vendor Profile city */
  city?: Maybe<Scalars['String']>;
  /** Vendor Profile state id */
  stateId?: Maybe<Scalars['String']>;
  /** Vendor Profile zip code */
  zip?: Maybe<Scalars['String']>;
  /** Vendor location */
  location?: Maybe<LocationInputType>;
  /** Vendor Profile additional info */
  additionalInfo?: Maybe<AdditionalInfoInputType>;
  /** Vendor Profile unique slug */
  slug?: Maybe<Scalars['String']>;
  /** Vendor Profile schedule */
  schedule?: Maybe<ScheduleInputType>;
  /** Vendor Profile logo id (File id) */
  logoId?: Maybe<Scalars['String']>;
  /** Vendor Profile image ids (File id) */
  imagesIds: Array<Maybe<Scalars['String']>>;
  /** Vendor Profile award ids (File id) */
  awardsIds: Array<Maybe<Scalars['String']>>;
  /** Vendor Profile venue rooms ids (File id) */
  venueIds: Array<Maybe<Scalars['String']>>;
};

export type UpdateVendorDto = {
  /** Vendor id */
  id: Scalars['ID'];
  /** Vendor Status */
  status?: Maybe<VendorStatus>;
  /** Is premium Vendor */
  isPremium?: Maybe<Scalars['Boolean']>;
  /** Premium expiration date */
  premiumExpiresAt?: Maybe<Scalars['Date']>;
  /** Vendor Contract Id */
  contractId?: Maybe<Scalars['String']>;
  /** Is Vendor Contract Signed */
  isContractSigned?: Maybe<Scalars['Boolean']>;
};

export type SubscriptionDto = {
  /** Braintree nonce */
  nonce: Scalars['String'];
  /** Stores ids */
  storeIds: Array<Scalars['String']>;
  /** Vendor ID */
  vendorId: Scalars['String'];
};

export type VendorStoreUnsubscribedDto = {
  /** Vendor id */
  vendorId: Scalars['ID'];
  /** Store id */
  storeId: Scalars['ID'];
  /** Comment, after admin cancel store subscription */
  cancelComment?: Maybe<Scalars['String']>;
};

export type VendorStoreSubscribedDto = {
  /** Vendor id */
  vendorId: Scalars['ID'];
  /** Store id */
  storeId: Scalars['ID'];
};

export type CreateStoreDto = {
  /** Store status */
  status?: Maybe<StoreStatus>;
  /** Store unique external ID */
  storeId: Scalars['ID'];
  /** Store name */
  name: Scalars['String'];
  /** Plan ID */
  planId?: Maybe<Scalars['ID']>;
  /** DMA ID */
  dmaId?: Maybe<Scalars['ID']>;
};

export type UpdateStoreDto = {
  /** Store status */
  status?: Maybe<StoreStatus>;
  /** Store unique external ID */
  storeId: Scalars['ID'];
  /** Store name */
  name: Scalars['String'];
  /** Plan ID */
  planId?: Maybe<Scalars['ID']>;
  /** DMA ID */
  dmaId?: Maybe<Scalars['ID']>;
  /** Store id (uuid)  */
  id: Scalars['ID'];
};

export type CreateDocusignContractDto = {
  /** Vendor id */
  vendorId: Scalars['String'];
  /** Vendor Profile additional info */
  signers: Array<DocusignSigner>;
};

export type DocusignSigner = {
  /** Signer email */
  email: Scalars['String'];
  /** Signer full name */
  name: Scalars['String'];
  /** Signer role */
  roleName: Scalars['String'];
};

export type DocusignContract = {
  /** Docusign contract Id */
  id: Scalars['String'];
  /** Docusign contract Url */
  url: Scalars['String'];
};

export type CreateBusinessInsuranceDto = {
  /** Business Insurance certificate # */
  certificate: Scalars['String'];
  /** Business Insurance expiration date */
  expirationDate: Scalars['Date'];
  /** Business Insurance effective date */
  effectiveDate?: Maybe<Scalars['Date']>;
  /** Business Insurance provider name */
  providerName: Scalars['String'];
  /** Business insurance uploaded file id */
  fileId?: Maybe<Scalars['ID']>;
  /** Business Insurance vendor profile id */
  vendorProfileId: Scalars['ID'];
};

export type UpdateBusinessInsuranceDto = {
  /** Business Insurance certificate # */
  certificate: Scalars['String'];
  /** Business Insurance expiration date */
  expirationDate: Scalars['Date'];
  /** Business Insurance effective date */
  effectiveDate?: Maybe<Scalars['Date']>;
  /** Business Insurance provider name */
  providerName: Scalars['String'];
  /** Business insurance uploaded file id */
  fileId?: Maybe<Scalars['ID']>;
  /** Business Insurance vendor profile id */
  vendorProfileId: Scalars['ID'];
  /** Business insurance status */
  status?: Maybe<BusinessInsuranceStatus>;
  /** Business insurance id (uuid) */
  id: Scalars['ID'];
  /** Business Insurance reasons of rejection */
  rejection?: Maybe<BusinessInsuranceInputType>;
};

export type BusinessInsuranceInputType = {
  /** Reasons of Rejection */
  reasons?: Maybe<Array<Scalars['String']>>;
  /** Description of rejection */
  description?: Maybe<Scalars['String']>;
};
