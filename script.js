const researchAreas = [
  {
    title: '生物資訊',
    image: 'assets/research_ai_clinical_icon.png',
    members: '陳亭羽、楊舒羽、李懿修、郭映妤、陳婷慧',
    text: '以演化學習、多體學與生醫資料探勘為核心，從高維資料中辨識具診斷、預後與功能意義的特徵組合。',
    topics: [
      '癌症基因轉錄體學與癌症預後預測',
      '蛋白質功能預測與藥物／產品開發',
      'LC-MS/MS 分析與疾病預測',
      '菌相定序資料分析與精準醫療'
    ]
  },
  {
    title: 'AI 醫療輔助決策系統',
    image: 'assets/research_bioinformatics_icon.png',
    members: '黃浩宸、柯韋安、陳婷慧、郭映妤',
    text: '結合臨床資料、可解釋風險模型與最佳化方法，建立支援醫師篩檢、預測、治療規劃與預後評估的決策系統。',
    topics: [
      '胃癌全期照護精準診療決策',
      '腎臟透析最佳化與低血壓風險預測',
      '冠狀動脈狹窄早期篩檢',
      'AI 睡眠與健康照護'
    ]
  },
  {
    title: '醫療影像應用',
    image: 'assets/research_medical_imaging_icon.png',
    members: '顏家珣、Vidhya Nataraj、陳俞安、廖偉菖',
    text: '以 CT／MRI 與腫瘤影像為研究核心，發展病灶標註、形態學分類、淋巴結分析、預後模型與可部署的臨床影像 AI。',
    topics: [
      '肝癌腫瘤病灶自動標註與形態分析',
      '頭頸癌淋巴結標註與診斷輔助',
      '跨相位 CT／MRI 影像分析',
      '影像、臨床與放射組學整合建模'
    ]
  }
];

const platforms = [
  {
    title: '肝癌診療決策支援系統',
    image: 'assets/hcc_cdss.png',
    badge: '國家新創獎 × 國家新創精進獎 × 2024 SNQ 銀獎',
    text: '結合深度學習腫瘤偵測、影像特徵、臨床資料與演化學習模型，支援肝癌診斷、治療後存活與復發風險評估，並持續推進跨院驗證與臨床系統整合。',
    points: ['HFS-Net 腫瘤偵測與分割', '術後／栓塞後預後預測', '個人化風險分層', '跨院臨床驗證']
  },
  {
    title: '智能血液透析決策輔助系統',
    image: 'assets/hemodialysis.png',
    badge: '第19屆國家新創獎 × 第20屆國家新創精進獎',
    text: '整合透析前生理數據與歷史透析資料，進行特徵工程、風險預測與透析參數最佳化，建立可供臨床決策參考的個人化模型。',
    points: ['透析中低血壓風險', '貧血改善預測', '特徵選擇與數學建模', '透析參數最佳化建議']
  },
  {
    title: '智能冠狀動脈狹窄篩檢',
    image: 'assets/coronary_risk.png',
    badge: '第20屆國家新創獎 · 臨床新創獎',
    text: '與臨床合作團隊共同開發冠狀動脈疾病風險模型，以基本檢查與門診資料支援早期篩檢與高階健檢策略。',
    points: ['抽血與尿液檢查', '個人化風險分數', '早期冠心病篩檢', '高階健檢評估']
  },
  {
    title: '頭頸癌臨床診斷輔助系統',
    image: 'assets/headneck_clinical.png',
    badge: '第21屆國家新創獎 · 臨床新創獎',
    text: '發展人工智慧賦能的頭頸癌影像自動標註與診斷輔助方法，聚焦淋巴結分析、風險預測與臨床診斷支援。',
    points: ['頭頸癌影像標註', '淋巴結分析', '臨床診斷輔助', '跨院合作驗證']
  },
  {
    title: '胃癌全期照護精準診療決策',
    image: 'assets/gastric_care_pathway.png',
    badge: '2025 · 第22屆國家新創獎 · 學研新創獎',
    text: '整合術前個別淋巴結轉移風險、術後復發型態與個人化存活風險，建立可解釋風險報告與臨床決策系統雛型。',
    points: ['術前淋巴結風險', '術後復發型態', '個人化存活風險', '可解釋風險報告']
  },
  {
    title: 'AI 睡眠與精準健康照護',
    image: 'assets/sleep_ai.png',
    badge: '產學合作 × 智慧健康照護',
    text: '整合睡眠資料、臨床資料與穿戴裝置資訊，建立睡眠呼吸中止症風險模型，並延伸至治療建議與健康管理。',
    points: ['睡眠臨床資料', '穿戴裝置整合', '風險預測', '治療與健康管理建議']
  }
];

