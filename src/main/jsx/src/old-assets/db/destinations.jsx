import atvTourPdf from "old-assets/db/pdf/atv-tour.pdf";
import cahuitaPdf from "old-assets/db/pdf/cahuita.pdf";
import chicharroneraPdf from "old-assets/db/pdf/chicharronera.pdf";
import cityTourPdf from "old-assets/db/pdf/city-tour.pdf";
import comboTourPdf from "old-assets/db/pdf/combo-tour.pdf";
import hopOnHopOffPdf from "old-assets/db/pdf/hopOn-hopOff.pdf";
import irazuVolcanoPdf from "old-assets/db/pdf/irazu-volcano.pdf";
import jacoBeachPdf from "old-assets/db/pdf/jaco-beach.pdf";
import manuelAntonioPdf from "old-assets/db/pdf/manuel-antonio.pdf";
import okcatamaranPdf from "old-assets/db/pdf/okcatamaran.pdf";
import pacuareRiverPdf from "old-assets/db/pdf/pacuare-river.pdf";
import raftingGrandeOrosiPdf from "old-assets/db/pdf/rafting-grande-orosi.pdf";
import rainforestPdf from "old-assets/db/pdf/rainforest-adventure.pdf";
import rainforestAerialTramPdf from "old-assets/db/pdf/rainforest-aerial-tram.pdf";
import ramLunaPdf from "old-assets/db/pdf/ram-luna.pdf";
import theBestPacificPdf from "old-assets/db/pdf/the-best-pacific.pdf";
import tortugueroPdf from "old-assets/db/pdf/tortuguero.pdf";
import bayIslandPdf from "old-assets/db/pdf/bay-island.pdf";
import calypsoPdf from "old-assets/db/pdf/calypso.pdf";
import sanLucasPdf from "old-assets/db/pdf/san-lucas.pdf";

import atvTour from "old-assets/img/destinations/sjo/atv-tour.jpg";
import bayIsland from "old-assets/img/destinations/sjo/bay-island.jpg";
import cahuita from "old-assets/img/destinations/sjo/cahuita.jpg";
import calypso from "old-assets/img/destinations/sjo/calypso.jpg";
import chicharronera from "old-assets/img/destinations/sjo/chicharronera.jpg";
import cityTour from "old-assets/img/destinations/sjo/city-tour.jpg";
import comboTourImg from "old-assets/img/destinations/sjo/combo-tour.jpg";
import hopOnHopOff from "old-assets/img/destinations/sjo/hopOn-hopOff.jpg";
import irazuVolcano from "old-assets/img/destinations/sjo/irazu-volcano.jpg";
import jacoBeach from "old-assets/img/destinations/sjo/jaco-beach.jpg";
import manuelAntonioImg from "old-assets/img/destinations/sjo/manuel-antonio.jpg";
import okcatamaran from "old-assets/img/destinations/sjo/okcatamaran.jpg";
import raftingGrandeOrosi from "old-assets/img/destinations/sjo/rafting-grande-orosi.jpg";
import rafting from "old-assets/img/destinations/sjo/rafting.jpg";
import rainForest from "old-assets/img/destinations/sjo/rain-forest.jpg";
import rainforestAerialTram from "old-assets/img/destinations/sjo/rainforest-aerial-tram.jpg";
import ramLuna from "old-assets/img/destinations/sjo/ram-luna.jpg";
import sanLucas from "old-assets/img/destinations/sjo/san-lucas.jpg";
import theBestPacific from "old-assets/img/destinations/sjo/the-best-pacific.jpg";
import tortuguero from "old-assets/img/destinations/sjo/tortuguero.jpg";

const destinations = new Map();

