import React from 'react';

// == Import fichier scss
import './logBook.scss';

// == Import images
import wave from 'src/assets/icones/wave.svg';
import pill from 'src/assets/icones/pill.svg';
import bandage from 'src/assets/icones/bandage.svg';d

//== Import modal
import EntryModal from 'src/modal/Entry';

const LogBook = ({
  entryModal, 
  closeModalEntry, 
  list
}) => {

const row = list.map(list => (
                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-top">
                    <div className="carnet-sante-entry-top-icone">
                      <img src={pill} className="carnet-sante-entry-top-icone-img" alt="icone"/>
                    </div>
                    <div className="carnet-sante-entry-top-care">
                      <div className="carnet-sante-entry-top-care-top">
                        <h3 className="carnet-sante-entry-top-care-top-title">Pilulier</h3>
                        <span className="carnet-sante-entry-top-care-top-name">Jérôme</span>
                      </div>
                      <div className="carnet-sante-entry-top-care-bottom">
                        <span className="carnet-sante-entry-top-care-bottom-date">{list.planned_date}</span>
                      </div> 
                    </div>
                  </div>
                  <div className="carnet-sante-entry-bottom">
                    <div className="carnet-sante-entry-bottom-left">
                      <div className="carnet-sante-entry-bottom-left-border"></div>
                    </div>
                    <div className="carnet-sante-entry-bottom-right">
                      <span className="carnet-sante-entry-bottom-right-observation">
                        {list.observations}
                      </span>
                    </div>
                  </div>
                </div>  
))

  return ( 
    <div className="carnet-sante-container">
      {
        entryModal ? <EntryModal closeModalEntry={closeModalEntry} /> : null
      }

      { list.length > 0 ? row : null }
    </div>
  )
};

export default LogBook;
