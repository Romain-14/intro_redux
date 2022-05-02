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

import React, {Fragment, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from '../../redux/counter/action';
import {loadAllUsers} from '../../redux/user/action';


function Home() {

    // on s'abonne et on récupère les states du store
    const {value, msg, isLogged, infos} = useSelector(state => ({
        ...state.counterReducer,
        ...state.userReducer,
    }));
      
    
    // permets de dispatch une fonction directement depuis l'import
    const dispatch = useDispatch();
    
    useEffect(()=>{

        dispatch(loadAllUsers());

    }, [])

    return (
        <>
            <h1>HOME PAGE</h1>

            {
                isLogged && <p>user is connected</p>
            }

            {/* <p>Salut {name}</p> */}
            <p>{value}</p>

            <button onClick={() => dispatch(increment())}>+ 1</button>
            <button onClick={() => dispatch(decrement(2))}>- 2</button>

            {
                msg && <p>{msg}</p>
            }

            {
                infos.map(user=>{
                    return (
                        <Fragment key={user.id}>
                            <p>{user.alias}</p>
                        </Fragment>
                    )
                })

            }

        </>
    );
}

export default Home;
