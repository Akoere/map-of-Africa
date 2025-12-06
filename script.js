// --- 1. THE DATA ---
const countryData = {
    "DZ": { name: "Algeria", population: "47 million", president: "Abdelmadjid Tebboune", independence: "July 5, 1962", colonizer: "France", famous: "Algiers, Sahara Desert, Roman Ruins", rank: "1st largest in Africa (Area)" },
    "AO": { name: "Angola", population: "37 million", president: "João Lourenço", independence: "November 11, 1975", colonizer: "Portugal", famous: "Luanda, Kalandula Falls", rank: "7th largest in Africa" },
    "BJ": { name: "Benin", population: "14 million", president: "Patrice Talon", independence: "August 1, 1960", colonizer: "France", famous: "Vodun (Voodoo) Origins, Pendjari Park", rank: "37th largest in Africa" },
    "BW": { name: "Botswana", population: "2.5 million", president: "Duma Boko", independence: "September 30, 1966", colonizer: "United Kingdom", famous: "Okavango Delta, World's Largest Diamond Mines", rank: "21st largest in Africa" },
    "BF": { name: "Burkina Faso", population: "23 million", president: "Ibrahim Traoré (Interim)", independence: "August 5, 1960", colonizer: "France", famous: "FESPACO Film Festival, Cotton", rank: "28th largest in Africa" },
    "BI": { name: "Burundi", population: "13 million", president: "Évariste Ndayishimiye", independence: "July 1, 1962", colonizer: "Belgium", famous: "Lake Tanganyika, Drummers of Burundi", rank: "44th largest in Africa" },
    "CV": { name: "Cabo Verde", population: "0.6 million", president: "José Maria Neves", independence: "July 5, 1975", colonizer: "Portugal", famous: "Volcanic Islands, Morna Music", rank: "49th largest in Africa" },
    "CM": { name: "Cameroon", population: "29 million", president: "Paul Biya", independence: "Jan 1, 1960 (Fr) / Oct 1, 1961 (UK)", colonizer: "France / United Kingdom", famous: "Mount Cameroon, Makossa Music", rank: "23rd largest in Africa" },
    "CF": { name: "Central African Republic", population: "6 million", president: "Faustin-Archange Touadéra", independence: "August 13, 1960", colonizer: "France", famous: "Dzanga-Sangha Reserve, Diamonds", rank: "19th largest in Africa" },
    "TD": { name: "Chad", population: "18 million", president: "Mahamat Idriss Déby", independence: "August 11, 1960", colonizer: "France", famous: "Lake Chad, Sahara Desert", rank: "5th largest in Africa" },
    "KM": { name: "Comoros", population: "0.9 million", president: "Azali Assoumani", independence: "July 6, 1975", colonizer: "France", famous: "Perfume (Ylang-Ylang), Beaches", rank: "51st largest in Africa" },
    "CD": { name: "DR Congo", population: "102 million", president: "Félix Tshisekedi", independence: "June 30, 1960", colonizer: "Belgium", famous: "Virunga Park, Gorillas, Minerals", rank: "2nd largest in Africa (Area)" },
    "CG": { name: "Republic of the Congo", population: "6 million", president: "Denis Sassou Nguesso", independence: "August 15, 1960", colonizer: "France", famous: "Brazzaville, Rainforests", rank: "26th largest in Africa" },
    "CI": { name: "Côte d'Ivoire", population: "29 million", president: "Alassane Ouattara", independence: "August 7, 1960", colonizer: "France", famous: "Cocoa Production (World Leader)", rank: "27th largest in Africa" },
    "DJ": { name: "Djibouti", population: "1.1 million", president: "Ismaïl Omar Guelleh", independence: "June 27, 1977", colonizer: "France", famous: "Red Sea Strategic Port, Lake Assal", rank: "46th largest in Africa" },
    "EG": { name: "Egypt", population: "112 million", president: "Abdel Fattah el-Sisi", independence: "February 28, 1922", colonizer: "United Kingdom", famous: "Pyramids of Giza, Nile River", rank: "12th largest in Africa (Area)" },
    "GQ": { name: "Equatorial Guinea", population: "1.7 million", president: "Teodoro Obiang Nguema", independence: "October 12, 1968", colonizer: "Spain", famous: "Oil Wealth, Bioko Island", rank: "43rd largest in Africa" },
    "ER": { name: "Eritrea", population: "3.7 million", president: "Isaias Afwerki", independence: "May 24, 1993", colonizer: "Italy / UK (Admin)", famous: "Asmara (Art Deco Architecture)", rank: "36th largest in Africa" },
    "ET": { name: "Ethiopia", population: "126 million", president: "Taye Atske Selassie", independence: "Ancient / Never Colonized", colonizer: "Italy (Occupied 1936-41)", famous: "Origin of Coffee, Rock-Hewn Churches", rank: "10th largest (Area) / 2nd Populous" },
    "GA": { name: "Gabon", population: "2.4 million", president: "Brice Oligui Nguema", independence: "August 17, 1960", colonizer: "France", famous: "Loango National Park, Oil", rank: "29th largest in Africa" },
    "GM": { name: "Gambia", population: "2.7 million", president: "Adama Barrow", independence: "February 18, 1965", colonizer: "United Kingdom", famous: "River Gambia, Roots History", rank: "Smallest mainland country" },
    "GH": { name: "Ghana", population: "34 million", president: "John Dramani Mahama", independence: "March 6, 1957", colonizer: "United Kingdom", famous: "Gold Coast, Kente Cloth, Jollof", rank: "32nd largest in Africa" },
    "GN": { name: "Guinea", population: "14 million", president: "Mamady Doumbouya", independence: "October 2, 1958", colonizer: "France", famous: "Bauxite Reserves, Nimba Mountains", rank: "30th largest in Africa" },
    "GW": { name: "Guinea-Bissau", population: "2.1 million", president: "Umaro Sissoco Embaló", independence: "September 24, 1973", colonizer: "Portugal", famous: "Bijagós Archipelago, Cashew Nuts", rank: "41st largest in Africa" },
    "KE": { name: "Kenya", population: "56 million", president: "William Ruto", independence: "December 12, 1963", colonizer: "United Kingdom", famous: "Maasai Mara, Athletics", rank: "22nd largest in Africa" },
    "LS": { name: "Lesotho", population: "2.3 million", president: "Ntsokoane Samuel Matekane (PM)", independence: "October 4, 1966", colonizer: "United Kingdom", famous: "Highest lowest point of any country", rank: "42nd largest in Africa" },
    "LR": { name: "Liberia", population: "5.5 million", president: "Joseph Boakai", independence: "July 26, 1847", colonizer: "American Colonization Society", famous: "Africa's First Republic", rank: "38th largest in Africa" },
    "LY": { name: "Libya", population: "7 million", president: "Mohamed al-Menfi", independence: "December 24, 1951", colonizer: "Italy", famous: "Ancient Leptis Magna, Oil", rank: "4th largest in Africa" },
    "MG": { name: "Madagascar", population: "30 million", president: "Andry Rajoelina", independence: "June 26, 1960", colonizer: "France", famous: "Lemurs, Baobabs, Vanilla", rank: "4th largest island in the world" },
    "MW": { name: "Malawi", population: "21 million", president: "Lazarus Chakwera", independence: "July 6, 1964", colonizer: "United Kingdom", famous: "Lake Malawi (Calendar Lake)", rank: "35th largest in Africa" },
    "ML": { name: "Mali", population: "23 million", president: "Assimi Goïta (Interim)", independence: "September 22, 1960", colonizer: "France", famous: "Timbuktu, Mansa Musa History", rank: "8th largest in Africa" },
    "MR": { name: "Mauritania", population: "4.9 million", president: "Mohamed Ould Ghazouani", independence: "November 28, 1960", colonizer: "France", famous: "Eye of the Sahara, Iron Ore", rank: "11th largest in Africa" },
    "MU": { name: "Mauritius", population: "1.3 million", president: "Prithvirajsing Roopun", independence: "March 12, 1968", colonizer: "UK / France / Dutch", famous: "Dodo Bird (Extinct), Beaches", rank: "50th largest in Africa" },
    "MA": { name: "Morocco", population: "38 million", president: "King Mohammed VI", independence: "March 2, 1956", colonizer: "France / Spain", famous: "Marrakech, Atlas Mountains", rank: "24th largest in Africa" },
    "MZ": { name: "Mozambique", population: "34 million", president: "Filipe Nyusi", independence: "June 25, 1975", colonizer: "Portugal", famous: "Coastline, Peri-Peri Sauce", rank: "16th largest in Africa" },
    "NA": { name: "Namibia", population: "3 million", president: "Netumbo Nandi-Ndaitwah", independence: "March 21, 1990", colonizer: "South Africa / Germany", famous: "Namib Desert, Skeleton Coast", rank: "15th largest in Africa" },
    "NE": { name: "Niger", population: "27 million", president: "Abdourahamane Tchiani", independence: "August 3, 1960", colonizer: "France", famous: "Sahara Desert, Uranium", rank: "6th largest in Africa" },
    "NG": { name: "Nigeria", population: "223 million", president: "Bola Ahmed Tinubu", independence: "October 1, 1960", colonizer: "United Kingdom", famous: "Afrobeat, Nollywood, Jollof Rice", rank: "1st Most Populous / 14th Area" },
    "RW": { name: "Rwanda", population: "14 million", president: "Paul Kagame", independence: "July 1, 1962", colonizer: "Belgium", famous: "Mountain Gorillas, Cleanest City", rank: "45th largest in Africa" },
    "ST": { name: "São Tomé & Príncipe", population: "0.2 million", president: "Carlos Vila Nova", independence: "July 12, 1975", colonizer: "Portugal", famous: "Cocoa, Biodiversity", rank: "48th largest in Africa" },
    "SN": { name: "Senegal", population: "18 million", president: "Bassirou Diomaye Faye", independence: "April 4, 1960", colonizer: "France", famous: "Gateway to Africa, Wolof Rice", rank: "33rd largest in Africa" },
    "SC": { name: "Seychelles", population: "0.1 million", president: "Wavel Ramkalawan", independence: "June 29, 1976", colonizer: "United Kingdom", famous: "Luxury Tourism, 115 Islands", rank: "Smallest country in Africa" },
    "SL": { name: "Sierra Leone", population: "9 million", president: "Julius Maada Bio", independence: "April 27, 1961", colonizer: "United Kingdom", famous: "Freetown Harbor, Diamonds", rank: "39th largest in Africa" },
    "SO": { name: "Somalia", population: "18 million", president: "Hassan Sheikh Mohamud", independence: "July 1, 1960", colonizer: "UK / Italy", famous: "Longest Coastline in Africa", rank: "18th largest in Africa" },
    "ZA": { name: "South Africa", population: "62 million", president: "Cyril Ramaphosa", independence: "May 31, 1910", colonizer: "UK / Netherlands", famous: "Table Mountain, Nelson Mandela", rank: "9th largest in Africa" },
    "SS": { name: "South Sudan", population: "11 million", president: "Salva Kiir Mayardit", independence: "July 9, 2011", colonizer: "Sudan / UK", famous: "Youngest Nation in the World", rank: "19th largest in Africa" },
    "SD": { name: "Sudan", population: "48 million", president: "Abdel Fattah al-Burhan", independence: "January 1, 1956", colonizer: "UK / Egypt", famous: "More Pyramids than Egypt", rank: "3rd largest in Africa" },
    "TZ": { name: "Tanzania", population: "67 million", president: "Samia Suluhu Hassan", independence: "December 9, 1961", colonizer: "United Kingdom", famous: "Mt Kilimanjaro, Serengeti", rank: "13th largest in Africa" },
    "TG": { name: "Togo", population: "9 million", president: "Faure Gnassingbé", independence: "April 27, 1960", colonizer: "France", famous: "Beaches, Phosphates", rank: "40th largest in Africa" },
    "TN": { name: "Tunisia", population: "12 million", president: "Kais Saied", independence: "March 20, 1956", colonizer: "France", famous: "Carthage, Star Wars Sets", rank: "34th largest in Africa" },
    "UG": { name: "Uganda", population: "48 million", president: "Yoweri Museveni", independence: "October 9, 1962", colonizer: "United Kingdom", famous: "Source of the Nile, Gorillas", rank: "31st largest in Africa" },
    "ZM": { name: "Zambia", population: "20 million", president: "Hakainde Hichilema", independence: "October 24, 1964", colonizer: "United Kingdom", famous: "Victoria Falls (Mosi-oa-Tunya)", rank: "17th largest in Africa" },
    "ZW": { name: "Zimbabwe", population: "16 million", president: "Emmerson Mnangagwa", independence: "April 18, 1980", colonizer: "United Kingdom", famous: "Great Zimbabwe Ruins", rank: "25th largest in Africa" }
};

