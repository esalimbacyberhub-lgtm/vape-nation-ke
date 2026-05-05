const WHATSAPP_PHONE = "254742405841";

const CATALOG_MESSAGE = `🌿 Welcome to Vape Nation KE! 🇰🇪

Thank you for reaching out! Here's what we currently have in stock:

VAPENGIN SERIES:

🔥 Vapengin 13,000 Puffs – KSh 3,000
Flavours: Strawberry Raspberry, Raspberry Lemon, Pineapple Passion Fruit, Arizona Blended Juice, Ice Mint, Citrus Mint, Triple Mango, Passion Fruit Kiwi Guava, Tropical Ice, Peach Grape, Summer Grape, Peach Mango Ice, Watermelon Bubblegum Mint, Strawberry Ice, Raspberry Watermelon, Blackberry Ice

🔥 Vapengin 20,000 Puffs – KSh 3,300
Flavours: Watermelon Ice, Peach Mango Ice, Grape Ice, Tropical Ice, Cool Mint

🔥 Vapengin 6,500 Puffs – KSh 2,800
Flavours: Cool Mint, Strawberry Watermelon, Peach Mango, Watermelon Ice, Pineapple Passion Fruit, Grape Ice

SOLO BAR SERIES:

🔥 Solo Bar 50,000 Puffs – KSh 3,700
Flavours: Miami Mint, Sakura Grape, Peach Berry Ice, Strawberry Watermelon, Strawberry Kiwi, Mixed Berries, Blue Razz, Juicy Peach, Pineapple Apple Pear, Watermelon Ice

🔥 Solo Bar 30,000 Puffs – KSh 3,100
Flavours: Strawberry Watermelon, Strawberry Kiwi, Watermelon Ice, Mango Ice, Grape Ice, Blue Razz

LOST MARY SERIES:

🔥 Lost Mary 35,000 Puffs – KSh 3,500
Flavours: Miami Mint, Winter Mint, Peach Green Grape, Blue Razz Lemonade, Mango Peach Watermelon, Kiwi Passion Fruit Guava, Strawberry Kiwi Ice, Lemon Passion Fruit, Watermelon Ice, Citrus Sunrise, Watermelon Bubblegum

🔥 Lost Mary BM 15,000 Puffs – KSh 2,800
Flavours: Strawberry Ice, Miami Mint, Peach Ice, Grape Ice, Super Berries, Double Mango, Mango Peach Watermelon, Watermelon Ice, Blueberry Ice, Strawberry Peach

ELFBAR SERIES:

🔥 Elfbar 30,000 Puffs (Ice King) – KSh 3,700
Flavours: Pink Lemonade, Strawberry Watermelon, Miami Mint, Blue Razz, Elf Bull, Kiwi Passion Fruit Guava

🔥 Elfbar 9,000 Puffs – KSh 2,800
Kits: Miami Mint, Watermelon Ice
Pods: Double Mango, Strawberry Mango, Mango Peach Watermelon, Lime Cola, Grape

RAYA SERIES:

🔥 Raya 25,000 Puffs – KSh 3,000
Flavours: Double Mango, Mango Peach Watermelon, Strawberry Grape, Peach Ice, Watermelon Ice, Passion Fruit Kiwi Guava, Blueberry Raspberry, Grape Cherry, Grape Ice, Peach Berry, Alpine Mint, Blueberry Ice

📦 Same-day delivery: Kilimani, Lavington, Kileleshwa, Westlands, Karen, Ngong Road & CBD

🚚 Nationwide shipping: Mombasa, Kisumu, Nakuru, Eldoret & more

To place your order, simply reply with:

✅ Product name
✅ Puff count
✅ Flavour of your choice

We'll get it to you ASAP! 💨`;

export const getWhatsAppCatalogUrl = () => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(CATALOG_MESSAGE)}`;
};
