import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import iceMintFlavor from "@/assets/ice-mint-flavor.png";
import fruitFusionFlavor from "@/assets/fruit-fusion-flavor.png";
import berryBlendsFlavor from "@/assets/berry-blends-flavor.png";
import lostMaryBrand from "@/assets/lost-mary-brand.png";
import nastyBrand from "@/assets/nasty-brand.png";
import elfbarBrand from "@/assets/elfbar-brand.png";
import soloBarBrand from "@/assets/solo-bar-brand.png";
import vapenginJupiter from "@/assets/vapengin-jupiter.png";
import lostMaryMt15000 from "@/assets/lost-mary-mt15000.png";
import soloBar50k from "@/assets/solo-bar-50k.png";
import soloBar50kWhiteGummy from "/lovable-uploads/fcd22fb2-8024-4b80-9835-9c68a069a0ea.png";
import soloBar50kBlueRazz from "/lovable-uploads/c218e5a9-4b7f-4bda-8582-edf8ac05e420.png";
import soloBar50kWatermelon from "/lovable-uploads/2ab1d999-4346-4860-8b56-b363b0e459ea.png";
import soloBar50kJuicyPeach from "/lovable-uploads/559357b4-89bf-400a-9e6a-b749f05c485a.png";
import soloBar50kPineapple from "/lovable-uploads/4c878e46-7368-475a-aa82-95bb6ae892a4.png";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categoryFilters = [
    { id: "all", label: "All", icon: "🛍️" },
    { id: "disposable", label: "Disposable Vapes", icon: "💨" },
    { id: "juice", label: "Vape Juice", icon: "💧" },
    { id: "pods", label: "Pod Kits", icon: "🔋" },
    { id: "accessories", label: "Accessories", icon: "🔌" },
  ];

  const products = [
    {
      id: 1,
      name: "KK Energy 2 Blueberry Ice",
      puffs: "5000 Puffs",
      flavor: "Blueberry Ice",
      price: "KSH 2,100",
      image: "/lovable-uploads/747c8f0a-7574-4902-9e96-4b5ddd8262e1.png",
      popular: true,
      badge: "5,000 PUFFS",
      category: "disposable",
    },
    {
      id: 2,
      name: "KK Energy 2 Lush Ice",
      puffs: "5000 Puffs",
      flavor: "Lush Ice",
      price: "KSH 2,100",
      image: "/lovable-uploads/1092c0d1-480a-40db-81e6-a2f5db7a93b4.png",
      popular: false,
      badge: "5,000 PUFFS",
      category: "disposable",
    },
    {
      id: 3,
      name: "KK Energy 2 Cool Mint",
      puffs: "5000 Puffs",
      flavor: "Cool Mint",
      price: "KSH 2,100",
      image: "/lovable-uploads/5edd589d-bc6c-4c97-8ff4-176e0d34883f.png",
      popular: false,
      badge: "5,000 PUFFS",
      category: "disposable",
    },
    {
      id: 4,
      name: "KK Energy 2 Grape Ice",
      puffs: "5000 Puffs",
      flavor: "Grape Ice",
      price: "KSH 2,100",
      image: "/lovable-uploads/d48ff870-863c-41ad-9c23-3ad3dc56616b.png",
      popular: false,
      badge: "5,000 PUFFS",
      category: "disposable",
    },
    {
      id: 5,
      name: "KK Energy 2 Strawberry Watermelon",
      puffs: "5000 Puffs",
      flavor: "Strawberry Watermelon",
      price: "KSH 2,100",
      image: "/lovable-uploads/cfe2ec05-22f3-4cc7-bd5b-9a33444c72cc.png",
      popular: true,
      badge: "5,000 PUFFS",
      category: "disposable",
    },
    {
      id: 6,
      name: "KK Energy 2 Pina Colada Rum",
      puffs: "5000 Puffs",
      flavor: "Pina Colada Rum",
      price: "KSH 2,100",
      image: "/lovable-uploads/cf9ed17b-fa87-4ad2-b681-341fa9b3b944.png",
      popular: false,
      badge: "5,000 PUFFS",
      category: "disposable",
    },
    {
      id: 7,
      name: "KK Energy 2 Strawberry Mango",
      puffs: "5000 Puffs",
      flavor: "Strawberry Mango",
      price: "KSH 2,100",
      image: "/lovable-uploads/ef689076-2ebe-4f81-b9aa-d7de2790a284.png",
      popular: true,
      badge: "5,000 PUFFS",
      category: "disposable",
    },
    {
      id: 8,
      name: "KK Energy 2 Peach Ice",
      puffs: "5000 Puffs",
      flavor: "Peach Ice",
      price: "KSH 2,100",
      image: "/lovable-uploads/a9d5fd3e-4e84-4bcd-83df-6d56ee347777.png",
      popular: false,
      badge: "5,000 PUFFS",
      category: "disposable",
    },
    {
      id: 9,
      name: "KK Energy 2 Apple Lemon",
      puffs: "5000 Puffs",
      flavor: "Apple Lemon",
      price: "KSH 2,100",
      image: "/lovable-uploads/436e7ada-b85f-497e-97f4-5835e8f1ca22.png",
      popular: false,
      badge: "5,000 PUFFS",
      category: "disposable",
    },
    {
      id: 10,
      name: "KK Energy 2 Fruit Fusion",
      puffs: "5000 Puffs",
      flavor: "Fruit Fusion",
      price: "KSH 2,100",
      image: "/lovable-uploads/2d05463a-83a1-4af6-a3ef-86a473b64781.png",
      popular: false,
      badge: "5,000 PUFFS",
      category: "disposable",
    },
    {
      id: 11,
      name: "Lost Mary 15K Citrus Sunrise",
      puffs: "15000 Puffs",
      flavor: "Citrus Sunrise",
      price: "KSH 2,600",
      image: "/lovable-uploads/b302ec8b-6487-4aa2-94b2-11700261939b.png",
      popular: true,
      badge: "⚡ 15K PUFFS",
      category: "disposable",
    },
    {
      id: 12,
      name: "Lost Mary 15K Dr Cherry",
      puffs: "15000 Puffs",
      flavor: "Dr Cherry",
      price: "KSH 2,600",
      image: "/lovable-uploads/0b78fc31-9f7f-4c94-9134-b8e80bd87415.png",
      popular: false,
      badge: "⚡ 15K PUFFS",
      category: "disposable",
    },
    {
      id: 13,
      name: "Lost Mary 15K Summer Grape",
      puffs: "15000 Puffs",
      flavor: "Summer Grape",
      price: "KSH 2,600",
      image: "/lovable-uploads/c5d372be-f8c8-4c28-ac30-578e00293ff0.png",
      popular: true,
      badge: "⚡ 15K PUFFS",
      category: "disposable",
    },
    {
      id: 14,
      name: "Lost Mary 15K Watermelon Ice",
      puffs: "15000 Puffs",
      flavor: "Watermelon Ice",
      price: "KSH 2,600",
      image: "/lovable-uploads/fc19e16a-0fa7-4a06-9371-d9a00b587e09.png",
      popular: true,
      badge: "⚡ 15K PUFFS",
      category: "disposable",
    },
    {
      id: 15,
      name: "Lost Mary 15K Miami Mint",
      puffs: "15000 Puffs",
      flavor: "Miami Mint",
      price: "KSH 2,600",
      image: "/lovable-uploads/53ea2f50-00d1-4917-bcf7-819e91d2510c.png",
      popular: false,
      badge: "⚡ 15K PUFFS",
      category: "disposable",
    },
    {
      id: 16,
      name: "Lost Mary 15K Strawberry Kiwi",
      puffs: "15000 Puffs",
      flavor: "Strawberry Kiwi",
      price: "KSH 2,600",
      image: "/lovable-uploads/fc83fa96-51e6-4eda-81ed-039363247ba8.png",
      popular: false,
      badge: "⚡ 15K PUFFS",
      category: "disposable",
    },
    {
      id: 17,
      name: "Lost Mary 15K Blue Razz",
      puffs: "15000 Puffs",
      flavor: "Blue Razz",
      price: "KSH 2,600",
      image: "/lovable-uploads/441cf781-de19-4ee4-8228-5c8a3e67c28a.png",
      popular: true,
      badge: "⚡ 15K PUFFS",
      category: "disposable",
    },
    {
      id: 18,
      name: "Lost Mary 15K Nana Coconut",
      puffs: "15000 Puffs",
      flavor: "Nana Coconut",
      price: "KSH 2,600",
      image: "/lovable-uploads/b24efa37-e53e-4e3a-ac7e-0c1c2cd2b18f.png",
      popular: false,
      badge: "⚡ 15K PUFFS",
      category: "disposable",
    },
    {
      id: 19,
      name: "Lost Mary 15K Berry Burst",
      puffs: "15000 Puffs",
      flavor: "Berry Burst",
      price: "KSH 2,600",
      image: "/lovable-uploads/5df69fd6-1d38-474d-a4c0-c88560751cbd.png",
      popular: false,
      badge: "⚡ 15K PUFFS",
      category: "disposable",
    },
    {
      id: 20,
      name: "Nasty 20K Malibu",
      puffs: "20000 Puffs",
      flavor: "Malibu",
      price: "KSH 2,800",
      image: nastyBrand,
      popular: true,
      badge: "🔥 20K PUFFS",
      category: "disposable",
    },
    {
      id: 21,
      name: "Nasty 20K Melon Milkshake",
      puffs: "20000 Puffs",
      flavor: "Melon Milkshake",
      price: "KSH 2,800",
      image: nastyBrand,
      popular: false,
      badge: "🔥 20K PUFFS",
      category: "disposable",
    },
    {
      id: 22,
      name: "Nasty 20K Arctic Mint",
      puffs: "20000 Puffs",
      flavor: "Arctic Mint",
      price: "KSH 2,800",
      image: nastyBrand,
      popular: true,
      badge: "🔥 20K PUFFS",
      category: "disposable",
    },
    {
      id: 23,
      name: "Nasty 20K Sour Apple Ice",
      puffs: "20000 Puffs",
      flavor: "Sour Apple Ice",
      price: "KSH 2,800",
      image: nastyBrand,
      popular: false,
      badge: "🔥 20K PUFFS",
      category: "disposable",
    },
    {
      id: 24,
      name: "Nasty 20K Cushman Strawberry",
      puffs: "20000 Puffs",
      flavor: "Cushman Strawberry",
      price: "KSH 2,800",
      image: nastyBrand,
      popular: true,
      badge: "🔥 20K PUFFS",
      category: "disposable",
    },
    {
      id: 25,
      name: "Nasty 20K Strawberry Ice",
      puffs: "20000 Puffs",
      flavor: "Strawberry Ice",
      price: "KSH 2,800",
      image: nastyBrand,
      popular: false,
      badge: "🔥 20K PUFFS",
      category: "disposable",
    },
    {
      id: 26,
      name: "Elfbar 25K Grape Ice",
      puffs: "25000 Puffs",
      flavor: "Grape Ice",
      price: "KSH 3,100",
      image: "/lovable-uploads/782b0e4c-bab1-44b7-862f-90fc37a4cea0.png",
      popular: true,
      badge: "💨 25K+ PUFFS",
      category: "disposable",
    },
    {
      id: 27,
      name: "Elfbar 25K Cherry Grape",
      puffs: "25000 Puffs",
      flavor: "Cherry Grape",
      price: "KSH 3,100",
      image: "/lovable-uploads/81ba8447-0825-44dd-919a-ec6631749463.png",
      popular: false,
      badge: "💨 25K+ PUFFS",
      category: "disposable",
    },
    {
      id: 28,
      name: "Elfbar 25K Blueberry Ice",
      puffs: "25000 Puffs",
      flavor: "Blueberry Ice",
      price: "KSH 3,100",
      image: "/lovable-uploads/aafa3f08-8cb5-4e72-b594-613b6d59ed01.png",
      popular: true,
      badge: "💨 25K+ PUFFS",
      category: "disposable",
    },
    {
      id: 29,
      name: "Elfbar 25K Blueberry Raspberry",
      puffs: "25000 Puffs",
      flavor: "Blueberry Raspberry",
      price: "KSH 3,100",
      image: "/lovable-uploads/ca1fca51-7867-484f-9fd5-65272c74f4cb.png",
      popular: false,
      badge: "💨 25K+ PUFFS",
      category: "disposable",
    },
    {
      id: 30,
      name: "Elfbar 25K Kiwi Passion",
      puffs: "25000 Puffs",
      flavor: "Kiwi Passion",
      price: "KSH 3,100",
      image: "/lovable-uploads/9a86ba16-3168-465d-8c46-08cb7e4c4d57.png",
      popular: true,
      badge: "💨 25K+ PUFFS",
      category: "disposable",
    },
    {
      id: 31,
      name: "Elfbar 25K Watermelon Ice",
      puffs: "25000 Puffs",
      flavor: "Watermelon Ice",
      price: "KSH 3,100",
      image: "/lovable-uploads/653d0d3f-31d4-4f8c-bc8d-ec6a947ec796.png",
      popular: true,
      badge: "💨 25K+ PUFFS",
      category: "disposable",
    },
    {
      id: 32,
      name: "Elfbar 25K Watermelon Bubblegum",
      puffs: "25000 Puffs",
      flavor: "Watermelon Bubblegum",
      price: "KSH 3,100",
      image: "/lovable-uploads/2b239531-c01b-4817-9abe-ac1edf0b1d43.png",
      popular: false,
      badge: "💨 25K+ PUFFS",
      category: "disposable",
    },
    {
      id: 33,
      name: "Elfbar 25K Peach Ice",
      puffs: "25000 Puffs",
      flavor: "Peach Ice",
      price: "KSH 3,100",
      image: "/lovable-uploads/26b350e9-747d-44fd-bf03-0488cb0806f9.png",
      popular: false,
      badge: "💨 25K+ PUFFS",
      category: "disposable",
    },
    {
      id: 34,
      name: "Elfbar 25K Double Mango",
      puffs: "25000 Puffs",
      flavor: "Double Mango",
      price: "KSH 3,100",
      image: "/lovable-uploads/867ad413-ab36-45f4-a411-e779da1d2668.png",
      popular: true,
      badge: "💨 25K+ PUFFS",
      category: "disposable",
    },
    {
      id: 35,
      name: "Elfbar 25K Strawberry Grape",
      puffs: "25000 Puffs",
      flavor: "Strawberry Grape",
      price: "KSH 3,100",
      image: "/lovable-uploads/1f7c6887-37c9-415c-a4a4-15f3fe2c8a18.png",
      popular: false,
      badge: "💨 25K+ PUFFS",
      category: "disposable",
    },
    {
      id: 36,
      name: "Nimbox 10K Strawberry Kiwi",
      puffs: "10000 Puffs",
      flavor: "Strawberry Kiwi",
      price: "KSH 2,100",
      image: berryBlendsFlavor,
      popular: false,
      badge: "🎯 10K PUFFS",
      category: "disposable",
    },
    {
      id: 37,
      name: "Nimbox 10K Juicy Peach",
      puffs: "10000 Puffs",
      flavor: "Juicy Peach",
      price: "KSH 2,100",
      image: fruitFusionFlavor,
      popular: true,
      badge: "🎯 10K PUFFS",
      category: "disposable",
    },
    {
      id: 38,
      name: "Nimbox 10K Blue Peach Gummy",
      puffs: "10000 Puffs",
      flavor: "Blue Peach Gummy",
      price: "KSH 2,100",
      image: berryBlendsFlavor,
      popular: false,
      badge: "🎯 10K PUFFS",
      category: "disposable",
    },
    {
      id: 39,
      name: "Nimbox 10K Banana Ice",
      puffs: "10000 Puffs",
      flavor: "Banana Ice",
      price: "KSH 2,100",
      image: fruitFusionFlavor,
      popular: false,
      badge: "🎯 10K PUFFS",
      category: "disposable",
    },
    {
      id: 40,
      name: "Nimbox 10K Honeydew",
      puffs: "10000 Puffs",
      flavor: "Honeydew",
      price: "KSH 2,100",
      image: fruitFusionFlavor,
      popular: true,
      badge: "🎯 10K PUFFS",
      category: "disposable",
    },
    {
      id: 40,
      name: "Elfbar 9K Cherry Strazz",
      puffs: "9000 Puffs",
      flavor: "Cherry Strazz",
      price: "KSH 2,800",
      image: "/lovable-uploads/0a5911c7-040b-4935-a1b3-00d510523d0a.png",
      popular: false,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 41,
      name: "Elfbar 9K Miami Mint",
      puffs: "9000 Puffs",
      flavor: "Miami Mint",
      price: "KSH 2,800",
      image: "/lovable-uploads/a061db2e-908b-4d3c-9c09-5f13a63426e3.png",
      popular: true,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 42,
      name: "Elfbar 9K Lime",
      puffs: "9000 Puffs",
      flavor: "Lime",
      price: "KSH 2,800",
      image: "/lovable-uploads/f00ac36b-a30a-4f98-a813-f9a2f3121d70.png",
      popular: false,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 43,
      name: "Elfbar 9K Blue Razz",
      puffs: "9000 Puffs",
      flavor: "Blue Razz",
      price: "KSH 2,800",
      image: "/lovable-uploads/c3897fb6-af61-4776-bc9c-b0dcf63bdd26.png",
      popular: true,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 44,
      name: "Elfbar 9K Sour Lush",
      puffs: "9000 Puffs",
      flavor: "Sour Lush",
      price: "KSH 2,800",
      image: "/lovable-uploads/59fdeac3-3d3c-408e-b11d-3189a83493bc.png",
      popular: false,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 45,
      name: "Elfbar 9K Grape",
      puffs: "9000 Puffs",
      flavor: "Grape",
      price: "KSH 2,800",
      image: "/lovable-uploads/4290acc7-4dec-4b95-9667-fb902cac4fa3.png",
      popular: false,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 46,
      name: "Elfbar 9K Watermelon",
      puffs: "9000 Puffs",
      flavor: "Watermelon",
      price: "KSH 2,800",
      image: "/lovable-uploads/db6ee762-8c8f-4fad-87f3-58cd6c4838a3.png",
      popular: true,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 47,
      name: "Elfbar 9K California Cherry",
      puffs: "9000 Puffs",
      flavor: "California Cherry",
      price: "KSH 2,800",
      image: "/lovable-uploads/763a2625-75eb-4baf-bfef-e06292fefb32.png",
      popular: false,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 48,
      name: "Elfbar 9K Dragon Strawnana",
      puffs: "9000 Puffs",
      flavor: "Dragon Strawnana",
      price: "KSH 2,800",
      image: "/lovable-uploads/74ad30d2-c068-48cb-a47d-46352403a66e.png",
      popular: false,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 49,
      name: "Vapegin Jupiter Plus 13K Mint Ice",
      puffs: "13000 Puffs",
      flavor: "Mint Ice",
      price: "KSH 1,900",
      image: iceMintFlavor,
      popular: true,
      badge: "💎 13K PUFFS",
      category: "disposable",
    },
    {
      id: 50,
      name: "Vapegin Jupiter Plus 13K Grape Ice",
      puffs: "13000 Puffs",
      flavor: "Grape Ice",
      price: "KSH 1,900",
      image: berryBlendsFlavor,
      popular: false,
      badge: "💎 13K PUFFS",
      category: "disposable",
    },
    {
      id: 51,
      name: "Vapegin Jupiter Plus 13K Sour Blue Rasp Ice",
      puffs: "13000 Puffs",
      flavor: "Sour Blue Rasp Ice",
      price: "KSH 1,900",
      image: berryBlendsFlavor,
      popular: true,
      badge: "💎 13K PUFFS",
      category: "disposable",
    },
    {
      id: 52,
      name: "Elfbar 9K Pod Double Mango",
      puffs: "9000 Puffs",
      flavor: "Double Mango",
      price: "KSH 1,900",
      image: "/lovable-uploads/2c84d98a-5ff6-4e73-9a7a-1dff18d5961f.png",
      popular: true,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 53,
      name: "Elfbar 9K Pod Grape",
      puffs: "9000 Puffs",
      flavor: "Grape",
      price: "KSH 1,900",
      image: "/lovable-uploads/fa83e05f-3170-4798-bff1-a5449b58b06c.png",
      popular: false,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 54,
      name: "Elfbar 9K Pod Miami Mint",
      puffs: "9000 Puffs",
      flavor: "Miami Mint",
      price: "KSH 1,900",
      image: "/lovable-uploads/2594f9d7-2799-497e-b35f-2d10a80b90f4.png",
      popular: true,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 55,
      name: "Elfbar 9K Pod Cherry Straz",
      puffs: "9000 Puffs",
      flavor: "Cherry Straz",
      price: "KSH 1,900",
      image: "/lovable-uploads/2d70b8e8-56f4-46cd-bb67-bd1ff9f8e14e.png",
      popular: false,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 56,
      name: "Elfbar 9K Pod Sour Lush",
      puffs: "9000 Puffs",
      flavor: "Sour Lush",
      price: "KSH 1,900",
      image: "/lovable-uploads/e56fa967-91ce-4323-bb41-ba7155cd61d3.png",
      popular: false,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 57,
      name: "Elfbar 9K Pod Strawberry Mango",
      puffs: "9000 Puffs",
      flavor: "Strawberry Mango",
      price: "KSH 1,900",
      image: "/lovable-uploads/c4ee1979-eff7-44cc-bbf7-da2df276ec2b.png",
      popular: true,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 58,
      name: "Elfbar 9K Pod Watermelon",
      puffs: "9000 Puffs",
      flavor: "Watermelon",
      price: "KSH 1,900",
      image: "/lovable-uploads/e9f115dc-4093-49fe-b93a-bdff6ea9616b.png",
      popular: false,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 59,
      name: "Elfbar 9K Pod Blackberry Cherry Pomegranate",
      puffs: "9000 Puffs",
      flavor: "Blackberry Cherry Pomegranate",
      price: "KSH 1,900",
      image: "/lovable-uploads/3866fac5-dba9-4b80-8e04-25ddbc518669.png",
      popular: false,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 60,
      name: "Elfbar 9K Pod Blue Razz",
      puffs: "9000 Puffs",
      flavor: "Blue Razz",
      price: "KSH 1,900",
      image: "/lovable-uploads/ba34c818-6b99-4846-be6b-43baf2c10038.png",
      popular: false,
      badge: "9,000 PUFFS",
      category: "disposable",
    },
    {
      id: 61,
      name: "Solo Bar 50K Blue Razz Ice",
      puffs: "50000 Puffs",
      flavor: "Blue Razz Ice",
      price: "KSH 3,600",
      image: soloBar50kBlueRazz,
      popular: true,
      badge: "🚀 50K PUFFS",
      category: "disposable",
    },
    {
      id: 62,
      name: "Solo Bar 50K White Gummy Ice",
      puffs: "50000 Puffs",
      flavor: "White Gummy Ice",
      price: "KSH 3,600",
      image: soloBar50kWhiteGummy,
      popular: true,
      badge: "🚀 50K PUFFS",
      category: "disposable",
    },
    {
      id: 63,
      name: "Solo Bar 50K Pineapple Apple Pear",
      puffs: "50000 Puffs",
      flavor: "Pineapple Apple Pear",
      price: "KSH 3,600",
      image: soloBar50kPineapple,
      popular: false,
      badge: "🚀 50K PUFFS",
      category: "disposable",
    },
    {
      id: 64,
      name: "Solo Bar 50K Sakura Grape",
      puffs: "50000 Puffs",
      flavor: "Sakura Grape",
      price: "KSH 3,600",
      image: soloBar50k,
      popular: false,
      badge: "🚀 50K PUFFS",
      category: "disposable",
    },
    {
      id: 65,
      name: "Solo Bar 50K Strawberry Watermelon",
      puffs: "50000 Puffs",
      flavor: "Strawberry Watermelon",
      price: "KSH 3,600",
      image: soloBar50k,
      popular: true,
      badge: "🚀 50K PUFFS",
      category: "disposable",
    },
    {
      id: 66,
      name: "Solo Bar 50K Watermelon Ice",
      puffs: "50000 Puffs",
      flavor: "Watermelon Ice",
      price: "KSH 3,600",
      image: soloBar50kWatermelon,
      popular: true,
      badge: "🚀 50K PUFFS",
      category: "disposable",
    },
    {
      id: 67,
      name: "Solo Bar 50K Peach Berry Ice",
      puffs: "50000 Puffs",
      flavor: "Peach Berry Ice",
      price: "KSH 3,600",
      image: soloBar50kJuicyPeach,
      popular: false,
      badge: "🚀 50K PUFFS",
      category: "disposable",
    },
  ];

  const filteredProducts = products.filter(product => 
    activeFilter === "all" || product.category === activeFilter
  );

  return (
    <section id="shop" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🔥 Shop Premium Vapes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fast delivery in Nairobi, Lavington, Westlands & nationwide 🇰🇪
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categoryFilters.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="font-semibold rounded-full px-6 transition-all duration-300"
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-400 group bg-card border-border">
              {product.popular && (
                <Badge className="absolute top-3 left-3 z-10 bg-destructive text-destructive-foreground">
                  🔥 POPULAR
                </Badge>
              )}
              <Badge className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-xs">
                {product.badge}
              </Badge>
              
              <CardContent className="p-6 text-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform rounded-lg"
                />
                <h3 className="font-bold text-lg mb-2 line-clamp-2 text-foreground">{product.name}</h3>
                <div className="text-sm text-muted-foreground mb-1">{product.puffs}</div>
                <div className="text-sm text-muted-foreground mb-4">{product.flavor}</div>
                <div className="text-2xl font-bold text-primary mb-4">{product.price}</div>
                <a
                  href={`https://wa.me/254742405841?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  Order Now
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;