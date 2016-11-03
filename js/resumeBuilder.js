/*
This is empty on purpose! Your code to build the resume will go here.
 */

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
            "employer" :  "Pena & Kahn PLLC",
            "title"  :   "Managing Attorney",
            "location"  :  "New York",
            "dates"  :  "2010 - 2012",
            "description"  : "Managed a 10 person law office, handled heavy caseload, paralegal training and attorney supervision"
        },
        {
            "employer" : "ScriptEd",
            "title"    : "Web Programming Instructor",
            "location" : "New York",
            "dates"    : "2014 - 2015",
            "description" : "Taught basic web programming skills to underprivileged New York City high school students."
        }
    ]
}

for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);
}


var projects = {
    "projects" : [
        {
            "title"  :  "Interactive Google Map",
            "dates"  :  "2014",
            "description"  :  "Created an interactive game using Google Maps, JavaScript and PHP/MySQL as my final project for Harvard’s Edx Introduction to Computer Science course",
            "imageURL"  : "https://github.com/NYCJacob/pset8-interactive-map"
        },
        {
            "title" : "Mariatemildagonzalezesq.com and nyrsccasolo.com",
            "dates"  : "2013",
            "description"  : "Created fully responsive websites using Bootstrap and custom JavaScript based on designer’s mockup.",
            "imageURL"   : "http://Mariatemildagonzalezesq.com and http://nyrsccasolo.com"
        },
        {
            "title"  :  "webesq.net",
            "dates"  : "2013",
            "description"  : "Developed website that produces legal documents for an uncontested divorce in New York City.  " +
                    "Implemented client-side and server side verification using Javascript and PHP/MySQL code to ensure the user files the " +
                    "correct documents and produces PDF files ready for court submission.",
            "imageURL"  : "http://www.webesq.net"
        },
        {
            "title"  : "ethoshopper.com",
            "dates"  :  "2009 - 2010",
            "description"  :  "Developed OSCommerce/PHP based website selling artisan ceramics from South America. " +
                            "The website is no longer available.",
            "imageURL"  : "https://web.archive.org/web/20110817085349/http://www.ethoshopper.com/"
        }
    ]
}


var  FormattedheaderName = HTMLheaderName.replace('%data%', bio.name);
$("#header").prepend(FormattedheaderName);

// check if skill exist then append
if (bio.skills.length !== 0){
    $("#header").append(HTMLskillsStart);
    var skillsLength = bio.skills.length;
    for (var i in bio.skills) {
        var skillFormatted =  HTMLskills.replace('%data%', bio.skills[i])
        $("#skills").append(skillFormatted);
    }
}
