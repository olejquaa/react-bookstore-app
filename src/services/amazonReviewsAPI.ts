import { IAmazonRewiesAPI } from "types/types";

const axios = require("axios");

interface IAmazonReviewResponse {
  method: string;
  url: string;
  params: IAmazonResponseParams;
  headers: IAmazonResponseHeaders;
}

interface IAmazonResponseParams {
  page: string;
  domainCode: string;
  asin: string;
  sortBy: string;
  filters: string;
}

interface IAmazonResponseHeaders {
  [APIkey: string]: string;
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cf0551a7c9msh29c635903245754p18f4c9jsn25c08081324b",
    "X-RapidAPI-Host": "axesso-axesso-amazon-data-service-v1.p.rapidapi.com",
  },
};

export const getAmazonReviews = fetch(
  //eslint-disable-next-line
  "https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-lookup-reviews?page=1&domainCode=com&asin=B07YLDNTKB&sortBy=recent&filters=reviewerType%3Davp_only_reviews%3BfilterByStar%3Dfive_star",
  options,
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
