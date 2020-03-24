export const formulas = [
  {
    id: 1,
    title: "Beneprotein",
    description:
      'Beneprotein instant protein powder is a modular whey protein source. Each 7 g serving provides 6 g of protein. It can be added to most foods, liquids, and as a "protein flush" with tube feedings',
    usage: ["Increased protein requirements"],
    ingredients: "WHEY PROTEIN ISOLATE (MILK), SOY LECITHIN",
    HCPC: "B4155",
    restrictions: ["CONTAINS MILK AND SOY"]
  },
  {
    id: 2,
    title: "BOOST Original",
    description:
      "BOOST Original is a great tasting, nutritionally complete, meal replacement that can be used as a snack or as a meal. No artificial flavours or colours. Natural source sweetener. For oral use. ",
    usage: [
      "Poor appetite",
      "Involuntary weight loss",
      "Malnutrition",
      "Reduced intake when recovering from illness or surgery",
      "Reduced intake during and after cancer treatment",
      "Reduced intake after oral surgery"
    ],
    ingredients:
      "WATER, CORN SYRUP, MILK PROTEIN, SUGAR, VEGETABLE OILS (CANOLA, HIGH OLEIC SUNFLOWER AND CORN), SOY PROTEIN, SALT, VITAMINS (VITAMIN A PALMITATE, VITAMIN D3, DL-ALPHA-TOCOPHERYL ACETATE, SODIUM ASCORBATE, ASCORBIC ACID, THIAMINE HYDROCHLORIDE, RIBOFLAVIN, NIACINAMIDE, CALCIUM PANTOTHENATE, PYRIDOXINE HYDROCHLORIDE, BIOTIN, FOLIC ACID, CHOLINE BITARTRATE), MINERALS (SODIUM CITRATE, POTASSIUM CITRATE, POTASSIUM HYDRATE, POTASSIUM CHLORIDE, CALCIUM CARBONATE, TRICALCIUM PHOSPHATE, MAGNESIUM PHOSPHATE, FERROUS SULPHATE, ZINC SULPHATE, MANGANESE SULPHATE, COPPER SULPHATE, POTASSIUM IODIDE, SODIUM SELENITE, SODIUM MOLYBDATE, CHROMIUM TRICHLORIDE), CELLULOSE GEL AND GUM, SOY LECITHIN, FLAVOUR, CARRAGEENAN, STEVIA EXTRACT, DIMETHYLPOLYSILOXANE.",
    HCPC: "B4150",
    restrictions: []
  },
  {
    id: 3,
    title: "BOOST Powder",
    description:
      "BOOST Powder is a great tasting option, when mixed with milk or in smoothies, that provides a source of protein and other vitamins and minerals. It can be used with snacks or meals. For oral use",
    usage: ["Skipped breakfast meal", " Inadequate oral intake"],
    ingredients:
      "SKIM MILK POWDER, SUGAR, CORN MALTODEXTRIN, OLIGOFRUCTOSE, INULIN, LACTOSE, ARTIFICIAL FLAVOUR, CELLULOSE GUM, VITAMINS (VITAMIN A PALMITATE, ASCORBIC ACID, THIAMINE MONONITRATE, RIBOFLAVIN, NIACINAMIDE), MINERAL (FERRIC ORTHOPHOSPHATE).",
    HCPC: "",
    restrictions: ["CONTAINS MILK", "MAY CONTAIN SOY AND WHEAT"]
  },
  {
    id: 4,
    title: "BOOST DIABETIC",
    description:
      "BOOST Diabetic is a great tasting, nutritionally complete formula designed to meet the needs of people with diabetes. A unique and calorically balanced blend of protein, fat and carbohydrates. Provides 17 g of carbohydrate per serving. For oral use.",
    usage: ["Diabetes", "Hyperglycemia", "Glucose intolerance"],
    ingredients:
      "WATER, MODIFIED MILK INGREDIENTS, TAPIOCA DEXTRIN, VEGETABLE OILS (CANOLA, HIGH OLEIC SUNFLOWER, CORN), SOY PROTEIN ISOLATE, ACACIA GUM, OLIGOFRUCTOSE, INULIN, VITAMINS (VITAMIN A PALMITATE, VITAMIN D3, DL-ALPHA-TOCOPHERYL ACETATE, SODIUM ASCORBATE, ASCORBIC ACID, THIAMINE HYDROCHLORIDE, RIBOFLAVIN, NIACINAMIDE, CALCIUM PANTOTHENATE, PYRIDOXINE HYDROCHLORIDE, BIOTIN, FOLIC ACID, CYANOCOBALAMIN), MINERALS (SODIUM CITRATE, POTASSIUM CITRATE, POTASSIUM HYDRATE, POTASSIUM CHLORIDE, CALCIUM PHOSPHATE, MAGNESIUM PHOSPHATE, FERROUS SULPHATE, ZINC SULPHATE, MANGANESE SULPHATE, COPPER SULPHATE, POTASSIUM IODIDE), CELLULOSE GEL AND GUM, SOY LECITHIN, SUCRALOSE, ARTIFICIAL FLAVOUR, CARRAGEENAN, DIMETHYLPOLYSILOXANE.",
    HCPC: "B4154",
    restrictions: ["CONTAINS MILK AND SOY"]
  },
  {
    id: 5,
    title: "BOOST HIGH PROTEIN",
    description:
      "BOOST® High Protein is a great tasting, nutritionally complete formula with 15 g of protein per 237 ml that can be used as a snack or as a meal. For oral use",
    usage: [
      "Chewing or swallowing difficulties",
      "Fluid or volume restrictions",
      "Poor appetite"
    ],
    ingredients:
      "WATER, CORN SYRUP, MODIFIED MILK INGREDIENTS, SUGAR, VEGETABLE OILS (CANOLA, HIGH OLEIC SUNFLOWER, CORN), SOY PROTEIN ISOLATE, SALT, VITAMINS (VITAMIN A PALMITATE, VITAMIN D3, DL-ALPHATOCOPHERYL ACETATE, SODIUM ASCORBATE, ASCORBIC ACID, THIAMINE HYDROCHLORIDE, RIBOFLAVIN, NIACIN, CALCIUM PANTOTHENATE, PYRIDOXINE HYDROCHLORIDE, BIOTIN, FOLIC ACID, CHOLINE BITARTRATE), MINERALS (POTASSIUM CITRATE, POTASSIUM HYDRATE, POTASSIUM CHLORIDE, TRICALCIUM PHOSPHATE, MAGNESIUM PHOSPHATE, MAGNESIUM CHLORIDE, FERROUS SULPHATE, ZINC SULPHATE, MANGANESE SULPHATE, COPPER SULPHATE, POTASSIUM IODIDE, SODIUM SELENITE, SODIUM MOLYBDATE, CHROMIUM TRICHLORIDE), ARTIFICIAL FLAVOUR, CELLULOSE GEL AND GUM, SOY LECITHIN, CARRAGEENAN, STEVIA EXTRACT, DIMETHYLPOLYSILOXANE. ",
    HCPC: "B4150",
    restrictions: "CONTAINS MILK AND SOY"
  }
];

