const menuData = [
    // Pizza
    { title: "Margherita Pizza", category: "Pizza", rating: 4.8, reviews: 120, desc: "Classic cheese pizza with fresh tomatoes and basil.", price: "$12.99", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop" },
    { title: "Pepperoni Feast", category: "Pizza", rating: 4.9, reviews: 205, desc: "Loaded with pepperoni and mozzarella cheese.", price: "$14.99", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop" },
    { title: "BBQ Chicken Pizza", category: "Pizza", rating: 4.7, reviews: 145, desc: "Grilled chicken, BBQ sauce, and red onions.", price: "$15.50", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
    { title: "Veggie Supreme", category: "Pizza", rating: 4.6, reviews: 90, desc: "Bell peppers, mushrooms, olives, and onions.", price: "$13.99", img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop" },
    { title: "Hawaiian", category: "Pizza", rating: 4.5, reviews: 110, desc: "Ham, pineapple, and extra cheese.", price: "$14.50", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop" },
    { title: "Meat Lovers", category: "Pizza", rating: 4.8, reviews: 230, desc: "Sausage, bacon, pepperoni, and ham.", price: "$16.99", img: "https://images.unsplash.com/photo-1571407970349-bc10c6198bbd?w=400&h=300&fit=crop" },
    { title: "Mushroom Truffle", category: "Pizza", rating: 4.9, reviews: 85, desc: "Wild mushrooms with truffle oil drizzle.", price: "$17.99", img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop" },

    // Burger
    { title: "Classic Cheeseburger", category: "Burger", rating: 4.7, reviews: 89, desc: "Juicy beef patty with cheddar and lettuce.", price: "$8.99", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
    { title: "Double Bacon Burger", category: "Burger", rating: 4.9, reviews: 150, desc: "Two smashed patties with crispy bacon.", price: "$12.99", img: "https://images.unsplash.com/photo-1594212691516-0499b990f111?w=400&h=300&fit=crop" },
    { title: "Spicy Jalapeno", category: "Burger", rating: 4.6, reviews: 120, desc: "Pepper jack cheese, jalapenos, and spicy mayo.", price: "$10.50", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop" },
    { title: "Mushroom Swiss", category: "Burger", rating: 4.8, reviews: 95, desc: "Sautéed mushrooms and melted Swiss cheese.", price: "$11.00", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop" },
    { title: "Crispy Chicken Burger", category: "Burger", rating: 4.7, reviews: 180, desc: "Fried chicken breast with pickles and mayo.", price: "$9.50", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop" },
    { title: "Veggie Patty Burger", category: "Burger", rating: 4.5, reviews: 60, desc: "Plant-based patty with fresh avocado.", price: "$11.50", img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop" },
    { title: "BBQ Cowboy Burger", category: "Burger", rating: 4.8, reviews: 140, desc: "Onion rings, cheddar, and smoky BBQ sauce.", price: "$12.50", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop" },

    // Drinks
    { title: "Fizzy Cola", category: "Drinks", rating: 4.5, reviews: 40, desc: "Refreshing ice-cold cola with lemon slice.", price: "$2.99", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop" },
    { title: "Mango Smoothie", category: "Drinks", rating: 4.8, reviews: 75, desc: "Thick and creamy tropical mango blend.", price: "$5.99", img: "https://images.unsplash.com/photo-1546890975-7596e98cdbf1?w=400&h=300&fit=crop" },
    { title: "Iced Caramel Macchiato", category: "Drinks", rating: 4.9, reviews: 110, desc: "Espresso, milk, and sweet caramel drizzle.", price: "$4.50", img: "https://images.unsplash.com/photo-1461023058943-0708e5aff7ae?w=400&h=300&fit=crop" },
    { title: "Strawberry Lemonade", category: "Drinks", rating: 4.7, reviews: 85, desc: "Fresh squeezed lemons with strawberry puree.", price: "$3.50", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop" },
    { title: "Green Detox Juice", category: "Drinks", rating: 4.6, reviews: 50, desc: "Apple, celery, spinach, and ginger.", price: "$6.50", img: "https://images.unsplash.com/photo-1610970881699-44a5587ce578?w=400&h=300&fit=crop" },
    { title: "Vanilla Milkshake", category: "Drinks", rating: 4.8, reviews: 130, desc: "Classic vanilla soft serve blended thick.", price: "$5.00", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop" },
    { title: "Iced Peach Tea", category: "Drinks", rating: 4.5, reviews: 65, desc: "Sweet peach infused iced tea.", price: "$3.00", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop" },

    // Desserts
    { title: "Chocolate Truffle", category: "Desserts", rating: 4.9, reviews: 210, desc: "Rich double chocolate cake with fudge.", price: "$6.50", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" },
    { title: "Vanilla Sundae", category: "Desserts", rating: 4.7, reviews: 92, desc: "Vanilla bean ice cream with caramel syrup.", price: "$4.99", img: "https://images.unsplash.com/photo-1563805042-7684c8a9e9ce?w=400&h=300&fit=crop" },
    { title: "New York Cheesecake", category: "Desserts", rating: 4.8, reviews: 145, desc: "Creamy cheesecake with graham crust.", price: "$7.50", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop" },
    { title: "Tiramisu", category: "Desserts", rating: 4.9, reviews: 160, desc: "Coffee-flavored Italian dessert.", price: "$8.00", img: "https://images.unsplash.com/photo-1571115177098-24c42de1bd15?w=400&h=300&fit=crop" },
    { title: "Apple Pie", category: "Desserts", rating: 4.6, reviews: 110, desc: "Warm apple pie with cinnamon glaze.", price: "$5.50", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop" },
    { title: "Strawberry Tart", category: "Desserts", rating: 4.7, reviews: 85, desc: "Fresh strawberries on custard crust.", price: "$6.00", img: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&h=300&fit=crop" },
    { title: "Fudge Brownie", category: "Desserts", rating: 4.8, reviews: 190, desc: "Warm gooey brownie with walnuts.", price: "$4.50", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop" },

    // Chicken
    { title: "Crispy Fried Wings", category: "Chicken", rating: 4.8, reviews: 185, desc: "6 pieces of golden crispy wings.", price: "$9.99", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
    { title: "Grilled Chicken Breast", category: "Chicken", rating: 4.6, reviews: 110, desc: "Herb-marinated grilled chicken.", price: "$12.50", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=400&h=300&fit=crop" },
    { title: "Spicy Chicken Tenders", category: "Chicken", rating: 4.7, reviews: 140, desc: "Tenders coated in fiery spices.", price: "$8.99", img: "https://images.unsplash.com/photo-1562967914-01efa7e87832?w=400&h=300&fit=crop" },
    { title: "Chicken Parmesan", category: "Chicken", rating: 4.9, reviews: 95, desc: "Breaded chicken topped with marinara.", price: "$14.00", img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop" },
    { title: "BBQ Chicken Skewers", category: "Chicken", rating: 4.5, reviews: 80, desc: "Char-grilled skewers with BBQ sauce.", price: "$10.50", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop" },
    { title: "Roasted Whole Chicken", category: "Chicken", rating: 4.8, reviews: 200, desc: "Slow-roasted to perfection.", price: "$18.99", img: "https://images.unsplash.com/photo-1598515318127-6101c518fb19?w=400&h=300&fit=crop" },
    { title: "Chicken Nuggets Meal", category: "Chicken", rating: 4.6, reviews: 150, desc: "10 pieces of nuggets with fries.", price: "$7.99", img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop" },

    // Healthy
    { title: "Caesar Salad", category: "Healthy", rating: 4.9, reviews: 95, desc: "Fresh romaine, croutons, parmesan.", price: "$10.99", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop" },
    { title: "Avocado Toast", category: "Healthy", rating: 4.7, reviews: 60, desc: "Smashed avocado on sourdough.", price: "$8.50", img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop" },
    { title: "Quinoa Veggie Bowl", category: "Healthy", rating: 4.8, reviews: 120, desc: "Quinoa, roasted veggies and tahini.", price: "$12.00", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
    { title: "Grilled Salmon", category: "Healthy", rating: 4.9, reviews: 180, desc: "Rich in omega-3, served with asparagus.", price: "$16.99", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop" },
    { title: "Fruit Salad", category: "Healthy", rating: 4.6, reviews: 55, desc: "Seasonal fresh fruits mix.", price: "$6.50", img: "https://images.unsplash.com/photo-1490474418585-ba9ce8c5443a?w=400&h=300&fit=crop" },
    { title: "Acai Bowl", category: "Healthy", rating: 4.8, reviews: 140, desc: "Acai blend topped with granola.", price: "$11.50", img: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=400&h=300&fit=crop" },
    { title: "Kale Detox Salad", category: "Healthy", rating: 4.5, reviews: 70, desc: "Kale, cranberries, nuts, lemon vinaigrette.", price: "$9.99", img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=300&fit=crop" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Toast setup
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);

    function showToast(message) {
        toast.innerText = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    // Modal logic
    const signinModal = document.getElementById('signin-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const signinForm = document.querySelector('.signin-form');

    function openModal() {
        signinModal.style.display = 'flex';
        // tiny delay to allow display flex to apply before opacity transition
        setTimeout(() => signinModal.classList.add('show'), 10);
    }

    function closeModal() {
        signinModal.classList.remove('show');
        setTimeout(() => signinModal.style.display = 'none', 300); // match transition duration
    }

    closeModalBtn.addEventListener('click', closeModal);

    // Close on click outside modal content
    signinModal.addEventListener('click', (e) => {
        if (e.target === signinModal) {
            closeModal();
        }
    });

    // Handle form submit mock
    if (signinForm) {
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            closeModal();
            showToast('Successfully signed in!');
        });
    }

    // Interactive buttons general logic
    document.querySelectorAll('.btn-action').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.getAttribute('href') && btn.getAttribute('href').startsWith('#')) {
                // smooth scroll is natural via css, don't prevent
                return;
            }
            e.preventDefault();
            const text = btn.innerText.trim();
            if (text === 'Sign In') {
                openModal();
            }
            else if (text === 'Claim Now') showToast('Offer Claimed Successfully!');
            else showToast('Action Successful!');
        });
    });

    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Categories Interaction & Menu Rendering
    const categoryItems = document.querySelectorAll('.category-item');
    const menuGrid = document.getElementById('menu-grid');
    const currentCategoryText = document.getElementById('current-category');
    const cartCount = document.getElementById('cart-count');
    let itemsInCart = 2;

    function renderMenu(category) {
        menuGrid.innerHTML = '';
        const filteredMenu = menuData.filter(item => item.category === category);

        const fallbackImages = {
            "Pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
            "Burger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
            "Drinks": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop",
            "Desserts": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop",
            "Chicken": "https://images.unsplash.com/photo-1562967914-01efa7e87832?w=400&h=300&fit=crop",
            "Healthy": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
        };

        filteredMenu.forEach(item => {
            const fallbackSrc = fallbackImages[item.category] || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop";
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <div class="menu-img">
                    <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackSrc}';">
                </div>
                <div class="menu-content">
                    <div class="menu-rating">⭐ ${item.rating} <span>(${item.reviews})</span></div>
                    <h3 class="menu-title">${item.title}</h3>
                    <p class="menu-desc">${item.desc}</p>
                    <div class="menu-footer">
                        <span class="menu-price">${item.price}</span>
                        <button class="btn-add"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            `;

            // Add to cart functionality
            const addBtn = card.querySelector('.btn-add');
            addBtn.addEventListener('click', () => {
                itemsInCart++;
                cartCount.innerText = itemsInCart;
                showToast(`Added ${item.title} to Cart!`);

                // Add minor animation to cart icon
                const icon = document.getElementById('cart-icon');
                icon.style.transform = 'scale(1.2)';
                setTimeout(() => icon.style.transform = 'scale(1)', 200);
            });

            menuGrid.appendChild(card);
        });
    }

    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(c => c.classList.remove('active'));
            item.classList.add('active');

            const selectedCategory = item.querySelector('.cat-name').innerText;
            if (currentCategoryText) currentCategoryText.innerText = selectedCategory;

            renderMenu(selectedCategory);

            // Smooth scroll to menu section
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Initial render
    renderMenu('Pizza');

    console.log("QuickBite Application Initialized! Welcome to Premium Food Delivery.");
});
