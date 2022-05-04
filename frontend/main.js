
window.addEventListener("ContentLoaded", (e) => {
    getVisitCount();
})
const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log("Website called function API...")
            count = data.count;
            document.getElementById("#counter").innerText = count;
        })
        .catch(function(error) {
            console.log(error);
        });
    
    return count;
}