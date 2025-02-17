class createModalForm {
  constructor() {
    const thisData = GetData.getIdentity();

    this.elHTML = `<div 
                  id="dialog"
                  role="dialog" 
                  aria-modal="true"
                  aria-hidden="true"
                  tabindex="-1" 
                  class="dialogBox"           
                  data-js="closeModal">
                
                    <form id="sendMessage"  method="dialog">
                      <button 
                      class="dialogBox__close"
                      type="button" 
                      aria-label="Fermer le formulaire" 
                      title="Fermer cette fenêtre de contact"
                      data-dismiss="dialog"
                      data-js="closeModal">
                    </button>
                    <fieldset>
                        <legend id="dialog-title" >Contactez moi</legend>
                        <h1 id="dialog-desc">${thisData.name}</h1>

                        <div class="form__content">
                          <div class="brick">
                            <label for="lastname">Prénom</label>
                            <input id="lastname" type="text" name="lastname" class="brickInput" pattern="^[A-Za-z]+$" required/>
                            <span>Veuillez saisir votre prénom</span>
                          </div>

                          <div class="brick">
                            <label for="firstname">Nom</label>
                            <input id="firstname" type="text" name="firstname" class="brickInput" pattern="^[A-Za-z]+$" required/>
                            <span>Veuillez saisir votre nom</span>
                          </div>

                          <div class="brick">
                            <label for="email">Email</label>
                            <input  id="email" type="email" name="email" class="brickInput" required/>
                            <span>Veuillez saisir votre email</span>
                          </div>

                          <div class="brick">
                            <label for="message">Message</label>
                            <textarea  id="message"  name="message" class="brickInput brickInput--textarea" required/></textarea>
                            <span>Veuillez saisir votre message</span>
                          </div>

                          <button type="submit" class="btn btn--modal" data-js="submitModal"  aria-label="soumettre">Envoyer</button>

                      
                        
                        </div>


                    </fieldset>
                    </form>
                </div>`;
  }
}
