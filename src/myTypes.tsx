export type Quote = {
    _id: number
    content: string
    firstName: string
    lastName: string
    age: number
    image: string
    dead: boolean
}

export type NewQuote = {
    content: string;
    firstName: string;
    lastName: string;
    age: number;
    image: string;
    dead: boolean;
}

export type FormType = HTMLFormElement & {
    text: HTMLInputElement
    reset: () => void
}