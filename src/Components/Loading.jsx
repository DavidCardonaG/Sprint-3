import React from 'react'
import Swal from 'sweetalert2'

const Loading = () => {
    const alert = () =>{
    Swal.fire({icon: 'Loading',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
}
    return (
        <div>
            <h1>{alert}</h1>
        </div>


    )
}

export default Loading
