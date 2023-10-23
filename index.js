
const freelancers = [];


function updateList() {
    const freelancersList = document.getElementById('freelancers-list');
    const averagePrice = document.getElementById('average-price');
    let totalStartingPrice = 0;

    
    freelancersList.innerHTML = ''; 

    for (const freelancer of freelancers) {
        const listItem = document.createElement('li');
        listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.startingPrice}`;
        freelancersList.appendChild(listItem);

        totalStartingPrice += freelancer.startingPrice;
    }

    const avg = totalStartingPrice / freelancers.length;
    averagePrice.textContent = avg.toFixed(2);
}


setInterval(() => {
    const newFreelancer = { name: 'Carol', occupation: 'Programmer', startingPrice: 70 };
    freelancers.push(newFreelancer);
    updateList(); 
}, 3000); 


const alice = { name: 'Alice', occupation: 'Writer', startingPrice: 30 };
const bob = { name: 'Bob', occupation: 'Teacher', startingPrice: 50 };

freelancers.push(alice, bob);
updateList(); 