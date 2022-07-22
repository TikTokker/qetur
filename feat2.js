function generatePeople(people) {
  let peopleHTML = "";
  for (var i = 0; i < people.length; i++) {
    peopleHTML += "<div class='person'>" + people[i] + "</div>";
  }
  return peopleHTML;
}