destinations.set("sjo", {
  name: "San José Downtown",
  description:
    "San José is full of interesting museums, theaters and historical buildings with a multitude of cultural activities. Its modern and active lifestyle is evident, as numerous hotels, shops, galleries, restaurants, internet lounges, bars and clubs are located around the city.",
  tours: [
    {
      title: "Combo Tour | Poás - Doka - La Paz",
      price: "$120",
      image: comboTourImg,
      pdf: comboTourPdf,
      more: [
        "Duration: 11 hours.\n Availability : Year round.\n Includes: Transportation, Guided tour, Entrance fees, Breakfast and lunch.",
        "Learn more about the golden bean of Costa Rica (the Coffee plantation), continuing to the wonderful Poas Volcano and finally visit to the lush and unique animal rescue center with a 5 different and beautifull waterfalls (La Paz Waterfall Gardens)."
      ]
    },
    {
      title: "Rafting Pacuare Class III-IV",
      price: "$105",
      image: rafting,
      pdf: pacuareRiverPdf,
      more: [
        "Duration: 11 hours.\n Availability : Year round.\n Includes: Transportation, Special equipment, Safety Kayaker, Breakfast and lunch.",
        "The Pacuare is one of the best rivers in Costa Rica for those people who wants to have a wonderful and exciting adventure. Where the river offers you a perfect blend of wildness exposure and excitement, all in one day. "
      ]
    },
    {
      title: "3 in 1 | Rainforest Adventure",
      price: "$125",
      image: rainForest,
      pdf: rainforestPdf,
      more: [
        "Duration: 9 hours.\n Availability : Year round.\n Includes: Transportation, Guided tour, Entrance fees and Lunch.",
        "Drive through the most important rainforest of the Central Valley (Braulio Carrillo National Park) and enjoy a day full of adventures."
      ]
    },
    {
      title: "Irazú Volcano - Los Angeles Basilica Cartago - Orosi Valley",
      price: "$105",
      image: irazuVolcano,
      pdf: irazuVolcanoPdf,
      more: [
        "Duration: 8 hours.\n Availability : Year round.\n Includes: Transportation, Guided tour, Admission to the Volcano, Visit to the Basilica and Lunch.",
        "Want to combine a nature with history and culture? let us take you to the Irazú volcano, the old capital of Costa Rica (Cartago) and a beautiful botanic garden (Lankester)."
      ]
    },
    {
      title: "Rafting Grande de Orosi Class II-III",
      price: "$105",
      image: raftingGrandeOrosi,
      pdf: raftingGrandeOrosiPdf,
      more: [
        "Duration: 7 hours.\n Availability : Year round.\n Includes: Transportation, Esepecial equiment, Safety kayaker and Lunch.",
        "Rafting tour Grande de Orosi it's a perferct combination of nature and adventure for beginners because of the low/medium difficulty of the river rapids. With 5.5 km of distance with continous and a lot of fun rapids."
      ]
    },
    {
      title: "Rainforest Aerial Tram",
      price: "$105",
      image: rainforestAerialTram,
      pdf: rainforestAerialTramPdf,
      more: [
        "Duration: 7 hours.\n Availability : Year round.\n Includes: Transportation, Guided tour, Entrance fees and Lunch.",
        "Be able to witness the beauty of the rainforest from the top of the trees on the only and the safest (the Aerial Tram of the Atlantic)."
      ]
    },
    {
      title: "City Tour",
      price: "$50",
      image: cityTour,
      pdf: cityTourPdf,
      more: [
        "Duration: 4 hours.\n Availability : Year round.\n Includes: Transportation, Guided tour and Lunch.",
        "San José has a lot to offer for all the visitors. Dare to know more about our rich Costa Rican culture by visiting our city. Where you going to see museums and historical sites of San José."
      ]
    },
    {
      title: "City Tour | Hop On Hop Off Style",
      price: "$30-75",
      image: hopOnHopOff,
      pdf: hopOnHopOffPdf,
      more: [
        "Duration: Runs all day.\n Availability: Year round.\n Includes: Transportation, Bilingual certified guide tour and Pick up: from your hotel.",
        "The hop on and hope off city tour is the only one where you can choose from where and when you wanted to join in on this tour and also decide how much you want to pay depends on the option you choose from."
      ]
    },
    {
      title: "Dinner at the point of view Ram Luna",
      price: "$30-75",
      image: ramLuna,
      pdf: ramLunaPdf,
      more: [
        "Duration: Runs all day.\n Availability: Year round.\n Includes: Transportation, Bilingual certified guide tour and Pick up: from your hotel.",
        "If you want to have the perfect dinner time in a wonderful restaurant (Point of view Ram luna), this is your best option; where you can see the whole central valley at night."
      ]
    },
    {
      title: "Night Tour to the Chicharronera Cacique Aserrí Restaurant",
      price: "$30-75",
      image: chicharronera,
      pdf: chicharroneraPdf,
      more: [
        "Duration: 4 hours.\n Availability: Friday and sutarday.\n Includes: Transportation, chicharrones plate, beverage and show.",
        "Enjoy a delicious dinner at the Costa Rican tipical style where at the same time will enjoy our tipical music accompanied by cimarrona with live entertainment."
      ]
    }
  ]
});

