const loadPhone = async (searchPhone) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await res.json();
    const phone = data.data;
    phones(phone);
}

const phones = function (phone) {
    const phoneCardContainer = document.getElementById('card-container');
    phoneCardContainer.innerText = '';    
    
    const showAllButton = document.getElementById('show-all-btn');
    if (phone.length > 12) {
        showAllButton.classList.remove('hidden');
    } else {
        showAllButton.classList.add('hidden');
    }
    
    phone = phone.slice(0, 12);
    phone.forEach(element => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList = 'card bg-white rounded-lg border border-stone-300';
        phoneDiv.innerHTML = `
        <figure class="px-10 pt-10">
            <img
            src="${element.image}"
            alt="Shoes"
            class="rounded-xl"
            />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${element.phone_name}</h2>
            <p class="my-5 md:w-[80%]">There are many variations of passages of available, but the majority have suffered</p>
            <div class="card-actions">
            <button class="btn btn-primary bg-[#0D6EFD]">Show Details</button>
            </div>
        </div>
        `;
        phoneCardContainer.appendChild(phoneDiv);
    });
    loadingToggoler(false);
}

// Handle search
const handleSearch = () => {
    loadingToggoler(true);
    const searchInput = document.getElementById('search-field');
    const inputValue = searchInput.value;
    loadPhone(inputValue);
}

// loading spinner
const loadingToggoler = toggleValue => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (toggleValue) {
        loadingSpinner.classList.remove('hidden');
    } else {
        loadingSpinner.classList.add('hidden');
    }
}
