function Table() {
    return (
        <>
            <h3>This is Javier's table</h3>
            <table className="styled-table">
                <tr>
                    <th>Favorite bands</th>
                    <th>Favorite games</th>
                    <th>Favorite shows</th>
                </tr>
                <tr>
                    <td>All Time Low</td>
                    <td>Helldivers 2</td>
                    <td>Jujutsu Kaisen</td>
                </tr>
                <tr>
                    <td>Bring Me The Horizon</td>
                    <td>Rainbow 6 Siege</td>
                    <td>Cowboy Bebop</td>
                </tr>
                <tr>
                    <td>Pierce The Veil</td>
                    <td>Persona</td>
                    <td>Arcane</td>
                </tr>
            </table>
            <br/>
            <h3>This is Alex's table</h3>
            <table id={"alex_table"}>
                <tr>
                    <th>Game Name</th>
                    <th>Total Time Played</th>
                    <th>Last Played</th>
                </tr>
                <tr>
                    <td>Minecraft</td>
                    <td>200+ hours</td>
                    <td>fall 2023</td>
                </tr>
                <tr>
                    <td>Skyrim</td>
                    <td>~400 hours</td>
                    <td>January 2024</td>
                </tr>
                <tr>
                    <td>Halo</td>
                    <td>300+ hours</td>
                    <td>December 2023</td>
                </tr>
                <tr>
                    <td>Chess</td>
                    <td>500+ hours</td>
                    <td>today</td>
                </tr>
            </table>
            <hr/>
        </>

    )
}

export default Table;