const memberGroups = [
  {
    title: '行政／研究助理',
    accent: 'RESEARCH ASSISTANT',
    members: [
      { name: '胡桓祥', role: '助理', research: '協助實驗室行政、研究與專案執行。' }
    ]
  },
  {
    title: '博士生',
    accent: 'Ph.D. STUDENTS',
    members: [
      {
        name: '陳亭羽',
        image: 'assets/members/chen_ting_yu.png',
        education: '成功大學醫學檢驗生物技術學系；陽明交大分子醫學與生物工程研究所碩士；同所博士班在學',
        research: '資料工程、數學建模、機器學習',
        email: 'cheerful.bt08@nycu.edu.tw'
      },
      {
        name: '顏家珣',
        image: 'assets/members/yen_chia_hsun.png',
        education: '臺中教育大學資訊工程系；陽明交大生物資訊及系統生物研究所碩士；陽明交大資訊科學與工程研究所博士班在學',
        research: '資料工程、醫學影像處理、機器學習',
        email: 'vincentyan.bt11@nycu.edu.tw'
      },
      {
        name: '黃浩宸',
        image: 'assets/members/huang_hao_chen.png',
        education: '中興大學生命科學系；臺灣大學植物科學研究所碩士；陽明交大生物資訊及系統生物研究所博士班在學',
        research: '資料工程、數學建模、機器學習',
        email: 'howell0518@gmail.com'
      },
      {
        name: 'Vidhya Nataraj',
        image: 'assets/members/vidhya_nataraj.png',
        education: 'National Taipei University, M.S. in Smart Healthcare Management；NYCU Bioinformatics and Systems Biology Ph.D. student',
        research: 'Biomedical informatics、NLP',
        email: 'vidhyanataraj03.bt13@nycu.edu.tw'
      }
    ]
  },
  {
    title: '碩士生',
    accent: 'M.S. STUDENTS',
    members: [
      { name: '柯韋安', image: 'assets/members/ko_wei_an.png', education: '清華大學應用科學系生命科學組；陽明交大分子醫學與生物工程研究所碩士班', research: '資料工程、數學建模、機器學習', email: 'MDseniorhighschool.S110131@gmail.com' },
      { name: '楊舒羽', image: 'assets/members/yang_shu_yu.png', education: '大同大學化學工程與生物科技學系；陽明交大生物科技研究所碩士班', research: '資料工程、數學建模、機器學習', email: 'hebe06101025@gmail.com' },
      { name: '陳俞安', image: 'assets/members/chen_yu_an.png', education: '靜宜大學資訊工程學系；陽明交大數據科學與工程研究所', research: '資料工程、影像處理、深度學習、軟體開發', email: 'ann313554032.cs13@nycu.edu.tw' },
      { name: '李懿修', image: 'assets/members/lee_yi_hsiu.png', education: '清華大學醫學科學系；陽明交大生物科技學系碩士班', research: '資料工程、機器學習、生醫資訊', email: 'a24peter.bt13@nycu.edu.tw' },
      { name: '郭映妤', image: 'assets/members/kuo_ying_yu.png', education: '中央大學生命科學系；陽明交大生物資訊及系統生物研究所', research: '資料工程、數學建模、機器學習', email: 'yu314351008.bt14@nycu.edu.tw' },
      { name: '陳婷慧', image: 'assets/members/chen_ting_hui.png', education: '中興大學生物科技學士學位學程；陽明交大生物資訊及系統生物研究所碩士班', research: '資料工程、數學建模、機器學習', email: 'hui.bt14@nycu.edu.tw' },
      { name: '廖偉菖', image: 'assets/members/liao_wei_chang.png', education: '臺灣科技大學資訊管理系；陽明交大數據科學與工程研究所碩士班', research: '機器／深度學習、影像辨識、語音／音訊處理、大型語言模型、資料工程、軟韌體開發', email: 'leowwd.cs14@nycu.edu.tw', linkedin: 'https://linkedin.com/in/leo-liao-09992925b' }
    ]
  }
];

const phdAlumni = [
  { year: '94級', names: '童俊維、陳義雄' },
  { year: '98級', names: '李光成（Phasit Charoenkwan）、劉一帆、蔡明儒' },
  { year: '99級', names: '王駿榮' },
  { year: '101級', names: '葉書霖（Sathipati Srinivasulu Yerukala）' }
];

