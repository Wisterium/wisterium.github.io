    const messages = [
        "The moonlight is a messenger of love...",
        "I get up when I want, except on Wednesdays when I get RUDELY awakened by the dustman..",
        "Percentage of us tow the line, the rest of us out of reach...",
        "We could do so much better than this... Mausoleum faces and momentary bliss..",
        "I've liked you for a thousand years, a thousand years..",
        "Letting the days go by, water flowing underground...",
        "They might promise you, that the river ain't deep...",
        "Out of body from morning to night, dance floor packed and I'm feeling alright..",
        "Road work ahead?? Yeah I sure hope it does????",
        "The polyphonic prayer is here, it's all around you... It's all around you out here.",
        "She's alone in the new pollution...",
        "Don't think I'm all in this world...The camera won't let me roll..",
        "We'll meet again, don't know where, don't know when, but I know we'll meet again some sunny day...",
        "Days blend to one, when I'm on the right beaches and the walls painted white, they tell me all the secrets...",
        "Girls who are boys who like boys to be girls... Always should be someone you really love <3",
        "I like my randomized text like I like my coffee... (insert laugh track here)"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    document.getElementById("randomMessage").innerHTML = randomMessage;
