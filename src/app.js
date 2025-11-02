
const domainList = document.getElementById('domainList');
const generateBtn = document.getElementById('generateBtn');

const pronoun = [
  'joses', 'our', 'my', 'your', 'the', 'best', 'green', 'pro', 'super'
];

const adj = [
  'fresh', 'green', 'clean', 'bright', 'lush', 'perfect', 'healthy',
  'vibrant', 'beautiful', 'neat', 'friendly', 'happy', 'fast', 'eco'
];

const noun = [
  'lawn', 'yard', 'garden', 'grass', 'landscape', 'mow', 'care',
  'service', 'crew', 'team', 'works', 'solutions', 'pros', 'experts',
  'maintenance', 'company'
];

const extensions = ['.com', '.net', '.us', '.biz', '.co', '.services'];


let domainGenerator = [];
console.log(domainGenerator)
pronoun.forEach(pronoun => {
  adj.forEach(adj => {
    noun.forEach(noun => {
      extensions.forEach(extensions => {
        const domains = `${pronoun}-${adj}-${noun}${extensions}`; 
        console.log(domains)
        domainGenerator.push(domains)

      }

      )
    }

    )
  })
})

function displayRandomDomain() {
  const randomIndex = Math.floor(Math.random() * domainGenerator.length);
  const randomDomain = domainGenerator[randomIndex];

  domainList.innerHTML = `<div class="p-2 bg-light rounded m-1">${randomDomain}</div>`;
}


generateBtn.addEventListener('click', displayRandomDomain);