const msAlumni = [
  { year: '93級', names: '謝志宏、游富傑、張嘉芸、陳卓平' },
  { year: '94級', names: '葉智國' },
  { year: '95級', names: '張孝邦' },
  { year: '96級', names: '許凱迪、廖芹' },
  { year: '97級', names: '林意哲、林玉祥' },
  { year: '98級', names: '高德芬、黃泰欽' },
  { year: '99級', names: '徐銘鑫、王冠維、黃韻如、許馨云、李銘哲、余盈穎' },
  { year: '100級', names: '柯志錡、邱譯玄、郭宇清、蕭瓊治、劉乙念' },
  { year: '101級', names: '黃薏寧、王音絜、張兆締、賴仕鈞、朱芳瑩、方恩蘭（Tamara Vasylenko）、尹蘊筑' },
  { year: '102級', names: '許書婷、陳泓安、劉文堅' },
  { year: '103級', names: '林韋群、李雅能、葉家倫、李宜芳、邱仕翔' },
  { year: '104級', names: '蔡毓珊、詹舒涵、周昱伶' },
  { year: '105級', names: '黃道湧、蔡采潔、廖庭毅、張定瑋' },
  { year: '106級', names: '羅子昀、陳君旻、顏家珩' },
  { year: '107級', names: '陳茹婕、楊至軒、張劭宇、黃若瑜、王致偉' },
  { year: '108級', names: '陳亭君、林以真、蔡詠平、陳俊憲、林易緯' },
  { year: '109級', names: '劉佩汶' },
  { year: '110級', names: '林彥成、吳采瑩、曹玲姿、李宜蓁、糠志奇' },
  { year: '111級', names: '顏家珣、劉承霈、朱浩銓、林承曄、柯伊庭、江馥妤、葛芳瑜' },
  { year: '112級', names: '鄭力誠、陳映璇、黃敬博' },
  { year: '113級', names: '高凱伶' }
];

const recentPublications = [
  {
    year: 2026,
    title: 'TargetPrior: a miRNA-signature embedded evolutionary learning framework for prioritizing drug targets in acute myeloid leukemia',
    meta: 'Ting-Yu Chen, Shinn-Ying Ho · Bioinformatics 42(9), btag635',
    tag: 'Evolutionary Learning / Drug Targets',
    note: '以 miRNA signature 結合演化學習進行急性骨髓性白血病藥物標靶優先排序，延伸演化學習至精準治療與標靶探索。',
    url: 'https://doi.org/10.1093/bioinformatics/btag635'
  },
  {
    year: 2026,
    title: 'Network molecular nutrition framework for exploring the oncogenic mechanisms of nutrient deficiency in cervical cancer',
    meta: 'T.-Y. Wu, Y.-L. Ho, S. Y. Sathipati, Y.-J. Ho, T.-Y. Chen, T.-Y. Lee, S.-Y. Ho* · Clinical Nutrition Open Science 66, 100638',
    tag: 'Evolutionary Learning / Cancer Bioinformatics',
    note: '提出 EL-NetMN，以演化學習整合 lncRNA、hub genes、pathways 與營養素／藥物關聯，建立可解釋的網路分子營養框架。',
    url: 'https://doi.org/10.1016/j.nutos.2026.100638'
  },
  {
    year: 2025,
    title: 'Establishing the Asia & Pacific Bioinformatics Joint Congress: a historic milestone in regional bioinformatics collaboration',
    meta: 'A. M. Khan et al. · Briefings in Bioinformatics 26(6), bbaf678',
    tag: 'Bioinformatics / Academic Leadership',
    note: '記錄亞太生物資訊社群整合與 APBJC 的建立，反映團隊在區域生物資訊學術社群的長期參與。',
    url: 'https://doi.org/10.1093/bib/bbaf678'
  },
  {
    year: 2025,
    title: 'Decreased risk of chronic fatigue syndrome following influenza vaccine: a 20-year population-based retrospective study',
    meta: 'H. Chang et al. · Journal of Translational Medicine 23, 775',
    tag: 'Translational Medicine',
    note: '以臺灣健保資料庫進行大型人口世代研究，呈現跨領域資料分析與轉譯醫學合作成果。',
    url: 'https://doi.org/10.1186/s12967-025-06600-5'
  },
  {
    year: 2024,
    title: 'Developing a practical neurodevelopmental prediction model for targeting high-risk very preterm infants during visit after NICU: a retrospective national longitudinal cohort study',
    meta: 'H.-W. Chung et al. · BMC Medicine 22, 68',
    tag: 'Clinical AI',
    note: '以全國性縱向世代資料建立早產兒神經發展風險預測模型，展示可落地的臨床風險分層應用。',
    url: 'https://doi.org/10.1186/s12916-024-03286-2'
  },
  {
    year: 2024,
    title: 'A hierarchical fusion strategy of deep learning networks for detection and segmentation of hepatocellular carcinoma from computed tomography images',
    meta: 'I.-C. Lee et al. · Cancer Imaging 24, 43',
    tag: 'HCC / Medical Imaging',
    note: 'HFS-Net 以 595 名肝癌病患的動態 CT 影像進行腫瘤偵測與分割，為肝癌影像自動化與後續預後建模的重要技術基礎。',
    url: 'https://doi.org/10.1186/s40644-024-00686-8'
  },
  {
    year: 2024,
    title: 'An evolutionary learning-based method for identifying a circulating miRNA signature for breast cancer diagnosis prediction',
    meta: 'S. Y. Sathipati et al. · NAR Genomics and Bioinformatics 6(1), lqae022',
    tag: 'Evolutionary Learning / miRNA Biomarkers',
    note: '以演化學習建立精簡 circulating miRNA signature；獨立測試 accuracy 99.90%、AUC 0.99，展現高維生醫特徵選擇能力。',
    url: 'https://doi.org/10.1093/nargab/lqae022'
  },
  {
    year: 2024,
    title: 'Multi-epitope vaccine design of African swine fever virus considering T cell and B cell immunogenicity',
    meta: 'T.-Y. Chen et al. · AMB Express 14, 95',
    tag: 'Vaccine Bioinformatics',
    note: '結合 T-cell 與 B-cell 免疫原性進行多表位疫苗設計，延伸生物資訊方法至疫苗研發。',
    url: 'https://doi.org/10.1186/s13568-024-01749-6'
  }
];

