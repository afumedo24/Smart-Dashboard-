// Interface representing pricing details for different groups of people.
// had to add Preis as a type because otherwise the TS compiler complained
interface Preis {
  students: number | null;    // Price for students, null if not applicable.
  employees: number | null;   // Price for employees, null if not applicable.
  pupils: number | null;      // Price for pupils, null if not applicable.
  others: number | null;      // Price for other groups, null if not applicable.
}

// Interface representing a menu item fetched from the MensaAPI.
export interface IMenu {
  category: string;     // Category or type of menu item.
  id: number;           // Unique identifier for the menu item.
  name: string;         // Name or title of the menu item.
  notes: string[];      // Array of additional notes or descriptions for the menu item.
  prices: Preis;        // Pricing details for different groups of people.
}