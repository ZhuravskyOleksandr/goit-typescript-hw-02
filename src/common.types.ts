export type Image = {
  id: string;
  alt_description: string;
  likes: number;
  urls: { [key: string]: string };
  [rest: string]: unknown;
};

export type UnsplashResponseData = {
  results: Image[];
  total: number;
  total_pages: number;
};
