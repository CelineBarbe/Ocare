import React from 'react';

// == Import fichier scss
import './logBook.scss';

// == Import images
import info from 'src/assets/icones/info.svg';
import plus from 'src/assets/icones/plus2.svg';
import wave from 'src/assets/icones/wave.svg';
import pill from 'src/assets/icones/pill.svg';
import bandage from 'src/assets/icones/bandage.svg';

const logBook = () => {
  return ( 
            <div className="carnet-sante-container">
               {/* {entryModal ? modaleEntry : null}*/}
              {/* NEW ENTRY PART OF THE PAGE */}
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
                        <span className="carnet-sante-entry-top-care-bottom-date">22 Jan 2021</span>
                      </div> 
                    </div>
                  </div>
                  <div className="carnet-sante-entry-bottom">
                    <div className="carnet-sante-entry-bottom-left">
                      <div className="carnet-sante-entry-bottom-left-border"></div>
                    </div>
                    <div className="carnet-sante-entry-bottom-right">
                      <span className="carnet-sante-entry-bottom-right-observation">
                        Attention pansement qui coule, à vérifier tous les jours, on va essayer de mettre plein de texte pour voir comment réagit le container. Il faut encore mettre pas mal de texte pour que tout dépasse, il en faut encore encore et encore, c'est long j'aurai mieux faire de prendre un lorem ipsum automatiquement.
                      </span>
                    </div>
                  </div>
                </div>  

              {/* NEW ENTRY PART OF THE PAGE WITHOUT OBSERVATION SPAN */}
                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-top">
                    <div className="carnet-sante-entry-top-icone">
                      <img src={wave} className="carnet-sante-entry-top-icone-img" alt="icone"/>
                    </div>
                    <div className="carnet-sante-entry-top-care">
                      <div className="carnet-sante-entry-top-care-top">
                        <h3 className="carnet-sante-entry-top-care-top-title">Constante</h3>
                        <span className="carnet-sante-entry-top-care-top-name">Marlène</span>
                      </div>
                      <div className="carnet-sante-entry-top-care-bottom">
                        <span className="carnet-sante-entry-top-care-bottom-date">21 Jan 2021</span>
                      </div> 
                    </div>
                  </div>
                  <div className="carnet-sante-entry-bottom">
                    <div className="carnet-sante-entry-bottom-left">
                      <div className="carnet-sante-entry-bottom-left-border"></div>
                    </div>
                    <div className="carnet-sante-entry-bottom-right">
                      {/* NO OBSERVATION PAGE IN BOTTOM-RIGHT FOR TEST*/}
                    </div>
                  </div>
                </div>  

                {/* NEW ENTRY PART OF THE PAGE WITH SMALL OBSERVATION SPAN */}
                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-top">
                    <div className="carnet-sante-entry-top-icone">
                      <img src={bandage} className="carnet-sante-entry-top-icone-img" alt="icone"/>
                    </div>
                    <div className="carnet-sante-entry-top-care">
                      <div className="carnet-sante-entry-top-care-top">
                        <h3 className="carnet-sante-entry-top-care-top-title">Pansement</h3>
                        <span className="carnet-sante-entry-top-care-top-name">Stéphane</span>
                      </div>
                      <div className="carnet-sante-entry-top-care-bottom">
                        <span className="carnet-sante-entry-top-care-bottom-date">20 Jan 2021</span>
                      </div> 
                    </div>
                  </div>
                  <div className="carnet-sante-entry-bottom">
                    <div className="carnet-sante-entry-bottom-left">
                      <div className="carnet-sante-entry-bottom-left-border"></div>
                    </div>
                    <div className="carnet-sante-entry-bottom-right">
                      <span className="carnet-sante-entry-bottom-right-observation">
                          Attention pansement qui coule, à vérifier tous les jours.
                      </span>
                    </div>
                  </div>
                </div>  
              </div>
  )
};

export default logBook;
