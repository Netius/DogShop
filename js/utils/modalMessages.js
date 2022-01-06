export default function modalMessage(message){
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML ="";

    modalContainer.innerHTML=`
    <!-- Modal -->
    <div class="modal fade" id="modal-confirmation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <img title="DogShop" src="/images/favicon/android-chrome-72x72.png" width="30" class="rounded me-2" alt="Dogshop favicon">
            <h5 class="modal-title" id="exampleModalLabel">DogShop</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
             ${message}
          </div>
          <div class="modal-footer">
            <button  id="modal-accept" type="button" title="Ok" 
                    class=" modal-button btn btn-success">
              Ok
            </button>
            <button id="modal-cancel" type="button" title="Cancel"
                    class="btn btn-outline-secondary modal-button" 
                    data-bs-dismiss="modal">
              Cancel
            </button>
           
          </div>
        </div>
      </div>
    </div>
    `
}

// Using this function to show modal and callback answer
export const modalConfirm = function(callback) {
  var myModal = new bootstrap.Modal(document.getElementById('modal-confirmation')) 
  myModal.show();
  const cancelModal = document.getElementById("modal-cancel")
                      .addEventListener("click", function(){
                          callback(false);
                      });
  const acceptModal = document.getElementById("modal-accept")
                      .addEventListener("click", function(){
                          callback(true);
                          myModal.hide();
                      });

}
