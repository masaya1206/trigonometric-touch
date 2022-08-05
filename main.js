const trigonometric_data = [
    {num: 's000', pic: './img/sin000d.png', pic1:'./img/sin000r.png', ans: './img/00.png'},
    {num: 's030', pic: './img/sin030d.png', pic1:'./img/sin030r.png', ans: './img/01.png'},
    {num: 's045', pic: './img/sin045d.png', pic1:'./img/sin045r.png', ans: './img/02.png'},
    {num: 's060', pic: './img/sin060d.png', pic1:'./img/sin060r.png', ans: './img/03.png'},
    {num: 's090', pic: './img/sin090d.png', pic1:'./img/sin090r.png', ans: './img/04.png'},
    {num: 's120', pic: './img/sin120d.png', pic1:'./img/sin120r.png', ans: './img/03.png'},
    {num: 's135', pic: './img/sin135d.png', pic1:'./img/sin135r.png', ans: './img/02.png'},
    {num: 's150', pic: './img/sin150d.png', pic1:'./img/sin150r.png', ans: './img/01.png'},
    {num: 's180', pic: './img/sin180d.png', pic1:'./img/sin180r.png', ans: './img/00.png'},
    {num: 's210', pic: './img/sin210d.png', pic1:'./img/sin210r.png', ans: './img/01m.png'},
    {num: 's225', pic: './img/sin225d.png', pic1:'./img/sin225r.png', ans: './img/02m.png'},
    {num: 's240', pic: './img/sin240d.png', pic1:'./img/sin240r.png', ans: './img/03m.png'},
    {num: 's270', pic: './img/sin270d.png', pic1:'./img/sin270r.png', ans: './img/04m.png'},
    {num: 's300', pic: './img/sin300d.png', pic1:'./img/sin300r.png', ans: './img/03m.png'},
    {num: 's315', pic: './img/sin315d.png', pic1:'./img/sin315r.png', ans: './img/02m.png'},
    {num: 's330', pic: './img/sin330d.png', pic1:'./img/sin330r.png', ans: './img/01m.png'},
    {num: 's360', pic: './img/sin360d.png', pic1:'./img/sin360r.png', ans: './img/00.png'},
    {num: 'c000', pic: './img/cos000d.png', pic1:'./img/cos000r.png', ans: './img/04.png'},
    {num: 'c030', pic: './img/cos030d.png', pic1:'./img/cos030r.png', ans: './img/03.png'},
    {num: 'c045', pic: './img/cos045d.png', pic1:'./img/cos045r.png', ans: './img/02.png'},
    {num: 'c060', pic: './img/cos060d.png', pic1:'./img/cos060r.png', ans: './img/01.png'},
    {num: 'c090', pic: './img/cos090d.png', pic1:'./img/cos090r.png', ans: './img/00.png'},
    {num: 'c120', pic: './img/cos120d.png', pic1:'./img/cos120r.png', ans: './img/01m.png'},
    {num: 'c135', pic: './img/cos135d.png', pic1:'./img/cos135r.png', ans: './img/02m.png'},
    {num: 'c150', pic: './img/cos150d.png', pic1:'./img/cos150r.png', ans: './img/03m.png'},
    {num: 'c180', pic: './img/cos180d.png', pic1:'./img/cos180r.png', ans: './img/04m.png'},
    {num: 'c210', pic: './img/cos210d.png', pic1:'./img/cos210r.png', ans: './img/03m.png'},
    {num: 'c225', pic: './img/cos225d.png', pic1:'./img/cos225r.png', ans: './img/02m.png'},
    {num: 'c240', pic: './img/cos240d.png', pic1:'./img/cos240r.png', ans: './img/01m.png'},
    {num: 'c270', pic: './img/cos270d.png', pic1:'./img/cos270r.png', ans: './img/00.png'},
    {num: 'c300', pic: './img/cos300d.png', pic1:'./img/cos300r.png', ans: './img/01.png'},
    {num: 'c315', pic: './img/cos315d.png', pic1:'./img/cos315r.png', ans: './img/02.png'},
    {num: 'c330', pic: './img/cos330d.png', pic1:'./img/cos330r.png', ans: './img/03.png'},
    {num: 'c360', pic: './img/cos360d.png', pic1:'./img/cos360r.png', ans: './img/04.png'},
    {num: 't000', pic: './img/tan000d.png', pic1:'./img/tan000r.png', ans: './img/00.png'},
    {num: 't030', pic: './img/tan030d.png', pic1:'./img/tan030r.png', ans: './img/11.png'},
    {num: 't045', pic: './img/tan045d.png', pic1:'./img/tan045r.png', ans: './img/04.png'},
    {num: 't060', pic: './img/tan060d.png', pic1:'./img/tan060r.png', ans: './img/12.png'},
    {num: 't090', pic: './img/tan090d.png', pic1:'./img/tan090r.png', ans: './img/13.png'},
    {num: 't120', pic: './img/tan120d.png', pic1:'./img/tan120r.png', ans: './img/12m.png'},
    {num: 't135', pic: './img/tan135d.png', pic1:'./img/tan135r.png', ans: './img/04m.png'},
    {num: 't150', pic: './img/tan150d.png', pic1:'./img/tan150r.png', ans: './img/11m.png'},
    {num: 't180', pic: './img/tan180d.png', pic1:'./img/tan180r.png', ans: './img/00.png'},
    {num: 't210', pic: './img/tan210d.png', pic1:'./img/tan210r.png', ans: './img/11.png'},
    {num: 't225', pic: './img/tan225d.png', pic1:'./img/tan225r.png', ans: './img/04.png'},
    {num: 't240', pic: './img/tan240d.png', pic1:'./img/tan240r.png', ans: './img/12.png'},
    {num: 't270', pic: './img/tan270d.png', pic1:'./img/tan270r.png', ans: './img/13.png'},
    {num: 't300', pic: './img/tan300d.png', pic1:'./img/tan300r.png', ans: './img/12m.png'},
    {num: 't315', pic: './img/tan315d.png', pic1:'./img/tan315r.png', ans: './img/04m.png'},
    {num: 't330', pic: './img/tan330d.png', pic1:'./img/tan330r.png', ans: './img/11m.png'},
    {num: 't360', pic: './img/tan360d.png', pic1:'./img/tan360r.png', ans: './img/00.png'},
];

