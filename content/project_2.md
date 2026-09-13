Case Study: AI Money Mentor — An AI-Powered Finance Assistant
Product Overview
AI Money Mentor is a proposed AI-driven personal finance assistant app. It leverages a multi-agent architecture to give everyday Indians affordable, on-demand financial advice. The system (internally called “DhanSarthi”) orchestrates specialized AI agents for tasks like tax planning, investment analysis, and budgeting. As one of India’s first AI chatbots for finance, it aims to simplify money management for users who lack access to human advisors. The front-end includes a conversational chat interface plus a dashboard of financial data (budgets, goals, insights). Essentially, it turns complex financial rules into chat-based answers and actionable insights, all personalized to each user’s profile.

Product Positioning
AI Money Mentor is positioned as an inclusive fintech ally for working Indians. Unlike traditional banking apps that only show data, or niche robo-advisors with high fees, this product offers friendly AI guidance across multiple domains: budgeting, investments, loans, taxes, etc. It is particularly targeted at mid-market consumers (e.g. salaried professionals, young families, gig workers) who may have some investible income but no financial planner. The multi-agent system (with 9 specialist AI bots) is a unique backend strength, promising broad coverage of topics. For users, this translates to being able to “chat with a finance expert anytime.” We emphasize trust and explainability as differentiators: each recommendation is backed by data (e.g. “based on your expense history and 7% assumed inflation” gave this suggestion). In summary, we position AI Money Mentor as a 360° financial assistant app – more personal and conversational than a bank portal, and more tailored than generic advice sites.

Problem Statement
Across India, financial management is complex for many users, especially novices. There is a wide advice gap: 750+ million employed Indians lack affordable personal finance support. Users face confusing choices (which investment or tax form to pick) and often feel anxious about money. Traditional fintech apps (expense trackers, digital wallets) either present raw data or simplistic budgeting, but none truly guide users in plain language. Users frequently mistrust automated advice: 63% of people report chatbot security concerns, and they worry about AI “hallucinations” making up wrong answers. Our product must solve these pain points by providing personalized, explainable financial recommendations in a conversational UI. Key challenges include ensuring accuracy (avoiding hallucinations), building trust (users must feel safe sharing financial details), and handling complex finance topics (taxes, investments) in an accessible way.

Why AI for Personal Finance?
Artificial intelligence brings several advantages for personal finance: it automates expertise and personalizes advice at scale. According to industry sources, AI chatbots can deliver instant, customized guidance—“tailoring communication style and product suggestions to individual preferences”. In other words, the AI can learn a user’s specific goals (saving for college vs. paying off debt) and craft relevant suggestions (e.g. recommending an SIP vs. a debt plan). AI also handles routine tasks: it can auto-categorize expenses and remind users about bill payments. Crucially, AI enables 24/7 interaction. As InData Labs notes, AI-driven personalization means “each customer receives a financial journey that adapts to them continuously”. So if someone spends extra this month, the app could proactively advise adjusting next month’s budget. Ultimately, AI in this space means shifting from a reactive platform to a proactive financial partner. Rather than leaving users to puzzle through spreadsheets and FAQs, the app can converse about money matters, democratizing expertise that was once only available from costly financial planners.

AI Trust Challenges
Designing a finance AI requires careful attention to trust and transparency. Users have legitimate fears:

Hallucination Risk: Generative AI can sometimes produce confident-sounding but incorrect answers. In finance, even a small error (bad tax advice or risk assessment) can have big consequences. We must mitigate this by grounding AI responses in verifiable data. (For example, an investment suggestion should cite market trends or rules.)

Financial Anxiety: Money is emotional. Users might blame the AI for poor outcomes. We need to communicate uncertainty (e.g. “based on current data, it’s 75% likely...” or by giving ranges of outcomes).

Transparency & Privacy: People worry how their data is used. 63% said security is a top concern with chatbots. To build trust, we must explain how the AI works (without burdening them), and give them control over their data (see Conversational UX below). Each suggestion will be accompanied by a brief rationale (“Why this?”) so users see the basis of advice. Overall, the design must foreground trust: verified data sources, clear disclaimers (“For example, this is not legally binding advice”), and strict data encryption.

These challenges shape our UX: every recommendation must be clearly explained, with options to verify or override the AI, ensuring users feel empowered, not misled.

