function initMap() {
  var sedona = {lat: 34.8812803, lng: -111.8009852};
  var map = new google.maps.Map(document.querySelector('#map'), {
    center: {lat: 34.75, lng: -111.8009852},
    zoom: 9,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: sedona,
    map: map
  });
}

var modal = document.querySelector('.modal');
var modalButton = document.querySelector('.button-modal');

modal.classList.replace('modal-show', 'modal-hide');

modalButton.addEventListener('click', function () {
  modal.classList.remove('modal-hide');
  modal.classList.toggle('modal-show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    modal.classList.remove('modal-show');
  }
});
