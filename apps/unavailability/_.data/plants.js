const plantsTable = [{"unit":"NIACA","fuelType":"Generators","capacity":8.0,"futureOutages":0,"name":"AC Automation","fuel":20},{"unit":"NIAEA","fuelType":"Demand Side Unit","capacity":9.0,"futureOutages":0,"name":"Activation Energy","fuel":13},{"unit":"AD2","fuelType":"Gas","capacity":449.0,"futureOutages":0,"name":"Aghada","fuel":0},{"unit":"AT1","fuelType":"Gas","capacity":90.0,"futureOutages":0,"name":"Aghada","fuel":0},{"unit":"AT2","fuelType":"Gas","capacity":90.0,"futureOutages":0,"name":"Aghada","fuel":0},{"unit":"AT4","fuelType":"Gas","capacity":90.0,"futureOutages":0,"name":"Aghada","fuel":0},{"unit":"AA1","fuelType":"Hydro","capacity":21.0,"futureOutages":0,"name":"Ardnacrusha","fuel":5},{"unit":"AA2","fuelType":"Hydro","capacity":22.0,"futureOutages":0,"name":"Ardnacrusha","fuel":5},{"unit":"AA3","fuelType":"Hydro","capacity":19.0,"futureOutages":0,"name":"Ardnacrusha","fuel":5},{"unit":"AA4","fuelType":"Hydro","capacity":24.0,"futureOutages":0,"name":"Ardnacrusha","fuel":5},{"unit":"NIB10","fuelType":"Heavy Fuel Oil","capacity":94.0,"futureOutages":0,"name":"Ballylumford","fuel":16},{"unit":"NIB31","fuelType":"Heavy Fuel Oil","capacity":249.0,"futureOutages":0,"name":"Ballylumford","fuel":16},{"unit":"NIB32","fuelType":"Heavy Fuel Oil","capacity":249.0,"futureOutages":0,"name":"Ballylumford","fuel":16},{"unit":"NIBGT1","fuelType":"Heavy Fuel Oil","capacity":58.0,"futureOutages":0,"name":"Ballylumford","fuel":16},{"unit":"NIBGT2","fuelType":"Heavy Fuel Oil","capacity":58.0,"futureOutages":0,"name":"Ballylumford","fuel":16},{"unit":"XT2","fuelType":"Wind","capacity":11.0,"futureOutages":0,"name":"Beenanaspuck Tobertoreen","fuel":2},{"unit":"NICG2","fuelType":"Gas","capacity":3.0,"futureOutages":0,"name":"Contour Global","fuel":0},{"unit":"NICGA","fuelType":"Gas","capacity":12.0,"futureOutages":0,"name":"Contour Global","fuel":0},{"unit":"NIC30","fuelType":"Gas","capacity":408.0,"futureOutages":0,"name":"Coolkeeragh","fuel":0},{"unit":"NICGT8","fuelType":"Gas","capacity":53.0,"futureOutages":0,"name":"Coolkeeragh","fuel":0},{"unit":"DP1","fuelType":"Virtual","capacity":19.0,"futureOutages":0,"name":"DAE Virtual Power Plant","fuel":19},{"unit":"DP2","fuelType":"Virtual","capacity":26.0,"futureOutages":0,"name":"DAE Virtual Power Plant","fuel":19},{"unit":"DB1","fuelType":"Gas","capacity":405.0,"futureOutages":0,"name":"Dublin Bay","fuel":0},{"unit":"DW1","fuelType":"Waste","capacity":61.5,"futureOutages":0,"name":"Dublin Waste","fuel":15},{"unit":"ED1","fuelType":"Distillate Oil","capacity":118.0,"futureOutages":0,"name":"Edenderry","fuel":14},{"unit":"ED3","fuelType":"Distillate Oil","capacity":58.0,"futureOutages":0,"name":"Edenderry","fuel":14},{"unit":"ED5","fuelType":"Distillate Oil","capacity":58.0,"futureOutages":0,"name":"Edenderry","fuel":14},{"unit":"EI1","fuelType":"SmartGrid","capacity":20.0,"futureOutages":0,"name":"Electric Ireland","fuel":18},{"unit":"NIEMP","fuelType":"Wind","capacity":3.0,"futureOutages":0,"name":"Empower","fuel":2},{"unit":"EC1","fuelType":"Virtual","capacity":47.0,"futureOutages":0,"name":"Endeco Technologies","fuel":19},{"unit":"EC2","fuelType":"Virtual","capacity":11.0,"futureOutages":0,"name":"Endeco Technologies","fuel":19},{"unit":"EC5","fuelType":"Virtual","capacity":15.0,"futureOutages":0,"name":"Endeco Technologies","fuel":19},{"unit":"NIECA","fuelType":"Virtual","capacity":13.0,"futureOutages":0,"name":"Endeco Technologies","fuel":19},{"unit":"ET1","fuelType":"Demand Side Unit","capacity":13.0,"futureOutages":0,"name":"Energy Trading","fuel":13},{"unit":"NIETB","fuelType":"Demand Side Unit","capacity":9.0,"futureOutages":0,"name":"Energy Trading","fuel":13},{"unit":"NIETD","fuelType":"Demand Side Unit","capacity":5.0,"futureOutages":0,"name":"Energy Trading","fuel":13},{"unit":"NIETR","fuelType":"Demand Side Unit","capacity":19.0,"futureOutages":0,"name":"Energy Trading","fuel":13},{"unit":"AE1","fuelType":"Virtual","capacity":95.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"AE2","fuelType":"Virtual","capacity":12.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"AE3","fuelType":"Virtual","capacity":14.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"AE4","fuelType":"Virtual","capacity":15.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"AE5","fuelType":"Virtual","capacity":15.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"EN1","fuelType":"Virtual","capacity":15.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"EN2","fuelType":"Virtual","capacity":16.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"EN3","fuelType":"Virtual","capacity":16.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"EN4","fuelType":"Virtual","capacity":16.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"EN5","fuelType":"Virtual","capacity":6.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"EN6","fuelType":"Virtual","capacity":11.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"EN8","fuelType":"Virtual","capacity":21.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"EN9","fuelType":"Virtual","capacity":16.0,"futureOutages":0,"name":"Enernoc","fuel":19},{"unit":"ER1","fuelType":"Hydro","capacity":10.0,"futureOutages":0,"name":"Erne","fuel":5},{"unit":"ER2","fuelType":"Hydro","capacity":10.0,"futureOutages":0,"name":"Erne","fuel":5},{"unit":"ER3","fuelType":"Hydro","capacity":22.5,"futureOutages":0,"name":"Erne","fuel":5},{"unit":"ER4","fuelType":"Hydro","capacity":22.5,"futureOutages":0,"name":"Erne","fuel":5},{"unit":"EW1","fuelType":"Interconnector","capacity":500.0,"futureOutages":0,"name":"EWIC","fuel":8},{"unit":"GP1","fuelType":"Battery","capacity":8.0,"futureOutages":0,"name":"Gardnershill","fuel":21},{"unit":"GI4","fuelType":"Gas","capacity":461.0,"futureOutages":0,"name":"Great Island","fuel":0},{"unit":"HN2","fuelType":"Gas","capacity":400.0,"futureOutages":0,"name":"Huntstown","fuel":0},{"unit":"HNC","fuelType":"Gas","capacity":342.0,"futureOutages":0,"name":"Huntstown","fuel":0},{"unit":"IW1","fuelType":"Waste","capacity":17.0,"futureOutages":0,"name":"Indaver","fuel":15},{"unit":"NIAGU","fuelType":"Generators","capacity":74.0,"futureOutages":0,"name":"iPower","fuel":20},{"unit":"KZ4","fuelType":"Battery","capacity":27.0,"futureOutages":0,"name":"Kelwin","fuel":21},{"unit":"NIK1","fuelType":"Distillate Oil","capacity":256.0,"futureOutages":0,"name":"Kilroot","fuel":14},{"unit":"NIK2","fuelType":"Distillate Oil","capacity":258.0,"futureOutages":0,"name":"Kilroot","fuel":14},{"unit":"NIKGT1","fuelType":"Distillate Oil","capacity":29.0,"futureOutages":0,"name":"Kilroot","fuel":14},{"unit":"NIKGT2","fuelType":"Distillate Oil","capacity":29.0,"futureOutages":0,"name":"Kilroot","fuel":14},{"unit":"NIKGT3","fuelType":"Distillate Oil","capacity":42.0,"futureOutages":0,"name":"Kilroot","fuel":14},{"unit":"NIKGT4","fuelType":"Distillate Oil","capacity":42.0,"futureOutages":0,"name":"Kilroot","fuel":14},{"unit":"KC1","fuelType":"Wind","capacity":100.0,"futureOutages":0,"name":"Knockacummer","fuel":2},{"unit":"LE1","fuelType":"Hydro","capacity":15.0,"futureOutages":0,"name":"Lee","fuel":5},{"unit":"LE2","fuelType":"Hydro","capacity":4.0,"futureOutages":0,"name":"Lee","fuel":5},{"unit":"LE3","fuelType":"Hydro","capacity":8.0,"futureOutages":0,"name":"Lee","fuel":5},{"unit":"LI1","fuelType":"Hydro","capacity":15.0,"futureOutages":0,"name":"Liffey","fuel":5},{"unit":"LI2","fuelType":"Hydro","capacity":15.0,"futureOutages":0,"name":"Liffey","fuel":5},{"unit":"LI4","fuelType":"Hydro","capacity":4.0,"futureOutages":0,"name":"Liffey","fuel":5},{"unit":"LI5","fuelType":"Hydro","capacity":4.0,"futureOutages":0,"name":"Liffey","fuel":5},{"unit":"NILPS","fuelType":"Biomass","capacity":18.0,"futureOutages":0,"name":"Lisahally","fuel":17},{"unit":"LU1","fuelType":"Battery","capacity":50.0,"futureOutages":0,"name":"Lumcloon","fuel":21},{"unit":"LU2","fuelType":"Battery","capacity":50.0,"futureOutages":0,"name":"Lumcloon","fuel":21},{"unit":"MP1","fuelType":"Coal","capacity":285.0,"futureOutages":0,"name":"Moneypoint","fuel":1},{"unit":"MP2","fuelType":"Coal","capacity":285.0,"futureOutages":0,"name":"Moneypoint","fuel":1},{"unit":"MP3","fuelType":"Coal","capacity":285.0,"futureOutages":0,"name":"Moneypoint","fuel":1},{"unit":"MOYLE","fuelType":"Interconnector","capacity":450.0,"futureOutages":0,"name":"Moyle","fuel":8},{"unit":"PB4","fuelType":"Gas","capacity":154.0,"futureOutages":0,"name":"Poolbeg","fuel":0},{"unit":"PB5","fuelType":"Gas","capacity":146.0,"futureOutages":0,"name":"Poolbeg","fuel":0},{"unit":"PB6","fuelType":"Gas","capacity":168.0,"futureOutages":0,"name":"Poolbeg","fuel":0},{"unit":"NIPH1","fuelType":"Demand Side Unit","capacity":34.0,"futureOutages":0,"name":"Powerhouse Generation","fuel":13},{"unit":"PG1","fuelType":"Demand Side Unit","capacity":10.0,"futureOutages":0,"name":"Powerhouse Generation","fuel":13},{"unit":"RP1","fuelType":"Distillate Oil","capacity":52.0,"futureOutages":0,"name":"Rhode","fuel":14},{"unit":"RP2","fuelType":"Distillate Oil","capacity":52.0,"futureOutages":0,"name":"Rhode","fuel":14},{"unit":"SK3","fuelType":"Gas","capacity":85.0,"futureOutages":0,"name":"Seal Rock","fuel":0},{"unit":"SK4","fuelType":"Gas","capacity":85.0,"futureOutages":0,"name":"Seal Rock","fuel":0},{"unit":"SO1","fuelType":"Wind","capacity":105.0,"futureOutages":0,"name":"Seecon","fuel":2},{"unit":"SI1","fuelType":"Peat","capacity":50.0,"futureOutages":0,"name":"Shannonbridge","fuel":10},{"unit":"SI2","fuelType":"Peat","capacity":50.0,"futureOutages":0,"name":"Shannonbridge","fuel":10},{"unit":"TB1","fuelType":"Heavy Fuel Oil","capacity":54.0,"futureOutages":0,"name":"Tarbert","fuel":16},{"unit":"TB2","fuelType":"Heavy Fuel Oil","capacity":54.0,"futureOutages":0,"name":"Tarbert","fuel":16},{"unit":"TB3","fuelType":"Heavy Fuel Oil","capacity":241.0,"futureOutages":0,"name":"Tarbert","fuel":16},{"unit":"TB4","fuelType":"Heavy Fuel Oil","capacity":243.0,"futureOutages":0,"name":"Tarbert","fuel":16},{"unit":"TP1","fuelType":"Distillate Oil","capacity":52.0,"futureOutages":0,"name":"Tawnaghmore","fuel":14},{"unit":"TP3","fuelType":"Distillate Oil","capacity":52.0,"futureOutages":0,"name":"Tawnaghmore","fuel":14},{"unit":"TH1","fuelType":"Pumped Storage","capacity":73.0,"futureOutages":0,"name":"Turlough Hill","fuel":12},{"unit":"TH2","fuelType":"Pumped Storage","capacity":73.0,"futureOutages":0,"name":"Turlough Hill","fuel":12},{"unit":"TH3","fuelType":"Pumped Storage","capacity":73.0,"futureOutages":0,"name":"Turlough Hill","fuel":12},{"unit":"TH4","fuelType":"Pumped Storage","capacity":73.0,"futureOutages":0,"name":"Turlough Hill","fuel":12},{"unit":"TYC","fuelType":"Gas","capacity":384.0,"futureOutages":0,"name":"Tynagh","fuel":0},{"unit":"EE1","fuelType":"SmartGrid","capacity":47.0,"futureOutages":0,"name":"VIOTAS","fuel":18},{"unit":"EE2","fuelType":"SmartGrid","capacity":20.0,"futureOutages":0,"name":"VIOTAS","fuel":18},{"unit":"EE3","fuelType":"SmartGrid","capacity":8.0,"futureOutages":0,"name":"VIOTAS","fuel":18},{"unit":"EE4","fuelType":"SmartGrid","capacity":9.0,"futureOutages":0,"name":"VIOTAS","fuel":18},{"unit":"EE5","fuelType":"SmartGrid","capacity":7.0,"futureOutages":0,"name":"VIOTAS","fuel":18},{"unit":"EE6","fuelType":"SmartGrid","capacity":14.0,"futureOutages":0,"name":"VIOTAS","fuel":18},{"unit":"EE7","fuelType":"SmartGrid","capacity":9.0,"futureOutages":0,"name":"VIOTAS","fuel":18},{"unit":"VE1","fuelType":"Wind","capacity":20.0,"futureOutages":0,"name":"Viridian Energy","fuel":2},{"unit":"VE2","fuelType":"Demand Side Unit","capacity":13.0,"futureOutages":0,"name":"Viridian Energy DSU","fuel":13},{"unit":"WG1","fuelType":"Gas","capacity":444.0,"futureOutages":0,"name":"Whitegate","fuel":0}];const unitSeries = [{"name":"Gardnershill_GP1","color":"#dbdf1e","label":"Battery","y":8.0},{"name":"Kelwin_KZ4","color":"#dbdf1e","label":"Battery","y":27.0},{"name":"Lumcloon_LU1","color":"#dbdf1e","label":"Battery","y":50.0},{"name":"Lumcloon_LU2","color":"#dbdf1e","label":"Battery","y":50.0},{"name":"Lisahally_NILPS","color":"#307e41","label":"Biomass","y":18.0},{"name":"Moneypoint_MP1","color":"#6b6368","label":"Coal","y":285.0},{"name":"Moneypoint_MP2","color":"#6b6368","label":"Coal","y":285.0},{"name":"Moneypoint_MP3","color":"#6b6368","label":"Coal","y":285.0},{"name":"Activation Energy_NIAEA","color":"#b89b6a","label":"Demand Side Unit","y":9.0},{"name":"Energy Trading_ET1","color":"#b89b6a","label":"Demand Side Unit","y":13.0},{"name":"Energy Trading_NIETB","color":"#b89b6a","label":"Demand Side Unit","y":9.0},{"name":"Energy Trading_NIETD","color":"#b89b6a","label":"Demand Side Unit","y":5.0},{"name":"Energy Trading_NIETR","color":"#b89b6a","label":"Demand Side Unit","y":19.0},{"name":"Powerhouse Generation_NIPH1","color":"#b89b6a","label":"Demand Side Unit","y":34.0},{"name":"Powerhouse Generation_PG1","color":"#b89b6a","label":"Demand Side Unit","y":10.0},{"name":"Viridian Energy DSU_VE2","color":"#b89b6a","label":"Demand Side Unit","y":13.0},{"name":"Edenderry_ED1","color":"#584d3d","label":"Distillate Oil","y":118.0},{"name":"Edenderry_ED3","color":"#584d3d","label":"Distillate Oil","y":58.0},{"name":"Edenderry_ED5","color":"#584d3d","label":"Distillate Oil","y":58.0},{"name":"Kilroot_NIK1","color":"#584d3d","label":"Distillate Oil","y":256.0},{"name":"Kilroot_NIK2","color":"#584d3d","label":"Distillate Oil","y":258.0},{"name":"Kilroot_NIKGT1","color":"#584d3d","label":"Distillate Oil","y":29.0},{"name":"Kilroot_NIKGT2","color":"#584d3d","label":"Distillate Oil","y":29.0},{"name":"Kilroot_NIKGT3","color":"#584d3d","label":"Distillate Oil","y":42.0},{"name":"Kilroot_NIKGT4","color":"#584d3d","label":"Distillate Oil","y":42.0},{"name":"Rhode_RP1","color":"#584d3d","label":"Distillate Oil","y":52.0},{"name":"Rhode_RP2","color":"#584d3d","label":"Distillate Oil","y":52.0},{"name":"Tawnaghmore_TP1","color":"#584d3d","label":"Distillate Oil","y":52.0},{"name":"Tawnaghmore_TP3","color":"#584d3d","label":"Distillate Oil","y":52.0},{"name":"Aghada_AD2","color":"#3cd8d0","label":"Gas","y":449.0},{"name":"Aghada_AT1","color":"#3cd8d0","label":"Gas","y":90.0},{"name":"Aghada_AT2","color":"#3cd8d0","label":"Gas","y":90.0},{"name":"Aghada_AT4","color":"#3cd8d0","label":"Gas","y":90.0},{"name":"Contour Global_NICG2","color":"#3cd8d0","label":"Gas","y":3.0},{"name":"Contour Global_NICGA","color":"#3cd8d0","label":"Gas","y":12.0},{"name":"Coolkeeragh_NIC30","color":"#3cd8d0","label":"Gas","y":408.0},{"name":"Coolkeeragh_NICGT8","color":"#3cd8d0","label":"Gas","y":53.0},{"name":"Dublin Bay_DB1","color":"#3cd8d0","label":"Gas","y":405.0},{"name":"Great Island_GI4","color":"#3cd8d0","label":"Gas","y":461.0},{"name":"Huntstown_HN2","color":"#3cd8d0","label":"Gas","y":400.0},{"name":"Huntstown_HNC","color":"#3cd8d0","label":"Gas","y":342.0},{"name":"Poolbeg_PB4","color":"#3cd8d0","label":"Gas","y":154.0},{"name":"Poolbeg_PB5","color":"#3cd8d0","label":"Gas","y":146.0},{"name":"Poolbeg_PB6","color":"#3cd8d0","label":"Gas","y":168.0},{"name":"Seal Rock_SK3","color":"#3cd8d0","label":"Gas","y":85.0},{"name":"Seal Rock_SK4","color":"#3cd8d0","label":"Gas","y":85.0},{"name":"Tynagh_TYC","color":"#3cd8d0","label":"Gas","y":384.0},{"name":"Whitegate_WG1","color":"#3cd8d0","label":"Gas","y":444.0},{"name":"AC Automation_NIACA","color":"#135169","label":"Generators","y":8.0},{"name":"iPower_NIAGU","color":"#135169","label":"Generators","y":74.0},{"name":"Ballylumford_NIB10","color":"#724134","label":"Heavy Fuel Oil","y":94.0},{"name":"Ballylumford_NIB31","color":"#724134","label":"Heavy Fuel Oil","y":249.0},{"name":"Ballylumford_NIB32","color":"#724134","label":"Heavy Fuel Oil","y":249.0},{"name":"Ballylumford_NIBGT1","color":"#724134","label":"Heavy Fuel Oil","y":58.0},{"name":"Ballylumford_NIBGT2","color":"#724134","label":"Heavy Fuel Oil","y":58.0},{"name":"Tarbert_TB1","color":"#724134","label":"Heavy Fuel Oil","y":54.0},{"name":"Tarbert_TB2","color":"#724134","label":"Heavy Fuel Oil","y":54.0},{"name":"Tarbert_TB3","color":"#724134","label":"Heavy Fuel Oil","y":241.0},{"name":"Tarbert_TB4","color":"#724134","label":"Heavy Fuel Oil","y":243.0},{"name":"Ardnacrusha_AA1","color":"#5172df","label":"Hydro","y":21.0},{"name":"Ardnacrusha_AA2","color":"#5172df","label":"Hydro","y":22.0},{"name":"Ardnacrusha_AA3","color":"#5172df","label":"Hydro","y":19.0},{"name":"Ardnacrusha_AA4","color":"#5172df","label":"Hydro","y":24.0},{"name":"Erne_ER1","color":"#5172df","label":"Hydro","y":10.0},{"name":"Erne_ER2","color":"#5172df","label":"Hydro","y":10.0},{"name":"Erne_ER3","color":"#5172df","label":"Hydro","y":22.5},{"name":"Erne_ER4","color":"#5172df","label":"Hydro","y":22.5},{"name":"Lee_LE1","color":"#5172df","label":"Hydro","y":15.0},{"name":"Lee_LE2","color":"#5172df","label":"Hydro","y":4.0},{"name":"Lee_LE3","color":"#5172df","label":"Hydro","y":8.0},{"name":"Liffey_LI1","color":"#5172df","label":"Hydro","y":15.0},{"name":"Liffey_LI2","color":"#5172df","label":"Hydro","y":15.0},{"name":"Liffey_LI4","color":"#5172df","label":"Hydro","y":4.0},{"name":"Liffey_LI5","color":"#5172df","label":"Hydro","y":4.0},{"name":"EWIC_EW1","color":"#344d72","label":"Interconnector","y":500.0},{"name":"Moyle_MOYLE","color":"#344d72","label":"Interconnector","y":450.0},{"name":"Shannonbridge_SI1","color":"#738b56","label":"Peat","y":50.0},{"name":"Shannonbridge_SI2","color":"#738b56","label":"Peat","y":50.0},{"name":"Turlough Hill_TH1","color":"#6a568b","label":"Pumped Storage","y":73.0},{"name":"Turlough Hill_TH2","color":"#6a568b","label":"Pumped Storage","y":73.0},{"name":"Turlough Hill_TH3","color":"#6a568b","label":"Pumped Storage","y":73.0},{"name":"Turlough Hill_TH4","color":"#6a568b","label":"Pumped Storage","y":73.0},{"name":"Electric Ireland_EI1","color":"#b8219f","label":"SmartGrid","y":20.0},{"name":"VIOTAS_EE1","color":"#b8219f","label":"SmartGrid","y":47.0},{"name":"VIOTAS_EE2","color":"#b8219f","label":"SmartGrid","y":20.0},{"name":"VIOTAS_EE3","color":"#b8219f","label":"SmartGrid","y":8.0},{"name":"VIOTAS_EE4","color":"#b8219f","label":"SmartGrid","y":9.0},{"name":"VIOTAS_EE5","color":"#b8219f","label":"SmartGrid","y":7.0},{"name":"VIOTAS_EE6","color":"#b8219f","label":"SmartGrid","y":14.0},{"name":"VIOTAS_EE7","color":"#b8219f","label":"SmartGrid","y":9.0},{"name":"DAE Virtual Power Plant_DP1","color":"#e4448e","label":"Virtual","y":19.0},{"name":"DAE Virtual Power Plant_DP2","color":"#e4448e","label":"Virtual","y":26.0},{"name":"Endeco Technologies_EC1","color":"#e4448e","label":"Virtual","y":47.0},{"name":"Endeco Technologies_EC2","color":"#e4448e","label":"Virtual","y":11.0},{"name":"Endeco Technologies_EC5","color":"#e4448e","label":"Virtual","y":15.0},{"name":"Endeco Technologies_NIECA","color":"#e4448e","label":"Virtual","y":13.0},{"name":"Enernoc_AE1","color":"#e4448e","label":"Virtual","y":95.0},{"name":"Enernoc_AE2","color":"#e4448e","label":"Virtual","y":12.0},{"name":"Enernoc_AE3","color":"#e4448e","label":"Virtual","y":14.0},{"name":"Enernoc_AE4","color":"#e4448e","label":"Virtual","y":15.0},{"name":"Enernoc_AE5","color":"#e4448e","label":"Virtual","y":15.0},{"name":"Enernoc_EN1","color":"#e4448e","label":"Virtual","y":15.0},{"name":"Enernoc_EN2","color":"#e4448e","label":"Virtual","y":16.0},{"name":"Enernoc_EN3","color":"#e4448e","label":"Virtual","y":16.0},{"name":"Enernoc_EN4","color":"#e4448e","label":"Virtual","y":16.0},{"name":"Enernoc_EN5","color":"#e4448e","label":"Virtual","y":6.0},{"name":"Enernoc_EN6","color":"#e4448e","label":"Virtual","y":11.0},{"name":"Enernoc_EN8","color":"#e4448e","label":"Virtual","y":21.0},{"name":"Enernoc_EN9","color":"#e4448e","label":"Virtual","y":16.0},{"name":"Dublin Waste_DW1","color":"#da8862","label":"Waste","y":61.5},{"name":"Indaver_IW1","color":"#da8862","label":"Waste","y":17.0},{"name":"Beenanaspuck Tobertoreen_XT2","color":"#51df70","label":"Wind","y":11.0},{"name":"Empower_NIEMP","color":"#51df70","label":"Wind","y":3.0},{"name":"Knockacummer_KC1","color":"#51df70","label":"Wind","y":100.0},{"name":"Seecon_SO1","color":"#51df70","label":"Wind","y":105.0},{"name":"Viridian Energy_VE1","color":"#51df70","label":"Wind","y":20.0}];const fuelSeries = [{"name":"Battery","color":"#dbdf1e","label":"","y":135.0},{"name":"Biomass","color":"#307e41","label":"","y":18.0},{"name":"Coal","color":"#6b6368","label":"","y":855.0},{"name":"Demand Side Unit","color":"#b89b6a","label":"","y":112.0},{"name":"Distillate Oil","color":"#584d3d","label":"","y":1098.0},{"name":"Gas","color":"#3cd8d0","label":"","y":4269.0},{"name":"Generators","color":"#135169","label":"","y":82.0},{"name":"Heavy Fuel Oil","color":"#724134","label":"","y":1300.0},{"name":"Hydro","color":"#5172df","label":"","y":216.0},{"name":"Interconnector","color":"#344d72","label":"","y":950.0},{"name":"Peat","color":"#738b56","label":"","y":100.0},{"name":"Pumped Storage","color":"#6a568b","label":"","y":292.0},{"name":"SmartGrid","color":"#b8219f","label":"","y":134.0},{"name":"Virtual","color":"#e4448e","label":"","y":399.0},{"name":"Waste","color":"#da8862","label":"","y":78.5},{"name":"Wind","color":"#51df70","label":"","y":239.0}]