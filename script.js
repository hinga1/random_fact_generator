// Facts about Kenya
var facts = [
    "Kenya is located in East Africa.",
    "Kenya is home to the Maasai Mara National Reserve, known for its wildlife and annual wildebeest migration.",
    "Mount Kenya is the highest mountain in Kenya and the second-highest in Africa.",
    "Kenya is known for its diverse landscapes, including savannahs, mountains, and coastal regions.",
    "Swahili and English are the official languages of Kenya.",
    "Kenya gained independence from British colonial rule on December 12, 1963.",
    "Kenya is famous for its long-distance runners who have achieved great success in international competitions.",
    "Lake Victoria, the largest lake in Africa, is shared by Kenya, Tanzania, and Uganda.",
    "Nairobi is the capital and largest city of Kenya.",
    "Kenya is rich in wildlife, with various national parks and reserves to protect its diverse species."
  ];
  
  // Generate random fact
  function generateFact() {
    var randomIndex = Math.floor(Math.random() * facts.length);
    var fact = facts[randomIndex];
    document.getElementById("factDisplay").textContent = fact;
  }
  
  // Add event listener to generate button
  var generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", generateFact);
  