
import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className='videoFooter__text'>
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className='videoFooter__music'>
          <MusicNoteIcon className="videoFooter__icon"/>
          <div className='videoFooterMusic__text'>
            <p>{music}</p>
          </div>
                      
        </div>
      </div>
      <img 
      className='videoFooter__record'
      alt='Imagem de um vinil girando'
      src=" https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/vinil.png?alt=media&token=8ab56d00-5de7-4332-a680-c6c22134c365 "
      />    
    </div>
  )
}

export default VideoFooter