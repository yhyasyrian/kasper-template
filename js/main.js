let navbarButton = document.getElementById('navbar-toggel');
navbarButton.addEventListener('click', function () {
    document.getElementById('navgition').classList.toggle('show');
});
var list = document.getElementsByClassName('shuffle')[0].getElementsByTagName('li');
for (let i = 0; i < list.length; i++) {
    const element = list[i];
    element.addEventListener('click',function () {
        let s = undefined;
        for (let n = 0; n < list.length; n++) {
            if (list[n].className == 'active' && n !== i) {
                list[n].classList.toggle('active');
                s = true;
            }
        }
        if(s == true){
            list[i].classList.toggle('active');
            document.getElementById('PortfoilImage').setAttribute('data-view-img',this.innerText);
        }
    });
}