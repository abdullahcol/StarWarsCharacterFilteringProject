// Character data array
const characters = [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine"
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine"
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo"
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine"
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan"
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine"
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine"
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine"
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine"
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon"
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine"
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu"
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk"
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia"
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia"
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine"
    },
    {
      
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine"
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo"
    }
  ];
  
  

// Function to capitalize the first letter of each word
function capitalizeFirstLetter(string) {
  if (!string) return 'Bilinmiyor';
  return string.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
}

// Function to get unique homeworlds for the filter
function getUniqueHomeworlds() {
  const homeworlds = characters.map(character => character.homeworld).filter(Boolean);
  return [...new Set(homeworlds)];
}

// Function to create the homeworld filter dropdown
function createHomeworldFilter() {
  const filterContainer = document.getElementById('filterContainer');
  
  // Clear previous content
  filterContainer.innerHTML = '';
  
  // Create homeworld select
  const select = document.createElement('select');
  select.id = 'homeworldSelect';
  
  // Add default option
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Bir Gezegen Seçin';
  select.appendChild(defaultOption);
  
  // Add homeworld options
  const homeworlds = getUniqueHomeworlds();
  homeworlds.forEach(homeworld => {
    const option = document.createElement('option');
    option.value = homeworld;
    option.textContent = capitalizeFirstLetter(homeworld);
    select.appendChild(option);
  });
  
  // Create filter button
  const filterButton = document.createElement('button');
  filterButton.innerHTML = '<i class="fas fa-filter"></i> Gezegene Göre Filtrele';
  filterButton.className = 'filter-button';
  filterButton.onclick = filterByHomeworld;
  
  // Append elements to container
  filterContainer.appendChild(select);
  filterContainer.appendChild(filterButton);
}

// Function to filter characters by homeworld
function filterByHomeworld() {
  const selectedHomeworld = document.getElementById('homeworldSelect').value;
  
  if (!selectedHomeworld) {
    alert('Lütfen bir gezegen seçin!');
    return;
  }
  
  // Filter characters by selected homeworld
  const filteredCharacters = characters.filter(character => 
    character.homeworld && character.homeworld.toLowerCase() === selectedHomeworld.toLowerCase()
  );
  
  // Remove existing character display if any
  const existingRow = document.querySelector('.row');
  if (existingRow) {
    existingRow.remove();
  }
  
  // Create a row div for filtered characters
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  
  // Add the row before the footer
  const footer = document.querySelector('.footer');
  footer.parentNode.insertBefore(rowDiv, footer);
  
  // If no characters found for the selected homeworld
  if (filteredCharacters.length === 0) {
    rowDiv.innerHTML = `<div class="no-results"><i class="fas fa-exclamation-circle"></i><br>Bu gezegenden hiç karakter bulunamadı: ${capitalizeFirstLetter(selectedHomeworld)}</div>`;
    return;
  }
  
  // Generate HTML for filtered characters
  let cardsHTML = '';
  
  filteredCharacters.forEach(character => {
    const cardTemplate = `
      <div class="character-card">
        <div class="character-image">
          <img src="${character.pic}" alt="${character.name}">
        </div>
        <div class="character-info">
          <h3>${character.name}</h3>
          <p><i class="fas fa-globe"></i> Homeworld: ${capitalizeFirstLetter(character.homeworld)}</p>
         
        </div>
      </div>
    `;
    
    cardsHTML += cardTemplate;
  });
  
  // Insert all cards into the row
  rowDiv.innerHTML = cardsHTML;
  
  // Update button states
  const toggleButton = document.querySelector('#toggleButton');
  toggleButton.innerHTML = '<i class="fas fa-times"></i> Karakterleri Gizle';
  toggleButton.onclick = removeCharacters;
}

// Function to display all characters
function renderCharacters() {
  // Remove existing character display if any
  const existingRow = document.querySelector('.row');
  if (existingRow) {
    existingRow.remove();
  }
  
  // Create a row div to contain the character cards
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  
  // Add the row before the footer
  const footer = document.querySelector('.footer');
  footer.parentNode.insertBefore(rowDiv, footer);
  
  // Generate HTML for each character
  let cardsHTML = '';
  
  characters.forEach(character => {
    // Template for each character card with dynamic data
    const cardTemplate = `
      <div class="character-card">
        <div class="character-image">
          <img src="${character.pic}" alt="${character.name}">
        </div>
        <div class="character-info">
          <h3>${character.name}</h3>
          <p><i class="fas fa-globe"></i> Homeworld: ${capitalizeFirstLetter(character.homeworld)}</p>
          <p><i class="fas fa-id-card"></i> ID: ${character.id}</p>
        </div>
      </div>
    `;
    
    // Add this card to the cards HTML
    cardsHTML += cardTemplate;
  });
  
  // Insert all cards into the row
  rowDiv.innerHTML = cardsHTML;
  
  // Change button text and function
  const button = document.querySelector('#toggleButton');
  button.innerHTML = '<i class="fas fa-times"></i> Karakterleri Gizle';
  button.onclick = removeCharacters;
}

// Function to hide/remove characters
function removeCharacters() {
  // Find the row div and remove it
  const rowDiv = document.querySelector('.row');
  if (rowDiv) {
    rowDiv.remove();
  }
  
  // Change button text and function back
  const button = document.querySelector('#toggleButton');
  button.innerHTML = '<i class="fas fa-users"></i> Karakterleri Göster';
  button.onclick = renderCharacters;
}

// Initialize filter when page loads
window.onload = createHomeworldFilter;