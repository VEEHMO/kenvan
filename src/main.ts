import './css/style.css';
import './css/home.css';
import './css/about.css';
import './css/contact.css';
import './css/media.css';

// Initialize the TV effect when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector<HTMLDivElement>('.awge-content');

  if (content) {
    // Apply the turn-on animation
    content.style.animation = 'turn-on 3.4s linear';

    // Initialize the stars background
    createStars();

    // Load the home page by default
    loadPage('home');

    // Set up navigation event listeners
    setupNavigation();
  }
});

// Function to create the stars background effect
function createStars() {
  const stars = document.querySelector<HTMLDivElement>('.awge-stars');

  if (stars) {
    // Remove previous stars to avoid stacking
    while (stars.firstChild) {
      stars.removeChild(stars.firstChild);
    }
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;
      star.style.animationDuration = `${Math.random() * 10 + 10}s`;
      star.style.animationDelay = `${Math.random() * 10}s`;
      stars.appendChild(star);
    }
  }
}

// Function to load different pages
function loadPage(page: string) {
  const content = document.querySelector<HTMLDivElement>('.awge-content');

  if (!content) return;

  // Clear any existing content first
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  // Reset the turn-on animation
  content.style.animation = 'none';
  void content.offsetWidth; // Trigger reflow
  content.style.animation = 'turn-on 1s linear';

  // Load the appropriate page content
  switch (page) {
    case 'home':
      loadHomePage(content);
      break;
    case 'about':
      loadAboutPage(content);
      break;
    case 'shop':
      loadShopPage(content);
      break;
    case 'contact':
      loadContactPage(content);
      break;
    case 'forum':
      loadForumPage(content);
      break;
    case 'dvd':
      loadDvdPage(content);
      break;
    case 'media':
      loadMediaPage(content);
      break;
    case 'asaprocky':
      loadASAPRockyPage(content);
      break;
    default:
      loadHomePage(content);
  }
}

