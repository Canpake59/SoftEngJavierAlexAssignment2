function Form() {
    return (
        <form>
            <label htmlFor="text1">Input your favorite band:</label><br/>
            <input type="text" id="text1" name="text1"/><br/>

            <label htmlFor="text2">Input your favorite show:</label><br/>
            <input type="text" id="text2" name="text2"/><br/>

            <input type="checkbox" id="checkbox1" name="checkbox1"/>
            <label htmlFor="checkbox1">I like apples</label><br/>

            <input type="checkbox" id="checkbox2" name="checkbox2"/>
            <label htmlFor="checkbox2">I like milk</label><br/>

            <input type="radio" id="radio1" name="radio" value="radio1"/>
            <label htmlFor="radio1">My favorite color is red</label><br/>

            <input type="radio" id="radio2" name="radio" value="radio2"/>
            <label htmlFor="radio2">My favorite color is blue</label><br/>

            <input type="radio" id="radio3" name="radio" value="radio3"/>
            <label htmlFor="radio3">My favorite color is another color</label><br/>

            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form;