import React from 'react'

const RefHook = () => {

    const [change, setChange] = React.useState(false)
    const myRef = React.useRef()
    const focusRef = React.useRef()

    const handleChange = (event) => {
        myRef.current.value = event.target.value
        myRef.current.style.backgroundColor = 'red'
    }



    const focusChange = () => {
        myRef.current.focus()
    }


    const show = () => {
        setChange(true)
        focusRef.current.style.left = '0px'
    }
    const close = () => {
        setChange(false)
        focusRef.current.style.left = '-1000px'
    }
    console.log(myRef)
  return (
      <div>
          <input ref={ myRef } onChange={ handleChange } />
          <div ref={focusRef} className='absolute left-[-1000px] ease-in-out duration-[2s]'>Hello World</div>
          {change ? <button onClick={close}>Close</button> : <button onClick={show}>Show</button>}
    </div>
  )
}

export default RefHook