window.addEventListener('DOMContentLoaded', function() {
    let nextQ = document.querySelector('#nextQuestion');
    let obj = trigonometric_data[Math.floor( Math.random() * trigonometric_data.length)];
    let selectMode = document.querySelector('#select');
    let radioNodeList = selectMode.select0;
    var checkValue = radioNodeList.value;
    const touchArea = document.getElementById("touch-area");
    
    let html01 = '<img src=' + obj.pic + '>';
    //    let html02 = '';
    let html02 = '<img src=' + obj.ans + '>';
//    let html02 = '<img src=' + obj.ans + '>';
    document.querySelector('#output01').innerHTML = html01;
    document.querySelector('#output02').innerHTML = html02;

/*
    //touchAreaのイベント
    touchArea.addEventListener('touchstart', function() {
//	html02 = '<img src=' + obj.ans + '>';
	html02 = '<H2="HERE"></H2>';
	document.querySelector('#output02').innerHTML = html02;
    });

    touchArea1.addEventListener('touchmove', function() {
        event.preventDefault();  // 画面スクロールを防止
//	html02 = '<img src=' + obj.ans + '>';
	html02 = '<H2="HERE"></H2>';
//	document.querySelector('#output02').innerHTML = html02;
    });

    touchArea1.addEventListener('touchend', function() {
//	html02 = '';
	html02 = '<H2="HERE"></H2>';
	document.querySelector('#output02').innerHTML = html02;
    });
*/

    // ボタンをクリックしたときの処理を追加
    nextQ.addEventListener('click', function() {
	obj = trigonometric_data[Math.floor( Math.random() * trigonometric_data.length)];
	checkValue = radioNodeList.value;
	if (checkValue === "1")
	{
	    html01 = '<img src=' + obj.pic + '>';
	} else if (checkValue === "2") {
	    html01 = '<img src=' + obj.pic1 + '>';
	}
//	html02 = '<img src=' + obj.ans + '>';
	document.querySelector('#output01').innerHTML = html01;
//	document.querySelector('#output02').innerHTML = html02;
    });


    // ラジオボタンを変更したときの処理を追加
    selectMode.addEventListener('change', function() {
	checkValue = radioNodeList.value;
	if(checkValue === "1") {
	    html01 = '<img src=' + obj.pic + '>';
	}
	else if (checkValue === "2"){
	    html01 = '<img src=' + obj.pic1 + '>';
	}
	document.querySelector('#output01').innerHTML = html01;
//	document.querySelector('#output02').innerHTML = html02;
    });

    
}); // End window.addEventListener

