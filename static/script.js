
    // elements
    const mainView = document.getElementById('mainView');
    const resultView = document.getElementById('resultView');
    const imageInput = document.getElementById('imageInput');
    const preview = document.getElementById('preview');
    const predictBtn = document.getElementById('predictBtn');
    const resultPreview = document.getElementById('resultPreview');
    const backBtn = document.getElementById('backBtn');
    const newPredictBtn = document.getElementById('newPredictBtn');

    const breedNameEl = document.getElementById('breedName');
    const enText = document.getElementById('enText');
    const hiText = document.getElementById('hiText');
    const teText = document.getElementById('teText');
    const breedSummary = document.getElementById('breedSummary');
    const extraInfo = document.getElementById('extraInfo');

    // breed descriptions (expandable)
    const breedDescriptions = {
  "Ayrshire cattle": {
    en: `
    🐄 **Breed Overview:**  
    Ayrshire are medium-sized dairy cattle originating from Scotland, known for their adaptability, strong constitution, and high-quality milk with balanced fat and protein.

    🌾 **Uses:**  
    - Ideal for both **milk production** and **pasture-based farming systems**.  
    - Excellent for **small-scale and large dairy farms**.  
    - Their calm nature makes them suitable for **integrated crop-livestock farms**.

    🧫 **Common Diseases:**  
    - Mastitis, Foot Rot, and Bovine Respiratory Disease (BRD).  

    💊 **Treatment & Maintenance:**  
    - Maintain clean milking practices to prevent mastitis.  
    - Provide balanced nutrition with mineral supplements.  
    - Regular hoof trimming and vaccination improve longevity.
    `,
    hi: `
    🐄 **नस्ल परिचय:**  
    एयरशायर स्कॉटलैंड की मध्यम आकार की डेयरी नस्ल है जो अनुकूलता, मजबूत स्वास्थ्य और संतुलित वसा व प्रोटीन वाले दूध के लिए जानी जाती है।

    🌾 **उपयोग:**  
    - दूध उत्पादन और चराई आधारित कृषि के लिए आदर्श।  
    - छोटे और बड़े डेयरी फार्म दोनों के लिए उपयुक्त।  
    - शांत स्वभाव के कारण मिश्रित कृषि में उपयोगी।

    🧫 **सामान्य रोग:**  
    - मास्टाइटिस, फुट रॉट, श्वसन रोग।

    💊 **रखरखाव व उपचार:**  
    - दुग्ध प्रक्रिया में स्वच्छता बनाए रखें।  
    - संतुलित आहार व खनिज पूरक दें।  
    - नियमित टीकाकरण और खुर काटना आवश्यक है।
    `,
    te: `
    🐄 **జాతి పరిచయం:**  
    ఎయిర్షైర్ పశువులు స్కాట్లాండ్‌కు చెందిన మధ్య పరిమాణపు పాల పశువులు. ఇవి బలమైన ఆరోగ్యం మరియు సమతుల్య కొవ్వు, ప్రోటీన్ కలిగిన పాలను ఇస్తాయి.

    🌾 **ఉపయోగాలు:**  
    - పాలు ఉత్పత్తికి మరియు పచ్చికలో పెంచడానికి అనుకూలం.  
    - చిన్న మరియు పెద్ద డైరీల కోసం అనువైనది.  
    - ప్రశాంత స్వభావం వల్ల వ్యవసాయ-పశు మిశ్రమ వ్యవస్థలలో ఉపయోగకరం.

    🧫 **సాధారణ రోగాలు:**  
    - మాస్టిటిస్, ఫుట్ రాట్, శ్వాస సంబంధ వ్యాధులు.  

    💊 **చికిత్స మరియు సంరక్షణ:**  
    - పాలు పితికేటప్పుడు పరిశుభ్రత పాటించాలి.  
    - సమతుల ఆహారం మరియు ఖనిజాలు ఇవ్వాలి.  
    - క్రమం తప్పకుండా వ్యాక్సిన్ మరియు గోరింటాకు కత్తిరించడం అవసరం.
    `
  },

  "Brown Swiss cattle": {
    en: `
    🐄 **Breed Overview:**  
    Brown Swiss are one of the oldest dairy breeds, known for endurance, gentle temperament, and milk ideal for cheese making due to its high protein-to-fat ratio.

    🌾 **Uses:**  
    - Suitable for **milk, cheese, and dairy-based products**.  
    - Adaptable to **hill and mixed farming regions**.  
    - Strong legs and body make them useful for **light agricultural work**.

    🧫 **Common Diseases:**  
    - Milk fever, ketosis, and parasitic infections.

    💊 **Treatment & Maintenance:**  
    - Ensure calcium supplements after calving.  
    - Regular deworming and vitamin injections.  
    - Maintain clean sheds to prevent infections.
    `,
    hi: `
    🐄 **नस्ल परिचय:**  
    ब्राउन स्विस प्राचीन नस्ल है जो धैर्य, शांत स्वभाव और उच्च प्रोटीनयुक्त दूध के लिए जानी जाती है।

    🌾 **उपयोग:**  
    - दूध, पनीर और अन्य डेयरी उत्पादों के लिए आदर्श।  
    - पहाड़ी और मिश्रित खेती वाले क्षेत्रों के लिए उपयुक्त।  
    - हल्के कृषि कार्यों के लिए भी उपयोगी।

    🧫 **सामान्य रोग:**  
    - मिल्क फीवर, कीटोसिस, परजीवी संक्रमण।

    💊 **उपचार व रखरखाव:**  
    - बछड़े के जन्म के बाद कैल्शियम देना आवश्यक।  
    - नियमित कृमिनाशक दवा और विटामिन देना चाहिए।  
    - गोशाला साफ रखें।
    `,
    te: `
    🐄 **జాతి పరిచయం:**  
    బ్రౌన్ స్విస్ పశువులు పురాతన జాతి. ఇవి అధిక ప్రోటీన్ కలిగిన పాలను ఇస్తాయి మరియు చీజ్ తయారికి చాలా అనుకూలం.

    🌾 **ఉపయోగాలు:**  
    - పాలు, చీజ్, డైరీ ఉత్పత్తుల కోసం అనువైనవి.  
    - కొండప్రాంతాలు మరియు మిశ్రమ వ్యవసాయానికి సరైనవి.  
    - లేత వ్యవసాయ పనులకూ ఉపయోగపడతాయి.

    🧫 **సాధారణ రోగాలు:**  
    - మిల్క్ ఫీవర్, కీటోసిస్, పరాన్నజీవి వ్యాధులు.

    💊 **చికిత్స & సంరక్షణ:**  
    - ప్రసవం తర్వాత కాల్షియం ఇవ్వాలి.  
    - క్రమం తప్పకుండా డీ-వార్మింగ్ చేయాలి.  
    - షెడ్డు పరిశుభ్రంగా ఉంచాలి.
    `
  },

  "Holstein Friesian cattle": {
    en: `
    🐄 **Breed Overview:**  
    Holstein Friesians are world-leading dairy cattle with the highest milk yield potential, originally from the Netherlands.

    🌾 **Uses:**  
    - High-yield **commercial dairy farms**.  
    - **Farming integration** for manure-based soil enrichment.  
    - Excellent for **milk supply chains and cooperatives**.

    🧫 **Common Diseases:**  
    - Mastitis, milk fever, and fertility problems.

    💊 **Treatment & Maintenance:**  
    - Provide high-energy balanced feed.  
    - Maintain cooling systems in hot regions.  
    - Routine veterinary checkups for breeding efficiency.
    `,
    hi: `
    🐄 **नस्ल परिचय:**  
    होलस्टीन-फ्रिज़ियन नीदरलैंड की नस्ल है जो सबसे अधिक दूध उत्पादन के लिए जानी जाती है।

    🌾 **उपयोग:**  
    - बड़े व्यावसायिक डेयरी फार्मों के लिए।  
    - गोबर से मिट्टी की उर्वरता बढ़ाने के लिए कृषि में उपयोगी।  
    - दूध आपूर्ति शृंखला के लिए आदर्श।

    🧫 **सामान्य रोग:**  
    - मास्टाइटिस, मिल्क फीवर, बांझपन।

    💊 **रखरखाव व उपचार:**  
    - ऊर्जा युक्त संतुलित आहार दें।  
    - गर्म क्षेत्रों में ठंडक प्रणाली बनाए रखें।  
    - नियमित पशु चिकित्सक जांच आवश्यक।
    `,
    te: `
    🐄 **జాతి పరిచయం:**  
    హోల్స్టీన్ ఫ్రైసియన్ ప్రపంచంలో అత్యధిక పాలు ఇచ్చే జాతి. ఇది నెదర్లాండ్స్‌కు చెందినది.

    🌾 **ఉపయోగాలు:**  
    - పెద్ద స్థాయి డైరీ ఫారముల కోసం.  
    - ఎరువుగా పశువుల మలం వినియోగం ద్వారా వ్యవసాయానికి మద్దతు.  
    - పాల సరఫరా గొలుసులలో ఉపయోగపడుతుంది.

    🧫 **సాధారణ రోగాలు:**  
    - మాస్టిటిస్, మిల్క్ ఫీవర్, సంతాన సమస్యలు.  

    💊 **చికిత్స & సంరక్షణ:**  
    - అధిక శక్తి ఉన్న ఆహారం ఇవ్వాలి.  
    - వేడి ప్రాంతాల్లో శీతలీకరణ ఏర్పాట్లు చేయాలి.  
    - క్రమం తప్పకుండా వెటర్నరీ చెకప్ చేయాలి.
    `
  },

  "Jersey cattle": {
    en: `
    🐄 **Breed Overview:**  
    Jersey cattle are small but very productive dairy cows, famous for rich, creamy milk with high butterfat — perfect for ghee, butter, and value-added products.

    🌾 **Uses:**  
    - Ideal for **home-scale dairies** and **low-input farms**.  
    - Can be used for **organic agriculture** due to low feed requirement.  
    - Also beneficial in **crossbreeding programs**.

    🧫 **Common Diseases:**  
    - Milk fever, heat stress, and metabolic disorders.

    💊 **Treatment & Maintenance:**  
    - Provide shade and clean water.  
    - Supplement calcium and vitamins post-calving.  
    - Moderate temperature and balanced diet are key.
    `,
    hi: `
    🐄 **नस्ल परिचय:**  
    जर्सी छोटी नस्ल की परंतु बहुत मलाईदार दूध देने वाली गाय है, जिसका दूध घी, मक्खन और अन्य उत्पादों के लिए उपयुक्त है।

    🌾 **उपयोग:**  
    - घरेलू डेयरी व जैविक खेती के लिए उपयुक्त।  
    - कम चारा आवश्यक होने से छोटे किसानों के लिए आदर्श।  
    - संकरण (क्रॉसब्रीडिंग) में उपयोगी।

    🧫 **सामान्य रोग:**  
    - मिल्क फीवर, हीट स्ट्रेस, मेटाबॉलिक रोग।

    💊 **रखरखाव व उपचार:**  
    - छाया और स्वच्छ पानी की व्यवस्था करें।  
    - प्रसव के बाद कैल्शियम और विटामिन दें।  
    - संतुलित आहार और ठंडा वातावरण रखें।
    `,
    te: `
    🐄 **జాతి పరిచయం:**  
    జెర్సీ పశువులు చిన్న పరిమాణం గలవి కానీ అధిక కొవ్వు కలిగిన పాలను ఇస్తాయి. ఇవి నెయ్యి, వెన్న తయారికి అద్భుతంగా ఉపయోగపడతాయి.

    🌾 **ఉపయోగాలు:**  
    - చిన్న డైరీలు, సేంద్రీయ వ్యవసాయం కోసం సరైనవి.  
    - తక్కువ ఆహారం అవసరం ఉండటంతో చిన్న రైతులకు ఉపయోగకరం.  
    - క్రాస్‌బ్రీడింగ్‌లో కూడా ఉపయోగిస్తారు.

    🧫 **సాధారణ రోగాలు:**  
    - మిల్క్ ఫీవర్, వేడి ఒత్తిడి, జీవక్రియ సంబంధ వ్యాధులు.

    💊 **చికిత్స & సంరక్షణ:**  
    - నీడ మరియు పరిశుభ్రమైన నీరు ఇవ్వాలి.  
    - ప్రసవం తర్వాత కాల్షియం, విటమిన్లు ఇవ్వాలి.  
    - సమతుల ఆహారం మరియు తగిన ఉష్ణోగ్రత కల్పించాలి.
    `
  },

  "Red Dane cattle": {
    en: `
    🐄 **Breed Overview:**  
    Red Dane (Danish Red) are dual-purpose cattle bred for both milk and meat. They are calm, disease-resistant, and thrive in tropical and temperate climates.

    🌾 **Uses:**  
    - Dual-purpose: **milk & beef production**.  
    - Excellent for **mixed crop-livestock farming systems**.  
    - Contribute to **organic manure and soil fertility** improvement.

    🧫 **Common Diseases:**  
    - Tick-borne fever, parasitic infections, and foot rot.

    💊 **Treatment & Maintenance:**  
    - Regular deworming and tick control.  
    - Maintain dry flooring to prevent hoof problems.  
    - Ensure access to clean fodder and minerals.
    `,
    hi: `
    🐄 **नस्ल परिचय:**  
    रेड डेन (डेनिश रेड) दूध और मांस दोनों के लिए उपयोगी नस्ल है। यह शांत, रोग प्रतिरोधक और विभिन्न जलवायु में टिकाऊ है।

    🌾 **उपयोग:**  
    - दुग्ध व मांस उत्पादन दोनों के लिए।  
    - मिश्रित कृषि प्रणाली में उपयुक्त।  
    - जैविक खाद व मिट्टी की उर्वरता बढ़ाने में सहायक।

    🧫 **सामान्य रोग:**  
    - टिक-बोर्न फीवर, परजीवी संक्रमण, फुट रॉट।

    💊 **रखरखाव व उपचार:**  
    - नियमित कृमिनाशक और टिक नियंत्रण करें।  
    - सूखी जमीन पर रखें।  
    - स्वच्छ चारा और खनिज दें।
    `,
    te: `
    🐄 **జాతి పరిచయం:**  
    రెడ్ డేన్ పశువులు పాలు మరియు మాంసం రెండింటికీ ఉపయోగపడతాయి. ఇవి ప్రశాంతంగా ఉండి వ్యాధులకు నిరోధకత కలిగి ఉంటాయి.

    🌾 **ఉపయోగాలు:**  
    - ద్వంద్వ ప్రయోజనం: పాలు మరియు మాంస ఉత్పత్తి.  
    - పంట-పశు మిశ్రమ వ్యవసాయ వ్యవస్థలకు సరైనవి.  
    - నేల ఉరుకుతనం పెంచడంలో సహాయం చేస్తాయి.

    🧫 **సాధారణ రోగాలు:**  
    - టిక్-బోర్న్ ఫీవర్, పరాన్నజీవి వ్యాధులు, ఫుట్ రాట్.  

    💊 **చికిత్స & సంరక్షణ:**  
    - క్రమం తప్పకుండా టిక్ నియంత్రణ చేయాలి.  
    - పొడి నేలపై ఉంచాలి.  
    - శుభ్రమైన ఆహారం మరియు ఖనిజాలు ఇవ్వాలి.
    `
  }
};

    // Preview selected image in main view
    imageInput.addEventListener('change', () => {
      const file = imageInput.files[0];
      if (!file) {
        preview.style.display = 'none';
        document.getElementById('mainResult').textContent = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        preview.src = e.target.result;
        preview.style.display = 'block';
        // clear previous messages
        document.getElementById('mainResult').textContent = '';
      };
      reader.readAsDataURL(file);
    });

    // Helper to switch views
    function showResultView() {
      mainView.style.display = 'none';
      mainView.setAttribute('aria-hidden','true');
      resultView.style.display = 'flex';
      resultView.setAttribute('aria-hidden','false');
      // scroll into view if needed
      resultView.scrollIntoView({behavior:'smooth', block:'center'});
    }
    function showMainView() {
      resultView.style.display = 'none';
      resultView.setAttribute('aria-hidden','true');
      mainView.style.display = 'block';
      mainView.setAttribute('aria-hidden','false');
      window.scrollTo({top:0,behavior:'smooth'});
      // reset preview if you want; keep preview visible so user can see last uploaded image
    }

    // Predict button click -> send to backend
    predictBtn.addEventListener('click', async () => {
      const file = imageInput.files[0];
      if (!file) {
        document.getElementById('mainResult').textContent = 'Please select an image.';
        return;
      }

      // show small inline feedback
      document.getElementById('mainResult').textContent = '⏳ Predicting...';

      const formData = new FormData();
      formData.append('image', file);

      try {
        const resp = await fetch('http://127.0.0.1:5000/predict', {
          method: 'POST',
          body: formData
        });

        if (!resp.ok) {
          throw new Error('Server error: ' + resp.status);
        }

        const data = await resp.json();

        if (data.error) {
          document.getElementById('mainResult').textContent = '❌ ' + data.error;
          return;
        }

        const breed = data.predicted_breed || 'Unknown';
        const confidence = (typeof data.confidence === 'number') ? data.confidence.toFixed(2) + '%' : '';

        // prepare preview on result view
        // if main preview exists, use it; otherwise leave blank
        if (preview.src) {
          resultPreview.src = preview.src;
          resultPreview.style.display = 'block';
        } else {
          resultPreview.style.display = 'none';
        }

        // populate text fields
        breedNameEl.textContent = `${breed} ${confidence ? '(' + confidence + ')' : ''}`;

        const desc = breedDescriptions[breed];
        if (desc) {
          enText.textContent = desc.en;
          hiText.textContent = desc.hi;
          teText.textContent = desc.te;

          // a short one-line summary for quick glance
          breedSummary.textContent = desc.en.split('. ')[0] + '.';
          extraInfo.textContent = "Tip: Use this information to choose feed, milking plans, and market routes. For best results, consult a local vet.";
        } else {
          enText.textContent = "Description not available for this breed.";
          hiText.textContent = "इस नस्ल के लिए विवरण उपलब्ध नहीं है।";
          teText.textContent = "ఈ జాతి కోసం వివరణ లభ్యం కాదు.";
          breedSummary.textContent = '';
          extraInfo.textContent = '';
        }

        // show the result view
        showResultView();

      } catch (err) {
        console.error(err);
        document.getElementById('mainResult').textContent = '❌ Error predicting breed.';
      }
    });

    // Back controls -> return to main interface so user can upload another image
    backBtn.addEventListener('click', () => {
      showMainView();
    });
    newPredictBtn.addEventListener('click', () => {
      // reset file input and preview so user can select another
      imageInput.value = '';
      preview.src = '';
      preview.style.display = 'none';
      document.getElementById('mainResult').textContent = '';
      showMainView();
    });

    // ensure on load we are in main view
    window.addEventListener('load', () => {
      showMainView();
    });