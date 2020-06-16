$(function() {
    $("#search").on("keyup", function() {
        $("#users").html("");
        var val = $.trim(this.value);
        if (val) {
            val = val.toLowerCase();
            $.each(usersArray, function(_, obj) {
                // console.log(val,obj.name.toLowerCase().indexOf(val),obj)
                if (obj.name.toLowerCase().indexOf(val) != -1 || obj.university.toLowerCase().indexOf(val) != -1 || obj.subject.toLowerCase().indexOf(val) != -1 || obj.university1.toLowerCase().indexOf(val) != -1 || obj.subject1.toLowerCase().indexOf(val) != -1) {
                    $("#users").append('<div class="user-card"><span class="user-info">' + obj.name + '</span><br/><img class="user-image" src="' + obj.image + '"/></div>');
                }
            });
        }
        $(".not-found").toggle($("#users").find("img").length == 0);
    });
});

var usersArray = [{
        name: "Juan Manuel Villalba",
        university: "Instituto Aplaplac",
        university1: "Universidad de Shule",
        subject: "fisica",
        subject1: "matematicas",
        age: 58,
        image: "../assets/img/profjpg/58.jpg"
    },
    {
        name: "Angelica San Martin",
        university: "Universidad de Shule",
        university1: "Universidad Federico Santa Maria",
        subject: "termodinamica",
        subject1: "gestion energética",
        age: 48,
        image: "../assets/img/profjpg/48.jpg"
    },
    {
        name: "Augusto Granados",
        university: "Universidad de Shule",
        university1: "Universidad Federico Santa Maria",
        subject: "Calculo 3",
        subject1: "Algebra 3",
        age: 64,
        image: "../assets/img/profjpg/64.jpg"
    },
    {
        name: "Clotilde Montoya",
        university: "Universidad de Shule",
        university1: "Universidad de las Europas",
        subject: "Sociologia",
        subject1: "Sicologia",
        age: 46,
        image: "../assets/img/profjpg/46.jpg"
    },
    {
        name: "Eugenio Ruz",
        university: "Universidad de Shule",
        university1: "Instituo Michael J. Fox",
        subject: "Programacion",
        subject1: "Bases de datos",
        age: 55,
        image: "../assets/img/profjpg/55.jpg"
    },
    {
        name: "Robert Perez",
        university: "Universidad de Shule",
        university1: "Universidad Federico Santa Maria",
        subject: "fisica 2",
        subject1: "fisica 4",
        age: 38,
        image: "../assets/img/profjpg/38.jpg"
    },
    {
        name: "Monica Carro",
        university: "Universidad de Shule",
        university1: "Instituto Duroc",
        subject: "Programacion",
        subject1: "Desarrollo de aplicaciones web",
        age: 33,
        image: "../assets/img/profjpg/33.jpg"
    },
    {
        name: "Isidora Martinez",
        university: "Universidad de Shule",
        university1: "Universidad Federico Santa Maria",
        subject: "Programacion",
        subject1: "Sistemas de informacion y gestion",
        age: 37,
        image: "../assets/img/profjpg/37.jpg"
    },
    {
        name: "Amaya Mayor",
        university: "Universidad de Shule",
        university1: "Instituto Aplaplac",
        subject: "microeconomia",
        subject1: "macroeconomia",
        age: 39,
        image: "../assets/img/profjpg/39.jpg"
    },
    {
        name: "Nazaret Jimenez",
        university: "Universidad de Shule",
        university1: "PUC",
        subject: "Finanzas",
        subject1: "Religion",
        age: 53,
        image: "../assets/img/profjpg/53.jpg"
    },
    {
        name: "Brian Guzman",
        university: "Awakelab",
        university1: "Adalid",
        subject: "Programacion",
        subject1: "Bases de datos",
        age: 45,
        image: "../assets/img/profjpg/Brian.jpg"
    },
    {
        name: "Oscar Gonzalez",
        university: "Awakelab",
        university1: "Adalid",
        subject: "Programacion",
        subject1: "Bases de datos",
        age: 44,
        image: "../assets/img/profjpg/Oscar.jpg"
    },

];