// Fonction pour ouvrir des liens externes
function openExternalLink(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Function to load the home page
function loadHomePage(container: HTMLDivElement) {
  // Create the container
  const homeContent = document.createElement('div');
  homeContent.className = 'home-content';

  // Create the stars background
  const stars = document.createElement('div');
  stars.className = 'awge-stars';
  homeContent.appendChild(stars);

  // Create the home button (globe)
  const homeBtn = document.createElement('button');
  homeBtn.id = 'awge-home';
  homeBtn.className = 'awge-home';
  homeBtn.onclick = () => loadPage('home');

  const homeImg = document.createElement('img');
  homeImg.src = 'https://ext.same-assets.com/1659927241/1798022527.gif';
  homeImg.alt = 'Home button spinning globe';
  homeImg.width = 80;
  homeImg.height = 80;
  homeBtn.appendChild(homeImg);

  homeContent.appendChild(homeBtn);

  // Create the navbar
  const navbar = document.createElement('div');
  navbar.className = 'home-navbar';

  const navbarImg = document.createElement('img');
  navbarImg.src = '/logo-kenvan.svg';
  navbarImg.alt = 'KEN VAN logo';
  navbarImg.onclick = () => loadPage('home');
  navbarImg.width = 200;
  navbarImg.height = 50;
  navbar.appendChild(navbarImg);

  homeContent.appendChild(navbar);

  // Create the home background
  const background = document.createElement('div');
  background.className = 'home-background';
  homeContent.appendChild(background);

  // Create the grid
  const grid = document.createElement('div');
  grid.className = 'home-grid';

  // Define grid items
  const gridItems = [
    { class: 'empty', img: '', text: '' }, // Empty space
    { class: 'empty', img: '', text: '' }, // Empty space
    { class: 'empty', img: '', text: '' }, // Empty space
    { class: 'media', img: 'https://ext.same-assets.com/1659927241/1297558043.gif', text: 'MEDIA' },
    { class: 'about', img: 'https://ext.same-assets.com/1659927241/3647064724.gif', text: 'ABOUT' },
    { class: 'contact', img: 'https://ext.same-assets.com/1659927241/2519848551.gif', text: 'CONTACT' }
  ];

  // Add grid items with consistent sizing
  for (const item of gridItems) {
    if (item.class !== 'empty') {
      const gridItem = document.createElement('div');
      gridItem.className = `grid-item ${item.class}`;
      gridItem.onclick = () => loadPage(item.class);

      const gridImgContainer = document.createElement('div');
      gridImgContainer.className = 'grid-img-container';

      const gridImg = document.createElement('img');
      gridImg.src = item.img;
      gridImg.alt = item.text;
      gridImg.className = 'grid-img';
      gridImgContainer.appendChild(gridImg);
      gridItem.appendChild(gridImgContainer);

      const gridText = document.createElement('div');
      gridText.className = 'grid-item-text';
      gridText.textContent = item.text;
      gridItem.appendChild(gridText);

      grid.appendChild(gridItem);
    } else {
      // Add empty div for spacing
      const emptyItem = document.createElement('div');
      emptyItem.className = 'grid-item empty';
      grid.appendChild(emptyItem);
    }
  }

  homeContent.appendChild(grid);

  // Créer la barre des réseaux sociaux
  const socialBar = document.createElement('div');
  socialBar.className = 'social-bar';

  // Définir les icônes de réseaux sociaux
  const socialLinks = [
    {
      name: 'Instagram',
      icon: 'https://ext.same-assets.com/2425485264/2448957733.svg',
      url: 'https://www.instagram.com/awge/'
    },
    {
      name: 'YouTube',
      icon: 'https://ext.same-assets.com/2425485264/1685907107.svg',
      url: 'https://www.youtube.com/channel/UCxX4WXZq6SvJxJF2QvHvUHQ'
    }
  ];

  // Ajouter les icônes de réseaux sociaux
  for (const social of socialLinks) {
    const socialLink = document.createElement('button');
    socialLink.className = 'social-link';
    socialLink.title = social.name;
    socialLink.onclick = () => openExternalLink(social.url);

    const socialIcon = document.createElement('img');
    socialIcon.src = social.icon;
    socialIcon.alt = social.name;
    socialIcon.width = 32;
    socialIcon.height = 32;

    socialLink.appendChild(socialIcon);
    socialBar.appendChild(socialLink);
  }

  homeContent.appendChild(socialBar);

  // Create copyright
  const copyright = document.createElement('div');
  copyright.className = 'kenvan-copyright';

  const copyrightText = document.createElement('h4');
  copyrightText.className = 'kenvan-copyright-text';
  copyrightText.innerHTML = '©&nbsp;&nbsp;2025&nbsp;&nbsp;KEN VAN';

  copyright.appendChild(copyrightText);
  homeContent.appendChild(copyright);

  // Add AWGE logo at the bottom
  const logo = document.createElement('div');
  logo.className = 'kenvan-logo-bottom';
  logo.textContent = 'KEN VAN';
  homeContent.appendChild(logo);

  // Add all content to container
  container.appendChild(homeContent);

  // Create the stars after the page is loaded
  createStars();
}

// Function to load the About page
function loadAboutPage(container: HTMLDivElement) {
  // Create the main container
  const aboutContent = document.createElement('div');
  aboutContent.className = 'about-content';

  // Create the home button (globe)
  const homeBtn = document.createElement('button');
  homeBtn.id = 'awge-home';
  homeBtn.className = 'awge-home';
  homeBtn.onclick = () => loadPage('home');

  const homeImg = document.createElement('img');
  homeImg.src = 'https://ext.same-assets.com/1659927241/1798022527.gif';
  homeImg.alt = 'Home button spinning globe';
  homeImg.width = 80;
  homeImg.height = 80;
  homeBtn.appendChild(homeImg);
  aboutContent.appendChild(homeBtn);

  // Create stars background
  const stars = document.createElement('div');
  stars.className = 'awge-stars';
  aboutContent.appendChild(stars);

  // Create the navbar
  const navbar = document.createElement('div');
  navbar.className = 'home-navbar';

  const navbarImg = document.createElement('img');
  navbarImg.src = '/logo-kenvan.svg';
  navbarImg.alt = 'KEN VAN logo';
  navbarImg.onclick = () => loadPage('home');
  navbarImg.width = 200;
  navbarImg.height = 50;
  navbar.appendChild(navbarImg);

  aboutContent.appendChild(navbar);

  // Create the space container
  const spaceContainer = document.createElement('div');
  spaceContainer.className = 'awge-space-container';

  const spaceWrapper = document.createElement('div');
  spaceWrapper.className = 'awge-space-wrapper';

  // Add rules header
  const rulesHeader = document.createElement('h1');
  rulesHeader.className = 'awge-space-header';
  rulesHeader.textContent = 'Rules';
  spaceWrapper.appendChild(rulesHeader);

  // Add rules text
  const rulesText = document.createElement('h4');
  rulesText.className = 'awge-space-text';
  rulesText.innerHTML = '#1 NEVER REVEAL WHAT AWGE MEANS<br>#2 WHEN IN DOUBT ALWAYS REFER TO RULE #1';
  spaceWrapper.appendChild(rulesText);

  // Add separator
  const separator = document.createElement('br');
  spaceWrapper.appendChild(separator);

  const horizontalRule = document.createElement('hr');
  spaceWrapper.appendChild(horizontalRule);

  const separator2 = document.createElement('br');
  spaceWrapper.appendChild(separator2);

  // Add artists button
  const artistsOption = document.createElement('h1');
  artistsOption.className = 'awge-space-option';
  artistsOption.id = 'about-artists';

  const artistsBtn = document.createElement('button');
  artistsBtn.textContent = 'Artists';
  artistsBtn.onclick = () => {
    alert('Artists section coming soon');
  };

  artistsOption.appendChild(artistsBtn);
  spaceWrapper.appendChild(artistsOption);

  // Add another separator
  const separator3 = document.createElement('br');
  spaceWrapper.appendChild(separator3);

  // Add people button
  const peopleOption = document.createElement('h1');
  peopleOption.className = 'awge-space-option';
  peopleOption.id = 'about-people';

  const peopleBtn = document.createElement('button');
  peopleBtn.textContent = 'People';
  peopleBtn.onclick = () => {
    alert('People section coming soon');
  };

  peopleOption.appendChild(peopleBtn);
  spaceWrapper.appendChild(peopleOption);

  spaceContainer.appendChild(spaceWrapper);
  aboutContent.appendChild(spaceContainer);

  // Add content to the main container
  container.appendChild(aboutContent);

  // Create stars
  createStars();
}

// Function to implement the Contact page
function loadContactPage(container: HTMLDivElement) {
  // Create the main contact container
  const contactContent = document.createElement('div');
  contactContent.className = 'contact-content';

  // Create stars background
  const stars = document.createElement('div');
  stars.className = 'awge-stars';
  contactContent.appendChild(stars);

  // Create the home button (globe)
  const homeBtn = document.createElement('button');
  homeBtn.id = 'awge-home';
  homeBtn.className = 'awge-home';
  homeBtn.onclick = () => loadPage('home');

  const homeImg = document.createElement('img');
  homeImg.src = 'https://ext.same-assets.com/1659927241/1798022527.gif';
  homeImg.alt = 'Home button spinning globe';
  homeImg.width = 80;
  homeImg.height = 80;
  homeBtn.appendChild(homeImg);
  contactContent.appendChild(homeBtn);

  // Create the navbar
  const navbar = document.createElement('div');
  navbar.className = 'home-navbar home-navbar-mobile';

  const navbarBtn = document.createElement('button');
  navbarBtn.onclick = () => loadPage('home');

  const navbarImg = document.createElement('img');
  navbarImg.src = '/logo-kenvan.svg';
  navbarImg.alt = 'Home button KEN VAN logo';
  navbarImg.width = 200;
  navbarImg.height = 50;

  navbarBtn.appendChild(navbarImg);
  navbar.appendChild(navbarBtn);

  contactContent.appendChild(navbar);

  // Create the contact container
  const contactContainer = document.createElement('div');
  contactContainer.className = 'contact-container';

  // Create navbar decoration
  const navbarDecoration = document.createElement('div');
  navbarDecoration.className = 'contact-navbar-decoration';

  const navbarDecorationImg = document.createElement('img');
  navbarDecorationImg.src = 'https://ext.same-assets.com/3557968025/1389709441.svg';
  navbarDecorationImg.alt = '';
  navbarDecorationImg.width = 695;
  navbarDecorationImg.height = 40;

  navbarDecoration.appendChild(navbarDecorationImg);
  contactContainer.appendChild(navbarDecoration);

  // Create navbar
  const contactNavbar = document.createElement('div');
  contactNavbar.className = 'contact-navbar';

  const contactNavbarText = document.createElement('h1');
  contactNavbarText.className = 'contact-navbar-text';

  const contactNavbarTextExtra = document.createElement('span');
  contactNavbarTextExtra.className = 'contact-navbar-text-extra';
  contactNavbarTextExtra.textContent = 'CONTACT';

  contactNavbarText.appendChild(contactNavbarTextExtra);
  contactNavbar.appendChild(contactNavbarText);
  contactContainer.appendChild(contactNavbar);

  // Create contact form
  const contactForm = document.createElement('div');
  contactForm.className = 'contact-contact';

  // Email field
  const emailContainer = document.createElement('div');
  emailContainer.className = 'contact-email-container';

  const emailLabelContainer = document.createElement('div');
  emailLabelContainer.className = 'contact-contact-label-container';

  const emailLabel = document.createElement('div');
  emailLabel.className = 'contact-contact-label';

  const emailLabelText = document.createElement('h1');
  emailLabelText.className = 'contact-contact-label-text';
  emailLabelText.textContent = 'EMAIL';

  emailLabel.appendChild(emailLabelText);
  emailLabelContainer.appendChild(emailLabel);
  emailContainer.appendChild(emailLabelContainer);

  const emailInputContainer = document.createElement('div');
  emailInputContainer.className = 'contact-contact-input-container';

  const emailInput = document.createElement('textarea');
  emailInput.className = 'contact-contact-textarea contact-contact-textarea-mobile rainbow-text';
  emailInput.placeholder = 'Email';
  emailInput.id = 'contact-email';
  emailInput.style.overflow = 'hidden';
  emailInput.style.overflowWrap = 'break-word';
  emailInput.style.height = '57px';

  emailInputContainer.appendChild(emailInput);
  emailContainer.appendChild(emailInputContainer);
  contactForm.appendChild(emailContainer);

  // Subject field
  const subjectContainer = document.createElement('div');
  subjectContainer.className = 'contact-subject-container';

  const subjectLabelContainer = document.createElement('div');
  subjectLabelContainer.className = 'contact-contact-label-container';

  const subjectLabel = document.createElement('div');
  subjectLabel.className = 'contact-contact-label';

  const subjectLabelText = document.createElement('h1');
  subjectLabelText.className = 'contact-contact-label-text';
  subjectLabelText.textContent = 'SUBJECT';

  subjectLabel.appendChild(subjectLabelText);
  subjectLabelContainer.appendChild(subjectLabel);
  subjectContainer.appendChild(subjectLabelContainer);

  const subjectInputContainer = document.createElement('div');
  subjectInputContainer.className = 'contact-contact-input-container';

  const subjectInput = document.createElement('textarea');
  subjectInput.className = 'contact-contact-textarea contact-contact-textarea-mobile rainbow-text';
  subjectInput.placeholder = 'Subject';
  subjectInput.id = 'contact-subject';
  subjectInput.style.overflow = 'hidden';
  subjectInput.style.overflowWrap = 'break-word';
  subjectInput.style.height = '57px';

  subjectInputContainer.appendChild(subjectInput);
  subjectContainer.appendChild(subjectInputContainer);
  contactForm.appendChild(subjectContainer);

  // Message field
  const messageContainer = document.createElement('div');
  messageContainer.className = 'contact-message-container';

  const messageLabelContainer = document.createElement('div');
  messageLabelContainer.className = 'contact-contact-label-container';

  const messageLabel = document.createElement('div');
  messageLabel.className = 'contact-contact-label';

  const messageLabelText = document.createElement('h1');
  messageLabelText.className = 'contact-contact-label-text';
  messageLabelText.textContent = 'MESSAGE';

  messageLabel.appendChild(messageLabelText);
  messageLabelContainer.appendChild(messageLabel);
  messageContainer.appendChild(messageLabelContainer);

  const messageTextareaContainer = document.createElement('div');
  messageTextareaContainer.className = 'contact-contact-textarea-container';

  const messageTextarea = document.createElement('textarea');
  messageTextarea.className = 'contact-contact-textarea contact-contact-textarea-mobile rainbow-text';
  messageTextarea.placeholder = 'Message';
  messageTextarea.id = 'contact-message';
  messageTextarea.style.overflow = 'hidden';
  messageTextarea.style.overflowWrap = 'break-word';
  messageTextarea.style.height = '122px';

  messageTextareaContainer.appendChild(messageTextarea);
  messageContainer.appendChild(messageTextareaContainer);
  contactForm.appendChild(messageContainer);

  contactContainer.appendChild(contactForm);

  // Create footer with send buttons
  const contactFooter = document.createElement('div');
  contactFooter.className = 'contact-footer';

  // Créer une notification pour les messages de statut
  const statusMessage = document.createElement('div');
  statusMessage.className = 'contact-status-message';
  statusMessage.id = 'contact-status';
  statusMessage.style.display = 'none';
  contactContainer.appendChild(statusMessage);

  // Fonction pour afficher un message de statut
  const showStatus = (message: string, isError = false) => {
    statusMessage.textContent = message;
    statusMessage.className = `contact-status-message ${isError ? 'error' : 'success'}`;
    statusMessage.style.display = 'block';

    // Masquer le message après 5 secondes
    setTimeout(() => {
      statusMessage.style.display = 'none';
    }, 5000);
  };

  // Fonction pour vérifier si l'email est valide
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Fonction pour envoyer le message
  const sendMessage = async (recipient: string) => {
    const emailInput = document.getElementById('contact-email') as HTMLTextAreaElement;
    const subjectInput = document.getElementById('contact-subject') as HTMLTextAreaElement;
    const messageInput = document.getElementById('contact-message') as HTMLTextAreaElement;

    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // Validation
    if (!email) {
      showStatus('Veuillez entrer votre email', true);
      return;
    }

    if (!isValidEmail(email)) {
      showStatus('Veuillez entrer un email valide', true);
      return;
    }

    if (!message) {
      showStatus('Veuillez entrer un message', true);
      return;
    }

    try {
      // Désactiver les boutons pendant l'envoi
      sendToAwge.disabled = true;
      sendToOrderSupport.disabled = true;

      // Afficher un message de chargement
      showStatus('Envoi en cours...');

      // Envoyer la requête à l'API
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          subject,
          message,
          recipient
        })
      });

      const data = await response.json();

      if (data.success) {
        showStatus('Message envoyé avec succès !');

        // Réinitialiser les champs
        emailInput.value = '';
        subjectInput.value = '';
        messageInput.value = '';
      } else {
        showStatus('Erreur lors de l\'envoi du message : ' + data.message, true);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      showStatus('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.', true);
    } finally {
      // Réactiver les boutons
      sendToAwge.disabled = false;
      sendToOrderSupport.disabled = false;
    }
  };

  const sendToAwge = document.createElement('button');
  sendToAwge.className = 'contact-footer-text';
  sendToAwge.id = 'contact-send-awge';
  sendToAwge.innerHTML = 'SEND TO<br>AWGE';
  sendToAwge.onclick = () => sendMessage('AWGE');

  const sendToOrderSupport = document.createElement('button');
  sendToOrderSupport.className = 'contact-footer-text';
  sendToOrderSupport.id = 'contact-send-order-support';
  sendToOrderSupport.innerHTML = 'SEND TO<br>ORDER SUPPORT';
  sendToOrderSupport.onclick = () => sendMessage('ORDER SUPPORT');

  contactFooter.appendChild(sendToAwge);
  contactFooter.appendChild(sendToOrderSupport);
  contactContainer.appendChild(contactFooter);

  contactContent.appendChild(contactContainer);

  // Create copyright
  const copyright = document.createElement('div');
  copyright.className = 'awge-copyright';

  const copyrightText = document.createElement('h4');
  copyrightText.className = 'awge-copyright-text';
  copyrightText.innerHTML = '©&nbsp;&nbsp;2024&nbsp;&nbsp;AWGE <br><span class="awge-tc awge-terms"><button>Terms and Conditions</button></span><br><span class="awge-tc awge-privacy"><button>Privacy Policy</button></span>';

  copyright.appendChild(copyrightText);
  contactContent.appendChild(copyright);

  // Add everything to the main container
  container.appendChild(contactContent);

  // Create stars
  createStars();
}

