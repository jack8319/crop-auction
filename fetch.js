const url = "https://raw.githubusercontent.com/jack8319/crop-auction/main/auctions.json";

async function main() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const auctions = await res.json();
    auctions.forEach(({ crop, price }) => console.log(`${crop}: Rs${price}`));
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}

main();