Conversational UX Principles
For the chat-based interface, we apply best practices for financial chatbots (inspired by research such as Commonwealth’s guide):

Clarity & Simplicity: We use natural, jargon-free language. If the AI uses terms like “RBI-mandated limit,” we provide tooltips or explain in context (Heuristic: match to user’s mental model). The chatbot introduces itself as “Finance Mentor (beta) — your AI assistant” so users know what they’re dealing with.

User Control & Choice: Users dictate the conversation. Quick suggestion buttons (“Show me tips on saving”) help guide less verbose users. Critically, we give control over data: as Commonwealth advises, “Allow users to choose what financial questions to answer”. We add toggles in settings for data usage (e.g. “Use my transaction history to personalize advice: On/Off”).

Trust Through Branding: We brand the chatbot clearly (“Powered by Money Mentor AI”) and add our app’s logo, so it’s not a faceless assistant. This aligns with “Include branding on chatbots or apps” to build trust.

Proactive Engagement: The bot can gently nudge (“I noticed you spent 20% more on dining last month, would you like saving tips?”). This intelligent proactivity keeps users engaged and feels personalized (they see the bot “thinking” about their habits).

Tone and Empathy: The assistant’s personality is knowledgeable but not aloof: friendly, respectful of money’s seriousness, and supportive. For example:
User: “How do I file my taxes?”
Bot: “Filing taxes can be confusing! I can help. May I ask about your income sources so far this year?”
This shows empathy and asks permission to use personal data.

Error Handling in Conversation: If the bot doesn’t understand (hallucination avoidance), it apologizes and offers alternatives: “I’m sorry, I don’t have information on that yet. Try rephrasing or ask about investments, budgets, taxes...”

By following these conversational design principles, we aim to create an interaction that feels trustworthy and user-centered, addressing the real concern that “63% of users worry about security” in AI chats.

Competitive Landscape
App	Core Offering	UX Style	AI/Chat Features
CRED	Credit card management, rewards	Sleek, premium feel; minimalistic dashboard; dark theme	In-app “CRED Mall” suggestions; no chat AI but gamified interactions (e.g. “Chores” for rewards)
Walnut	Expense tracking	Clean spend feed; simple visuals	No AI chat; just auto-categorized expenses and bill reminders
Jupiter	Neo-bank + investing	Vibrant, youthful design; gamified (XP points, avatars)	Has an AI advisor (JupiterGPT) that answers finance questions; visual carbon footprint tracker
INDmoney	Investment aggregator	Data-rich dashboard with charts; investor-focused	Some robo-advisor tools; goal planning hints; no full conversational AI
Cleo (Global)	AI Budgeting Chatbot	Friendly, chat-first interface (UK/US market); uses emoji and humor	Full AI chatbot (Cleo) for budgets, spending insights, with a playful, persona-driven tone

Insights: Cleo is the closest analogue (though international). It uses a conversational bot to “help users budget, track expenses, and detect unusual subscriptions”. Jupiter has recently added chat-based assistance to stand out. CRED and Walnut focus more on visual dashboards and gamified elements. Our differentiator is a hybrid UX: combining a polished financial dashboard (like INDmoney) with a powerful chat interface (like Cleo) that speaks multiple finance domains. We will draw on competitive best practices—e.g. Jupiter’s gamification and CRED’s trust signals—while ensuring our AI assistant remains at the core, explaining each suggestion (something competitors lack).

Personas
Aarav (College Student, 20)

Goals: Save ₹5,000 for an exam course; understand credit cards.
Pain Points: Confused by investment jargon; small budget.
Habits: Uses smartphone banking; relies on parents for finance advice.
UX Implications: Needs education-oriented advice, gamification (e.g. “Saved 5% more this month!” badges), and a friendly tone to avoid intimidation.
Priya (Young Professional, 27)

Goals: Maximize salary (₹6L/yr) through investments and tax savings. Short-term: plan a vacation fund.
Pain Points: Overwhelmed by mutual fund options; misses tax deductions due to lack of awareness.
Habits: Checks finance apps weekly; good tech-savviness; willing to try new tools.
UX Implications: Wants quick answers (“How much should I invest to double ₹10K in 5 years?”), visual charts for goals, and confidence from data-backed suggestions.
Rajat (Beginner Investor, 32)

