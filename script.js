//to use the time given by the user we need to put them in a global var like an object
let glob={
    eventTime: 'hello'
};

//asking the user to enter the time time of the event, the color of the background, the color of text, the title of the event.
function asking(){
    glob.eventTime = prompt("Please enter the day of the event in the following format: Month day, year hour:minute:second");
    if(/(january|february|march|april|may|june|july|augest|september|october|november|december)\s([0-9]|[1-2][0-9]|[3][0]),\s[0-9]{4}\s[0-9]{2}:[0-9]{2}:[0-9]{2}/i.test(glob.eventTime)){
        //bg color
        let bgcolor=prompt("Please enter the background color");
        document.body.style.backgroundColor=bgcolor;
        //title
        let title=prompt("Please enter the name of the event");
        document.querySelector(".title p").innerHTML=title;
        //text color
        let color=prompt("Please enter the color of the text");
        document.querySelector(".title p").style.color=color;
        document.querySelector(".count").style.color=color;
        document.querySelector(".dhm").style.color=color;
    }else{
        alert("you entered a wrong format please reload the page to re-enter your answer");
        return;
    }

}

//making it a bit late so there is time so the above function is done beore starting this one to take the value
function delay(){
    //setting the end date
    const Dday = new Date(glob.eventTime).getTime(); //to get the time in second we use getTime
    console.log(Dday);
    console.log(glob.eventTime);
    //setting the interval of ticking every second 
    let timer= setInterval(tick, 1000); //1000 bcs js take it in ms and we want it  in seconds

    //main function
    function tick(){
        
        //the time of today
        const now= new Date().getTime();

        //time left until the dDate
        let timeLeft = Dday-now;

        if(timeLeft>0){
            //setting the day
            let daysLeft = Math.floor(timeLeft/(24*60*60*1000));
            if(daysLeft<10){
                daysLeft= '0' + daysLeft;
            }

            //setting the hours
            let hoursLeft= Math.floor((timeLeft %(24*60*60*1000))/(60*60*1000));
            if(hoursLeft<10){
                hoursLeft= '0'+ hoursLeft;
            }

            //setting the minutes
            let minutesLeft= Math.floor((timeLeft%(60*60*1000))/(60*1000));
            if(minutesLeft<10){
                minutesLeft= '0'+ minutesLeft;
            }

            //setting the seconds
            let secondsLeft= Math.floor((timeLeft%(60*1000))/1000);
            if(secondsLeft<10){
                secondsLeft='0'+ secondsLeft;
            }

            //writing the string for the page
            let time = `${daysLeft}:${hoursLeft}:${minutesLeft}:${secondsLeft}`;

            //setting the time on the page
            document.querySelector(".count").innerHTML = time;

        }
    };
}

setTimeout(delay,4000);