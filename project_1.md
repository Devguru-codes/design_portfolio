Case Study: Reducing Checkout Friction in Indian E-Commerce — Snapdeal Checkout Redesign
Executive Summary
Our goal was to overhaul Snapdeal’s mobile checkout to cut cart abandonment and boost conversions. We analyzed user behavior and the Indian e-commerce context, audited the existing Snapdeal flow, and benchmarked top competitors (Amazon, Flipkart, Myntra, Meesho) for best practices. Key findings included rampant checkout drop-offs (globally ~70% abandonment) and strong user demand for trust cues and simplicity. We defined clear personas (budget-conscious student, working professional, tier-2 city user) and mapped their journeys. Through heuristic review and competitor analysis, we identified major pain points—hidden costs, form overload, weak CTA hierarchy, and confusion around payment options (COD vs UPI).

Armed with these insights, we envisioned a streamlined, mobile-first checkout: a concise 3–4 step flow (Cart → Address → Payment → Confirmation) with autofill support and minimal fields. We introduced trust signals (secure payment icons, clear refund policies) and microcopy to reassure users (“100% Secure Payments”, estimated delivery dates). We generated low-fidelity wireflows for Cart, Address, Payment, Review, and Success screens (see flow diagrams below), then refined them into mid- and high-fidelity designs. High-fidelity UI guidelines covered typography, spacing, color hierarchy, and mobile-first interactions. We also crafted UX writing for buttons and errors, designed reassuring empty and success states, and proposed KPIs (checkout completion, drop-off rate, payment success) and A/B tests (single vs multi-page flows, trust badge emphasis) to validate improvements. The new design promises simpler steps, transparent pricing, and greater trust – all critical to turning browsers into buyers in India’s value-driven market.

Problem Statement
Snapdeal faced high cart abandonment in its mobile checkout. Competitive data shows ~70% of carts globally are abandoned, often due to unexpected costs, forced logins, or confusing forms. In India, these issues are amplified by the “Bharat” shopper: mobile-first, price-sensitive users who demand trust (e.g. COD or UPI options). Snapdeal’s existing checkout had multiple pages and poorly labeled buttons, contributing to friction. We needed to simplify the flow, make costs clear, and build trust, so more users complete payment.

Background Context
Indian E-Commerce Landscape: India’s online market is massive and growing, with mobile devices dominating: over 85% of Snapdeal orders in 2025 came from mobile devices, and projections suggest 70% of all e-commerce transactions will be on mobile by 2027. Smartphone penetration (Jio’s 4G expansion) and cheap data have brought millions online. However, trust issues persist: cash-on-delivery (CoD) remains extremely common. Recent data shows 60–65% of Indian online orders still use CoD, especially outside major cities (Tier-2/3 cities up to 90% CoD). In fact, nearly 65% of surveyed Indian shoppers used CoD in their last purchase. UPI payments have soared (228 billion transactions in 2025) and are now the default in metros, but CoD is a vital trust option in smaller towns.

Snapdeal’s Market: Snapdeal caters to the value-conscious middle class. Over 70% of Snapdeal’s customers in 2025 were 18–45 year-olds earning ₹3–10L/year. Many are new-to-online shoppers from Tier-2/3 India, transacting under ₹1,000. These users prioritize free shipping and CoD to reduce payment friction, and they shop in short mobile sessions. They want affordable products (Snapdeal offers 60M+ SKUs at deep discounts) and expect a fast, easy checkout on slow connections.

This context means mobile-first speed, simplicity, and visible trust indicators are critical. Any checkout redesign must accommodate limited bandwidth (Snapdeal even has a Lite mode) and provide pain-free payment choices that align with users’ comfort levels (e.g. COD and popular UPI apps).

UX Audit
We performed an audit of Snapdeal’s existing checkout to uncover pain points:

