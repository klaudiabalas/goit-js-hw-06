const categoriesList = document.querySelectorAll(`.item`);
console.log(`Number of categories : ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elemenstCount = category.querySelectorAll("ul li").length;
  console.log(`Category : ${categoryName}`);
  console.log(`Elements : ${elemenstCount}`);
});
