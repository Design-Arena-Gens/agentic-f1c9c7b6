import { Building2, HeartPulse, DollarSign, ShoppingBag, GraduationCap, Plane } from "lucide-react";

export interface IndustryConfig {
  id: string;
  name: string;
  icon: any;
  gradient: string;
  description: string;
  welcomeMessage: string;
  placeholder: string;
  expertiseAreas: string[];
}

const industryConfigs: Record<string, IndustryConfig> = {
  tech: {
    id: "tech",
    name: "Technology Support",
    icon: Building2,
    gradient: "from-blue-500 to-cyan-500",
    description: "Technical Support & Product Guidance",
    welcomeMessage: "Hello! I'm your technical support assistant. I can help you with software issues, feature explanations, API integrations, troubleshooting, and account management. How can I assist you today?",
    placeholder: "Ask about features, troubleshooting, or technical issues...",
    expertiseAreas: ["Software troubleshooting", "API integration", "Feature guidance", "Account management", "System requirements", "Updates and patches"]
  },
  healthcare: {
    id: "healthcare",
    name: "Healthcare Assistant",
    icon: HeartPulse,
    gradient: "from-green-500 to-emerald-500",
    description: "Patient Support & Information",
    welcomeMessage: "Welcome! I'm your healthcare assistant. I can help you schedule appointments, answer general health questions, provide information about services, and guide you through patient portals. What do you need help with?",
    placeholder: "Ask about appointments, services, or general health info...",
    expertiseAreas: ["Appointment scheduling", "Service information", "Patient portal assistance", "General health guidance", "Insurance queries", "Medical records access"]
  },
  finance: {
    id: "finance",
    name: "Financial Assistant",
    icon: DollarSign,
    gradient: "from-yellow-500 to-orange-500",
    description: "Banking & Financial Services",
    welcomeMessage: "Hello! I'm your financial assistant. I can help you with account inquiries, transaction support, financial products, security questions, and general banking guidance. How may I help you today?",
    placeholder: "Ask about accounts, transactions, or financial services...",
    expertiseAreas: ["Account management", "Transaction support", "Financial products", "Security and fraud", "Payments and transfers", "Financial planning basics"]
  },
  retail: {
    id: "retail",
    name: "Shopping Assistant",
    icon: ShoppingBag,
    gradient: "from-purple-500 to-pink-500",
    description: "E-commerce Support & Recommendations",
    welcomeMessage: "Hi there! I'm your shopping assistant. I can help you find products, track orders, process returns, answer questions about items, and provide personalized recommendations. What are you looking for today?",
    placeholder: "Ask about products, orders, or returns...",
    expertiseAreas: ["Product recommendations", "Order tracking", "Returns and exchanges", "Product information", "Promotions and discounts", "Size and fit guidance"]
  },
  education: {
    id: "education",
    name: "Education Support",
    icon: GraduationCap,
    gradient: "from-indigo-500 to-violet-500",
    description: "Student & Course Support",
    welcomeMessage: "Welcome! I'm your education assistant. I can help you with course information, enrollment procedures, academic support, schedule questions, and learning resources. How can I assist you?",
    placeholder: "Ask about courses, enrollment, or academic support...",
    expertiseAreas: ["Course information", "Enrollment assistance", "Schedule management", "Learning resources", "Academic policies", "Technical support for learning platforms"]
  },
  travel: {
    id: "travel",
    name: "Travel Assistant",
    icon: Plane,
    gradient: "from-red-500 to-rose-500",
    description: "Travel & Hospitality Support",
    welcomeMessage: "Hello! I'm your travel assistant. I can help you with booking information, travel recommendations, itinerary changes, accommodation questions, and travel policies. Where would you like to go?",
    placeholder: "Ask about bookings, destinations, or travel info...",
    expertiseAreas: ["Booking assistance", "Travel recommendations", "Itinerary management", "Accommodation support", "Travel policies", "Destination information"]
  }
};