Lengthy, Multi-step Flow: Users had to proceed through >4 screens (cart review, login, address entry, payment, order review). Each extra step increases drop-off.
Hidden Costs: Extra fees (shipping, CoD charge) only appeared late in the flow. Studies show unexpected costs lead to 48% abandonment.
Mandatory Login: Snapdeal enforced account creation/sign-in. Forcing login is known to deter ~26% of shoppers. Many users simply abandon rather than create an account.
Form Friction: Address and payment forms had many fields with weak autofill/hint support. This slows input on mobile keyboards.
Poor Visual Hierarchy: CTAs (e.g. “Proceed”, “Pay”) were inconsistently styled and sometimes below the fold on mobile. Important info (order total) competed with cluttered elements.
Payment Confusion: The CoD option lacked clarity (users didn’t see fees upfront) and UPI/card options were buried. Mistrust of online payment (card/UPI) is common, yet Snapdeal’s UI didn’t actively reassure with secure-payment badges or saved payment methods.
Lack of Trust Cues: There were few reassuring messages (SSL lock, guarantees, or easy return policy), despite Indian shoppers valuing visible security markers.
Overall, checkout friction was high: vital information was not prominent, and users had little confidence during the process.

Competitor Analysis
Platform	Checkout Steps	Payment UX	Address UX	Delivery/Trust	CTA Hierarchy	Error Handling
Amazon India	3–4 steps (Cart → Login/Guest → Address → Payment → Review)	Wide options (cards, wallets, UPI, BNPL, “Amazon Pay”), saved methods, clear entry forms	Saved addresses (autocomplete, pincode lookup)	Shows delivery date, “Amazon Pay” SSL padlock, extensive reviews and A-to-z guarantee	Prominent primary CTAs (“Place your Order”), minimal secondary distractions	Inline validation on forms, clear error messages
Flipkart	3–4 steps (Cart → Address → Payment → Review)	Similar to Amazon with mobile wallets, EMI, Flipkart Wallet	Auto-fill fields, address validation	“Flipkart Assured” and seller transparency, shows delivery estimates	Bold “Continue” and “Place Order” buttons in brand color, consistent layout	Highlights missing fields immediately, contextual tips
Myntra	2–3 steps (Cart/Login → Address/Payment → Review)	Simplified: saved profiles, express checkout (one-step for logged-in users), supports COD/UPI	Streamlined one-tap address selection	Emphasizes 30-day returns (“Try at Home” model) for trust	Large full-width CTA (“Place Order”), clear summary above the fold	Minimal errors; often prevents invalid input by design
Meesho	3–4 steps (Cart → Checkout → Address → Payment)	Targets social resellers; UPI and wallets, CoD with fee, integrated tax invoice workflow	Requires buyer info (often via WhatsApp link to end-customer)	CoD prominently offered (some fees), buyer-protection labels	Clear “Checkout” and “Place Order” CTAs, simpler screens	Shows prompts for missing address/phone, allowed to edit cart
Snapdeal (Current)	4–5+ steps (Cart → Login/Guest → Address → Payment → Review)	Basic options: Credit/Debit, UPI, netbanking, “Cash on Delivery”	Standard forms without autosuggest (users must enter full pincode)	Sparse: limited trust badges, unclear return info until review page	Inconsistent CTAs (some small text links), cluttered with promo banner	Generic error pop-ups; minimal inline guidance

Notably, Myntra, Amazon, and Flipkart are often cited for polished UX, clear hierarchy, and fast checkout. In contrast, Snapdeal’s flow lags behind: it is longer and more confusing, with weaker emphasis on trust. Our table identifies each platform’s checkout length, payment method presentation, address entry ease, visible trust cues, CTA prominence, and error messaging clarity.

Key competitor takeaways:

Minimize steps and form fields.
Show all costs up-front; display delivery timelines early.
Highlight security (e.g. HTTPS lock icon, brand badges).
Use bold, full-width CTAs for primary actions.
Provide instant error prevention (e.g. autocomplete address, validate card).
Heuristic Evaluation
Applying Nielsen’s usability heuristics to Snapdeal’s checkout:

Visibility of System Status: Snapdeal lacked clear progress indicators (no “step 1 of 3”). Users weren’t informed about loading or completion after actions, which can erode trust (Heuristic 1). We’ll add a progress bar and loading spinners to keep users informed.

