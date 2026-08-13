// Interactive Word Hover Script
document.addEventListener("DOMContentLoaded", () => {
    // Targets your main paragraph and subtitle
    const textElements = document.querySelectorAll("p, .subtitle");
    
    textElements.forEach(el => {
        // Extracts the text, splits it into individual words, and wraps them in a span
        const words = el.textContent.trim().split(/\s+/);
        el.innerHTML = words.map(word => `<span class="hover-word">${word}</span>`).join(' ');
    });
});