export default function modalMessage(message){
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML ="";

    modalContainer.innerHTML=`
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${message}
          </div>
          <div class="modal-footer">
            <button id="modal-cancel" type="button" class="btn btn-secondary modal-button" data-bs-dismiss="modal">Close</button>
            <button id="modal-accept" type="button"  class=" modal-button btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    `
}