const representativePublications = [
  {
    year: 2008,
    title: 'OPSO: Orthogonal Particle Swarm Optimization and Its Application to Task Assignment Problems',
    meta: 'Shinn-Ying Ho*, H.-S. Lin, W.-H. Liauh, S.-J. Ho · IEEE Transactions on Systems, Man, and Cybernetics Part A 38(2), 288–298',
    tag: 'Orthogonal PSO / Large-Parameter Optimization',
    citationCount: 274,
    citationLabel: '274 Scopus citations',
    note: '以正交實驗設計建立 intelligent move mechanism，改善 PSO 在高維參數空間中的搜尋效率，是何信瑩教授引用度最高的最佳化代表作之一。',
    url: 'https://doi.org/10.1109/TSMCA.2007.914796'
  },
  {
    year: 2004,
    title: 'Intelligent Evolutionary Algorithms for Large Parameter Optimization Problems',
    meta: 'Shinn-Ying Ho*, L.-S. Shu, J.-H. Chen · IEEE Transactions on Evolutionary Computation 8(6), 522–541',
    tag: 'Foundational / Highly Cited Paper',
    citationCount: 239,
    citationLabel: '239 Scopus citations',
    note: '提出 IEA 與 IMOEA，以 orthogonal experimental design 與 intelligent gene collector 解決大型參數單目標與多目標最佳化問題，奠定後續演化學習研究的方法基礎。',
    url: 'https://doi.org/10.1109/TEVC.2004.835176'
  },
  {
    year: 2008,
    title: 'Computational Identification of Ubiquitylation Sites from Protein Sequences',
    meta: 'C.-W. Tung, Shinn-Ying Ho* · BMC Bioinformatics 9, 310',
    tag: 'Protein Bioinformatics / UbiPred',
    citationCount: 191,
    citationLabel: '191 Scopus citations',
    note: '提出 IPMA 與 UbiPred，由蛋白質序列中挑選具資訊量的物化特徵以預測 ubiquitination sites，為高引用生物資訊代表作。',
    url: 'https://doi.org/10.1186/1471-2105-9-310'
  },
  {
    year: 2002,
    title: 'Accurate Modeling and Prediction of Surface Roughness by Computer Vision in Turning Operations Using an Adaptive Neuro-Fuzzy Inference System',
    meta: 'Shinn-Ying Ho*, K.-C. Lee, S.-S. Chen, S.-J. Ho · International Journal of Machine Tools and Manufacture 42(13), 1441–1446',
    tag: 'Computer Vision / Neuro-Fuzzy Modeling',
    citationCount: 131,
    citationLabel: '131 Scopus citations',
    note: '結合電腦視覺與 adaptive neuro-fuzzy inference system 建立表面粗糙度預測模型，呈現早期跨域 AI 與影像建模研究影響力。',
    url: 'https://doi.org/10.1016/S0890-6955(02)00078-0'
  },
  {
    year: 2007,
    title: 'POPI: Predicting Immunogenicity of MHC Class I Binding Peptides by Mining Informative Physicochemical Properties',
    meta: 'C.-W. Tung, Shinn-Ying Ho · Bioinformatics 23(8), 942–949',
    tag: 'Immunoinformatics / Vaccine Design',
    citationCount: 95,
    citationLabel: '95 Scopus citations',
    note: '以 inheritable bi-objective genetic algorithm 同時選取物化特徵與調校 SVM，為免疫原性預測與電腦輔助疫苗設計的重要代表作。',
    url: 'https://doi.org/10.1093/bioinformatics/btm061'
  },
  {
    year: 2004,
    title: 'Inheritable Genetic Algorithm for Biobjective 0/1 Combinatorial Optimization Problems and its Applications',
    meta: 'Shinn-Ying Ho*, J.-H. Chen, M.-H. Huang · IEEE Transactions on Systems, Man, and Cybernetics, Part B 34(1), 609–620',
    tag: '0/1 Biobjective Optimization / IGA',
    citationCount: 75,
    citationLabel: '75 Scopus citations',
    note: '提出 BOCOP 與 inheritable genetic algorithm（IGA），以 orthogonal array crossover 與解的繼承機制搜尋完整且高品質的非支配解集合。',
    url: 'https://doi.org/10.1109/TSMCB.2003.817090'
  },
  {
    year: 2001,
    title: 'An Efficient Evolutionary Algorithm for Accurate Polygonal Approximation',
    meta: 'Shinn-Ying Ho*, Y.-C. Chen · Pattern Recognition 34(12), 2305–2317',
    tag: 'Evolutionary Algorithm / Pattern Recognition',
    citationCount: 61,
    citationLabel: '61 Scopus citations',
    note: '以 orthogonal array crossover 改善大規模 polygonal approximation 的搜尋品質與收斂速度，代表早期演化式影像最佳化研究。',
    url: 'https://doi.org/10.1016/S0031-3203(00)00159-X'
  },
  {
    year: 2017,
    title: 'ESA-UbiSite: Accurate Prediction of Human Ubiquitination Sites by Identifying a Set of Effective Negatives',
    meta: 'J.-R. Wang, W.-L. Huang, M.-J. Tsai, K.-T. Hsu, H.-L. Huang, Shinn-Ying Ho* · Bioinformatics 33(5), 661–668',
    tag: 'Evolutionary Screening / Protein Bioinformatics',
    citationCount: 51,
    citationLabel: '51 Scopus citations',
    note: '提出 evolutionary screening algorithm 選取有效負樣本，使 ubiquitination site 預測 test accuracy 由 0.75 提升至 0.92。',
    url: 'https://doi.org/10.1093/bioinformatics/btw701'
  },
  {
    year: 2007,
    title: 'An Intelligent Two-Stage Evolutionary Algorithm for Dynamic Pathway Identification from Gene Expression Profiles',
    meta: 'Shinn-Ying Ho*, C.-H. Hsieh, F.-C. Yu, H.-L. Huang · IEEE/ACM Transactions on Computational Biology and Bioinformatics 4(4), 648–660',
    tag: 'Systems Biology / Evolutionary Modeling',
    citationCount: 51,
    citationLabel: '51 Scopus citations',
    note: '以 intelligent two-stage evolutionary algorithm 推估 S-system 基因調控模型，處理高維動態 pathway identification。',
    url: 'https://doi.org/10.1109/TCBB.2007.1051'
  },
  {
    year: 2007,
    title: 'Design of Accurate Predictors for DNA-Binding Sites in Proteins Using Hybrid SVM-PSSM Method',
    meta: 'Shinn-Ying Ho*, F.-C. Yu, C.-Y. Chang, H.-L. Huang · BioSystems 90(1), 234–241',
    tag: 'Protein Bioinformatics / SVM-PSSM',
    citationCount: 48,
    citationLabel: '48 Scopus citations',
    note: '結合 SVM 與 PSSM evolutionary information，建立 DNA-binding site prediction 方法並提升未知蛋白質的泛化預測能力。',
    url: 'https://doi.org/10.1016/j.biosystems.2006.08.007'
  },
  {
    year: 2006,
    title: 'Interpretable Gene Expression Classifier with an Accurate and Compact Fuzzy Rule Base for Microarray Data Analysis',
    meta: 'Shinn-Ying Ho*, C.-H. Hsieh, H.-M. Chen, H.-L. Huang · BioSystems 85(3), 165–176',
    tag: 'Interpretable AI / Gene Expression',
    citationCount: 45,
    citationLabel: '45 Scopus citations',
    note: '以 intelligent genetic algorithm 同時最佳化準確率、規則數與使用基因數，建立具可解釋性且精簡的 gene-expression classifier。',
    url: 'https://doi.org/10.1016/j.biosystems.2006.01.002'
  },
  {
    year: 2021,
    title: 'Evolutionary Learning-Derived Clinical-Radiomic Models for Predicting Early Recurrence of Hepatocellular Carcinoma After Resection',
    meta: 'I.-C. Lee et al. · Liver Cancer 10(6), 572–582',
    tag: 'HCC / Clinical Radiomics / Translational Landmark',
    citationCount: 0,
    citationLabel: 'Clinical translation landmark',
    note: '整合臨床資料與 CT radiomics，以演化學習建立肝癌切除後早期復發風險模型，奠定後續肝癌診療決策支援與臨床落地研究基礎。',
    url: 'https://doi.org/10.1159/000518728'
  }
];

