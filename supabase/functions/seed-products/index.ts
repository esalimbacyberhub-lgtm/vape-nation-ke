import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  )

  const products = [
    { name: "KK Energy 2 Blueberry Ice", puffs: "5000 Puffs", flavor: "Blueberry Ice", price: 2300, image: "/lovable-uploads/747c8f0a-7574-4902-9e96-4b5ddd8262e1.png", popular: true, badge: "5,000 PUFFS", category: "disposable", display_order: 1 },
    { name: "KK Energy 2 Lush Ice", puffs: "5000 Puffs", flavor: "Lush Ice", price: 2300, image: "/lovable-uploads/1092c0d1-480a-40db-81e6-a2f5db7a93b4.png", popular: false, badge: "5,000 PUFFS", category: "disposable", display_order: 2 },
    { name: "KK Energy 2 Cool Mint", puffs: "5000 Puffs", flavor: "Cool Mint", price: 2300, image: "/lovable-uploads/5edd589d-bc6c-4c97-8ff4-176e0d34883f.png", popular: false, badge: "5,000 PUFFS", category: "disposable", display_order: 3 },
    { name: "KK Energy 2 Grape Ice", puffs: "5000 Puffs", flavor: "Grape Ice", price: 2300, image: "/lovable-uploads/d48ff870-863c-41ad-9c23-3ad3dc56616b.png", popular: false, badge: "5,000 PUFFS", category: "disposable", display_order: 4 },
    { name: "KK Energy 2 Strawberry Watermelon", puffs: "5000 Puffs", flavor: "Strawberry Watermelon", price: 2300, image: "/lovable-uploads/cfe2ec05-22f3-4cc7-bd5b-9a33444c72cc.png", popular: true, badge: "5,000 PUFFS", category: "disposable", display_order: 5 },
    { name: "KK Energy 2 Pina Colada Rum", puffs: "5000 Puffs", flavor: "Pina Colada Rum", price: 2300, image: "/lovable-uploads/cf9ed17b-fa87-4ad2-b681-341fa9b3b944.png", popular: false, badge: "5,000 PUFFS", category: "disposable", display_order: 6 },
    { name: "KK Energy 2 Strawberry Mango", puffs: "5000 Puffs", flavor: "Strawberry Mango", price: 2300, image: "/lovable-uploads/ef689076-2ebe-4f81-b9aa-d7de2790a284.png", popular: true, badge: "5,000 PUFFS", category: "disposable", display_order: 7 },
    { name: "KK Energy 2 Peach Ice", puffs: "5000 Puffs", flavor: "Peach Ice", price: 2300, image: "/lovable-uploads/a9d5fd3e-4e84-4bcd-83df-6d56ee347777.png", popular: false, badge: "5,000 PUFFS", category: "disposable", display_order: 8 },
    { name: "KK Energy 2 Apple Lemon", puffs: "5000 Puffs", flavor: "Apple Lemon", price: 2300, image: "/lovable-uploads/436e7ada-b85f-497e-97f4-5835e8f1ca22.png", popular: false, badge: "5,000 PUFFS", category: "disposable", display_order: 9 },
    { name: "KK Energy 2 Fruit Fusion", puffs: "5000 Puffs", flavor: "Fruit Fusion", price: 2300, image: "/lovable-uploads/2d05463a-83a1-4af6-a3ef-86a473b64781.png", popular: false, badge: "5,000 PUFFS", category: "disposable", display_order: 10 },
    
    { name: "Lost Mary 15K Citrus Sunrise", puffs: "15000 Puffs", flavor: "Citrus Sunrise", price: 2800, image: "/lovable-uploads/b302ec8b-6487-4aa2-94b2-11700261939b.png", popular: true, badge: "⚡ 15K PUFFS", category: "disposable", display_order: 11 },
    { name: "Lost Mary 15K Dr Cherry", puffs: "15000 Puffs", flavor: "Dr Cherry", price: 2800, image: "/lovable-uploads/0b78fc31-9f7f-4c94-9134-b8e80bd87415.png", popular: false, badge: "⚡ 15K PUFFS", category: "disposable", display_order: 12 },
    { name: "Lost Mary 15K Summer Grape", puffs: "15000 Puffs", flavor: "Summer Grape", price: 2800, image: "/lovable-uploads/c5d372be-f8c8-4c28-ac30-578e00293ff0.png", popular: true, badge: "⚡ 15K PUFFS", category: "disposable", display_order: 13 },
    { name: "Lost Mary 15K Watermelon Ice", puffs: "15000 Puffs", flavor: "Watermelon Ice", price: 2800, image: "/lovable-uploads/fc19e16a-0fa7-4a06-9371-d9a00b587e09.png", popular: true, badge: "⚡ 15K PUFFS", category: "disposable", display_order: 14 },
    { name: "Lost Mary 15K Miami Mint", puffs: "15000 Puffs", flavor: "Miami Mint", price: 2800, image: "/lovable-uploads/53ea2f50-00d1-4917-bcf7-819e91d2510c.png", popular: false, badge: "⚡ 15K PUFFS", category: "disposable", display_order: 15 },
    { name: "Lost Mary 15K Strawberry Kiwi", puffs: "15000 Puffs", flavor: "Strawberry Kiwi", price: 2800, image: "/lovable-uploads/fc83fa96-51e6-4eda-81ed-039363247ba8.png", popular: false, badge: "⚡ 15K PUFFS", category: "disposable", display_order: 16 },
    { name: "Lost Mary 15K Blue Razz", puffs: "15000 Puffs", flavor: "Blue Razz", price: 2800, image: "/lovable-uploads/441cf781-de19-4ee4-8228-5c8a3e67c28a.png", popular: true, badge: "⚡ 15K PUFFS", category: "disposable", display_order: 17 },
    { name: "Lost Mary 15K Nana Coconut", puffs: "15000 Puffs", flavor: "Nana Coconut", price: 2800, image: "/lovable-uploads/b24efa37-e53e-4e3a-ac7e-0c1c2cd2b18f.png", popular: false, badge: "⚡ 15K PUFFS", category: "disposable", display_order: 18 },
    { name: "Lost Mary 15K Berry Burst", puffs: "15000 Puffs", flavor: "Berry Burst", price: 2800, image: "/lovable-uploads/5df69fd6-1d38-474d-a4c0-c88560751cbd.png", popular: false, badge: "⚡ 15K PUFFS", category: "disposable", display_order: 19 },
    
    { name: "Nasty 20K Malibu", puffs: "20000 Puffs", flavor: "Malibu", price: 3000, image: "/lovable-uploads/nasty-brand.png", popular: true, badge: "🔥 20K PUFFS", category: "disposable", display_order: 20 },
    { name: "Nasty 20K Melon Milkshake", puffs: "20000 Puffs", flavor: "Melon Milkshake", price: 3000, image: "/lovable-uploads/nasty-brand.png", popular: false, badge: "🔥 20K PUFFS", category: "disposable", display_order: 21 },
  ]

  // Insert products
  const { data, error } = await supabaseClient
    .from('products')
    .upsert(products, { onConflict: 'name' })

  if (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }

  return new Response(
    JSON.stringify({ message: 'Products seeded successfully', count: products.length }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  )
})