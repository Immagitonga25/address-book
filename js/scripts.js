//Business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
function Address(street, city, country) {
  this.street = street;
  this.city = city;
  this.country = country;
}
Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

//User logic
$(document).ready(function () {
  $("form#contact").submit(function (event) {
    event.preventDefault();

    var inputtedFirstName = $("input#name-one").val();
    var inputtedLastName = $("input#name-two").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input.street").val();
        var inputtedCity = $(this).find("input.city").val();
        var inputtedCountry = $(this).find("input.country").val();
        var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCountry);
        newContact.addresses.push(newAddress);
      });

    $("ul#contacts").append(
      "<li><span class='contact'>" + newContact.fullName() + "</span></li>"
    );


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
  $("#address").click(function () {
    $("#addresses").append('<div class="new-address">' +
        '<div class="form-group">' +
        '<label for="street">Street</label>' +
        '<input type="text" class="form-control" id="street">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="city">City</label>' +
        '<input type="text" class="form-control" id="city">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="country">Country</label>' +
        '<input type="text" class="form-control" id="county">' +
        '</div>' +
        '</div>');
});
});
