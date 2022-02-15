import { FormType, NewQuote, Quote } from "../myTypes";

type Props = {
    quotes: Quote[]
    setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>
}


export default function AddQuote({ quotes, setQuotes }: Props) {

    function createQuote(formData: NewQuote) {
        fetch('http://localhost:3001/quotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: formData.firstName,
                lastName: formData.lastName,
                content: formData.content,
                age: formData.age,
                image: formData.image,
                dead: formData.dead,
            })
        })
            .then(resp => resp.json())
            .then(newQuote => {
                const quotesCopy = JSON.parse(
                    JSON.stringify(quotes)
                )
                quotesCopy.push(newQuote)
                setQuotes(quotesCopy)
            })
    }

    return (
        <div className="modal">
            <form className="quote-form"
                onSubmit={(e: React.SyntheticEvent) => {
                    const formEl = e.target as FormType;
                    e.preventDefault()
                    const dataFromForm = {
                        firstName: formEl.firstName.value,
                        lastName: formEl.lastName.value,
                        content: formEl.quote.value,
                        age: Number(formEl.age.value),
                        image: formEl.image.value,
                        dead: formEl.dead.checked
                    }
                    createQuote(dataFromForm)
                    formEl.reset()
                }}
            >
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" name="firstName" maxLength={30} required></input>
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" name="lastName" maxLength={30} required></input>
                <label htmlFor="quote-content">Quote</label>
                <input type="text" id="quote-content" name="quote" maxLength={700} required></input>
                <label htmlFor="age">Age or Age at death</label>
                <input type="number" id="age" name="age" required></input>
                <label htmlFor="image-url">Image</label>
                <input type="url" id="image-url" name="image" placeholder="https://example.com" pattern="https://.*" required></input>
                <div>
                    Is the author dead?
                    <input type="checkbox" id="dead" name="dead" value='dead'></input>
                    <label htmlFor="dead">Yes</label>
                </div>
                <button className="signin-button" type="submit">Add Quote </button>
            </form>
        </div>
    )
}