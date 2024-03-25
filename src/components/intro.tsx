type IntroProps = {
    names: string[];
}

function Intro({ names }: IntroProps) {
    return (
        <div>
            <h2> Hello {names[0]} and {names[1]}!</h2>
            <h3>This is Javier DeLeon's Section of the intro</h3>
            <section>
                <p>I am a computer science major here at WPI class of 2025</p>
                <p>I enjoy listening to music, playing video games, and watching shows.</p>
            </section>
            <br/>
            <h3>This is Alexander Stoyanov's Section of the intro</h3>
            <section>
                <p>Hi! I am a CS major at WPI, and I'm interested in cybersecurity.</p>
                <p>I enjoy playing video games and reading manhwa.</p>
                <p>I also like sleeping!</p>
            </section>
            <hr/>
        </div>
    )
}

export default Intro;