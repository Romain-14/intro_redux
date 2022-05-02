// import React from "react";
// import { connect } from "react-redux";
// import {increment, decrement} from '../../redux/counter/action';


// function Home({increment, decrement, count, alias, msg}) {

//     return (
//         <>
//             <h1>HOME PAGE</h1>

//             <p>Salut {alias}</p>
//             <p>{count}</p>

//             <button onClick={() => increment()}>+ 1</button>
//             <button onClick={() => decrement(2)}>- 2</button>

//             {
//                 msg && <p>{msg}</p>
//             }

//         </>
//     );
// }

// // permets de récuperer un state du store
// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         count: state.value,
//         alias: state.name,
//         msg: state.msg,
//     }
// }

// // rends disponible cette fonction dans la props du composant
// // cette fonction fait office de message vers notre reducer
// const mapDispatchToProps = {
//     increment,
//     decrement,
// }


// // on s'abonne au store grace HOC( High Order Component) Connect)
// export default connect(mapStateToProps, mapDispatchToProps)(Home);


/*******************/
/****** HOOKS ******/
/*******************/

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from '../../redux/counter/action';

function Home() {

    // on s'abonne et on récupère les states du store
    const {count, name, msg} = useSelector(state => ({
            count : state.value,
            name: state.name,
            msg: state.msg,
            })
        );

    // permets de dispatch une fonction directement depuis l'import
    const dispatch = useDispatch();

    return (
        <>
            <h1>HOME PAGE</h1>

            
            <p>Salut {name}</p>
            <p>{count}</p>

            <button onClick={() => dispatch(increment())}>+ 1</button>
            <button onClick={() => dispatch(decrement(2))}>- 2</button>

            {
                msg && <p>{msg}</p>
            }

        </>
    );
}

export default Home;