Goals: Build a conservative portfolio for first home (₹15L goal in 5 years).
Pain Points: Afraid of stock market volatility; doesn't know where to start.
Habits: Reads financial news occasionally; uses bank app.
UX Implications: Needs easy-to-understand explanations (“Why choose a PPF vs FD?”), recommended portfolios, and safety cues (e.g. “This suggestion is low-risk, aiming for 5-7% returns”).
These personas cover a range of users: a novice student, an engaged early-career saver, and a cautious investor. Each profile guides features and tone: for example, Aarav would appreciate gamification and tooltips, while Rajat may prefer confidence indicators and plain-language reasoning.

Journey Maps
Aarav’s Journey (Budgeting Help):

Trigger: He gets a study trip invite and needs extra funds.
Path: Opens app → Sees Dashboard (“Hey Aarav, save ₹X by Feb!”) → Taps “Ask Mentor” → Chats “How can I save more?” → Bot: “Let’s set a weekly pocket money goal.” → Aarav chooses suggestions → Dashboard updates with a savings goal and budget breakdown.
Emotions: Curious and hopeful → Slight confusion at first (nervous) → Relief as AI gives simple tips (satisfied).
Priya’s Journey (Tax Planning):

Trigger: It’s February; tax-filing season.
Path: Notices a “Tax Save” card on Dashboard → Taps “Get Started” → Fills basic income details → Chatbot (KarVid) suggests 80C deductions (e.g. PF, insurance) and revised income tax calculation → Priya verifies information → Bot sets reminders for filing deadline.
Emotions: Stressed about deadlines → Reassured by step-by-step guidance → Confident with a plan.
Rajat’s Journey (Goal Setting):

Trigger: Wants to plan for buying a home.
Path: Starts chat: “I want to save ₹15L in 5 years” → Bot (Life Event agent) asks about current savings, risk tolerance → Finds he’s moderate risk → Recommends a mix of SIPs and PPF → Displays a progress bar on Dashboard (“Home Goal: 0% to 100%”) → Sends weekly check-in notifications.
Emotions: Anxious about investing → Gradually trusts the data-driven plan → Motivated by seeing progress.
Each map has clear touchpoints (notifications, app cards, chatbot prompts) and notes the user’s emotional state. We address pain points at each stage (e.g. fearing tax mistakes, Rajat’s investment anxiety) by providing guidance or social proof (“Others in your profile invest similarly”).

Information Architecture
The app’s structure organizes content into core areas:

Dashboard: Overview of net worth, budgets, upcoming bills, and any important notifications (e.g. “Tax deadline in 10 days”).
AI Chat Assistant (“Mentor”): The heart of the app, accessible via a chat button everywhere (bottom nav icon). Users can ask questions or receive proactive tips.
Wallet/Accounts: Users can securely link bank accounts, cards, and investment accounts (view-only mode) to auto-fetch financial data.
Goals: A section where users set and track financial goals (e.g. “Save ₹X for car”, “Pay off loan”). Progress bars and suggestions live here.
Insights (Spending & Investments): Analytical dashboards with charts (monthly spend, portfolio allocation).
Notifications/Offers: Alerts for bills due, goal milestones, market news.
Profile/Settings: Manage personal info, security (PIN/biometrics), data permissions, and app preferences (e.g. language, dark mode).
(This could be sketched as a sitemap: Dashboard at top, “Mentor” chat on all screens, and tabs for Accounts, Goals, Insights, Profile.)

AI Chat Interaction Flow
We depict a typical conversation where the AI routes the query through the coordinator (DhanSarthi) to a domain expert. Example:

"KarVid (Tax Agent)"
"DhanSarthi (Coordinator)"
"Chatbot UI"
"KarVid (Tax Agent)"
"DhanSarthi (Coordinator)"
"Chatbot UI"
User
"How can I save on taxes?"
"User asks about tax savings"
"Route query: tax advice"
"80C deductions, HRA exemptions, etc."
"Compiled tax-saving suggestions"
"You can invest in [options] under 80C to reduce taxable income..."
User


