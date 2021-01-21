/* WARNING: THIS FILE IS GENERATED, DO NOT EDIT! */
/* eslint-disable */
import { FieldPolicy, FieldReadFunction, TypePolicies } from '@apollo/client/cache';
export type QueryKeySpecifier = (
  | 'user'
  | 'me'
  | 'vendorCategories'
  | 'vendorCategoryCount'
  | 'state'
  | 'states'
  | 'file'
  | 'vendor'
  | 'vendors'
  | 'checkVendorSlugUnique'
  | 'myVendors'
  | 'vendorCities'
  | 'publicSearchFilters'
  | 'vendorsToCsv'
  | 'store'
  | 'storeById'
  | 'stores'
  | 'dma'
  | 'dmaList'
  | 'country'
  | 'countries'
  | 'plans'
  | 'plan'
  | 'docusignConnectUrl'
  | 'docusignConnectStatus'
  | 'purchases'
  | 'purchase'
  | 'businessInsurance'
  | 'businessInsurances'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  me?: FieldPolicy<any> | FieldReadFunction<any>;
  vendorCategories?: FieldPolicy<any> | FieldReadFunction<any>;
  vendorCategoryCount?: FieldPolicy<any> | FieldReadFunction<any>;
  state?: FieldPolicy<any> | FieldReadFunction<any>;
  states?: FieldPolicy<any> | FieldReadFunction<any>;
  file?: FieldPolicy<any> | FieldReadFunction<any>;
  vendor?: FieldPolicy<any> | FieldReadFunction<any>;
  vendors?: FieldPolicy<any> | FieldReadFunction<any>;
  checkVendorSlugUnique?: FieldPolicy<any> | FieldReadFunction<any>;
  myVendors?: FieldPolicy<any> | FieldReadFunction<any>;
  vendorCities?: FieldPolicy<any> | FieldReadFunction<any>;
  publicSearchFilters?: FieldPolicy<any> | FieldReadFunction<any>;
  vendorsToCsv?: FieldPolicy<any> | FieldReadFunction<any>;
  store?: FieldPolicy<any> | FieldReadFunction<any>;
  storeById?: FieldPolicy<any> | FieldReadFunction<any>;
  stores?: FieldPolicy<any> | FieldReadFunction<any>;
  dma?: FieldPolicy<any> | FieldReadFunction<any>;
  dmaList?: FieldPolicy<any> | FieldReadFunction<any>;
  country?: FieldPolicy<any> | FieldReadFunction<any>;
  countries?: FieldPolicy<any> | FieldReadFunction<any>;
  plans?: FieldPolicy<any> | FieldReadFunction<any>;
  plan?: FieldPolicy<any> | FieldReadFunction<any>;
  docusignConnectUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  docusignConnectStatus?: FieldPolicy<any> | FieldReadFunction<any>;
  purchases?: FieldPolicy<any> | FieldReadFunction<any>;
  purchase?: FieldPolicy<any> | FieldReadFunction<any>;
  businessInsurance?: FieldPolicy<any> | FieldReadFunction<any>;
  businessInsurances?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | 'id'
  | 'extId'
  | 'role'
  | 'status'
  | 'email'
  | 'emailVerified'
  | 'phoneNumber'
  | 'phoneNumberVerified'
  | 'firstName'
  | 'lastName'
  | 'fullName'
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | 'vendorUsers'
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  extId?: FieldPolicy<any> | FieldReadFunction<any>;
  role?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  emailVerified?: FieldPolicy<any> | FieldReadFunction<any>;
  phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  phoneNumberVerified?: FieldPolicy<any> | FieldReadFunction<any>;
  firstName?: FieldPolicy<any> | FieldReadFunction<any>;
  lastName?: FieldPolicy<any> | FieldReadFunction<any>;
  fullName?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  vendorUsers?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VendorUserKeySpecifier = (
  | 'id'
  | 'role'
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | 'vendor'
  | 'user'
  | VendorUserKeySpecifier
)[];
export type VendorUserFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  role?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  vendor?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VendorKeySpecifier = (
  | 'id'
  | 'status'
  | 'isPremium'
  | 'premiumExpiresAt'
  | 'contractId'
  | 'contractUrl'
  | 'isContractSigned'
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | 'profile'
  | 'pendingProfile'
  | 'vendorUsers'
  | 'purchases'
  | 'vendorStores'
  | 'files'
  | 'customerId'
  | 'isSolvent'
  | 'stores'
  | VendorKeySpecifier
)[];
export type VendorFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  isPremium?: FieldPolicy<any> | FieldReadFunction<any>;
  premiumExpiresAt?: FieldPolicy<any> | FieldReadFunction<any>;
  contractId?: FieldPolicy<any> | FieldReadFunction<any>;
  contractUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  isContractSigned?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  profile?: FieldPolicy<any> | FieldReadFunction<any>;
  pendingProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  vendorUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  purchases?: FieldPolicy<any> | FieldReadFunction<any>;
  vendorStores?: FieldPolicy<any> | FieldReadFunction<any>;
  files?: FieldPolicy<any> | FieldReadFunction<any>;
  customerId?: FieldPolicy<any> | FieldReadFunction<any>;
  isSolvent?: FieldPolicy<any> | FieldReadFunction<any>;
  stores?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VendorProfileKeySpecifier = (
  | 'id'
  | 'category'
  | 'status'
  | 'name'
  | 'description'
  | 'title'
  | 'corporateEmail'
  | 'corporatePhoneNumber'
  | 'publicPhoneNumber'
  | 'contactFirstName'
  | 'contactLastName'
  | 'yearsInBusiness'
  | 'info'
  | 'address_1'
  | 'address_2'
  | 'city'
  | 'zip'
  | 'location'
  | 'slug'
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | 'state'
  | 'country'
  | 'logo'
  | 'images'
  | 'awards'
  | 'venue'
  | 'vendor'
  | 'additionalInfo'
  | 'schedule'
  | 'businessInsurances'
  | VendorProfileKeySpecifier
)[];
export type VendorProfileFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  corporateEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  corporatePhoneNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  publicPhoneNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  contactFirstName?: FieldPolicy<any> | FieldReadFunction<any>;
  contactLastName?: FieldPolicy<any> | FieldReadFunction<any>;
  yearsInBusiness?: FieldPolicy<any> | FieldReadFunction<any>;
  info?: FieldPolicy<any> | FieldReadFunction<any>;
  address_1?: FieldPolicy<any> | FieldReadFunction<any>;
  address_2?: FieldPolicy<any> | FieldReadFunction<any>;
  city?: FieldPolicy<any> | FieldReadFunction<any>;
  zip?: FieldPolicy<any> | FieldReadFunction<any>;
  location?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  state?: FieldPolicy<any> | FieldReadFunction<any>;
  country?: FieldPolicy<any> | FieldReadFunction<any>;
  logo?: FieldPolicy<any> | FieldReadFunction<any>;
  images?: FieldPolicy<any> | FieldReadFunction<any>;
  awards?: FieldPolicy<any> | FieldReadFunction<any>;
  venue?: FieldPolicy<any> | FieldReadFunction<any>;
  vendor?: FieldPolicy<any> | FieldReadFunction<any>;
  additionalInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  schedule?: FieldPolicy<any> | FieldReadFunction<any>;
  businessInsurances?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LocationObjectTypeKeySpecifier = ('x' | 'y' | LocationObjectTypeKeySpecifier)[];
export type LocationObjectTypeFieldPolicy = {
  x?: FieldPolicy<any> | FieldReadFunction<any>;
  y?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StateKeySpecifier = ('id' | 'name' | 'taxRate' | 'stripeTaxId' | 'country' | StateKeySpecifier)[];
export type StateFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  taxRate?: FieldPolicy<any> | FieldReadFunction<any>;
  stripeTaxId?: FieldPolicy<any> | FieldReadFunction<any>;
  country?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CountryKeySpecifier = ('id' | 'name' | 'status' | 'states' | CountryKeySpecifier)[];
export type CountryFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  states?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FileKeySpecifier = (
  | 'id'
  | 'type'
  | 'status'
  | 'name'
  | 'url'
  | 'bucket'
  | 'key'
  | 'size'
  | 'path'
  | 'ext'
  | 'mime'
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | 'vendor'
  | 'thumbs'
  | FileKeySpecifier
)[];
export type FileFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
  bucket?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  ext?: FieldPolicy<any> | FieldReadFunction<any>;
  mime?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  vendor?: FieldPolicy<any> | FieldReadFunction<any>;
  thumbs?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ThumbKeySpecifier = (
  | 'id'
  | 'type'
  | 'url'
  | 'bucket'
  | 'key'
  | 'height'
  | 'width'
  | 'size'
  | 'createdAt'
  | 'file'
  | ThumbKeySpecifier
)[];
export type ThumbFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
  bucket?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  height?: FieldPolicy<any> | FieldReadFunction<any>;
  width?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  file?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdditionalInfoObjectTypeKeySpecifier = ('links' | AdditionalInfoObjectTypeKeySpecifier)[];
export type AdditionalInfoObjectTypeFieldPolicy = {
  links?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SocialLinkObjectTypeKeySpecifier = ('key' | 'value' | SocialLinkObjectTypeKeySpecifier)[];
export type SocialLinkObjectTypeFieldPolicy = {
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ScheduleObjectTypeKeySpecifier = (
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | ScheduleObjectTypeKeySpecifier
)[];
export type ScheduleObjectTypeFieldPolicy = {
  sunday?: FieldPolicy<any> | FieldReadFunction<any>;
  monday?: FieldPolicy<any> | FieldReadFunction<any>;
  tuesday?: FieldPolicy<any> | FieldReadFunction<any>;
  wednesday?: FieldPolicy<any> | FieldReadFunction<any>;
  thursday?: FieldPolicy<any> | FieldReadFunction<any>;
  friday?: FieldPolicy<any> | FieldReadFunction<any>;
  saturday?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type WorkDayObjectTypeKeySpecifier = ('isChecked' | 'from' | 'to' | WorkDayObjectTypeKeySpecifier)[];
export type WorkDayObjectTypeFieldPolicy = {
  isChecked?: FieldPolicy<any> | FieldReadFunction<any>;
  from?: FieldPolicy<any> | FieldReadFunction<any>;
  to?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type WorkTimeObjectTypeKeySpecifier = ('time' | 'period' | WorkTimeObjectTypeKeySpecifier)[];
export type WorkTimeObjectTypeFieldPolicy = {
  time?: FieldPolicy<any> | FieldReadFunction<any>;
  period?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PaginatedBusinessInsuranceKeySpecifier = (
  | 'items'
  | 'itemCount'
  | 'totalItems'
  | 'pageCount'
  | 'next'
  | 'previous'
  | PaginatedBusinessInsuranceKeySpecifier
)[];
export type PaginatedBusinessInsuranceFieldPolicy = {
  items?: FieldPolicy<any> | FieldReadFunction<any>;
  itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
  totalItems?: FieldPolicy<any> | FieldReadFunction<any>;
  pageCount?: FieldPolicy<any> | FieldReadFunction<any>;
  next?: FieldPolicy<any> | FieldReadFunction<any>;
  previous?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BusinessInsuranceKeySpecifier = (
  | 'id'
  | 'status'
  | 'certificate'
  | 'expirationDate'
  | 'effectiveDate'
  | 'providerName'
  | 'file'
  | 'verifiedBy'
  | 'verifiedAt'
  | 'rejection'
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | 'vendorProfile'
  | BusinessInsuranceKeySpecifier
)[];
export type BusinessInsuranceFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  certificate?: FieldPolicy<any> | FieldReadFunction<any>;
  expirationDate?: FieldPolicy<any> | FieldReadFunction<any>;
  effectiveDate?: FieldPolicy<any> | FieldReadFunction<any>;
  providerName?: FieldPolicy<any> | FieldReadFunction<any>;
  file?: FieldPolicy<any> | FieldReadFunction<any>;
  verifiedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  verifiedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  rejection?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  vendorProfile?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BusinessInsuranceObjectTypeKeySpecifier = (
  | 'reasons'
  | 'description'
  | BusinessInsuranceObjectTypeKeySpecifier
)[];
export type BusinessInsuranceObjectTypeFieldPolicy = {
  reasons?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PurchaseKeySpecifier = (
  | 'id'
  | 'type'
  | 'status'
  | 'currency'
  | 'total'
  | 'taxRate'
  | 'tax'
  | 'subtotal'
  | 'transactionRate'
  | 'transactionFee'
  | 'stripeTransactionId'
  | 'stripeTransactionInfo'
  | 'receiptUrl'
  | 'note'
  | 'vendor'
  | 'plan'
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | PurchaseKeySpecifier
)[];
export type PurchaseFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  currency?: FieldPolicy<any> | FieldReadFunction<any>;
  total?: FieldPolicy<any> | FieldReadFunction<any>;
  taxRate?: FieldPolicy<any> | FieldReadFunction<any>;
  tax?: FieldPolicy<any> | FieldReadFunction<any>;
  subtotal?: FieldPolicy<any> | FieldReadFunction<any>;
  transactionRate?: FieldPolicy<any> | FieldReadFunction<any>;
  transactionFee?: FieldPolicy<any> | FieldReadFunction<any>;
  stripeTransactionId?: FieldPolicy<any> | FieldReadFunction<any>;
  stripeTransactionInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  receiptUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  note?: FieldPolicy<any> | FieldReadFunction<any>;
  vendor?: FieldPolicy<any> | FieldReadFunction<any>;
  plan?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedBy?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PlanKeySpecifier = (
  | 'id'
  | 'status'
  | 'name'
  | 'description'
  | 'currency'
  | 'amount'
  | 'interval'
  | 'intervalCount'
  | 'trialPeriodDays'
  | 'stripePlanId'
  | 'braintreePlanId'
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | PlanKeySpecifier
)[];
export type PlanFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  currency?: FieldPolicy<any> | FieldReadFunction<any>;
  amount?: FieldPolicy<any> | FieldReadFunction<any>;
  interval?: FieldPolicy<any> | FieldReadFunction<any>;
  intervalCount?: FieldPolicy<any> | FieldReadFunction<any>;
  trialPeriodDays?: FieldPolicy<any> | FieldReadFunction<any>;
  stripePlanId?: FieldPolicy<any> | FieldReadFunction<any>;
  braintreePlanId?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedBy?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VendorStoreKeySpecifier = (
  | 'subscriptionStatus'
  | 'id'
  | 'cancelComment'
  | 'billingPeriodEndDate'
  | 'yearExpirationDate'
  | 'amount'
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | 'vendor'
  | 'store'
  | 'subscriptionId'
  | VendorStoreKeySpecifier
)[];
export type VendorStoreFieldPolicy = {
  subscriptionStatus?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  cancelComment?: FieldPolicy<any> | FieldReadFunction<any>;
  billingPeriodEndDate?: FieldPolicy<any> | FieldReadFunction<any>;
  yearExpirationDate?: FieldPolicy<any> | FieldReadFunction<any>;
  amount?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  vendor?: FieldPolicy<any> | FieldReadFunction<any>;
  store?: FieldPolicy<any> | FieldReadFunction<any>;
  subscriptionId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StoreKeySpecifier = (
  | 'id'
  | 'status'
  | 'storeId'
  | 'name'
  | 'dma'
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | 'plan'
  | 'paymentDetails'
  | StoreKeySpecifier
)[];
export type StoreFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  storeId?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  dma?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  plan?: FieldPolicy<any> | FieldReadFunction<any>;
  paymentDetails?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DmaKeySpecifier = ('id' | 'rank' | 'area' | 'state' | 'stores' | DmaKeySpecifier)[];
export type DmaFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  rank?: FieldPolicy<any> | FieldReadFunction<any>;
  area?: FieldPolicy<any> | FieldReadFunction<any>;
  state?: FieldPolicy<any> | FieldReadFunction<any>;
  stores?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PaymentDetailsKeySpecifier = (
  | 'id'
  | 'subscriptionStatus'
  | 'cancelComment'
  | 'amount'
  | 'yearExpirationDate'
  | PaymentDetailsKeySpecifier
)[];
export type PaymentDetailsFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  subscriptionStatus?: FieldPolicy<any> | FieldReadFunction<any>;
  cancelComment?: FieldPolicy<any> | FieldReadFunction<any>;
  amount?: FieldPolicy<any> | FieldReadFunction<any>;
  yearExpirationDate?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VendorCategoryKeySpecifier = ('id' | 'rows' | VendorCategoryKeySpecifier)[];
export type VendorCategoryFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  rows?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VendorCategoryRowKeySpecifier = ('name' | 'items' | VendorCategoryRowKeySpecifier)[];
export type VendorCategoryRowFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  items?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VendorCategoryColKeySpecifier = ('columns' | 'items' | VendorCategoryColKeySpecifier)[];
export type VendorCategoryColFieldPolicy = {
  columns?: FieldPolicy<any> | FieldReadFunction<any>;
  items?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VendorCategoryFieldKeySpecifier = (
  | 'id'
  | 'name'
  | 'type'
  | 'isActive'
  | 'isRequired'
  | 'defaultValue'
  | 'values'
  | 'placeholder'
  | 'hasOther'
  | VendorCategoryFieldKeySpecifier
)[];
export type VendorCategoryFieldFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  isActive?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  values?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  hasOther?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VendorCategoryFieldValueKeySpecifier = ('id' | 'name' | VendorCategoryFieldValueKeySpecifier)[];
export type VendorCategoryFieldValueFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VendorCategoryCountKeySpecifier = ('category' | 'count' | VendorCategoryCountKeySpecifier)[];
export type VendorCategoryCountFieldPolicy = {
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  count?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VendorPaginationKeySpecifier = (
  | 'items'
  | 'itemCount'
  | 'totalItems'
  | 'pageCount'
  | 'next'
  | 'previous'
  | VendorPaginationKeySpecifier
)[];
export type VendorPaginationFieldPolicy = {
  items?: FieldPolicy<any> | FieldReadFunction<any>;
  itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
  totalItems?: FieldPolicy<any> | FieldReadFunction<any>;
  pageCount?: FieldPolicy<any> | FieldReadFunction<any>;
  next?: FieldPolicy<any> | FieldReadFunction<any>;
  previous?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CityKeySpecifier = ('name' | CityKeySpecifier)[];
export type CityFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StorePaginationKeySpecifier = (
  | 'items'
  | 'itemCount'
  | 'totalItems'
  | 'pageCount'
  | 'next'
  | 'previous'
  | StorePaginationKeySpecifier
)[];
export type StorePaginationFieldPolicy = {
  items?: FieldPolicy<any> | FieldReadFunction<any>;
  itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
  totalItems?: FieldPolicy<any> | FieldReadFunction<any>;
  pageCount?: FieldPolicy<any> | FieldReadFunction<any>;
  next?: FieldPolicy<any> | FieldReadFunction<any>;
  previous?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PlanPaginationKeySpecifier = (
  | 'items'
  | 'itemCount'
  | 'totalItems'
  | 'pageCount'
  | 'next'
  | 'previous'
  | PlanPaginationKeySpecifier
)[];
export type PlanPaginationFieldPolicy = {
  items?: FieldPolicy<any> | FieldReadFunction<any>;
  itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
  totalItems?: FieldPolicy<any> | FieldReadFunction<any>;
  pageCount?: FieldPolicy<any> | FieldReadFunction<any>;
  next?: FieldPolicy<any> | FieldReadFunction<any>;
  previous?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PurchasePaginationKeySpecifier = (
  | 'items'
  | 'itemCount'
  | 'totalItems'
  | 'pageCount'
  | 'next'
  | 'previous'
  | PurchasePaginationKeySpecifier
)[];
export type PurchasePaginationFieldPolicy = {
  items?: FieldPolicy<any> | FieldReadFunction<any>;
  itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
  totalItems?: FieldPolicy<any> | FieldReadFunction<any>;
  pageCount?: FieldPolicy<any> | FieldReadFunction<any>;
  next?: FieldPolicy<any> | FieldReadFunction<any>;
  previous?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BusinessInsurancePaginationKeySpecifier = (
  | 'items'
  | 'itemCount'
  | 'totalItems'
  | 'pageCount'
  | 'next'
  | 'previous'
  | BusinessInsurancePaginationKeySpecifier
)[];
export type BusinessInsurancePaginationFieldPolicy = {
  items?: FieldPolicy<any> | FieldReadFunction<any>;
  itemCount?: FieldPolicy<any> | FieldReadFunction<any>;
  totalItems?: FieldPolicy<any> | FieldReadFunction<any>;
  pageCount?: FieldPolicy<any> | FieldReadFunction<any>;
  next?: FieldPolicy<any> | FieldReadFunction<any>;
  previous?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | 'completeUser'
  | 'updateVendorProfile'
  | 'updateFile'
  | 'uploadFiles'
  | 'createVendor'
  | 'updateVendor'
  | 'deleteVendor'
  | 'processPayment'
  | 'unsubscribeVendorStore'
  | 'revertSubscriptionVendorStore'
  | 'createStore'
  | 'updateStore'
  | 'createDocusignContract'
  | 'connectDocusign'
  | 'resendEnvelope'
  | 'createBusinessInsurance'
  | 'updateBusinessInsurance'
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  completeUser?: FieldPolicy<any> | FieldReadFunction<any>;
  updateVendorProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  updateFile?: FieldPolicy<any> | FieldReadFunction<any>;
  uploadFiles?: FieldPolicy<any> | FieldReadFunction<any>;
  createVendor?: FieldPolicy<any> | FieldReadFunction<any>;
  updateVendor?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteVendor?: FieldPolicy<any> | FieldReadFunction<any>;
  processPayment?: FieldPolicy<any> | FieldReadFunction<any>;
  unsubscribeVendorStore?: FieldPolicy<any> | FieldReadFunction<any>;
  revertSubscriptionVendorStore?: FieldPolicy<any> | FieldReadFunction<any>;
  createStore?: FieldPolicy<any> | FieldReadFunction<any>;
  updateStore?: FieldPolicy<any> | FieldReadFunction<any>;
  createDocusignContract?: FieldPolicy<any> | FieldReadFunction<any>;
  connectDocusign?: FieldPolicy<any> | FieldReadFunction<any>;
  resendEnvelope?: FieldPolicy<any> | FieldReadFunction<any>;
  createBusinessInsurance?: FieldPolicy<any> | FieldReadFunction<any>;
  updateBusinessInsurance?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DocusignContractKeySpecifier = ('id' | 'url' | DocusignContractKeySpecifier)[];
export type DocusignContractFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TypedTypePolicies = TypePolicies & {
  Query?: {
    keyFields: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: QueryFieldPolicy;
  };
  User?: {
    keyFields: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UserFieldPolicy;
  };
  VendorUser?: {
    keyFields: false | VendorUserKeySpecifier | (() => undefined | VendorUserKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: VendorUserFieldPolicy;
  };
  Vendor?: {
    keyFields: false | VendorKeySpecifier | (() => undefined | VendorKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: VendorFieldPolicy;
  };
  VendorProfile?: {
    keyFields: false | VendorProfileKeySpecifier | (() => undefined | VendorProfileKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: VendorProfileFieldPolicy;
  };
  LocationObjectType?: {
    keyFields: false | LocationObjectTypeKeySpecifier | (() => undefined | LocationObjectTypeKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: LocationObjectTypeFieldPolicy;
  };
  State?: {
    keyFields: false | StateKeySpecifier | (() => undefined | StateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: StateFieldPolicy;
  };
  Country?: {
    keyFields: false | CountryKeySpecifier | (() => undefined | CountryKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: CountryFieldPolicy;
  };
  File?: {
    keyFields: false | FileKeySpecifier | (() => undefined | FileKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: FileFieldPolicy;
  };
  Thumb?: {
    keyFields: false | ThumbKeySpecifier | (() => undefined | ThumbKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: ThumbFieldPolicy;
  };
  AdditionalInfoObjectType?: {
    keyFields: false | AdditionalInfoObjectTypeKeySpecifier | (() => undefined | AdditionalInfoObjectTypeKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: AdditionalInfoObjectTypeFieldPolicy;
  };
  SocialLinkObjectType?: {
    keyFields: false | SocialLinkObjectTypeKeySpecifier | (() => undefined | SocialLinkObjectTypeKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SocialLinkObjectTypeFieldPolicy;
  };
  ScheduleObjectType?: {
    keyFields: false | ScheduleObjectTypeKeySpecifier | (() => undefined | ScheduleObjectTypeKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: ScheduleObjectTypeFieldPolicy;
  };
  WorkDayObjectType?: {
    keyFields: false | WorkDayObjectTypeKeySpecifier | (() => undefined | WorkDayObjectTypeKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: WorkDayObjectTypeFieldPolicy;
  };
  WorkTimeObjectType?: {
    keyFields: false | WorkTimeObjectTypeKeySpecifier | (() => undefined | WorkTimeObjectTypeKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: WorkTimeObjectTypeFieldPolicy;
  };
  PaginatedBusinessInsurance?: {
    keyFields:
      | false
      | PaginatedBusinessInsuranceKeySpecifier
      | (() => undefined | PaginatedBusinessInsuranceKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PaginatedBusinessInsuranceFieldPolicy;
  };
  BusinessInsurance?: {
    keyFields: false | BusinessInsuranceKeySpecifier | (() => undefined | BusinessInsuranceKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: BusinessInsuranceFieldPolicy;
  };
  BusinessInsuranceObjectType?: {
    keyFields:
      | false
      | BusinessInsuranceObjectTypeKeySpecifier
      | (() => undefined | BusinessInsuranceObjectTypeKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: BusinessInsuranceObjectTypeFieldPolicy;
  };
  Purchase?: {
    keyFields: false | PurchaseKeySpecifier | (() => undefined | PurchaseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PurchaseFieldPolicy;
  };
  Plan?: {
    keyFields: false | PlanKeySpecifier | (() => undefined | PlanKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PlanFieldPolicy;
  };
  VendorStore?: {
    keyFields: false | VendorStoreKeySpecifier | (() => undefined | VendorStoreKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: VendorStoreFieldPolicy;
  };
  Store?: {
    keyFields: false | StoreKeySpecifier | (() => undefined | StoreKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: StoreFieldPolicy;
  };
  Dma?: {
    keyFields: false | DmaKeySpecifier | (() => undefined | DmaKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: DmaFieldPolicy;
  };
  PaymentDetails?: {
    keyFields: false | PaymentDetailsKeySpecifier | (() => undefined | PaymentDetailsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PaymentDetailsFieldPolicy;
  };
  VendorCategory?: {
    keyFields: false | VendorCategoryKeySpecifier | (() => undefined | VendorCategoryKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: VendorCategoryFieldPolicy;
  };
  VendorCategoryRow?: {
    keyFields: false | VendorCategoryRowKeySpecifier | (() => undefined | VendorCategoryRowKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: VendorCategoryRowFieldPolicy;
  };
  VendorCategoryCol?: {
    keyFields: false | VendorCategoryColKeySpecifier | (() => undefined | VendorCategoryColKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: VendorCategoryColFieldPolicy;
  };
  VendorCategoryField?: {
    keyFields: false | VendorCategoryFieldKeySpecifier | (() => undefined | VendorCategoryFieldKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: VendorCategoryFieldFieldPolicy;
  };
  VendorCategoryFieldValue?: {
    keyFields: false | VendorCategoryFieldValueKeySpecifier | (() => undefined | VendorCategoryFieldValueKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: VendorCategoryFieldValueFieldPolicy;
  };
  VendorCategoryCount?: {
    keyFields: false | VendorCategoryCountKeySpecifier | (() => undefined | VendorCategoryCountKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: VendorCategoryCountFieldPolicy;
  };
  VendorPagination?: {
    keyFields: false | VendorPaginationKeySpecifier | (() => undefined | VendorPaginationKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: VendorPaginationFieldPolicy;
  };
  City?: {
    keyFields: false | CityKeySpecifier | (() => undefined | CityKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: CityFieldPolicy;
  };
  StorePagination?: {
    keyFields: false | StorePaginationKeySpecifier | (() => undefined | StorePaginationKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: StorePaginationFieldPolicy;
  };
  PlanPagination?: {
    keyFields: false | PlanPaginationKeySpecifier | (() => undefined | PlanPaginationKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PlanPaginationFieldPolicy;
  };
  PurchasePagination?: {
    keyFields: false | PurchasePaginationKeySpecifier | (() => undefined | PurchasePaginationKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: PurchasePaginationFieldPolicy;
  };
  BusinessInsurancePagination?: {
    keyFields:
      | false
      | BusinessInsurancePaginationKeySpecifier
      | (() => undefined | BusinessInsurancePaginationKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: BusinessInsurancePaginationFieldPolicy;
  };
  Mutation?: {
    keyFields: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: MutationFieldPolicy;
  };
  DocusignContract?: {
    keyFields: false | DocusignContractKeySpecifier | (() => undefined | DocusignContractKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: DocusignContractFieldPolicy;
  };
};
