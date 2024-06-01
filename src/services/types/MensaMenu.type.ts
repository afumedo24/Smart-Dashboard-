// the type of the data that is fetched from the MensaAPI

// NOTE für mich: musste das hier auch als type deklarieren, weil sonst TS compiler
//                sich beschwert hat bei der MenuCardComponent wo ich den Preis anzeige
interface Preis {
  students: number | null
  employees: number | null
  pupils: number | null
  others: number | null
}

export interface Menu {
  category: string
  id: number
  name: string
  notes: string[]
  prices: Preis
}
