import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "bigux0cz", //process.env.REACT_APP_SANITY_PROJECT_ID, //
  dataset: "production",
  apiVersion: "v2021-10-21", // "v2021-10-21",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
