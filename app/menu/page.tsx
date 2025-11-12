"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MenuPage() {
  const categories = [
    "Chef's Recommendations",
    "Banquets",
    "Entrées",
    "Soups",
    "Seafood",
    "Beef",
    "Chicken",
    "Lamb",
    "Pork",
    "Duck",
    "Omelettes",
    "Vegetarian",
    "Noodles",
    "Rice",
    "Desserts",
    "Gluten Free",
    "Drinks",
  ]
  const [activeCategory, setActiveCategory] = useState("Chef's Recommendations")

  const menuItems = {
    "Chef's Recommendations": [
      {
        name: "Prawn Fritters",
        description: "House-made crispy prawn fritters",
        price: "$18.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Scallop Fritters",
        description: "Crispy scallop fritters with dipping sauce",
        price: "$19.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Steamed Large Tiger Prawn (1 pc)",
        description: "Fresh tiger prawn, steamed",
        price: "$17.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Steamed Scallops (2 pcs)",
        description: "On-shell scallops with garlic",
        price: "$23.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Peking Duck (Two Courses) - Half",
        description: "Pancakes with crispy duck crackling + second course (stir-fry or sang choi bao)",
        price: "$49.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Peking Duck (Two Courses) - Full",
        description: "Pancakes with crispy duck crackling + second course (stir-fry or sang choi bao)",
        price: "$94.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Spicy Eggplant Hotpot with Minced Chicken",
        description: "Braised eggplant, minced chicken, claypot",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Teppan Tofu with Minced Chicken & Fried Eggs",
        description: "Tofu, minced chicken and egg on sizzling plate",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Crispy Skin Roast Chicken (Canton Style)",
        description: "Cantonese-style crispy roast chicken",
        price: "$30.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Spicy Malaysian Butter Chicken",
        description: "Butter sauce with home-grown curry leaves",
        price: "$30.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Rendang Beef",
        description: "Slow-cooked beef in rich coconut rendang",
        price: "$30.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Kari Chicken (Authentic Malaysian)",
        description: "Malaysian curry chicken",
        price: "$30.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Authentic Style Sweet & Sour Pork",
        description: "Classic sweet & sour sauce, pickled veg & pineapple",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Honey Pepper Pork Ribs",
        description: "Honey-pepper glazed pork ribs",
        price: "$30.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Garlic Combination",
        description: "Mixed meats with garlic sauce",
        price: "$30.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Lemongrass Chicken (Sizzling)",
        description: "Aromatic lemongrass and Asian spices",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Rainbow Beef or Pork",
        description: "Honey-chilli glaze with sesame",
        price: "$30.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Pan-Fried Fillet Steak (Black Pepper or Teriyaki)",
        description: "Tender fillet steak, choice of sauce",
        price: "$34.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Satay Delight with Seasonal Vegetables",
        description: "Mixed meats in house satay with vegetables",
        price: "$37.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Crispy Roast Duck (House Plum Sauce)",
        description: "Crispy duck with plum sauce",
        price: "$37.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Creamy Garlic Butter Sizzling Prawns with Onions",
        description: "Sizzling prawns in creamy garlic butter",
        price: "$30.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Malaysian Chilli Prawns with Seasonal Vegetables",
        description: "Spicy sambal-style prawns",
        price: "$30.90",
        image: "/your-image.jpg",
        popular: true,
      },
    ],
    Banquets: [
      {
        name: "Banquet A (min 4 people)",
        description:
          "Mixed entrée (prawn toasts, spring rolls, curry puffs & dim sims), Sizzling Garlic Prawns, Pan-Fried Beef Fillets (black pepper), Pan-Fried Chicken Breast (lemon), Mongolian Lamb, Special Fried Rice, Banana Fritter with Vanilla Ice Cream. Chinese tea included.",
        price: "$49.90 per person",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Banquet B (min 4 people)",
        description:
          "Mixed entrée (prawn toast, spring roll, dim sim), Sizzling Garlic Prawns, Pan-Fried Beef Fillets (black pepper), Pan-Fried Chicken Breast (lemon), Mongolian Lamb, Special Fried Rice, Peking Duck (two courses: pancakes with crispy duck crackling + stir-fried duck with veg OR duck sang choi bao), Banana Fritter with Vanilla Ice Cream. Chinese tea included.",
        price: "$59.90 per person",
        image: "/your-image.jpg",
        popular: true,
      },
    ],
    Entrées: [
      {
        name: "Mixed Entrées",
        description: "Prawn toast, spring roll, dim sim, curry puff",
        price: "$14.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Spring Rolls (3)",
        description: "Crispy vegetarian spring rolls",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Dim Sims (3) - Steamed or Deep Fried",
        description: "Classic dim sims, choice of style",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Prawn Dumplings (4) - Steamed or Deep Fried",
        description: "Prawn dumplings, choice of style",
        price: "$14.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Prawn Toasts (2)",
        description: "Sesame prawn toasts",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Curry Puffs (3)",
        description: "Curried potato pastry puffs",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Fried Wonton (6)",
        description: "Crispy pork wontons",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sang Choi Bao – Lettuce Rolls (1)",
        description: "Minced filling in crisp lettuce cup",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Malaysian Satay Chicken Skewers (2)",
        description: "House satay, peanut sauce",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Salt & Pepper Quail",
        description: "Miami Rice marinade, fried quail",
        price: "$14.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Scallop Fritters or Garlic Scallops",
        description: "Your choice of crispy fritters or garlic sauté",
        price: "$13.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Entrée Fried Calamari",
        description: "Lightly fried calamari",
        price: "$14.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Entrée Salt & Pepper Fish Fillet",
        description: "Crispy salt & pepper fish",
        price: "$18.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Entrée Garlic Prawns or Prawn Fritters",
        description: "Choose garlic sauté or crispy fritters",
        price: "$14.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Entrée Salt & Pepper Whitebait",
        description: "Crispy whitebait",
        price: "$19.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Soups: [
      {
        name: "Chicken & Mushroom Soup",
        description: "Clear chicken broth with mushrooms",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Wonton Soup with BBQ Pork",
        description: "Pork wontons in broth, BBQ pork",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Noodle Soup with BBQ Pork",
        description: "Egg noodles in broth, BBQ pork",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken & Sweet Corn Soup",
        description: "Classic chicken and corn",
        price: "$12.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Crab & Sweet Corn Soup",
        description: "Crab meat and sweet corn",
        price: "$13.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Hot & Sour Seafood Soup",
        description: "Spicy and tangy seafood broth",
        price: "$13.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Combination Wonton Soup with Vegetables",
        description: "Mixed meats and vegetables with wontons",
        price: "$23.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Combination Noodle Soup with Vegetables",
        description: "Mixed meats and vegetables with noodles",
        price: "$23.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Tom Yum Chicken Soup (Small)",
        description: "Thai hot & sour chicken broth",
        price: "$12.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Tom Yum Chicken Soup (Large)",
        description: "Thai hot & sour chicken broth",
        price: "$17.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Tom Yum Prawn Soup (Small)",
        description: "Thai hot & sour prawn broth",
        price: "$19.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Tom Yum Prawn Soup (Large)",
        description: "Thai hot & sour prawn broth",
        price: "$23.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Seafood: [
      {
        name: "Thai Sweet Chilli Fish with Sweet Basil",
        description: "Wok-fried fillet, basil & sweet chilli",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sweet & Sour Fish",
        description: "Pickled vegetables & pineapple",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Salt & Pepper Calamari with Crispy Egg Noodles",
        description: "Crispy calamari over egg noodles",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Salt & Pepper Whitebait with Crispy Egg Noodles",
        description: "Crispy whitebait over egg noodles",
        price: "$31.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Combination Seafood with Vegetables",
        description: "Mixed seafood and seasonal veg",
        price: "$34.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Whole Barramundi (Thai Deep Fried or Cantonese Style)",
        description: "Choice of Thai fried or Cantonese prep",
        price: "$45.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Combination Seafood (Peking Sauce)",
        description: "Sizzling mixed seafood with vegetables",
        price: "$34.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Coral Trout Fillet with Vegetables",
        description: "Stir-fried coral trout and veg",
        price: "$34.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Salt & Pepper King Prawns with Crispy Egg Noodles",
        description: "Crispy prawns over egg noodles",
        price: "$37.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Tiger King Prawn with Shell (3 pcs)",
        description: "Steamed or deep fried",
        price: "$39.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised King Prawns (Satay Sauce)",
        description: "Satay sauce with vegetables",
        price: "$37.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Lightly Battered Honey King Prawns",
        description: "Honey-glazed crispy prawns",
        price: "$37.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Garlic King Prawns with Vegetables",
        description: "Garlic prawns on sizzling plate",
        price: "$37.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling King Prawns with Ginger, Shallots & Vegetables",
        description: "Ginger-shallot prawns on sizzle",
        price: "$37.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sweet & Sour King Prawns",
        description: "Pickled veg & pineapple",
        price: "$37.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Soft Shell Crab (Curry Sauce or Salt & Pepper)",
        description: "Your choice of curry or S&P",
        price: "$39.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Soft Shell Crab with Singaporean Chilli Sauce",
        description: "Singapore chilli-style sauce",
        price: "$39.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Grilled Salmon (Teriyaki or Black Pepper)",
        description: "Grilled fillet, choice of sauce",
        price: "$39.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised Scallops (Satay Sauce)",
        description: "With vegetables",
        price: "$39.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Lightly Battered Honey Scallops",
        description: "Honey-glazed crispy scallops",
        price: "$39.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Stir-Fried Scallops with Vegetables",
        description: "Classic stir-fry",
        price: "$39.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Scallops with Ginger, Shallots & Vegetables",
        description: "Sizzling ginger-shallot scallops",
        price: "$39.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sweet & Sour Scallops",
        description: "Pickled veg & pineapple",
        price: "$39.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Beef: [
      {
        name: "Braised Beef Fillets with Vegetables",
        description: "Tender beef and seasonal veg",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Beef Fillets with Black Bean Sauce & Vegetables",
        description: "Savoury black bean stir-fry",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Beef Fillets with House Satay Sauce & Vegetables",
        description: "Peanut satay beef",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Beef Fillets with Oyster Sauce & Shiitake Mushrooms",
        description: "Oyster sauce with mushrooms",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised Beef Fillets with Cashew Nuts & Vegetables",
        description: "Cashews and mixed veg",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Kung Po Beef (Dried Red Chilli & Cashew)",
        description: "Spicy-sweet Kung Po style",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Szechuan Beef Fillets (Mild or Hot)",
        description: "Szechuan chilli sauce",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Beef Fillets (Ginger, Shallots & Vegetables)",
        description: "Ginger-shallot on sizzling plate",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Beef Fillets (Garlic Sauce & Vegetables)",
        description: "Garlic beef on sizzling plate",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Mongolian Beef & Vegetables",
        description: "Sweet-savory Mongolian sauce",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Beef Hot Pot (Brown Bean Sauce & Vegetables)",
        description: "Claypot beef and veg",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Thai Green or Red Beef Curry",
        description: "Thai-style curry",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Creamy Milk Coconut Curry Melaka Beef",
        description: "Malaysian coconut curry",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Fillet Steak with Honey Pepper Sauce",
        description: "Tender fillet with honey-pepper glaze",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Fillet Steak in Cantonese Style",
        description: "Classic Cantonese prep",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Chicken: [
      {
        name: "Braised Chicken Breast Fillets with Vegetables",
        description: "Wok-braised with seasonal veg",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken Breast Fillets with Black Bean Sauce & Vegetables",
        description: "Savoury black bean sauce",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken Breast Fillets with Satay Sauce & Vegetables",
        description: "Peanut satay chicken",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken Breast Fillets with Oyster Sauce & Vegetables",
        description: "Oyster sauce stir-fry",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised Chicken Breast Fillets with Cashew Nuts & Vegetables",
        description: "Cashews and mixed veg",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Kung Po Chicken (Dried Red Chilli & Cashew)",
        description: "Spicy-sweet Kung Po style",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Szechuan Chicken Fillets (Mild or Hot)",
        description: "Szechuan chilli sauce",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Boneless Chicken Breast Fillets (Lemon or Honey Sauce)",
        description: "Crispy fillets, lemon or honey",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Chicken Breast Fillets (Ginger, Shallot & Vegetables)",
        description: "Sizzling ginger-shallot",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Chicken Breast Fillets (Garlic Sauce & Vegetables)",
        description: "Sizzling garlic chicken",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Chicken Breast (Black Pepper Sauce & Vegetables)",
        description: "Sizzling black pepper",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Chicken Breast Fillets (Peking Sauce & Vegetables)",
        description: "Sizzling Peking sauce",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sweet & Sour Breast Fillets",
        description: "Pickled veg & pineapple",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken Hot Pot (Brown Bean Sauce & Vegetables)",
        description: "Claypot chicken and veg",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Thai Green or Red Chicken Curry",
        description: "Thai-style curry",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised Basil Chicken with Vegetables",
        description: "Fragrant basil stir-fry",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Creamy Milk Coconut Curry Melaka Chicken",
        description: "Malaysian coconut curry",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Lamb: [
      {
        name: "Sizzling Mongolian Lamb with Vegetables",
        description: "Mongolian-style sauce",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Lamb Fillets (Ginger, Shallots & Vegetables)",
        description: "Ginger-shallot sizzling lamb",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Lamb Fillets (House Satay Sauce & Vegetables)",
        description: "Peanut satay lamb",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Lamb with Creamy Sauce & Vegetables",
        description: "Creamy sizzling lamb",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Deep Fried Lamb Fillets (House BBQ Sauce)",
        description: "Crispy lamb with BBQ sauce",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised Lamb Fillets with Vegetables",
        description: "Braised lamb and veg",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised Lamb Fillets with Black Bean Sauce & Vegetables",
        description: "Black bean style",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Pork: [
      {
        name: "Authentic Style Rainbow Pork Ribs",
        description: "Honey chilli, sesame",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sweet & Sour Pork",
        description: "Pickled veg & pineapple",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Stir-Fried Char Siew Pork with Vegetables",
        description: "BBQ pork stir-fry",
        price: "$28.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised Char Siew Pork (Plum Sauce & Pickles)",
        description: "Braised BBQ pork",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Peking Sauce Pork Ribs",
        description: "Pickled veg & pineapple",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Salt & Pepper Pork Spare Ribs",
        description: "Crispy salt & pepper ribs",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Duck: [
      {
        name: "Deep Fried Duck (Plum or Lemon Sauce)",
        description: "Crispy duck with your choice of sauce",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Fried Duck with Shiitake, Vegetables & Oyster Sauce",
        description: "Duck, shiitake and oyster sauce",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Deep Fried Duck with Combination Meats & Vegetables",
        description: "Crispy duck with mixed meats",
        price: "$34.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Westlake Duck with Crab Meat and Egg-White Sauce",
        description: "Classic Westlake-style",
        price: "$34.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Cantonese Style Roast Duck",
        description: "Traditional Cantonese roast",
        price: "$33.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Omelettes: [
      {
        name: "Plain Omelette",
        description: "Fluffy egg omelette",
        price: "$25.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Vegetarian Omelette",
        description: "Vegetable-filled omelette",
        price: "$25.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Char Siew Pork Omelette",
        description: "BBQ pork omelette",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken Omelette",
        description: "Diced chicken omelette",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Combination Omelette",
        description: "Mixed meats omelette",
        price: "$30.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "King Prawn Omelette",
        description: "Prawn-studded omelette",
        price: "$37.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Vegetarian: [
      {
        name: "Salt & Pepper Tofu with Crispy Egg Noodles",
        description: "Crispy tofu over egg noodles",
        price: "$25.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Tofu Goreng",
        description: "Hoisin, cucumber & bean sprouts",
        price: "$25.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Tofu, Shiitake & Vegetables Hot Pot",
        description: "Bean paste claypot",
        price: "$25.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Malaysian Chilli Tofu or Mapo Tofu",
        description: "Spicy tofu options",
        price: "$25.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Mixed Vegetables (Satay or Curry)",
        description: "Mild satay or curry",
        price: "$25.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chinese Greens (Garlic or Oyster Sauce)",
        description: "Seasonal greens",
        price: "$25.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Vegetarian Singapore Vermicelli",
        description: "Mild or hot",
        price: "$25.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Vegetarian Hokkien Mee Egg Noodles",
        description: "Wok-fried egg noodles",
        price: "$25.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Noodles: [
      {
        name: "Combination Curry Laksa (Noodles)",
        description: "Curry laksa with mixed meats",
        price: "$26.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Combination Chow Mein with Vegetables (Soft or Crispy)",
        description: "Mixed meats chow mein",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken or Beef Chow Mein with Vegetables (Soft or Crispy)",
        description: "Choice of chicken or beef",
        price: "$26.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Beef Ho Fun with Bean Sprouts",
        description: "Wok-fried flat rice noodles",
        price: "$26.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Ho Fun with Combination Meats & Vegetables (Egg Gravy)",
        description: "Flat rice noodles with egg gravy",
        price: "$26.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Hokkien Mee Egg Noodles (Combination)",
        description: "Diced prawns, chicken & vegetables",
        price: "$26.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Mee Goreng",
        description: "Egg noodles, tomato paste & curry leaves",
        price: "$26.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Ipoh Kway Teow Hawker Noodles",
        description: "Prawns, fishcake & BBQ pork",
        price: "$26.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Singapore Vermicelli Noodles",
        description: "Stir-fried vermicelli, mild to hot",
        price: "$26.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Thai Style Vermicelli (Tom Yum Flavour)",
        description: "Tom Yum seasoned vermicelli",
        price: "$26.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Rice: [
      {
        name: "Special Fried Rice",
        description: "House special fried rice",
        price: "$18.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Vegetable Fried Rice",
        description: "With seasonal vegetables",
        price: "$17.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Vegetarian Buddha Fried Rice",
        description: "Vegetarian-style fried rice",
        price: "$18.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Nasi Goreng (Sambal)",
        description: "Indonesian fried rice",
        price: "$19.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken or Beef Mince Fried Rice",
        description: "Choice of chicken or beef mince",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Salty Fish & Chicken Fried Rice",
        description: "Classic salty fish and chicken",
        price: "$24.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Hokkien Fried Rice",
        description: "Diced prawns, chicken & vegetables",
        price: "$25.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Steamed Rice (per person)",
        description: "Steamed jasmine rice",
        price: "$4.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Desserts: [
      {
        name: "Fresh Mango with Vanilla Ice Cream (Seasonal)",
        description: "Fresh mango & ice cream",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Lychees with Vanilla Ice Cream",
        description: "Lychee & ice cream",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Crème Brûlée with Vanilla Ice Cream",
        description: "Caramelized custard & ice cream",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Banana Fritter with Vanilla Ice Cream",
        description: "Crispy banana fritter & ice cream",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Fried Ice Cream with Topping",
        description: "Golden fried ice cream",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    "Gluten Free": [
      {
        name: "Sang Choi Bao – Lettuce Rolls (1)",
        description: "Minced filling in crisp lettuce cup",
        price: "$9.90",
        type: "Entrée",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Malaysian Satay Chicken Skewers (2)",
        description: "House satay with peanut sauce",
        price: "$10.90",
        type: "Entrée",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Entrée Fried Calamari",
        description: "Lightly fried calamari",
        price: "$13.90",
        type: "Entrée",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Entrée Salt & Pepper Fish Fillet",
        description: "Crispy salt & pepper fish",
        price: "$14.90",
        type: "Entrée",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Entrée Garlic Prawns",
        description: "Garlic sautéed prawns",
        price: "$18.90",
        type: "Entrée",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken & Mushroom Soup",
        description: "Clear chicken broth with mushrooms",
        price: "$10.90",
        type: "Soup",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "King Prawns with Chinese Gooseberry (Kiwi) Sauce",
        description: "Kiwi fruit sauce",
        price: "$29.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Scallops with Chinese Gooseberry (Kiwi) Sauce",
        description: "Kiwi fruit sauce",
        price: "$29.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Boneless Chicken Breast (Lemon or Honey)",
        description: "Crispy chicken with sauce choice",
        price: "$29.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken with Wood-Ear Fungus, Goji & Shaoxing",
        description: "Aromatic Chinese wine sauce",
        price: "$29.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Spicy Malaysian Butter Chicken",
        description: "Butter sauce with curry leaves",
        price: "$29.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Creamy Garlic Butter Sizzling Prawns",
        description: "Sizzling prawns in garlic butter",
        price: "$37.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Malaysian Chilli Prawns",
        description: "Sambal-style prawns",
        price: "$37.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Special Fried Rice",
        description: "House special fried rice",
        price: "$17.90",
        type: "Rice",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Thai Style Vermicelli (Tom Yum)",
        description: "Tom Yum seasoned vermicelli",
        price: "$25.90",
        type: "Noodle",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Singapore Fried Noodles",
        description: "Stir-fried vermicelli",
        price: "$25.90",
        type: "Noodle",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sweet & Sour Chicken",
        description: "House pickles & pineapple",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sweet & Sour King Prawns",
        description: "House pickles & pineapple",
        price: "$37.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sweet & Sour Scallops",
        description: "House pickles & pineapple",
        price: "$39.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Curry Chicken (Chinese or Thai Red/Green)",
        description: "Choice of curry style",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Curry Beef (Chinese or Thai Red/Green)",
        description: "Choice of curry style",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Curry Lamb (Chinese or Thai Red/Green)",
        description: "Choice of curry style",
        price: "$30.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Curry King Prawns (Chinese or Thai Red/Green)",
        description: "Choice of curry style",
        price: "$33.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Curry Scallops (Chinese or Thai Red/Green)",
        description: "Choice of curry style",
        price: "$37.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Garlic Chicken (or Ginger & Shallot)",
        description: "Choice of garlic or ginger-shallot",
        price: "$29.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Garlic Beef (or Ginger & Shallot)",
        description: "Choice of garlic or ginger-shallot",
        price: "$29.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Garlic Lamb (or Ginger & Shallot)",
        description: "Choice of garlic or ginger-shallot",
        price: "$33.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Garlic King Prawns (or Ginger & Shallot)",
        description: "Choice of garlic or ginger-shallot",
        price: "$37.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Garlic Scallops (or Ginger & Shallot)",
        description: "Choice of garlic or ginger-shallot",
        price: "$39.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "House Satay Chicken",
        description: "GF satay sauce",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "House Satay Beef",
        description: "GF satay sauce",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "House Satay Combination",
        description: "GF satay sauce, mixed meats",
        price: "$29.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "House Satay Lamb",
        description: "GF satay sauce",
        price: "$33.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "House Satay King Prawns",
        description: "GF satay sauce",
        price: "$37.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "House Satay Scallops",
        description: "GF satay sauce",
        price: "$39.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Melaka Chicken (Malaysian Coconut Curry)",
        description: "Coconut curry",
        price: "$29.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Melaka Beef (Malaysian Coconut Curry)",
        description: "Coconut curry",
        price: "$33.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Melaka Lamb (Malaysian Coconut Curry)",
        description: "Coconut curry",
        price: "$37.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Melaka King Prawns (Malaysian Coconut Curry)",
        description: "Coconut curry",
        price: "$39.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Melaka Scallops (Malaysian Coconut Curry)",
        description: "Coconut curry",
        price: "$39.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "GF Omelette - Plain or Vegetables",
        description: "GF omelette base",
        price: "$24.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "GF Omelette - Chicken",
        description: "Chicken omelette",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "GF Omelette - Beef",
        description: "Beef omelette",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "GF Omelette - King Prawns",
        description: "Prawn omelette",
        price: "$37.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "GF Omelette - Scallops",
        description: "Scallop omelette",
        price: "$39.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "GF Salt & Pepper Tofu",
        description: "Crispy salt & pepper tofu",
        price: "$24.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "GF Salt & Pepper Calamari",
        description: "Crispy salt & pepper calamari",
        price: "$29.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "GF Salt & Pepper King Prawns",
        description: "Crispy salt & pepper prawns",
        price: "$37.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "GF Salt & Pepper Scallops",
        description: "Crispy salt & pepper scallops",
        price: "$39.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "GF Singaporean Chilli Tofu (Sambal)",
        description: "Spicy sambal tofu",
        price: "$24.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "GF Singaporean Chilli King Prawns (Sambal)",
        description: "Spicy sambal prawns",
        price: "$37.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "GF Singaporean Chilli Scallops (Sambal)",
        description: "Spicy sambal scallops",
        price: "$39.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Drinks: [
      {
        name: "SPARKLING WINE & CHAMPAGNE",
        items: [
          {
            name: "Scorza Prosecco (King Valley, VIC)",
            price: "Glass $11.50 / Bottle $53.80",
          },
        ],
      },
      {
        name: "WHITE WINE",
        items: [
          {
            name: "Ted's Place Sauvignon Blanc (Wairarapa, NZ)",
            price: "Glass $11.00 / Bottle $48.80",
          },
          {
            name: "Sorby Adams 'Margret' Pinot Grigio (Eden Valley, SA)",
            price: "Bottle $48.80",
          },
          {
            name: "Sorby Adams 'Jellicoe' Riesling (Eden Valley, SA)",
            price: "Bottle $53.80",
          },
          {
            name: "Patritti Chardonnay (Adelaide Hills, SA)",
            price: "Bottle $48.80",
          },
          {
            name: "Brown Brothers Moscato (SA)",
            price: "Glass $11.00 / Bottle $53.80",
          },
        ],
      },
      {
        name: "RED WINE",
        items: [
          {
            name: "Ted's Place Merlot (Langhorne Creek, SA)",
            price: "Glass $11.00 / Bottle $48.80",
          },
          {
            name: "Sorby Adams 'Gudilly' Cabernet Sauvignon (Adelaide, SA)",
            price: "Glass $11.50 / Bottle $48.80",
          },
          {
            name: "Patritti 'Lavoro' Shiraz (McLaren Vale, SA)",
            price: "Glass $11.00 / Bottle $48.80",
          },
          {
            name: "Paddy Borthwick 'Paper Road' Pinot Noir (Wairarapa, NZ)",
            price: "Bottle $53.80",
          },
          {
            name: "Penfolds Bin 407 (SA)",
            price: "Bottle $288.00",
          },
          {
            name: "Penfolds Bin 389 (SA)",
            price: "Bottle $268.00",
          },
        ],
      },
      {
        name: "SAKE & SHOCHU SPIRIT",
        items: [
          {
            name: "Hakutsuru Junmai Tanrei Sake (30ml; cold or warm)",
            price: "$19.80",
          },
          {
            name: "Chinese Yellow Wine",
            price: "Glass $10.00 / Bottle $48.80",
          },
        ],
      },
      {
        name: "BEER ON TAP",
        items: [
          {
            name: "28 Pale Ale (4.8%)",
            price: "Pot $7.00 / Pint $11.50",
          },
          {
            name: "Burleigh Blonde (5.0%)",
            price: "Pot $7.00 / Pint $11.50",
          },
          {
            name: "Lay Day Lager (4.4%)",
            price: "Pot $7.00 / Pint $11.50",
          },
          {
            name: "Burleigh Twisted Palm Tropical Pale Ale (4.2%)",
            price: "Pot $7.00 / Pint $11.00",
          },
        ],
      },
      {
        name: "IMPORTED BEER",
        items: [
          {
            name: "Asahi Super Dry",
            price: "$11.00",
          },
          {
            name: "Tsingtao",
            price: "$11.00",
          },
          {
            name: "Lucky",
            price: "$11.00",
          },
          {
            name: "Heineken",
            price: "$11.00",
          },
          {
            name: "Guinness",
            price: "$11.00",
          },
          {
            name: "Corona",
            price: "$11.00",
          },
          {
            name: "Peroni",
            price: "$11.50",
          },
        ],
      },
      {
        name: "AUSTRALIAN BEER",
        items: [
          {
            name: "Burleigh Brewing",
            price: "$10.50",
          },
          {
            name: "Stone & Wood Pacific Ale",
            price: "$10.50",
          },
          {
            name: "Crown Lager",
            price: "$10.50",
          },
          {
            name: "Pure Blonde",
            price: "$10.50",
          },
          {
            name: "Coopers Pale Ale",
            price: "$10.50",
          },
          {
            name: "Toohey's Extra Dry",
            price: "$10.50",
          },
          {
            name: "Toohey's New",
            price: "$10.50",
          },
          {
            name: "Carlton Mid",
            price: "$10.50",
          },
          {
            name: "Victoria Bitter",
            price: "$10.50",
          },
          {
            name: "XXXX Gold",
            price: "$10.00",
          },
          {
            name: "XXXX Bitter",
            price: "$10.00",
          },
          {
            name: "Cascade Light",
            price: "$10.00",
          },
          {
            name: "Strongbow Cider",
            price: "$10.00",
          },
        ],
      },
      {
        name: "SPIRITS",
        items: [
          {
            name: "Grand Marnier",
            price: "$10.50",
          },
          {
            name: "Wild Turkey Bourbon",
            price: "$10.50",
          },
          {
            name: "Canadian Club",
            price: "$10.50",
          },
          {
            name: "Jack Daniel's",
            price: "$10.50",
          },
          {
            name: "Jameson",
            price: "$10.50",
          },
          {
            name: "Glenfiddich",
            price: "$10.50",
          },
          {
            name: "Malibu",
            price: "$10.50",
          },
          {
            name: "Smirnoff Vodka",
            price: "$10.50",
          },
          {
            name: "Gordon's Gin",
            price: "$10.50",
          },
          {
            name: "Bacardi White Rum",
            price: "$10.50",
          },
          {
            name: "Bundaberg Rum",
            price: "$10.50",
          },
          {
            name: "Sailor Jerry Spiced Rum",
            price: "$10.50",
          },
          {
            name: "Tequila",
            price: "$10.50",
          },
          {
            name: "Jim Beam",
            price: "$10.50",
          },
          {
            name: "Johnnie Walker Scotch",
            price: "$10.50",
          },
          {
            name: "Napoleon Brandy",
            price: "$10.50",
          },
          {
            name: "Ouzo",
            price: "$10.50",
          },
        ],
      },
      {
        name: "LIQUEURS",
        items: [
          {
            name: "Galliano (White)",
            price: "$10.00",
          },
          {
            name: "Cointreau",
            price: "$10.00",
          },
          {
            name: "Dom Benedictine",
            price: "$10.00",
          },
          {
            name: "Midori",
            price: "$10.00",
          },
          {
            name: "Kahlua",
            price: "$10.00",
          },
          {
            name: "Tia Maria",
            price: "$10.00",
          },
          {
            name: "Baileys",
            price: "$10.00",
          },
          {
            name: "Frangelico",
            price: "$10.00",
          },
          {
            name: "Southern Comfort",
            price: "$10.00",
          },
        ],
      },
      {
        name: "TEA",
        items: [
          {
            name: "Green / Oolong / Jasmine Tea (per person)",
            price: "$4.50",
          },
          {
            name: "Chrysanthemum / Black / Peppermint / English Black Tea (per pot)",
            price: "$6.00",
          },
        ],
      },
      {
        name: "COFFEE",
        items: [
          {
            name: "Flat White / Cappuccino / Latte",
            price: "$6.00",
          },
          {
            name: "Long Black",
            price: "$4.50",
          },
          {
            name: "Espresso",
            price: "$5.50",
          },
        ],
      },
      {
        name: "NON-ALCOHOLIC & SOFT DRINKS",
        items: [
          {
            name: "Soda Water / Tonic Water",
            price: "Small $6.00 / Large $10.00",
          },
          {
            name: "Coke / Diet Coke / Coke No Sugar",
            price: "Small $6.00 / Large $10.00",
          },
          {
            name: "Sprite / Lift / Fanta",
            price: "Small $6.00 / Large $10.00",
          },
          {
            name: "Bundaberg Ginger Beer",
            price: "$7.50",
          },
          {
            name: "Lemon Lime Bitters / Pink Lemonade",
            price: "$7.00",
          },
          {
            name: "Lemon Iced Tea / Peach Iced Tea",
            price: "$7.50",
          },
          {
            name: "Coconut Water",
            price: "$7.50",
          },
          {
            name: "San Pellegrino Sparkling Mineral Water",
            price: "$7.00",
          },
        ],
      },
    ],
  }

  const getFilteredItems = () => {
    if (activeCategory === "Drinks") {
      return menuItems["Drinks"]
    } else {
      return (menuItems[activeCategory as keyof typeof menuItems] as any) || []
    }
  }

  const filteredItems = getFilteredItems()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  const renderDrinkSection = (section: { name: string; items: { name: string; price: string }[] }, index: number) => (
    <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 mb-8" key={index}>
      <h3 className="text-xl font-bold text-white mb-4">{section.name}</h3>
      <div className="space-y-3">
        {section.items.map((item, idx: number) => (
          <div key={idx} className="flex justify-between">
            <span className="text-gray-300">{item.name}</span>
            <span className="text-white font-medium">{item.price}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )

  const renderFoodItem = (item: { name: string; description: string; price: string; type?: string; popular?: boolean }, index: number) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-wine-600/20 transition-all duration-300 group"
    >
      <div className="p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              {item.type && <span className="text-xs text-yellow-400">{item.type}</span>}
              {item.popular && (
                <span className="ml-2 text-xs bg-wine-600 text-white px-2 py-0.5 rounded-full">Popular</span>
              )}
            </div>
            <span className="text-white font-bold text-lg">{item.price}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-wine-600 transition-colors duration-300">
            {item.name}
          </h3>
          <p className="text-gray-400 mb-4">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )

  return (
    <>
      <div className="min-h-screen bg-black">
        <div className="h-[400px] relative">
          <div
            className="absolute inset-0 bg-black"
            style={{
              backgroundImage: "url('/hero.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.4)",
            }}
          />
          <Navbar />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Our Menu
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-wine-600 mx-auto"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category ? "bg-wine-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={activeCategory === "Drinks" ? "" : "grid grid-cols-1 md:grid-cols-2 gap-8"}
          >
            {activeCategory === "Drinks"
              ? (filteredItems as { name: string; items: { name: string; price: string }[] }[]).map((section, index) => renderDrinkSection(section, index))
              : (filteredItems as { name: string; description: string; price: string; type?: string; popular?: boolean }[]).map((item, index) => renderFoodItem(item, index))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
