const styleObject = {
    backgroundColor: '#dedede',
    color: '#333',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    border: 'none',
    margin: '10px',
    padding: '10px 25px'

};

function Buton(props) {
    return (
        <button onClick={props.clickHandler} style={styleObject}>{props.children}</button>
    );
};


export default Buton;