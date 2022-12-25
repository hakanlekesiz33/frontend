var Filter = {
  Apis: {},
  Elements: {
    name: document.getElementById("name"),
    surname: document.getElementById("surname"),
    age: document.getElementById("age"),
    job: document.getElementById("job"),
    weight: document.getElementById("weight"),
    size: document.getElementById("size"),
    button: document.getElementById("submit"),
    personList: document.getElementById("person-list"),
  },
  Status: {
    persons: [{ name: "Hakan", surname: "Lekesiz", age: "33", job: "Frontend", weight: "77", size: "1.80" }],
  },
  Actions: {
    //Sayfa ilk açıldığında istenilen fonksiyonları çalıştrıacak
    init: () => {
      Filter.Actions.appendToHtmlPerson();
    },

    personAdd: () => {
      var name = Filter.Elements.name.value;
      var surname = Filter.Elements.surname.value;
      var age = Filter.Elements.age.value;
      var job = Filter.Elements.job.value;
      var weight = Filter.Elements.weight.value;
      var size = Filter.Elements.size.value;
      var person = { name, surname, age, job, weight, size };
      Filter.Status.persons.push(person);
      Filter.Actions.appendToHtmlPerson();
      Filter.Actions.resetForm();
    },
    appendToHtmlPerson: () => {
      Filter.Elements.personList.innerHTML = "";
      for (let i = 0; i < Filter.Status.persons.length; i++) {
        var person = Filter.Status.persons[i];
        var personHtml =
          "<li>" +
          "<ul class='c-item-02-B'>" +
          "<li>" + person.name + " " + person.surname + "</li>" +
          "<li>" + person.age + "</li>" +
          "<li>" + person.job + "</li>" +
          "<li>" + person.weight + "</li>" +
          "<li>" + person.size + "</li>" +
          "<li> <a href='#' onclick='Filter.Actions.edit(" + i + ");'> Düzenle </a> <a href='#' onclick='Filter.Actions.delete(" + i + ");'> Sil </a> </li>" +
          "</ul>" +
          "</li>";
        Filter.Elements.personList.innerHTML += personHtml;
      }
    },

    resetForm: () => {
      Filter.Elements.name.value = "";
      Filter.Elements.surname.value = "";
      Filter.Elements.age.value = "";
      Filter.Elements.job.value = "";
      Filter.Elements.weight.value = "";
      Filter.Elements.size.value = "";
    },

    edit: (personIndex) => {
      var person = Filter.Status.persons[personIndex];
      Filter.Elements.name.value = person.name;
      Filter.Elements.surname.value = person.surname;
      Filter.Elements.age.value = person.age;
      Filter.Elements.job.value = person.job;
      Filter.Elements.weight.value = person.weight;
      Filter.Elements.size.value = person.size;
      Filter.Elements.button.value = "Düzenle";
      Filter.Elements.button.setAttribute('onclick', 'Filter.Actions.editPerson(' + personIndex + ');');

    },
    editPerson: (personIndex) => {
      var name = Filter.Elements.name.value;
      var surname = Filter.Elements.surname.value;
      var age = Filter.Elements.age.value;
      var job = Filter.Elements.job.value;
      var weight = Filter.Elements.weight.value;
      var size = Filter.Elements.size.value;
      var person = { name, surname, age, job, weight, size };
      Filter.Status.persons[personIndex] = person;
      Filter.Actions.appendToHtmlPerson();
      Filter.Actions.resetForm();
      Filter.Elements.button.value = "Ekle";
      Filter.Elements.button.setAttribute('onclick', 'Filter.Actions.personAdd();');
    },
    delete: (personIndex) => {
      Filter.Status.persons.splice(personIndex,1);
      Filter.Actions.appendToHtmlPerson();
    },
  },
};

Filter.Actions.init();
