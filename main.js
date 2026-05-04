// ═══════════════════════════════════════════════
// TRANSLATION DATA
// ═══════════════════════════════════════════════
const translations = {
  en: {
    nav_home: "Home", nav_shop: "Shop", nav_story: "Our Story", nav_artisans: "Artisans",
    nav_art: "Loha Mati Art", nav_contact: "Contact", nav_cart: "Cart",
    hero_eyebrow: "Tribal Art · Odisha, India · 4000 years of tradition",
    hero_title_html: "The <em>lost-wax</em> art delivered to France",
    hero_subtitle: "Every piece is handcrafted by artisans from Odisha using the ancient lost-wax casting technique — 4000 years old. Unique, ethical, authentic.",
    hero_cta1: "Explore the Shop", hero_cta2: "Our Story",
    stat1: "Years of history", stat2: "Handmade", stat3: "Artisans supported",
    photo_placeholder: "Your Loha Mati craft photo here",
    hero_caption: "Artisan at work · Karamul village, Dhenkanal",
    marquee1: "Fair Trade", marquee2: "Delivery to France", marquee3: "Unique Pieces",
    marquee4: "Odisha Artisans", marquee5: "Ancient technique",
    trust1_title: "Fair Trade", trust1_sub: "Artisans paid fairly",
    trust2_title: "Delivery to France", trust2_sub: "7–14 working days",
    trust3_title: "Unique Pieces", trust3_sub: "Every work is original",
    trust4_title: "Easy Returns", trust4_sub: "14 days, no questions",
    prod_eyebrow: "Collection", prod_title_html: "<em>Featured</em> pieces",
    prod_desc: "Each object is cast in brass using the lost-wax method — a technique unchanged for 4000 years.",
    badge_new: "New", badge_bestseller: "Best-seller", badge_unique: "Unique piece",
    cat_deco: "Decoration", cat_sculpture: "Sculpture", cat_bijoux: "Jewellery",
    prod1_name: "Tribal Dancer", prod1_artisan: "by Suresh Mahali · Karamul, Dhenkanal",
    prod2_name: "Royal Elephant", prod2_artisan: "by Kamala Devi · Nuasahi, Dhenkanal",
    prod3_name: "Tribal Necklace", prod3_artisan: "by Lakshmi Sahoo · Karamul, Dhenkanal",
    incl_tax: "incl. tax",
    story_eyebrow: "Ancient Technique",
    story_title_html: "The <em>lost-wax</em> technique",
    story_body: "Over 4000 years old, the Loha Mati technique — called 'lost-wax' — is one of the oldest metal casting methods in the world. Each piece is unique, handcrafted by tribal artisans of Odisha.",
    story_quote: '"We shape metal as our ancestors did for millennia — with beeswax, clay and fire."',
    story_cite: "— Suresh Mahali, Loha Mati Artisan, Karamul, Dhenkanal",
    step1_title: "Wax modelling", step1_desc: "The shape is sculpted in natural beeswax",
    step2_title: "Clay coating", step2_desc: "The wax is coated with local river clay",
    step3_title: "Brass melting", step3_desc: "Molten metal replaces the wax in the mould",
    step4_title: "Hand finishing", step4_desc: "The artisan polishes and engraves final details",
    story_cta: "See the full process",
    photo_process: "Craft process photo here",
    artisan_eyebrow: "The Creators",
    artisan_title_html: "Meet <em>our artisans</em>",
    artisan_desc: "Every purchase directly supports an artisan family in the villages of Odisha.",
    craft_master: "Master artisan · 22 years", craft_jewel: "Loha Mati jewellery · 15 years",
    craft_sculpt: "Sculpture · 18 years", photo_artisan: "Artisan photo here",
    news_eyebrow: "Stay connected",
    news_title_html: "10% off your <em>first order</em>",
    news_desc: "Sign up to receive new collections, artisan stories and exclusive offers.",
    form_name: "Your first name", form_email: "Your email address",
    form_submit: "Subscribe and get -10%",
    form_note: "No spam. Easy unsubscribe at any time.",
    art_eyebrow: "The Heritage", art_title_html: "<em>Loha Mati</em> Art", art_desc: "Discover the timeless beauty of our craft through these captivating images, showcasing the finesse of each creation.",
    footer_tagline: "Odisha tribal art, handcrafted and delivered directly to France from artisan villages.",
    footer_shop: "Shop", footer_info: "Information", footer_help: "Help",
    footer_blog: "Blog", footer_shipping: "Shipping", footer_returns: "Returns",
    footer_faq: "FAQ", footer_copy: "© 2025 Loha Mati. All rights reserved.", footer_desc: "At Loha Mati, we believe a beautiful home begins with intention. We're more than a platform, we're a team of conscious curators dedicated to selecting only the best for your space.", footer_quick: "QUICK LINKS", footer_terms: "Terms and Conditions", footer_privacy: "Privacy Policy", footer_hours: "Active (Mon-Sat) 10 AM - 6 PM", footer_subscribe: "SUBSCRIBE TO OUR NEWSLETTER", footer_follow: "GIVE US A FOLLOW",
    footer_legal1: "Legal notice", footer_legal2: "Privacy", footer_cookies: "Cookies",
  },
  fr: {
    nav_home: "Accueil", nav_shop: "Boutique", nav_story: "Notre Histoire", nav_artisans: "Les Artisans",
    nav_art: "L'Art Loha Mati", nav_contact: "Contact", nav_cart: "Panier",
    hero_eyebrow: "Art Tribal · Odisha, Inde · 4000 ans de tradition",
    hero_title_html: "L'art de la <em>cire perdue</em> livré en France",
    hero_subtitle: "Chaque pièce est façonnée à la main par des artisans d'Odisha, en utilisant la technique ancestrale de la cire perdue vieille de 4000 ans. Unique, éthique, authentique.",
    hero_cta1: "Découvrir la boutique", hero_cta2: "Notre histoire",
    stat1: "Ans d'histoire", stat2: "Fait main", stat3: "Artisans soutenus",
    photo_placeholder: "Votre photo Loha Mati ici",
    hero_caption: "Artisan au travail · Village de Karamul, Dhenkanal",
    marquee1: "Commerce Équitable", marquee2: "Livraison France", marquee3: "Pièce Unique",
    marquee4: "Artisans d'Odisha", marquee5: "Technique ancestrale",
    trust1_title: "Commerce Équitable", trust1_sub: "Artisans payés justement",
    trust2_title: "Livraison en France", trust2_sub: "7–14 jours ouvrés",
    trust3_title: "Pièce Unique", trust3_sub: "Chaque œuvre est originale",
    trust4_title: "Retours Faciles", trust4_sub: "14 jours, sans questions",
    prod_eyebrow: "Collection", prod_title_html: "Pièces <em>choisies</em>",
    prod_desc: "Chaque objet est forgé dans le laiton par la méthode de la cire perdue — une technique inchangée depuis 4000 ans.",
    badge_new: "Nouveau", badge_bestseller: "Best-seller", badge_unique: "Pièce unique",
    cat_deco: "Décoration", cat_sculpture: "Sculpture", cat_bijoux: "Bijoux",
    prod1_name: "Danseuse Tribale", prod1_artisan: "par Suresh Mahali · Karamul, Dhenkanal",
    prod2_name: "Éléphant Royal", prod2_artisan: "par Kamala Devi · Nuasahi, Dhenkanal",
    prod3_name: "Collier Tribal", prod3_artisan: "par Lakshmi Sahoo · Karamul, Dhenkanal",
    incl_tax: "TTC",
    story_eyebrow: "Technique Ancestrale",
    story_title_html: "La technique de la <em>cire perdue</em>",
    story_body: "Vieille de plus de 4000 ans, la technique Loha Mati — appelée \"cire perdue\" — est l'une des plus anciennes méthodes de moulage du métal au monde. Chaque pièce est unique, façonnée à la main par des artisans tribaux d'Odisha.",
    story_quote: "\"Nous façonnons le métal comme nos ancêtres l'ont fait pendant des millénaires — avec de la cire d'abeille, de l'argile et du feu.\"",
    story_cite: "— Suresh Mahali, Artisan Loha Mati, Karamul, Dhenkanal",
    step1_title: "Modelage en cire", step1_desc: "La forme est sculptée dans de la cire d'abeille naturelle",
    step2_title: "Enrobage d'argile", step2_desc: "La cire est recouverte d'argile du fleuve local",
    step3_title: "Fusion du laiton", step3_desc: "Le métal fondu remplace la cire dans le moule",
    step4_title: "Finition à la main", step4_desc: "L'artisan polit et grave les détails finaux",
    story_cta: "Voir le processus complet",
    photo_process: "Photo du processus ici",
    artisan_eyebrow: "Les Créateurs",
    artisan_title_html: "Rencontrez <em>nos artisans</em>",
    artisan_desc: "Chaque achat soutient directement une famille d'artisans dans les villages d'Odisha.",
    craft_master: "Maître artisan · 22 ans", craft_jewel: "Bijoux Loha Mati · 15 ans",
    craft_sculpt: "Sculpture · 18 ans", photo_artisan: "Photo artisan ici",
    news_eyebrow: "Restez connecté",
    news_title_html: "10% sur votre <em>première commande</em>",
    news_desc: "Inscrivez-vous pour recevoir nos nouvelles collections, les histoires des artisans et des offres exclusives.",
    form_name: "Votre prénom", form_email: "Votre adresse email",
    form_submit: "S'inscrire et obtenir -10%",
    form_note: "Pas de spam. Désinscription facile à tout moment.",
    art_eyebrow: "L'Héritage", art_title_html: "L'Art <em>Loha Mati</em>", art_desc: "Découvrez la beauté intemporelle de notre artisanat à travers ces images captivantes, montrant la finesse de chaque création.",
    footer_tagline: "L'art tribal d'Odisha, façonné à la main et livré directement en France depuis les villages d'artisans.",
    footer_shop: "Boutique", footer_info: "Informations", footer_help: "Aide",
    footer_blog: "Blog", footer_shipping: "Livraison", footer_returns: "Retours",
    footer_faq: "FAQ", footer_copy: "© 2025 Loha Mati. Tous droits réservés.",
    footer_legal1: "Mentions légales", footer_legal2: "Confidentialité", footer_cookies: "Cookies",
  },
  hi: {
    nav_home: "मुख्य पृष्ठ", nav_shop: "दुकान", nav_story: "हमारी कहानी", nav_artisans: "कारीगर",
    nav_art: "लोहा माटी कला", nav_contact: "संपर्क", nav_cart: "कार्ट",
    hero_eyebrow: "जनजातीय कला · ओडिशा, भारत · 4000 वर्ष की परंपरा",
    hero_title_html: "<em>खोई हुई मोम</em> की कला फ्रांस तक",
    hero_subtitle: "हर टुकड़ा ओडिशा के कारीगरों द्वारा 4000 साल पुरानी 'लॉस्ट वैक्स' तकनीक से हाथ से बनाया गया है। अद्वितीय, नैतिक, प्रामाणिक।",
    hero_cta1: "दुकान देखें", hero_cta2: "हमारी कहानी",
    stat1: "वर्षों का इतिहास", stat2: "हस्तनिर्मित", stat3: "कारीगर समर्थित",
    photo_placeholder: "ढोकरा शिल्प फोटो यहाँ",
    hero_caption: "कारीगर काम में · करमुल गाँव, ढेंकानाल",
    marquee1: "उचित व्यापार", marquee2: "फ्रांस डिलीवरी", marquee3: "अद्वितीय टुकड़ा",
    marquee4: "ओडिशा कारीगर", marquee5: "प्राचीन तकनीक",
    trust1_title: "उचित व्यापार", trust1_sub: "कारीगरों को उचित भुगतान",
    trust2_title: "फ्रांस डिलीवरी", trust2_sub: "7–14 कार्य दिवस",
    trust3_title: "अद्वितीय टुकड़ा", trust3_sub: "हर काम मौलिक है",
    trust4_title: "आसान वापसी", trust4_sub: "14 दिन, बिना सवाल",
    prod_eyebrow: "संग्रह", prod_title_html: "<em>चुनी हुई</em> कृतियाँ",
    prod_desc: "हर वस्तु 'खोई मोम' विधि से पीतल में ढाली जाती है — 4000 साल से अपरिवर्तित तकनीक।",
    badge_new: "नया", badge_bestseller: "सर्वश्रेष्ठ विक्रेता", badge_unique: "अद्वितीय",
    cat_deco: "सजावट", cat_sculpture: "मूर्तिकला", cat_bijoux: "आभूषण",
    prod1_name: "जनजातीय नृत्यांगना", prod1_artisan: "सुरेश महाली द्वारा · करमुल, ढेंकानाल",
    prod2_name: "शाही हाथी", prod2_artisan: "कमला देवी द्वारा · नुआसाही, ढेंकानाल",
    prod3_name: "जनजातीय हार", prod3_artisan: "लक्ष्मी साहू द्वारा · करमुल, ढेंकानाल",
    incl_tax: "कर सहित",
    story_eyebrow: "प्राचीन तकनीक",
    story_title_html: "<em>खोई मोम</em> की तकनीक",
    story_body: "4000 से अधिक वर्ष पुरानी ढोकरा तकनीक — 'खोई मोम' — दुनिया में धातु ढलाई की सबसे पुरानी विधियों में से एक है। हर टुकड़ा अद्वितीय है।",
    story_quote: '"हम धातु को उसी तरह आकार देते हैं जैसे हमारे पूर्वजों ने सहस्राब्दियों से किया — मोम, मिट्टी और आग से।"',
    story_cite: "— सुरेश महाली, ढोकरा कारीगर, करमुल, ढेंकानाल",
    step1_title: "मोम मॉडलिंग", step1_desc: "आकृति प्राकृतिक मधुमोम में बनाई जाती है",
    step2_title: "मिट्टी लेपन", step2_desc: "मोम को स्थानीय नदी की मिट्टी से ढका जाता है",
    step3_title: "पीतल गलाना", step3_desc: "पिघली धातु मोम की जगह लेती है",
    step4_title: "हस्त परिष्करण", step4_desc: "कारीगर अंतिम विवरण पॉलिश करते हैं",
    story_cta: "पूरी प्रक्रिया देखें",
    photo_process: "शिल्प प्रक्रिया फोटो यहाँ",
    artisan_eyebrow: "निर्माता",
    artisan_title_html: "हमारे <em>कारीगरों</em> से मिलें",
    artisan_desc: "हर खरीद सीधे ओडिशा के गाँवों में एक कारीगर परिवार को सहायता करती है।",
    craft_master: "मास्टर कारीगर · 22 साल", craft_jewel: "ढोकरा आभूषण · 15 साल",
    craft_sculpt: "मूर्तिकला · 18 साल", photo_artisan: "कारीगर फोटो यहाँ",
    news_eyebrow: "जुड़े रहें",
    news_title_html: "अपने <em>पहले ऑर्डर</em> पर 10% छूट",
    news_desc: "नए संग्रह, कारीगर कहानियाँ और विशेष ऑफर पाने के लिए साइन अप करें।",
    form_name: "आपका नाम", form_email: "आपका ईमेल",
    form_submit: "साइन अप करें और -10% पाएं",
    form_note: "कोई स्पैम नहीं। किसी भी समय आसान अनसब्सक्राइब।",
    art_eyebrow: "विरासत", art_title_html: "<em>लोहा माटी</em> कला", art_desc: "इन मनमोहक छवियों के माध्यम से हमारे शिल्प की शाश्वत सुंदरता की खोज करें, जो प्रत्येक रचना की सूक्ष्मता को दर्शाती हैं।",
    footer_tagline: "ओडिशा की जनजातीय कला, हाथ से बनाई और कारीगर गाँवों से सीधे फ्रांस पहुँचाई।",
    footer_shop: "दुकान", footer_info: "जानकारी", footer_help: "सहायता",
    footer_blog: "ब्लॉग", footer_shipping: "शिपिंग", footer_returns: "वापसी",
    footer_faq: "FAQ", footer_copy: "© 2025 Loha Mati. सर्वाधिकार सुरक्षित।",
    footer_legal1: "कानूनी नोटिस", footer_legal2: "गोपनीयता", footer_cookies: "कुकीज़",
  },
  od: {
    nav_home: "ମୂଳପୃଷ୍ଠା", nav_shop: "ଦୋକାନ", nav_story: "ଆମ କଥା", nav_artisans: "କারিଗର",
    nav_art: "ଲୋହା ମାଟି କଳା", nav_contact: "ଯୋଗାଯୋଗ", nav_cart: " କାର୍ଟ",
    hero_eyebrow: "ଜନଜାତୀୟ କଳା · ଓଡ଼ିଶା, ଭାରତ · ୪୦୦୦ ବର୍ଷର ପରମ୍ପରା",
    hero_title_html: "<em>ହଜିଯାଇଥିବା ମହୁ</em> କଳା ଫ୍ରାନ୍ସ ପାଇଁ",
    hero_subtitle: "ପ୍ରତ୍ୟେକ ଖଣ୍ଡ ଓଡ଼ିଶାର କारিগରଙ୍କ ଦ୍ୱାରା ୪୦୦୦ ବର୍ଷ ପୁରୁଣା ହଜିଯାଇଥିବା ମହୁ ଢ଼ଳେଇ ପ୍ରଣାଳୀ ବ୍ୟବହାର କରି ହାତରେ ତିଆରି। ଅନନ୍ୟ, ନୈତିକ, ପ୍ରାମାଣିକ।",
    hero_cta1: "ଦୋକାନ ଦେଖନ୍ତୁ", hero_cta2: "ଆମ କଥା",
    stat1: "ବର୍ଷର ଇତିହାସ", stat2: "ହାତରେ ତିଆରି", stat3: "କାରିଗର ସହାୟତା",
    photo_placeholder: "ଢ଼ୋକ୍ରା ଶିଳ୍ପ ଫୋଟୋ ଏଠାରେ",
    hero_caption: "କାରିଗର କାର୍ଯ୍ୟରେ · କରମୁଲ ଗ୍ରାମ, ଢ଼େଙ୍କାନାଳ",
    marquee1: "ନ୍ୟାୟ ବ୍ୟବସାୟ", marquee2: "ଫ୍ରାନ୍ସ ଡେଲିଭରି", marquee3: "ଅନନ୍ୟ ଖଣ୍ଡ",
    marquee4: "ଓଡ଼ିଶା କାରିଗର", marquee5: "ପ୍ରାଚୀନ ପ୍ରଣାଳୀ",
    trust1_title: "ନ୍ୟାୟ ବ୍ୟବସାୟ", trust1_sub: "କାରିଗରଙ୍କୁ ଉଚିତ ପଇସା",
    trust2_title: "ଫ୍ରାନ୍ସ ଡେଲିଭରି", trust2_sub: "୭–୧୪ କାର୍ଯ୍ୟ ଦିନ",
    trust3_title: "ଅନନ୍ୟ ଖଣ୍ଡ", trust3_sub: "ପ୍ରତ୍ୟେକ କୃତି ମୌଳିକ",
    trust4_title: "ସହଜ ଫେରସ୍ତ", trust4_sub: "୧୪ ଦିନ, ପ୍ରଶ୍ନ ବିନା",
    prod_eyebrow: "ସଂଗ୍ରହ", prod_title_html: "<em>ବାଛିଥିବା</em> ସୃଷ୍ଟି",
    prod_desc: "ପ୍ରତ୍ୟେକ ବସ୍ତୁ ୪୦୦୦ ବର୍ଷ ଅପରିବର୍ତ୍ତିତ ପ୍ରଣାଳୀ ଦ୍ୱାରା ପିତ୍ତଳରେ ଢ଼ଳାଯାଏ।",
    badge_new: "ନୂଆ", badge_bestseller: "ସର୍ବଶ୍ରେଷ୍ଠ ବିକ୍ରୟ", badge_unique: "ଅନନ୍ୟ",
    cat_deco: "ସଜ୍ଜା", cat_sculpture: "ମୂର୍ତ୍ତି", cat_bijoux: "ଗହଣା",
    prod1_name: "ଜନଜାତୀୟ ନର୍ତ୍ତକୀ", prod1_artisan: "ସୁରେଶ ମାହାଲି ଦ୍ୱାରା · କରମୁଲ, ଢ଼େଙ୍କାନାଳ",
    prod2_name: "ରାଜକୀୟ ହାତୀ", prod2_artisan: "କମଳା ଦେବୀ ଦ୍ୱାରା · ନୁଆସାହି, ଢ଼େଙ୍କାନାଳ",
    prod3_name: "ଜନଜାତୀୟ ହାର", prod3_artisan: "ଲକ୍ଷ୍ମୀ ସାହୁ ଦ୍ୱାରା · କରମୁଲ, ଢ଼େଙ୍କାନାଳ",
    incl_tax: "କର ସହ",
    story_eyebrow: "ପ୍ରାଚୀନ ପ୍ରଣାଳୀ",
    story_title_html: "<em>ହଜିଯାଇଥିବା ମହୁ</em> ପ୍ରଣାଳୀ",
    story_body: "୪୦୦୦ ବର୍ଷରୁ ଅଧିକ ପୁରୁଣା ଢ଼ୋକ୍ରା ପ୍ରଣାଳୀ ବିଶ୍ୱର ସବୁଠୁ ପ୍ରାଚୀନ ଧାତୁ ଢ଼ଳେଇ ପ୍ରଣାଳୀ ମଧ୍ୟରୁ ଗୋଟିଏ।",
    story_quote: '"ଆମ ପୂର୍ବପୁରୁଷ ଯେପରି ସହସ୍ର ବର୍ଷ ଧରି ଧାତୁ ଗଢ଼ିଲେ — ମହୁ, ମାଟି ଓ ଅଗ୍ନି ଦ୍ୱାରା — ଆମ ସେହି ପଥ ଅନୁସରଣ କରୁ।"',
    story_cite: "— ସୁରେଶ ମାହାଲି, ଢ଼ୋକ୍ରା କାରିଗର, କରମୁଲ, ଢ଼େଙ୍କାନାଳ",
    step1_title: "ମହୁ ମଡ଼େଲିଂ", step1_desc: "ପ୍ରାକୃତିକ ମଧୁ ଲାହିରେ ଆକୃତି ତିଆରି",
    step2_title: "ମାଟି ଲେପ", step2_desc: "ମହୁ ଉପରେ ସ୍ଥାନୀୟ ନଦୀ ମାଟି ଲଗାଯାଏ",
    step3_title: "ପିତ୍ତଳ ଗଳାଣ", step3_desc: "ପିଘଳା ଧାତୁ ମହୁ ସ୍ଥାନ ନେଏ",
    step4_title: "ହସ୍ତ ସମାପ୍ତି", step4_desc: "କାରିଗର ଅଂଶ ଉଜ୍ଜ୍ୱଳ ଓ ଖୋଦେଇ କରନ୍ତି",
    story_cta: "ସମ୍ପୂର୍ଣ ପ୍ରକ୍ରିୟା ଦେଖନ୍ତୁ",
    photo_process: "ଶିଳ୍ପ ପ୍ରକ୍ରିୟା ଫୋଟୋ ଏଠାରେ",
    artisan_eyebrow: "ସ୍ରଷ୍ଟାଗଣ",
    artisan_title_html: "ଆମ <em>କାରିଗରଙ୍କୁ</em> ଭେଟନ୍ତୁ",
    artisan_desc: "ପ୍ରତ୍ୟେକ କ୍ରୟ ସିଧାସଳଖ ଓଡ଼ିଶା ଗ୍ରାମର ଏକ କାରିଗର ପରିବାରକୁ ସହାୟ କରେ।",
    craft_master: "ମାଷ୍ଟର କାରିଗର · ୨୨ ବର୍ଷ", craft_jewel: "ଢ଼ୋକ୍ରା ଗହଣା · ୧୫ ବର୍ଷ",
    craft_sculpt: "ମୂର୍ତ୍ତି · ୧୮ ବର୍ଷ", photo_artisan: "କାରିଗର ଫୋଟୋ ଏଠାରେ",
    news_eyebrow: "ସଂଯୁକ୍ତ ରୁହନ୍ତୁ",
    news_title_html: "ଆପଣଙ୍କ <em>ପ୍ରଥମ ଅର୍ଡ଼ର</em>ରେ ୧୦% ଛାଡ଼",
    news_desc: "ନୂଆ ସଂଗ୍ରହ, କାରିଗର କାହାଣୀ ଓ ବିଶେଷ ଅଫର ପାଇଁ ସାଇନ ଅପ କରନ୍ତୁ।",
    form_name: "ଆପଣଙ୍କ ନାମ", form_email: "ଆପଣଙ୍କ ଇମେଲ",
    form_submit: "ସାଇନ ଅପ ଓ -୧୦% ପାଆନ୍ତୁ",
    form_note: "କୌଣସି ସ୍ପ୍ୟାମ ନାହିଁ। ଯେକୌଣସି ସମୟ ସହଜ ଅନସବ୍ସ୍କ୍ରାଇବ।",
    art_eyebrow: "ଐତିହ୍ୟ", art_title_html: "<em>ଲୋହା ମାଟି</em> କଳା", art_desc: "ପ୍ରତ୍ୟେକ ସୃଷ୍ଟିର ସୂକ୍ଷ୍ମତା ଦେଖାଉଥିବା ଏହି ମନମୋହକ ଚିତ୍ରଗୁଡ଼ିକ ମାଧ୍ୟମରେ ଆମର ଶିଳ୍ପର ଶାଶ୍ୱତ ସୌନ୍ଦର୍ଯ୍ୟ ଆବିଷ୍କାର କରନ୍ତୁ।",
    footer_tagline: "ଓଡ଼ିଶାର ଜନଜାତୀୟ କଳା, ହାତରେ ତିଆରି ଏବଂ ଗ୍ରାମ ଠାରୁ ସିଧାସଳଖ ଫ୍ରାନ୍ସ ଡେଲିଭରି।",
    footer_shop: "ଦୋକାନ", footer_info: "ସୂଚନା", footer_help: "ସାହାଯ୍ୟ",
    footer_blog: "ବ୍ଲଗ", footer_shipping: "ଡେଲିଭରି", footer_returns: "ଫେରସ୍ତ",
    footer_faq: "FAQ", footer_copy: "© ୨୦୨୫ Loha Mati. ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",
    footer_legal1: "ଆଇନ ସୂଚନା", footer_legal2: "ଗୋପନୀୟତା", footer_cookies: "କୁକିଜ଼",
  }
};

