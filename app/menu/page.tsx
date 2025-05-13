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
        name: "Prawns OR Scallops with Chinese Gooseberry (Kiwi) Fruit Sauce",
        description: "Served with shredded snow peas",
        price: "$17.90",
        type: "Entrée",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Prawn Fritters",
        description: "Lightly battered prawns with our special sauce",
        price: "$17.90",
        type: "Entrée",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Malaysian Curry Laksa (Noodle Soup)",
        description: "Rich coconut curry broth with noodles and your choice of protein",
        price: "$23.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Spicy Mapo Tofu with Minced Chicken",
        description: "Silky tofu in a spicy sauce with minced chicken",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Spicy Eggplant Hotpot with Mince Chicken",
        description: "Tender eggplant in a spicy sauce with minced chicken",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Teppan (Hot Plate) Tofu with Mince Chicken & Fried Eggs",
        description: "Sizzling tofu with minced chicken and fried eggs",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken with Wood-Ear Fungus, Goji Berries and Shaoxing Wine",
        description: "Tender chicken with wood-ear fungus, goji berries and Shaoxing wine",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Spicy Malaysian Butter Chicken",
        description: "With home-grown curry leaves",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Rendang Beef",
        description: "Slow-cooked beef in a rich, aromatic coconut sauce",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Kari Chicken - Authentic Malaysian Kari",
        description: "Chicken in an authentic Malaysian curry sauce",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Authentic Style Sweet & Sour Pork",
        description: "Crispy pork in our authentic sweet and sour sauce",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Garlic Combination",
        description: "Combination of meats and seafood in a rich garlic sauce",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Lemongrass Chicken with a Fusion of Sizzling Asian Spices",
        description: "Fragrant lemongrass chicken with Asian spices",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Rainbow Beef OR Pork (Honey Chilli) with Toasted Sesame Seeds",
        description: "Crispy beef or pork in honey chili sauce with toasted sesame seeds",
        price: "$30.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Pan-Fried Fillet Steak with House-Made Black Pepper Sauce OR Teriyaki Sauce",
        description: "Tender fillet steak with your choice of sauce",
        price: "$29.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Satay Delight (House-Made Satay Sauce) with Seasonal Vegetables",
        description: "Your choice of protein with our house-made satay sauce and seasonal vegetables",
        price: "$33.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Crispy Roast Duck with House-Made Plum Sauce",
        description: "Crispy roast duck served with our house-made plum sauce",
        price: "$35.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Creamy Garlic Butter Sizzling Prawns with Onions",
        description: "Sizzling prawns in a creamy garlic butter sauce with onions",
        price: "$35.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Malaysian Chilli Prawns with Seasonal Vegetables",
        description: "Prawns in a Malaysian chili sauce with seasonal vegetables",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
    ],
    Banquets: [
      {
        name: "Banquet A - Peking Duck (2-Courses)",
        description:
          "First Course: Pancakes with Crispy Duck Crackling served with house-made pickled vegetables, fresh shallots, and hoisin sauce. Second Course: Choose between Stir-Fried Duck Meat with Seasonal Vegetables OR Duck Meat Sang Choi Bao",
        price: "Half Duck – $49.90 / Full Duck – $89.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Banquet B (Minimum of 4 people)",
        description:
          "Chinese Tea Included. Starters: Deep Fried Mixed Entrée (Prawn toasts, Spring rolls, Curry puffs, Dim sims). Mains: Sizzling Garlic Prawns, Pan-Fried Beef Fillets with Seasonal Vegetables, Pan-Fried Chicken Breast with House-Made Lemon Sauce, Mongolian Lamb with House-Made Mongolian Sauce, Special Fried Rice. Dessert: Banana Fritter with Vanilla Ice Cream",
        price: "$54.99 per person",
        image: "/your-image.jpg",
        popular: true,
      },
    ],
    Entrées: [
      {
        name: "Mixed Entrees",
        description: "Prawn Toast, Spring Rolls, Curry Puffs, Dim Sims",
        price: "$12.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Spring Rolls",
        description: "3 Pieces",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Dim Sims - Steamed OR Deep Fried",
        description: "3 Pieces",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Prawn Toasts",
        description: "2 Pieces",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Curry Puffs",
        description: "3 Pieces",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Fried Wonton",
        description: "6 Pieces",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sang Choi Bao - Lettuce Rolls",
        description: "1 Piece",
        price: "$8.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Malaysian Satay Chicken Skewers",
        description: "2 Pieces",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Salt & Pepper Quail in 'Miami Rice' Marinade",
        description: "Crispy quail in our special marinade",
        price: "$13.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Scallop Fritters",
        description: "Lightly battered scallops",
        price: "$16.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Entree Fried Calamari",
        description: "Lightly battered calamari",
        price: "$10.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Entree Salt & Pepper Fish Fillet",
        description: "Crispy fish fillet with salt and pepper seasoning",
        price: "$13.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Entree Garlic Prawns",
        description: "Prawns in a rich garlic sauce",
        price: "$16.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Entree Salt & Pepper White Bait",
        description: "Crispy white bait with salt and pepper seasoning",
        price: "$13.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Soups: [
      {
        name: "Chicken & Mushroom Soup",
        description: "Classic chicken and mushroom soup",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Wonton OR Noodle Soup with House-Made BBQ Pork",
        description: "Your choice of wonton or noodle soup with house-made BBQ pork",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Chicken & Sweet Corn Soup",
        description: "Creamy chicken and sweet corn soup",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Crab & Sweet Corn Soup",
        description: "Creamy crab and sweet corn soup",
        price: "$11.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Hot & Sour Seafood Soup",
        description: "Spicy and sour soup with seafood",
        price: "$12.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Combination Wonton OR Noodle Soup with Seasonal Vegetables",
        description: "Your choice of wonton or noodle soup with a combination of meats and seasonal vegetables",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Tom Yum Chicken Soup",
        description: "With Kaffir Lime Leaves, Lemongrass & Ginger Flower",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Tom Yum Prawn Soup",
        description: "With Kaffir Lime Leaves, Lemongrass & Ginger Flower",
        price: "$29.90",
        image: "/your-image.jpg",
        popular: true,
      },
    ],
    Seafood: [
      {
        name: "Thai Sweet Chilli Fish with Sweet Basil",
        description: "Fish in a Thai sweet chili sauce with sweet basil",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sweet & Sour Fish with Pickled Vegetables & Pineapples",
        description: "Fish in sweet and sour sauce with pickled vegetables and pineapples",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Combination Seafood with Seasonal Vegetables",
        description: "Assortment of seafood with seasonal vegetables",
        price: "$32.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Salt & Pepper Whole Sole Fish",
        description: "Whole sole fish with salt and pepper seasoning",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Salt & Pepper Calamari with Crispy Egg Noodles",
        description: "Crispy calamari with salt and pepper seasoning served with crispy egg noodles",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Salt & Pepper Whitebait with Crispy Egg Noodles",
        description: "Crispy whitebait with salt and pepper seasoning served with crispy egg noodles",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Salt & Pepper King Prawns with Crispy Egg Noodles",
        description: "Crispy king prawns with salt and pepper seasoning served with crispy egg noodles",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Sizzling Combination Seafood with Peking Sauce & Vegetables",
        description: "Sizzling assortment of seafood in Peking sauce with vegetables",
        price: "$32.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "King Prawns with Cashew Nuts & Vegetables",
        description: "King prawns with cashew nuts and vegetables",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sambal King Prawns with Onions",
        description: "King prawns in sambal sauce with onions (Mild or Hot)",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Wasabi King Prawns with Pickled Vegetables & Pineapple",
        description: "King prawns with wasabi, pickled vegetables, and pineapple (Mild)",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised King Prawns OR Scallops with Satay Sauce & Vegetables",
        description: "Your choice of king prawns or scallops in satay sauce with vegetables",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Lightly Battered Honey King Prawns OR Scallops",
        description: "Lightly battered king prawns or scallops in honey sauce",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Stir-Fried King Prawns OR Scallops with Seasonal Vegetables",
        description: "Stir-fried king prawns or scallops with seasonal vegetables",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Garlic King Prawns OR Scallops with Seasonal Vegetables",
        description: "Sizzling king prawns or scallops in garlic sauce with seasonal vegetables",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Sizzling King Prawns OR Scallops with Ginger, Shallots & Vegetables",
        description: "Sizzling king prawns or scallops with ginger, shallots, and vegetables",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sweet & Sour King Prawns OR Scallops with Pickled Vegetables",
        description: "King prawns or scallops in sweet and sour sauce with pickled vegetables",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Soft Shell Crab with Curry Sauce",
        description: "Soft shell crab in curry sauce",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Grilled Salmon with Teriyaki Sauce",
        description: "Grilled salmon with teriyaki sauce",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: true,
      },
    ],
    Beef: [
      {
        name: "Braised Beef Fillets with Seasonal Vegetables",
        description: "Tender beef fillets with seasonal vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Beef Fillets with Black Bean Sauce & Vegetables",
        description: "Beef fillets in black bean sauce with vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Beef Fillets with House-Made Satay Sauce & Vegetables",
        description: "Beef fillets in house-made satay sauce with vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Beef Fillets with Oyster Sauce & Shiitake Mushrooms",
        description: "Beef fillets in oyster sauce with shiitake mushrooms",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised Beef Fillets with Roasted Cashew Nuts & Vegetables",
        description: "Braised beef fillets with roasted cashew nuts and vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Beef Fillets with Ginger, Shallots & Vegetables",
        description: "Sizzling beef fillets with ginger, shallots, and vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Beef Fillets with Garlic Sauce & Vegetables",
        description: "Sizzling beef fillets in garlic sauce with vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Sizzling Mongolian Beef & Vegetables",
        description: "Sizzling beef in Mongolian sauce with vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Kung Po Beef with Dried Red Chilli & Roasted Cashew Nuts",
        description: "Spicy beef with dried red chili and roasted cashew nuts",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Szechuan Beef Fillets with Seasonal Vegetables",
        description: "Beef fillets in Szechuan sauce with seasonal vegetables (Mild or Hot)",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Beef Hot Pot with Brown Bean Sauce & Seasonal Vegetables",
        description: "Beef hot pot with brown bean sauce and seasonal vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Thai Green or Red Beef Curry",
        description: "Beef in Thai green or red curry sauce",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Creamy Milk Coconut Curry Melaka Beef",
        description: "Beef in creamy coconut curry sauce",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Chicken: [
      {
        name: "Braised Chicken Breast Fillets with Seasonal Vegetables",
        description: "Tender chicken breast fillets with seasonal vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken Breast Fillets with Black Bean Sauce & Vegetables",
        description: "Chicken breast fillets in black bean sauce with vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Chicken Breast Fillets with Black Pepper Sauce & Vegetables",
        description: "Chicken breast fillets in black pepper sauce with vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken Breast Fillets with House-Made Satay Sauce & Vegetables",
        description: "Chicken breast fillets in house-made satay sauce with vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Chicken Breast Fillets with Oyster Sauce & Vegetables",
        description: "Chicken breast fillets in oyster sauce with vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Boneless Chicken Breast Fillets with Lemon / Mango / Honey Sauce",
        description: "Boneless chicken breast fillets with your choice of sauce",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Braised Chicken Breast Fillets with Cashew Nuts & Vegetables",
        description: "Braised chicken breast fillets with cashew nuts and vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Chicken Breast Fillets with Ginger, Shallots & Vegetables",
        description: "Sizzling chicken breast fillets with ginger, shallots, and vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Chicken Breast Fillets with Garlic Sauce & Vegetables",
        description: "Sizzling chicken breast fillets in garlic sauce with vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Sizzling Chicken Breast Fillets with Peking Sauce & Vegetables",
        description: "Sizzling chicken breast fillets in Peking sauce with vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sweet & Sour Breast Fillets with Pickled Vegetables & Pineapples",
        description: "Chicken breast fillets in sweet and sour sauce with pickled vegetables and pineapples",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Kung Po Chicken with Dried Red Chilli & Roasted Cashew Nuts",
        description: "Spicy chicken with dried red chili and roasted cashew nuts",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Szechuan Chicken Fillets with Seasonal Vegetables",
        description: "Chicken fillets in Szechuan sauce with seasonal vegetables (Mild or Hot)",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chicken Hot Pot with Brown Bean Sauce & Seasonal Vegetables",
        description: "Chicken hot pot with brown bean sauce and seasonal vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Thai Green or Red Chicken Curry",
        description: "Chicken in Thai green or red curry sauce",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Creamy Milk Coconut Curry Melaka Chicken",
        description: "Chicken in creamy coconut curry sauce",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Lamb: [
      {
        name: "Sizzling Mongolian Lamb with Vegetables",
        description: "Sizzling lamb in Mongolian sauce with vegetables",
        price: "$31.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Sizzling Lamb Fillets with Ginger Shallots & Vegetables",
        description: "Sizzling lamb fillets with ginger, shallots, and vegetables",
        price: "$31.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Sizzling Lamb Fillets with House-Made Satay Sauce & Vegetables",
        description: "Sizzling lamb fillets in house-made satay sauce with vegetables",
        price: "$31.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Sizzling Lamb with Green Pepper Corn Creamy Sauce & Vegetables",
        description: "Sizzling lamb in green peppercorn creamy sauce with vegetables",
        price: "$31.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Deep Fried Lamb Fillets with House-Made BBQ Sauce",
        description: "Deep-fried lamb fillets with house-made BBQ sauce",
        price: "$31.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised Lamb Fillets with Vegetables",
        description: "Braised lamb fillets with vegetables",
        price: "$31.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised Lamb Fillets with Black Bean Sauce & Vegetables",
        description: "Braised lamb fillets in black bean sauce with vegetables",
        price: "$31.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Pork: [
      {
        name: "Authentic Style Sweet & Sour Pork",
        description: "Crispy pork in our authentic sweet and sour sauce",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Sweet & Sour Pork with Pickled Vegetables & Pineapples",
        description: "Pork in sweet and sour sauce with pickled vegetables and pineapples",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Stir-Fried Char Siew Pork with Vegetables",
        description: "Stir-fried BBQ pork with vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Braised Char Siew Pork with Plum Sauce & Pickled Vegetables",
        description: "Braised BBQ pork with plum sauce and pickled vegetables",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Peking Sauce Pork Spare Ribs with Pickled Vegetables & Pineapples",
        description: "Pork spare ribs in Peking sauce with pickled vegetables and pineapples",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Salt & Pepper Pork Spare Ribs",
        description: "Crispy pork spare ribs with salt and pepper seasoning",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
    ],
    Duck: [
      {
        name: "Deep Fried Duck with Plum / Mango / Lemon Sauce",
        description: "Deep-fried duck with your choice of sauce",
        price: "$31.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Deep Fried Duck with Shiitake Mushrooms, Vegetables & Oyster Sauce",
        description: "Deep-fried duck with shiitake mushrooms, vegetables, and oyster sauce",
        price: "$31.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Deep Fried Duck with Combination Meats & Vegetables",
        description: "Deep-fried duck with a combination of meats and vegetables",
        price: "$31.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Westlake Duck with Crab Meat and Egg-White Sauce",
        description: "Duck with crab meat in egg-white sauce",
        price: "$31.90",
        image: "/your-image.jpg",
        popular: true,
      },
    ],
    Omelettes: [
      {
        name: "Plain Omelette",
        description: "Classic plain omelette",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Vegetarian Omelette",
        description: "Omelette with mixed vegetables",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Char Siew Pork Omelette",
        description: "Omelette with BBQ pork",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Chicken Omelette",
        description: "Omelette with chicken",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Combination Omelette",
        description: "Omelette with a combination of meats",
        price: "$27.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "King Prawn Omelette",
        description: "Omelette with king prawns",
        price: "$35.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Vegetarian: [
      {
        name: "Salt & Pepper Tofu with Crispy Egg Noodles",
        description: "Crispy tofu with salt and pepper seasoning served with crispy egg noodles",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Tofu Goreng with Hoisin Sauce, Cucumber & Bean Sprouts",
        description: "Fried tofu with hoisin sauce, cucumber, and bean sprouts",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Tofu, Shiitake Mushrooms & Vegetables Hot Pot with Brown Bean Paste",
        description: "Tofu, shiitake mushrooms, and vegetables in a hot pot with brown bean paste",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Malaysian Chilli Tofu with Snow Peas",
        description: "Tofu in Malaysian chili sauce with snow peas",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Vegetarian Delight with Goji Berries, Wood-Ear Fungus & Cashew Nuts",
        description: "Mixed vegetables with goji berries, wood-ear fungus, and cashew nuts",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Mixed Vegetables with Satay OR Curry",
        description: "Mixed vegetables in satay or curry sauce (Mild)",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Chinese Green Vegetables with Garlic OR Oyster Sauce",
        description: "Chinese green vegetables with your choice of sauce",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Vegetarian Singapore Vermicelli Noodles",
        description: "Singapore-style vermicelli noodles with vegetables (Mild or Hot)",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Vegetarian Hokkien Mee Egg Noodles",
        description: "Hokkien-style egg noodles with vegetables",
        price: "$22.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Noodles: [
      {
        name: "Combination Chow Mein with Vegetables",
        description: "Chow mein noodles with a combination of meats and vegetables (Soft OR Crispy)",
        price: "$24.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Chicken OR Beef Chow Mein with Vegetables",
        description: "Chow mein noodles with your choice of protein and vegetables (Soft OR Crispy)",
        price: "$24.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Beef Ho Fun with Bean Sprouts",
        description: "Flat rice noodles with beef and bean sprouts",
        price: "$24.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Ho Fun with Combination Meats & Vegetables in Egg Gravy Sauce",
        description: "Flat rice noodles with a combination of meats and vegetables in egg gravy sauce",
        price: "$24.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Hokkien Mee Egg Noodles with Combination Meats & Vegetables in Oyster Soya Sauce",
        description: "Hokkien-style egg noodles with a combination of meats and vegetables in oyster soya sauce",
        price: "$24.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Mee Goreng with Egg Noodles, Tomato Paste & Curry Leaves",
        description: "Malaysian-style fried egg noodles with tomato paste and curry leaves",
        price: "$24.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Ipoh Kway Teow Hawker Noodles",
        description: "Ipoh-style flat rice noodles with sausages, pork crisps, prawns, fishcake, and BBQ pork",
        price: "$24.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Singapore Vermicelli Noodles",
        description: "Singapore-style vermicelli noodles (Mild to Hot)",
        price: "$24.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Thai Style Vermicelli Noodles with Tom Yum Flavouring",
        description: "Thai-style vermicelli noodles with Tom Yum flavoring",
        price: "$24.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Rice: [
      {
        name: "Special Fried Rice",
        description: "Fried rice with a combination of meats and vegetables",
        price: "$16.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Vegetable Fried Rice",
        description: "Fried rice with mixed vegetables",
        price: "$16.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Vegetarian Buddha Fried Rice",
        description: "Vegetarian fried rice with a variety of vegetables",
        price: "$17.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Nasi Goreng Cooked with Sambal Sauce",
        description: "Malaysian-style fried rice cooked with sambal sauce",
        price: "$19.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Chicken OR Beef Mince Fried Rice",
        description: "Fried rice with your choice of minced chicken or beef",
        price: "$21.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Salty Fish & Chicken Fried Rice",
        description: "Fried rice with salty fish and chicken",
        price: "$23.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Hokkien Fried Rice with Diced Prawns, Chicken & Vegetables",
        description: "Hokkien-style fried rice with diced prawns, chicken, and vegetables",
        price: "$24.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Steamed Rice",
        description: "Per Person",
        price: "$3.90",
        image: "/your-image.jpg",
        popular: false,
      },
    ],
    Desserts: [
      {
        name: "Fresh Mango with Vanilla Ice Cream",
        description: "Fresh mango served with vanilla ice cream (Seasonal)",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Lychees with Vanilla Ice Cream",
        description: "Lychees served with vanilla ice cream",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Crème Brûlée with Vanilla Ice Cream",
        description: "Classic crème brûlée served with vanilla ice cream",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Banana Fritter with Vanilla Ice Cream",
        description: "Banana fritter served with vanilla ice cream",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Fried Ice Cream with Topping",
        description: "Fried ice cream with your choice of topping",
        price: "$9.90",
        image: "/your-image.jpg",
        popular: true,
      },
    ],
    "Gluten Free": [
      {
        name: "Sang Choi Bao - Lettuce Rolls",
        description: "1 Piece",
        price: "$8.90",
        type: "Entrée",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Malaysian Satay Chicken Skewers",
        description: "2 Pieces",
        price: "$9.90",
        type: "Entrée",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Entree Fried Calamari",
        description: "Lightly battered calamari",
        price: "$10.90",
        type: "Entrée",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Entree Salt & Pepper Fish Fillet",
        description: "Crispy fish fillet with salt and pepper seasoning",
        price: "$12.90",
        type: "Entrée",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Entree Garlic Prawns",
        description: "Prawns in a rich garlic sauce",
        price: "$16.90",
        type: "Entrée",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Chicken & Mushroom Soup",
        description: "Classic chicken and mushroom soup",
        price: "$9.90",
        type: "Soup",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Boneless Chicken Breast Fillet with Lemon / Mango / Honey Sauce",
        description: "Boneless chicken breast fillets with your choice of sauce",
        price: "$27.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Chicken with Wood-Ear Fungus, Goji Berries & Shaoxing Wine",
        description: "Tender chicken with wood-ear fungus, goji berries, and Shaoxing wine",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Spicy Malaysian Butter Chicken with Home-Grown Curry Leaves, Egg Yolk, and Spices",
        description: "Chicken in a spicy Malaysian butter sauce with curry leaves, egg yolk, and spices",
        price: "$28.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Creamy Garlic Butter Sizzling Prawns with Onions",
        description: "Sizzling prawns in a creamy garlic butter sauce with onions",
        price: "$35.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Malaysian Chilli Prawns with Seasonal Vegetables",
        description: "Prawns in a Malaysian chili sauce with seasonal vegetables",
        price: "$35.90",
        type: "Main",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Special Fried Rice",
        description: "Fried rice with a combination of meats and vegetables",
        price: "$16.90",
        type: "Rice",
        image: "/your-image.jpg",
        popular: true,
      },
      {
        name: "Thai Style Vermicelli Noodles with Tom Yum Flavouring",
        description: "Thai-style vermicelli noodles with Tom Yum flavoring",
        price: "$24.90",
        type: "Noodle",
        image: "/your-image.jpg",
        popular: false,
      },
      {
        name: "Singapore Fried Noodles",
        description: "Singapore-style fried noodles",
        price: "$24.90",
        type: "Noodle",
        image: "/your-image.jpg",
        popular: true,
      },
    ],
    Drinks: [
      {
        name: "SPARKLING WINE & CHAMPAGNE",
        items: [
          {
            name: "Zontes Footstep - Mclaren Vale, SA",
            price: "$9.00 (Glass) / $39.90 (Bottle)",
          },
          {
            name: "Costanzo & Sons Sparkling - Strathbogie Ranges, VIC",
            price: "$57.90",
          },
          {
            name: "Champagne Bernard Remy Carte Blanche - France",
            price: "$99.90",
          },
        ],
      },
      {
        name: "WHITE WINE",
        items: [
          {
            name: "Teds Place Sauvignon Blanc - Wairarapa, NZ",
            price: "$9.00 / $39.90",
          },
          {
            name: "Elysian Springs Sauvignon Blanc - Adelaide Hills, SA",
            price: "$42.90",
          },
          {
            name: "Paddy Borthwick Sauvignon Blanc - Wairarapa, NZ",
            price: "$52.90",
          },
          {
            name: "Elysian Springs Chardonnay - Adelaide Hills, SA",
            price: "$39.90",
          },
          {
            name: "Dusk Til Dawn Chardonnay - Adelaide Hills, SA",
            price: "$52.90",
          },
          {
            name: "Brown Brothers Moscato - Rowella, TAS",
            price: "$45.90",
          },
          {
            name: "Patritti Chardonnay, Adelaide Hills, SA",
            price: "$39.90",
          },
          {
            name: "Jeanneret Riesling - Clare Valley, SA",
            price: "$39.90",
          },
          {
            name: "Sfera Pinot Grigio - Lime Stone Coast, SA",
            price: "$42.90",
          },
        ],
      },
      {
        name: "RED WINE",
        items: [
          {
            name: "Teds Place Merlot - Langhorne Creek, SA",
            price: "$9.00 / $39.90",
          },
          {
            name: "Paper Road Pinot Noir - Wairarapa, NZ",
            price: "$46.90",
          },
          {
            name: "Paddy Borthwick Pinot Noir - Wairarapa, NZ",
            price: "$65.90",
          },
          {
            name: "Zontes Footstep Lake Doctor Shiraz - Mclaren Vale, SA",
            price: "$39.90",
          },
          {
            name: "Sfera Cabernet - Lime Stone Coast, SA",
            price: "$45.90",
          },
          {
            name: "Penfolds Cabernet Sauvignon Bin 407",
            price: "$228.00",
          },
          {
            name: "Penfolds Cabernet Shiraz Bin 389",
            price: "$228.00",
          },
        ],
      },
      {
        name: "SAKE & SHOCHU SPIRIT",
        items: [
          {
            name: "Hakutsuri Junmai Tanrei (Cold or Warm Sake)",
            price: "$18.00",
          },
          {
            name: "Chinese Yellow Wine",
            price: "$45.90",
          },
          {
            name: "Sake Shot",
            price: "$9.00",
          },
        ],
      },
      {
        name: "BEER ON TAP",
        items: [
          {
            name: "28 Pale Ale (4.8%)",
            price: "$6.50 (Pot) / $11.00 (Pint)",
          },
          {
            name: "Burleigh Blonde (5.0%)",
            price: "$11.00",
          },
          {
            name: "Lay Day (4.4%)",
            price: "$11.00",
          },
          {
            name: "Burleigh Twisted Palm (4.2%)",
            price: "$10.00",
          },
        ],
      },
      {
        name: "IMPORTED BEER",
        items: [
          {
            name: "Asahi Super Dry",
            price: "$10.00",
          },
          {
            name: "Tsingtao",
            price: "$10.00",
          },
          {
            name: "Lucky Beer",
            price: "$10.00",
          },
          {
            name: "Heineken",
            price: "$10.00",
          },
          {
            name: "Guinness",
            price: "$10.00",
          },
          {
            name: "Corona",
            price: "$10.00",
          },
          {
            name: "Peroni",
            price: "$11.00",
          },
        ],
      },
      {
        name: "AUSTRALIAN BEER",
        items: [
          {
            name: "Burleigh Brewing",
            price: "$9.50",
          },
          {
            name: "Stone & Wood Pacific Ale",
            price: "$9.50",
          },
          {
            name: "Crown Lager",
            price: "$9.50",
          },
          {
            name: "Pure Blonde",
            price: "$9.50",
          },
          {
            name: "Coopers Pale Ale",
            price: "$9.50",
          },
          {
            name: "Toohey's Extra Dry",
            price: "$9.00",
          },
          {
            name: "Toohey's New",
            price: "$9.00",
          },
          {
            name: "Carlton Mid",
            price: "$9.00",
          },
          {
            name: "Victoria Bitter",
            price: "$9.00",
          },
          {
            name: "XXXX Gold",
            price: "$9.00",
          },
          {
            name: "XXXX Bitter",
            price: "$9.00",
          },
          {
            name: "Cascade Light",
            price: "$8.50",
          },
          {
            name: "Strongbow Cider",
            price: "$8.50",
          },
        ],
      },
      {
        name: "SPIRITS",
        items: [
          {
            name: "Grand Marnier",
            price: "$9.50",
          },
          {
            name: "Wild Turkey Bourbon",
            price: "$9.50",
          },
          {
            name: "Canadian Club",
            price: "$9.50",
          },
          {
            name: "Jack Daniels",
            price: "$9.50",
          },
          {
            name: "Jameson",
            price: "$9.50",
          },
          {
            name: "Glenfiddich",
            price: "$9.50",
          },
          {
            name: "Malibu",
            price: "$9.50",
          },
          {
            name: "Smirnoff Vodka",
            price: "$9.50",
          },
          {
            name: "Gordon's Gin",
            price: "$9.50",
          },
          {
            name: "Bacardi White Rum",
            price: "$9.50",
          },
          {
            name: "Bundaberg Rum",
            price: "$9.50",
          },
          {
            name: "Sailor Jerry Spiced Rum",
            price: "$9.50",
          },
          {
            name: "Tequila",
            price: "$9.50",
          },
          {
            name: "Jim Beam",
            price: "$9.50",
          },
          {
            name: "Johnny Walker Scotch",
            price: "$9.50",
          },
          {
            name: "Napoleon Brandy",
            price: "$9.50",
          },
          {
            name: "Oyzo",
            price: "$9.50",
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
            name: "Green Tea",
            price: "$4.00",
          },
          {
            name: "Oolong Tea",
            price: "$4.00",
          },
          {
            name: "Jasmine Tea",
            price: "$4.00",
          },
          {
            name: "Chrysanthemum Tea",
            price: "$5.50",
          },
          {
            name: "Black Tea",
            price: "$5.50",
          },
          {
            name: "Peppermint Tea",
            price: "$5.50",
          },
          {
            name: "English Black Tea (Per Pot)",
            price: "$5.50",
          },
        ],
      },
      {
        name: "COFFEE",
        items: [
          {
            name: "Flat White",
            price: "$5.50",
          },
          {
            name: "Cappuccino",
            price: "$5.50",
          },
          {
            name: "Latte",
            price: "$5.50",
          },
          {
            name: "Long Black",
            price: "$5.50",
          },
          {
            name: "Espresso",
            price: "$4.00",
          },
        ],
      },
      {
        name: "NON-ALCOHOLIC & SOFT DRINKS",
        items: [
          {
            name: "Soda Water, Tonic Water",
            price: "$5.50",
          },
          {
            name: "Coke, Diet Coke, Coke No Sugar",
            price: "$5.50",
          },
          {
            name: "Sprite, Lift, Fanta",
            price: "$5.50",
          },
          {
            name: "Bundaberg Ginger Beer",
            price: "$7.00",
          },
          {
            name: "Lemon Lime Bitters, Pink Lemonade",
            price: "$6.50",
          },
          {
            name: "Lemon Iced Tea, Peach Iced Tea",
            price: "$7.00",
          },
          {
            name: "Coconut Water",
            price: "$7.50",
          },
          {
            name: "San Pellegrino Sparkling Mineral Water",
            price: "SMALL $6.50 / LARGE $9.50",
          },
        ],
      },
    ],
  }

  const getFilteredItems = () => {
    if (activeCategory === "Drinks") {
      return menuItems["Drinks"]
    } else {
      return menuItems[activeCategory] || []
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

  const renderDrinkSection = (section: any, index: any) => (
    <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 mb-8" key={index}>
      <h3 className="text-xl font-bold text-white mb-4">{section.name}</h3>
      <div className="space-y-3">
        {section.items.map((item: any, idx: any) => (
          <div key={idx} className="flex justify-between">
            <span className="text-gray-300">{item.name}</span>
            <span className="text-white font-medium">{item.price}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )

  const renderFoodItem = (item: any, index: any) => (
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
              ? filteredItems.map((section, index) => renderDrinkSection(section, index))
              : filteredItems.map((item, index) => renderFoodItem(item, index))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
