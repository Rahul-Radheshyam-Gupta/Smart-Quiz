$(document).ready(function(){
  'use strict';

  var tour = new Tour({
    debug: true,
    basePath: location.pathname.slice(0, location.pathname.indexOf('/')),

 
 steps: [
  {
    path: '/core/admin',
    
   element: "#step1",
    title: "Attendance",
    content: "Configure your company's attendance policies",
    placement: "bottom",
    backdrop: true
  },
 {
   path: '/core/admin',
  
    element: "#step2",
    title: "Manage Attendance",
    content: "Use these sections to manage everything around attendance ",
    placement: "right",
    backdrop: false,
    
    onShow: function(tour) {

       $("#step2").addClass("open");
      
      }
  },
  {

 path: '/attendance/attendanceSettings',
  
   element: "#base-tab31",
    title: "Attendance Configuration",
    content: "Setup attendance policy",
    placement: "top",
    backdrop: false,
    onShow: function(tour) {
      
    $("#base-tab31, #btn31").click();
    $("#tab31").show();
          
            
   }
  },


  {
    path: '/attendance/attendanceSettings',  
    element: "#tab31",
    title: "Multiple configruations",
    content: "Create more than one attendance policy for your company",
    placement: "top",    
   backdrop: true,
    
 },
  
 {
   path: '/attendance/attendanceSettings',
  
    element: "#step4",
    title: "Create a new policy",
    content: "Easy-to-use form to set your rules, choose overtime rules and choose the shift for this policy ",
    placement: "top",
    backdrop: false,
    keyboard: true,
     onShow: function(tour) {
      
       $("#step4").click();
        
        },
      onPrev: function (tour) {
          $("#closebtn").click();
      },
      onNext: function (tour) {
        $("#closebtn").click();
      }
  },
  
 {
   path: '/attendance/attendanceSettings',
  
    element: "#base-tab32",
    title: "Biometric integration",
    content: "Add one nor more biometric devices ",
    placement: "top",
    backdrop: false,
    onShow: function(tour) {
      
$("#base-tab32").click();
        $("#tab32").show();
      
        
        }
    
   
},
{
   path: '/attendance/attendanceSettings',
  
    element: "#base-tab33",
    title: "Manage shifts",
    content: "Add one more shifts that are applicable to your organisation",
    placement: "top",
    backdrop: false,
    onShow: function(tour) {
      
$("#base-tab33").click();
        $("#tab33").show();
      
        
        }
    
   
},
{
   path: '/attendance/attendanceSettings',
  
    element: "#base-tab34",
    title: "Overtime rules",
    content: "Create one or more overtime rules for your organisation",
    placement: "top",
    backdrop: false,
    onShow: function(tour) {

   $("#base-tab34").click();
        $("#tab34").show();
      
        
        }
    
   
},
{
    path: '/core/admin',
    
  element: "#step1",
    title: "Finished Attendance Section",
    content: "Attendance Module",
    placement: "bottom",
    backdrop: true
  }

 
]});

// Initialize the tour
tour.init();

 $("#startTour").click(function() {
        // Start the tour

       tour.restart();  
 })

});