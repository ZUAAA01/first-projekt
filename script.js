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

// Mobile Video Fix - am Ende der Datei ersetzen
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    
    if (video) {
        // Grundlegende Video-Attribute
        video.setAttribute('playsinline', 'true');
        video.setAttribute('webkit-playsinline', 'true');
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        
        // Mobile Browser Erkennung
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            // Mobile-spezifische Video-Einstellungen
            video.setAttribute('playsinline', 'true');
            video.setAttribute('webkit-playsinline', 'true');
            video.setAttribute('x5-video-player-type', 'h5');
            video.setAttribute('x5-video-player-fullscreen', 'false');
            video.setAttribute('x5-video-orientation', 'portraint');
            
            // Video als Hintergrund forcieren (nicht Vollbild)
            video.style.position = 'fixed';
            video.style.top = '0';
            video.style.left = '0';
            video.style.width = '100vw';
            video.style.height = '100vh';
            video.style.objectFit = 'cover';
            video.style.zIndex = '-10';
            video.style.pointerEvents = 'none';
            
            // Versuche Video zu starten
            const playVideo = () => {
                const playPromise = video.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log('Mobile background video started successfully');
                        video.style.opacity = '1';
                    }).catch(error => {
                        console.log('Video autoplay failed on mobile:', error);
                        // Fallback: Gradient Hintergrund
                        document.body.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)';
                        document.body.style.backgroundAttachment = 'fixed';
                    });
                }
            };
            
            // Sofort versuchen
            playVideo();
            
            // Touch-Event für iOS (falls nötig)
            document.addEventListener('touchstart', function enableVideoOnTouch() {
                playVideo();
                document.removeEventListener('touchstart', enableVideoOnTouch);
            }, { once: true });
            
            // User Interaction Handler
            document.addEventListener('click', function enableVideoOnClick() {
                playVideo();
                document.removeEventListener('click', enableVideoOnClick);
            }, { once: true });
        }
        
        // Video Load Error Handler
        video.addEventListener('error', function() {
            console.log('Video load error - using fallback background');
            document.body.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)';
            document.body.style.backgroundAttachment = 'fixed';
            video.style.display = 'none';
        });
        
        // Video erfolgreich geladen
        video.addEventListener('loadeddata', function() {
            console.log('Video loaded successfully');
            if (isMobile) {
                video.play().catch(console.log);
            }
        });
    }
});
