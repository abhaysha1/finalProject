
document.getElementById('toggle').addEventListener('change', function(){
    if (this.checked){
        document.getElementById('emailBox').classList.remove('hidden');
        document.getElementById('subjectBox').classList.remove('hidden');
        document.getElementById('questionBox').classList.remove('hidden');
    }
    else
    {
        document.getElementById('emailBox').classList.add('hidden');
        document.getElementById('subjectBox').classList.add('hidden');
        document.getElementById('questionBox').classList.remove('hidden');
    }
});

document.getElementById('but1').addEventListener('click', function(){
    alert("Thanks for filling out the form");
});