
window.addEventListener("DOMContentLoaded", (e) => {
    getVisitCount();
})
const URL = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(URL)
        .then(res => {
            return res.json();
        })
        .then(res => {
            count = res.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(function(error) {
            console.log(error);
        });
    
    return count;
}