const awards = [
  {
    year: '2026',
    title: '工程生物科學學院（共生院）副院長',
    desc: '自 2026 秋季學期起，何信瑩教授擔任國立陽明交通大學工程生物科學學院（共生院）副院長，並兼任產業博士班主任。',
    lines: ['特聘教授', '副院長', '產業博士班主任']
  },
  {
    year: '2025',
    title: '第22屆國家新創獎・學研新創獎：胃癌手術病患全期照護旅程的精準診療決策輔助系統',
    desc: '整合術前淋巴結轉移風險、術後復發型態與個人化存活風險分析，建立可解釋的精準診療決策輔助系統。',
    lines: ['可解釋個人化風險報告', '全期照護流程', '合作：台北榮總一般外科']
  },
  {
    year: '2024',
    title: '第21屆國家新創獎・臨床新創獎：人工智慧賦能的頭頸癌臨床診斷輔助系統',
    desc: '以頭頸癌影像自動標註、淋巴結分析與診斷輔助為核心，建立臨床可應用之人工智慧系統。',
    lines: ['合作：高雄長庚紀念醫院', '頭頸癌臨床診斷輔助', '影像標註與淋巴結分析']
  },
  {
    year: '2024',
    title: '第27屆國家生技醫療品質獎・智慧醫療組銀牌：神機妙算－智慧肝癌復發風險預測',
    desc: '肝癌復發風險預測系統榮獲國家生技醫療品質獎智慧醫療組銀牌，展現預後建模與臨床轉譯價值。',
    lines: ['合作：臺北榮民總醫院', '肝癌復發風險預測', '臨床轉譯落地']
  },
  {
    year: '2023',
    title: '第20屆國家新創獎・臨床新創獎：生醫演化學習平台發展之智能冠狀動脈狹窄篩檢決策輔助系統',
    desc: '結合臨床檢驗資料與風險分數建模，提供冠狀動脈疾病早期篩檢與高階健檢輔助評估。',
    lines: ['合作：彰化基督教醫院', 'AI 健檢', '冠狀動脈狹窄風險預測']
  },
  {
    year: '2023',
    title: '肝癌診療決策支援系統・國家新創精進獎',
    desc: '肝癌診療決策支援系統持續精進，結合影像圈註、預後評估與臨床報告生成能力，榮獲國家新創精進獎肯定。',
    lines: ['肝癌診療決策支援', '影像圈註與預後評估', '持續精進']
  },
  {
    year: '2023',
    title: '智能血液透析決策輔助系統・國家新創精進獎',
    desc: '以當日透析前生理數據與歷次透析資料為基礎，進一步優化透析風險預測與個人化參數建議。',
    lines: ['透析風險預測', '個人化參數建議', '持續精進']
  },
  {
    year: '2022',
    title: '第19屆國家新創獎・學研新創獎：生醫演化學習平台發展之智能血液透析決策輔助系統',
    desc: '以 81 項原始特徵與大量衍生特徵建構透析決策輔助模型，支援透析前預測與參數模擬。',
    lines: ['合作：雙和醫院', '透析前預測', '透析參數模擬']
  },
  {
    year: '2022',
    title: '肝癌診療決策支援系統・國家新創精進獎',
    desc: '肝癌診療決策支援系統於獲得學研新創獎後持續精進，擴展臨床使用情境與系統化整合能力。',
    lines: ['精進獎', '臨床系統串接', '肝癌診療決策支援']
  },
  {
    year: '2022',
    title: '台灣生物資訊及系統生物學會理事長（2022–2025）',
    desc: '何信瑩教授當選理事長，積極推動國際型研討會、投稿平台與新進研究人員投入人工智慧生物資訊領域。',
    lines: ['學術領導', '生物資訊社群', '2022–2025']
  },
  {
    year: '2021',
    title: '第18屆國家新創獎・學研新創獎：生醫演化學習平台－肝癌診療決策支援系統',
    desc: '與台北榮總合作推進人工智慧肝癌診療決策支援系統，奠定後續臨床部署與轉譯落地基礎。',
    lines: ['合作：臺北榮民總醫院', '肝癌診療決策支援', '學研新創獎']
  },
  {
    year: '2021',
    title: 'Computex 2021 線上參展',
    desc: '展示人工智慧醫療應用與生醫演化學習平台技術成果，拓展跨域合作與產學交流。',
    lines: ['產學交流', '線上參展']
  },
  {
    year: '2020',
    title: 'Meet Taipei 創新創業嘉年華',
    desc: '展示生醫演化學習平台與人工智慧醫療應用成果。',
    lines: ['創新創業', '平台展示']
  },
  {
    year: '2019',
    title: '科技部台灣研究亮點報導',
    desc: '演化學習平台用於癌症基因治療成果獲邀科技部台灣研究亮點報導。',
    lines: ['2019-06-30', '研究亮點']
  },
  {
    year: '2019',
    title: 'Computex 2019：創新的演化學習平台於人工智慧醫療應用',
    desc: '受科技部邀請於 Computex 展示人工智慧醫療應用與演化學習平台成果。',
    lines: ['Computex 2019', '人工智慧醫療應用']
  },
  {
    year: '2018',
    title: '竹科之星與產業轉譯',
    desc: '延續演化學習、AI 數學建模與精準醫療軟體的產業轉譯與創新創業成果。',
    lines: ['竹科之星', 'AI 數學建模', '精準醫療軟體']
  },
  {
    year: '2017',
    title: '科技部 FITI 創新創業激勵計畫・創業潛力獎',
    desc: '以「醫療影像人工智慧電腦輔助分析系統」榮獲創業潛力獎最高榮譽。',
    lines: ['2017-06-28', '獎金 25 萬元']
  },
  {
    year: '2016',
    title: '衍生新創事業啟動',
    desc: '以智慧型演化學習、AI 數學建模與精準醫療相關技術為基礎，推動研究成果的產業化與技術轉譯。',
    lines: ['研究成果產業化', '智慧型演化學習', '精準醫療']
  },
  {
    year: '2004',
    title: '智慧型演化式演算法代表性論文',
    desc: '發表 Intelligent Evolutionary Algorithms for Large Parameter Optimization Problems，聚焦大型參數最佳化，後續延伸至人工智慧演化學習研究。',
    lines: ['IEEE Transactions on Evolutionary Computation', 'Highly Cited Paper']
  }
];

