import './list.css'
function List() {
    return (
        <>
            <h3>This is Javier's list</h3>
            <ul>
                <li>Favorite music: I enjoy listening to a variety of music,
                    but my favorite genre is rock.
                </li>
                <li>Favorite video games: I enjoy playing a variety of video games,
                    but my favorite game right now is Helldivers 2.
                </li>
                <li>Favorite shows: I enjoy watching a variety of shows,
                    but my favorite show is Jujutsu Kaisen.
                </li>
                <li>One of my favorite foods is eggs</li>
                <li>I live in Massachusetts</li>
            </ul>
            <br/>
            <h3>This is Alex's list</h3>
            <p>I most often play the following games:</p>
            <ul id="alex_list">
                <li>Minecraft</li>
                <li>Skyrim</li>
                <li>Halo</li>
                <li>Chess</li>
                <li>Mobile games</li>
            </ul>
            <hr/>
        </>

    )
}

export default List;