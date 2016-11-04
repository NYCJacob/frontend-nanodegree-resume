
var bio = {
    "name" : "Jacob Sherman",
    "role" : "Full Stack Developer",
    "contacts" : {
        "mobile" : "917-555-0208",
        "email" : "jacob@jbsherman.com",
        "twitter" : "@JSherman_Esq",
        "github"  : "github.com/NYCJacob",
        "location" : "New York, NY"
    },
    "skills" : ["JavaScript", "PHP/MySQL", "Linux Systems Administration"],
    "welcome" : "Let me handle the matrix and free your mind to do other stuff!",
    "bioImg" : "http://placehold.it/300"
}

//  header
var  FormattedheaderName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
$("#header").prepend(FormattedheaderName + formattedRole);

// sub heading- contact info
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedSubheading = formattedEmail + formattedTwitter + formattedGithub + formattedLocation;
$('#topContacts').append(formattedSubheading);

// welcome message
var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcome);
$("#header").append(formattedWelcome);

// pic and skills
var formattedImage = HTMLbioPic.replace('%data%', bio.bioImg);
$('#header').append(formattedImage);

// check if skill exist then append
if (bio.skills.length !== 0){
    $("#header").append(HTMLskillsStart);
    var skillsLength = bio.skills.length;
    for (var i in bio.skills) {
        var skillFormatted =  HTMLskills.replace('%data%', bio.skills[i]);
        $("#skills").append(skillFormatted);
    }
}

var education = {
    "schools" : [
        {
            "name"  : "Syracuse University",
            "location"  : "Syracuse NY",
            "degree": "Law",
            "major" : "Law",
            "dates" :  1996
        },
        {
            "name"  : "Sophia University",
            "location"  : "Tokyo Japan",
            "degree": "Japanese",
            "major" : "Japanese",
            "dates" : 1990
        },
        {
            "name" : "University of Massachusetts",
            "location" : "Amherst MA",
            "degree" : "Bachelor of Science",
            "major"  : "International Business",
            "dates"  :  1989
        }
    ],
    "onlineCourses" : [
        {
            "title"  : "Front End Developer NanoDegree",
            "school"  :  "Udacity",
            "dates"  :  2016,
            "url"   :   "udacity.com"
        },
        {
            "title" : "Real World Linux",
            "school"  :  "Linux Foundation",
            "dates"  :  2016,
            "url"  :  "https://www.linuxtrainingacademy.com"
        },
        {
            "title" : "Linux Systems Administraion",
            "school"  :  "Linux Foundation",
            "dates"  :  "2016",
            "url"  :  "https://www.linuxtrainingacademy.com"
        },
        {
            "title" : "Introduction to Computer Science Using Python",
            "school"  :  "MIT EdX",
            "dates"  :  "2015",
            "url"  :  "edx.org"
        },
        {
            "title" : " Learn HTML5 from W3C",
            "school"  :  "W3C EdX",
            "dates"  :  "2015",
            "url"  :  "edx.org"
        },
        {
            "title" : "Introduction to Computer Science Using C",
            "school"  :  "Harvard EdX",
            "dates"  :  "2014",
            "url"  :  "edx.org"
        }
    ],
    "otherCourseWork" : [
        {
            "title"     : "Javscript Intensive",
            "school"    :  "New York University School of Professional Studies",
            "dates"     : "2014",
            "url"       : "http://www.sps.nyu.edu/"
        },
        {
            "title"     : "Apache Web Server",
            "school"    :  "New York University School of Professional Studies",
            "dates"     : "2014",
            "url"       : "http://www.sps.nyu.edu/"
        }
    ]
}

