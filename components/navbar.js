async function navbar() {
    return `<div id="navbar">
        <div onclick="window.location.href='homePage.html'" id="headLogo">My Food App</div>
        <input oninput="throttleFunction()" type="text" placeholder="Search Receipe, Meal, Cateogory....." id="search">
        <div onclick="window.location.href='receipeOfDay.html'" id="receipeOfTheDay">Receipe Of The Day</div>
        <div onclick="window.location.href='latestReceipe.html'" id="latestReceipe">Latest Receipe</div>
        <div id="appendDiv"></div>
    </div>
    <hr style="position:fixed"/>`;
}

export default navbar