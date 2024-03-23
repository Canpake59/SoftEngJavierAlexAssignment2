type IntroProps = {
    names: string[];
}
function Intro({ names }: IntroProps) {
    return (
        <div>
            <h2> Hello {names[0]} and {names[1]}!</h2>
            <h3>This is Javier DeLeon's Section of the website</h3>
            <p>I am a computer science major here at WPI class of 2025</p>
            <p>I enjoy listening to music, playing video games, and watching shows.</p>
        </div>

    )
}

export default Intro;