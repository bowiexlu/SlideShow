// Always start with the first page
let pageCounter = 0;

// There is a array includ 3 pages, run the loop and go through array
const pages = [
    {
        number: 1,
        heading: "Golden Retriver",
        text: `The Golden Retriever is a Scottish breed of retriever dog of medium size. 
        It is characterised by a gentle and affectionate nature and a striking golden 
        coat. It is a working dog, and registration is subject to successful completion 
        of a working trial.[2] It is commonly kept as a pet and is among the most frequently 
        registered breeds in several Western countries; some may compete in dog shows or 
        obedience trials, or work as a guide dog.`,
        image: 'img/hund.jpg'
    },
    {
        number: 2,
        heading: "Arabian Horse",
        text: `The Arabian or Arab horse is a breed of horse with historic roots on the 
        Arabian Peninsula. With a distinctive head shape and high tail carriage, the Arabian 
        is one of the most easily recognizable horse breeds in the world. It is also one of 
        the oldest modern breeds. Although modern DNA cannot trace breed purity in the modern 
        population beyond 200 years, there is archaeological evidence of horses in the Middle 
        East with landrace characteristics that resemble modern Arabians dating back 3,500 
        years. Throughout history, Arabian horses have spread around the world by both war 
        and trade, used to improve other breeds by adding speed, refinement, endurance, and 
        strong bone. Today, Arabian bloodlines are found in almost every modern breed of 
        riding horse.`,
        image: 'img/hast.jpg'

    },
    {
        number: 3,
        heading: "Gray Wolves",
        text: `Gray wolves, or timber wolves, are canines with long bushy tails that are 
        often black-tipped. Their coat color is typically a mix of gray and brown with 
        buffy facial markings and undersides, but the color can vary from solid white to 
        brown or black. Gray wolves look somewhat like a large German shepherd. Wolves 
        vary in size depending on where they live. Wolves in the north are usually larger 
        than those in the south. The average size of a wolf's body is three to five feet 
        long and their tails are usually one to two feet long. Females typically weigh 60 
        to 100 pounds, and males weigh 70 to 145 pounds.`,
        image: 'img/varg.jpg'
    }
];

// A function to display the content of pages
function getPageInfo() {
    const currentPage = pages[pageCounter];
    document.getElementById("slide-nr").textContent = `Number: ${currentPage.number}`;
    document.getElementById("slide-heading").textContent = currentPage.heading;
    document.getElementById("slide-text").textContent = currentPage.text;
    document.getElementById("slide-img").src = currentPage.image;

}

// A function to the previous page
function prevPage() {
    pageCounter--;
    if (pageCounter < 0) {
        pageCounter = pages.length-1;
    }
    getPageInfo(); 
}
// A function to the next page
function nextPage() {
    pageCounter++;
    if(pageCounter >= pages.length) {
        pageCounter = 0;
    }
    getPageInfo();
}

document.getElementById("back").addEventListener("click", prevPage);
document.getElementById("forward").addEventListener("click", nextPage);


getPageInfo(); 