import React from 'react'
import { useSelector } from 'react-redux'

function Aside() {

    const {count} = useSelector(state => ({
                count: state.value
            })
        )

  return (
    <>
        <p>state du store depuis le composant ASIDE</p>

        <p>{count}</p>
    </>
    
    )
}

export default Aside