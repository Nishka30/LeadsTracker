 let myLeads=[] 
 let oldLeads=[]//storing the array in local storage.local storage actually stores only strings
const inputEl=document.getElementById("input-el") 
const inputBtn=document.getElementById("input-btn") 
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")
// Get the leads from the localStorage
// Store it in a vari able, leadsFromLocalStorage
//Log out the variable
 const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))  //parse converts strings to functions

// //check if we have leads im local storage with truthy falsy statements
 if (leadsFromLocalStorage) {
     myLeads= leadsFromLocalStorage
     render(myLeads)
         }
    tabBtn.addEventListener("click",function(){
        chrome.tabs.query({active: true, currentWindow: true},function(tabs){  
                myLeads.push(tabs[0].url)
                localStorage.setItem("myLeads",JSON.stringify(myLeads))
                render(myLeads)

        })

    })

//Create a variable, listitems, to hoLd all the HTML for the L1St 1tems
//Assign it to an empty string to begin with
function render(leads) {
    let listItems=""
    for (let i = 0; i < leads.length; i++) {
        // add items to the listitems variable instead of ulel.innerhtml
        //we want the links in list items format 
        //listItems+="<li><a target='_blank' href=' "+ myLeads[i] +" '>"+myLeads[i]+"</a></li>"//this made browser understand that these are html list items
        listItems+=
          `<li>
              <a target='_blank' href='${leads[i]}'>
                   ${leads[i]}
              </a>
          </li>`
    
    }
    //render  the listitems inside the ul using ulel.innerhtml
    ulEl.innerHTML=listItems //DOM manipul;ation com es at a cost soinstead of manipulating it again and agan manipulate it once and take all the stored values in it 
}
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

inputBtn.addEventListener("click",function(){
   myLeads.push(inputEl.value)//how to get value from input field in javascript
   inputEl.value=""           //clearing out the input field
   localStorage.setItem("myLeads",JSON.stringify(myLeads)) //saving my leads to local storage 
   render(myLeads)
})


document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('demo-video');
    const startVideoBtn = document.getElementById('start-video-btn');
    const stopVideoBtn = document.getElementById('stop-video-btn');
    const demoVideoSection = document.querySelector('.demo-video-section');

    startVideoBtn.addEventListener('click', function () {
        // Set the video to a larger size
        video.style.width = '800px';
        video.style.height = '450px';

        // Hide the other content in the demo section
        demoVideoSection.style.display = 'flex';
        demoVideoSection.style.justifyContent = 'center';
        demoVideoSection.style.alignItems = 'center';

        // Show the stop button
        stopVideoBtn.style.display = 'block';

        // Play the video
        video.play();
    });

    stopVideoBtn.addEventListener('click', function () {
        // Set the video back to its original size
        video.style.width = '400px';
        video.style.height = '225px';

        // Show the other content in the demo section
        demoVideoSection.style.display = 'block';

        // Hide the stop button
        stopVideoBtn.style.display = 'none';

        // Pause the video
        video.pause();
    });
});





