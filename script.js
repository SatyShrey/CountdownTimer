var num=1; var id2=[]; //var num for number of timers and var id2 for clearIntervls(id).............................
    var main=document.querySelector('main');
     function struct(){ //constructing dynamic part.................................
        var section=document.createElement('section');
        section.setAttribute('class',`timer${num}`);
        main.appendChild(section);
        section.innerHTML=`<h3><span>&#9202;</span>Countdown Timer<span>&#9202;</span></h3>
        <div class='entry${num}'>
            <label>Write a message to show when timer finish.</label><br>
            <input type="text" placeholder="Your message here" class="msg${num}"><br><br>
            <label>Enter Target Date</label><br>
            <input type='datetime-local' class='target${num}'><br>
            <button class='start' onclick=start(${num})>Start</button>
        </div>
        <div class='count count${num}'></div>
        <button class="remove" onclick='document.querySelector(".timer${num}").remove();
        clearInterval(id2[${num}]);'>Remove</button>`;//DOM ended........................................
        num++;
     }
     function bodyLoad(){// a timrer will be created after loading the page......................................
        struct();
     }
     function add(){// create additional timer.......................................................................
        struct();
        }
    function start(num){
        

        var newDate=new Date(document.querySelector(".target"+num).value);
            var msg=document.querySelector(".msg"+num).value;
            var ms;

            function timer(){                      //calculate the time...................................................
            ms=newDate - new Date();
            var day=parseInt(ms/1000/60/60/24);
            var hr=parseInt(ms/1000/60/60-24*day);
            var min=parseInt((ms/1000/60)-(day*24+hr)*60);
            var sec=parseInt((ms/1000)-(((day*24+hr)*60)+min)*60);
            
            if(ms>1000){
            document.querySelector(".entry"+num).style.display="none";   //hide the inputs area and create dynamic countdown div for each timer.............
            document.querySelector(".count"+num).innerHTML=`<div class="dis">
            <div class="div"><div class="no" id="day${num}"></div><div class="txt">Day</div></div>
             <div class="div"><div class="no" id="hr${num}"></div><div class="txt">Hr</div></div>
             <div class="div"><div class="no" id="min${num}"></div><div class="txt">Min</div></div>
             <div class="div"><div class="no" id="sec${num}"></div><div class="txt">Sec</div></div>
             </div>`;
             document.getElementById("day"+num).innerHTML=day;
             document.getElementById("hr"+num).innerHTML=hr;
             document.getElementById("min"+num).innerHTML=min;
             document.getElementById("sec"+num).innerHTML=sec;
            }
             else if(ms<1000){
             message();clearInterval(id2[num]);}}    //show the message and stop the loop.................................
             
            function message(){        //message and audio part..................................
            var audio=new Audio("/CountDown.mp3");
            audio.play();
            if(msg===""){msg="Countdown Finished."}
            document.querySelector(".count"+num).innerHTML=msg;}

            if(newDate > new Date()){
           id2[num]=setInterval(timer,1000);}else{
            document.querySelector(".count"+num).innerHTML="Please enter an upcoming time"}
    }