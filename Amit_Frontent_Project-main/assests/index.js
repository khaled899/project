let novel = document.querySelectorAll('.novel');
// علامه ال +
let btn = document.querySelectorAll('.btn')
    .forEach(btn => btn
        .addEventListener('click', function () {
            novel.forEach(n => {
                if (n.dataset.id != this.nextElementSibling.dataset.id) {
                    n.classList.remove('active')
                    console.log(this.id)
                }
            })
            this.nextElementSibling.classList.toggle('active');
        }));

// اظهار الجدول
var bascis = document.querySelectorAll('.toggle_btn')
    .forEach(btn => btn
        .addEventListener('click', function () {

            const boxes = document.getElementsByClassName('basics');

            for (const box of boxes) {
                box.style.display = 'none';
            }

            document.querySelector(`table[data-id='${this.id}']`)
                .style.display = 'block';
        }
        )
    );

    
//اظهار سهم الطلوع لفوق
window.onscroll = function () {
    scrollFunction()
};

var mybutton = document.getElementById("myBtn");

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
        mybutton.style.display = "block";
    else
        mybutton.style.display = "none";
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}