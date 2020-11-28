/*------------------------- Array of Information about team member------------------------------------------ */
var teamMemberArray = [
    {
     "id":0,
     "thumbnail":"./Images/Nitin Sharma Team 1.jpeg",
     "name":"NITIN SHARMA",
     "designation":"Managing Director",

    },
    {
        "id":1,
        "thumbnail":"./Images/Gagan Deep Sharma Team 2.jpeg",
        "name":"GAGAN DEEP SHARMA",
        "designation":"Managing Director",
   
       }
];

/*---------------------------------------------------------------------------------------------------------------*/
var teamViewWrapper = window.document.getElementById('team-view-wrapper');




/* -----------------------------------function to create profile cards ------------------------------------------*/
function createTeamCards(obj) {
    var teamViewCard = document.createElement('div');
    teamViewCard.className = 'team-view-card';
    teamViewCard.id = obj.id;
    var teamPhoto = document.createElement('div');
    teamPhoto.className = 'team-photo';
    var thumbnail = document.createElement('img');
    thumbnail.src= obj.thumbnail;
    thumbnail.alt = 'team-img';
    teamPhoto.appendChild(thumbnail);
    teamViewCard.appendChild(teamPhoto);
    var teamContent = document.createElement('div');
    teamContent.className = 'team-content';
    serviceTitle = document.createElement('h3');
    serviceTitle.className = 'service-title';
    serviceTitle.innerHTML = obj.name;
    teamContent.appendChild(serviceTitle);
    var jobTitle = document.createElement('p');
    jobTitle.className = 'job-title';
    jobTitle.innerHTML = obj.designation;
    teamContent.appendChild(jobTitle);
    teamViewCard.appendChild(teamContent);
    var socialVertical = document.createElement('div');
    socialVertical.className = 'social-vertical horizontal';
    
   
        socialIcon1 = window.document.createElement('a');
        socialIcon1.className = 'social-icon';
        socialIconImage1 = document.createElement('img');
        socialIconImage1.src = 'https://nuuk-e3eaa.firebaseapp.com/assets/img/facebook-logo.png';
        socialIconImage1.width = '16';
        socialIconImage1.alt = "fb-logo"
        socialIcon1.appendChild(socialIconImage1);
        socialVertical.appendChild(socialIcon1);

        socialIcon2 = window.document.createElement('a');
        socialIcon2.className = 'social-icon';
        socialIconImage2 = document.createElement('img');
        socialIconImage2.src = 'https://nuuk-e3eaa.firebaseapp.com/assets/img/twitter-logo.png';
        socialIconImage2.width = '16';
        socialIconImage2.alt = "twitter-logo"
        socialIcon2.appendChild(socialIconImage2);
        socialVertical.appendChild(socialIcon2);

        socialIcon3 = window.document.createElement('a');
        socialIcon3.className = 'social-icon';
        socialIconImage3 = document.createElement('img');
        socialIconImage3.src = 'https://nuuk-e3eaa.firebaseapp.com/assets/img/linkedin-logo.png';
        socialIconImage3.width = '16';
        socialIconImage3.alt = "linkedin-logo"
        socialIcon3.appendChild(socialIconImage3);
        socialVertical.appendChild(socialIcon3);

    teamViewCard.appendChild(socialVertical)
    teamViewWrapper.appendChild(teamViewCard);
    teamViewCard.onclick = function() {
        document.getElementById('profilePageThumbnail').src = obj.thumbnail;
        document.getElementById('profilePageName').innerHTML = obj.name;
        document.getElementById('overlay').style.display = 'block';
        if(window.innerWidth<=600){
            document.getElementById('main-container').style.display = 'block';
        }else{
            $('#main-container').css('display','flex');
        }
    }
};

/*------------------------------------------------------------------------------------------------------------*/

$('#two-bars').click(function() {
    if($('.right-nav-2').css('display') === 'none'){
        $('.right-nav-2').css('display','block');
        $('.bar-1').css({'transform':'rotatez(-45deg)','position':'absolute'});
        $('.bar-2').css('transform','rotatez(45deg');
    }else{
        $('.right-nav-2').css('display','none');
        $('.bar-1').css({'transform':'none','position':'static'});
        $('.bar-2').css('transform','none');
    }
   
});


var crossIcon = window.document.getElementById('cross-icon');
    crossIcon.onclick = function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('main-container').style.display = 'none';
};



/*---------calling function to create team member cards------------*/
for(let i=0;i<teamMemberArray.length;i++){
    createTeamCards(teamMemberArray[i]);
}