Show code
The User types a question.
The Chatbot UI forwards it to DhanSarthi, our routing agent.
DhanSarthi identifies the domain (tax) and queries KarVid, the tax AI agent.
KarVid computes relevant advice (using current tax laws) and returns data.
DhanSarthi synthesizes the best answer and passes it back to the Chatbot.
The Chatbot displays the answer in natural language to the user.
This flow ensures each query is handled by the right expert. (Behind the scenes, we may call APIs or do calculations, but the UX remains a single conversation.)

Dashboard UX
The dashboard is a financial snapshot:

Top Bar: Greeting (“Hi Priya, how can I help today?”) with a profile icon. Underneath, a Net Worth card showing total assets vs liabilities with a simple line chart (last 6 months).
Quick Stats: Three horizontal cards for “Budget”, “Bills Due”, and “Spending”. E.g. Budget: shows how much is left this month; Bills: shows next upcoming due date; Spending: shows a mini pie chart of categories.
Goal Progress: Below stats, a carousel of active goals with progress bars (e.g. “Vacation Fund – 40%”). Each card has an icon (suitcase for travel).
Action Buttons: Floating button “Ask Money Mentor” (chat icon) is always visible for queries. Under goals, a “+ New Goal” button invites users to create more goals.
Insights Preview: Bottom of screen shows mini charts (bar chart of monthly spend, line chart of portfolio value). Tapping these goes to the Insights tab.
Navigation: A bottom nav (Home, Accounts, Chat, Goals, Profile).
The design is clean: cards have slight elevation (material style), colorful accent lines indicate performance (green for positive, red for alerts). Dashboard gives immediate feedback on finances and always encourages engagement (chat, add goals).

AI Recommendation UX
When the AI suggests something, we present it as a card or message with clarity:

Conversational Advice: In chat, AI replies are in a distinct bubble (light blue background). If it makes a recommendation (e.g. “Invest ₹200/month in Mutual Fund X”), we include a brief reason: “(Based on your 5% monthly surplus and goal timeline)”. If the advice includes numbers, we format them clearly (e.g. bold ₹ values).
Smart Suggestions: For example, after a budgeting chat, the bot might show a slider card: “Set this month’s savings goal: ₹2000”. The user can adjust and confirm via a big “Set Goal” CTA.
Actionability: Any recommendation that involves user data (like adding a reminder, opening a bank link) comes with a one-tap button. E.g. after tax advice, we might show “Proceed to tax filing checklist” as a button.
Trust Indicators: Alongside advice, small text notes cite sources: e.g. “As per FY2025-26 tax rules” for tax advice. Confidence levels (e.g. “High confidence” badge) can also be shown for AI suggestions involving predictions.
Consistency: All advice appears in the same chat interface style, maintaining the flow. If a recommendation is significant, the chat background color slightly shifts or the card gets a subtle glow to draw attention.
This UX ensures recommendations feel like a dialogue partner giving suggestions, not opaque system messages.

Notification UX
Notifications keep users on track without being annoying:

Timely & Relevant: For example, “📅 Bill Reminder: Your electricity bill of ₹2000 is due in 3 days. Pay now?” with two buttons (Pay Now / Dismiss). Or “💡 Tip: You spent 20% more on dining in Jan than Dec.”
Modal & In-App Alerts: Some notifications pop up in-app (as banners) when needed (like a pressing debt alert). Others sit in a Notification Center tab.
Concise Writing: Each uses an emoji/icon, a headline, and 1–2 lines of context. “🚨 Low Balance Alert: Your main account is under ₹500.” Each has a clear CTA (“Top Up”).
Personalization: If the AI suggests a new strategy, it notifies: “Your new SIP plan has been set up. See your Goals.”
Frequency Control: Users can set preferences (e.g. only weekly summaries, no daily tips). This respects user autonomy.
The notification design mirrors common mobile patterns: small icons, short titles, and the first few words visible without expanding. This helps in quickly glancing and deciding to act.

Financial Goal Tracking UX
Goal tracking is visual and motivational:

Progress Bars and Charts: Each goal has a circular progress indicator or horizontal bar (e.g. “🏠 Home Downpayment: ₹3L of ₹15L – 20% complete”). Below that, mini-chart showing past month’s contributions.
Milestones & Rewards: Hitting 25%, 50%, 100% triggers a celebration badge (confetti animation) and a message (“Congratulations! Halfway there!”).
Timeline Slider: Users can adjust goal deadline on a slider to see how it affects monthly savings needed. The UI updates projected completion date dynamically.
Reminders & Auto-Transfers: Users can opt-in: “Transfer ₹X to savings automatically each month.” Toggling this on shows how that nudges progress.
Visual Stories: A simple “Journey” graph can show snapshots of net worth or savings growth over time, contextualizing the goal.
Overall, goal screens feel like a personal dashboard – colorful icons for each goal (car, wedding, education). The interface encourages users to set and track, turning finance into a game of progress.

Gamification Ideas
We integrate gamified elements to boost engagement:

Badges & Achievements:

“Budget Guru” badge for consistent spending under budget 3 months in a row.
“Saving Streak” for reaching a saving target consecutively.
“Investor Novice” badge on making first investment through the app.
Points System: Users earn points for completing actions: linking an account, setting a goal, using chat. Points accumulate and can be redeemed for mock “rewards” (like finance tips unlocked) or actual offers (partner discounts).

Challenges & Leaderboards: Social aspect: users can optionally join challenges (“Save ₹500 this week”) and see community stats (anonymized). Friendly competition (on spending or saving) can motivate.

Progress Feedback: Animated confetti or “level up” screens when a goal is met. Visual progress bars “filling up” with each contribution.

Virtual Pet/Avatar: (Optional) Users might adopt a virtual “finance pet” that grows as they make good financial decisions – a light, fun element for younger users.

Gamification is implemented carefully to reinforce positive habits without detracting from the seriousness of finance. The UI uses colorful, playful graphics for badges, but keeps core advice straightforward.

Explainable AI Concepts
To avoid black-box suggestions, we provide transparency:

Why-Reveals: Each major recommendation in chat comes with a “Why this?” option. Tapping it might show brief reasoning: e.g., “I recommended SIP X because it historically averaged 10% returns and matches your moderate risk profile.”

Confidence Indicators: For forecasts or risk advice, we display an icon or text: “High confidence” or “Based on 5 years of data.” This helps users gauge reliability.

Data Source Citations: When AI cites data (like stock performance), we label it (e.g. “Data: National Stock Exchange”). If an answer is based on RBI rules or market indexes, we mention that source.

Sandbox Mode: (Advance Feature) We may include a “Show me alternative scenarios” toggle. For example, “If you invest ₹2k instead of ₹5k monthly, here’s the difference in outcome.” This comparative transparency builds trust.

By integrating these explainable AI elements, we make the assistant’s reasoning visible, which aligns with the need for “transparency and user control” noted in our conversational design.

Financial Trust Indicators
Beyond the chat, we sprinkle trust signals throughout:

Verified Logos & Seals: On relevant screens, we display affiliations (e.g. RBI logo, if compliance checked; or fintech accelerators we belong to). These third-party seals bolster credibility.

Encryption Notice: In Profile or Account Linking screens, we explicitly state that we use banking APIs (e.g. “Securely connected via [provider]”). This addresses privacy fears.

Human Support Access: We include “Talk to an Expert” links (banking helpline or financial coach) for serious queries, indicating we’re not solely AI.

Regular Updates: Under “About AI Mentor,” we note model updates and disclaimers (e.g. “Last updated March 2026 with current tax laws”), showing the advice is up-to-date.

These indicators leverage the finding that users trust platforms with clear authenticity cues (e.g. regulated finance sites). Consistent branding and clear policy statements make the app feel legitimate, not experimental.

Error Handling UX
Even in a chat app, we must handle errors gracefully:

AI Misunderstanding: If the bot is uncertain, it might say: “I’m sorry, I’m not sure about that. Can I help with budgeting, expenses, or something else?” This invites correction without ending the session.

Service Downtime: If an API or service is down (e.g. stock data unreachable), the chat replies: “Some data is temporarily unavailable. I’ll retry in a moment.” A spinner or retry prompt appears.

Invalid Inputs: If the user says something nonsensical (“asdlfkja”), the bot responds with humor or a gentle nudge: “I didn’t catch that. Could you rephrase?” rather than a generic “Error”.

Input Constraints: For forms (e.g. adding salary), real-time validation prevents invalid entries (like negative numbers). Errors are shown inline (“Enter a positive number”).

Undo/Back: Users can delete or edit previous messages. If they enter wrong data, they can simply input a correction, and the AI will adjust the conversation flow accordingly (Heuristic: user control).