// Placeholder functions for other pages (will be implemented later)
function loadShopPage(container: HTMLDivElement) {
  // Similar placeholder as above
  const pageContent = document.createElement('div');
  pageContent.className = 'page-not-implemented';

  // Create home button
  const homeBtn = document.createElement('button');
  homeBtn.id = 'awge-home';
  homeBtn.className = 'awge-home';
  homeBtn.onclick = () => loadPage('home');

  const homeImg = document.createElement('img');
  homeImg.src = 'https://ext.same-assets.com/1659927241/1798022527.gif';
  homeImg.alt = 'Home button spinning globe';
  homeImg.width = 80;
  homeImg.height = 80;
  homeBtn.appendChild(homeImg);
  pageContent.appendChild(homeBtn);

  // Create message
  const message = document.createElement('h1');
  message.textContent = 'Shop page - Coming soon';
  message.style.position = 'absolute';
  message.style.top = '50%';
  message.style.left = '50%';
  message.style.transform = 'translate(-50%, -50%)';
  pageContent.appendChild(message);

  container.appendChild(pageContent);
}

function loadForumPage(container: HTMLDivElement) {
  // Similar placeholder as above
  const pageContent = document.createElement('div');
  pageContent.className = 'page-not-implemented';

  // Create home button
  const homeBtn = document.createElement('button');
  homeBtn.id = 'awge-home';
  homeBtn.className = 'awge-home';
  homeBtn.onclick = () => loadPage('home');

  const homeImg = document.createElement('img');
  homeImg.src = 'https://ext.same-assets.com/1659927241/1798022527.gif';
  homeImg.alt = 'Home button spinning globe';
  homeImg.width = 80;
  homeImg.height = 80;
  homeBtn.appendChild(homeImg);
  pageContent.appendChild(homeBtn);

  // Create message
  const message = document.createElement('h1');
  message.textContent = 'Forum page - Coming soon';
  message.style.position = 'absolute';
  message.style.top = '50%';
  message.style.left = '50%';
  message.style.transform = 'translate(-50%, -50%)';
  pageContent.appendChild(message);

  container.appendChild(pageContent);
}

