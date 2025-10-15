// --- MOCK DATA ---
const mockRestaurant = {
    id: '1',
    name: 'Hotel Srinivas',
    nameTamil: 'ஹோட்டல் ஸ்ரீனிவாஸ்',
    primaryColor: '#D97706',
    phone: '+91 86819 91818',
    address: 'Thiruppathi Nagar, APK Main Road, Avaniapuram, Madurai - 625012',
    addressTamil: 'திருப்பதி நகர், APK மெயின் ரோடு, அவனியாபுரம், மதுரை - 625012',
    timings: {
        morning: { start: '7:00 AM', end: '11:30 AM' },
        evening: { start: '6:30 PM', end: '10:30 PM' },
    },
};

const mockCategories = [
    { id: '1', name: 'Dosa Varieties', nameTamil: 'தோசை வகைகள்', availableTimes: ['morning', 'evening'] },
    { id: '2', name: 'Idli & Pongal', nameTamil: 'இட்லி & பொங்கல்', availableTimes: ['morning', 'evening'] },
    { id: '3', name: 'Parotta Varieties', nameTamil: 'பரோட்டா வகைகள்', availableTimes: ['evening'] },
    { id: '4', name: 'Rice Varieties', nameTamil: 'சாத வகைகள்', availableTimes: ['evening'] },
    { id: '5', name: 'Special Items', nameTamil: 'சிறப்பு உணவுகள்', availableTimes: ['morning', 'evening'] },
];