export function getIndustryConfig(industryId: string): IndustryConfig {
  return industryConfigs[industryId] || industryConfigs.tech;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function generateAIResponse(userInput: string, industry: string, conversationHistory: Message[]): string {
  const config = getIndustryConfig(industry);
  const input = userInput.toLowerCase();

  // Industry-specific response logic
  switch (industry) {
    case "tech":
      if (input.includes("error") || input.includes("bug") || input.includes("not working")) {
        return "I understand you're experiencing a technical issue. To help you better, could you provide more details?\n\n1. What exactly is happening?\n2. When did this start?\n3. Have you tried restarting the application?\n4. What device/browser are you using?\n\nIn the meantime, here are some quick troubleshooting steps:\n• Clear your browser cache\n• Check your internet connection\n• Ensure you're using the latest version\n• Try in incognito/private mode";
      }
      if (input.includes("api") || input.includes("integration")) {
        return "I can help you with API integration! Here's what you need to know:\n\n• API Documentation: Available in your developer dashboard\n• Authentication: Use API keys from your account settings\n• Rate Limits: Check your plan details for specific limits\n• Sample Code: We provide SDKs for Python, JavaScript, and Java\n\nWould you like help with a specific integration scenario?";
      }
      if (input.includes("account") || input.includes("login") || input.includes("password")) {
        return "For account-related issues:\n\n• Password Reset: Use the 'Forgot Password' link on the login page\n• Account Access: Check your email for verification links\n• Two-Factor Authentication: Can be enabled in security settings\n• Account Recovery: Contact our team if you can't access your account\n\nIs there a specific account issue I can help you resolve?";
      }
      return "I'm here to help with your technical questions! I can assist with:\n\n• Software troubleshooting and bug reports\n• Feature explanations and best practices\n• API integration and documentation\n• Account and billing management\n• System requirements and compatibility\n\nWhat specific technical issue can I help you with?";

    case "healthcare":
      if (input.includes("appointment") || input.includes("schedule")) {
        return "I can help you with appointments!\n\n• Online Booking: Visit our patient portal to schedule\n• Available Times: We have morning, afternoon, and evening slots\n• Same-Day Appointments: Available for urgent matters\n• Cancellations: Please cancel at least 24 hours in advance\n\nWould you like to:\n1. Schedule a new appointment\n2. Reschedule an existing appointment\n3. Check available doctors and specialties";
      }
      if (input.includes("insurance") || input.includes("coverage")) {
        return "Regarding insurance and coverage:\n\n• We accept most major insurance providers\n• Verification: We can verify your coverage before your visit\n• Co-pays: Due at time of service\n• Out-of-Network: We offer self-pay options\n\nPlease have your insurance card ready. Would you like me to help verify your specific coverage?";
      }
      if (input.includes("test results") || input.includes("records")) {
        return "To access your medical information:\n\n• Patient Portal: Log in to view test results and records\n• Test Results: Typically available within 3-5 business days\n• Record Requests: Can be submitted through the portal\n• Questions: Your doctor's office can explain results\n\nNote: For urgent results, your doctor will contact you directly. Would you like help accessing the patient portal?";
      }
      return "Welcome! I can assist you with:\n\n• Scheduling and managing appointments\n• Insurance and billing questions\n• Patient portal access\n• General health information\n• Prescription refills\n• Doctor availability\n\nWhat healthcare need can I help you with today?";

    case "finance":
      if (input.includes("balance") || input.includes("transaction") || input.includes("payment")) {
        return "I can help you with account and transaction questions:\n\n• Account Balance: Available in your online banking dashboard\n• Recent Transactions: View the last 90 days instantly\n• Payment Issues: I can help resolve payment problems\n• Transfer Funds: Use our secure transfer feature\n\nFor security, please don't share sensitive account details here. Would you like guidance on:\n1. Checking your balance\n2. Understanding a transaction\n3. Making a payment\n4. Disputing a charge";
      }
      if (input.includes("loan") || input.includes("credit") || input.includes("mortgage")) {
        return "I can provide information about our financial products:\n\n• Personal Loans: Competitive rates, quick approval\n• Credit Cards: Various options with rewards programs\n• Mortgages: Home loans with flexible terms\n• Business Loans: Supporting entrepreneurs\n\nNext steps:\n1. Pre-qualification (no credit impact)\n2. Application review (1-2 business days)\n3. Approval and documentation\n4. Funding\n\nWould you like to learn more about a specific product?";
      }
      if (input.includes("security") || input.includes("fraud") || input.includes("suspicious")) {
        return "⚠️ Security is our top priority!\n\nIf you suspect fraud:\n1. Lock your card immediately through the app\n2. Review recent transactions\n3. Contact our fraud department: 1-800-XXX-XXXX (24/7)\n4. File a dispute for unauthorized charges\n\nSecurity tips:\n• Never share your PIN or password\n• Enable transaction alerts\n• Use multi-factor authentication\n• Monitor your accounts regularly\n\nDo you need immediate assistance with a security concern?";
      }
      return "I'm your financial assistant! I can help with:\n\n• Account management and balances\n• Transaction inquiries\n• Financial products (loans, credit cards)\n• Security and fraud prevention\n• Online banking support\n• Payment processing\n\nHow can I assist with your banking needs today?";

    case "retail":
      if (input.includes("order") || input.includes("track") || input.includes("shipping")) {
        return "Let me help you track your order!\n\n• Order Status: Check your confirmation email for tracking\n• Shipping Time: Standard 3-5 days, Express 1-2 days\n• Tracking Number: Sent via email once shipped\n• Delivery Issues: We'll resolve them quickly\n\nTo track your order, you'll need:\n1. Order number (from confirmation email)\n2. Shipping email address\n\nAlternatively, log into your account to view all orders. Would you like help finding your order number?";
      }
      if (input.includes("return") || input.includes("refund") || input.includes("exchange")) {
        return "Our return process is simple:\n\n• Return Window: 30 days from delivery\n• Condition: Items must be unused with tags attached\n• Free Returns: We provide prepaid shipping labels\n• Refund Time: 5-7 business days after we receive the item\n\nTo start a return:\n1. Log into your account\n2. Find the order\n3. Select items to return\n4. Print the shipping label\n5. Drop off at any carrier location\n\nExchanges: We can process these faster! Would you like to exchange instead?";
      }
      if (input.includes("recommend") || input.includes("looking for") || input.includes("suggest")) {
        return "I'd love to help you find the perfect product!\n\nTell me more about what you're looking for:\n• What's the occasion or purpose?\n• Any specific features you need?\n• Price range?\n• Preferred style/color?\n\nOur bestsellers this month:\n• Premium Product Line - 4.8★ rating\n• Value Series - Great quality, affordable\n• Limited Edition Collection - Exclusive designs\n\nI can also help you with:\n• Size guides\n• Product comparisons\n• Customer reviews\n\nWhat type of product interests you?";
      }
      return "Welcome to our store! I'm here to help you:\n\n• Find the perfect products\n• Track your orders\n• Process returns and exchanges\n• Answer product questions\n• Apply promotions and discounts\n• Check availability and sizing\n\nWhat can I help you shop for today?";

    case "education":
      if (input.includes("course") || input.includes("class") || input.includes("enroll")) {
        return "I can help you explore our courses!\n\n• Course Catalog: Browse 500+ courses across all subjects\n• Prerequisites: Clearly listed for each course\n• Class Size: Small groups for personalized attention\n• Formats: In-person, online, and hybrid options\n\nEnrollment steps:\n1. Browse the course catalog\n2. Check prerequisites and schedule\n3. Register through the student portal\n4. Complete payment\n5. Receive course materials\n\nUpcoming semester registration opens soon! What subject area interests you?";
      }
      if (input.includes("tuition") || input.includes("financial aid") || input.includes("payment")) {
        return "Financial information:\n\n• Tuition: View current rates in your student portal\n• Payment Plans: Flexible options available\n• Financial Aid: FAFSA and institutional aid\n• Scholarships: Merit and need-based opportunities\n• Deadlines: Check important dates in the academic calendar\n\nFinancial aid process:\n1. Complete FAFSA\n2. Submit required documents\n3. Review your award letter\n4. Accept/decline aid offers\n5. Complete entrance counseling\n\nWould you like specific information about costs or available aid?";
      }
      if (input.includes("schedule") || input.includes("timetable") || input.includes("registration")) {
        return "Let me help with your schedule:\n\n• View Schedule: Available in your student portal\n• Add/Drop: During the first 2 weeks of semester\n• Prerequisites: Must be completed before registration\n• Time Conflicts: System will alert you\n• Waitlists: Join if a class is full\n\nScheduling tips:\n• Register early for best selection\n• Balance difficult and easier courses\n• Consider your commute and other commitments\n• Check professor ratings\n\nNeed help with:\n1. Course selection\n2. Registration issues\n3. Schedule conflicts\n4. Waitlist questions";
      }
      return "Welcome to student support! I can assist with:\n\n• Course information and enrollment\n• Academic schedules and registration\n• Tuition and financial aid\n• Learning resources and tutoring\n• Technical support for learning platforms\n• Campus services and events\n\nWhat academic question can I help you with?";

    case "travel":
      if (input.includes("book") || input.includes("reservation") || input.includes("flight")) {
        return "Let me help you with your booking!\n\n• Flight Search: Compare prices and times\n• Hotels: From budget to luxury options\n• Packages: Save with bundled deals\n• Group Bookings: Special rates for 10+ travelers\n• Flexible Dates: Use our calendar view for best prices\n\nBooking process:\n1. Search your destination and dates\n2. Compare options and select\n3. Enter traveler information\n4. Review and confirm\n5. Receive confirmation via email\n\nSpecial offers:\n• Early bird discounts (book 60+ days ahead)\n• Last-minute deals\n• Loyalty rewards\n\nWhere are you planning to travel?";
      }
      if (input.includes("cancel") || input.includes("change") || input.includes("modify")) {
        return "I can help you modify your booking:\n\n• Cancellations: Policies vary by booking type\n• Date Changes: Subject to availability and fees\n• Name Changes: Possible for some bookings\n• Refunds: Processed per cancellation terms\n\nTo make changes:\n1. Log into your account\n2. Find your booking\n3. Select 'Modify' or 'Cancel'\n4. Review any fees\n5. Confirm the change\n\nTip: Travel insurance can cover unexpected changes!\n\nImportant: Some promotional rates may be non-refundable. Would you like to review your specific booking terms?";
      }
      if (input.includes("destination") || input.includes("recommend") || input.includes("where")) {
        return "I'd love to help you find the perfect destination!\n\nTell me about your ideal trip:\n• Travel dates and duration?\n• Budget range?\n• Interests (beach, culture, adventure, food)?\n• Traveling solo, couple, or family?\n\nPopular destinations:\n\n🏖️ Beach: Maldives, Caribbean, Bali\n🏛️ Culture: Rome, Kyoto, Istanbul\n🏔️ Adventure: New Zealand, Iceland, Peru\n🍜 Food: Thailand, Japan, Italy\n\nCurrent travel tips:\n• Check visa requirements\n• Review health and safety guidelines\n• Book flexible options when possible\n• Consider travel insurance\n\nWhat type of experience are you looking for?";
      }
      return "Welcome to travel support! I can help you with:\n\n• Booking flights, hotels, and packages\n• Destination recommendations\n• Itinerary planning\n• Booking modifications and cancellations\n• Travel policies and requirements\n• Loyalty programs and rewards\n\nWhere would you like to go today?";

    default:
      return "I'm here to help! Please let me know what you need assistance with, and I'll do my best to provide relevant information and support.";
  }
}
