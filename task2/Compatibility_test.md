# Compatibility Testing Report: **Shoplane Website**

**Author:** Naga Swapna Gumpili\
**Date:** June 28, 2025


## Introduction
This report presents the results of compatibility testing for the demo website [SHOPLANE](https://shoplane-by-lassie.netlify.app/).
The goal is to evaluate how well the website performs across different browsers and devices.

## Objective
To verify the website's visual and functional consistency across various platforms including:
- Browsers: Chrome, Firefox, Edge
- Devices: Desktop, Tablet, Mobile

## Findings
### ✅ Working:
- Homepage loads correctly on all devices
- Navigation bar is responsive
- Images are well-aligned on desktop and mobile

---

## **1. Overview of Issues**
The following issues were identified across **different  browsers** (Chrome, Firefox, and Edge) during the compatibility testing of the **Shoplane** website:

- **Navigation bar Issues**  
- **Search Bar Issues** 
- **Cart Icon Issues** 
- **Account/Login Icon Issue**  
- **Slick Slider Not Working**  
- **Missing Product Filters**  
- **Footer Links Not Working**  
- **Size Selection & Brand Links on Product Pages**  
- **Inconsistent Cart Features**  
- **Checkout Flow**  
- **Product Layout Clutter**
  
---

## **2. Detailed Issues by Browser**

### **2.1. Chrome**
#### **Navigation bar Issues:**
- The **“Clothing”** and **“Accessories”** links result in error message **Page not find**.
- The **search bar** is **non-functional**.
- The **Account/Login icon**  is **non-functional** and doesnot redirect to sign-in or user account dashboard links.
- the **cart Icon** is not visible only the clickable red badge with numeric value indicating the no. of items in the cart is visible .

#### **Slick Slider:**
- Ads are displayed, but the **slider does not redirect** to their respective pages.

#### **Misaligned Product images:**
- The product images with product names **Men Black MAMGP T7 Sweat SportyJacket,Men Black Action Parkview Lifestyle Shoes,Womeblue Blue Solid Shirt Dress**  are smaller compared to the rest ,causing the products to appear misaligned.Degrades the user experience.

#### **Cart Badge Resets on Browser Back Navigation:**
- cart badge resets to 0 when navigating back 
- cart state is inconsistent and not persistent through navigation history ;


#### **Produt image misalignment at different viewport sizes:**
- as mentioned,the above above show misalignment on hover when the browser is Fullscreen(maximized chrome window)
- Resized(smaller width window) the other product **Men Navy Blue Solid Sweatshirt** now shows misalignment along with the above mentioned.


#### **Footer Issues:**
- The **“Online Store”** section should be renamed to **“Categories”** and the links (Men's Clothing, Women's Clothing, etc.) behave like links (hover effect)but doesnt actually function as links or doesnt have any  **anchor tags**.
- The **“Helpful Links”** section (Home, About, Contact) is non-functional.
- The **“Partners”** section (Zara, Pantaloons, etc.) does not redirect anywhere.
- The **address** in the footer behaves like link but doesn't work.
  
#### **Product page issues:**
- footer appears first before product details on the product page.creates a visual flash or shift in layout

#### **Size & Brand Links:**
- Product pages of clothing sectionlike are missing **size selection option**, **size guide** and **Wishlist** options.
- **Brand name** on product pages is not clickable.

#### **Size & Brand Links:**
- Product pages of clothing section are missing **size selection option**, **size guide** and **wishlist** options.
- **Brand name** on product pages is not clickable.

#### **Cart Issues:**
- The **“Add to Cart”** button works, but there's no **“Save for Later”** option.
- **Cart page** does not allow **quantity changes** or **remove items**.
- **inconsistent currency format** -mixed usage of spacing after currency symbol "Rs" in cart page.
- **No price breakdown** or **payment modes** available.
- **No recommendations for similar products** in the cart.

#### **Checkout Flow:**
- The **order confirmation page** appears immediately after clicking **“Place Order”** with no login, address entry, or payment options.
- There is **no multi-step checkout flow**.



---

### **2.2. Firefox**
- **Rendering Issues**: Similar to Chrome.
- **Functionality**: All issues are identical to those seen in Chrome (non-functional navigation bar links, Account/Login issue).
- **Performance**: No significant performance issues.

### **2.3. Edge**
- **Rendering Issues**: The layout appears very similar to Chrome, with no major differences noted.
- **Functionality**: All issues present are identical to the ones in Chrome.
- **Performance**: Edge performs slightly slower on page loads but no major issues with functionality.

---


## **3. Suggested Fixes (Cross-Browser)**

### **3.1. Navigation bar & Search Bar Fixes**
- **“Clothing”** and **“Accessories”** links should be functional, directing to the correct product pages.
- **Search bar** should have an **auto-complete or suggestion feature** to enhance user experience.
- The **Account/Login** icon should redirect to sign-in or user account dashboard pages
- ensure the cart icon is always visible alongside the badge .use proper positioning to place the badge .


### **3.2. Cart badge fixes**
- Enusre that the cart state is stored and synced with 
    - local Storage
    - or react/redux state+url sync
- add logic in the cart badge component to **re-fetch cart state** on route change .


### **3.3. Misalignment Fixes**
- Apply a consistent width and height (or fixed aspect ratio) to all product images via CSS
- Add media queries if necessary to preserve consistency on different viewports and consider enforcing a fixed image height in CSS.

### **3.4. Footer Fixes**
- **Rename** the **“Online Store”** section to **“Categories”** and add **anchor tags** is they are meant to navigate.
- or remove hover stule for non-interactive elements.
- **Helpful Links** (Home, About, Contact) should be linked correctly.
- The **Partners** section should direct users to the respective brand websites.
- Integrate a **Google Maps** widget for the address section or provide a clickable Google Maps link.

### **3.5. Product Page Fixes**
- add a **loading skeleton** or **spinner** while the product data is being fetched and ensure **main content container is reserved** to prevent layout jump. 
- Add **size selection options**,**size guide** and **wishlist** options for products.
- Make the **brand name clickable**, directing users to the relevant brand’s product page.

### **3.6. Cart & Checkout Fixes**
- Add **“Save for Later”** feature to the cart.
- Enable **quantity adjustments** and allow users to **remove items** from the cart.
- Standardize all currency formatting across the site.
- a **price breakdown** for each product, including taxes and discounts.
- a **multi-step checkout process**, including login, address input, payment selection, and order confirmation.
-  Add a **recommendation section** in the cart showing similar products.

### **3.7. Slick Slider & Recommendations**
- Ensure that **slick slider ads** redirect to the correct landing pages.
---

