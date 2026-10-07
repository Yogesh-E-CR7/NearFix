// ==========================================
// NEARFIX SERVICE PROVIDERS
// ==========================================

const providers = [

    {
        name: "Kumar Electricals",
        service: "Electrician",
        category: "Home",
        rating: 4.7,
        price: 250,
        distance: 1.2,
        availability: "Available",
        icon: "🔌"
    },

    {
        name: "Sri Plumbing Works",
        service: "Plumber",
        category: "Home",
        rating: 4.5,
        price: 300,
        distance: 1.8,
        availability: "Available",
        icon: "🚰"
    },

    {
        name: "Smart Mobile Care",
        service: "Mobile Repair",
        category: "Technology",
        rating: 4.8,
        price: 400,
        distance: 2.1,
        availability: "Available",
        icon: "📱"
    },

    {
        name: "TechFix Computers",
        service: "Laptop Repair",
        category: "Technology",
        rating: 4.4,
        price: 500,
        distance: 2.7,
        availability: "Busy",
        icon: "💻"
    },

    {
        name: "Speed Bike Service",
        service: "Bike Mechanic",
        category: "Vehicle",
        rating: 4.6,
        price: 350,
        distance: 1.5,
        availability: "Available",
        icon: "🏍️"
    },

    {
        name: "Royal Car Care",
        service: "Car Service",
        category: "Vehicle",
        rating: 4.3,
        price: 800,
        distance: 3.2,
        availability: "Available",
        icon: "🚗"
    },

    {
        name: "StyleCut Salon",
        service: "Salon",
        category: "Personal",
        rating: 4.6,
        price: 250,
        distance: 1.1,
        availability: "Available",
        icon: "💇"
    },

    {
        name: "Perfect Stitch",
        service: "Tailor",
        category: "Personal",
        rating: 4.5,
        price: 200,
        distance: 1.7,
        availability: "Available",
        icon: "👗"
    },

    {
        name: "Bright Future Academy",
        service: "Home Tutor",
        category: "Education",
        rating: 4.9,
        price: 500,
        distance: 2.4,
        availability: "Available",
        icon: "📚"
    },

    {
        name: "QuickPrint Center",
        service: "Printing & Xerox",
        category: "Other",
        rating: 4.4,
        price: 100,
        distance: 0.8,
        availability: "Available",
        icon: "🖨️"
    },

    {
        name: "Mom's Kitchen",
        service: "Home Catering",
        category: "Other",
        rating: 4.7,
        price: 700,
        distance: 2.9,
        availability: "Available",
        icon: "🍱"
    },

    {
        name: "ClickPro Studio",
        service: "Photographer",
        category: "Other",
        rating: 4.6,
        price: 1000,
        distance: 3.5,
        availability: "Busy",
        icon: "📸"
    }

];


// ==========================================
// DISPLAY PROVIDERS
// ==========================================

function displayProviders(list) {

    const grid =
        document.getElementById("providerGrid");


    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `
            <div class="no-results">

                <h3>No services found 😕</h3>

                <p>
                    Try another service or change your filters.
                </p>

            </div>
        `;

        return;
    }


    list.forEach(provider => {

        const card = document.createElement("div");

        card.className = "provider-card";


        card.innerHTML = `

            <div class="provider-top">

                <div class="provider-icon">
                    ${provider.icon}
                </div>

                <div class="rating">
                    ⭐ ${provider.rating}
                </div>

            </div>


            <h3>
                ${provider.name}
            </h3>


            <div class="service-name">
                ${provider.service}
            </div>


            <div class="provider-info">

                📍 ${provider.distance} km away
                <br>

                💰 Starting from ₹${provider.price}
                <br>

                <span class="${provider.availability === "Available"
                    ? "available"
                    : ""}">

                    ● ${provider.availability}

                </span>

            </div>


            <div class="provider-actions">

                <button
                    class="view-btn"
                    onclick="viewProvider('${provider.name}')">

                    View

                </button>


                <button
                    class="contact-btn"
                    onclick="contactProvider('${provider.name}')">

                    Contact

                </button>

            </div>

        `;


        grid.appendChild(card);

    });

}


// ==========================================
// SEARCH PROVIDERS
// ==========================================

function searchProviders() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    const location =
        document
            .getElementById("locationInput")
            .value
            .toLowerCase();


    const results =
        providers.filter(provider => {

            const matchesSearch =
                provider.name
                    .toLowerCase()
                    .includes(search)

                ||

                provider.service
                    .toLowerCase()
                    .includes(search);


            return matchesSearch;

        });


    displayProviders(results);


    document
        .getElementById("providers")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// CATEGORY FILTER
// ==========================================

function filterCategory(category) {

    document
        .getElementById("categoryFilter")
        .value = category;


    applyFilters();


    document
        .getElementById("providers")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// APPLY FILTERS
// ==========================================

function applyFilters() {

    const category =
        document
            .getElementById("categoryFilter")
            .value;


    const rating =
        Number(
            document
                .getElementById("ratingFilter")
                .value
        );


    const budget =
        Number(
            document
                .getElementById("budgetFilter")
                .value
        );


    const results =
        providers.filter(provider => {

            const categoryMatch =
                category === "All"
                ||
                provider.category === category;


            const ratingMatch =
                provider.rating >= rating;


            const budgetMatch =
                budget === 0
                ||
                provider.price <= budget;


            return (
                categoryMatch
                &&
                ratingMatch
                &&
                budgetMatch
            );

        });


    displayProviders(results);

}


// ==========================================
// VIEW PROVIDER
// ==========================================

function viewProvider(name) {

    const provider =
        providers.find(
            item => item.name === name
        );


    alert(

        `Service Provider\n\n` +

        `Name: ${provider.name}\n` +

        `Service: ${provider.service}\n` +

        `Rating: ⭐ ${provider.rating}\n` +

        `Distance: ${provider.distance} km\n` +

        `Starting Price: ₹${provider.price}\n` +

        `Status: ${provider.availability}`

    );

}


// ==========================================
// CONTACT PROVIDER
// ==========================================

function contactProvider(name) {

    alert(
        `📞 Contact Request\n\n` +

        `You selected ${name}.\n\n` +

        `In the next version, ` +

        `this button can open phone, ` +

        `WhatsApp or booking.`

    );

}


// ==========================================
// LOGIN
// ==========================================

function loginUser() {

    alert(
        "🔐 Login feature\n\n" +

        "Login and registration " +

        "will be added in the next version."
    );

}


// ==========================================
// INITIAL LOAD
// ==========================================

displayProviders(providers);