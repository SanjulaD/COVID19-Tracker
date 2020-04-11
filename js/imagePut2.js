const appSetToImage2 = document.getElementById('root');

// ----------------card one------------

const cardNum1 = document.createElement('div');
cardNum1.setAttribute('class' , 'card-Images');

    const cardImageDiv1 = document.createElement('div');
    cardImageDiv1.setAttribute('class' , 'card');
    const cardHeader1 = document.createElement('div');
    cardHeader1.setAttribute('class' , 'card-header');
    const cardHeaderText1 = document.createTextNode('Spread Probability (R0) in Sri Lanka Before vs After Lockdown');
    cardHeader1.appendChild(cardHeaderText1);
    const cardImageBody1 = document.createElement('div');
    cardImageBody1.setAttribute('class' , 'card-body');
    const cardImage1 = document.createElement('img');
    cardImage1.src = 'images/spread-probability-v2.png';
    cardImageBody1.appendChild(cardImage1);

    cardImageDiv1.appendChild(cardHeader1);
    cardImageDiv1.appendChild(cardImageBody1);
    cardNum1.appendChild(cardImageDiv1);


// ----------------Card one ended-------


// ----------------card two-------------

    const cardImageDiv2 = document.createElement('div');
    cardImageDiv2.setAttribute('class' , 'card');
    const cardHeader2 = document.createElement('div');
    cardHeader2.setAttribute('class' , 'card-header');
    const cardHeaderText2 = document.createTextNode('Global Infection Trajectory: See Which Countries are Flattening Their COVID-19 Curve.');
    cardHeader2.appendChild(cardHeaderText2);
    const cardImageBody2 = document.createElement('div');
    cardImageBody2.setAttribute('class' , 'card-body');
    const cardImage2 = document.createElement('img');
    cardImage2.src = 'images/trajectory-v6.png';
    cardImageBody2.appendChild(cardImage2);

    cardImageDiv2.appendChild(cardHeader2);
    cardImageDiv2.appendChild(cardImageBody2);
    cardNum1.appendChild(cardImageDiv2);

// ----------------Card two ended-------


// ----------------card three and four-------------

// ---------------------------First row------------------------

    const Row1 = document.createElement('div');
    Row1.setAttribute('class' , 'row');

    const colMdGrid1 = document.createElement('div');
    colMdGrid1.setAttribute('class' , '"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 custom-padding');

    const cardImageDiv3 = document.createElement('div');
    cardImageDiv3.setAttribute('class' , 'card');
    const cardHeader3 = document.createElement('div');
    cardHeader3.setAttribute('class' , 'card-header');
    const cardHeaderText3 = document.createTextNode('WHO has explained four stages of COVID-19.');
    cardHeader3.appendChild(cardHeaderText3);
    const cardImageBody3 = document.createElement('div');
    cardImageBody3.setAttribute('class' , 'card-body');
    const cardImage3 = document.createElement('img');
    cardImage3.src = 'images/who.jpg';
    cardImageBody3.appendChild(cardImage3);

    Row1.appendChild(colMdGrid1);
    colMdGrid1.appendChild(cardImageDiv3);
    cardImageDiv3.appendChild(cardHeader3);
    cardImageDiv3.appendChild(cardImageBody3);
    cardNum1.appendChild(Row1);

// ------------------------------second row-----------------------------------

    const colMdGrid2 = document.createElement('div');
    colMdGrid2.setAttribute('class' , '"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 custom-padding');

    const cardImageDiv4 = document.createElement('div');
    cardImageDiv4.setAttribute('class' , 'card');
    const cardHeader4 = document.createElement('div');
    cardHeader4.setAttribute('class' , 'card-header');
    const cardHeaderText4 = document.createTextNode('COVID-19 Transmission vs Social Distancing.');
    cardHeader4.appendChild(cardHeaderText4);
    const cardImageBody4 = document.createElement('div');
    cardImageBody4.setAttribute('class' , 'card-body');
    const cardImage4 = document.createElement('img');
    cardImage4.src = 'images/transmission.png';
    cardImageBody4.appendChild(cardImage4);

    Row1.appendChild(colMdGrid2);
    colMdGrid2.appendChild(cardImageDiv4);
    cardImageDiv4.appendChild(cardHeader4);
    cardImageDiv4.appendChild(cardImageBody4);
    cardNum1.appendChild(Row1);


// ----------------card three and four ended-------


// ----------------card five and six -------

// ---------------------------First row------------------------

    const Row2 = document.createElement('div');
    Row2.setAttribute('class' , 'row');

    const colMdGrid4 = document.createElement('div');
    colMdGrid4.setAttribute('class' , '"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 custom-padding');

    const cardImageDiv6 = document.createElement('div');
    cardImageDiv6.setAttribute('class' , 'card');
    const cardHeader6 = document.createElement('div');
    cardHeader6.setAttribute('class' , 'card-header');
    const cardHeaderText6 = document.createTextNode('Multiple conditions increase the risk factors. (Study - Italy).');
    cardHeader6.appendChild(cardHeaderText6);
    const cardImageBody6 = document.createElement('div');
    cardImageBody6.setAttribute('class' , 'card-body');
    const cardImage6 = document.createElement('img');
    cardImage6.src = 'images/italy.png';
    cardImageBody6.appendChild(cardImage6);

    Row2.appendChild(colMdGrid4);
    colMdGrid4.appendChild(cardImageDiv6);
    cardImageDiv6.appendChild(cardHeader6);
    cardImageDiv6.appendChild(cardImageBody6);
    cardNum1.appendChild(Row2);

// ------------------------------second row-----------------------------------

    const colMdGrid3 = document.createElement('div');
    colMdGrid3.setAttribute('class' , '"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 custom-padding');

    const cardImageDiv5 = document.createElement('div');
    cardImageDiv5.setAttribute('class' , 'card');
    const cardHeader5 = document.createElement('div');
    cardHeader5.setAttribute('class' , 'card-header');
    const cardHeaderText5 = document.createTextNode('High-risk medical conditions of Covid-19 (Study - China).');
    cardHeader5.appendChild(cardHeaderText5);
    const cardImageBody5 = document.createElement('div');
    cardImageBody5.setAttribute('class' , 'card-body');
    const cardImage5 = document.createElement('img');
    cardImage5.src = 'images/china.png';
    cardImageBody5.appendChild(cardImage5);

    Row2.appendChild(colMdGrid3);
    colMdGrid3.appendChild(cardImageDiv5);
    cardImageDiv5.appendChild(cardHeader5);
    cardImageDiv5.appendChild(cardImageBody5);
    cardNum1.appendChild(Row2);

// ----------------card five and six ended-------



appSetToImage2.appendChild(cardNum1);