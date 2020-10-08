function removeSplash(){
  document.getElementById("splashscreen").remove();
  // $(this).parent().fadeOut(500);
  // this.remove();
};




function mapView(){
  //make this the legend page
      window.open("legend.html");
  }

AFRAME.registerComponent('rotation-reader', {

    tick: (function () {
      var position = new THREE.Vector3();
      var quaternion = new THREE.Quaternion();
  
      return function () {
        this.el.object3D.getWorldPosition(position);
        this.el.object3D.getWorldQuaternion(quaternion);
        // position and rotation now contain vector and quaternion in world space.
      };
    })
  });
    
  
  
      // here we register che 'clickhandler' component
      AFRAME.registerComponent("clickhandler2", {
        init: function() {
          // we add the click event listener to any instance of this component
          this.el.addEventListener("click", () => {  
          // this.el.setAttribute('animation__2', 'property: position; to: 4 -2 0; duration:1000'),
            
          this.el.remove();
            
  
            });
        }
      });


      //Leprino
      AFRAME.registerComponent("leprino", {
        init: function() {
         this.el.addEventListener("click", () => {  
         window.open("https://www.cuanschutz.edu/", "Leprino");
         });
        }
      });
   
         //New next to AO1
           AFRAME.registerComponent("mysteryao1", {
           init: function() {
            this.el.addEventListener("click", () => {  
            window.open("https://www.cuanschutz.edu/", "New bldg");
            });}});
  //biotech1
  AFRAME.registerComponent("biotech1", {
    init: function() {
     this.el.addEventListener("click", () => {  
     window.open("https://www.cuanschutz.edu/", "Bioengineering 1");
        });}});








              //testcorner  - THIS ONE OPENS THE POPUP.
          // AFRAME.registerComponent("testcorner", {
          //   init: function() {
          //    this.el.addEventListener("click", () => {  
          //   document.getElementById("hwPopup").style.display ="unset";
          //       });}});




//SHOWS AND REMOVES THE POPUPS





    //healthandwellness  - THIS ONE OPENS THE POPUP.







//     AFRAME.registerComponent("healthandwellness", {
//       init: function() {
//        this.el.addEventListener("click", () => {  
//       //  window.open("http://www.google.com", "new win");     - this opens a new window w/ no popup
//        document.getElementById("hwPopup").style.display ="unset";
//           });}});

          
// function removeHwPopup(){
//   document.getElementById("hwPopup").style.display = "none";




  // this.style.display = "none";

  // this.el.addEventListener("click", () => {  
    // this.el.setAttribute('animation__2', 'property: position; to: 4 -2 0; duration:1000'),
      
    // this.el.style.display(none);
      

      // });
  //document.getElementsByClassName("testPopup").style.display = "none";
  // this.remove();
//};




//402 
    AFRAME.registerComponent("b402", {
      init: function() {
       this.el.addEventListener("click", () => {  
       document.getElementById("b402Popup").style.display ="unset";
          });}});
   
function remove402Popup(){
  document.getElementById("b402Popup").style.display = "none";
};

//401 
AFRAME.registerComponent("b401", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("b401Popup").style.display ="unset";
      });}});

function remove401Popup(){
document.getElementById("b401Popup").style.display = "none";
};

//400 
AFRAME.registerComponent("b400", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("b400Popup").style.display ="unset";
      });}});

function remove400Popup(){
document.getElementById("b400Popup").style.display = "none";
};

//RC2 
AFRAME.registerComponent("rc2", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("rc2Popup").style.display ="unset";
      });}});

function removeRc2Popup(){
document.getElementById("rc2Popup").style.display = "none";
};

//AO1
AFRAME.registerComponent("ao1", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("ao1Popup").style.display ="unset";
      });}});

function removeAo1Popup(){
document.getElementById("ao1Popup").style.display = "none";
};

//rc1n
AFRAME.registerComponent("rc1n", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("rc1nPopup").style.display ="unset";
      });}});

function removeRc1nPopup(){
document.getElementById("rc1nPopup").style.display = "none";
};

//rc1s
AFRAME.registerComponent("rc1s", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("rc1sPopup").style.display ="unset";
      });}});

function removeRc1sPopup(){
document.getElementById("rc1sPopup").style.display = "none";
};

//pharmacy
AFRAME.registerComponent("pharmacy", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("pharmacyPopup").style.display ="unset";
      });}});

function removePharmacysPopup(){
document.getElementById("pharmacyPopup").style.display = "none";
};

//b500
AFRAME.registerComponent("b500", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("b500Popup").style.display ="unset";
      });}});

function removeB500Popup(){
document.getElementById("b500Popup").style.display = "none";
};

//barbdavis
AFRAME.registerComponent("barbdavis", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("barbdavisPopup").style.display ="unset";
      });}});

function removeBarbdavisPopup(){
document.getElementById("barbdavisPopup").style.display = "none";
};

//library
AFRAME.registerComponent("library", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("libraryPopup").style.display ="unset";
      });}});

function removeLibraryPopup(){
document.getElementById("libraryPopup").style.display = "none";
};

//nighthorse
AFRAME.registerComponent("nighthorse", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("nighthorsePopup").style.display ="unset";
      });}});

function removeNighthorsePopup(){
document.getElementById("nighthorsePopup").style.display = "none";
};

//ed1
AFRAME.registerComponent("ed1", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("ed1Popup").style.display ="unset";
      });}});

function removeEd1Popup(){
document.getElementById("ed1Popup").style.display = "none";
};

//dental 
AFRAME.registerComponent("dental", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("dentalPopup").style.display ="unset";
      });}});

function removeDentalPopup(){
document.getElementById("dentalPopup").style.display = "none";
};

//fulgeneti
AFRAME.registerComponent("fulgeneti", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("fulgenetiPopup").style.display ="unset";
      });}});

function removeFulgenetiPopup(){
document.getElementById("fulgenetiPopup").style.display = "none";
};

//ed2n
AFRAME.registerComponent("ed2n", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("ed2nPopup").style.display ="unset";
      });}});

function removeEd2nPopup(){
document.getElementById("ed2nPopup").style.display = "none";
};

//ed2s
AFRAME.registerComponent("ed2s", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("ed2sPopup").style.display ="unset";
      });}});

function removeEd2sPopup(){
document.getElementById("ed2sPopup").style.display = "none";
};

//campserve
AFRAME.registerComponent("campserve", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("campservePopup").style.display ="unset";
      });}});

