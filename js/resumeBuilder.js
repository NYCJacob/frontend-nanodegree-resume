/*
This is empty on purpose! Your code to build the resume will go here.
 */

// var bio = {
//     "bio" : [
//     {
//         "name" : "Jacob Sherman",
//         "role" : "Full Stack Developer",
//         "contact" : "jacob@jbsherman.com",
//         "welcome" : "Let me handle the matrix and free your mind to do other stuff!",
//         "skills" : [JavaScript, PHP, Linux]
//     }
//         ]
// }

var bio = {
    "name" : "Jacob Sherman",
    "role" : "Full Stack Developer",
    "contacts" : {
        "mobile" : "927-555-0208",
        "email" : "jacob@jbsherman.com",
        "twitter" : "@JSherman_Esq",
        "github"  : "github.com/NYCJacob"
    },
    "skills" : ["JavaScript", "PHP/MySQL", "Linux Systems Administration"],
    "welcome" : "Let me handle the matrix and free your mind to do other stuff!",
    "bioImg" : "http://about.jbsherman.com/image.jpg"
}


var education = {
    "schools" : [
        {
            "name"  : "Syracuse University",
            "city"  : "Syracuse",
            "degree": "Law",
            "major" : "Law",
            "dates" :  1996
        },
        {
            "name"  : "Sophia University",
            "city"  : "Tokyo",
            "degree": "Japanese",
            "major" : "Japanese",
            "dates" : 1990
        },
        {
            "name" : "University of Massachusetts",
            "city" : "Amherst",
            "degree" : "Bachelor of Science",
            "major"  : "International Business",
            "dates"  :  1989
        }
    ],
    "online courses" : [
        {
            "title"  : "Front End Developer Nano Degree",
            "school"  :  "Udacity",
            "dates"  :  2016,
            "url"   :   "udacity.com"
        },
        {
            "title" : "Introduction to Computer Science Using C",
            "school"  :  "Harvard EdX",
            "dates"  :  2014,
            "url"  :  "edx.org"
        },
        {
            "title" : "Introduction to Computer Science Using Python",
            "school"  :  "MIT EdX",
            "dates"  :  2015,
            "url"  :  "edx.org"
        }
    ]
}

var work = {
    "jobs" : [
        {
        "employer" :  ,
        "title"  :   ,
        "location"  :  ,
        "dates"  :
        }
    ]
}

var projects = {
    "projects" : [
        {
            "title"  :  ,
            "dates"  :  ,
            "description"  :  ,
            "imageURL"  :
        }
    ]
}


$('#header').prepend(bio);


var formattedName = HTMLheaderName.replace('%data%', myName);
var formattedRole = HTMLheaderRole.replace('%data%', myRole);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