Match Between System and Real World: Terminology was inconsistent. For example, “Deliverable Zip” vs “Pincode” labels confused some. The UI sometimes mixed colloquial terms (INR, ₹) and internal codes. We will standardize language (use “Pincode” and Indian currency symbols) to match user expectations (Heuristic 2).

User Control and Freedom: Users could not easily back out or edit steps. If a wrong pincode was entered, they had to restart the flow. We will add clear “Back” buttons and allow editing within each step to respect user control (Heuristic 3).

Consistency and Standards: Snapdeal’s style and layout varied between screens (e.g. button colors changed, fonts varied), violating consistency (Heuristic 4). We will enforce a consistent styleguide: uniform button styles, headings, and color use across all steps.

Error Prevention: The design did little to prevent errors. For instance, no input masks on card fields meant typos were common, leading to errors later (Heuristic 5). We will use formats and constraints (e.g. auto-formatted card number, phone number verification) to prevent high-cost mistakes.

Aesthetic and Minimalist Design: Some checkout pages were cluttered with banners and upsells during checkout, distracting from the main task (Heuristic 8). We’ll declutter: hide unnecessary promotions during the payment flow and focus on essential form fields and information.

Help Users Recover from Errors: Error messages (e.g. “Invalid card details”) were terse and technical. Users weren’t guided on how to fix mistakes (Heuristic 9). We will implement clear, plain-language error messages (“Please check your card details and try again.”) with suggestions.

Overall, the heuristic audit confirmed that Snapdeal’s checkout violated multiple usability principles, contributing to friction and distrust. Our redesign addresses each point to create a smoother, more intuitive flow.

Personas
1. Priya (Budget-Conscious Student, 21, Delhi Metro): A university student juggling part-time tutoring and college. Goals: Buy affordable textbooks and gifts without overspending. Pain points: Hesitant to enter card details; worried about hidden shipping or GST charges. Shopping habits: Compares prices across apps; uses coupons and prefers COD or UPI (Peer-to-peer) to avoid credit card fees.

2. Rohan (Working Professional, 30, Bengaluru): An IT engineer with a steady income. Goals: Purchase electronics and clothes efficiently during lunch breaks. Pain points: Values speed – “Make it quick!” Impatient with multi-page forms or slow loading; wants express checkout with saved address and payment. Shopping habits: Often shops on app after work; has saved addresses and cards in Flipkart/Amazon but not on Snapdeal; trusts digital payments if UI looks secure.

3. Anjali (Tier-2 City User, 28, Lucknow): A school teacher in a small city. Goals: Buy home appliances and gifts affordably. Pain points: Prefers cash payments; wary of apps and unsure about refunds if she pays upfront. Has intermittent internet. Shopping habits: Uses Snapdeal’s app because of lower prices; often opts for CoD. Needs UI in Hindi or local language; frustrated by complicated forms and login.

Each persona highlights different aspects: Priya’s focus on discounts, Rohan’s need for speed, and Anjali’s requirement for trust and simplicity. These guide our design decisions (e.g. guest checkout for Anjali, progress indicators for Rohan, and clear coupon fields for Priya).

Empathy Maps
For each persona, we considered what they Think, Feel, Say, and Do in the context of checkout:

Priya (Student):

Think: “This site should give me the best deal.” “I hope there’s no hidden fee at the end.”
Feel: Anxious when entering personal info; excited when a discount appears.
Say: “I want to use my wallet or pay later.”
Do: Applies coupons carefully; debates COD vs UPI.
Rohan (Professional):

Think: “I need to place this order in 2 minutes.”
Feel: Frustrated by extra steps; relieved when he sees a one-click payment option.
Say: “Just let me pay quickly!”
Do: Prefers to log in quickly via fingerprint; skips reading fine print.
Anjali (Tier-2 User):

Think: “I only use cash; is online safe?”
Feel: Nervous about entering card data; comforted by COD.
Say: “Does Cash on Delivery have a fee?”
Do: Seeks support if confused; might leave and shop offline if unsure.
By mapping these emotions and behaviors, we empathize with how each user navigates checkout on Snapdeal, highlighting moments of delight (e.g. seeing a promo code apply) and frustration (e.g. slow input fields).

User Journey Maps
We mapped each persona’s end-to-end journey through Snapdeal’s checkout:

