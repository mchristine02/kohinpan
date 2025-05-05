// Check if products are defined in the current page
// If not, try to load from localStorage
let products = []

// Function to load products
function loadProducts() {
  // Check if products is already defined (from products.html)
  if (typeof window.products !== "undefined" && window.products.length > 0) {
    // Products already defined in the page
    products = window.products
    // Save to localStorage for other pages to use
    localStorage.setItem("products", JSON.stringify(products))
    return
  }

  // Try to load from localStorage
  const storedProducts = localStorage.getItem("products")
  if (storedProducts) {
    products = JSON.parse(storedProducts)
  } else {
    // Fallback products if not available
    products = [
        {
            id: 1,
            name: "Americano",
            price: 3.99,
            description: "Freshly pulled shots of espresso poured over cold water and ice. Simple, strong, and refreshingly smooth.",
            category: "Iced Coffee",
            image: "images/2.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 2,
            name: "Caramel Latte",
            price: 4.99,
            description: "Smooth espresso, creamy milk, and sweet caramel over ice—chill, sweet, and a total crowd favorite.",
            category: "Iced Coffee",
            image: "images/1.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 3,
            name: "Caramel Macchiato",
            price: 4.49,
            description: "Layered, luscious, and lightly sweet—milk and vanilla meet bold espresso, topped with a golden caramel drizzle.",
            category: "Iced Coffee",
            image: "images/3.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 4,
            name: "Choco Milk",
            price: 6.99,
            description: "Creamy, chocolatey, and nostalgic—your childhood favorite, now served ice-cold and extra smooth.",
            category: "Non-Coffee",
            image: "images/4.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 5,
            name: "Dirty Matcha",
            price: 4.99,
            description: "Earthy meets edgy—smooth matcha mixed with milk, “dirtied” up with a bold espresso shot.",
            category: "Iced Coffee",
            image: "images/5.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 6,
            name: "Latte",
            price: 3.49,
            description: "Simple, smooth, and satisfying—espresso and milk over ice for that mellow, creamy coffee fix.",
            category: "Iced Coffee",
            image: "images/6.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 7,
            name: "Matcha Latte",
            price: 3.99,
            description: "Creamy, earthy, and totally refreshing—premium matcha blended with milk and ice for a smooth, mellow sip.",
            category: "Non-Coffee",
            image: "images/7.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 8,
            name: "Salted Caramel Macchiato",
            price: 4.29,
            description: "Sweet, salty, and seriously smooth—espresso layered with milk, vanilla, and a rich salted caramel drizzle.",
            category: "Iced Coffee",
            image: "images/8.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 9,
            name: "Spanish Cinnamon Cream Latte",
            price: 4.29,
            description: "Warm, spicy, and creamy—espresso meets cinnamon, topped with a smooth, velvety cream for that perfect balance of heat and sweetness.",
            category: "Iced Coffee",
            image: "images/9.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 10,
            name: "Spanish Latte",
            price: 4.29,
            description: "Sweet, smooth, and oh-so-creamy—espresso, steamed milk, and a touch of condensed milk for a rich, comforting treat.",
            category: "Iced Coffee",
            image: "images/10.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 11,
            name: "Strawberry Matcha",
            price: 4.29,
            description: "A refreshing twist on classic matcha—smooth matcha paired with sweet strawberry and milk, served ice-cold for a vibrant, fruity sip.",
            category: "Non-Coffee",
            image: "images/11.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 12,
            name: "Strawberry Milk",
            price: 4.29,
            description: "Sweet, creamy, and downright delicious—fresh milk combined with luscious strawberry syrup for a nostalgic, fruity treat.",
            category: "Non-Coffee",
            image: "images/12.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 13,
            name: "White Mocha MAtcha Latte",
            price: 4.29,
            description: "A decadent twist on matcha—smooth white chocolate paired with earthy matcha, finished with steamed milk for a rich, creamy sip.",
            category: "Non-Coffee",
            image: "images/13.png",
            sizes: ["12oz", "16oz", "22oz"]
        },
        {
            id: 14,
            name: "French Toast",
            price: 4.29,
            description: "Golden, crispy, and oh-so-soft on the inside—classic French toast served with a dusting of powdered sugar and a drizzle of syrup.",
            category: "Snacks",
            image: "images/17.png"
        },
        {
            id: 15,
            name: "Fries",
            price: 4.29,
            description: "Crispy on the outside, fluffy on the inside—golden fries served hot and ready to dip in your favorite sauce.",
            category: "Snacks",
            image: "images/16.png"
        },
        {
            id: 16,
            name: "Garlic Buns",
            price: 4.29,
            description: "Soft, buttery, and packed with that irresistible garlic flavor—freshly baked buns.",
            category: "Snacks",
            image: "images/15.png"
        },
        {
            id: 17,
            name: "Grilled Cheese",
            price: 4.29,
            description: "We take two slices of your favorite bread, pile them high with gooey, melted cheese, and grill them to golden perfection.",
            category: "Snacks",
            image: "images/14.png"
        }

    ]
  }
}

