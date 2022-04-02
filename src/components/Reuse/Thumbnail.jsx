import React from 'react'

function Thumbnail(props) {
    const {css,src,href, alt} = props
  return (
      <div style={{position:'relative'}}>
          <a href={href} style={{position: 'absolute',
  inset: 0}}> </a>
          <img src={src} alt={alt} className={css.thumb} />
      </div>
  )
}

export default Thumbnail