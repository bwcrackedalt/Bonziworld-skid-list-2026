async function askGroq(prompt, role = "You are a helpful assistant.") {

    const API_KEY = "YOUR_GROQ_API_KEY";

    try {

        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        {
                            role: "system",
                            content: role
                        },
                        {
                            role: "user",
                            content: prompt
                        }
                    ],
                    temperature: 1
                })
            }
        );

        const data = await response.json();

        console.log("Groq Response:", data);

        if (!response.ok) {
            console.error("HTTP ERROR:", response.status);
            return "bro i broke";
        }

        if (!data.choices || !data.choices[0]) {
            console.error("INVALID RESPONSE:", data);
            return "uhhh";
        }

        return data.choices[0].message.content;

    } catch (err) {

        console.error("FETCH ERROR:", err);
        return "error lol";

    }
}

const colors = [
    "black",
    "blue",
    "brown",
    "cyan",
    "green",
    "pink",
    "purple",
    "red",
    "white",
    "yellow"
];

const hats = [
    "bear",
    "bfdi",
    "bieber",
    "bowtie",
    "bucket",
    "chain",
    "cigar",
    "dank",
    "elon",
    "evil",
    "horse",
    "illuminati",
    "kamala",
    "king",
    "maga",
    "obama",
    "pot",
    "propeller",
    "tophat",
    "troll",
    "truck",
    "witch",
    "wizard",
    "ushanka",
    "chef",
    "party",
    "epic",
    "bush",
    "clown",
    "spongebob",
    "patrick",
    "windows",
    "swimring",
    "jacket",
    "doge",
    "shirt",
    "camel",
    "cone",
    "scarf",
    "greenhat",
    "purplehat",
    "yellowhat",
    "redhat",
    "whitehat",
    "bluehat",
    "goldhat",
    "king",
    "redking",
    "scarf2",
    "headphones",
    "diamondchain",
    "santa",
    "elf",
    "decorated",
    "rudolph",
    "cauldron",
    "frankenstein",
    "hockey",
    "pumpkin",
    "nopupil",
    "headphones",
    "unicorn",
    "mustache",
    "sprout",
    "glitch",
];

function generateRandomString(length) {

    let result = [];

    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(Math.random() * hats.length);

        result.push(hats[randomIndex]);

    }

    return result.join(" ");
}

function randomItem(arr) {

    return arr[
        Math.floor(Math.random() * arr.length)
    ];

}

async function autolog() {

    try {

        const word =
            await askGroq(
                "say something random",
                "you are a funny user in the logs. keep replies under 50 words. use slangs."
            );

        const name = 
            await askGroq(
                "make ONE username. no punctuation. no explanation."
            );

        const style =
            randomItem(colors) +
            " " +
            generateRandomString(
                Math.floor(Math.random() * 5) + 1
            );

        console.log({
            name,
            style,
            word
        });

        bonzilog(
            null,
            name,
            word,
            style,
            word,
            word,
            null
        );

    } catch (err) {

        console.error("AUTOLOG ERROR:", err);

    }

    setTimeout(
        autolog,
        Math.random() * 4000);
}

autolog();