Priya’s Journey: Discover sale item → Add to Cart → View Cart (notices free shipping at ₹500) → Apply Coupon → Proceed to Checkout → (Prompt to log in; enters phone) → Enter Address → Select Payment (hesitates on card; switches to UPI) → Confirm Payment → Success. Touchpoints: social media ad, Snapdeal app, UPI app. Pain Points: Required login step, fear of extra fees until review.

Rohan’s Journey: Selects item on mobile → Proceeds directly (already logged in via Face ID) → Selects saved address with one tap → Chooses saved credit card → Review order (sees itemized price) → Place Order → Success screen. Touchpoints: app login, saved profiles. Pain Points: Initial login required if not remembered, minor delay if connectivity is slow.

Anjali’s Journey: Browses app menu in Hindi → Adds items to cart → Proceeds to checkout → Prompted for phone number (reluctant, but proceeds) → Hits page with shipping cost + ₹30 COD fee (surprised) → Pauses. Decides to continue because site is showing “Protected by encryption” lock → Confirms CoD → Success (message in Hindi confirms order). Touchpoints: vernacular UI, customer support hotline. Pain Points: Worry over hidden COD fee; relief from SSL indicator; success state reduces anxiety.

These journey maps pinpoint where users might abandon: Priya at login/cost reveal; Rohan at any unexpected reload; Anjali at payment selection confusion. The redesign targets these pinch points (e.g. guest checkout, upfront fee disclosure).

Pain Points Analysis
From our research and journey maps, key pain points emerged:

Hidden Costs: Users often saw unexpected charges at the last step (shipping, COD fee), eroding trust and causing cart abandonment.
Too Many Fields/Steps: Lengthy forms (address, payment, OTP) frustrated users, especially on slow mobile networks.
Forced Login: Mandatory sign-in was a blocker (Baymard found ~26% churn from this).
Unclear Actions: Button labels and hierarchy were inconsistent, so users hesitated. (“Continue” vs “Place Order”, etc.)
Payment Anxiety: Snapdeal’s UI lacked reassurance (e.g. security badges) around digital payments. Given 19% of shoppers globally fear data security, this was a red flag.
Limited Payment Options Visibility: CoD was offered but with little explanation; some users didn’t notice UPI/BNPL options could be easier.
By quantifying these issues (e.g., citing 70% abandonment), we highlighted how even small UX flaws translate into huge losses.

Opportunity Areas
Each pain point suggests a fix:

Simplify Checkout Flow: Combine steps where possible (one-page vs multi-page) to reduce friction.
Transparent Pricing: Show shipping/COD fees early (e.g., in Cart) to eliminate “sticker shock.”
Guest Checkout: Allow purchases without account creation to capture users who dislike sign-ups.
Autofill & Defaults: Use address autocomplete, saved profiles (if user logged in), and wallet tokenization to shorten forms.
Trust Signals: Add SSL padlock icon, payment security logos (PCI-DSS, UPI symbol), and clear refund/return info on checkout pages.
Mobile Optimization: Minimize images and scripts for faster load on 2G/3G, as 70% of traffic is mobile.
Clear CTAs & Progress: Use large, high-contrast buttons for next steps, and include a steps indicator (“Step 2 of 3”) for orientation.
UX Writing: Use reassuring microcopy (“Your payment is secure”) and intuitive placeholders (“Enter 6-digit PIN”).
These opportunity areas guided our redesign strategy: make it mobile-friendly, transparent, and trust-building.

Task Flows
We mapped the primary checkout task flow. Below is a simplified cart-to-success flow (Mermaid diagram):

Yes

No

Shopping Cart

Proceed to Checkout

User Logged In?

Enter/Select Shipping Address

Option: Continue as Guest / Sign In

Choose Payment Method

Review Order Details

Place Order Button

Order Confirmation Screen