// Load products when the page loads
document.addEventListener("DOMContentLoaded", () => {
  loadProducts()

  // Mobile menu toggle functionality
  const mobileMenu = document.getElementById("mobile-menu")
  const navMenu = document.querySelector(".nav-menu")

  if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  }
})

// DOM Elements
const mobileMenu = document.getElementById("mobile-menu")
const navMenu = document.querySelector(".nav-menu")
const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const cartCountElement = document.getElementById("cart-count")
const loginLink = document.getElementById("login-link")

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || []
updateCartCount()

// Check if user is logged in
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
if (isLoggedIn) {
  const username = localStorage.getItem("username")
  if (loginLink) {
    loginLink.textContent = username || "Account"
    loginLink.href = "#" // Could link to an account page in the future
  }
}

// Search functionality
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim().toLowerCase()
    if (searchTerm) {
      window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`
    }
  })
}

if (searchInput) {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchBtn.click()
    }
  })
}

// Load featured products on homepage
const featuredProductsContainer = document.getElementById("featured-products-container")
if (featuredProductsContainer) {
  // Get 4 random products for featured section
  const featuredProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 4)

  featuredProducts.forEach((product) => {
    const productCard = createProductCard(product)
    featuredProductsContainer.appendChild(productCard)
  })
}

// Load products on products page
const productsContainer = document.getElementById("products-container")
if (productsContainer) {
  const urlParams = new URLSearchParams(window.location.search)
  const categoryFilter = urlParams.get("category")
  const searchTerm = urlParams.get("search")

  let filteredProducts = [...products]

  // Apply category filter if present
  if (categoryFilter && categoryFilter !== "all") {
    filteredProducts = filteredProducts.filter((product) => product.category === categoryFilter)

    // Update category filter dropdown
    const categoryFilterElement = document.getElementById("category-filter")
    if (categoryFilterElement) {
      categoryFilterElement.value = categoryFilter
    }
  }

  // Apply search filter if present
  if (searchTerm) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    // Update search input
    if (searchInput) {
      searchInput.value = searchTerm
    }
  }

  // Display filtered products
  filteredProducts.forEach((product) => {
    const productCard = createProductCard(product)
    productsContainer.appendChild(productCard)
  })

  // Add event listeners for filters
  const categoryFilterElement = document.getElementById("category-filter")
  const sortFilterElement = document.getElementById("sort-filter")

  if (categoryFilterElement) {
    categoryFilterElement.addEventListener("change", () => {
      const category = categoryFilterElement.value
      const currentUrl = new URL(window.location.href)

      if (category === "all") {
        currentUrl.searchParams.delete("category")
      } else {
        currentUrl.searchParams.set("category", category)
      }

      window.location.href = currentUrl.toString()
    })
  }

  if (sortFilterElement) {
    sortFilterElement.addEventListener("change", () => {
      const sortOption = sortFilterElement.value
      const sortedProducts = [...filteredProducts]

      switch (sortOption) {
        case "price-low":
          sortedProducts.sort((a, b) => a.price - b.price)
          break
        case "price-high":
          sortedProducts.sort((a, b) => b.price - a.price)
          break
        case "name-asc":
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
          break
        case "name-desc":
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name))
          break
        default:
          // Default sorting (no change)
          break
      }

      // Clear and repopulate products container
      productsContainer.innerHTML = ""
      sortedProducts.forEach((product) => {
        const productCard = createProductCard(product)
        productsContainer.appendChild(productCard)
      })
    })
  }
}

// Load product detail
const productDetailContainer = document.getElementById("product-detail")
if (productDetailContainer) {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = Number.parseInt(urlParams.get("id"))

  if (productId) {
    const product = products.find((p) => p.id === productId)

    if (product) {
      // Create product detail HTML
      const productDetail = document.createElement("div")
      productDetail.classList.add("product-detail")
      productDetail.innerHTML = `
          <div class="product-image">
              <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-info">
              <h2>${product.name}</h2>
              <div class="product-price">$${product.price.toFixed(2)}</div>
              <div class="product-description">
                  <p>${product.description}</p>
              </div>
              <div class="product-meta">
                  <p><strong>Category:</strong> ${capitalizeFirstLetter(product.category)}</p>
              </div>
              <div class="quantity-selector">
                  <button id="decrease-quantity">-</button>
                  <input type="number" id="quantity" value="1" min="1" max="10">
                  <button id="increase-quantity">+</button>
              </div>
              <button id="add-to-cart" class="btn btn-primary">Add to Cart</button>
          </div>
      `

      productDetailContainer.appendChild(productDetail)

      // Add event listeners for quantity selector and add to cart button
      const decreaseBtn = document.getElementById("decrease-quantity")
      const increaseBtn = document.getElementById("increase-quantity")
      const quantityInput = document.getElementById("quantity")
      const addToCartBtn = document.getElementById("add-to-cart")

      decreaseBtn.addEventListener("click", () => {
        const currentValue = Number.parseInt(quantityInput.value)
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1
        }
      })

      increaseBtn.addEventListener("click", () => {
        const currentValue = Number.parseInt(quantityInput.value)
        if (currentValue < 10) {
          quantityInput.value = currentValue + 1
        }
      })

      addToCartBtn.addEventListener("click", () => {
        const quantity = Number.parseInt(quantityInput.value)
        addToCart(product, quantity)

        // Show confirmation message
        alert(`${quantity} ${product.name}${quantity > 1 ? "s" : ""} added to cart!`)
      })

      // Load related products
      const relatedProductsContainer = document.getElementById("related-products-container")
      if (relatedProductsContainer) {
        // Get products from the same category
        const relatedProducts = products
          .filter((p) => p.category === product.category && p.id !== product.id)
          .slice(0, 4)

        relatedProducts.forEach((relatedProduct) => {
          const productCard = createProductCard(relatedProduct)
          relatedProductsContainer.appendChild(productCard)
        })
      }
    }
  }
}

// Load cart items
const cartItemsContainer = document.getElementById("cart-items")
const cartSummaryContainer = document.getElementById("cart-summary")
const emptyCartContainer = document.getElementById("empty-cart")
const checkoutBtn = document.getElementById("checkout-btn")

if (cartItemsContainer && cartSummaryContainer) {
  if (cart.length === 0) {
    // Show empty cart message
    if (emptyCartContainer) {
      emptyCartContainer.style.display = "block"
    }
    cartItemsContainer.parentElement.style.display = "none"
  } else {
    // Show cart items
    if (emptyCartContainer) {
      emptyCartContainer.style.display = "none"
    }

    let subtotal = 0

    cart.forEach((item) => {
      const cartItem = document.createElement("div")
      cartItem.classList.add("cart-item")

      const itemTotal = item.price * item.quantity
      subtotal += itemTotal

      cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-price">$${item.price.toFixed(2)}</div>
              <div class="cart-item-quantity">
                  <button class="decrease-cart-quantity" data-id="${item.id}">-</button>
                  <span>${item.quantity}</span>
                  <button class="increase-cart-quantity" data-id="${item.id}">+</button>
              </div>
          </div>
          <div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
          <div class="cart-item-remove" data-id="${item.id}">
              <i class="fas fa-trash"></i>
          </div>
      `

      cartItemsContainer.appendChild(cartItem)
    })

    // Calculate cart summary
    const tax = subtotal * 0.1 // 10% tax
    const shipping = subtotal > 50 ? 0 : 5.99 // Free shipping over $50
    const total = subtotal + tax + shipping

    cartSummaryContainer.innerHTML = `
      <div class="cart-summary-row">
          <span>Subtotal:</span>
          <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="cart-summary-row">
          <span>Tax (10%):</span>
          <span>$${tax.toFixed(2)}</span>
      </div>
      <div class="cart-summary-row">
          <span>Shipping:</span>
          <span>${shipping === 0 ? "Free" : "$" + shipping.toFixed(2)}</span>
      </div>
      <div class="cart-summary-row total">
          <span>Total:</span>
          <span>$${total.toFixed(2)}</span>
      </div>
  `

    // Add event listeners for cart item buttons
    const decreaseButtons = document.querySelectorAll(".decrease-cart-quantity")
    const increaseButtons = document.querySelectorAll(".increase-cart-quantity")
    const removeButtons = document.querySelectorAll(".cart-item-remove")

    decreaseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const id = Number.parseInt(button.getAttribute("data-id"))
        updateCartItemQuantity(id, -1)
      })
    })

    increaseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const id = Number.parseInt(button.getAttribute("data-id"))
        updateCartItemQuantity(id, 1)
      })
    })

    removeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const id = Number.parseInt(button.getAttribute("data-id"))
        removeFromCart(id)
      })
    })

    // Add event listener for checkout button
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => {
        if (isLoggedIn) {
          alert("Thank you for your order! Your items will be processed shortly.")
          // Clear cart
          cart = []
          localStorage.setItem("cart", JSON.stringify(cart))
          // Redirect to home page
          window.location.href = "index.html"
        } else {
          alert("Please log in to complete your purchase.")
          window.location.href = "login.html"
        }
      })
    }
  }
}