function renderResearch() {
  const el = document.getElementById('research-grid');
  if (!el) return;
  el.innerHTML = researchAreas.map((item, i) => `
    <article class="research-card reveal">
      <button class="research-image" type="button" data-lightbox="${item.image}" aria-label="放大 ${item.title} 研究圖">
        <img src="${item.image}" alt="${item.title}研究內容圖" loading="lazy" />
      </button>
      <div class="research-body">
        <span class="research-index">0${i + 1}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="member-line"><strong>實驗室成員</strong><span>${item.members}</span></div>
        <div class="research-topics-title">代表主題</div><ul class="research-topics">${item.topics.map(topic => `<li>${topic}</li>`).join('')}</ul>
      </div>
    </article>`).join('');
}

function renderPlatforms() {
  const el = document.getElementById('platform-grid');
  if (!el) return;
  el.innerHTML = platforms.map((item, i) => `
    <article class="platform-card reveal">
      <button class="platform-image" type="button" data-lightbox="${item.image}" aria-label="放大 ${item.title} 圖片">
        <img src="${item.image}" alt="${item.title}研究示意圖" loading="lazy" />
      </button>
      <div class="platform-content">
        <span class="platform-no">APPLICATION ${String(i + 1).padStart(2, '0')}</span>
        <h3>${item.title}</h3>
        <span class="platform-badge">${item.badge}</span>
        <p>${item.text}</p>
        <div class="platform-points">${item.points.map(point => `<span>${point}</span>`).join('')}</div>
      </div>
    </article>`).join('');
}