// --- 2. ANCIENT EARTH TONE PALETTE ---
const palette = [
    "#d7ccc8", 
    "#ffe0b2", 
    "#c5e1a5", 
    "#bcaaa4", 
    "#ffe082", 
    "#b0bec5", 
    "#ef9a9a", 
    "#e6ee9c"  
];

// --- 3. MAP SETUP LOGIC ---
const svg = document.querySelector('svg');
const paths = document.querySelectorAll('path');
const introMsg = document.getElementById('intro-message');
const detailsDiv = document.getElementById('country-details');

const fields = {
    name: document.getElementById('name'),
    pop: document.getElementById('pop'),
    pres: document.getElementById('pres'),
    indep: document.getElementById('indep'),
    colony: document.getElementById('colony'),
    famous: document.getElementById('famous'),
    rank: document.getElementById('rank')
};

// --- 4. PAINT THE MAP & ADD LABELS ---
paths.forEach(path => {
    const id = path.id;
    
    // A. Assign Color
    if (id && id.length >= 2) {
        const colorIndex = (id.charCodeAt(0) + id.charCodeAt(1)) % palette.length;
        path.style.fill = palette[colorIndex];
    } else {
        path.style.fill = "transparent"; 
    }

    // B. Add Text Label
    if (countryData[id]) {
        try {
            // Find center of country
            const bbox = path.getBBox();
            const centerX = bbox.x + bbox.width / 2;
            const centerY = bbox.y + bbox.height / 2;

            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", centerX);
            text.setAttribute("y", centerY);
            
            // Only show text if country is big enough
            if (bbox.width > 25 && bbox.height > 25) {
                text.textContent = countryData[id].name;
                svg.appendChild(text);
            }
        } catch (e) {
            console.log("Could not label " + id);
        }
    }

    // C. Add Click Listener
    path.addEventListener('click', function() {
        const data = countryData[this.id];

        if (data) {
            fields.name.innerText = data.name;
            fields.pop.innerText = data.population;
            fields.pres.innerText = data.president;
            fields.indep.innerText = data.independence;
            fields.colony.innerText = data.colonizer;
            fields.famous.innerText = data.famous;
            fields.rank.innerText = data.rank;

            introMsg.style.display = 'none';
            detailsDiv.style.display = 'block';
        }
    });
});