const triangles = [
    {num: 's000', pic: './img/sin000d.png', ans: "./img/00.png"},
    {num: 's030', pic: './img/sin030d.png', ans: "./img/01.png"},
    {num: 's045', pic: './img/sin045d.png', ans: "./img/02.png"},
    {num: 's060', pic: './img/sin060d.png', ans: "./img/03.png"},
    {num: 's090', pic: './img/sin090d.png', ans: "./img/04.png"},
    {num: 's120', pic: './img/sin120d.png', ans: "./img/03.png"},
    {num: 's135', pic: './img/sin135d.png', ans: "./img/02.png"},
    {num: 's150', pic: './img/sin150d.png', ans: "./img/01.png"},
    {num: 's180', pic: './img/sin180d.png', ans: "./img/00.png"},
    {num: 's210', pic: './img/sin210d.png', ans: "./img/01m.png"},
    {num: 's225', pic: './img/sin225d.png', ans: "./img/02m.png"},
    {num: 's240', pic: './img/sin240d.png', ans: "./img/03m.png"},
    {num: 's270', pic: './img/sin270d.png', ans: "./img/04m.png"},
    {num: 's300', pic: './img/sin300d.png', ans: "./img/03m.png"},
    {num: 's315', pic: './img/sin315d.png', ans: "./img/02m.png"},
    {num: 's330', pic: './img/sin330d.png', ans: "./img/01m.png"},
    {num: 's360', pic: './img/sin360d.png', ans: "./img/00.png"},
    {num: 'c000', pic: './img/cos000d.png', ans: "./img/04.png"},
    {num: 'c030', pic: './img/cos030d.png', ans: "./img/03.png"},
    {num: 'c045', pic: './img/cos045d.png', ans: "./img/02.png"},
    {num: 'c060', pic: './img/cos060d.png', ans: "./img/01.png"},
    {num: 'c090', pic: './img/cos090d.png', ans: "./img/00.png"},
    {num: 'c120', pic: './img/cos120d.png', ans: "./img/01m.png"},
    {num: 'c135', pic: './img/cos135d.png', ans: "./img/02m.png"},
    {num: 'c150', pic: './img/cos150d.png', ans: "./img/03m.png"},
    {num: 'c180', pic: './img/cos180d.png', ans: "./img/04m.png"},
    {num: 'c210', pic: './img/cos210d.png', ans: "./img/03m.png"},
    {num: 'c225', pic: './img/cos225d.png', ans: "./img/02m.png"},
    {num: 'c240', pic: './img/cos240d.png', ans: "./img/01m.png"},
    {num: 'c270', pic: './img/cos270d.png', ans: "./img/00.png"},
    {num: 'c300', pic: './img/cos300d.png', ans: "./img/01.png"},
    {num: 'c315', pic: './img/cos315d.png', ans: "./img/02.png"},
    {num: 'c330', pic: './img/cos330d.png', ans: "./img/03.png"},
    {num: 'c360', pic: './img/cos360d.png', ans: "./img/04.png"},
    {num: 't000', pic: './img/tan000d.png', ans: "./img/00.png"},
    {num: 't030', pic: './img/tan030d.png', ans: "./img/11.png"},
    {num: 't045', pic: './img/tan045d.png', ans: "./img/04.png"},
    {num: 't060', pic: './img/tan060d.png', ans: "./img/12.png"},
    {num: 't090', pic: './img/tan090d.png', ans: "./img/13.png"},
    {num: 't120', pic: './img/tan120d.png', ans: "./img/12m.png"},
    {num: 't135', pic: './img/tan135d.png', ans: "./img/04m.png"},
    {num: 't150', pic: './img/tan150d.png', ans: "./img/11m.png"},
    {num: 't180', pic: './img/tan180d.png', ans: "./img/00.png"},
    {num: 't210', pic: './img/tan210d.png', ans: "./img/11.png"},
    {num: 't225', pic: './img/tan225d.png', ans: "./img/04.png"},
    {num: 't240', pic: './img/tan240d.png', ans: "./img/12.png"},
    {num: 't270', pic: './img/tan270d.png', ans: "./img/13.png"},
    {num: 't300', pic: './img/tan300d.png', ans: "./img/12m.png"},
    {num: 't315', pic: './img/tan315d.png', ans: "./img/04m.png"},
    {num: 't330', pic: './img/tan330d.png', ans: "./img/11m.png"},
    {num: 't360', pic: './img/tan360d.png', ans: "./img/00.png"},
];

window.addEventListener('DOMContentLoaded', function() {

    let elCalc = document.querySelector('#calc');
    let obj = triangles[Math.floor( Math.random() * triangles.length)];
    let html01 = '<img src=' + obj.pic + '>';
    let html02 = '<img src=' + obj.ans + '>';
    document.querySelector('#output01').innerHTML = html01;
    document.querySelector('#output02').innerHTML = html02;
    const touchArea = document.getElementById('#output01');
    // ボタンをクリックしたときの処理を追加
    elCalc.addEventListener('click', function() {
	obj = triangles[Math.floor( Math.random() * triangles.length)];
	html01 = '<img src=' + obj.pic + '>';
	html02 = '<img src=' + obj.ans + '>';
	document.querySelector('#output01').innerHTML = html01;
	document.querySelector('#output02').innerHTML = html02;
    });

    //touchstartイベント
    touchArea.addEventListener('touchstart', function() {
        document.getElementById('#info').style.visibility = 'visible';
    }, false);

    //touchmoveイベント
    touchArea.addEventListener('touchmove', function() {
        eventpreventDefault();
        document.getElementById('#info').style.visibility = 'visible';
    }, false);

    //touchstartイベント
    touchArea.addEventListener('touchcancel', function() {
	document.getElementById('#info').style.visibility = "hidden";
    }, false);



}); // End window.addEventListener
