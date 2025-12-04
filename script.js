// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1)";
  } else {
    nav.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

// Initialize EmailJS
// Replace these values with your EmailJS credentials after setup
const EMAILJS_SERVICE_ID = "service_v7rka5v"; // Replace with your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = "template_z7m2aea"; // Replace with your EmailJS Template ID
const EMAILJS_PUBLIC_KEY = "ReFYzDZNKixnNFHfD"; // Replace with your EmailJS Public Key

// Initialize EmailJS when page loads
document.addEventListener("DOMContentLoaded", () => {
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
});

// Form submission
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const templateParams = {
    from_name: formData.get("name"),
    from_email: formData.get("email"),
    company: formData.get("company"),
    role: formData.get("role"),
    message: formData.get("message"),
    to_email: "yehdhruvkr@gmail.com", // Your email address
  };

  // Show loading state
  const submitBtn = contactForm.querySelector(".btn-submit");
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = "<span>Sending...</span>";
  submitBtn.disabled = true;

  try {
    // Check if EmailJS is configured
    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      throw new Error(
        "EmailJS not configured. Please set up your credentials in script.js"
      );
    }

    // Send email using EmailJS
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

    // Show success message
    formSuccess.style.display = "flex";
    contactForm.reset();

    // Scroll to success message
    formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Hide success message after 5 seconds
    setTimeout(() => {
      formSuccess.style.display = "none";
    }, 5000);
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert(
      "Something went wrong. Please try again or contact us directly at yehdhruvkr@gmail.com"
    );
  } finally {
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe feature cards and benefit items
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".feature-card, .benefit-item, .contact-form"
  );
  elementsToAnimate.forEach((el) => {
    observer.observe(el);
  });
});

// Animate comparison bars on scroll
const comparisonObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll(".comparison-bar");
        bars.forEach((bar) => {
          const width = bar.style.width;
          bar.style.width = "0";
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
        comparisonObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const timeComparison = document.querySelector(".time-comparison");
if (timeComparison) {
  comparisonObserver.observe(timeComparison);
}

// Add parallax effect to hero visual
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroVisual = document.querySelector(".hero-visual");
  if (heroVisual && scrolled < window.innerHeight) {
    heroVisual.style.transform = `translate(-50%, calc(-50% + ${
      scrolled * 0.3
    }px))`;
    heroVisual.style.opacity = 0.3 - (scrolled / window.innerHeight) * 0.3;
  }
});

// Add hover effect to feature cards
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});
