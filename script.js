
// Buttons Control Imges
const randomBackEl = document.querySelectorAll('.buttons button');
// Change Web Color
const colorLi = document.querySelectorAll('.color-list li');
// Variabls imges option
let imgesOption = true;
// SetInterval Control
let intervalControl;
// landingPage Imges
let landingPage = document.querySelector('.landing-page');
let imgsArray = ['/01.jpg', '/02.jpg', '/03.jpg', '/04.jpg', '/05.jpg', '/06.jpg'];
// Background Localstorge
let backgroundLocalEl = localStorage.getItem('background_option');


//Local Storge to Color And Background
let mainColor = localStorage.getItem('color_option');
if(mainColor !== null) {
    document.documentElement.style.setProperty('--main-color', mainColor);
    // Remove Active Class From All Li
    document.querySelectorAll('.color-list li').forEach(element => {
        element.classList.remove('active');
        // Add Active Class On Element With Data-Color === Local Storage Item
        if(element.dataset.color === mainColor) {
            // Add Active Class
            element.classList.add('active');
        };
    });
        
};


// Check If There's Local Storage Random Background Item
if(backgroundLocalEl !== null) {

    if(backgroundLocalEl === 'true') {
        imgesOption = true;
    } else {
        imgesOption = false;
    }

    // Remove Active Class From All Buttons
    randomBackEl.forEach(element => {
        element.classList.remove('active');

    });

    if(backgroundLocalEl === 'true') {
        document.querySelector('.run').classList.add('active');
    } 
    else {
        document.querySelector('.stop').classList.add('active');
    }
}

// Toggle Settings
document.querySelector('.settings-box .icon').onclick = function() {
    this.classList.toggle('fa-spin');
    document.querySelector('.settings-box').classList.toggle('open');
};



colorLi.forEach(li => {
    li.addEventListener('click', (e) => {
        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // Set Color In Local Storage
        localStorage.setItem('color_option', e.target.dataset.color);

        // This Function For Remove Active Class From All Li I Created It Down
        hundleActive(e)
    });

});



// Switch Random Background Option
randomBackEl.forEach(button => {

    button.addEventListener('click', (e) => {

        hundleActive(e)
        // Check If Click On Random Button
        if (e.target.dataset.background === 'run'){
            imgesOption = true;
            intervalFunction()
            localStorage.setItem('background_option', true);
        }
        else{
            imgesOption = false;
            clearInterval(intervalControl);
            localStorage.setItem('background_option', false);
        }

    });
});


// Control Color
const colorOption = document.querySelectorAll('.color-selection option');

    colorOption.forEach(option => {
        option.addEventListener('click', (e) => {
            document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        });

    });
// Change Imges In Landing Page




// Window Scrolling
let ourServices = document.querySelector('.Services');

window.onscroll = function() {

    //ourServices offsetTop
    let ourServicesOffsetTop = ourServices.offsetTop;

    //ourServices Window outerHight
    let ourServicesOuterHight = ourServices.offsetHeight;

    // ourServices Window Hight 
    // 'this' is the [ window ] object
    let windowHight = this.innerHeight;

    // window Scrolling
    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (ourServicesOffsetTop + ourServicesOuterHight - windowHight)) {

       let allservices = document.querySelectorAll('.services-box .services-progress span');

       allservices.forEach(span => {
        span.style.width = span.dataset.progress;

       });

    }

};

// popup imges
let ourGallery = document.querySelectorAll('.gallary img');

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {
        // create overlay
        let overlay = document.createElement('div');

        //add class name
        overlay.className = 'popup-overlay';

        // append overlay to body
        document.body.appendChild(overlay);

        // create popup box
        let popupBox = document.createElement('div');

        // add class name
        popupBox.className = 'popup-box';

                // alt text
        if(img.alt !== null) {

            let imgElement = document.createElement('p');

            // class name
            imgElement.className = 'img-text';

            // creat text
            let imgText = document.createTextNode(img.alt);

            // append text to img
            imgElement.appendChild(imgText);

            // append img to popup box
            popupBox.appendChild(imgElement);

        };

        // create img
        let popupImage = document.createElement('img');

        // popup src
        popupImage.src = img.src;

        // append img to popup box
        popupBox.appendChild(popupImage);

        // append popup box to body
        document.body.appendChild(popupBox);

        // Creat close span
        let closeButton = document.createElement('span');

        // add class to close button
        closeButton.className = 'close-button';

        // add innerHTML or text to close button
        closeButton.innerHTML = '&times;';

        // append close button to popup box
        popupBox.appendChild(closeButton);

        // Close popup
        document.addEventListener('click', (e)=> {

            if(e.target.className == 'close-button'){

                //remove popup-box
                popupBox.remove();

                //remove overlay
                document.querySelector('.popup-overlay').remove()
            }

        });


        });

    });

// select all bullets
const allbullets = document.querySelectorAll('.bullets .bullet');

allbullets.forEach(bullet => {
    bullet.addEventListener('click', (e)=> {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior:"smooth"
        });

    });
});

// Show Bullets
const showBullets = document.querySelector('.bullets');
const showBulletsOption = document.querySelectorAll('.control-bullets .buttons button');

let bulletLocalStorge = localStorage.getItem('bullet_option');

if (bulletLocalStorge !== null) {

    showBulletsOption.forEach(button=> {
        button.classList.remove('active');
    });

    if(bulletLocalStorge === 'block') {
        showBullets.style.display = 'block';

        document.querySelector('.control-bullets .buttons .show').classList.add('active');
    }
    else{
        showBullets.style.display = 'none';

        document.querySelector('.control-bullets .buttons .hide').classList.add('active');
    }
}

showBulletsOption.forEach(button => {

    button.addEventListener('click', (e)=> {

        if (e.target.dataset.display === 'show') {

            showBullets.style.display = 'block';
            localStorage.setItem('bullet_option', 'block');
        } else {

            showBullets.style.display = 'none';
            localStorage.setItem('bullet_option', 'none');
        }
;
    });
});


// Function Section: 

function intervalFunction() {

    if (imgesOption === true) {
            intervalControl = setInterval(()=> {

            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            
            landingPage.style.backgroundImage = 'url("/imges/' + imgsArray[randomNumber]+'")';

}, 9000);
    }
};
intervalFunction()

// function hundle code
function hundleActive(et) {

            // Remove Active Class From All Li
        et.target.parentElement.querySelectorAll('.active').forEach(element => {

            element.classList.remove('active');
        });

        // Add Active Class On Element With Data-Color === Local Storage Item
        et.target.classList.add('active');
}

//Reset Button
document.querySelector('.reset').onclick = function() {

    localStorage.clear();
    window.location.reload();
};

// toggle Menue
let mobileBtn = document.querySelector('.navbar .nav-icon');
let linksOpen = document.querySelector('.navbar .links');


mobileBtn.onclick = function () {

    linksOpen.classList.toggle('open');
};