// Central Pacific
destinations.set("cp", {
  name: "Central Pacific",
  description:
    "The Central Pacific has many important national and private protected areas. These pristine green zones provide sanctuary for many endangered species. The two most well known areas, Carara National Park and Manuel Antonio National Park, are readily accessible natural laboratories that nature lovers will enjoy immensely. Carara National Park borders the Tarcoles River.",
  tours: [
    {
      title: "Manuel Antonio National Park",
      price: "$115",
      image: manuelAntonioImg,
      pdf: manuelAntonioPdf,
      more: [
        "Duration: 12 hours.\n Availability: Year around.\n Includes: Transportation, guided tour, admissions, breakfast and lunch.",
        "Explore the most famous Manuel Antonio National Park and enjoy a full day on the tropical rainforest sorrounded with many species of animals and spend a wonderful time at white sand and clean blue water beach."
      ]
    },
    {
      title: "Ocean King catamaran",
      price: "$145",
      image: okcatamaran,
      pdf: okcatamaranPdf,
      more: [
        "Duration: 13 hours.\n Availability: Year around.\n Includes: Transportation, guide tour, breakfast, beverages and lunch.",
        "Manuel Antonio catamaran navigation for the sighting whales and dolphins in the luxurious catamaran Ocean King."
      ]
    },
    {
      title: "The best of the Pacific",
      price: "$130",
      image: theBestPacific,
      pdf: theBestPacificPdf,
      more: [
        "Duration: 11 hours.\n Availability: Year around.\n Includes: Transportation, biligual guide, boat tour on the Tárcoles river, entrance fee to Punta Leona resort and lunch.",
        "Dare to enjoy a full day of adventure and nature where you will learn about the impressive reptiles (crocodiles), at the same time enjoy a wonderful day in one of the best beaches in the Pacific Ocean."
      ]
    },
    {
      title: "Quad ATV Tour",
      price: "$148",
      image: atvTour,
      pdf: atvTourPdf,
      more: [
        "Duration: 7 hours.\n Availability: Year around.\n Includes: Transportation, guided tour, equipment and lunch.",
        "Live to the fullest adventure in an ATV tour with excellent panoramic views of the Pacific coast."
      ]
    },
    {
      title: "A day in Jacó beach with lunch",
      price: "$110",
      image: jacoBeach,
      pdf: jacoBeachPdf,
      more: [
        "Duration: 10 hours.\n Availability: Year around.\n Includes: Transportation, bilingual tour guide, admission to the hotel, locker, towel and lunch.",
        "Enjoy a beach day near the San José town just one hour and 30 minutes from San José is located (Jacó beach) an excellent place for beach, sun and sand lovers."
      ]
    }
  ]
});

// North Pacific
destinations.set("npp", {
  name: "North Pacific (Puntarenas)",
  description:
    "With warm, beautiful and unforgettable beaches with of varied textures sands and sharp colors, and dozens of places to visit, make the province of Puntarenas in one of the largest tourist attraction in Costa Rica.",
  tours: [
    {
      title: "Tortuga Island | Bay Island",
      price: "$125",
      image: bayIsland,
      pdf: bayIslandPdf,
      more: [
        "Duration: 14 hours.\n Availability: Year-round.\n Includes: Transportation, guide tour, breakfast and luch.",
        "Visiting Turtle Island beach aboard of the Calypso cruises is on of the best options of white sand beach locatedd in the Gulf of Nicoya approximately 1:30 minutes of Puntarenas, where you also will enjoy snorkeling and banana boat tour."
      ]
    },
    {
      title: "Tortuga Island | Calypso Cruises",
      price: "$145",
      image: calypso,
      pdf: calypsoPdf,
      more: [
        "Duration: 14 hours.\n Availability: Year-round.\n Includes: Transportation, guide tour, typical breakfast, luch and soft beverages.",
        "Visiting Turtle Island beach aboard of the Calypso cruises is on of the best options of white sand beach locatedd in the Gulf of Nicoya approximately 1:30 minutes of Puntarenas, where you also will enjoy snorkeling and banana boat tour."
      ]
    },
    {
      title: "San Lucas & Jesusita Islands",
      price: "$145",
      image: sanLucas,
      pdf: sanLucasPdf,
      more: [
        "Duration: 14 hours.\n Availability: Year-round.\n Includes: Transportation, guide tour, typical breakfast, luch and soft beverages.",
        'Visit Isla San Lucas & Isla Jesusita sailing through the Gulf of Nicoya, an archipelago of heavenly islands with exquisite beauty and variety of flora and fauna from the Central Pacific region. One of these majestic islands is full of historical memories, and was the inspiration for one of the most famous literary works in Costa Rica, "The Island of Lonely Men" by writer José León Sánchez.'
      ]
    }
  ]
});

// Caribbean Coast
destinations.set("cc", {
  name: "Caribbean Coast",
  description:
    "The tropical Atlantic coast of Costa Rica offers beautiful rainforests, diverse and abundant wildlife, excellent eco tourism opportunities, world-class fishing for tarpon and snook, and kilometers of stunning and comforting beaches.",
  tours: [
    {
      title: "Tortuguero Canals",
      price: "$105",
      image: tortuguero,
      pdf: tortugueroPdf,
      more: [
        "Duration: 12 hours.\n Availability: Year-round.\n Includes: Transportation, guided tour, admission, breakfast and luch.",
        "Tortuguero is considered on of the our natural rich resources and thats because year after year we are witness of turtle nesting which presents in the months of July, August, September and part of October."
      ]
    },
    {
      title: "Cahuita National Park",
      price: "$150",
      image: cahuita,
      pdf: cahuitaPdf,
      more: [
        "Duration: 12 hours.\n Availability: Year-round.\n Includes: Transportation, guided tour, entrance fees to the National Park, breakfast and luch.",
        "Visit the Caribbean from San José on the same day, going through one of our main and most attractive rainforest (Braulio Carrillo National Park) then continue the yourney up to the Cahuita National Park where you will enjoy a wide variety of flora and fauna combined with a beautiful white sand beach and crystal clear waters."
      ]
    }
  ]
});

export default destinations;