Show code
Cart: User reviews items and taps “Checkout”.
Login/Guest: If not already signed in, user can continue as guest or log in. This decision branch prevents forced sign-up.
Address: Enter or select saved address (with autofill/pincode lookup).
Payment: Select method (card, UPI, wallet, or CoD) and enter details.
Review: Final confirmation screen showing all costs.
Success: Order confirmed (with order # and summary).
If any step fails (e.g. payment declined), the user is routed back to the relevant step with an error message (not shown). This flow minimizes detours and keeps user control (Heuristic 3).

User Flows
A user flow highlights entry and exit points. For example, a user story “Buy a phone case”:

Back to Shopping

Product Page: Phone Case

Add to Cart

On Cart Page?

View Cart Contents

Click Checkout

Address Screen

Payment Screen

Order Review

Order Success

Continue Browsing



Show code
Entry: User starts at a product page, adds item to cart.
Cart: They confirm cart contents, then click “Checkout”.
Checkout: They enter address, then payment details.
Success: Order placed.
If at any point (e.g. Address) the user decides to modify the cart or cancel, they can navigate back (red arrow not shown). This flow emphasizes a straight path to purchase with minimal distractions.

Low-Fidelity Wireframes (Mermaid Diagrams)
Below are simplified wireframe sketches for key screens in the mobile checkout flow:

Cart View: Items list with prices, subtotal, coupon field, and primary “Proceed to Checkout” button.

mermaid
Copy
flowchart TB
    subgraph Cart Screen
        A[Product 1 – ₹499 (Qty 1)] 
        B[Product 2 – ₹299 (Qty 2)] 
        C[Subtotal: ₹1097] 
        D[Coupon Code: [Apply]] 
        E[Total Payable: ₹1097] 
        F[Checkout Button → ]
    end
Address Entry: Choice of saved address or form for new address, plus delivery preferences.

mermaid
Copy
flowchart TB
    subgraph Address Screen
        A[Saved Address 1 (✓) Home – 560001] 
        B[+ Add New Address] 
        C[Pincode: [560001]] 
        D[Name: [Priya Kumar]] 
        E[Phone: [Enter 10-digit mobile]] 
        F[Delivery Preference: [Standard 3–5 days]] 
        G[Continue Button → ]
    end
Payment Selection: Options for card, UPI, netbanking, or CoD; summary on side.

mermaid
Copy
flowchart TB
    subgraph Payment Screen
        A[Credit/Debit Card – [**** **** **** 1234]] 
        B[UPI – [Enter UPI ID]] 
        C[Netbanking – [Choose Bank]] 
        D[Cash on Delivery – ₹30 fee] 
        E[Order Total: ₹1097] 
        F[Pay Now Button → ]
    end
Order Review: Displays all order details and final “Place Order” CTA.

mermaid
Copy
flowchart TB
    subgraph Review Screen
        A[Items List with Prices] 
        B[Shipping Address] 
        C[Payment Method Selected] 
        D[Total (incl. shipping) ₹1097] 
        E[Place Order Button → ]
    end
Success Screen: Confirmation with order number and next actions.

Success Screen

✅ Order Confirmed!

“Thank you, Priya. Your order #123456 is on its way.”

View Order Details

Continue Shopping



Show code
(Note: These flowcharts are conceptual wireframes. In implementation, each box corresponds to sections on the mobile screen.)

Mid-Fidelity Layout Descriptions
In mid-fidelity, we refine layout and spacing:

Cart Layout: Vertical list of items (thumbnail, name, qty, price) with clear separators. Subtotal and coupon field are at the bottom, followed by a full-width “Proceed to Checkout” button in Snapdeal’s signature orange. The layout uses a single column; touch targets (e.g. quantity +/- buttons) are ≥48px high. Headers and totals use slightly larger, bold font; lesser details (like item options) use a muted secondary text style.

Address Layout: A card-based view: each saved address is shown in a bordered box with a selectable radio button. The “Add New Address” button expands an inline form (fields stacked) with clear labels. Fields auto-scroll if the keyboard opens. Spacing between inputs is consistent (16px). The “Continue” button is fixed at bottom.

Payment Layout: Listed as radio options. If a saved card exists, it’s shown with bank logo; selecting it expands a CVV field. UPI entry shows input and a “Verify” chip button. CoD option includes a tooltip icon explaining the ₹30 fee (and why). On the side or bottom, a summary box highlights Order Total. The “Pay Now” CTA is prominent (full-width, high-contrast).

Review Layout: Similar card layout: one card for shipping info, one for payment, one listing items. Each has an “Edit” link for quick corrections. The final price is in bold at the bottom. The primary “Place Order” button spans full width and sits above a footer note (“100% Secure Checkout”).

Success Layout: Simple confirmation page. A large green check icon and heading “Order Confirmed!” at top. Key details (order number, items summary) in a vertically scrollable area. Two big buttons: “View Order” (primary) and “Continue Shopping” (secondary). Everything is center-aligned for mobile comfort.

Across all layouts, we adopted an 8px baseline grid. Margins and paddings are multiples of 8px (or 16px for major sections). Fonts are sized for readability on small screens (minimum 14sp for body text). Visual hierarchy uses size, weight, and color contrast to distinguish headers (black/800 weight), labels (grey/600 weight), and interactive text (blue/orange accents).

High-Fidelity UI Descriptions
For the polished UI, we define style details:

Typography: We chose a modern sans-serif (e.g. Montserrat or Roboto). Header text is 18–20sp bold. Body text is 14–16sp normal weight. Secondary info (like “Apply Coupon”) uses 12–14sp in gray. Line spacing is ~1.4× to ensure legibility.

Color & Visuals: Snapdeal’s orange (#FF6F00) is the primary CTA color. We use deep gray (#212121) for main text and light gray (#757575) for hints. Buttons have white text on orange or black on white, with 8px rounded corners. Trust icons (lock, UPI logo) are in color (blue/green) to stand out. Products and UI elements have subtle drop shadows to imply depth.

Spacing & Layout: We maintain an 8px grid. For example, list items have 16px vertical padding. Sections are separated by 16–24px of space. Each text label is padded 8px from its input. Fixed bottom buttons have 16px margins from edges.

CTA Styles: Primary CTAs (e.g. “Place Order”, “Pay ₹X”) are full-width orange buttons with white text, 48px tall. Secondary actions (e.g. “Cancel”, “Back”) are text links in blue. Disabled or pending states show 50% opacity. The final payment button may animate subtly on click to acknowledge tap.

Trust Indicators: On payment screens, we display a lock icon and text “Secure SSL Encryption” near the total. We also show familiar payment logos (Visa, UPI, RuPay) in a row. The return policy (“30-day free returns”) is linked under item summary. Color green (#4CAF50) highlights positive info (e.g. “Free Shipping!”) to reassure users.

Mobile Interactions: Touch areas (buttons, radio rows) are at least 44×44dp. The address/guest toggle and “Send OTP” flows use bottom-sheet modals for convenience. Inputs use numeric keyboards where appropriate (e.g. pincode). For progress, a slim progress bar at top animates between steps.

All elements were prototyped in Figma to visualize hierarchy: e.g. product names in bold 16sp, prices in accent color, CTAs at bottom. Hover/tap animations (ripple effect on Android) give feedback. UI is tested at 360px width (smallest smartphones) and scales up responsively.

Mobile-First Strategy
Given Snapdeal’s mobile-heavy user base, our strategy was firmly mobile-first. Key practices included:

Performance: We optimized images and defer non-critical scripts to ensure fast loading. The checkout screens avoid large banners or carousels; only necessary graphics are loaded. As emphasized in e-commerce UX guides, “images should be optimized and lazy-loaded” to improve speed. This directly combats abandonment from slow pages (Baymard notes slow load frustrates 21% of shoppers).

Thumb-Friendly Layout: We placed primary actions (e.g. “Continue”, “Place Order”) at the bottom, within thumb’s reach. Scrolling is minimized by using step-by-step flows; each step fits within the view or scrolls minimally.

Responsive Inputs: Form fields use mobile-friendly components (date pickers, dropdowns). The keyboard automatically dismisses when fields complete. Each field uses client-side validation to give instant feedback, so users don’t repeatedly submit the page (a common mobile annoyance).

Autofill & Storage: We leverage browser/OS autofill for addresses and card details. The app can remember shipping addresses and payment tokens after permission, so returning users have fewer taps. This aligns with best practices “support guest checkout [and] autofill”.

Connectivity Handling: The app shows indicators for low network (spinners) and caches form data locally in case of dropouts. For example, if the network falters mid-checkout, the user isn’t forced to re-enter everything.

Single-Column Emphasis: Unlike desktop, we didn’t try side-by-side columns on mobile. All content is stacked vertically for clarity. Even payment summary is a fixed footer rather than a side panel.

These mobile-first decisions ensure the checkout is snappy and usable on the slow connections common in Tier-2/3 India.

Trust & Security Design
Building trust was paramount. We embedded multiple cues throughout the flow:

Secure Payment Indicators: On the payment screen, a lock icon next to the “Pay Now” button signals SSL encryption. We display the “UPI” and credit card network icons so users recognize familiar logos. We also include a “Powered by Snapdeal Payments” tagline.

Refund & Guarantee Messaging: On both Cart and Review screens, small-text links show return/refund policy (e.g. “7-day easy return” or “Seller Assurance”). This reduces anxiety about post-purchase issues.

Delivery Transparency: Estimated delivery dates are shown in the address step (“Get it by Feb 20–22”), replacing vague “Usually ships in 3–5 days.” A Progress tracker is visible: “Processing ▶ Shipped ▶ Delivered” on the success screen.

CoD Trust Cues: Since CoD is vital, we label it clearly: “Cash on Delivery (Home payment) – ₹30 fee.” A tooltip explains why the fee exists (logistics cost) to preempt complaints. The user can also see “No fee on prepaid” highlighted.

Data Privacy Assurances: Before collecting payment info, a short note says “Your data is safe with us – Snapdeal uses bank-level encryption.” This echoes recommendations to “include upfront messaging about data security”. The UX never asks for unnecessary permissions or data beyond the purchase.

Visual Brand Consistency: We prominently display the Snapdeal logo on top, so users know which site they’re on. According to Commonwealth guidelines, “Users trust tools from companies they have positively interacted with”, so the familiar brand logo is a constant reassurance in the UI.

Support and Feedback: On every screen corner, a small “Help?” link opens live chat or FAQ. If users pause for too long, a “Need help? Chat with us” banner appears. This closeness to support helps build trust.

In combination, these elements (icons, copy, policy links) signal “transparent, secure checkout”, addressing the 19% of shoppers who abandon over security doubts.

UX Writing / Microcopy
We crafted concise, action-oriented copy for buttons and messages:

Buttons:

Cart: “Proceed to Checkout” (primary).
Address: “Continue”.
Payment: “Pay ₹X Now” (show final amount).
Review: “Place Order”.
Field Prompts:

Pincode field: “Enter your 6-digit PIN code”.
OTP screen (if any): “Enter 4-digit code sent to your mobile”.
Trust Text:

Under UPI option: “Instant & secure payments via UPI.”
Below card fields: “We accept Visa, MasterCard, RuPay, and UPI.”
Error Messages:

Invalid pincode: “Sorry, we don’t deliver to this area.”
Payment declined: “Payment failed. Try another method or contact bank.”
Missing field: “Please fill out this field.”
Helper Text:

Next to CoD: “Cash/UPI on delivery; ₹30 fee.”
On review screen: “You save ₹X on this order!” (if discount applied).
On success: “Thank you for shopping with us.”
Empty States:

Cart empty: “Your cart is empty! Find great deals by adding items to your cart.” (with a link “Start Shopping”).
No address: “No address found. Add one to proceed with delivery.”
The tone is friendly but direct, avoiding jargon. For critical fields, microcopy instructs in plain language (e.g. “Verify OTP” vs “Submit Code”). Each message aims to reduce uncertainty (e.g. using “secure” and “guaranteed”).

Error States
For any failure, we designed helpful recovery:

Network/Error Fallback: If connection drops, display a full-screen message: “Connection lost. Please check your internet and tap retry.” The “Retry” button attempts to re-submit with cached data.

Address Errors: If user enters an invalid pincode, a red inline message appears: “We deliver only to certain pincodes. Please re-enter.” The field is highlighted.

Payment Errors:

Card decline: “Your transaction was declined. Please check card details or try another payment method.”
UPI failure: “UPI payment could not be completed. Make sure your bank app is set up or try a different UPI ID.”
Form Validation: We immediately validate fields on blur (e.g. highlighting an empty Name field as “Required”). This prevents errors rather than just reporting them after submission (aligning with Nielsen Heuristic 5).

General: If an unexpected error occurs (system issue), we show: “Oops! Something went wrong on our end. Please try again in a moment.” This reassures the user and provides a clear action (retry).

All error messages are accompanied by gentle iconography (e.g. a small “!” symbol) and are written in second person for clarity.

Empty States
Guiding users when there’s no data:

Empty Cart: Display a friendly note: “Your cart is empty. Find great deals in our categories below!” We include thumbnail links to popular categories (e.g. Electronics, Fashion) for quick browsing.

No Saved Address: In the address step, if the user has no address on file, we show “You have no saved address. Add one now to get your products delivered.” A big “Add New Address” button appears.

No Payment Method: On payment screen, if no card/UPI is set up, text reads: “No payment method available. Add a card or choose Cash on Delivery.” The “Add Card” CTA is highlighted.

No Orders: On post-login or home, if the user has never ordered before, the dashboard shows: “You haven’t placed any orders yet. Start shopping to see your history and track shipments!” and a “Shop Now” button.

Empty states are encouraging, not blaming. They inform the user what to do next (e.g. “Start Shopping”) and explain why the screen is empty (no items/orders).

Success States
Celebrating completed actions helps satisfaction:

Order Success: Header: “Order Confirmed!” with green check icon. Body: “Thank you, [Name]! Your order #123456 has been placed.” We highlight key next steps: “We’ll send a confirmation email and text. You can track delivery in My Orders.” The “View Orders” CTA is prominent.

Coupon Success: If a promo code is successfully applied, a toast message appears: “Coupon applied! You saved ₹X.”

Profile Saved: After adding an address or payment, a brief banner: “Address added successfully” or “Card saved.”

Payment Success: If 3D Secure or bank redirect is involved, upon return we show “Payment Successful – you are all set.”

Success messages are styled in the brand’s green or Snapdeal orange to evoke positive emotion, and they quickly summarize what happens next (email/SMS, tracking info). Providing next actions (View Orders, Continue Shopping) keeps momentum.

Metrics & KPIs
To measure the redesign’s impact, we would track:

Checkout Conversion Rate: % of initiated checkouts that convert to orders (target a ~20% uplift). Industry average abandonment is ~70%, so even small gains are significant.

Cart Abandonment: The inverse metric (% carts abandoned). A key goal is to reduce this by addressing pain points.

Payment Success Rate: % of started payment attempts that succeed. Watching for drops can indicate payment flow issues.

Average Checkout Time: Time from “Checkout” to “Order Placed.” Aim to minimize this (e.g. sub-2-minutes).

Drop-off by Step: Funnel analysis – e.g. how many leave at address vs payment. This pinpoints remaining friction.

User Satisfaction: Collect NPS or satisfaction ratings post-checkout. Improved trust cues should raise perceived confidence.

Repeat Purchase Rate: Over longer term, see if more users return to complete checkouts (indicating increased trust/loyalty).

We can benchmark against current metrics. For example, if Snapdeal currently has a 5% checkout completion (just an example), increasing it to 7% would be a 40% relative gain. Bayesian A/B tests will validate that UI changes (like showing trust badges) improve these KPIs.

A/B Testing Ideas
To iterate, we propose testing:

Single-Page vs Multi-Page Checkout: Compare a combined checkout page (address+payment on one scrollable screen) versus separate steps. Which yields lower abandonment?
Progress Indicator: Test with/without a “Step X of Y” bar at top, to see if it reduces drop-off by reducing uncertainty.
Trust Badge Emphasis: Show an SSL lock and “100% Secure” badge vs none, to measure effect on conversion (should increase payment confidence).
Payment Options Ordering: Try listing UPI first vs CoD first, to see if more users switch to UPI.
Express Checkout vs Guest: One version forces account creation, another offers “Continue as Guest” up front – measure abandonment change.
Each experiment will track not just conversion, but also any impact on average order value or speed of checkout. Through data-driven A/B tests, we can optimize the flow continuously.