function removeCampservePopup(){
document.getElementById("campservePopup").style.display = "none";
};



          
                

                  //test2
          AFRAME.registerComponent("test2", {
            init: function() {
             this.el.addEventListener("click", () => {  
             window.open("http://www.safeway.com", "new win");
                });}});
         
         



    
    
     
    // SCRIPT FOR SCORING
      //  AFRAME.registerComponent("points", {
         
      //   init: function() {
      //     // we add the click event listener to any instance of this component
      //     var button = document.getElementById("clickme"),
      //     count = 0;
          
          
      //     this.el.addEventListener("click", () => { 
            
                        
      //       count +=0.5;
      //       button.innerHTML = "Score: " + count;
      //         if (count === 30){
      //         window.alert("You win!");
      //       }
            
  
      //       });
      //   }
      // });
  
  
    
  
     AFRAME.registerComponent('vanish', {
    // ...
    pause: function () {
      
      this.removeEventListener();
    }
    // ...
  });
   

     
        window.onload = () => {navigator.geolocation.getCurrentPosition((position) => {
          document.querySelector('a-shere').setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`)
        });
       }
      


      //  TEST FOR ADDING MULTIPLE STARBUCKS LOCATIONS of one object type
  
  
window.onload = () => {
  //THE LOCATION ARRAYS OF WHERE OUR DIFFERENT BUSINESSES WILL BE
  let placesParking = staticLoadPlacesParking();
  let placesTrash = staticLoadPlacesTrash();
  let placesWaterFeat = staticLoadPlacesWaterFeat();
  let placesTrees = staticLoadPlacesTrees();
  let placesRestroom = staticLoadPlacesRestroom();
  let placesShelter = staticLoadPlacesShelter();
  let placesGate = staticLoadPlacesGate();
 //RENDER THOSE LOCATIONS
  renderPlacesParking(placesParking);  
  renderPlacesTrash(placesTrash);
  renderPlacesWaterFeat(placesWaterFeat);
  renderPlacesTrees(placesTrees);
  renderPlacesRestroom(placesRestroom);
  renderPlacesShelter(placesShelter);
  renderPlacesGate(placesGate);
};




 //THE FIRST BUSINESS' LOCATIONS
function staticLoadPlacesParking() {
 return [


//at work near office
//flag pole
{ location: {lat: 39.744414,lng: -104.837586,  }, },
//childrens hosp
{ location: {lat: 39.742616,lng: -104.836166,  }, },
//colfax ursula
{ location: {lat: 39.740027,lng: -104.83095,  }, },

{ location: {lat: 39.476921,lng: -105.082274,  }, },
{ location: {lat: 39.476638,lng: -105.082994,  }, },
{ location: {lat: 39.476290,lng: -105.083595,  }, },
{ location: {lat: 39.475872,lng: -105.084223,  }, },


{location: {lat: 39.484604,  lng: -105.074975,},},
      {location: {lat: 39.484071, lng: -105.075172,},},
      {location: {lat: 39.483723,  lng: -105.075175,},},
      {location: {lat: 39.484170,  lng: -105.073804,},},
      {location: {lat: 39.482957,  lng: -105.073747,},},





      {location: {lat: 39.724642, lng: -105.029859,},}, //Barnum
      {location: {lat: 39.781798,  lng: -105.052153,},}, //Berkeley Lake Dog Park
      {location: {lat: 39.889865,  lng: -104.963441,},}, //Bill Goodspeed Happy Tails Dog Park
      {location: {lat: 39.927629,  lng: -105.009662,},}, // Big Dry Creek
      {location: {lat: 39.938930, lng: -105.051636,},}, //Broomfield County Commons Dog Park
      {location: {lat: 39.939354,  lng: -105.048791,},}, //Broomfield County Commons Dog Park
      {location: {lat: 39.632838,  lng: -105.022999,},}, //Centennial Park Off Leash Dog Area
      {location: {lat: 39.631679,  lng: -105.018935,},}, //Centennial Park Off Leash Dog Area
      {location: {lat: 39.562679, lng: -105.050013,},}, //Chatfield State Park Off-Leash Dog Area
      {location: {lat: 39.561548,  lng: -105.055608,},}, //Chatfield State Park Off-Leash Dog Area
      {location: {lat: 39.614110,  lng: -104.816574,},}, //Cherry Creek State Park Dog Off-Leash Area (DOLA)
      {location: {lat: 39.623590,  lng: -104.830858,},},  //Cherry Creek State Park Dog Off-Leash Area (DOLA)
      {location: {lat: 39.978228, lng: -105.166165,},}, //Davidson Mesa Dog park
      {location: {lat: 39.532895,  lng: -104.949383,},}, //Digger's Dog Park at Dad Clark
      {location: {lat: 39.779243,  lng: -105.185402,},}, //Dog Park at Tony Grampsas
       //Duncan Park Off Leash Dog Area HAS NONE LISTED
       {location: {lat: 39.990776,  lng: -105.222762,},}, //East Boulder Dog Park
       {location: {lat: 39.628128,  lng: -105.006261,},}, //Englewood Canine Corral
       {location: {lat:  39.534743,  lng: -104.994402,},}, //Fido's Field at Foothill Park
       //First Creek Farm Small Dog Park HAS NONE LISTED
       {location: {lat: 39.680500,  lng: -105.169244,},}, //Forsberg - Iron Spring Dog Park
       //-Fuller Dog Park HAS NONE LISTED
       {location: {lat: 39.491347,  lng: -104.870525,},}, //Glendale Farm Open Space Dog Park
       {location: {lat: 39.638302,  lng: -104.785430,},}, //Grandview Dog Park
       {location: {lat: 39.779144,  lng: -104.749837,},}, //Green Valley Ranch East Off Leash Area
       {location: {lat: 39.968206,  lng: 39.968206,},}, //Happy Tails Dog Park
       {location: {lat: 39.538156,  lng: -104.917197,},}, //Hound Hill Dog Park at Heritage Regional Park
       //Howard Heuston Off Leash Dog Area HAS NONE LISTED
       {location: {lat: 39.639773,  lng: -104.999578,},}, //Jackson dog park
       {location: {lat: 39.649790,  lng: -104.874215,},}, //Kennedy dog park
       {location: {lat: 39.970736,  lng: -105.131181,},}, //Louisville Dog Park
       {location: {lat: 39.720318,  lng: -104.884929,},}, //Lowry Dog Park
       //Northwest Greenbelt Off Leash Area HAS NONE LISTED
       {location: {lat: 39.758273,  lng: -105.001841,},}, //Railyard Dog Park
       {location: {lat: 39.546678,  lng: -105.023277,},}, //Rovers run dog park
       {location: {lat: 39.748689,  lng: -104.897831,},}, //Stapleton Dog Park
       {location: {lat: 40.004360,  lng: -105.074700,},}, //The Great Bark Dog Park
       {location: {lat: 40.029655,  lng: -105.230795,},}, //Valmont Dog Park
       {location: {lat: 39.816401,  lng: -105.203061,},}, //West Arvada Dog Park
       {location: {lat: 39.878435,  lng: -105.132384,},}, //Westminster Hills Off Leash Dog Park
       {location: {lat: 39.612074,  lng: -105.036799,},}, //Wynetka Ponds Dog Park


//500
       {location: {lat: 39.745596,  lng: -104.837683,},},
      // home
       {location: {lat: 39.476687,  lng: -105.081950 ,},},







        ];
        }
        

///////////////////////////////

        function locationSize()  {}
        if(navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((position) => {
           location.lat = position.coords.latitude;
           location.long = position.coords.longitude;
               console.log(location.lat); 
          })};



//RENDER THE FIRST BUSINESS' 3D MODEL OR LOGO - AND SET THE OBJECTS ATTRIBUTES
function renderPlacesParking(placesParking) {
 let scene = document.querySelector('a-scene');

 placesParking.forEach((place) => {
     let latitude = place.location.lat;
     let longitude = place.location.lng;

     let modelPark = document.createElement('a-entity');

////////////////////


     let p = location.lat + latitude;
     let t = location.long - longitude;

let modelHeight = [(p + t) * 0.3];

   console.log(location.long);


   
     modelPark.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
     modelPark.setAttribute('gltf-model', 'models/dogParkParking2.gltf');
   
     //allows to rotate
     modelPark.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 6000; easing: linear');
    modelPark.setAttribute('scale', `25 25 25;`);
    modelPark.addEventListener('loaded', () => {
    window.dispatchEvent(new CustomEvent('gps-entity-place-loadedPark'))

    modelPark.setAttribute('position', `0 ${modelHeight} 0;`);  
  
     });

//removes model when clicked
modelPark.addEventListener('click', () => {
  // modelPark.remove();
  //window.open("https://www.starbucks.com/menu?_branch_match_id=713537451166389183", "Starbucks Order");
  document.getElementById("parkingPopup").style.display ="unset";
       
     });

     scene.appendChild(modelPark);
 });
}



//THE TRASH CAN LOCATIONS
function staticLoadPlacesTrash() {
  return [
      {location: {lat: 39.484604,  lng: -105.074975,},},
      {location: {lat: 39.484071, lng: -105.075172,},},
      {location: {lat: 39.483723,  lng: -105.075175,},},
      {location: {lat: 39.484170,  lng: -105.073804,},},
      {location: {lat: 39.482957,  lng: -105.073747,},},

      {location: {lat: 39.723885, lng: -105.029733,},}, //Barnum
      // {location: {lat: 39.781798,  lng: -105.052153,},}, //Berkeley Lake Dog Park HAS NONE
      {location: {lat: 39.927781,  lng: -105.008541,},}, // Big Dry Creek
      {location: {lat: 39.889711,  lng: -104.962664,},}, //Bill Goodspeed Happy Tails Dog Park
      {location: {lat: 39.939318, lng: -105.049682,},}, //Broomfield County Commons Dog Park
      {location: {lat: 39.939331,  lng: -105.050698,},}, //Broomfield County Commons Dog Park
      {location: {lat: 39.633044,  lng: -105.022758,},}, //Centennial Park Off Leash Dog Area
      {location: {lat: 39.632702,  lng: -105.022717,},}, //Centennial Park Off Leash Dog Area
      {location: {lat: 39.634888,  lng: -105.023535,},}, //Centennial Park Off Leash Dog Area
      {location: {lat: 39.561799, lng: -105.056352,},}, //Chatfield State Park Off-Leash Dog Area
      {location: {lat: 39.563043,  lng: -105.050798,},}, //Chatfield State Park Off-Leash Dog Area
      {location: {lat: 39.613534,  lng: -104.816444,},}, //Cherry Creek State Park Dog Off-Leash Area (DOLA)
      {location: {lat: 39.623637,  lng: -104.830820,},},  //Cherry Creek State Park Dog Off-Leash Area (DOLA)
      {location: {lat: 39.978256, lng: -105.166810,},}, //Davidson Mesa Dog park
      {location: {lat: 39.533360,  lng: -104.950325,},}, //Digger's Dog Park at Dad Clark
      //{location: {lat: 39.779243,  lng: -105.185402,},}, //Dog Park at Tony Grampsas - None listed
      {location: {lat: 39.628591,  lng: -104.981764,},}, //Duncan Park Off Leash Dog Area 
      {location: {lat: 39.629348,  lng: -104.981513,},}, //Duncan Park Off Leash Dog Area 
      {location: {lat: 39.628861,  lng: -104.981063,},}, //Duncan Park Off Leash Dog Area 
      {location: {lat: 39.628947,  lng: -104.981963,},}, //Duncan Park Off Leash Dog Area 
       {location: {lat: 39.991132,  lng: -105.222417,},}, //East Boulder Dog Park
       {location: {lat: 39.628258,  lng: -105.005686,},}, //Englewood Canine Corral
       {location: {lat: 39.534999,  lng: -104.998008,},}, //Fido's Field at Foothill Park
       {location: {lat: 39.800383,  lng: -104.758967,},},//First Creek Farm Small Dog Park
       {location: {lat: 39.679611,  lng: -105.167968,},}, //Forsberg - Iron Spring Dog Park
       {location: {lat: 39.757969,  lng: -104.967700,},}, //-Fuller Dog Park
       {location: {lat: 39.491286,  lng: -104.870662,},}, //Glendale Farm Open Space Dog Park

       {location: {lat: 39.637143,  lng: -104.784225,},}, //Grandview Dog Park
       {location: {lat: 39.779846,  lng: -104.751160,},}, //Green Valley Ranch East Off Leash Area
       {location: {lat: 39.779301,  lng: -104.750930,},}, //Green Valley Ranch East Off Leash Area
       {location: {lat: 39.967937,  lng: -104.764614,},}, //Happy Tails Dog Park
       {location: {lat: 39.537924,  lng: -104.918296,},}, //Hound Hill Dog Park at Heritage Regional Park
       {location: {lat: 40.033503,  lng: -105.248646,},},//Howard Heuston Off Leash Dog Area
       {location: {lat: 39.639402,  lng: -104.999917,},}, //Jackson dog park
       {location: {lat: 39.649728,  lng: -104.874571,},}, //Kennedy dog park
       {location: {lat: 39.649904,  lng: -104.874571,},}, //Kennedy dog park
       {location: {lat: 39.970827,  lng: -105.130942,},}, //Louisville Dog Park
       {location: {lat: 39.719105,  lng: -104.882473,},}, //Lowry Dog Park
       {location: {lat: 39.718844,  lng: -104.881583,},}, //Lowry Dog Park
       {location: {lat: 39.670959,  lng: -105.022865,},},//Northwest Greenbelt Off Leash Area 
       {location: {lat: 39.670582,  lng: 105.022656,},},//Northwest Greenbelt Off Leash Area 
       {location: {lat: 39.670860,  lng: -105.024376,},},//Northwest Greenbelt Off Leash Area 
       {location: {lat: 39.758045,  lng: -105.001433,},}, //Railyard Dog Park
       {location: {lat: 39.547065,  lng: 105.027024,},}, //Rovers run dog park
       {location: {lat: 39.546969,  lng: -105.022038,},}, //Rovers run dog park
       {location: {lat: 39.749874,  lng: -104.897254,},}, //Stapleton Dog Park
       {location: {lat: 40.004550,  lng: -105.075423,},}, //The Great Bark Dog Park
       {location: {lat: 40.030314,  lng: -105.230228,},}, //Valmont Dog Park
       {location: {lat: 39.816760,  lng: -105.205466,},}, //West Arvada Dog Park
       {location: {lat: 39.878809,  lng: -105.132486,},}, //Westminster Hills Off Leash Dog Park
       {location: {lat: 39.610410,  lng: -105.038813,},}, //Wynetka Ponds Dog Park
       {location: {lat: 39.611615,  lng: -105.037431,},}, //Wynetka Ponds Dog Park

       //500
{location: {lat: 39.744829,  lng: -104.837667 ,},},
{location: {lat:39.744831,  lng: -104.837522,},},
//home
{location: {lat: 39.477062,  lng: -105.081663,},},
{location: {lat: 39.476847,  lng: -105.081652,},},

         ];
         }
    
//RENDER THE SECOND(CU) BUSINESS' 3D MODEL OR LOGO - AND SET THE OBJECTS ATTRIBUTES
 function renderPlacesTrash(placesTrash) {
  let sceneTrash = document.querySelector('a-scene');
    placesTrash.forEach((placeTrash) => {
      let latitudeTrash = placeTrash.location.lat;
      let longitudeTrash = placeTrash.location.lng;
        let modelTrash = document.createElement('a-entity');

        let p = location.lat + latitudeTrash;
        let t = location.long - longitudeTrash;
   
   let modelHeight = [(p + t) * 0.3];



      modelTrash.setAttribute('gps-entity-place', `latitude: ${latitudeTrash}; longitude: ${longitudeTrash};`);
      modelTrash.setAttribute('gltf-model', 'models/dogParkTrash.gltf');
      // modelCU.setAttribute('gltf-model', 'models/dogParkParking.gltf');
      modelTrash.setAttribute('scale', '20 20 20');
           //allows to rotate
      modelTrash.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 4000; easing: linear');
      modelTrash.addEventListener('loaded', () => {
     window.dispatchEvent(new CustomEvent('gps-entity-place-loadedTrash'))
     modelTrash.setAttribute('position', `0 ${modelHeight} 0;`);
 
      });

 //removes model when clicked
 modelTrash.addEventListener('click', () => {
  //  modelTrash.remove();
   //window.open("https://www.starbucks.com/menu?_branch_match_id=713537451166389183", "Starbucks Order");
   document.getElementById("trashPopup").style.display ="unset";

      });
 
      sceneTrash.appendChild(modelTrash);
  });
 }












//THE WATER FEATURE LOCATIONS
function staticLoadPlacesWaterFeat() {
  return [
      {location: {lat: 39.484604,  lng: -105.074975,},},
      {location: {lat: 39.484071, lng: -105.075172,},},
      {location: {lat: 39.483723,  lng: -105.075175,},},
      {location: {lat: 39.484170,  lng: -105.073804,},},
      {location: {lat: 39.482957,  lng: -105.073747,},},


      // {location: {lat: 39.723885, lng: -105.029733,},}, //Barnum
      {location: {lat: 39.783264,  lng: -105.048402,},}, //Berkeley Lake Dog Park 
      
     
      {location: {lat: 39.634933,  lng: -105.019830,},}, //Centennial Park Off Leash Dog Area
      {location: {lat: 39.634503,  lng: -105.017934,},}, //Centennial Park Off Leash Dog Area
      {location: {lat: -105.017934,  lng: -105.020982,},}, //Centennial Park Off Leash Dog Area

      {location: {lat: 39.565138, lng: -105.049284,},}, //Chatfield State Park Off-Leash Dog Area
      {location: {lat: 39.563299,  lng: -105.053629,},}, //Chatfield State Park Off-Leash Dog Area
      {location: {lat: 39.611252,  lng: -104.821162,},},  //Cherry Creek State Park Dog Off-Leash Area (DOLA)
      {location: {lat: 39.612486,  lng: -104.821617,},}, //Cherry Creek State Park Dog Off-Leash Area (DOLA)
      {location: {lat: 39.614212,  lng: -104.824504,},},  //Cherry Creek State Park Dog Off-Leash Area (DOLA)
     // {location: {lat: 39.978256, lng: -105.166810,},}, //Davidson Mesa Dog park Has none
      //{location: {lat: 39.533360,  lng: -104.950325,},}, //Digger's Dog Park at Dad Clark has none
      //{location: {lat: 39.779243,  lng: -105.185402,},}, //Dog Park at Tony Grampsas - None listed
      //{location: {lat: 39.628591,  lng: -104.981764,},}, //Duncan Park Off Leash Dog Area  has none
      {location: {lat: 39.629348,  lng: -104.981513,},}, //Duncan Park Off Leash Dog Area 
     
       {location: {lat: 39.991565,  lng: -105.221568,},}, //East Boulder Dog Park
      // {location: {lat: 39.628258,  lng: -105.005686,},}, //Englewood Canine Corral None
      // {location: {lat: 39.534999,  lng: -104.998008,},}, //Fido's Field at Foothill Park
      // {location: {lat: 39.800383,  lng: -104.758967,},},//First Creek Farm Small Dog Park
     //  {location: {lat: 39.679611,  lng: -105.167968,},}, //Forsberg - Iron Spring Dog Park
    //   {location: {lat: 39.757969,  lng: -104.967700,},}, //-Fuller Dog Park
    //   {location: {lat: 39.491286,  lng: -104.870662,},}, //Glendale Farm Open Space Dog Park

    //   {location: {lat: 39.637143,  lng: -104.784225,},}, //Grandview Dog Park
    //   {location: {lat: 39.779846,  lng: -104.751160,},}, //Green Valley Ranch East Off Leash Area
    //   {location: {lat: 39.779301,  lng: -104.750930,},}, //Green Valley Ranch East Off Leash Area
       {location: {lat: 39.967498,  lng: -104.764628,},}, //Happy Tails Dog Park
       {location: {lat: 39.967459,  lng: -104.765740,},}, //Happy Tails Dog Park

     //  {location: {lat: 39.537924,  lng: -104.918296,},}, //Hound Hill Dog Park at Heritage Regional Park
    //   {location: {lat: 40.033503,  lng: -105.248646,},},//Howard Heuston Off Leash Dog Area
   //    {location: {lat: 39.639402,  lng: -104.999917,},}, //Jackson dog park
   //    {location: {lat: 39.649728,  lng: -104.874571,},}, //Kennedy dog park
  //     {location: {lat: 39.649904,  lng: -104.874571,},}, //Kennedy dog park
  //     {location: {lat: 39.970827,  lng: -105.130942,},}, //Louisville Dog Park
    //   {location: {lat: 39.719105,  lng: -104.882473,},}, //Lowry Dog Park
 //      {location: {lat: 39.718844,  lng: -104.881583,},}, //Lowry Dog Park
       {location: {lat: 39.671034,  lng: -105.024087,},},//Northwest Greenbelt Off Leash Area 
    
    //   {location: {lat: 39.758045,  lng: -105.001433,},}, //Railyard Dog Park
    //   {location: {lat: 39.547065,  lng: 105.027024,},}, //Rovers run dog park
    //   {location: {lat: 39.546969,  lng: -105.022038,},}, //Rovers run dog park
   //    {location: {lat: 39.749874,  lng: -104.897254,},}, //Stapleton Dog Park
   //    {location: {lat: 40.004550,  lng: -105.075423,},}, //The Great Bark Dog Park
       {location: {lat: 40.030406,  lng: -105.229997,},},//Valmont Dog Park
       {location: {lat: 40.030222,  lng: -105.229475,},}, //Valmont Dog Park
       {location: {lat: 40.029689,  lng: -105.229424,},}, //Valmont Dog Park

     //  {location: {lat: 40.030406,  lng: -105.229997,},}, //West Arvada Dog Park
       {location: {lat: 39.887558,  lng: -105.134014,},}, //Westminster Hills Off Leash Dog Park
 //500
       {location: {lat: 39.745477,  lng: -104.836926,},},
      // home
       {location: {lat: 39.477341,  lng: -105.082842,},},






         ];
         }
    
//RENDER THE SECOND(CU) BUSINESS' 3D MODEL OR LOGO - AND SET THE OBJECTS ATTRIBUTES
 function renderPlacesWaterFeat(placesWaterFeat) {
  let sceneWaterFeat = document.querySelector('a-scene');
    placesWaterFeat.forEach((placeWaterFeat) => {
      let latitudeWaterFeat = placeWaterFeat.location.lat;
      let longitudeWaterFeat = placeWaterFeat.location.lng;
        let modelWaterFeat = document.createElement('a-entity');
/////////////////

        let p = location.lat + latitudeWaterFeat;
        let t = location.long - longitudeWaterFeat;
   
   let modelHeight = [(p + t) * 0.3];
//////////////////

      modelWaterFeat.setAttribute('gps-entity-place', `latitude: ${latitudeWaterFeat}; longitude: ${longitudeWaterFeat};`);
      modelWaterFeat.setAttribute('gltf-model', 'models/dogParkWaterFeature.gltf');
      // modelCU.setAttribute('gltf-model', 'models/dogParkParking.gltf');
      modelWaterFeat.setAttribute('scale', '25 25 25');
           //allows to rotate
      modelWaterFeat.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 4000; easing: linear');
      modelWaterFeat.addEventListener('loaded', () => {
     window.dispatchEvent(new CustomEvent('gps-entity-place-loadedWaterFeat'))
     modelWaterFeat.setAttribute('position', `0 ${modelHeight} 0;`);
 
      });

 //removes model when clicked
 modelWaterFeat.addEventListener('click', () => {
  //  modelTrash.remove();
   //window.open("https://www.starbucks.com/menu?_branch_match_id=713537451166389183", "Starbucks Order");
   document.getElementById("waterFeatPopup").style.display ="unset";

      });
 
      sceneWaterFeat.appendChild(modelWaterFeat);
  });
 }





//THE TREE AND SHADE LOCATIONS
function staticLoadPlacesTrees() {
  return [
      {location: {lat: 39.484604,  lng: -105.074975,},},
      {location: {lat: 39.484071, lng: -105.075172,},},
      {location: {lat: 39.483723,  lng: -105.075175,},},
      {location: {lat: 39.484170,  lng: -105.073804,},},
      {location: {lat: 39.482957,  lng: -105.073747,},},



      {location: {lat: 39.634200,  lng: -105.019496,},}, //Centennial Park Off Leash Dog Area
      {location: {lat: 39.634847,  lng: -105.020867,},}, //Centennial Park Off Leash Dog Area

      {location: {lat: 39.562514, lng: -105.057731,},}, //Chatfield State Park Off-Leash Dog Area
      {location: {lat: 39.564697,  lng: -105.052194,},}, //Chatfield State Park Off-Leash Dog Area

      {location: {lat: 39.613724,  lng: -104.822982,},},  //Cherry Creek State Park Dog Off-Leash Area (DOLA)
      {location: {lat: 39.619980,  lng: -104.828822,},}, //Cherry Creek State Park Dog Off-Leash Area (DOLA)
      {location: {lat: 39.617180,  lng: -104.821759,},},  //Cherry Creek State Park Dog Off-Leash Area (DOLA)

      {location: {lat: 39.978044, lng: -105.170631,},}, //Davidson Mesa Dog park
    
      {location: {lat: 39.779461,  lng: -105.187212,},}, //Dog Park at Tony Grampsas 
     
       {location: {lat: 39.991501,  lng: -105.222276,},}, //East Boulder Dog Park
       
       {location: {lat: 39.679705,  lng: -105.171009,},}, //Forsberg - Iron Spring Dog Park
      
       {location: {lat: 39.489570,  lng: -104.868422,},}, //Glendale Farm Open Space Dog Park
       {location: {lat: 39.486570,  lng: -104.866681,},}, //Glendale Farm Open Space Dog Park
       {location: {lat:39.491257,  lng: -104.867274,},}, //Glendale Farm Open Space Dog Park
       {location: {lat: 39.492509,  lng: -104.868298,},}, //Glendale Farm Open Space Dog Park

     
       
     
    
      
       {location: {lat: 39.670662,  lng: -105.023030,},},//Northwest Greenbelt Off Leash Area 
      
      // {location: {lat: 39.749874,  lng: -104.897254,},}, //Stapleton Dog Park
       {location: {lat: 40.003385,  lng: -105.078849,},}, //The Great Bark Dog Park
       {location: {lat: 40.030706,  lng: -105.230956,},}, //Valmont Dog Park
     //  {location: {lat: 39.816760,  lng: -105.205466,},}, //West Arvada Dog Park

       {location: {lat: 39.880129,  lng: -105.134086,},}, //Westminster Hills Off Leash Dog Park
       {location: {lat: 39.885157,  lng: -105.144481,},}, //Westminster Hills Off Leash Dog Park
       {location: {lat: 39.886191,  lng: -105.137143,},}, //Westminster Hills Off Leash Dog Park
     //500
       {location: {lat: 39.744859,  lng: -104.836816,},},
{location: {lat: 39.744995,  lng: -104.836609,},},
//home
{location: {lat: 39.477747,  lng: -105.081129 ,},}


         ];
         }
    
//RENDER THE SECOND(CU) BUSINESS' 3D MODEL OR LOGO - AND SET THE OBJECTS ATTRIBUTES
 function renderPlacesTrees(placesTrees) {
  let sceneTrees = document.querySelector('a-scene');
    placesTrees.forEach((placeTrees) => {
      let latitudeTrees = placeTrees.location.lat;
      let longitudeTrees = placeTrees.location.lng;
        let modelTrees = document.createElement('a-entity');


        let p = location.lat + latitudeTrees;
        let t = location.long - longitudeTrees;
   
   let modelHeight = [(p + t) * 0.3];


      modelTrees.setAttribute('gps-entity-place', `latitude: ${latitudeTrees}; longitude: ${longitudeTrees};`);
      modelTrees.setAttribute('gltf-model', 'models/dogParkTrees.gltf');
      // modelCU.setAttribute('gltf-model', 'models/dogParkParking.gltf');
      modelTrees.setAttribute('scale', '25 25 25');
           //allows to rotate
      modelTrees.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 4000; easing: linear');
      modelTrees.addEventListener('loaded', () => {
     window.dispatchEvent(new CustomEvent('gps-entity-place-loadedTrees'))
     modelTrees.setAttribute('position', `0 ${modelHeight} 0;`);
 
      });

 //removes model when clicked
 modelTrees.addEventListener('click', () => {
  //  modelTrash.remove();
   //window.open("https://www.starbucks.com/menu?_branch_match_id=713537451166389183", "Starbucks Order");
   document.getElementById("treesPopup").style.display ="unset";

      });
 
      sceneTrees.appendChild(modelTrees);
  });
 }




//Restrooms
function staticLoadPlacesRestroom() {
  return [
      {location: {lat: 39.484604,  lng: -105.074975,},},
      {location: {lat: 39.484071, lng: -105.075172,},},
      {location: {lat: 39.483723,  lng: -105.075175,},},
      {location: {lat: 39.484170,  lng: -105.073804,},},
      {location: {lat: 39.482957,  lng: -105.073747,},},


      {location: {lat: 39.723686, lng: -105.029236,},}, //Barnum
      // {location: {lat: 39.781798,  lng: -105.052153,},}, //Berkeley Lake Dog Park HAS NONE
      {location: {lat: 39.927692,  lng: -105.008613,},}, // Big Dry Creek
      {location: {lat: 39.889909,  lng: -104.962865,},}, //Bill Goodspeed Happy Tails Dog Park
      {location: {lat: 39.937375, lng: -105.049488 ,},}, //Broomfield County Commons Dog Park
      {location: {lat: 39.940100,  lng: -105.050914,},}, //Broomfield County Commons Dog Park
      {location: {lat: 39.632478,  lng: -105.022936,},}, //Centennial Park Off Leash Dog Area
      {location: {lat: 39.631861,  lng: -105.018467,},}, //Centennial Park Off Leash Dog Area
     
      {location: {lat: 39.563286, lng: -105.050267,},}, //Chatfield State Park Off-Leash Dog Area
      {location: {lat: 39.562075,  lng: -105.055891,},}, //Chatfield State Park Off-Leash Dog Area
      {location: {lat: 39.613355,  lng: -104.816394,},}, //Cherry Creek State Park Dog Off-Leash Area (DOLA)
      {location: {lat: 39.623944,  lng: -104.830789,},},  //Cherry Creek State Park Dog Off-Leash Area (DOLA)
      {location: {lat: 39.977939, lng: -105.166448,},}, //Davidson Mesa Dog park
      {location: {lat: 39.533394,  lng: -104.950250,},}, //Digger's Dog Park at Dad Clark
      {location: {lat: 39.777917,  lng: -105.188337,},}, //Dog Park at Tony Grampsas - None listed
      {location: {lat: 39.628326,  lng: -104.981409,},}, //Duncan Park Off Leash Dog Area 
     
       {location: {lat: 39.991231,  lng: -105.222317,},}, //East Boulder Dog Park
       {location: {lat: 39.628044,  lng: -105.005717,},}, //Englewood Canine Corral
       {location: {lat: 39.535478,  lng: -104.997280,},}, //Fido's Field at Foothill Park
       {location: {lat: 39.800457,  lng: -104.758942,},},//First Creek Farm Small Dog Park
       {location: {lat: 39.801061,  lng: -104.759142,},},//First Creek Farm Small Dog Park
       {location: {lat: 39.679660,  lng: -105.167887,},}, //Forsberg - Iron Spring Dog Park
       {location: {lat: 39.757684,  lng: -104.967228,},}, //-Fuller Dog Park
       {location: {lat: 39.491000,  lng: -104.869715,},}, //Glendale Farm Open Space Dog Park
       {location: {lat: 39.488168,  lng: -104.870547,},}, //Glendale Farm Open Space Dog Park
       {location: {lat: 39.637186,  lng: -104.784128,},}, //Grandview Dog Park
       {location: {lat: 39.779382,  lng: -104.750955,},}, //Green Valley Ranch East Off Leash Area
       
       {location: {lat: 39.969036,  lng: -104.765551,},}, //Happy Tails Dog Park
       {location: {lat: 39.538239,  lng: -104.917974,},}, //Hound Hill Dog Park at Heritage Regional Park
       //{location: {lat: 40.033503,  lng: -105.248646,},},//Howard Heuston Off Leash Dog Area
       {location: {lat: 39.639314,  lng: -104.999687,},}, //Jackson dog park
       {location: {lat: 39.971536,  lng: -105.131222,},}, //Louisville Dog Park
       {location: {lat: 39.719218,  lng: -104.886241,},}, //Lowry Dog Park
       
       {location: {lat: 39.547233,  lng: -105.026505,},}, //Rovers run dog park
       {location: {lat: 39.547493,  lng: -105.023444,},}, //Rovers run dog park
       {location: {lat: 39.748869,  lng: -104.897849,},}, //Stapleton Dog Park
       {location: {lat: 40.004251,  lng: -105.075417,},}, //The Great Bark Dog Park
       //{location: {lat: 40.030314,  lng: -105.230228,},}, //Valmont Dog Park
       {location: {lat: 39.816697,  lng: -105.204520,},}, //West Arvada Dog Park
       {location: {lat: 39.878753,  lng: -105.131729,},}, //Westminster Hills Off Leash Dog Park
       {location: {lat: 39.611661,  lng: -105.037519,},}, //Wynetka Ponds Dog Park
      
       
       {location: {lat: 39.745054,  lng: -104.838536,},},  //500
       //home
       {location: {lat: 39.476832,  lng: -105.082243,},},
       {location: {lat: 39.476976, lng: -105.082215,},},

       //500
{location: {lat: 39.745054,  lng: -104.838536,},},
//home
{location: {lat: 39.476832,  lng: -105.082243,},},
{location: {lat: 39.476976, lng: -105.082215,},},


         ];
         }
    

 function renderPlacesRestroom(placesRestroom) {
  let sceneRestroom = document.querySelector('a-scene');
    placesRestroom.forEach((placeRestroom) => {
      let latitudeRestroom = placeRestroom.location.lat;
      let longitudeRestroom = placeRestroom.location.lng;
        let modelRestroom = document.createElement('a-entity');


        let p = location.lat + latitudeRestroom;
        let t = location.long - longitudeRestroom;
   
   let modelHeight = [(p + t) * 0.3];



      modelRestroom.setAttribute('gps-entity-place', `latitude: ${latitudeRestroom}; longitude: ${longitudeRestroom};`);
      modelRestroom.setAttribute('gltf-model', 'models/restroomLogo.gltf');
      
      modelRestroom.setAttribute('scale', '50 50 50');
           
      modelRestroom.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 4000; easing: linear');
      modelRestroom.addEventListener('loaded', () => {
     window.dispatchEvent(new CustomEvent('gps-entity-place-loadedRestroom'))
     modelRestroom.setAttribute('position', `0 ${modelHeight} 0;`);
 
      });


 modelRestroom.addEventListener('click', () => {
 
   document.getElementById("restroomPopup").style.display ="unset";

      });
 
      sceneRestroom.appendChild(modelRestroom);
  });
 }


//SHELTER
function staticLoadPlacesShelter() {
  return [
      {location: {lat: 39.484604,  lng: -105.074975,},},
      {location: {lat: 39.484071, lng: -105.075172,},},
      {location: {lat: 39.483723,  lng: -105.075175,},},
      {location: {lat: 39.484170,  lng: -105.073804,},},
      {location: {lat: 39.482957,  lng: -105.073747,},},


{location: {lat: 39.724220, lng: -105.029435,},}, //barnum
{location: {lat: 39.723285, lng: -105.028902,},}, //barnum
{location: {lat: 39.782229, lng: -105.052309,},}, // Berkeley lake
{location: {lat: 39.927976, lng: -105.007968,},}, // big dry creek
{location: {lat: 39.889372, lng: -104.963061,},}, // Bill goodspeed
{location: {lat: 39.939306, lng: -105.049943,},}, //broomfield county commons
{location: {lat: 39.939614, lng: -105.049939,},}, //broomfield county commons
{location: {lat: 39.939857, lng: -105.050455,},}, //broomfield county commons
{location: {lat: 39.634056, lng: -105.020467,},}, // centennial off leash dog area
{location: {lat: 39.533663, lng: -104.950230,},}, // diggers dog park
{location: {lat: 39.628552, lng: -104.981474,},}, //Duncan park off leash
{location: {lat: 39.991568, lng: -105.222135,},}, //East boulder dog park
{location: {lat: 39.991240, lng: -105.221903,},}, //East boulder dog park
{location: {lat: 39.628029, lng: -105.005616,},}, // Englewood Canine Corral
{location: {lat: 39.535373, lng: -104.997224,},}, //Fido’s field
{location: {lat:  39.800417, lng: -104.758881,},}, //first creek farm small dog park
{location: {lat: 39.67944, lng: -105.167169,},}, // Forsberg – Iron Spring Dog Park
{location: {lat: 39.757820, lng: -104.968007,},}, //Fuller dog park
{location: {lat: 39.757725, lng: -104.967164,},}, //Fuller dog park
{location: {lat: 39.779172, lng: -104.750566,},}, //Green Valley Ranch East Off Leash Area
{location: {lat: 39.967603, lng: -104.763777,},}, // Happy Tails
{location: {lat: 40.033391, lng: -105.248526,},}, // Howard Heuston Off Leash Dog Area
{location: {lat: 39.639465, lng: -105.000458,},}, //Jason dog Park
{location: {lat: 39.649672, lng: -104.874812,},}, // Kennedy Dog Park
{location: {lat: 39.971123, lng: -105.130835,},}, // Louisville Dog Park
{location: {lat: 39.718928, lng: -104.881981,},}, //Lowry dog park
{location: {lat: 39.718534, lng: -104.881117,},}, //Lowry dog park
{location: {lat: 39.758115, lng: -105.001433,},}, //Railyard Dog Park

{location: {lat: 39.547227, lng: -105.021562,},}, //Rovers run
{location: {lat: 39.749345, lng: -104.897665,},}, //Stapleton dog Park
{location: {lat: 39.749702, lng: -104.897481,},}, //Stapleton dog Park
{location: {lat: 40.004588, lng: -105.076055,},}, //The Great Bark
{location: {lat: 40.005355, lng: -105.077537,},}, //The Great Bark
{location: {lat: 40.030347, lng: -105.230681,},}, //Valmont Dog Park
{location: {lat: 40.030349, lng: -105.229693,},}, //Valmont Dog Park
{location: {lat: 40.030793, lng: -105.229595,},}, //Valmont Dog Park
{location: {lat: 40.031089, lng: -105.229565,},}, //Valmont Dog Park
{location: {lat: 39.816991, lng: -105.206243,},}, //West Arvada Dog Park
{location: {lat:  39.816940, lng: -105.203437,},}, //West Arvada Dog Park
{location: {lat: 39.610132, lng: -105.038867,},}, //Wynetka Ponds Dog Park

{location: {lat: 39.745409,  lng: -104.838315,},}, //500
//home
{location: {lat: 39.477626,  lng: -105.082341,},},
{location: {lat: 39.477607,  lng: -105.081412,},},
//500
{location: {lat: 39.745409,  lng: -104.838315,},},
//home
{location: {lat: 39.477626,  lng: -105.082341,},},
{location: {lat: 39.477607,  lng: -105.081412,},},

         ];
         }
    

 function renderPlacesShelter(placesShelter) {
  let sceneShelter = document.querySelector('a-scene');
    placesShelter.forEach((placeShelter) => {
      let latitudeShelter = placeShelter.location.lat;
      let longitudeShelter = placeShelter.location.lng;
        let modelShelter = document.createElement('a-entity');



        let p = location.lat + latitudeShelter;
        let t = location.long - longitudeShelter;
   
   let modelHeight = [(p + t) * 0.3];


      modelShelter.setAttribute('gps-entity-place', `latitude: ${latitudeShelter}; longitude: ${longitudeShelter};`);
      modelShelter.setAttribute('gltf-model', 'models/dogParkShelter.gltf');
      
      modelShelter.setAttribute('scale', '25 25 25');
           
      modelShelter.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 4000; easing: linear');
      modelShelter.addEventListener('loaded', () => {
     window.dispatchEvent(new CustomEvent('gps-entity-place-loadedshelter'))
     modelShelter.setAttribute('position', `0 ${modelHeight} 0;`);
 
      });


 modelShelter.addEventListener('click', () => {
 
   document.getElementById("shelterPopup").style.display ="unset";

      });
 
      sceneShelter.appendChild(modelShelter);
  });
 }








//GATES - ENTRANCES
function staticLoadPlacesGate() {
  return [
      {location: {lat: 39.484604,  lng: -105.074975,},},
      {location: {lat: 39.484071, lng: -105.075172,},},
      {location: {lat: 39.483723,  lng: -105.075175,},},
      {location: {lat: 39.484170,  lng: -105.073804,},},
      {location: {lat: 39.482957,  lng: -105.073747,},},

      {location: {lat: 39.723912, lng: -105.029652,},}, //Barnum
{location: {lat: 39.723762, lng: -105.031060,},}, //Barnum
{location: {lat: 39.782149, lng: -105.052005,},}, //Berkeley Lake
{location: {lat: 39.927829, lng: -105.008597,},}, //Big dry creek
{location: {lat: 39.927881, lng: -105.007193,},}, //Big dry creek
{location: {lat: 39.889834, lng: -104.962848,},}, //Bill Goodspeed
{location: {lat: 39.939197, lng: -105.049565,},}, //Broomfield County Commons Dog Park
{location: {lat: 39.939198, lng: -105.050861,},}, //Broomfield County Commons Dog Park
{location: {lat: 39.561687, lng: -105.056319,},}, //chatfield dog park
{location: {lat:  39.562920, lng: -105.050740,},}, //chatfield dog park
{location: {lat: 39.613544, lng: -104.816600,},}, //Cherry Creek dog park
{location: {lat: 39.978292, lng: -105.166708 ,},}, //Davidson Mesa
{location: {lat: 39.536106, lng: -104.951122,},}, //Diggers Dog Park
{location: {lat: 39.779320, lng: -105.186721,},}, //Dog park at Tony Grampsas
{location: {lat: 39.991242, lng: -105.222428,},}, //East Boulder dog park

{location: {lat: 39.991142, lng: -105.222282,},}, //East Boulder dog park
{location: {lat: 39.628316, lng: -105.005715,},}, //Englewood Canine Corral
{location: {lat: 39.628056, lng: -105.004049,},}, //Englewood Canine Corral
{location: {lat: 39.535051, lng: -104.998044,},}, //Fido’s field
{location: {lat: 39.800355, lng: -104.758753 ,},}, //First Creek Farm Small Dog Park
{location: {lat: 39.800750, lng: -104.758651,},}, //First Creek Farm Small Dog Park
{location: {lat: 39.679400, lng: -105.167043,},}, //Frosberg – Iron Spring
{location: {lat: 39.757731, lng: -104.967579,},}, //Fuller dog park
{location: {lat: 39.757943, lng: -104.967674,},}, //Fuller dog park
{location: {lat: 39.490991, lng: -104.870146,},}, //Glendale Farm open space
{location: {lat: 39.637296, lng: -104.784177,},}, //Grandview dog park
{location: {lat: 39.779384, lng: -104.750837,},}, //Green Valley Ranch East Off Leash Area
{location: {lat: 39.779871, lng: -104.751268,},}, //Green Valley Ranch East Off Leash Area
{location: {lat: 39.967986, lng: -104.764535,},}, // Happy Tails
{location: {lat: 39.537967, lng:  -104.918199,},}, // Hound Hill
{location: {lat: 40.033620, lng: -105.248143,},}, //Howard Heuston off leash
{location: {lat: 39.639493, lng: -104.999884,},}, // Jason dog park
{location: {lat: 39.649874, lng:  -104.874526,},}, //Kennedy dog park
{location: {lat:  39.649670, lng: -104.874513,},}, //Kennedy dog park
{location: {lat: 39.970822, lng: -105.131025 ,},}, //Louisville dog park
{location: {lat: 39.971178, lng: -105.130911,},}, //Louisville dog park
{location: {lat: 39.970871, lng: -105.130465,},}, //Louisville dog park
{location: {lat: 39.719189, lng: -104.882601,},}, //Lowry dog park
{location: {lat:  39.718944, lng: -104.881439,},}, //Lowry dog park
{location: {lat: 39.718528, lng: -104.880850,},}, //Lowry dog park
{location: {lat: 39.758123, lng: -105.001611,},}, //Railyard dog park
{location: {lat: 39.547063, lng: -105.022134,},}, //Rovers run
{location: {lat: 39.748901, lng: -104.898119,},}, //Stapleton dog park
{location: {lat: 39.749936, lng: -104.897206,},}, //Stapleton dog park

{location: {lat:  40.004492, lng: -105.075453,},}, // the Great Bark
{location: {lat: 40.030426, lng: -105.230216,},}, //Valmont dog Park
{location: {lat: 40.030245, lng:  -105.230101,},}, // Valmont dog Park
{location: {lat: 39.816730, lng: -105.205842,},}, //West Arvada dog park
{location: {lat: 39.816770, lng: -105.203811,},}, // West Arvada dog park
{location: {lat: 39.878770, lng: -105.132095,},}, //Westminster Hills Off Leash Dog Park
{location: {lat: 39.610559, lng: -105.038777,},}, //Wynetka Ponds Dog Park
//500
{location: {lat: 39.744810,  lng: -104.838520 ,},},
//Home
{location: {lat: 39.476921,  lng: -105.081980 ,},},
         ];
         }
    

 function renderPlacesGate(placesGate) {
  let sceneGate = document.querySelector('a-scene');
    placesGate.forEach((placeGate) => {
      let latitudeGate = placeGate.location.lat;
      let longitudeGate = placeGate.location.lng;
        let modelGate = document.createElement('a-entity');



        let p = location.lat + latitudeGate;
        let t = location.long - longitudeGate;
   
   let modelHeight = [(p + t) * 0.3];



      modelGate.setAttribute('gps-entity-place', `latitude: ${latitudeGate}; longitude: ${longitudeGate};`);
      modelGate.setAttribute('gltf-model', 'models/DogParkGate.gltf');
      
      modelGate.setAttribute('scale', '25 25 25');
           
      modelGate.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 4000; easing: linear');
      modelGate.addEventListener('loaded', () => {
     window.dispatchEvent(new CustomEvent('gps-entity-place-loadedGate'))
     modelGate.setAttribute('position', `0 ${modelHeight} 0;`);
 
      });


 modelGate.addEventListener('click', () => {
 
   document.getElementById("gatePopup").style.display ="unset";

      });
 
      sceneGate.appendChild(modelGate);
  });
 }


          
// function removeHwPopup(){
//   document.getElementById("hwPopup").style.display = "none";

// }

// function removeCuPopup(){
//   document.getElementById("cuPopup").style.display = "none";

// }


function removeParkingPopup(){
  document.getElementById("parkingPopup").style.display = "none";

}

function removeTrashPopup(){
  document.getElementById("trashPopup").style.display = "none";

}


function removeWaterFeatPopup(){
  document.getElementById("waterFeatPopup").style.display = "none";

}

function removeTreesPopup(){
  document.getElementById("treesPopup").style.display = "none";

}

function removeRestroomPopup(){
  document.getElementById("restroomPopup").style.display = "none";

}

function removeShelterPopup(){
  document.getElementById("shelterPopup").style.display = "none";

}

function removeGatePopup(){
  document.getElementById("gatePopup").style.display = "none";

}


// function removeLegendPopup(){
//   document.getElementById("legendPopup").style.display = "none";

// }

// //document.getElementById("restroomPopup").style.display ="unset";

// function legendView(){
//   document.getElementById("legendPopup").style.display ="unset";
// }


//TESTS OF NEW MODELS



// var els = sceneEl.querySelectorAll('a-entity');
// for (var i = 0; i < els.length; i++) {
//   a-entity.setAttribute('scale','10 10 10')
//   console.log(els[i]);
// }











