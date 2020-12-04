//1a.
const GrinchXmas = () => {
    return `Cheer up, dude. It's Christmas.`;
}


//1b.
ReactDOM.render(<GrinchXmas/>, 
    document.querySelector(`#root`));

//2a. 
const GrinchMusic = () => {
    return (
        <div>
            <h1>`Blast this Christmas music! It's joyful and triumphant.`</h1>
        </div>
    );
}

//2b. 
ReactDOM.render(<GrinchMusic/>,
    document.querySelector(`#root`));


//3a. 
const GrinchIdiot = () => {
    return (
        <div>
            <h2>`I'm an idiot!`</h2>
            <h2>`You're an idiot!`</h2>
        </div>
    );
    }

 //3b.

 ReactDOM.render(<GrinchIdiot/>,
 document.querySelector(`#root`));

//4a.
const GrinchSchedule = () => {
    return (
    <div>
    <ul>
        <li>4:00 Wallow in self-pity</li>
        <li>4:30 Stare into abyss</li>
        <li>5:00 Solve world hunger</li>
        <li>5:30 Jazzercize</li>
        <li>6:30 Dinner with me. I can't cancel that again.</li>
        <li>7:00 Wrestle with my self-loathing.</li>
    </ul>
    <p>`I'm booked. Of course, if I bump the loathing to 9, I would still be done in time to lay in bed, stare at the ceiling and slip slowly into madness.`</p>
</div>
);
}

//4b.
ReactDOM.render(<GrinchSchedule/>, 
    document.querySelector(`#root`));

//5a.
const GrinchPoster = () => {
    return [
    <img src ="https://img01.mgo-images.com/image/thumbnail/v2/content/1MV1ca3f097dd209568db5d4a36e429dbda.jpeg"/>,
];
}

//5b. 
ReactDOM.render(<GrinchPoster/>, 
    document.querySelector(`#root`));

//6a. 
const GrinchVmail = () => {
};

//6d.
ReactDOM.render(<GrinchVmail/>, 
    document.querySelector(`#root`));

    //7a.
const GrinchAll = () => {
    return (
        <div>
            <ul>
        <li>GrinchXmas</li>
        <li>GrinchMusic</li>
        <li>GrinchIdiot</li>
        <li>GrinchSchedule</li>
        <li> GrinchPoster</li>
        <li>GrinchVmail</li>
        </ul>
        </div>
    );
}

//7b.
ReactDOM.render(<GrinchAll/>, 
    document.querySelector(`#root`));

    // BONUS 
//8a. 
const DiceRoll = () => {
    Math.floor(Math.random() * 7) +1; 
}
const DiceRoll = new DiceRoll(Die1);

//8c. 
const Die1 = () => {
    Math.floor(Math.random() * 7) +1;
}
const Die1 = new Die1(Die2);

//8d.
const DiceRoll = () => {
    let i = 1;
    let Die1 = 1;
    let Die2 = 1;
        for(i=1; i<6; i+){
            console.log(i);
    } 
    return 
    <div>
        <h1>`Snake Eyes`</h1>
    </div>
}
ReactDOM.render(<DiceRoll/>, 
    document.querySelector(`#root`));

//6b. 
const u = () => {
    return `You`;
}

//6c. 
const u = () => {
    return (
        <div>
        <h1>`IF YOU UTTER SO MUCH AS ONE SYLLABLE, I'LL HUNT YOU DOWN AND GUT YOU LIKE A FISH!`</h1>
        <h3>If you'd like to fax me, press the star key."</h3>
        </div>
    );
}






