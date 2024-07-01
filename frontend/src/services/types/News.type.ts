// Define the structure for a single news item.
export interface INewsItem {
  author: string;  // The author of the news article.
  title: string;   // The title or headline of the news article.
  url: string;     // The URL where the full news article can be accessed.
}

// Define the structure for a collection of news items.
export interface INews {
  news: INewsItem[];  // An array containing multiple news items.
}