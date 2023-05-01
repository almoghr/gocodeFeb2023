//const SimpleElement = React.createElement('div',{onClick: () => alert('Hi!!')},'Click Me!');

const SimpleElement2 = () => {
    console.log('shalom')

    return (
            <div className="hello" onClick={() => alert('Hi!!')}>Click Me2!</div>
    )
}

const NumbersList = () => {
    const numbers = [1, 2, 3, 4, 5];

    return (
        <div>
            first
        <ul>
            {numbers.map((number) => <li>{number}</li>)}
        </ul>
        last
        </div>
    )
}

const Main = () => {
    return (
        <div>
        </div>
    )
}
ReactDOM.render(<Main/>, document.getElementById('app'));