function loadDvdPage(container: HTMLDivElement) {
  // Similar placeholder as above
  const pageContent = document.createElement('div');
  pageContent.className = 'page-not-implemented';

  // Create home button
  const homeBtn = document.createElement('button');
  homeBtn.id = 'awge-home';
  homeBtn.className = 'awge-home';
  homeBtn.onclick = () => loadPage('home');

  const homeImg = document.createElement('img');
  homeImg.src = 'https://ext.same-assets.com/1659927241/1798022527.gif';
  homeImg.alt = 'Home button spinning globe';
  homeImg.width = 80;
  homeImg.height = 80;
  homeBtn.appendChild(homeImg);
  pageContent.appendChild(homeBtn);

  // Create message
  const message = document.createElement('h1');
  message.textContent = 'DVD page - Coming soon';
  message.style.position = 'absolute';
  message.style.top = '50%';
  message.style.left = '50%';
  message.style.transform = 'translate(-50%, -50%)';
  pageContent.appendChild(message);

  container.appendChild(pageContent);
}

function loadASAPRockyPage(container: HTMLDivElement) {
  // Similar placeholder as above, but with stars and a custom error message
  const pageContent = document.createElement('div');
  pageContent.className = 'page-not-implemented';

  // Create home button
  const homeBtn = document.createElement('button');
  homeBtn.id = 'awge-home';
  homeBtn.className = 'awge-home';
  homeBtn.onclick = () => loadPage('home');

  const homeImg = document.createElement('img');
  homeImg.src = 'https://ext.same-assets.com/1659927241/1798022527.gif';
  homeImg.alt = 'Home button spinning globe';
  homeImg.width = 80;
  homeImg.height = 80;
  homeBtn.appendChild(homeImg);
  pageContent.appendChild(homeBtn);

  // Create stars background
  const stars = document.createElement('div');
  stars.className = 'awge-stars';
  pageContent.appendChild(stars);

  // Create error message (as seen in the official site)
  const errorWrapper = document.createElement('div');
  errorWrapper.className = 'error-wrapper';

  const errorText = document.createElement('h1');
  errorText.className = 'error-text';
  errorText.textContent = 'You seem to be lost. Try a different page.';
  errorText.style.fontFamily = "'Press Start 2P', monospace";
  errorText.style.position = 'absolute';
  errorText.style.top = '50%';
  errorText.style.left = '50%';
  errorText.style.transform = 'translateX(-50%) translateY(-50%)';
  errorText.style.lineHeight = '2em';
  errorText.style.textAlign = 'center';

  errorWrapper.appendChild(errorText);
  pageContent.appendChild(errorWrapper);

  container.appendChild(pageContent);

  // Create the stars after the page is loaded
  createStars();
}

