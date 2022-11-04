export interface IProducts {
    id: number, 
    name: String, 
    price: number, 
    status: string, 
    prixod: number,
    available: number
}

export interface IPerson {
    id: number,
    name: String,
    status: string,
    summa: number
    id_nomer?: number
}

export interface IOutcome{
    date: string
    id: number
    name: string
    price: number
    product: string
}