// Handle login form submission
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log('Login form submitted:', { email, password }); // Debug log

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Invalid email or password');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Login successful:', data); // Debug log
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', data.user.name);
                localStorage.setItem('userId', data.user.id);
                alert('Login successful!');
                window.location.href = 'index.html';
            })
            .catch((error) => {
                console.error('Login error:', error);
                alert(error.message);
            });
    });
}

// Handle register form submission
const registerForm = document.getElementById("register-form");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const terms = document.getElementById("terms").checked;

    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!terms) {
      alert("Please agree to the Terms and Conditions.");
      return;
    }

    // Send registration data to the server
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Registration failed. Email may already be in use.');
        }
        return response.text();
      })
      .then((data) => {
        alert("Registration successful!");
        window.location.href = "login.html"; // Redirect to login page after successful registration
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

// Helper Functions
function createProductCard(product) {
  const card = document.createElement("div")
  card.classList.add("product-card")

  card.innerHTML = `
  <img src="${product.image}" alt="${product.name}" class="product-image">
  <h3 class="product-name">${product.name}</h3>
  <p class="product-price">$${product.price.toFixed(2)}</p>
  <div class="product-actions">
      <a href="product-detail.html?id=${product.id}" class="btn btn-secondary">View Details</a>
      <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
  </div>
`

  // Add event listener for add to cart button
  const addToCartBtn = card.querySelector(".add-to-cart-btn")
  addToCartBtn.addEventListener("click", () => {
    addToCart(product, 1)
    alert(`${product.name} added to cart!`)
  })

  return card
}

function addToCart(product, quantity) {
  const userId = localStorage.getItem('userId');

  if (!userId) {
      alert('Please log in to add items to your cart.');
      return;
  }

  fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: userId, product_id: product.id, quantity }),
  })
      .then((response) => {
          if (!response.ok) {
              throw new Error('Error adding item to cart. Please try again.');
          }
          return response.text();
      })
      .then((data) => {
          alert(`${quantity} ${product.name}${quantity > 1 ? 's' : ''} added to cart!`);
      })
      .catch((error) => {
          console.error('Error adding to cart:', error);
          alert(error.message);
      });
}
function updateCartItemQuantity(id, change) {
  const item = cart.find((item) => item.id === id)

  if (item) {
    item.quantity += change

    if (item.quantity <= 0) {
      // Remove item if quantity is 0 or less
      removeFromCart(id)
    } else {
      // Save cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cart))

      // Reload page to reflect changes
      window.location.reload()
    }
  }
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id)

  // Save cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart))

  // Reload page to reflect changes
  window.location.reload()
}

function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  if (cartCountElement) {
    cartCountElement.textContent = totalItems
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Product Modal
const modal = document.getElementById("product-modal")
const closeModal = document.querySelector(".close")

if (modal && closeModal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
  })

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
    }
  })
}
