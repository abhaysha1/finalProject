document.addEventListener('DOMContentLoaded', function() {
    let questionBoxes = document.querySelectorAll('.question-box');

    questionBoxes.forEach(function(questionbox){
        questionbox.addEventListener('click', function() {
            let answer = this.querySelector('.answer');
            answer.classList.toggle('hidden');
        });
    });
});
