console.log("ZUA Onepage aktiv 🧠🔥");

function toggleContact() {
  const contactSection = document.getElementById("contact-info");
  const aboutSection = document.getElementById("about-content");
  const projectsSection = document.getElementById("projects-content");
  
  // Wenn Contact bereits sichtbar ist, verstecke es
  if (contactSection.classList.contains("contact-visible")) {
    contactSection.classList.remove("contact-visible");
    contactSection.classList.add("contact-hidden");
  } else {
    // Zeige Contact und verstecke About & Projects
    contactSection.classList.remove("contact-hidden");
    contactSection.classList.add("contact-visible");
    
    // About automatisch schließen
    if (aboutSection.classList.contains("about-visible")) {
      aboutSection.classList.remove("about-visible");
      aboutSection.classList.add("about-hidden");
    }
    
    // Projects automatisch schließen
    if (projectsSection.classList.contains("projects-visible")) {
      projectsSection.classList.remove("projects-visible");
      projectsSection.classList.add("projects-hidden");
    }
  }
}

function toggleImpressum() {
  const impressumSection = document.getElementById("impressum-content");
  impressumSection.classList.toggle("impressum-visible");
}

function toggleAbout() {
  const aboutSection = document.getElementById("about-content");
  const projectsSection = document.getElementById("projects-content");
  const contactSection = document.getElementById("contact-info");
  
  // Wenn About bereits sichtbar ist, verstecke es
  if (aboutSection.classList.contains("about-visible")) {
    aboutSection.classList.remove("about-visible");
    aboutSection.classList.add("about-hidden");
  } else {
    // Zeige About und verstecke Projects & Contact
    aboutSection.classList.remove("about-hidden");
    aboutSection.classList.add("about-visible");
    
    // Projects automatisch schließen
    if (projectsSection.classList.contains("projects-visible")) {
      projectsSection.classList.remove("projects-visible");
      projectsSection.classList.add("projects-hidden");
    }
    
    // Contact automatisch schließen
    if (contactSection.classList.contains("contact-visible")) {
      contactSection.classList.remove("contact-visible");
      contactSection.classList.add("contact-hidden");
    }
  }
}

function toggleProjects() {
  console.log("toggleProjects() aufgerufen");
  const projectsSection = document.getElementById("projects-content");
  const aboutSection = document.getElementById("about-content");
  const contactSection = document.getElementById("contact-info");
  
  console.log("projects-content element:", projectsSection);
  
  if (projectsSection) {
    // Wenn Projects bereits sichtbar ist, verstecke es
    if (projectsSection.classList.contains("projects-visible")) {
      projectsSection.classList.remove("projects-visible");
      projectsSection.classList.add("projects-hidden");
    } else {
      // Zeige Projects und verstecke About & Contact
      projectsSection.classList.remove("projects-hidden");
      projectsSection.classList.add("projects-visible");
      
      // About automatisch schließen
      if (aboutSection.classList.contains("about-visible")) {
        aboutSection.classList.remove("about-visible");
        aboutSection.classList.add("about-hidden");
      }
      
      // Contact automatisch schließen
      if (contactSection.classList.contains("contact-visible")) {
        contactSection.classList.remove("contact-visible");
        contactSection.classList.add("contact-hidden");
      }
    }
    console.log("Neue Klassen:", projectsSection.className);
  } else {
    console.error("Element mit ID 'projects-content' nicht gefunden!");
  }
}

function handleReachMe() {
  alert("Reach Me Button gedrückt – hier kommt später dein Kontaktmodul.");
}

// Mobile Video Fix - verbessert
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    
    if (video) {
        // Kritische Mobile-Attribute setzen
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.setAttribute('playsinline', 'true');
        video.setAttribute('webkit-playsinline', 'true');
        video.setAttribute('preload', 'auto');
        
        // Mobile Browser Detection
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            // Mobile-spezifische Einstellungen
            video.setAttribute('muted', 'true');
            video.setAttribute('playsinline', 'true');
            video.setAttribute('webkit-playsinline', 'true');
            video.setAttribute('x5-video-player-type', 'h5');
            video.setAttribute('x5-video-player-fullscreen', 'false');
            
            // Mehrere Versuche das Video zu starten
            const startVideo = () => {
                video.play().then(() => {
                    console.log('✅ Mobile video started successfully');
                    video.style.opacity = '1';
                }).catch(error => {
                    console.log('❌ Video autoplay failed:', error);
                    // Fallback Background
                    document.body.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)';
                    document.body.style.backgroundAttachment = 'fixed';
                });
            };
            
            // Sofort versuchen
            startVideo();
            
            // Bei User-Interaktion versuchen
            ['touchstart', 'click', 'scroll'].forEach(event => {
                document.addEventListener(event, function enableVideo() {
                    startVideo();
                    document.removeEventListener(event, enableVideo);
                }, { once: true, passive: true });
            });
            
            // Intersection Observer für Lazy Loading
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            startVideo();
                            observer.unobserve(video);
                        }
                    });
                });
                observer.observe(video);
            }
        }
        
        // Error Handler
        video.addEventListener('error', function(e) {
            console.log('❌ Video error:', e);
            document.body.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)';
            document.body.style.backgroundAttachment = 'fixed';
        });
        
        // Success Handler
        video.addEventListener('loadeddata', function() {
            console.log('✅ Video loaded successfully');
        });
        
        video.addEventListener('canplay', function() {
            console.log('✅ Video can play');
            if (isMobile) {
                video.play().catch(console.log);
            }
        });
    }
});
