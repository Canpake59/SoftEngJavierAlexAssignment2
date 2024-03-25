function Form() {
    return (
        <>
                <h3>This is Javier's form</h3>
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
                <br/>
                <h3>This is Alex's form</h3>
                <form>
                        <label htmlFor="fname">First Name</label><br/>
                        <input type="text" id="fname" name="fname"/><br/>
                        <label htmlFor="lname">Last Name</label><br/>
                        <input type="text" id="lname" name="lname"/><br/>
                        <input type="checkbox" id="student" name="student" value="Student"/>
                        <label htmlFor="student"> Are you a student?</label><br/>
                        <input type="checkbox" id="tired" name="tired" value="tired"/>
                        <label htmlFor="tired"> Are you tired?</label><br/>
                        <p>How many classes are you taking?</p>
                        <input type="radio" id="2classes" name="num_classes" value="2 classes"/>
                        <label htmlFor="2classes">2 classes</label><br/>
                        <input type="radio" id="3classes" name="num_classes" value="3 classes"/>
                        <label htmlFor="3classes">3 classes</label><br/>
                        <input type="radio" id="4classes" name="num_classes" value="4 classes"/>
                        <label htmlFor="4classes">4 classes</label><br/>
                        <input type="submit" value="Submit"/>
                </form>
        </>

    )
}

export default Form;