We follow the principle “if an error occurs, keep users informed with plain language and next steps.” Users should never feel “stuck”.

Empty States
For the finance app, empty states motivate action:

No Accounts Linked: Display: “Looks like you haven’t connected any bank account yet. Link one to see your expenses auto-categorized and get personalized tips.” A big “Connect Account” button is shown, with small logos of popular banks for familiarity.

No Goals Set: “You haven’t set any financial goals. Let’s start! Are you saving for a vacation, your education, or something else?” Buttons like “Add Goal” and some goal icons are shown.

Chat Idle: In the chat window before the first message: “Hello! I’m your AI Money Mentor. Ask me anything about savings, investments, or budgeting.” An example query (faded) is shown to prompt interaction.

Empty Insights: If no data (e.g. first login): “Nothing to show yet—your dashboard will populate once you start tracking your spending or connect accounts.”

Empty states combine an explanation (“what this means”) with an immediate call to action (“start now by…”), ensuring the user isn’t confused by blank screens.

Success States
When the user completes a goal or task:

Goal Achievement: “🏆 Congratulations! You’ve reached your goal of saving ₹10,000 for emergency fund. Keep it up!” Confetti animation might play, followed by suggestions for a new goal.

Milestone Alert: “🎉 You are halfway to your Vacation Fund!” with a progress graphic. It encourages continued behavior.

Payment Setup: “Success! Your ₹200 monthly SIP has been set up.” short text with a check icon.

Task Completion: If a user completes a tutorial or financial quiz, “Nice work! You finished the Beginner’s Investing guide.”

Success messages are positive and encouraging. They often include an emoji/icon (trophy, party popper) and a brief text acknowledging the achievement. This reinforcement helps build confidence.

Metrics & KPIs
Key success metrics for AI Money Mentor include:

User Engagement: Chat Sessions per user, DAU/MAU ratio, time spent in app. High engagement signals the AI is useful. Fintech apps often see ~20% Day-1 retention; we aim higher (supportive utility can boost retention).

Goal Completion Rate: % of users who meet their financial goals within target dates. A core product KPI, as it ties to real financial improvement.

Advice Adoption: E.g. if AI suggests an SIP and the user clicks through and sets it up, that counts. A high adoption rate means trust in recommendations.

NPS or Satisfaction: Survey users on helpfulness (“How confident do you feel about your finances now?”). Trust-focused design should increase positive sentiment.

Financial Impact: We can measure aggregate behaviors: “X% increase in savings vs baseline,” or “average additional investment generated per user.” While sensitive, these show real value delivered.

Referral/Sharing: Users recommending the app (to colleagues) is a signal. A built-in “Share AI Money Mentor with a friend” tracks word-of-mouth growth.

Error Rates: Monitor how often the AI fails to answer, and aim to reduce that over time.

By monitoring these, we ensure the design changes are translating to healthier financial habits, not just time in the app.

Wireframes (Mermaid Diagrams)
Below are conceptual wireframes for key screens of AI Money Mentor:

Dashboard Screen: Net worth at top, budget and bills cards, goals progress.

mermaid
Copy
flowchart TB
    subgraph Dashboard
        A[Net Worth: ₹120,000 (↑5% this month)] 
        B[Monthly Budget: ₹20,000 spent of ₹25,000] 
        C[Upcoming Bills: Electricity ₹1,200 due 5th] 
        D[Goal: Car Downpayment – 20% complete] 
        E[Quick Actions: +Add Expense / Ask Mentor] 
    end
AI Chat Screen: Conversational interface with history and input.

ChatUI

User and Bot messages in chat bubbles

Type your message...

Send icon

“Should I create a budget?”



Show code
Goal Tracking Screen: List of goals with progress.

mermaid
Copy
flowchart TB
    subgraph Goals
        Goal1[Home Fund: ₹3L/₹15L – 20%] 
        ProgressBar1 ==|bar|> 20% 
        Goal2[Vacation: ₹20K/₹100K – 20%] 
        ProgressBar2 ==|bar|> 20% 
        AddGoal[+ Set New Goal] 
    end
Spending Insights Screen: Graphical breakdowns.

Insights

Bar Chart: Spending by month

Pie Chart: Category breakdown

