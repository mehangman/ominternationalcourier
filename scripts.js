document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Example of track shipment functionality
function trackShipment() {
  const courierPartner = document.getElementById("courier-partner").value;
  alert(`Tracking shipment with: ${courierPartner}`);
}