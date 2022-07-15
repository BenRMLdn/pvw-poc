export interface Property {
  addedOrReduced: string;
  auction: boolean;
  bathrooms: number;
  bedrooms: number;
  channel: string;
  commercial: boolean;
  contactUrl: string;
  countryCode: string;
  customer: Customer;
  development: boolean;
  displayAddress: string;
  displaySize: string;
  displayStatus: string;
  distance: any;
  enhancedListing: boolean;
  featuredProperty: boolean;
  feesApply: boolean;
  feesApplyText: any;
  firstVisibleDate: string;
  formattedBranchName: string;
  formattedDistance: string;
  hasBrandPlus: boolean;
  heading: string;
  hidden: boolean;
  id: number;
  isRecent: boolean;
  keywordMatchType: string;
  keywords: Array<string>;
  listingUpdate: ListingUpdate;
  location: Location;
  lozengeModel: LozengeModel;
  numberOfFloorplans: number;
  numberOfImages: number;
  numberOfVirtualTours: number;
  onlineViewingsAvailable: boolean;
  premiumListing: boolean;
  price: Price;
  productLabel: ProductLabel;
  propertyImages: PropertyImages;
  propertySubType: string;
  propertyTypeFullDescription: string;
  propertyUrl: string;
  residential: boolean;
  saved: boolean;
  showOnMap: boolean;
  staticMapUrl: string;
  students: boolean;
  summary: string;
  transactionType: string;
}

interface Customer {
  branchDisplayName: string;
  branchId: number;
  branchLandingPageUrl: string;
  branchName: string;
  brandPlusLogoURI: string;
  brandPlusLogoUrl: string;
  brandTradingName: string;
  buildToRent: boolean;
  buildToRentBenefits: Array<string>;
  commercial: boolean;
  contactTelephone: string;
  development: boolean;
  developmentContent: { headline: string; features: Array<string> };
  enhancedListing: boolean;
  showOnMap: boolean;
  showReducedProperties: boolean;
}

export interface ListingUpdate {
  listingUpdateDate: string;
  listingUpdateReason: string;
}

interface Location {
  latitude: number;
  longitude: number;
}

export interface LozengeModel {
  matchingLozenges: Array<any>;
}

export interface Price {
  amount: number;
  currencyCode: string;
  displayPrices: Array<DisplayPrices>;
  frequency: string;
}

interface DisplayPrices {
  displayPrice: string;
  displayPriceQualifier: string;
}

export interface ProductLabel {
  productLabelText: string;
  spotlightLabel: boolean;
}

export interface PropertyImages {
  images: Array<PropertyImage>;
  mainImageSrc: string;
  mainMapImageSrc: string;
}

export interface PropertyImage {
  caption: string;
  srcUrl: string;
  url: string;
}
