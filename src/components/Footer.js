import React from 'react'
import '../assets/styles/footer.css'

function footer ({ creator, date, git, fontp }) {
  return (
    <div className='footer'>
      <footer>
        <p className='name' style={{ fontFamily: fontp }}>{creator}</p>
        <p className='date' style={{ fontFamily: fontp }}>{date}</p>
        <a href='#' className='git' style={{ fontFamily: fontp }}>{git}</a>
      </footer>
    </div>
  )
}

export default footer
