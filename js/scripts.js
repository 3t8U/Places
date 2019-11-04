//Business Logic for Places
function Places() {
  this.locations = []
  this.currentId = 0
}

Places.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations.push(location);
}

Places.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}
Places.prototype.findLocation = function(id){
  for (var i=0; i< this.locations.length; i++) {
    if (this.locations[i]){
      if (this.locations[i].id == id){
        return this.locations[i];
      }
    }
  };
  return false;
}

Places.prototype.deleteLocation = function(id){
  for (var i=0; i< this.locations.length; i++){
    if (this.contacts[i]) {
      if (this.locations[i].id == id){
        delete this.locations[i];
        return true;
      }
    }
  };
  return false;
}




// Business Logic for places


function Location(name, dateVisited, landMarks, daysStay){
  this.name = name,
  this.dateVisited = dateVisited,
  this.landMarks = landMarks,
  this.daysStay = daysStay
}
// Location.prototype.aboutPlace = function() {
//   return "On " + this.dateVisited + " , we saw " + this.landMarks + " & stayed for " + this.daysStay;
// }
var places = new Places();
var disneyLand = new Location("DisneyLand", "10/31/19", "Magic Mountain", "8 days");
var roseGarden = new Location("Rose Garden", "4/20/19", "Rose Test Garden", "2 days");
var santaBarbara = new Location("Santa Barbara", "8/31/18", "Shoreline Cafe", "6 days");
var palmSprings = new Location("Palm Springs", "12/25/20", "Arrive Hotel", "4 days");

places.addLocation(disneyLand);
places.addLocation(roseGarden);
places.addLocation(santaBarbara);
places.addLocation(palmSprings);


// Front End Logic for places
$(document).ready(function(){


  places.locations.forEach(function(place, index){
    console.log(places.locations[index]);
    $("#results").append("<li id='"+index+"'>" + (places.locations[index].name) +"</li>");

    $("#results").children().click(function(){
      $("#results").children().children().remove();

      $("#"+this.id).append("<ul><li>Dates Visited: " + (places.locations[this.id].dateVisited) + "</li></ul>");
      $("#"+this.id).append("<ul><li>Landmarks: " + (places.locations[this.id].landMarks) + "</li></ul>");
      $("#"+this.id).append("<ul><li>Length of stay: " + (places.locations[this.id].daysStay) + "</li></ul>");

      console.log(this.id);
    });
  });
});