education.display =  function(){
    for (school in education.schools){
        var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
        var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
        $('.education-entry:last').append(formattedSchoolDates + formattedSchoolLocation);
        $('.education-entry:last').append(formattedSchoolMajor);
    }
    // online courses using foreach
    $('#education').append(HTMLonlineClasses);
    education.onlineCourses.forEach(addOnlineCourse);

    function addOnlineCourse(course) {
        var title = HTMLonlineTitle.replace('%data%', course.title);
        var school = HTMLonlineSchool.replace('%data%', course.school);
        var dates = HTMLonlineDates.replace('%data%', course.dates);
        var url = HTMLonlineURL.replace('%data%', course.url);
        $('#education').append(HTMLschoolStart);

        $('.education-entry:last').append(title + school);

        $('.education-entry:last').append(dates);

        $('.education-entry:last').append(url);
    }

    // other course work
    $('#education').append(HTMLcourseWork);
    education.otherCourseWork.forEach(addCourse);

    function addCourse(course) { // title school dates url
        var formattedCourseName = HTMLcourseName.replace('%data%', course.title);
        var formattedCourseSchool = HTMLcourseSchoolName.replace('%data%', course.school);
        var formattedCourseDate = HTMLcourseDates.replace('%data%', course.dates);
        var formattedCourseURL = HTMLcourseURL.replace('%data%', course.url);

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedCourseName + formattedCourseSchool);
        $('.education-entry:last').append(formattedCourseDate);
        $('.education-entry:last').append(formattedCourseURL);
    }
}

education.display();

var work = {
    "jobs" : [
        {
            "employer" :  "Pena & Kahn PLLC",
            "title"  :   "Managing Attorney",
            "location"  :  "New York NY",
            "dates"  :  "2010 - 2012",
            "description"  : "Managed a 10 person law office, handled heavy caseload, paralegal training and attorney supervision"
        },
        {
            "employer" : "ScriptEd",
            "title"    : "Web Programming Instructor",
            "location" : "New York NY",
            "dates"    : "2014 - 2015",
            "description" : "Taught basic web programming skills to underprivileged New York City high school students."
        }
    ]
}

var projects = {
    "projects" : [
        {
            "title"  :  "Interactive Google Map",
            "dates"  :  "2014",
            "description"  :  "Created an interactive game using Google Maps, JavaScript and PHP/MySQL as my final project for Harvard’s Edx Introduction to Computer Science course",
            "imageURL"  : ["https://github.com/NYCJacob/pset8-interactive-map"]
        },
        {
            "title" : "Mariatemildagonzalezesq.com and nyrsccasolo.com",
            "dates"  : "2013",
            "description"  : "Created fully responsive websites using Bootstrap and custom JavaScript based on designer’s mockup.",
            "imageURL"   : ["http://Mariatemildagonzalezesq.com", "http://nyrsccasolo.com"]
        },
        {
            "title"  :  "webesq.net",
            "dates"  : "2013",
            "description"  : "Developed website that produces legal documents for an uncontested divorce in New York City.  " +
            "Implemented client-side and server side verification using Javascript and PHP/MySQL code to ensure the user files the " +
            "correct documents and produces PDF files ready for court submission.",
            "imageURL"  : ["http://www.webesq.net"]
        },
        {
            "title"  : "ethoshopper.com",
            "dates"  :  "2009 - 2010",
            "description"  :  "Developed OSCommerce/PHP based website selling artisan ceramics from South America. " +
            "The website is no longer available.",
            "imageURL"  : ["https://web.archive.org/web/20110817085349/http://www.ethoshopper.com/"]
        }
    ]
}

projects.projects.forEach(addProject);

function addProject(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDesc = HTMLprojectDescription.replace('%data%', project.description);
        $(".project-entry:last").append(formattedDesc);

        if (project.imageURL.length > 0) {
            for (image in project.imageURL){
                var formattedImages = HTMLprojectImage.replace('%data%',project.imageURL[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }
}

work.jobs.forEach(addJob);

function addJob(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedWorkDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDesc = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDesc);
}


$('#mapDiv').append(googleMap);

$(document).click(function(loc) {
    // your code goes here
    logClicks(loc.pageX, loc.pageY);
});


