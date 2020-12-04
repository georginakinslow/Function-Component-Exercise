// REACT BASICS


// Example 1
// Function Component
// Arrow function expressions are commonly used for React Function Componenets
const Frosty = () => {
    return 'Frosty The Snowman';
}

// Example 2 
const Rudolph = () => {
    return <h1>Rudolph The Red Nose Reindeer</h1>;
}

// Example 3 
// JSX  only allows for one element to be returned from a component
const Reindeer = () => {
//    return <h1>Dasher</h1> <h1>Dancer</h1>;
// A Single parent element can be used to render a component of multiple child elements
return (
    <div>
        <h1>Dasher</h1>
        <h1>Dancer</h1>
    </div>
);
}

// Render Method
/*
Syntax

ReactDOM.render(<ComponentName/>, container)
*/

//ReactDOM.render(<Frosty/>, document.querySelector(`#root`));//
//ReactDOM.render(<Rudolph/>, document.querySelector(`#root`));
//ReactDOM.render(<Rudolph/>, document.querySelector(`#root`));


// JSX (JavaScript Syntax Extension)
// JSX generates react "elements" with HTML looking code which is written In JavaScript


// Example 4
const OtherReindeer = () => {
    /*
    Example of Emmet Autocomplete
    div>ul>li*6
    */return(
        <div>
            <ul>
                <li>Prancer</li>
                <li>Vixen</li>
                <li>Comet</li>
                <li>Cupid</li>
                <li>Donder</li>
                <li>Blitzen</li>
            </ul>
        </div>
    )
}
//ReactDOM.render(OtherReindeer/>, document.querySelector(`#root`));


// Example 5
const SelfClosing = () => {
    //return <hr>;
    // In JSX, self-closing tags have to be written in the following format <tagname/>
    return <hr/>;
}
//ReactDOM.render(SelfClosing/>, document.querySelector(`#root`));

// Example 6 
const DaysUntilXmas = () => {
    // Javascript can be written like normal before then return keyword in a function component
    const xmasDay = 25;
    const today = 3;
    return (
        <div>
            {/* This is a comment */}
            {/* Must use brackets to write JavaScript anywhere inside the parent JSX element */}
            <h1>Days until Christmas: {xmasDay - today}</h1>
        </div>
    );
}
//ReactDOM.render(DaysUntilXmas/>, document.querySelector(`#root`));

// Example 7 
// "App" is the standard name used for the top level component that is passed into the render method
const App = () => {
    return (
        <div>
        <Frosty/>
        <Rudolph/>
        <Reindeer/>
        <OtherReindeer/>
        <SelfClosing/>
        <DaysUntilChristmas/>
        </div>
};
}

// Rendering/displaying the multiple components in the App component

ReactDOM.render(<App/>, document.querySelector(`#root`));