You spent ₹5000 on Dining last month



Show code
Notifications Screen: List of alerts and tips.

Notifications

🔔 ₹2,000 electricity bill due in 2 days – Pay Now

💡 You saved ₹1,000 this month vs. last

📈 New investment tip available

Clear All



Show code
These diagrams represent the layout and components of each screen in a simplified flowchart form. In actual UI, each box would correspond to panels, charts, or interactive elements as described.

Mid-Fidelity Layouts
At mid-fidelity, we solidify arrangement and spacing:

Dashboard: Multi-section layout. “Net Worth” card spans full width at top. Below, two columns (stacked vertically on mobile) show Budget and Bills side-by-side. Goals appear as swipeable cards below. Chart previews are simple area/line charts. We maintain a clean, grid-aligned layout with consistent margins (16px between cards).

Chat: The chat window is a full-screen vertical flow. Incoming messages (left-aligned light gray bubbles) and outgoing (right-aligned blue bubbles). The input box is fixed at bottom with an icon row (attach, emoji). Suggested quick-reply chips appear above the input field, scrolling horizontally if needed.

Goals: A vertical list with bold goal titles, progress bars (colored fill), and a “Set Goal” floating action button at bottom right. Each goal item has uniform height and spacing. We ensure at least 12px padding around text.

Insights: Two stacked charts (bar and pie) each with labeled axes/legends. Below charts, we list any alerts or key metrics in a clean, alternating background style for readability. The layout is single-column to accommodate small screens.

Notifications: A simple list view. Each notification has an icon, brief text, and a chevron or CTA. Unread items have a slight highlight. Spacing between items is 12px, with dividers at 8px.

Color coding (e.g. green for positive alerts, red for warnings) is introduced here. Typography scales are set (e.g. headlines 18sp, content 14sp, captions 12sp). We define icon sizes (24px), chart margins, and consistent card corner radius (8px).

High-Fidelity UI Descriptions
Finally, we describe the refined visual style:

Typography: We use a friendly, geometric sans (e.g. Rubik or Poppins). Headers (24pt) are bold; body text (16pt) regular; captions (12pt) light. This mirrors modern fintech apps. Line spacing is generous (1.5× for body) for clarity.

Card System: Dashboards and notifications use cards with soft shadows (elevation 2) and rounded corners (8px). Each card’s header may have a subtle gradient or accent line to differentiate. Cards scroll vertically with minimal inertia.

Color Scheme: A trustworthy palette of blues and teals dominates (e.g. #2196F3 for primary actions, #4CAF50 for success indicators). We use white backgrounds with charcoal (#212121) text for high contrast. Important figures (like positive gain) use green, negative (debt) use red. Accent colors highlight links or chat buttons.

AI Assistant Visuals: The AI chat could feature a friendly avatar icon next to bot messages (maybe a stylized mascot). Each bot message bubble has a soft blue background. The Send button is a vibrant teal circle with a paper plane icon.

Financial Data Hierarchy: Key numbers are larger and bold (e.g. ₹ amounts 18–20pt), while contextual labels are smaller. Charts use solid, flat colors (no gradient) for ease. We ensure accessible color contrast (WCAG AA compliance) for charts and text.

Charts: Bar and pie charts have smooth animation on load. We use subtle patterns or tooltips on tap to highlight values. The charts stick to the app’s color theme (blue for bars, complementary colors for pie segments).

Dark Mode: A high-contrast dark theme is available (with a toggle). Light backgrounds become #121212, text becomes #E0E0E0. Accent colors remain vivid (Teal, Orange) but adapted for visibility. Chart colors switch to lighter variants. Dark mode preserves all trust cues (white padlock icon, etc.) and simply inverts the UI background for night-time use.

Micro-animations: To feel polished, small animations are added: button presses have ripple, toggles slide, and successful actions (like “Goal Achieved”) show confetti particles.

Overall, the UI is clean and modern, balancing a professional vibe (for finance trust) with approachable touches (friendly icons, engaging colors). The result looks comparable to top fintech apps: clear charts (like INDmoney), intuitive chat UI (inspired by Cleo/GPT-3 demos), and playful elements (like Jupiter’s gamification). Each design choice is made to reinforce clarity, engagement, and the core brand promise of a helpful AI money advisor.