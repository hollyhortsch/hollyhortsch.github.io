// open the popup
function openPopup() {
    document.getElementById("contactPopup").style.display = "flex";
}

// close the popup
function closePopup() {
    document.getElementById("contactPopup").style.display = "none";
}

// toggle mobile menu
function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("active");
}

// toggle the Socials dropdown menu
function toggleDropdown() {
    let dropdown = document.querySelector(".dropdown-menu");
    dropdown.classList.toggle("active");
}

// open the contact popup with slide-up effect
function openPopup() {
    let popup = document.getElementById("contactPopup");
    popup.style.display = "flex";
    popup.classList.remove("hide");
}

// close the contact popup with slide-down effect
function closePopup() {
    let popup = document.getElementById("contactPopup");
    let popupContent = document.querySelector(".popup-content");

    // add closing animation
    popup.classList.add("hide");
    popupContent.classList.add("hide");

    // Wwit for animation to finish before hiding completely
    setTimeout(() => {
        popup.style.display = "none";
        popup.classList.remove("hide");
        popupContent.classList.remove("hide");
    }, 300);
}

// toggle mobile menu
function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("active");
}

// copy link for share button
function copyText(event) {
    // Ensure the event targets the button, even if the <i> inside is clicked
    let button = event.currentTarget;

    // Find the closest post container
    let post = button.closest('.post');

    // Find the hidden <p> with class "text" inside this post
    let textElement = post.querySelector('.text');

    if (textElement) {
        let text = textElement.innerText;
        
        navigator.clipboard.writeText(text).then(() => {
            alert("copied to clipboard: " + text);
        }).catch(err => {
            console.error("failed to copy: ", err);
        });
    } else {
        console.error("text not found for copying");
    }
}

// comments
const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments-container');

// event listener for form comment submission
commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and comment values
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    // Create a new comment element
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment'); // Optional: add a class for styling

    // Create the content for the new comment
    commentElement.innerHTML = `<strong>${username}</strong>: ${comment}`;

    // Append the new comment to the comments container
    commentsContainer.appendChild(commentElement);

    // Clear the form after submission
    commentForm.reset();
});

// search posts
function filterPosts() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        let text = post.textContent.toLowerCase();
        post.style.display = text.includes(input) ? '' : 'none';
    });
}