// FIX: Removed all leading slashes from image paths
const mockMenuItems = [
    { id: '1', name: 'Idli', nameTamil: 'இட்லி', description: 'Soft steamed rice cakes served with sambar and chutney', descriptionTamil: 'சாம்பார் மற்றும் சட்னியுடன் பரிமாறப்படும் மென்மையான இட்லி', price: 10, categoryId: '2', imageUrl: 'images/food/idli.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 0, availableTimes: ['morning', 'evening'], ingredients: ['Rice', 'Urad Dal', 'Salt', 'Fenugreek Seeds'], ingredientsTamil: ['அரிசி', 'உளுந்து', 'உப்பு', 'வெந்தயம்'], nutrition: { protein: '2.5g', carbs: '12g', fat: '0.5g', calories: '60 kcal' }, preparationTime: '20 mins', servingSize: '1 piece (40g)' },
    { id: '2', name: 'Ven Pongal', nameTamil: 'வெண் பொங்கல்', description: 'Savory rice and lentil porridge tempered with ghee, pepper and cumin', descriptionTamil: 'நெய், மிளகு மற்றும் சீரகத்துடன் தாளிக்கப்பட்ட அரிசி பருப்பு கஞ்சி', price: 40, categoryId: '2', imageUrl: 'images/food/pongal.jpg', isChefsSpecial: true, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 1, availableTimes: ['morning'], ingredients: ['Rice', 'Moong Dal', 'Ghee', 'Black Pepper', 'Cumin', 'Cashews', 'Curry Leaves'], ingredientsTamil: ['அரிசி', 'பாசிப்பருப்பு', 'நெய்', 'மிளகு', 'சீரகம்', 'முந்திரி', 'கறிவேப்பிலை'], nutrition: { protein: '8g', carbs: '45g', fat: '12g', calories: '320 kcal' }, preparationTime: '30 mins', servingSize: '1 plate (250g)' },
    { id: '3', name: 'Dosa', nameTamil: 'தோசை', description: 'Crispy thin rice crepe served with sambar and chutney', descriptionTamil: 'சாம்பார் மற்றும் சட்னியுடன் பரிமாறப்படும் மொறுமொறுப்பான தோசை', price: 40, categoryId: '1', imageUrl: 'images/food/dosa.png', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 1, availableTimes: ['morning', 'evening'], ingredients: ['Rice', 'Urad Dal', 'Fenugreek Seeds', 'Salt', 'Oil'], ingredientsTamil: ['அரிசி', 'உளுந்து', 'வெந்தயம்', 'உப்பு', 'எண்ணெய்'], nutrition: { protein: '4g', carbs: '28g', fat: '3g', calories: '150 kcal' }, preparationTime: '15 mins', servingSize: '1 dosa (80g)' },
    { id: '4', name: 'Masala Dosa', nameTamil: 'மசாலா தோசை', description: 'Crispy dosa filled with spiced potato masala', descriptionTamil: 'மசால் உருளைக்கிழங்கு நிரப்பிய மொறுமொறுப்பான தோசை', price: 60, categoryId: '1', imageUrl: 'images/food/masala-dosa.jpg', isChefsSpecial: true, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 2, availableTimes: ['morning'], ingredients: ['Dosa Batter', 'Potato', 'Onion', 'Green Chili', 'Turmeric', 'Mustard Seeds', 'Curry Leaves'], ingredientsTamil: ['தோசை மாவு', 'உருளைக்கிழங்கு', 'வெங்காயம்', 'பச்சை மிளகாய்', 'மஞ்சள்', 'கடுகு', 'கறிவேப்பிலை'], nutrition: { protein: '6g', carbs: '42g', fat: '8g', calories: '260 kcal' }, preparationTime: '20 mins', servingSize: '1 dosa with masala (150g)' },
    { id: '5', name: 'Onion Dosa', nameTamil: 'ஆனியன் தோசை', description: 'Crispy dosa topped with finely chopped onions', descriptionTamil: 'பொடியாக நறுக்கிய வெங்காயத்துடன் மொறுமொறுப்பான தோசை', price: 60, categoryId: '1', imageUrl: 'images/food/onion-dosa.jpg', isChefsSpecial: false, isTodaysSpecial: true, isSeasonal: false, isVeg: true, spiceLevel: 2, availableTimes: ['morning', 'evening'], ingredients: ['Dosa Batter', 'Onion', 'Green Chili', 'Coriander', 'Oil'], ingredientsTamil: ['தோசை மாவு', 'வெங்காயம்', 'பச்சை மிளகாய்', 'கொத்தமல்லி', 'எண்ணெய்'], nutrition: { protein: '5g', carbs: '32g', fat: '5g', calories: '190 kcal' }, preparationTime: '15 mins', servingSize: '1 dosa (100g)' },
    { id: '6', name: 'Onion Uthappam', nameTamil: 'ஆனியன் ஊத்தப்பம்', description: 'Thick pancake with onions and spices', descriptionTamil: 'வெங்காயம் மற்றும் மசாலாப் பொருட்களுடன் தடித்த பான்கேக்', price: 60, categoryId: '1', imageUrl: 'images/food/onion-uthappam.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 2, availableTimes: ['morning', 'evening'], ingredients: ['Dosa Batter', 'Onion', 'Tomato', 'Green Chili', 'Coriander'], ingredientsTamil: ['தோசை மாவு', 'வெங்காயம்', 'தக்காளி', 'பச்சை மிளகாய்', 'கொத்தமல்லி'], nutrition: { protein: '6g', carbs: '35g', fat: '4g', calories: '200 kcal' }, preparationTime: '20 mins', servingSize: '1 uthappam (120g)' },
    { id: '7', name: 'Ghee Roast', nameTamil: 'நெய் ரோஸ்ட்', description: 'Crispy dosa roasted with ghee for extra flavor', descriptionTamil: 'கூடுதல் சுவைக்காக நெய்யில் வறுத்த மொறுமொறுப்பான தோசை', price: 60, categoryId: '1', imageUrl: 'images/food/ghee-roast.jpg', isChefsSpecial: true, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 1, availableTimes: ['morning', 'evening'], ingredients: ['Dosa Batter', 'Ghee', 'Salt'], ingredientsTamil: ['தோசை மாவு', 'நெய்', 'உப்பு'], nutrition: { protein: '4g', carbs: '30g', fat: '10g', calories: '220 kcal' }, preparationTime: '15 mins', servingSize: '1 dosa (90g)' },
    { id: '8', name: 'Podi Dosa', nameTamil: 'பொடி தோசை', description: 'Crispy dosa with spicy lentil powder and ghee', descriptionTamil: 'காரமான பருப்பு பொடி மற்றும் நெய்யுடன் மொறுமொறுப்பான தோசை', price: 50, categoryId: '1', imageUrl: 'images/food/podi-dosa.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 3, availableTimes: ['morning', 'evening'], ingredients: ['Dosa Batter', 'Gun Powder (Idli Podi)', 'Ghee', 'Oil'], ingredientsTamil: ['தோசை மாவு', 'மிளகாய் பொடி', 'நெய்', 'எண்ணெய்'], nutrition: { protein: '5g', carbs: '32g', fat: '8g', calories: '210 kcal' }, preparationTime: '15 mins', servingSize: '1 dosa (95g)' },
    { id: '9', name: 'Uthappam', nameTamil: 'ஊத்தப்பம்', description: 'Thick fluffy pancake made with dosa batter', descriptionTamil: 'தோசை மாவில் செய்யப்பட்ட தடித்த பஞ்சுப்பான பான்கேக்', price: 40, categoryId: '1', imageUrl: 'images/food/uthappam.png', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 1, availableTimes: ['morning', 'evening'], ingredients: ['Dosa Batter', 'Oil', 'Salt'], ingredientsTamil: ['தோசை மாவு', 'எண்ணெய்', 'உப்பு'], nutrition: { protein: '5g', carbs: '33g', fat: '3g', calories: '180 kcal' }, preparationTime: '15 mins', servingSize: '1 uthappam (100g)' },
    { id: '10', name: 'Egg Dosa', nameTamil: 'முட்டை தோசை', description: 'Dosa topped with beaten egg and spices', descriptionTamil: 'அடித்த முட்டை மற்றும் மசாலாப் பொருட்களுடன் தோசை', price: 60, categoryId: '1', imageUrl: 'images/food/egg-dosa.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: false, spiceLevel: 2, availableTimes: ['morning', 'evening'], ingredients: ['Dosa Batter', 'Egg', 'Onion', 'Green Chili', 'Coriander', 'Oil'], ingredientsTamil: ['தோசை மாவு', 'முட்டை', 'வெங்காயம்', 'பச்சை மிளகாய்', 'கொத்தமல்லி', 'எண்ணெய்'], nutrition: { protein: '10g', carbs: '30g', fat: '12g', calories: '270 kcal' }, preparationTime: '20 mins', servingSize: '1 dosa with egg (130g)' },
    { id: '11', name: 'Parotta', nameTamil: 'பரோட்டா', description: 'Flaky layered flatbread', descriptionTamil: 'அடுக்கு அடுக்காக செய்யப்பட்ட மென்மையான ரொட்டி', price: 15, categoryId: '3', imageUrl: 'images/food/parotta.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 0, availableTimes: ['evening'], ingredients: ['All Purpose Flour', 'Oil', 'Salt', 'Water'], ingredientsTamil: ['மைதா', 'எண்ணெய்', 'உப்பு', 'தண்ணீர்'], nutrition: { protein: '3g', carbs: '22g', fat: '5g', calories: '145 kcal' }, preparationTime: '25 mins', servingSize: '1 parotta (70g)' },
    { id: '12', name: 'Veg Kothu Parotta', nameTamil: 'வெஜ் கொத்து பரோட்டா', description: 'Shredded parotta stir-fried with vegetables and spices', descriptionTamil: 'காய்கறிகள் மற்றும் மசாலாப் பொருட்களுடன் வறுக்கப்பட்ட பரோட்டா துண்டுகள்', price: 70, categoryId: '3', imageUrl: 'images/food/veg-kothu.jpg', isChefsSpecial: true, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 3, availableTimes: ['evening'], ingredients: ['Parotta', 'Mixed Vegetables', 'Onion', 'Tomato', 'Ginger-Garlic', 'Spices', 'Curry Leaves'], ingredientsTamil: ['பரோட்டா', 'கலவை காய்கறிகள்', 'வெங்காயம்', 'தக்காளி', 'இஞ்சி-பூண்டு', 'மசாலா', 'கறிவேப்பிலை'], nutrition: { protein: '8g', carbs: '52g', fat: '18g', calories: '400 kcal' }, preparationTime: '30 mins', servingSize: '1 plate (280g)' },
    { id: '13', name: 'Egg Kothu Parotta', nameTamil: 'முட்டை கொத்து பரோட்டா', description: 'Shredded parotta stir-fried with eggs and spices', descriptionTamil: 'முட்டை மற்றும் மசாலாப் பொருட்களுடன் வறுக்கப்பட்ட பரோட்டா துண்டுகள்', price: 90, categoryId: '3', imageUrl: 'images/food/egg-kothu.jpg', isChefsSpecial: true, isTodaysSpecial: true, isSeasonal: false, isVeg: false, spiceLevel: 3, availableTimes: ['evening'], ingredients: ['Parotta', 'Egg', 'Onion', 'Tomato', 'Ginger-Garlic', 'Spices', 'Curry Leaves'], ingredientsTamil: ['பரோட்டா', 'முட்டை', 'வெங்காயம்', 'தக்காளி', 'இஞ்சி-பூண்டு', 'மசாலா', 'கறிவேப்பிலை'], nutrition: { protein: '15g', carbs: '50g', fat: '22g', calories: '470 kcal' }, preparationTime: '30 mins', servingSize: '1 plate (300g)' },
    { id: '14', name: 'Paneer Veg Kothu', nameTamil: 'பன்னீர் வெஜ் கொத்து', description: 'Shredded parotta with paneer and vegetables', descriptionTamil: 'பன்னீர் மற்றும் காய்கறிகளுடன் கொத்து பரோட்டா', price: 90, categoryId: '3', imageUrl: 'images/food/paneer-kothu.jpg', isChefsSpecial: true, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 3, availableTimes: ['evening'], ingredients: ['Parotta', 'Paneer', 'Mixed Vegetables', 'Onion', 'Tomato', 'Spices'], ingredientsTamil: ['பரோட்டா', 'பன்னீர்', 'கலவை காய்கறிகள்', 'வெங்காயம்', 'தக்காளி', 'மசாலா'], nutrition: { protein: '16g', carbs: '48g', fat: '20g', calories: '450 kcal' }, preparationTime: '35 mins', servingSize: '1 plate (320g)' },
    { id: '15', name: 'Paneer Masala Dosa', nameTamil: 'பன்னீர் மசால் தோசை', description: 'Crispy dosa filled with spiced paneer masala', descriptionTamil: 'மசால் பன்னீர் நிரப்பிய மொறுமொறுப்பான தோசை', price: 60, categoryId: '1', imageUrl: 'images/food/paneer-dosa.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 2, availableTimes: ['evening'], ingredients: ['Dosa Batter', 'Paneer', 'Onion', 'Tomato', 'Green Chili', 'Spices'], ingredientsTamil: ['தோசை மாவு', 'பன்னீர்', 'வெங்காயம்', 'தக்காளி', 'பச்சை மிளகாய்', 'மசாலா'], nutrition: { protein: '12g', carbs: '40g', fat: '14g', calories: '340 kcal' }, preparationTime: '25 mins', servingSize: '1 dosa (180g)' },
    { id: '16', name: 'Ceylon Dum Parotta', nameTamil: 'சிலோன் தம் பரோட்டா', description: 'Special parotta with Ceylon spices', descriptionTamil: 'இலங்கை மசாலாவுடன் சிறப்பு பரோட்டா', price: 90, categoryId: '3', imageUrl: 'images/food/ceylon-dham-parotta.jpg', isChefsSpecial: true, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 3, availableTimes: ['evening'], ingredients: ['Parotta', 'Ceylon Spice Mix', 'Coconut', 'Curry Leaves', 'Special Gravy'], ingredientsTamil: ['பரோட்டா', 'இலங்கை மசாலா', 'தேங்காய்', 'கறிவேப்பிலை', 'சிறப்பு குழம்பு'], nutrition: { protein: '9g', carbs: '55g', fat: '20g', calories: '440 kcal' }, preparationTime: '40 mins', servingSize: '1 plate (300g)' },
    { id: '17', name: 'Poori (1-set)', nameTamil: 'பூரி (1-செட்)', description: 'Deep-fried puffed bread served with potato masala', descriptionTamil: 'உருளைக்கிழங்கு மசாலாவுடன் பொரித்த ரொட்டி', price: 40, categoryId: '5', imageUrl: 'images/food/poori.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 1, availableTimes: ['morning'], ingredients: ['Wheat Flour', 'Oil', 'Salt', 'Potato', 'Spices'], ingredientsTamil: ['கோதுமை மாவு', 'எண்ணெய்', 'உப்பு', 'உருளைக்கிழங்கு', 'மசாலா'], nutrition: { protein: '7g', carbs: '48g', fat: '15g', calories: '350 kcal' }, preparationTime: '25 mins', servingSize: '2 pooris with masala (180g)' },
    { id: '18', name: 'Chapathi (1-set)', nameTamil: 'சப்பாத்தி (1-செட்)', description: 'Soft whole wheat flatbread served with kurma', descriptionTamil: 'குருமாவுடன் பரிமாறப்படும் மென்மையான கோதுமை ரொட்டி', price: 40, categoryId: '5', imageUrl: 'images/food/chapati.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 2, availableTimes: ['morning', 'evening'], ingredients: ['Wheat Flour', 'Oil', 'Salt', 'Water', 'Vegetable Kurma'], ingredientsTamil: ['கோதுமை மாவு', 'எண்ணெய்', 'உப்பு', 'தண்ணீர்', 'காய்கறி குருமா'], nutrition: { protein: '8g', carbs: '45g', fat: '10g', calories: '310 kcal' }, preparationTime: '30 mins', servingSize: '2 chapatis with kurma (220g)' },
    { id: '19', name: 'Tomato Rice', nameTamil: 'தக்காளி சாதம்', description: 'Tangy tomato rice with aromatic spices', descriptionTamil: 'நறுமண மசாலாப் பொருட்களுடன் புளிப்பு தக்காளி சாதம்', price: 50, categoryId: '4', imageUrl: 'images/food/tomato-rice.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 2, availableTimes: ['evening'], ingredients: ['Rice', 'Tomato', 'Onion', 'Spices', 'Curry Leaves', 'Peanuts'], ingredientsTamil: ['அரிசி', 'தக்காளி', 'வெங்காயம்', 'மசாலா', 'கறிவேப்பிலை', 'கடலை'], nutrition: { protein: '6g', carbs: '50g', fat: '8g', calories: '290 kcal' }, preparationTime: '30 mins', servingSize: '1 plate (250g)' },
    { id: '20', name: 'Omelette', nameTamil: 'ஆம்லெட்', description: 'Fluffy egg omelette with onions and spices', descriptionTamil: 'வெங்காயம் மற்றும் மசாலாவுடன் பஞ்சுப்பான முட்டை ஆம்லெட்', price: 20, categoryId: '5', imageUrl: 'images/food/omelette.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: false, spiceLevel: 2, availableTimes: ['morning', 'evening'], ingredients: ['Egg', 'Onion', 'Green Chili', 'Tomato', 'Coriander', 'Oil'], ingredientsTamil: ['முட்டை', 'வெங்காயம்', 'பச்சை மிளகாய்', 'தக்காளி', 'கொத்தமல்லி', 'எண்ணெய்'], nutrition: { protein: '12g', carbs: '3g', fat: '14g', calories: '180 kcal' }, preparationTime: '10 mins', servingSize: '1 omelette (100g)' },
    { id: '21', name: 'Half Boil', nameTamil: 'ஹாஃப் பாயில்', description: 'Soft boiled egg with runny yolk', descriptionTamil: 'ஓடும் மஞ்சள் கருவுடன் மென்மையாக வேகவைத்த முட்டை', price: 15, categoryId: '5', imageUrl: 'images/food/half-boil.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: false, spiceLevel: 0, availableTimes: ['morning', 'evening'], ingredients: ['Egg', 'Salt', 'Pepper'], ingredientsTamil: ['முட்டை', 'உப்பு', 'மிளகு'], nutrition: { protein: '6g', carbs: '1g', fat: '5g', calories: '70 kcal' }, preparationTime: '5 mins', servingSize: '1 egg (50g)' },
    { id: '22', name: 'Kalakki', nameTamil: 'கலக்கி', description: 'Traditional mixed millet porridge', descriptionTamil: 'பாரம்பரிய கலவை தினை கஞ்சி', price: 25, categoryId: '5', imageUrl: 'images/food/kalakki.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 1, availableTimes: ['evening'], ingredients: ['Mixed Millets', 'Jaggery', 'Cardamom', 'Milk'], ingredientsTamil: ['கலவை தினை', 'வெல்லம்', 'ஏலக்காய்', 'பால்'], nutrition: { protein: '4g', carbs: '38g', fat: '2g', calories: '180 kcal' }, preparationTime: '35 mins', servingSize: '1 cup (200ml)' },
    { id: '23', name: 'Puliyodharai', nameTamil: 'புளியோதரை', description: 'Tangy tamarind rice with peanuts and spices', descriptionTamil: 'வேர்க்கடலை மற்றும் மசாலாவுடன் புளிப்பு புளி சாதம்', price: 40, categoryId: '4', imageUrl: 'images/food/puliyodharai.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 2, availableTimes: ['evening'], ingredients: ['Rice', 'Tamarind', 'Peanuts', 'Sesame Seeds', 'Spices', 'Curry Leaves'], ingredientsTamil: ['அரிசி', 'புளி', 'கடலை', 'எள்', 'மசாலா', 'கறிவேப்பிலை'], nutrition: { protein: '7g', carbs: '52g', fat: '10g', calories: '320 kcal' }, preparationTime: '30 mins', servingSize: '1 plate (250g)' },
    { id: '24', name: 'Mushroom Biryani', nameTamil: 'காளான் பிரியாணி', description: 'Fragrant mushroom biryani with aromatic spices', descriptionTamil: 'நறுமண மசாலாப் பொருட்களுடன் காளான் பிரியாணி', price: 60, categoryId: '4', imageUrl: 'images/food/mushroom-biryani.jpg', isChefsSpecial: true, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 3, availableTimes: ['evening'], ingredients: ['Basmati Rice', 'Mushroom', 'Yogurt', 'Spices', 'Onion', 'Mint', 'Coriander'], ingredientsTamil: ['பாஸ்மதி அரிசி', 'காளான்', 'தயிர்', 'மசாலா', 'வெங்காயம்', 'புதினா', 'கொத்தமல்லி'], nutrition: { protein: '10g', carbs: '58g', fat: '12g', calories: '380 kcal' }, preparationTime: '45 mins', servingSize: '1 plate (300g)' },
    { id: '25', name: 'Rava Dosa', nameTamil: 'ரவா தோசை', description: 'Crispy semolina crepe with onions and chilies', descriptionTamil: 'வெங்காயம் மற்றும் மிளகாயுடன் மொறுமொறுப்பான ரவை தோசை', price: 60, categoryId: '1', imageUrl: 'images/food/rava-dosa.jpg', isChefsSpecial: false, isTodaysSpecial: false, isSeasonal: false, isVeg: true, spiceLevel: 2, availableTimes: ['evening'], ingredients: ['Rava (Semolina)', 'Rice Flour', 'Onion', 'Green Chili', 'Curry Leaves', 'Cumin'], ingredientsTamil: ['ரவை', 'அரிசி மாவு', 'வெங்காயம்', 'பச்சை மிளகாய்', 'கறிவேப்பிலை', 'சீரகம்'], nutrition: { protein: '5g', carbs: '34g', fat: '6g', calories: '210 kcal' }, preparationTime: '20 mins', servingSize: '1 dosa (110g)' },
];

const mockAdvertisements = [
    { id: '1', title: 'Fresh Hot Breakfast', titleTamil: 'புதிய சூடான காலை உணவு', subtitle: 'Authentic South Indian Tiffin Items', subtitleTamil: 'உண்மையான தென்னிந்திய டிபன் உணவுகள்', image: 'images/ads/breakfast-banner.jpg', backgroundColor: '#FFF3E0' },
    { id: '2', title: 'Crispy Dosa Varieties', titleTamil: 'மொறுமொறுப்பான தோசை வகைகள்', subtitle: 'Made with Traditional Recipe', subtitleTamil: 'பாரம்பரிய செய்முறையில் தயாரிக்கப்படுகிறது', image: 'images/ads/dosa-banner.jpg', backgroundColor: '#E8F5E9' },
    { id: '3', title: 'Special Kothu Parotta', titleTamil: 'சிறப்பு கொத்து பரோட்டா', subtitle: 'Evening Special - Must Try!', subtitleTamil: 'மாலை சிறப்பு - கண்டிப்பாக முயற்சிக்கவும்!', image: 'images/ads/kothu-banner.jpg', backgroundColor: '#FCE4EC' },
];

const DEFAULT_IMAGE = 'images/food/default-food.jpg';

// --- APPLICATION STATE ---
let state = {
    lang: 'en',
    searchTerm: '',
    showSearch: false,
    selectedTimeFilter: 'morning',
    currentAdIndex: 0,
    vegFilter: 'all', // 'all', 'veg', 'nonveg'
    theme: 'light',
    favorites: new Set(),
    showClosedBanner: true,
    showScrollTop: false
};

// --- UTILITY FUNCTIONS ---
const getCurrentTimeSlot = () => {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 12) return "morning";
    if (hour >= 18 && hour < 23) return "evening";
    return "closed";
};

// --- DOM ELEMENTS ---
const getElement = (id) => document.getElementById(id);
const DOMElements = {
    body: document.body,
    header: getElement('header'),
    closedBannerContainer: getElement('closed-banner-container'),
    infoCardContainer: getElement('info-card-container'),
    adCarouselContainer: getElement('ad-carousel-container'),
    searchResultsContainer: getElement('search-results-container'),
    categoryPillsContainer: getElement('category-pills-container'),
    menuItemsContainer: getElement('menu-items-container'),
    emptyStateContainer: getElement('empty-state-container'),
    footerContainer: getElement('footer-container'),
    scrollToTopBtn: getElement('scroll-to-top'),
    modalContainer: getElement('modal-container'),
};

// --- TRANSLATION HELPER ---
const t = (en, ta) => (state.lang === 'en' ? en : ta);

// --- RENDER FUNCTIONS ---
function renderHeader() {
    const isOpen = getCurrentTimeSlot() !== 'closed';
    DOMElements.header.innerHTML = `
        <div class="header-top-row">
            <div class="restaurant-title-wrapper">
                <h1 class="restaurant-title">${t(mockRestaurant.name, mockRestaurant.nameTamil)}</h1>
                <div class="status-badge ${isOpen ? 'open' : 'closed'}">
                    <div class="status-dot ${isOpen ? 'open' : 'closed'}"></div>
                    <span class="status-text ${isOpen ? 'open' : 'closed'}">${isOpen ? t('OPEN', 'திறந்து') : t('CLOSED', 'மூடி')}</span>
                </div>
            </div>
            <div class="header-actions">
                <button id="search-toggle-btn" class="header-btn" aria-label="Toggle Search"><i data-lucide="search" style="color: var(--primary-color)"></i></button>
                <button id="theme-toggle-btn" class="header-btn" aria-label="Toggle Theme">${state.theme === 'light' ? '<i data-lucide="moon" style="color: #374151"></i>' : '<i data-lucide="sun" style="color: #FBBF24"></i>'}</button>
                <button id="lang-toggle-btn" class="lang-btn">${t('த', 'EN')}</button>
            </div>
        </div>
        <div id="search-container">
            ${state.showSearch ? `
            <div class="search-bar-wrapper animate-in">
                <i data-lucide="search" class="search-icon"></i>
                <input type="text" id="search-input" placeholder="${t('Search dishes...', 'உணவுகளை தேடுங்கள்...')}" value="${state.searchTerm}" class="${state.searchTerm ? 'active' : ''}" autofocus/>
                ${state.searchTerm ? `<button id="clear-search-btn" class="clear-search-btn"><i data-lucide="x"></i></button>` : ''}
            </div>` : ''}
        </div>
        <div class="filter-row">
            <button id="morning-filter-btn" class="filter-btn ${state.selectedTimeFilter === 'morning' ? 'active' : ''}">
                <i data-lucide="sun"></i> ${t('Morning', 'காலை')}
            </button>
            <button id="evening-filter-btn" class="filter-btn ${state.selectedTimeFilter === 'evening' ? 'active' : ''}">
                <i data-lucide="moon"></i> ${t('Evening', 'மாலை')}
            </button>
            <button id="veg-filter-btn" class="filter-btn veg-filter-btn">
                ${state.vegFilter === 'all' ? '<span>🟢🔴</span>' :
                  state.vegFilter === 'veg' ? '<i data-lucide="circle" style="fill: #16A34A; color: #16A34A;"></i>' :
                  '<i data-lucide="circle" style="fill: #DC2626; color: #DC2626;"></i>'}
            </button>
        </div>
    `;
    lucide.createIcons();
}

function renderClosedBanner() {
    if (getCurrentTimeSlot() === 'closed' && state.showClosedBanner) {
        DOMElements.closedBannerContainer.innerHTML = `
        <div class="closed-banner">
            <button id="hide-closed-banner-btn" class="close-banner-btn"><i data-lucide="x"></i></button>
            <div class="closed-banner-content">
                <div class="closed-banner-icon-wrapper"><i data-lucide="clock" class="closed-banner-icon"></i></div>
                <div>
                    <h3 class="closed-banner-title">${t("We're Currently Closed", "இப்போது மூடப்பட்டுள்ளது")}</h3>
                    <p class="closed-banner-text">${t("Visit us during our serving hours:", "எங்கள் பரிமாறும் நேரம்:")}</p>
                    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                       <div class="closed-banner-timings"><i data-lucide="sun" style="color: #F59E0B"></i> <span>${mockRestaurant.timings.morning.start} - ${mockRestaurant.timings.morning.end}</span></div>
                       <div class="closed-banner-timings"><i data-lucide="moon" style="color: #6366F1"></i> <span>${mockRestaurant.timings.evening.start} - ${mockRestaurant.timings.evening.end}</span></div>
                    </div>
                    <p class="closed-banner-note">✨ ${t("You can still browse our menu below!", "நீங்கள் இன்னும் எங்கள் மெனுவை பார்க்கலாம்!")}</p>
                </div>
            </div>
        </div>`;
    } else {
        DOMElements.closedBannerContainer.innerHTML = '';
    }
    lucide.createIcons();
}

function renderInfoCard() {
    DOMElements.infoCardContainer.innerHTML = `
    <div class="card">
        <div class="info-card-grid">
            <div class="info-row">
                <i data-lucide="map-pin"></i>
                <span>${t(mockRestaurant.address, mockRestaurant.addressTamil)}</span>
            </div>
            <div class="info-row-between">
                <div class="info-phone">
                    <i data-lucide="phone"></i>
                    <a href="tel:${mockRestaurant.phone}">${mockRestaurant.phone}</a>
                </div>
                <button id="share-btn" class="share-btn">
                    <i data-lucide="share-2"></i>
                    <span>${t('Share', 'பகிர்')}</span>
                </button>
            </div>
        </div>
    </div>`;
    lucide.createIcons();
}

function renderAdCarousel() {
    const ad = mockAdvertisements[state.currentAdIndex];
    if (!ad) return;
    DOMElements.adCarouselContainer.innerHTML = `
        <div class="ad-carousel" style="background-color: ${state.theme === 'light' ? ad.backgroundColor : ''};">
            <div class="ad-image-wrapper">
                <img src="${ad.image}" alt="${t(ad.title, ad.titleTamil)}" class="ad-image"/>
                <div class="ad-gradient"></div>
                <div class="ad-text-content">
                    <h3 class="ad-title">${t(ad.title, ad.titleTamil)}</h3>
                    <p class="ad-subtitle">${t(ad.subtitle, ad.subtitleTamil)}</p>
                </div>
            </div>
            ${mockAdvertisements.length > 1 ? `
            <div class="ad-dots">
                ${mockAdvertisements.map((_, idx) => `<div class="ad-dot ${idx === state.currentAdIndex ? 'active' : ''}"></div>`).join('')}
            </div>` : ''}
        </div>
    `;
}

function getFilteredItems() {
    return mockMenuItems.filter(item => {
        const matchesTime = item.availableTimes.includes(state.selectedTimeFilter);
        const matchesVeg = state.vegFilter === 'all' || (state.vegFilter === 'veg' && item.isVeg) || (state.vegFilter === 'nonveg' && !item.isVeg);
        return matchesTime && matchesVeg;
    });
}

function getSearchResults() {
    if (!state.searchTerm) return [];
    const term = state.searchTerm.toLowerCase();
    return mockMenuItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(term) ||
                              (item.nameTamil && item.nameTamil.includes(state.searchTerm)) ||
                              (item.description && item.description.toLowerCase().includes(term));
        const matchesTime = item.availableTimes.includes(state.selectedTimeFilter);
        const matchesVeg = state.vegFilter === 'all' || (state.vegFilter === 'veg' && item.isVeg) || (state.vegFilter === 'nonveg' && !item.isVeg);
        return matchesSearch && matchesTime && matchesVeg;
    });
}

function createMenuItemHTML(item) {
    const isFavorite = state.favorites.has(item.id);
    return `
    <div class="menu-item-card" data-item-id="${item.id}">
        <div class="menu-item-image-wrapper">
            <img src="${item.imageUrl || DEFAULT_IMAGE}" alt="${t(item.name, item.nameTamil)}" class="menu-item-image" />
            <div class="menu-item-image-gradient"></div>
            <div class="menu-item-badges">
                ${item.isChefsSpecial ? `<div class="badge star"><i data-lucide="star" style="fill: white;"></i></div>` : ''}
                ${item.isTodaysSpecial ? `<div class="badge flame"><i data-lucide="flame"></i></div>` : ''}
            </div>
            <div class="veg-badge-wrapper">
                <div class="veg-badge ${item.isVeg ? 'veg' : 'nonveg'}">
                    <i data-lucide="circle" style="fill: currentColor;"></i>
                </div>
            </div>
        </div>
        <div class="menu-item-content">
            <h3 class="menu-item-name line-clamp-2">${t(item.name, item.nameTamil)}</h3>
            ${item.description ? `<p class="menu-item-desc line-clamp-2">${t(item.description, item.descriptionTamil)}</p>` : ''}
            <div class="menu-item-footer">
                <div class="menu-item-price-wrapper">
                    <div class="menu-item-price">₹${item.price}</div>
                    ${item.spiceLevel > 0 ? `
                    <div class="spice-level">
                        ${[...Array(3)].map((_, i) => `<div class="spice-bar ${i < item.spiceLevel ? 'filled' : 'empty'}"></div>`).join('')}
                    </div>` : ''}
                </div>
                <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" data-item-id="${item.id}" aria-label="Toggle Favorite">
                    <i data-lucide="heart"></i>
                </button>
            </div>
        </div>
    </div>`;
}

function renderSearchResults(results) {
    if (results.length > 0) {
        DOMElements.searchResultsContainer.innerHTML = `
            <h2 class="search-results-header">${results.length} ${t('results', 'முடிவுகள்')}</h2>
            ${results.map(createMenuItemHTML).join('')}
        `;
    } else {
        DOMElements.searchResultsContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <p class="empty-state-text">${t('No items found', 'உணவுகள் கிடைக்கவில்லை')}</p>
            </div>
        `;
    }
    setTimeout(() => {
        DOMElements.searchResultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function renderMenu() {
    if (state.searchTerm) {
        DOMElements.categoryPillsContainer.innerHTML = '';
        DOMElements.menuItemsContainer.innerHTML = '';
        DOMElements.emptyStateContainer.style.display = 'none';
        renderSearchResults(getSearchResults());
        return;
    }
    
    DOMElements.searchResultsContainer.innerHTML = '';
    const filteredItems = getFilteredItems();
    
    const availableCategories = mockCategories.filter(cat => 
        cat.availableTimes.includes(state.selectedTimeFilter) && 
        mockMenuItems.some(item => item.categoryId === cat.id && filteredItems.includes(item))
    );

    if(availableCategories.length > 0) {
        DOMElements.categoryPillsContainer.innerHTML = `
        <div class="category-pills scrollbar-hide">
            ${availableCategories.map(cat => {
                const itemCount = filteredItems.filter(item => item.categoryId === cat.id).length;
                return `<button class="category-pill" data-category-id="${cat.id}">${t(cat.name, cat.nameTamil)} (${itemCount})</button>`;
            }).join('')}
        </div>
        `;
    } else {
        DOMElements.categoryPillsContainer.innerHTML = '';
    }

    if (availableCategories.length > 0) {
        DOMElements.menuItemsContainer.innerHTML = availableCategories.map(cat => {
            const categoryItems = filteredItems.filter(item => item.categoryId === cat.id);
            if (categoryItems.length === 0) return '';
            return `
            <section id="category-${cat.id}" class="category-section">
                <div class="category-header">
                    <div class="category-bar"></div>
                    <h2 class="category-title">${t(cat.name, cat.nameTamil)}</h2>
                </div>
                <div class="category-items">
                    ${categoryItems.map(createMenuItemHTML).join('')}
                </div>
            </section>`;
        }).join('');
        DOMElements.emptyStateContainer.style.display = 'none';
    } else {
        DOMElements.menuItemsContainer.innerHTML = '';
        DOMElements.emptyStateContainer.style.display = 'block';
        DOMElements.emptyStateContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🍽️</div>
                <h3 class="empty-state-title">${t('No items available', 'உணவுகள் இல்லை')}</h3>
                <p class="empty-state-text">${t('Try different filters', 'வேறு வடிகட்டிகளை முயற்சிக்கவும்')}</p>
            </div>`;
    }
}


function renderFooter() {
    DOMElements.footerContainer.innerHTML = `
        <div class="powered-by">
            <span>${t('Powered by', 'இயக்குவது')}</span>
            <span>Visainnovations</span>
        </div>
        <p class="footer-tagline">
            ${t('✨ Scan, Browse, Savor - Your Digital Dining Companion', '✨ ஸ்கேன் செய்யுங்கள், உலாவுங்கள், சுவைக்கவும் - உங்கள் டிஜிட்டல் சாப்பாட்டு தோழர்')}
        </p>
        <div class="footer-notes">
            <span>♥️ Made with love</span>
            <span>•</span>
            <span>🌿 Eco-friendly</span>
        </div>
    `;
}

function renderModal(itemId) {
    const item = mockMenuItems.find(i => i.id === itemId);
    if (!item) return;
    
    const isFavorite = state.favorites.has(item.id);
    const hasAllergens = item.ingredients.some(ing => ["Milk", "Egg", "Peanuts", "Cashews", "Ghee"].some(a => ing.toLowerCase().includes(a.toLowerCase())));

    const spiceLevels = {1: t('Mild', 'லேசான'), 2: t('Medium', 'நடுத்தர'), 3: t('Hot', 'அதிக')};

    DOMElements.modalContainer.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <section class="modal-image-section">
                    <button id="modal-close-btn" class="modal-btn close"><i data-lucide="x"></i></button>
                    <button id="modal-favorite-btn" class="modal-btn favorite ${isFavorite ? 'favorited' : ''}" data-item-id="${item.id}">
                        <i data-lucide="heart"></i>
                    </button>
                    <img src="${item.imageUrl || DEFAULT_IMAGE}" alt="${t(item.name, item.nameTamil)}" class="modal-image"/>
                    <div class="modal-image-gradient"></div>
                    <div class="modal-badges-container">
                        <div class="modal-badges-left">
                            ${item.isChefsSpecial ? `<div class="modal-badge star"><i data-lucide="star" style="fill: white;"></i> ${t("Chef's", "சிறப்பு")}</div>` : ''}
                            ${item.isTodaysSpecial ? `<div class="modal-badge flame"><i data-lucide="flame"></i> ${t("Today", "இன்று")}</div>` : ''}
                        </div>
                        <div class="modal-veg-badge ${item.isVeg ? 'veg' : 'nonveg'}">
                            <div class="veg-badge ${item.isVeg ? 'veg' : 'nonveg'}"><i data-lucide="circle" style="fill: currentColor;"></i></div>
                            ${item.isVeg ? t('Veg', 'சைவம்') : t('Non-Veg', 'அசைவம்')}
                        </div>
                    </div>
                </section>
                <section class="modal-main-content">
                    <div class="modal-name-price">
                        <div>
                            <h3 class="modal-item-name">${t(item.name, item.nameTamil)}</h3>
                            ${item.description ? `<p class="modal-item-desc">${t(item.description, item.descriptionTamil)}</p>` : ''}
                        </div>
                        <div class="modal-price-wrapper">
                            <div class="modal-price">₹${item.price}</div>
                            ${item.preparationTime ? `<p class="modal-prep-time">⏱️ ${item.preparationTime}</p>` : ''}
                        </div>
                    </div>

                    ${item.spiceLevel > 0 ? `
                    <div class="modal-spice-level">
                        <span class="modal-spice-label">${t('Spice:', 'காரம்:')}</span>
                        <div class="modal-spice-bars">${[...Array(3)].map((_, i) => `<div class="modal-spice-bar ${i < item.spiceLevel ? 'filled' : 'empty'}"></div>`).join('')}</div>
                        <span class="modal-spice-text">${spiceLevels[item.spiceLevel]}</span>
                    </div>` : ''}

                    <div>
                        <h4 class="modal-section-title">🥘 ${t('Ingredients', 'பொருட்கள்')}</h4>
                        <div class="ingredients-list">
                            ${(state.lang === 'en' ? item.ingredients : item.ingredientsTamil).map(ing => `<span class="ingredient-tag">${ing}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="modal-section-title">📊 ${t('Nutrition Facts', 'ஊட்டச்சத்து')}</h4>
                        ${item.servingSize ? `<p class="nutrition-serving-size">${t('Serving:', 'அளவு:')} <strong>${item.servingSize}</strong></p>` : ''}
                        <div class="nutrition-grid">
                            <div class="nutrition-card calories"><div class="nutrition-value">${item.nutrition.calories.replace(' kcal', '')}</div><div class="nutrition-label">${t('Cal', 'கலோ')}</div></div>
                            <div class="nutrition-card protein"><div class="nutrition-value">${item.nutrition.protein}</div><div class="nutrition-label">${t('Protein', 'புரதம்')}</div></div>
                            <div class="nutrition-card carbs"><div class="nutrition-value">${item.nutrition.carbs}</div><div class="nutrition-label">${t('Carbs', 'கார்போ')}</div></div>
                            <div class="nutrition-card fat"><div class="nutrition-value">${item.nutrition.fat}</div><div class="nutrition-label">${t('Fat', 'கொழுப்பு')}</div></div>
                        </div>
                    </div>
                    
                    <button id="modal-final-close-btn" class="modal-close-btn">${t('Close', 'மூடு')}</button>
                </section>
            </div>
        </div>
    `;
    lucide.createIcons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    DOMElements.modalContainer.innerHTML = '';
    document.body.style.overflow = 'auto';
}

// --- FULL UI RENDER ---
function renderUI() {
    renderHeader();
    renderClosedBanner();
    renderInfoCard();
    renderAdCarousel();
    renderMenu();
    renderFooter();
    lucide.createIcons();
    addEventListeners();
}

// --- EVENT HANDLERS ---
function handleThemeToggle() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    DOMElements.body.classList.toggle('dark');
    renderHeader();
    addEventListeners();
}

function handleLangToggle() {
    state.lang = state.lang === 'en' ? 'ta' : 'en';
    renderUI();
}

function handleTimeFilter(time) {
    state.selectedTimeFilter = time;
    renderUI();
}

function handleVegFilter() {
    const filters = ['all', 'veg', 'nonveg'];
    const currentIndex = filters.indexOf(state.vegFilter);
    state.vegFilter = filters[(currentIndex + 1) % filters.length];
    renderUI();
}

function handleSearchToggle() {
    state.showSearch = !state.showSearch;
    renderHeader();
    addEventListeners();
}

function handleSearchInput(e) {
    state.searchTerm = e.target.value;

    const searchInput = getElement('search-input');
    const searchContainer = getElement('search-container');
    const clearBtnExists = !!getElement('clear-search-btn');

    searchInput.classList.toggle('active', state.searchTerm.length > 0);

    if (state.searchTerm.length > 0 && !clearBtnExists) {
        const button = document.createElement('button');
        button.id = 'clear-search-btn';
        button.className = 'clear-search-btn';
        button.innerHTML = '<i data-lucide="x"></i>';
        searchContainer.querySelector('.search-bar-wrapper').appendChild(button);
        lucide.createIcons();
        button.addEventListener('click', handleClearSearch);
    } else if (state.searchTerm.length === 0 && clearBtnExists) {
        getElement('clear-search-btn').remove();
    }

    renderMenu();
    lucide.createIcons();
    addEventListeners();
}

function handleClearSearch() {
    state.searchTerm = '';
    const searchInput = getElement('search-input');
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
    }
    getElement('clear-search-btn')?.remove();
    searchInput?.classList.remove('active');
    renderMenu();
    lucide.createIcons();
    addEventListeners();
}

function handleHideClosedBanner() {
    state.showClosedBanner = false;
    renderClosedBanner();
}

function handleShare() {
    const shareData = {
        title: t(mockRestaurant.name, mockRestaurant.nameTamil),
        text: `Check out the menu for ${t(mockRestaurant.name, mockRestaurant.nameTamil)}!`,
        url: window.location.href,
    };

    if (navigator.share) {
        navigator.share(shareData).catch(console.error);
    } else {
        const shareModal = document.createElement('div');
        shareModal.id = 'share-modal-overlay';
        shareModal.className = 'share-modal-overlay';
        shareModal.innerHTML = `
            <div class="share-modal-content">
                <h3 class="share-modal-title">Share Menu</h3>
                <div class="share-modal-buttons">
                    <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}" target="_blank" class="share-modal-btn share-whatsapp-btn">
                        <i data-lucide="message-circle"></i> Share on WhatsApp
                    </a>
                    <button id="copy-link-btn" class="share-modal-btn share-copy-btn">
                        <i data-lucide="copy"></i> Copy Link
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(shareModal);
        lucide.createIcons();

        shareModal.addEventListener('click', (e) => {
            if (e.target.id === 'share-modal-overlay') {
                shareModal.remove();
            }
        });

        getElement('copy-link-btn').addEventListener('click', (e) => {
            const button = e.currentTarget;
            navigator.clipboard.writeText(shareData.url).then(() => {
                button.innerHTML = '<i data-lucide="check"></i> Copied!';
                setTimeout(() => {
                    shareModal.remove();
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                button.textContent = 'Failed to Copy';
            });
        });
    }
}


function handleCategoryClick(e) {
    const categoryId = e.target.dataset.categoryId;
    if (categoryId) {
        const element = getElement(`category-${categoryId}`);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
    }
}

function handleMenuItemClick(e) {
    const card = e.target.closest('.menu-item-card');
    const favButton = e.target.closest('.favorite-btn');
    if (card && !favButton) {
        renderModal(card.dataset.itemId);
    }
}

function handleToggleFavorite(itemId) {
    if (state.favorites.has(itemId)) {
        state.favorites.delete(itemId);
    } else {
        state.favorites.add(itemId);
    }
    const buttons = document.querySelectorAll(`.favorite-btn[data-item-id="${itemId}"]`);
    buttons.forEach(btn => btn.classList.toggle('favorited', state.favorites.has(itemId)));
}


// --- ADD EVENT LISTENERS ---
function addEventListeners() {
    const searchToggleBtn = getElement('search-toggle-btn');
    if(searchToggleBtn) searchToggleBtn.addEventListener('click', handleSearchToggle);
    getElement('theme-toggle-btn')?.addEventListener('click', handleThemeToggle);
    getElement('lang-toggle-btn')?.addEventListener('click', handleLangToggle);
    getElement('morning-filter-btn')?.addEventListener('click', () => handleTimeFilter('morning'));
    getElement('evening-filter-btn')?.addEventListener('click', () => handleTimeFilter('evening'));
    getElement('veg-filter-btn')?.addEventListener('click', handleVegFilter);
    const searchInput = getElement('search-input');
    if (searchInput) searchInput.addEventListener('input', handleSearchInput);
    getElement('clear-search-btn')?.addEventListener('click', handleClearSearch);
    getElement('hide-closed-banner-btn')?.addEventListener('click', handleHideClosedBanner);
    getElement('share-btn')?.addEventListener('click', handleShare);
    
    const pills = document.querySelector('.category-pills');
    if (pills) pills.addEventListener('click', handleCategoryClick);

    DOMElements.menuItemsContainer.addEventListener('click', handleMenuItemClick);
    DOMElements.searchResultsContainer.addEventListener('click', handleMenuItemClick);
    
    document.getElementById('app-container').addEventListener('click', (e) => {
        const favButton = e.target.closest('.favorite-btn');
        if (favButton) {
            handleToggleFavorite(favButton.dataset.itemId);
        }
    });

    DOMElements.modalContainer.addEventListener('click', (e) => {
        if (e.target.closest('#modal-close-btn') || e.target.closest('#modal-final-close-btn') || e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
        const favButton = e.target.closest('#modal-favorite-btn');
        if (favButton) {
            handleToggleFavorite(favButton.dataset.itemId);
            favButton.classList.toggle('favorited');
        }
    });

    DOMElements.scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// --- INITIALIZATION ---
function initializeApp() {
    const initialTimeSlot = getCurrentTimeSlot();
    state.selectedTimeFilter = initialTimeSlot === 'closed' ? 'morning' : initialTimeSlot;

    renderUI();

    setInterval(() => {
        const newSlot = getCurrentTimeSlot();
        if (newSlot !== getCurrentTimeSlot()) {
           renderUI();
        }
    }, 60000);

    if (mockAdvertisements.length > 1) {
        setInterval(() => {
            state.currentAdIndex = (state.currentAdIndex + 1) % mockAdvertisements.length;
            renderAdCarousel();
        }, 5000);
    }
    
    window.addEventListener('scroll', () => {
        const shouldShow = window.scrollY > 400;
        if (state.showScrollTop !== shouldShow) {
            state.showScrollTop = shouldShow;
            DOMElements.scrollToTopBtn.style.display = shouldShow ? 'block' : 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeApp);