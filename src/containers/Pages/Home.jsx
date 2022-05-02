import React from "react";
import { connect } from "react-redux";
import {increment, decrement} from '../../redux/counter/action';


function Home({increment, decrement, count, alias}) {


    return (
        <>
            <h1>HOME PAGE</h1>

            <p>Salut {alias}</p>
            <p>{count}</p>
            
            <button onClick={() => increment()}>+ 1</button>
            <button onClick={() => decrement()}>- 1</button>
        </>
    );
}

// permets de récuperer un state du store
const mapStateToProps = (state) => {
    console.log(state);
    return {
        count: state.value,
        alias: state.name,
    }
}

// rends disponible cette fonction dans la props du composant
// cette fonction fait office de message vers notre reducer
const mapDispatchToProps = {
    increment,
    decrement,
}


// on s'abonne au store grace HOC( High Order Component) Connect)
export default connect(mapStateToProps, mapDispatchToProps)(Home);