// ═══════════════════════════════════════════════
// LANGUAGE ENGINE
// ═══════════════════════════════════════════════
let currentLang = 'fr';

function setLang(lang) {
  try { localStorage.setItem("lohamati_lang", lang); } catch(e) {}
  currentLang = lang;
  const t = translations[lang];

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update placeholder inputs
  document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
    const key = el.getAttribute('data-placeholder-i18n');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-' + lang).classList.add('active');

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update marquee (rebuild both halves)
  const m = document.querySelector('.marquee-inner');
  if (m) {
    const keys = ['marquee1','marquee2','marquee3','marquee4','marquee5'];
    let html = '';
    for (let i = 0; i < 2; i++) {
      keys.forEach(k => { html += `<span>${t[k] || ''}</span>`; });
    }
    m.innerHTML = html;
  }

  // Update page title
  const titles = { en: 'Loha Mati — Tribal Art of Odisha', fr: 'Loha Mati — L\'Art Tribal d\'Odisha', hi: 'Loha Mati — ओडिशा की जनजातीय कला', od: 'Loha Mati — ଓଡ଼ିଶାର ଜନଜାତୀୟ କଳା' };
  document.title = titles[lang];
}

// ═══════════════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ═══════════════════════════════════════════════
// MOBILE MENU
// ═══════════════════════════════════════════════
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const isOpen = links.style.display === 'flex';
  links.style.display = isOpen ? 'none' : 'flex';
  if (!isOpen) {
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '72px';
    links.style.left = '0'; links.style.right = '0';
    links.style.background = 'rgba(13, 11, 9, 0.95)';
    links.style.backdropFilter = 'blur(20px)';
    links.style.padding = '20px 24px';
    links.style.borderBottom = '1px solid rgba(196, 113, 58, 0.12)';
    links.style.zIndex = '99';
    links.style.gap = '18px';
  }
}

// Init from localStorage or default to French
let savedLang = 'fr';
try { savedLang = localStorage.getItem('lohamati_lang') || 'fr'; } catch(e) {}
setLang(savedLang);

// ═══════════════════════════════════════════════
// SLIDE OUT CART LOGIC
// ═══════════════════════════════════════════════
function openCart() {
  document.querySelector('.cart-drawer').classList.add('open');
  document.querySelector('.cart-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.querySelector('.cart-drawer').classList.remove('open');
  document.querySelector('.cart-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function initCart() {
  // Attach to nav cart button
  const cartBtns = document.querySelectorAll('.cart-btn');
  cartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  });

  // Attach to add to cart buttons (products page & cards)
  const addBtns = document.querySelectorAll('.add-btn, .btn-primary');
  addBtns.forEach(btn => {
    if(btn.textContent.includes('ADD TO CART') || btn.textContent === '+') {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // stop link navigation if button is inside <a>
        openCart();
      });
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCart);
} else {
  initCart();
}
