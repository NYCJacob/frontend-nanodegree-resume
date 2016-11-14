
var bio = {
    "name" : "Jacob Sherman",
    "role" : "Full Stack Developer",
    "contacts" : {
        "mobile" : "917-555-0208",
        "email" : "jacob@jbsherman.com",
        "twitterHandle" : "@JSherman_Esq",
        "twitterLink"   : "https://twitter.com/JSherman_Esq",
        "github"  : "https://github.com/NYCJacob",
        "linkedIn" : "https://www.linkedin.com/in/jbsherman",
        "location" : "New York, NY"
    },
    "skills" : ["JavaScript", "PHP/MySQL", "Linux Systems Administration"],
    "welcome" : "Let me handle the matrix and free your mind to do other stuff!",
    "bioImg" : "images/fry-320.jpg"
}

//  header
var  FormattedheaderName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
$("#header").prepend(FormattedheaderName + formattedRole);

// sub heading- contact info
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
formattedEmail = formattedEmail.replace('#', bio.contacts.email);

var formattedTwitter = HTMLtwitter.replace('%data%', '');
formattedTwitter = formattedTwitter.replace('#', bio.contacts.twitterLink);

// var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formattedGithub = HTMLgithub.replace('%data%', '');
formattedGithub = formattedGithub.replace('#', bio.contacts.github);

// var formattedLinkedIn = HTMLlinkedIn.replace('%data%', bio.contacts.linkedIn);
var formattedLinkedIn = HTMLlinkedIn.replace('%data%', '');
formattedLinkedIn = formattedLinkedIn.replace('#', bio.contacts.linkedIn);

var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedSubheading = formattedEmail + formattedLinkedIn + formattedTwitter + formattedGithub + formattedLocation;
$('#topContacts').append(formattedSubheading);
$('#footerContacts').append(formattedSubheading);

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
            "name"  : "Syracuse University College of Law",
            "location"  : "Syracuse NY",
            "degree": "Law",
            "major" : "Law",
            "dates" :  "1996",
            "url"   :   "http://www.law.syr.edu/"
        },
        {
            "name"  : "Sophia University",
            "location"  : "Tokyo Japan",
            "degree": "Japanese",
            "major" : "Japanese",
            "dates" : "1990",
            "url"   : "http://www.sophia.ac.jp/"
        },
        {
            "name" : "University of Massachusetts",
            "location" : "Amherst MA",
            "degree" : "Bachelor of Science",
            "major"  : "International Business",
            "dates"  :  "1989",
            "url"   : "http://www.umass.edu/"
        }
    ],
    "onlineCourses" : [
        {
            "title"  : "Front End Developer NanoDegree",
            "school"  :  "Udacity",
            "dates"  :  "2016 - present",
            "url"   :   "http://www.udacity.com"
        },
        {
            "title" : "Linux in the Real World",
            "school"  :  "Linux Training Academy",
            "dates"  :  "2016",
            "url"  :  "https://courses.linuxtrainingacademy.com/course/linux-in-the-real-world/"
        }, {
            "title" : "Essentials of Sytems Administration",
            "school"  :  "Linux Foundation",
            "dates"  :  "2015 - 2016",
            "url"  :  "https://training.linuxfoundation.org/linux-courses/system-administration-training/essentials-of-system-administration"
        },
        {
            "title" : "Linux Systems Administraion",
            "school"  :  "Linux Training Academy",
            "dates"  :  "2015 - 2016",
            "url"  :  "https://courses.linuxtrainingacademy.com/course/learn-linux-administration-and-supercharge-your-career/"
        },
        {
            "title" : "Introduction to Computer Science Using Python",
            "school"  :  "MIT EdX",
            "dates"  :  "2015",
            "url"  :  "https://courses.edx.org/courses/course-v1:MITx+6.00.1x_6+2T2015/info"
        },
        {
            "title" : "HTML5 Part1: Coding Essentials and Best Practices",
            "school"  :  "W3C EdX",
            "dates"  :  "2015",
            "url"  :  "https://courses.edx.org/courses/course-v1:W3Cx+HTML5.1x+2T2016/info"
        },
        {
            "title" : "HTML5 Part 2: Advanced Techniques for Designing HTML5 Apps",
            "school"  :  "W3C EdX",
            "dates"  :  "2015",
            "url"  :  "https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+4T2015/info"
        },
        {
            "title" : "Introduction to Computer Science Using C",
            "school"  :  "Harvard EdX",
            "dates"  :  "March 2014 - Sept 2014",
            "url"  :  "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
        }
    ],
    "otherCourseWork" : [
        {
            "title"     : "Javscript Intensive",
            "school"    :  "New York University School of Professional Studies",
            "dates"     : "2014",
            "url"       : "http://oit2.scps.nyu.edu/~sultans/javascript/"
        },
        {
            "title"     : "Apache Web Server",
            "school"    :  "New York University School of Professional Studies",
            "dates"     : "2014",
            "url"       : "https://www.sps.nyu.edu/professional-pathways/courses/"
        }
    ]
}


