const pronoun = [
  'the', 'our', 'my', 'your', 'super', 'best', 'mega', 'ultra', 'pro'
];

const adj = [
  'great', 'big', 'fast', 'cool', 'smart', 'bright', 'happy', 'funny', 
  'wild', 'crazy', 'lucky', 'amazing', 'awesome', 'epic'
];

const noun = [
  'jogger', 'racoon', 'lastofus', 'ninja', 'wizard', 'unicorn', 
  'dragon', 'cat', 'dog', 'coder', 'hacker', 'galaxy', 'rocket', 
  'pixel', 'studio', 'planet', 'hero', 'queen', 'king', 'champ'
];

const extensions = ['.com', '.net', '.us', '.io', '.tech', '.dev'];


// Helper function to pick a random item from an array
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

// Generate ONE random domain
const generateRandomDomain = () => {
  const p = randomItem(pronoun);
  const a = randomItem(adj);
  const n = randomItem(noun);
  const ext = randomItem(extensions);

  // Check for domain hack (e.g. "lastofus" → "lastof.us")
  const extWithoutDot = ext.slice(1);
  let domain;

  if (n.endsWith(extWithoutDot)) {
    domain = `${p}${a}${n.slice(0, -extWithoutDot.length)}${ext}`;
  } else {
    domain = `${p}${a}${n}${ext}`;
  }

  console.log(domain); // print to console
  return domain;
};

// Display one random domain on the page
const displayRandomDomain = () => {
  const domainList = document.getElementById('domainList');
  const domainCount = document.getElementById('domainCount');

  // Clear old results
  domainList.innerHTML = '';

  const domain = generateRandomDomain();

  // Update counter
  domainCount.textContent = `1 random domain generated`;

  // Show on webpage
  const div = document.createElement('div');
  div.classList.add('domain-item', 'p-3', 'border', 'rounded');
  div.innerHTML = `<a href="http://${domain}" target="_blank">${domain}</a>`;
  domainList.appendChild(div);
};

// Run once on load
document.addEventListener('DOMContentLoaded', displayRandomDomain);

// Run again when button clicked
document.getElementById('generateBtn').addEventListener('click', displayRandomDomain);
