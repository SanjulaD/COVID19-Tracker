const app = document.getElementById('root');

const logo = document.createElement('img');
logo.setAttribute('id' , 'slFlag');
logo.src = 'images/flagSL.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

const currentTime = document.createElement('span');
currentTime.setAttribute('class' , 'alert text-center');

//Buttons
const countryButton = document.createElement('div');
countryButton.setAttribute('class' , 'btn-group');

const btn1 = document.createElement('button');
btn1.setAttribute('class' , 'btn btn-info');
btn1.setAttribute('type' , 'button');
const btn1Name = document.createElement('a');
btn1Name.setAttribute('href' , 'index.html');
btn1NameInfo = document.createTextNode('Sri Lanka');
btn1Name.appendChild(btn1NameInfo);

const btn2 = document.createElement('button');
btn2.setAttribute('class' , 'btn btn-light');
btn2.setAttribute('type' , 'button');
const btn2Name = document.createElement('a');
btn2Name.setAttribute('href' , 'global.html');
btn2NameInfo = document.createTextNode('Global');
btn2Name.appendChild(btn2NameInfo);

app.appendChild(countryButton);
countryButton.appendChild(btn1);
countryButton.appendChild(btn2);

btn1.appendChild(btn1Name);
btn2.appendChild(btn2Name);


//After the buttons
app.appendChild(currentTime);
app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET','https://www.hpb.health.gov.lk/api/get-current-statistical' ,true);

const card1 = document.createElement('div');
card1.setAttribute('class', 'card');

const card2 = document.createElement('div');
card2.setAttribute('class', 'card');

const card3 = document.createElement('div');
card3.setAttribute('class', 'card');

const card4 = document.createElement('div');
card4.setAttribute('class', 'card');

const card5 = document.createElement('div');
card5.setAttribute('class', 'card');

const card6 = document.createElement('div');
card6.setAttribute('class', 'card');


request.onload = function () {

    var myData = JSON.parse(this.response);
    console.log("JSON passed");
    if (request.status >= 200 && request.status < 400) {

        // adding current time
        currentTime.textContent = 'Last Update : '+ myData.data.update_date_time;
        console.log(myData.data.update_date_time);
   
        //adding local total confirmed cases
        const head1 = document.createElement('h1');
        head1.textContent = "Confirmed Cases ";
        const result1 = document.createElement('h2');
        result1.textContent = myData.data.local_total_cases;      
        console.log('Total Cases Confirmed : '+ result1.textContent);
        const gifSpan1 = document.createElement('span');
        gifSpan1.setAttribute('class' , 'opacity-7 text-muted anime-span');
        const gif1 = document.createElement('img');
        gif1.src = 'https://covid.iq.lk/assets/anime/create-order.gif';
        head1.appendChild(gifSpan1);
        gifSpan1.appendChild(gif1);
        
        //adding local total cases
        const head2 = document.createElement('h1');
        head2.textContent = "Observation Cases";
        const result2 = document.createElement('h2');
        result2.textContent = myData.data.local_total_number_of_individuals_in_hospitals;
        console.log('Total cases : '+result2.textContent);
        const gifSpan2 = document.createElement('span');
        gifSpan2.setAttribute('class' , 'opacity-7 text-muted anime-span');
        const gif2 = document.createElement('img');
        gif2.src = 'https://covid.iq.lk/assets/anime/searching.gif';
        head2.appendChild(gifSpan2);
        gifSpan2.appendChild(gif2);

        //adding local deaths
        const head3 = document.createElement('h1');
        head3.textContent = "New Cases";
        const result3 = document.createElement('h2');
        result3.textContent = myData.data.local_new_cases;
        if( result3.textContent == null) {
            result3.textContent = 0;
            console.log(result3.textContent);
        }console.log('New Cases : '+result3.textContent);
        const gifSpan3 = document.createElement('span');
        gifSpan3.setAttribute('class' , 'opacity-7 text-muted anime-span');
        const gif3 = document.createElement('img');
        gif3.src = 'https://covid.iq.lk/assets/anime/calendar-tear.gif';
        head3.appendChild(gifSpan3);
        gifSpan3.appendChild(gif3);

        //adding recovered
        const head4 = document.createElement('h1');
        head4.textContent = " Recovered";
        const result4 = document.createElement('h2');
        result4.textContent = myData.data.local_recovered;
        console.log('Recovered : '+result4.textContent);
        const gifSpan4 = document.createElement('span');
        gifSpan4.setAttribute('class' , 'opacity-7 text-muted anime-span');
        const gif4 = document.createElement('img');
        gif4.src = 'https://covid.iq.lk/assets/anime/running-heart.gif';
        head4.appendChild(gifSpan4);
        gifSpan4.appendChild(gif4);

        //adding deaths
        const head5 = document.createElement('h1');
        head5.textContent = "Total Deaths";
        const result5 = document.createElement('h2');
        result5.textContent = myData.data.local_deaths;
        console.log('Total Deaths : '+result5.textContent);
        const gifSpan5 = document.createElement('span');
        gifSpan5.setAttribute('class' , 'opacity-7 text-muted anime-span');
        const gif5 = document.createElement('img');
        gif5.src = 'https://covid.iq.lk/assets/anime/warning-blink.gif';
        head5.appendChild(gifSpan5);
        gifSpan5.appendChild(gif5);

        //adding current active cases
        const head6 = document.createElement('h1');
        head6.textContent = "Active Cases";
        const result6 = document.createElement('h2');
        result6.textContent = myData.data.local_active_cases;
        console.log('Current active cases : '+result6.textContent);
        const gifSpan6 = document.createElement('span');
        gifSpan6.setAttribute('class' , 'opacity-7 text-muted anime-span');
        const gif6 = document.createElement('img');
        gif6.src = 'https://covid.iq.lk/assets/anime/activity.gif';
        head6.appendChild(gifSpan6);
        gifSpan6.appendChild(gif6);

        //append total confirmed cases
        card1.appendChild(head1);
        head1.appendChild(result1);

        //append current active cases
        card2.appendChild(head2);
        head2.appendChild(result2);

        //append new cases
        card3.appendChild(head3);
        head3.appendChild(result3);

        //append recovered
        card4.appendChild(head4);
        head4.appendChild(result4);

        //append recovered
        card5.appendChild(head5);
        head5.appendChild(result5);

        //append current active cases
        card6.appendChild(head6);
        head6.appendChild(result6);
  
    }
    

    else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }

    const covidStatDiv = document.createElement('div');
    covidStatDiv.setAttribute('class' , 'btn-group btn-stat');

    const statBtn = document.createElement('button');
    statBtn.setAttribute('class' , 'btn btn-stat-info');
    statBtn.setAttribute('type' , 'button');
    statBtn.setAttribute('href' , 'index.html');
    const statIcon = document.createElement('i');
    statIcon.setAttribute('class' , 'fa fa-angle-double-right');
    statIcon.setAttribute('href' , 'index.html');
    const statBtnName = document.createElement('a');
    statBtnName.setAttribute('href' , 'index.html');
    statBtnNameInfo = document.createTextNode('More Information ');
    
    container.appendChild(card1);
    container.appendChild(card2);
    container.appendChild(card3);
    container.appendChild(card4);
    container.appendChild(card5);
    container.appendChild(card6);   

    container.appendChild(covidStatDiv);
    covidStatDiv.appendChild(statBtn);
    statBtn.appendChild(statBtnName);
    statBtn.appendChild(statIcon);
    statBtnName.appendChild(statBtnNameInfo);
}
    

request.send();