education.display =  function(){
    // schools using foreach
    education.schools.forEach(addSchool);
    function addSchool(school) {
        var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
        formattedSchoolName = formattedSchoolName.replace('#', school.url);
        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', school.major);
        var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
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
        title = title.replace('#', course.url);
        var school = HTMLonlineSchool.replace('%data%', course.school);
        var dates = HTMLonlineDates.replace('%data%', course.dates);

        $('#education').append(HTMLschoolStart);

        $('.education-entry:last').append(title + school);

        $('.education-entry:last').append(dates);
        $('.education-entry:last').append('<br>');

        // url moved to link in course name
        // $('.education-entry:last').append(url);
    }

    // other course work
    $('#education').append(HTMLcourseWork);
    education.otherCourseWork.forEach(addCourse);

    function addCourse(course) { // title school dates url
        var formattedCourseName = HTMLcourseName.replace('%data%', course.title);
        formattedCourseName = formattedCourseName.replace('#', course.url)
        var formattedCourseSchool = HTMLcourseSchoolName.replace('%data%', course.school);
        var formattedCourseDate = HTMLcourseDates.replace('%data%', course.dates);
        //this removed to add link to course name instead
        // var formattedCourseURL = HTMLcourseURL.replace('%data%', course.url);

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedCourseName + formattedCourseSchool);
        $('.education-entry:last').append(formattedCourseDate);
        $('.education-entry:last').append('<br>');
        // $('.education-entry:last').append(formattedCourseURL);
    }
}

education.display();

var work = {
    "jobs" : [
        {
            "employer" : "ScriptEd",
            "title"    : "Web Programming Instructor",
            "location" : "New York NY",
            "dates"    : "2014 - 2015",
            "employerLink"  : "https://scripted.org/",
            "description" : "Taught basic web programming skills to underprivileged New York City high school students."
        },
        {
            "employer" :  "Pena & Kahn PLLC",
            "title"  :   "Managing Attorney",
            "location"  :  "New York NY",
            "dates"  :  "2010 - 2012",
            "employerLink"  : "https://penakhan.com",
            "description"  : "Managed a 10 person law office, handled heavy caseload, paralegal training and attorney supervision"
        }
    ]
}

work.jobs.forEach(addJob);

function addJob(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    // add link to href
    formattedEmployer = formattedEmployer.replace('#', job.employerLink)
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


var projects = {
    "projects" : [
        {
            "title"  :  "Interactive Google Map",
            "dates"  :  "2014",
            "description"  :  "Created an interactive game using Google Maps, JavaScript and PHP/MySQL as my final project for Harvard’s Edx Introduction to Computer Science course",
            "imageURL"  : ["images/cs50P8-320.png"]
        },
        {
            "title" : "Mariatemildagonzalezesq.com",
            "dates"  : "2013",
            "description"  : "Created fully responsive websites based on designer's mockup, using Bootstrap and custom JavaScript.",
            "imageURL"   : ["images/mtg-320.png"]
        },
        {
            "title" : "nyrsccasolo.com",
            "dates"  : "2013",
            "description"  : "Updated old website with a responsive design using Bootstrap and integrated scoring results tables, working on integrating site with another even registration site via API.",
            "imageURL"   : ["images/nyrSccaSolo-320.png"]
        },
        {
            "title"  :  "webesq.net",
            "dates"  : "2013",
            "description"  : "Developed website that produces legal documents for an uncontested divorce in New York City.  " +
            "Implemented client-side and server side verification using Javascript and PHP/MySQL code to ensure the user files the " +
            "correct documents and produces PDF files ready for court submission.",
            "imageURL"  : ["images/webEsq-320.png"]
        },
        {
            "title"  : "ethoshopper.com",
            "dates"  :  "2009 - 2010",
            "description"  :  "Developed OSCommerce/PHP based website selling artisan ceramics from South America. " +
            "The website is no longer available.",
            "imageURL"  : ["images/ethoShop-320.png"]
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


$('#mapDiv').append(googleMap);

// $(document).click(function(loc) {
//     // your code goes here
//     logClicks(loc.pageX, loc.pageY);
// });

// jquery accordion init
$( "#accordion" ).accordion({
    active: 0,
    heightStyle: "content",
    classes : {
        "ui-state-default" : "color: black"
    }
});

// this code remove empty elements
if(document.getElementsByClassName('flex-item').length === 0) {
    document.getElementById('topContacts').style.display = 'none';
}
if(document.getElementsByTagName('h1').length === 0) {
    document.getElementById('header').style.display = 'none';
}
if(document.getElementsByClassName('work-entry').length === 0) {
    document.getElementById('workExperience').style.display = 'none';
}
if(document.getElementsByClassName('project-entry').length === 0) {
    document.getElementById('projects').style.display = 'none';
}
if(document.getElementsByClassName('education-entry').length === 0) {
    document.getElementById('education').style.display = 'none';
}
if(document.getElementsByClassName('flex-item').length === 0) {
    document.getElementById('lets-connect').style.display = 'none';
}
if(document.getElementById('map') === null) {
    document.getElementById('mapDiv').style.display = 'none';
}

