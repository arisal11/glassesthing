'use strict';

function loadData(){
    const body = document.querySelector('body');

    const btn = document.querySelector('button')

    btn.classList.add('hidden');

    const div = document.createElement('div');

    body.appendChild(div);

    const img = document.createElement('img');

    const para1 = document.createElement('h2');
    const para2 = document.createElement('h2');
    const para3 = document.createElement('h2');
    const para4 = document.createElement('h2');


    img.src = "images/image_123650291_25.JPG"

    div.appendChild(img);

    para1.textContent = "Patient Name: Maya";
    para2.textContent = "Patient Age: 20";
    para3.textContent = "Patient Medical History: N/A";
    para4.textContent = "Reason For Visit: Checkup";

    const art = document.createElement('article');

    div.appendChild(art)

    art.appendChild(para1);
    art.appendChild(para2);
    art.appendChild(para3);
    art.appendChild(para4);
}



