$(function() {
    $("#search").on("keyup", function() {
        $("#users").html("");
        var val = $.trim(this.value);
        if (val) {
            val = val.toLowerCase();
            $.each(usersArray, function(_, obj) {
                // console.log(val,obj.name.toLowerCase().indexOf(val),obj)
                if (obj.name.toLowerCase().indexOf(val) != -1 || obj.university.toLowerCase().indexOf(val) != -1 || obj.subject.toLowerCase().indexOf(val) != -1) {
                    $("#users").append('<div class="user-card"><span class="user-info">' + obj.name + '</span><br/><img class="user-image" src="' + obj.image + '"/></div>');
                }
            });
        }
        $(".not-found").toggle($("#users").find("img").length == 0);
    });
});

var usersArray = [{
        name: "Juanin Juan Harry",
        university: "USM",
        subject: "maths",
        age: 21,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Tulio Triviño",
        university: "PUC",
        subject: "maths",
        age: 20,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Milo Westfall",
        university: "UCh",
        subject: "maths",
        age: 31,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Dayna Bennefield",
        university: "USACH",
        subject: "maths",
        age: 27,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Danny Eckhoff",
        university: "USM",
        subject: "maths",
        age: 18,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Estella Fosdick",
        university: "PUC",
        subject: "maths",
        age: 51,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Farah Benson",
        university: "Uch",
        subject: "philosophy",
        age: 77,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Keith Gross",
        university: "USM",
        subject: "philosophy",
        age: 21,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Malcolm X",
        university: "USM",
        subject: "physics",
        age: 20,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Jhon Cena",
        university: "USM",
        subject: "economy",
        age: 31,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Rich Ross",
        university: "USM",
        subject: "economy",
        age: 27,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Charlie Sheen",
        university: "USM",
        subject: "economy",
        age: 44,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Lena Donovan",
        university: "USM",
        subject: "thermodynamics",
        age: 51,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Jay Kos",
        university: "USM",
        subject: "thermodynamics",
        age: 77,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Vincent Robert",
        university: "USM",
        subject: "thermodynamics",
        age: 21,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Adam Rodriguez",
        university: "USM",
        subject: "thermodynamics",
        age: 20,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Jhon Travolta",
        university: "USM",
        subject: "thermodynamics",
        age: 31,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Ben Mackferson",
        university: "USM",
        subject: "finance",
        age: 27,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Stella Cox",
        university: "USM",
        subject: "finance",
        age: 18,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Jenna Johnson",
        university: "USM",
        subject: "finance",
        age: 51,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    },
    {
        name: "Bill Tim",
        university: "USM",
        subject: "finance",
        age: 77,
        image: "https://placeimg.com/140/140/people?t=" + Math.random()
    }
];