import { useState } from 'react';
import './App.css'
import Title from "./components/title";
import Intro from "./components/intro";
import List from "./components/list";
import Table from "./components/table";
import Form from "./components/form";

function App() {
    const [names, setNames] = useState<string[]>([]);
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name1 = formData.get('name1') as string;
        const name2 = formData.get('name2') as string;
        setNames([name1, name2]);
        setIsFormSubmitted(true);
    };

    return (
        <div className="App">
            <Title />
            {!isFormSubmitted && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name1" placeholder="Enter the first name" required />
                    <input type="text" name="name2" placeholder="Enter the second name" required />
                    <button type="submit">Submit</button>
                </form>
            )}
            {isFormSubmitted && (
                <>
                    <Intro names={names} />
                    <List />
                    <Table />
                    <Form />
                </>
            )}
        </div>
    )
}

export default App