function renderMembers() {
  const el = document.getElementById('member-groups');
  if (!el) return;
  el.innerHTML = memberGroups.map(group => `
    <section class="member-group reveal">
      <div class="member-group-heading">
        <div><span>${group.accent}</span><h3>${group.title}</h3></div>
        <strong>${group.members.length}</strong>
      </div>
      <div class="lab-member-grid ${group.members.length === 1 ? 'single' : ''}">
        ${group.members.map(member => `
          <article class="lab-member-card">
            <div class="member-avatar ${member.image ? 'has-photo' : ''}">
              <span aria-hidden="true">${member.name.trim().charAt(0).toUpperCase()}</span>
              ${member.image ? `<img src="${member.image}" alt="${member.name} 頭貼" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove(); this.parentElement.classList.remove('has-photo')" />` : ''}
            </div>
            <div class="member-card-body">
              <h4>${member.name}</h4>
              ${member.role ? `<span class="member-role">${member.role}</span>` : ''}
              ${member.education ? `<p class="member-education">${member.education}</p>` : ''}
              <p class="member-research"><strong>研究領域</strong><span>${member.research || ''}</span></p>
              ${(member.email || member.linkedin) ? `<div class="member-contact"><strong>聯絡資訊</strong>${member.email ? `<a href="mailto:${member.email}">${member.email}</a>` : ''}${member.linkedin ? `<a href="${member.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>` : ''}</div>` : ''}
            </div>
          </article>`).join('')}
      </div>
    </section>`).join('');
}

function renderAlumni() {
  const phd = document.getElementById('phd-alumni');
  const ms = document.getElementById('ms-alumni');
  const make = rows => rows.map(row => `
    <article class="alumni-year-card">
      <strong>${row.year}</strong>
      <p>${row.names}</p>
    </article>`).join('');
  if (phd) phd.innerHTML = make(phdAlumni);
  if (ms) ms.innerHTML = make(msAlumni);
}

function publicationHtml(items) {
  return items.map(p => {
    const featured = (p.citationCount || 0) >= 100;
    return `
    <article class="publication-item reveal ${featured ? 'publication-featured' : ''}">
      <div class="publication-year">${p.year}</div>
      <div class="publication-content">
        <div class="publication-tag-row"><span class="publication-tag">${p.tag}</span>${featured ? `<span class="publication-featured-badge">Highly cited</span>` : ''}${p.citationLabel ? `<span class="citation-badge">${p.citationLabel}</span>` : ''}</div>
        <h3>${p.title}</h3>
        <p class="publication-meta">${p.meta}</p>
        ${p.note ? `<p class="publication-note">${p.note}</p>` : ''}
        ${p.url ? `<a class="publication-link" href="${p.url}" target="_blank" rel="noopener">View publication <span>↗</span></a>` : ''}
      </div>
    </article>`;
  }).join('');
}

function renderPublications() {
  const recent = document.getElementById('recent-publication-list');
  const representative = document.getElementById('representative-publication-list');
  if (recent) recent.innerHTML = publicationHtml(recentPublications);
  if (representative) representative.innerHTML = publicationHtml([...representativePublications].sort((a, b) => (b.citationCount || 0) - (a.citationCount || 0) || b.year - a.year));
}

function initPublicationTabs() {
  const tabs = [...document.querySelectorAll('[data-pub-tab]')];
  const panels = [...document.querySelectorAll('[data-pub-panel]')];
  if (!tabs.length || !panels.length) return;

  const activate = key => {
    tabs.forEach(tab => {
      const active = tab.dataset.pubTab === key;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    panels.forEach(panel => {
      const active = panel.dataset.pubPanel === key;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
      if (active) {
        panel.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      }
    });
  };

  tabs.forEach(tab => tab.addEventListener('click', () => activate(tab.dataset.pubTab)));
}

function renderAwards() {
  const el = document.getElementById('award-timeline');
  if (!el) return;

  const groups = awards.reduce((acc, item) => {
    (acc[item.year] ||= []).push(item);
    return acc;
  }, {});

  const getType = item => {
    if (/國家新創獎|品質獎|FITI|銀牌|創業潛力獎/.test(item.title)) return 'award';
    if (/副院長|理事長|行政/.test(item.title)) return 'leadership';
    if (/Computex|Meet Taipei|竹科/.test(item.title)) return 'translation';
    return 'research';
  };

  const sortedGroups = Object.entries(groups).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA));

  el.innerHTML = sortedGroups.map(([year, items]) => `
    <section class="timeline-year-group reveal">
      <div class="timeline-year-column"><span>${year}</span></div>
      <div class="timeline-year-cards">
        ${items.map(item => {
          const type = getType(item);
          return `<article class="timeline-card timeline-card-${type}">
            <div class="timeline-card-top"><span class="timeline-type">${type === 'award' ? 'AWARD' : type === 'leadership' ? 'LEADERSHIP' : type === 'translation' ? 'TRANSLATION' : 'RESEARCH'}</span></div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            ${item.lines.length ? `<div class="timeline-tags">${item.lines.map(x => `<span>${x}</span>`).join('')}</div>` : ''}
          </article>`;
        }).join('')}
      </div>
    </section>`).join('');
}

function initMenu() {
  const btn = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => observer.observe(el));
}

function initLightbox() {
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-image');
  if (!box || !img) return;
  const close = () => { box.classList.remove('open'); box.setAttribute('aria-hidden', 'true'); };
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-lightbox]');
    if (trigger) {
      img.src = trigger.dataset.lightbox;
      box.classList.add('open');
      box.setAttribute('aria-hidden', 'false');
    }
    if (e.target === box || e.target.closest('.lightbox-close')) close();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 500), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initActiveNav() {
  const current = document.body.dataset.page;
  let nestedActive = false;
  document.querySelectorAll('.site-nav a[data-page]').forEach(a => {
    const isActive = a.dataset.page === current;
    a.classList.toggle('active', isActive);
    if (isActive && a.closest('.nav-more-menu')) nestedActive = true;
  });
  const more = document.querySelector('.nav-more');
  if (more && nestedActive) more.open = true;
}

document.addEventListener('DOMContentLoaded', () => {
  renderResearch();
  renderPlatforms();
  renderMembers();
  renderAlumni();
  renderPublications();
  initPublicationTabs();
  renderAwards();
  initMenu();
  initActiveNav();
  initReveal();
  initLightbox();
  initBackToTop();
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});