export const oneFormula = [
  {
    id: 1,
    title: "Beneprotein",
    description:
      'Beneprotein instant protein powder is a modular whey protein source. Each 7 g serving provides 6 g of protein. It can be added to most foods, liquids, and as a "protein flush" with tube feedings',
    usage: ["Increased protein requirements"],
    ingredients: "WHEY PROTEIN ISOLATE (MILK), SOY LECITHIN",
    HCPC: "B4155",
    restrictions: ["CONTAINS MILK AND SOY"]
  }
];

export const mockFormula = {
  description:
    "Beneprotein instant protein powder is a modular whey protein source. Each 7 g serving provides 6 g of protein. It can be added to most foods, liquids and as a protein flush with tube feedings",
  formula_overview: {
    id: 1,
    caloric_density: "25 Cal/7 g",
    protein: "100%",
    carbohydrate: "0%",
    fat: "0%",
    protein_source: "whey protein isolate (milk)",
    carbohydrate_source: null,
    fat_source: null,
    sucralose: null,
    dietary_fibre: null,
    fibre_source: null,
    n6n3_ratio: null,
    mct_lct: null,
    omega_3_fatty_acids: null,
    water_content: null,
    osmolality: null,
    kosher: "Y",
    gluten_free: "Y",
    lactose_free: null,
    lactose: "<0.5g/7g serving (not for patients with galactosemia",
    low_residue: "Y",
    formula_id: 1
  },
  hcpc: "B4155",
  id1: "",
  image: "Beneprotein.png",
  ingredients: "WHEY PROTEIN ISOLATE (MILK), SOY LECITHIN",
  nutritional_content: {
    id: 1,
    formula_id: 1,
    properties: {
      Calories: {
        "7 g*": 25,
        "% Daily Value": ""
      },
      Fat: {
        "7 g*": "0 g",
        "% Daily Value": "0%"
      },
      Sodium: {
        "7 g*": "15 mg",
        "% Daily Value": "1%"
      },
      Potassium: {
        "7 g*": "35 mg",
        "% Daily Value": "2%"
      },
      Carbohydrate: {
        "7 g*": "0 g",
        "% Daily Value": "0%"
      },
      Protein: {
        "7 g*": "6 g",
        "% Daily Value": ""
      },
      Calcium: {
        "7 g*": "",
        "% Daily Value": "2%"
      },
      Limitations:
        "Not a significant source of saturated fat, trans fat, cholesterol, fibre, sugars, vitamin A, vitamin C, or iron.",
      "Serving size": "* 1 scoop or packet"
    }
  },
  restrictions: "CONTAINS MILK AND SOY",
  title: "Beneprotein",
  usage: "Increased protein requirements"
};
