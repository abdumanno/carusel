let array =[];
const accordion = document.querySelector(".label");
for (let i = 0; i < accordion.length; i++) {
        array[i].addEventlistener('click', function () {
                this.classList.tonggle('active');
        });

}