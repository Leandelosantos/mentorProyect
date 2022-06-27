const selection = document.getElementById("selection");

const getRank = () => {
    let getArray = localStorage.getItem('rankArray')[1]
    return getArray
}

const finalRank = () => selection.innerHTML = `<div class="selection"><p>You selected ${getRank()} out of 5</p></div>`;
    
finalRank();