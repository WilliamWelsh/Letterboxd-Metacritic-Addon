var OMDbAPIKey = ""; // http://www.omdbapi.com/apikey.aspx

// Colors - https://www.metacritic.com/about-metascores
var negative = "#f00";  // Red
var average = "#fc3";   // Yellow
var positive = "#6c3";  // Green
var tbd = "#ccc";       // Grey

// Get the IMDB href button's <a> href (which contains the IMDB ID)
var IMDbLink = document.getElementsByClassName("micro-button track-event")[0].href;
var IMDbID = IMDbLink.replace('http://www.imdb.com/title/', '').replace('/maindetails', '');

// Get a website as a string
function GetString (url)
{
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

// The movie's page on Metacritic
var MetacriticLink = GetString(IMDbLink.replace('maindetails', 'criticreviews').replace('http:', 'https:'));
MetacriticLink = MetacriticLink.substring(MetacriticLink.indexOf('see-more') + 27);
MetacriticLink = MetacriticLink.substring(0, MetacriticLink.indexOf('?'));


// Create the Rotten Tomatoes button at the bottom and add italics
var button = document.createElement("a"); // Create the <a> tag
button.appendChild(document.createTextNode("Metacritic")); // Set the text
button.href = MetacriticLink; // Set the button to link to the Metacritic page
button.className = "micro-button"; // The class of Letterboxd's micro buttons (so it looks the same)
button.style.marginLeft = "3px"; // Give it a space
var footer = document.getElementsByClassName("micro-button track-event")[1];
footer.parentNode.insertBefore(button, footer.nextSibling); // Add it with the IMDB and TMDB buttons

// This is where the score will go
var filmHeader = document.getElementById("featured-film-header");

// Add a new line (as per request) under the film title
filmHeader.insertBefore(document.createElement("br"), filmHeader.children[1]);

// Get the Metascore from OMDb
var score = JSON.parse(GetString('https://www.omdbapi.com/?apikey=' + OMDbAPIKey + '&tomatoes=true&i=' + IMDbID)).Metascore;

// Create the Metascore <span>

// An a tag to make the score link to the Metascore page
var aTag = document.createElement("a");
aTag.href = MetacriticLink;

// The actual green/red/yellow/grey box
var logo = document.createElement("span");
// Create the same css so it actually looks like the Metascore box
logo.style.borderRadius = "6px";
logo.style.color = "#fff";
logo.style.width = "2em";
logo.style.height = "2em";
logo.style.verticalAlign = "middle";
logo.style.textAlign = "center";
logo.style.fontSize = "15px";
logo.style.display = "inline-block";
logo.style.fontWeight = "bold";
logo.style.fontFamily = "Arial,Helvetica,sans-serif";
logo.style.lineHeight = "2em";

// Set the color
if (score != "N/A") // If there is no score, then it's tdb
{
    logo.innerHTML = score;
    // Change the color based on the score value
    // https://www.metacritic.com/about-metascores
    if (score >= 61)
    {
        logo.style.backgroundColor = positive;
    } 
    else if (score >= 40 && score <= 60)
    {
        logo.style.backgroundColor = average;
    }
    else
    {
        logo.style.backgroundColor = negative;
    }
}
else
{
    logo.innerHTML = "tbd";
    logo.style.backgroundColor = tbd;
}
aTag.appendChild(logo);
filmHeader.appendChild(aTag);