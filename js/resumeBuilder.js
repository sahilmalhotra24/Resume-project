// Bio Object
var bio = {
    "name": "Jhonny Bravo",
    "role": "Developer",
    "contacts": {
        "mobile": "9878740000",
        "email": "Jhonny@Bravo.com",
        "github": "JohnnyBravo",
        "twitter": "bravo_jhonny",
        "location": "India"
    },
    "biopic": "images/j.png",
    "welcomeMessage": "Hello My name is Jhonny and everyone knows that :)",
    "skills": ["HTML", "CSS", "JavaScript", "Responsive Design", "Python"]
};

// displayBio fuction
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);
    var formattedTwitter = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedTwitter);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
}


};
//end


//Education Object
var education = {
    "schools": [{
        "name": "Om parkash bansal school",
        "location": "Panchkula",
        "degree": "Science",
        "dates": "2015",
        "majors": ["Computer"],
        "url": "http://www.chitkara.edu.in"
    }],
    "onlineCourses": [{
        "title": "Intro to Computer science",
        "school": "chitkara",
        "dates": "january 17-feburary 17",
        "url": "http://www.udacity.com"
    }, {
        "title": "DataBase Management",
        "school": "chitkara",
        "dates": "january 2012 - feburary 2017",
        "url": "http://www.chitkara.edu.in"
    }]
};

//displayEducation function
education.display = function() {
    for(var school = 0; school < education.schools.length; school++)
    {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) +
        HTMLschoolDegree.replace("%data%", education.schools[school].degree),
        HTMLschoolDates.replace("%data%", education.schools[school].dates),
        HTMLschoolLocation.replace("%data%", education.schools[school].location),
        HTMLschoolMajor.replace("%data%", education.schools[school].majors));
    }

    //online Courses
    $("#education").append(HTMLonlineClasses);
    for(var course = 0; course < education.onlineCourses.length; course++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url)+
        HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school),
        HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates),
        HTMLonlineURL.replace("#", education.onlineCourses[course].url).replace("%data%", education.onlineCourses[course].url));
    }
};


//end;

//Work Object
var work = {
    "jobs": [{
            "employer": "Chitkara university",
            "title": "Student",
            "location": "rajpura",
            "dates": "2015-2019",
            "description": "Computer Science"
        },
        {
            "employer": "Udacity",
            "title": "Course Developer",
            "location": "Mountain View, CA",
            "dates": "Feb 2014-current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LearnBIG",
            "title": "Software Engineer",
            "location": "Seattle, WA",
            "dates": "May 2013-jan 2014",

            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LEAD Academy Charter High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jul 2012-May 2019",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Stratford High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jun 2019-Jun 2012",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
};
//displayWork function
work.display = function() {
    for(var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
//end

//Project Object
var projects = {
    "projects": [{
            "title": "The powerfull jhonny ",
            "dates": "2017",
            "description": "Battle between jhonny and unknown person ",
            "images": ["images/f.png"]
        },
        {
            "title": "Gta 5 Game",
            "dates": "June 2015 - July 2015",
            "description": "Downloaded from internet",
            "images": ["images/a.jpeg"]
        }
    ]
};
//displayProject function
projects.display = function() {
    for(var project = 0; project < projects.projects.length; project++){

        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        //online Courses
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        for(var img = 0; img < projects.projects[project].images.length; img++){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
        $(".project-entry:last").append(formattedImage);
        }
    }
};

//end

//adding map
$("#mapDiv").append(googleMap);
bio.display();
projects.display();
work.display();

education.display();
