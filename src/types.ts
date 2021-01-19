export interface Searcher {
    name: string,
    status: string,
    transport: string,
    places: string,
    time: string,
    district: string,
}

export interface Searches {
    id: number,
    status: string,
    city: string,
    name: string,
    age: string,
    date: string | Date,
    coordinator: string,
    people: Searcher[],
}

export interface HeadCell {
    id: string,
    label: string,
    disableSorting?: boolean,
}
