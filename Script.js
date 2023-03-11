let count1=0;
let count2=1;
let count3=2;
let count4=3;

let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let img3=document.getElementById('img3');
let img4=document.getElementById('img4');

function change1() {
    count1++;
    if (count1 ==1) {
        img1.src = 'images/7b571b438ee94096d2e526872b97be72.jpg';
    } else if (count1 == 2) {
        img1.src = 'images/0659cf24c4b672710bebc430d1ca8373.jpg';
    } else if (count1 == 3) {
        img1.src = 'images/23613f8fb486b848e4a27be696d7aa2a.jpg';
    } else {
        count1 = 0 ;
        img1.src = 'images/c2f07aa024341b2f9113ee34562ac9ce.jpg';
    }
    check()
}
function change2() {
    count2++;
    if (count2 == 1) {
        img2.src = '7b571b438ee94096d2e526872b97be72.jpg';
    } else if (count2 == 2) {
        img2.src = '0659cf24c4b672710bebc430d1ca8373.jpg';
    } else if (count2 == 3) {
        img2.src = '23613f8fb486b848e4a27be696d7aa2a.jpg';
    } else {
        count2 = 0 ;
        img2.src = 'c2f07aa024341b2f9113ee34562ac9ce.jpg';
    }
    check()
}
function change3() {
    count3++;
    if (count3 == 1) {
        img3.src = '7b571b438ee94096d2e526872b97be72.jpg';
    } else if (count3 == 2) {
        img3.src = '0659cf24c4b672710bebc430d1ca8373.jpg';
    } else if (count3 == 3) {
        img3.src = '23613f8fb486b848e4a27be696d7aa2a.jpg';
    } else {
        count3 = 0 ;
        img3.src = 'c2f07aa024341b2f9113ee34562ac9ce.jpg';
    }
    console.log('count3 trong ham 3',count3);
    check()
}
function change4() {
    count4++;
    if (count4 == 1) {
        img4.src = '7b571b438ee94096d2e526872b97be72.jpg';
    } else if (count4 == 2) {
        img4.src = '0659cf24c4b672710bebc430d1ca8373.jpg';
    } else if (count4 == 3) {
        img4.src = '23613f8fb486b848e4a27be696d7aa2a.jpg';
    } else {
        count4 = 0 ;
        img4.src = 'c2f07aa024341b2f9113ee34562ac9ce.jpg';
    }
    check()
}
function check() {
    if (count1 == count2 && count2 == count3 && count3== count4) {
        document.write('Bạn Giỏi Quá')
    }
    else {
        document.write('Cố lên')
    }
}