// Interface pour les photos
interface Photo {
  id: number;
  url: string;
  alt: string;
  width: number;
  height: number;
}

// Tableau statique de photos (utilisé si l'API ne fonctionne pas)
const defaultPhotos: Photo[] = [
  {
    id: 1,
    url: 'https://ext.same-assets.com/3305109517/1952260857.jpeg',
    alt: 'AWGE photoshoot 1',
    width: 640,
    height: 957
  },
  {
    id: 2,
    url: 'https://ext.same-assets.com/3305109517/4151179022.jpeg',
    alt: 'AWGE photoshoot 2',
    width: 640,
    height: 957
  },
  {
    id: 3,
    url: 'https://ext.same-assets.com/3305109517/1503419552.jpeg',
    alt: 'AWGE photoshoot 3',
    width: 640,
    height: 957
  },
  {
    id: 4,
    url: 'https://ext.same-assets.com/3305109517/1403498987.jpeg',
    alt: 'AWGE group photo 1',
    width: 640,
    height: 427
  },
  {
    id: 5,
    url: 'https://ext.same-assets.com/3305109517/3228777784.jpeg',
    alt: 'AWGE group photo 2',
    width: 640,
    height: 427
  },
  {
    id: 6,
    url: 'https://ext.same-assets.com/3305109517/81589092.jpeg',
    alt: 'AWGE car scene',
    width: 640,
    height: 427
  },
  {
    id: 7,
    url: 'https://ext.same-assets.com/3305109517/2592776774.jpeg',
    alt: 'AWGE outdoor shoot',
    width: 640,
    height: 957
  },
  {
    id: 8,
    url: 'https://ext.same-assets.com/3305109517/1860890217.jpeg',
    alt: 'AWGE portrait 1',
    width: 640,
    height: 957
  }
];

// Fonction pour créer une modale d'image
function createPictureModal() {
  // Vérifier si la modale existe déjà
  if (document.getElementById('pictures-modal')) return;

  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  modalOverlay.id = 'pictures-overlay';
  modalOverlay.style.display = 'none';

  const modal = document.createElement('div');
  modal.className = 'modal-modal pictures-modal';
  modal.id = 'pictures-modal';

  const modalImage = document.createElement('img');
  modalImage.id = 'pictures-modal-image';
  modalImage.className = 'pictures-modal-image';
  modalImage.onclick = () => {
    modalOverlay.style.display = 'none';
  };

  modal.appendChild(modalImage);
  modalOverlay.appendChild(modal);
  document.body.appendChild(modalOverlay);
}

// Fonction pour afficher une image dans la modale
function showPictureModal(imageUrl: string) {
  const modalOverlay = document.getElementById('pictures-overlay') as HTMLDivElement;
  const modalImage = document.getElementById('pictures-modal-image') as HTMLImageElement;

  if (modalOverlay && modalImage) {
    modalImage.src = imageUrl;
    modalOverlay.style.display = 'flex';
  }
}

function loadMediaPage(container: HTMLDivElement) {
  // Créer le conteneur principal
  const mediaContent = document.createElement('div');
  mediaContent.className = 'media-content';

  // Créer les étoiles en arrière-plan
  const stars = document.createElement('div');
  stars.className = 'awge-stars';
  mediaContent.appendChild(stars);

  // Créer le bouton Home (globe)
  const homeBtn = document.createElement('button');
  homeBtn.id = 'awge-home';
  homeBtn.className = 'awge-home';
  homeBtn.onclick = () => loadPage('home');

  const homeImg = document.createElement('img');
  homeImg.src = 'https://ext.same-assets.com/1659927241/1798022527.gif';
  homeImg.alt = 'Home button spinning globe';
  homeImg.width = 80;
  homeImg.height = 80;
  homeBtn.appendChild(homeImg);
  mediaContent.appendChild(homeBtn);

  // Créer la navbar
  const navbar = document.createElement('div');
  navbar.className = 'home-navbar home-navbar-mobile';

  const navbarBtn = document.createElement('button');
  navbarBtn.onclick = () => loadPage('home');

  const navbarImg = document.createElement('img');
  navbarImg.src = '/logo-kenvan.svg';
  navbarImg.alt = 'Home button KEN VAN logo';
  navbarImg.width = 200;
  navbarImg.height = 50;

  navbarBtn.appendChild(navbarImg);
  navbar.appendChild(navbarBtn);
  mediaContent.appendChild(navbar);

  // Créer le titre "Directed by AWGE"
  const mediaTitle = document.createElement('h1');
  mediaTitle.className = 'media-title';
  mediaTitle.textContent = 'Directed by AWGE';
  mediaContent.appendChild(mediaTitle);

  // Créer la navigation Media
  const mediaNav = document.createElement('div');
  mediaNav.className = 'media-nav';

  // Conteneurs pour les sections vidéos et photos
  const videoSection = document.createElement('div');
  videoSection.className = 'media-section video-section';
  videoSection.id = 'video-section';

  const photoSection = document.createElement('div');
  photoSection.className = 'media-section photo-section';
  photoSection.id = 'photo-section';
  photoSection.style.display = 'none';

  // Créer le visualiseur de photos
  const pictureViewer = document.createElement('div');
  pictureViewer.className = 'media-picture-viewer';

  const pictureContainer = document.createElement('div');
  pictureContainer.className = 'media-picture-container';

  // Créer les éléments de navigation
  const navItems = [
    { id: 'pictures', text: 'Pictures' },
    { id: 'videos', text: 'Videos', active: true }
  ];

  // Ajouter les éléments de navigation
  for (const item of navItems) {
    const navItem = document.createElement('div');
    navItem.className = `media-nav-item ${item.active ? 'active' : ''}`;
    navItem.id = `media-${item.id}`;
    navItem.textContent = item.text;
    navItem.onclick = () => {
      // Mettre à jour l'interface selon le choix
      document.querySelectorAll('.media-nav-item').forEach(el => el.classList.remove('active'));
      navItem.classList.add('active');

      if (item.id === 'pictures') {
        videoSection.style.display = 'none';
        photoSection.style.display = 'block';

        // Charger les photos
        loadPhotos(pictureContainer);
      } else {
        photoSection.style.display = 'none';
        videoSection.style.display = 'block';
      }
    };
    mediaNav.appendChild(navItem);
  }

  mediaContent.appendChild(mediaNav);

  // Fonction pour charger les photos
  const loadPhotos = async (container: HTMLDivElement) => {
    // Vider le conteneur
    container.innerHTML = '';

    try {
      // Essayer de récupérer les photos depuis l'API
      let photos = defaultPhotos;

      try {
        const response = await fetch('http://localhost:3000/api/photos');
        const data = await response.json();
        if (data.success && data.photos && data.photos.length > 0) {
          photos = data.photos;
        }
      } catch (error) {
        console.warn('Impossible de récupérer les photos depuis l\'API, utilisation des photos par défaut:', error);
      }

      // Créer la modale pour les images
      createPictureModal();

      // Ajouter chaque photo au conteneur
      photos.forEach(photo => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'picture-item';

        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.alt;
        img.loading = 'lazy';
        img.width = photo.width;
        img.height = photo.height;

        // Ajouter un gestionnaire d'événement pour ouvrir la modale
        img.onclick = () => showPictureModal(photo.url);

        imgContainer.appendChild(img);
        container.appendChild(imgContainer);
      });
    } catch (error) {
      console.error('Erreur lors du chargement des photos:', error);

      // Message d'erreur
      const errorMsg = document.createElement('div');
      errorMsg.className = 'photos-error';
      errorMsg.textContent = 'Impossible de charger les images';
      container.appendChild(errorMsg);
    }
  };

  // Liste de vidéos (URL de vidéos à afficher)
  const videos = [
    'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  ];

  // Créer le visualiseur de vidéos
  const videoViewer = document.createElement('div');
  videoViewer.className = 'media-video-viewer';

  const videoContainer = document.createElement('div');
  videoContainer.className = 'media-video-container';

  // Créer l'élément vidéo
  const videoElement = document.createElement('video');
  videoElement.className = 'media-video';
  videoElement.autoplay = true;
  videoElement.loop = false;
  videoElement.muted = false;
  videoElement.controls = false;

  // Index de la vidéo actuelle
  let currentVideoIndex = 0;

  // Créer les contrôles de la vidéo
  const videoControls = document.createElement('div');
  videoControls.className = 'media-video-controls';

  // Compteur de vidéos
  const videoCounterText = document.createElement('div');
  videoCounterText.className = 'media-video-counter';
  videoCounterText.textContent = `${currentVideoIndex + 1}/${videos.length}`;
  videoControls.appendChild(videoCounterText);

  // Bouton Next
  const nextButton = document.createElement('button');
  nextButton.className = 'media-video-next';
  nextButton.textContent = 'NEXT';
  nextButton.onclick = () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    loadVideo(currentVideoIndex);
  };
  videoControls.appendChild(nextButton);

  // Fonction pour charger une vidéo
  const loadVideo = (index: number) => {
    videoElement.src = videos[index];
    videoElement.load();
    videoElement.play()
      .catch(error => {
        console.error('Autoplay was prevented:', error);
        // Créer un bouton pour lancer la vidéo manuellement si l'autoplay est bloqué
        const playButton = document.createElement('button');
        playButton.textContent = 'Play Video';
        playButton.style.position = 'absolute';
        playButton.style.top = '50%';
        playButton.style.left = '50%';
        playButton.style.transform = 'translate(-50%, -50%)';
        playButton.style.zIndex = '10';
        playButton.style.padding = '10px 20px';
        playButton.style.background = 'rgba(0, 0, 0, 0.7)';
        playButton.style.color = 'white';
        playButton.style.border = '1px solid white';
        playButton.style.borderRadius = '5px';
        playButton.style.cursor = 'pointer';
        playButton.onclick = () => {
          videoElement.play();
          playButton.remove();
        };
        videoContainer.appendChild(playButton);
      });
    videoCounterText.textContent = `${index + 1}/${videos.length}`;
  };

  // Charger la première vidéo
  loadVideo(currentVideoIndex);

  // Gestionnaire d'événement pour passer à la vidéo suivante quand la vidéo actuelle est terminée
  videoElement.addEventListener('ended', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    loadVideo(currentVideoIndex);
  });

  // Ajouter l'élément vidéo au conteneur
  videoContainer.appendChild(videoElement);

  // Ajouter les contrôles au conteneur
  videoContainer.appendChild(videoControls);

  // Ajouter le conteneur au visualiseur
  videoViewer.appendChild(videoContainer);

  // Ajouter les visualiseurs aux sections respectives
  videoSection.appendChild(videoViewer);
  photoSection.appendChild(pictureViewer);
  pictureViewer.appendChild(pictureContainer);

  // Ajouter les sections au conteneur principal
  mediaContent.appendChild(videoSection);
  mediaContent.appendChild(photoSection);

  // Créer le copyright
  const copyright = document.createElement('div');
  copyright.className = 'kenvan-copyright';

  const copyrightText = document.createElement('h4');
  copyrightText.className = 'kenvan-copyright-text';
  copyrightText.innerHTML = '©&nbsp;&nbsp;2025&nbsp;&nbsp;KEN VAN';

  copyright.appendChild(copyrightText);
  mediaContent.appendChild(copyright);

  // Ajouter tout au conteneur
  container.appendChild(mediaContent);

  // Créer les étoiles en arrière-plan
  createStars();
}

// Function to set up navigation event handlers
function setupNavigation() {
  // No additional setup needed yet as navigation is handled in loadPage
  // This function will be used later for more complex navigation
}

// Create the CSS for the star animation
const starStyle = document.createElement('style');
starStyle.textContent = `
  .star {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    animation: twinkle 20s linear infinite;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;
document.head.appendChild(starStyle);
