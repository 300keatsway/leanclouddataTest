'use strict';
// var AV = require('leancloud-storage');
var express = require('express');
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'kJLGvMFcKmmsa9aiBmEqI55L-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'p7BjeYxDb883SnPgc1EwRKNI',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'dgdqRT8XxAJireTsayhAcz1N'
});

var app = express();
app.use(AV.express());
app.listen(process.env.LEANCLOUD_APP_PORT);

var namearr = [];
var shortnamearr = [];
var formarr = [];
var unitarr = [];
var factoryarr = [];
var pricearr = [];
// for(i = 2; i < len; i++){
//  table[obj[0]['data'][i][1]] = obj[0]['data'][i][3];
//  namearr.push(obj[0]['data'][i][1]);
//  if (obj[0]['data'][i][3] != null){
//      formarr.push(obj[0]['data'][i][3]);
//  }else{
//      formarr.push('普通');
//  }
//  unitarr.push(obj[0]['data'][i][5]);
//  factoryarr.push(obj[0]['data'][i][4]);
//  // console.log(namearr[i]);
// }

// for(i = 0; i<formarr.length; i++){
//  console.log('\''+ factoryarr[i]+'\''+',');
// }
// console.log(namearr);

// console.log(formarr);

// console.log(unitarr);

// console.log();

namearr = [
'M18溶血剂',
'M18稀释液',
'MEZ液',
'M冲洗液',
'M探头液',
'过敏原试剂盒',
'糖化血红蛋白',
'尿微量蛋白',
'心肌三项/三联',
'降钙素原定量检测试剂盒/PCT',
'N末端B型/BNP',
'D二聚体/D2',
'C反应蛋白/CRP',
'乙肝五项',
'ALT/丙氨酸氨基转移酶/谷丙',
'AST/天门冬氨酸氨基转移酶/谷草',
'DBIL/直接胆红素',
'TBIL/总胆红素',
'TBA/总胆汁酸',
'CHE/胆碱酯酶',
'CRE/肌酐',
'CK/肌酸激酶',
'CK-MB/肌酸激酶MB型同工酶',
'A-HBDH/A-羟丁酸脱氢酶',
'APOA1/载脂蛋白A1',
'APOB/载脂蛋白B',
'LP(A)/脂蛋白a/小A',
'GLU/葡萄糖-OX/血糖',
'C3/补体C3',
'C4/补体C4',
'IGA/免疫球蛋白A',
'IGG/免疫球蛋白G',
'IGM/免疫球蛋白M',
'ACE/血管紧张素转化酶',
'HCY/同型半胱氨酸',
'BMG/β2-微球蛋白/Β2',
'ALP/碱性磷酸酶',
'UREA/尿素／BUN',
'GGT/Γ-谷氨酰基转移酶',
'TP/总蛋白',
'ALB/白蛋白',
'TG/甘油三酯',
'CHO/胆固醇',
'HDL/高密度脂蛋白胆固醇',
'LDL/低密度脂蛋白胆固醇',
// 'LDH/乳酸脱氢酶',
'P/磷',
'CSF/脑脊液/尿总蛋白',
'UA/尿酸',
'CO2/二氧化碳',
'A-AMY/A-淀粉酶',
'LDH/乳酸脱氢酶',
'RBP/视黄醇结合蛋白',
'IGE/免疫球蛋白E',
'探针冲洗液',
'地高辛测定试剂盒',
'胃泌素释放肽前体测定试剂盒',
'癌抗原15-3测定试剂盒/153',
'癌抗原125测定试剂盒',
'甲状腺球蛋白抗体测定试剂盒',
'糖类抗原19-9测定试剂盒/199',
'睾酮测定试剂盒/T',
'促黄体生成素测定试剂盒/LH',
'细胞角蛋白19片段测定试剂盒/CY211',
'C肽测定试剂盒/C-P',
'甲胎蛋白测定试剂盒/AFP',
'人类免疫缺陷病毒抗原及抗体联合测定试剂盒/HIV',
'乙型肝炎病毒E抗原测定试剂盒',
'乙型肝炎病毒E抗体测定试剂盒',
'乙型肝炎病毒表面抗原定量测定试剂盒',
'丙型肝炎病毒抗体测定试剂盒/丙肝',
'浓缩清洗缓冲液',
'激发液',
'预激发液',
'SAMPLE CUP样品杯',
'样品杯',
'乙型肝炎病毒表面抗体测定试剂盒',
'促甲状腺激素测定试剂盒/TSH',
'游离三碘甲状腺原氨酸测定试剂盒/FT3',
'总三碘甲状腺原氨酸测定试剂盒/TT3',
'游离甲状腺素测定试剂盒/FT4',
'总甲状腺素测定试剂盒/TT4',
'癌胚抗原测定试剂盒/CEA',
'总前列腺特异性抗原测定试剂盒/T-PSA',
'游离前列腺特异性抗原测定试剂盒/F-PSA',
'雌二醇测定试剂盒/E2',
'卵泡刺激素测定试剂盒/FSH',
'泌(催)乳素测定试剂盒/PRL',
'孕酮测定试剂盒/P',
'梅毒螺旋体抗体测定试剂盒/TP',
'鳞状上皮细胞癌抗原测定试剂盒/SCC',
'胰岛素测定试剂盒/INS',
'乙型肝炎病毒核心抗体测定试剂盒',
'糖类抗原CA153标准',
'糖类抗原CA125标准',
'抗甲状腺球蛋白抗体标准',
'糖类抗原CA199标准',
'睾酮标准/T标准',
'促黄体生成素校准品/LH标准',
'C肽标准',
'甲胎蛋白校准品',
'艾滋抗体标准',
'乙肝病毒E抗原标准',
'乙肝病毒E抗体标准',
'乙肝病毒表面抗原标准',
'丙肝抗体标准',
'乙肝病毒表面抗体标准',
'促甲状腺激素标准/TSH标准',
'游离三碘甲状腺原氨酸标准/FT3标准',
'总三碘甲状腺原氨酸标准/TT3标准',
'游离甲状腺素标准/FT4标准',
'总甲状腺素标准/TT4标准',
'癌胚抗原标准/CEA标准',
'总前列腺特异性抗原标准/T-PSA标准',
'游离前列腺特异性抗原标准/F-PSA标准',
'雌二醇标准/E2标准',
'促卵泡成熟激素标准/FSH标准',
'催(泌)乳素标准/PRL标准',
'孕酮标准/P标准',
'梅毒校准品/TP标准',
'胰岛素标准/INS标准',
'乙肝病毒核心抗体标准',
'电解质七项/急诊电解质',
'肝功肾功生化九项/急诊肝功肾功',
'肝功生化八项/急诊肝功',
'临床急诊/急诊组合1',
'肾功生化七项/急诊肾功',
'糖脂生化五项',
'心肌酶五项/急诊心肌酶',
'综合(1)Ⅰ生化十三项',
'综合Ⅱ生化八项/急诊组合2',
'G-1型氯消毒剂浓度试纸',
'紫外线强度指示卡',
'75酒精',
'84消毒液',
'爱尔碘',
'碘伏',
'多酶清洗液',
'健之素复合醇手消毒液',
'健之素片',
'健之素洗手液',
'PE手套',
'一次性头网',
'取样钳1.8',
'取样钳2.3',
'一次性使用鼻镜',
'一次性使用间接喉镜',
'输液贴70×35五片',
'输液贴70×45五片',
'压敏胶带PE1.25×910',
'压敏胶带PE2.5×910',
'止血带6×9',
'可吸收外科缝线2-0圆',
'可吸收外科缝线2-0角',
'可吸收外科缝线4-0角',
'可吸收外科缝线5-0角',
'柠檬酸消毒液/贝朗柠檬酸',
'一次性使用空气净化输液器',
'一次性使用硅胶导尿管双腔20',
'一次性使用硅胶导尿管双腔22',
'一次性口腔器械盒8件套',
'透析液NCD-A液',
'透析液TR-B液',
'透析液TR-A液',
'一次性塑料试管',
'生化管黑',
'生化管红',
'生化管黄',
'生化管蓝',
'生化管紫',
'一次性定量取血管40UL',
'一次性使用静脉采血针',
'一次性拭子',
'一次性塑料试管7.5×12',
'20ML溶药注射器',
'5ML溶药注射器',
'1ML溶药注射器',
'Y型留置针20G',
'Y型留置针22G',
'Y型留置针24G',
'一次性使用硬膜外麻醉穿刺包AS-E/S',
'一次性使用胃管',
'血气针',
'一次性窥器A型',
'液体石蜡',
'激光红外胶片14×17',
'激光红外胶片10×12',
'透析采血针',
'透析管路',
'透析器14F',
'透析器16F',
'一次性使用精密过滤输液器',
'华冠针灸针0.22×40',
'华冠针灸针0.25×40',
'华冠针灸针0.18×25',
'华冠针灸针0.25×50',
'中研太和针灸针0.35×125（蟒针）',
'华冠针灸针0.35×125（蟒针）',
'华冠皮肤针（单头）',
'高分子夹板125MM×750MM',
'高分子夹板100MM×400MM',
'一次性使用吸氧面罩',
'一次性吸痰管50CM',
'心电图记录纸',
'心电图纸12导',
'心电图纸单导',
'凡士林纱布块10×10',
'凡士林纱布块10×20',
'凡士林纱布块5×10',
'一次性电极贴(片)',
'耳穴贴',
'口垫有舌',
'口垫无舌',
'洗手刷',
'大便器',
'小便器',
'一次性棉签',
'大头棉签',
'三列绷带',
'脱脂棉球',
'一次性孔巾50×60单独包装',
'一次性孔巾50×60',
'一次性口罩',
'一次性瓶口贴',
'一次性使用灭菌橡胶外科手套7有粉',
'一次性使用灭菌橡胶外科手套7.5有粉',
'一次性使用橡胶检查手套（中号）',
'一次性使用橡胶检查手套（小号）',
'医用纱布敷料8×10×8',
'医用纱布敷料6×8×8',
'医用鞋套',
'床罩75×210',
'中单100×200',
'中单50×60',
'中单80×120',
'被服包',
'治疗头',
'医用护理垫',
'医用帽',
'医用固定带',
'自粘伤口敷料6×7CM',
'自粘伤口敷料7×9CM',
'尿吸管(大袋)',
'一次性埋线针0.7',
'凝血酶原时间PT',
'凝血酶原时间TT',
'凝血活酶时间APTT',
'纤维蛋白原FLB',
'RT清洗液',
'凝血杯',
'一次性使用三腔胃管16FR',
'一次性湿化吸氧管大规格',
'一次性湿化吸氧管中规格',
'一次性使用血液灌流器MG100A',
'一次性使用胃镜洗消刷BW-20T',
'血清透明质酸(HA)测定试剂盒',
'(三)III型前胶原N端肽(PIIIP N-P)测定试剂盒',
'IV型胶原（C IV）测定试剂盒/IV型胶原肽',
'层粘连蛋白（LN）测定试剂盒',
'维生素B12（VB12）测定试剂盒',
'叶酸(FA)测定试剂盒',
'铁蛋白(FERRITIN)测定试剂盒',
'抗人胰岛素抗体（IAA）测定试剂盒',
'谷氨酸脱羧酶抗体（GAD65）测定试剂盒',
'血清甲状旁腺(激)素（PTH）测定试剂盒',
'全自动免疫检验系统用底物液',
'清洗液',
'反应杯',
'血细胞分析用溶血剂910',
'血细胞分析用溶血剂680',
'血细胞分析用稀释液',
'血细胞分析仪用清洗液520',
'血细胞分析仪用清洗液620',
'轮状病毒抗原检测试剂盒(胶体金法)',
'丙型肝炎病毒抗体检测试剂盒(胶体金法)/丙肝',
'梅毒螺旋抗体检测试剂盒(胶体金法)',
'人类免疫缺陷病毒(HIV)抗体检测试剂盒(胶体金法)',
'C反应蛋白半自动/CRP',
'尿微量蛋白半自动',
'明胶海绵',
'3M灭菌指示带',
'来苏水',
'双氧水',
'戊二醛',
'福尔马林',
'肝素帽',
'尿沉渣试管',
'留置针24G正压型',
'一次性使用硬膜外麻醉穿刺包AS-E',
'一次性吸痰管(戴手套)',
'橡胶检查手套中号',
'橡胶检查手套小号',
'直手机',
'弯手机',
'自粘伤口敷料10×15cm',
'鼻腔护理器',
'一次性使用三腔胃管(进口)15fr',
'压舌板',
'一次性中药煎药袋',
'导尿包18fr',
'弹力绷带',
'疝修补片',
'水银血压计',
'出诊箱',
'听诊器',
'紫外线指示卡',
'电子血压计',
'管道清洗刷',
'心电图机充电电池',
'血细胞分析仪用质控品',
'细菌性阴道病检测试剂盒',
'牙科综合治疗机',
'高速气涡轮手机pana-max2 m4',
'高速气涡轮手机pap-su-m4',
'一次性使用输液器带针6#',
'聚酯泡沫敷料(压疮贴)',
'中心静脉置管术换药包',
'一次性使用鼻氧管',
'一次性使用肠道冲洗袋',
'留置针贴',
'一次性使用无菌配药注射器50ml',
'枪头(移液器吸嘴)',
'一次性使用输氧面罩(雾化型)大',
'一次性使用输氧面罩(雾化型)小',
'高速离心机',
'便隐血',
'沙眼衣原体',
'肺炎支原体',
'人体支原体',
'ABO血型试纸',
'结核分枝杆菌抗体',
'电动病床',
'经外周插管中心静脉导管套件及附件',
'思乐扣(导管固定器)',
'可来福(输液接头)',
'无菌针灸针0.35×60',
'肛门镜',
'腿部垫高垫',
'MEK640稀释液',
'MEK680溶血剂',
'MEK910溶血剂',
'一次性使用换药包',
'一次性使用透析护理包',
'一次性使用拆线包',
'一次性使用流量设定微调式输液器',
'移液器',
'科达样品杯',
'小吸嘴盒',
'耦合剂',
'垃圾袋80×90',
'垃圾袋60×70',
'利器盒3L',
'利器盒8L',
'HN1530指控血清',
'HE1532质控血清',
'测序反应通用试剂盒'];

shortnamearr = [
['M18溶血剂'],
['M18稀释液'],
['MEZ液'],
['冲洗液'],
['探头液'],
['过敏原试剂'],
['糖化'],
['尿微','尿微量蛋白'],
['三联'],
['降钙素原','PCT'],
['BNP'],
['D2'],
['CRP','C反应蛋白'],
['乙肝'],
['谷丙','ALT'],
['谷草','AST'],
['直胆','DBIL'],
['总胆'],
['总胆汁酸'],
['胆碱酯酶'],
['肌酐','CRE'],
['肌酸激酶','CK'],
['CK-MB','肌酸激酶MB型'],
['A-HBDH'],
['载A'],
['载B'],
['小A','脂蛋白A','LP(A)'],
['血糖'],
['C3'],
['C4'],
['IGA'],
['IGG'],
['IGM'],
['ACE'],
['HCY'],
['BMG','β2-微球蛋白'],
['ALP'],
['UREA'],
['GGT'],
['总蛋白','TP'],
['白蛋白'],
['甘油三酯'],
['胆固醇'],
['HDL'],
['LDL'],
// ['乳酸脱氢酶','LDH'],
['磷','P'],
['CSF'],
['尿酸','UA'],
['二氧化碳','CO2'],
['淀粉酶','A-AMY'],
['乳脱','LDH','乳酸脱氢酶'],
['视黄醇'],
['IGE'],
['探针冲洗液'],
['地高辛试剂'],
['胃泌素测定'],
['153'],
['125'],
['甲状腺球蛋白抗体'],
['199'],
['睾酮测定剂','T'],
['LH'],
['CY211'],
['C-P'],
['AFP'],
['HIV','人类免疫缺陷病毒抗原及抗体联合测定试剂盒'],
['E抗原'],
['E抗体'],
['表面抗原'],
['丙肝'],
['浓缩缓冲液'],
['激发液'],
['预激发液'],
['SAMPLE CUP'],
['样品杯'],
['表面抗体'],
['TSH'],
['FT3'],
['TT3'],
['FT4'],
['TT4'],
['CEA'],
['T-PSA'],
['F-PSA'],
['E2'],
['FSH'],
['PRL','催乳素','泌乳素'],
['P','孕酮'],
['TP','梅毒抗体试剂盒'],
['SCC'],
['INS','胰岛素测定试剂盒'],
['核心抗体'],
['153标准'],
['125标准'],
['甲状腺球蛋白'],
['199标准'],
['T标准'],
['LH校准'],
['C肽标准'],
['甲胎蛋白校准品'],
['艾滋抗体标准'],
['E抗原标准'],
['E抗体标准'],
['表面抗原标准'],
['丙肝标准'],
['表面抗体标准'],
['TSH标准'],
['FT3标准'],
['TT3标准'],
['FT4标准'],
['TT4标准'],
['CEA标准'],
['T-PSA标准'],
['F-PSA标准'],
['E2标准'],
['FSH标准'],
['PRL标准','催乳素标准','泌乳素标准'],
['P标准','孕酮标准'],
['TP标准'],
['INS标准','胰岛素标准'],
['核心抗体标准'],
['急诊电解质'],
['急诊肝功肾功'],
['急诊肝功'],
['急诊组合1'],
['急诊肾功'],
['糖脂五项'],
['急诊心肌酶'],
['生化十三项','综合1'],
['急诊组合2','综合2生化八项'],
['G-1氯消毒剂试纸'],
['紫外强度卡'],
['75酒精'],
['84消毒液'],
['爱尔碘'],
['碘伏'],
['多酶清洗液'],
['复合醇消毒液'],
['健之素片'],
['健之素洗手液'],
['PE手套'],
['头网'],
['取样钳1.8'],
['取样钳2.3'],
['鼻镜'],
['间接喉镜'],
['输液贴35'],
['输液贴45'],
['压敏胶带PE1.25'],
['压敏胶带PE2.5'],
['止血带'],
['外科缝线2-0圆'],
['外科缝线2-0角'],
['外科缝线4-0角'],
['外科缝线5-0角'],
['贝朗柠檬酸'],
['空净输液器'],
['硅胶导尿管20'],
['硅胶导尿管22'],
['口腔器械盒'],
['透析NCD-A液'],
['透析TR-B液'],
['透析TR-A液'],
['一次性塑料试管'],
['黑生化管'],
['红生化管'],
['黄生化管'],
['蓝生化管'],
['紫生化管'],
['40UL取血管'],
['静脉采血针'],
['拭子'],
['一次性塑料试管'],
['20ML溶药注射器'],
['5ML溶药注射器'],
['1ML溶药注射器'],
['Y型留置针20G'],
['Y型留置针22G'],
['Y型留置针24G'],
['麻醉穿刺包'],
['胃管'],
['血气针'],
['一次性窥器'],
['液体石蜡'],
['激光红外胶片14×17'],
['激光红外胶片10×12'],
['透析采血针'],
['透析管路'],
['透析器14F'],
['透析器16F'],
['精密输液器'],
['华冠针灸针.22×40'],
['华冠针灸针.25×40'],
['华冠针灸针.18×25'],
['华冠针灸针.25×50'],
['中研太和蟒针','中研太和针灸针0.35×125'],
['华冠蟒针','华冠针灸针0.35×125'],
['单头皮肤针','华冠皮肤针'],
['高分子夹板'],
['高分子夹板'],
['吸氧面罩'],
['吸痰管'],
['心电记录纸'],
['心电12导纸'],
['心电单导纸'],
['纱块10×10','凡士林纱布块10×10'],
['纱块10×20','凡士林纱布块10×20'],
['纱块5×10','凡士林纱布块5×10'],
['电极贴','一次性电极贴／片'],
['耳穴贴'],
['口垫有舌'],
['口垫无舌'],
['洗手刷'],
['大便器'],
['小便器'],
['一次性棉签'],
['大头棉签'],
['三列绷带'],
['脱脂棉球'],
['孔巾','一次性孔巾50×60单独包装'],
['孔巾','一次性孔巾50×60'],
['口罩'],
['瓶口贴'],
['灭菌橡胶外科手套7'],
['灭菌橡胶外科手套7.5'],
['橡胶手套中','橡胶检查手套中','一次性使用橡胶检查手套中'],
['橡胶手套小','橡胶检查手套小','一次性使用橡胶检查手套小'],
['医用纱布敷料8×10×8'],
['医用纱布敷料6×8×8'],
['医用鞋套'],
['床罩75×210'],
['中单100×200'],
['中单50×60'],
['中单80×120'],
['被服包'],
['治疗头'],
['护理垫'],
['医用帽'],
['固定带'],
['自粘伤口敷料6×7'],
['自粘伤口敷料7×9'],
['尿吸管'],
['埋线针'],
['凝血酶原时间PT','PT'],
['凝血酶原时间TT'],
['凝血活酶APTT'],
['FLB','纤维蛋白原'],
['RT清洗液'],
['凝血杯'],
['三腔胃管'],
['湿化吸氧管大'],
['湿化吸氧管中'],
['血液灌流器'],
['胃镜洗消刷'],
['血清透明质酸','HA'],
['III型胶原肽'],
['IV型胶原肽'],
['层粘连蛋白','LN'],
['维生素B12'],
['叶酸','FA'],
['铁蛋白'],
['胰岛素抗体','IAA'],
['谷氨酸脱羧酶抗体','GAD65'],
['血清甲状旁腺激素','PTH'],
['检验系统用底物液'],
['清洗液'],
['反应杯'],
['血分溶血剂910'],
['血分溶血剂680'],
['血分稀释液'],
['血分清洗液520'],
['血分清洗液620'],
['轮状病毒试剂盒(胶金法)'],
['丙肝试剂盒(胶金法)'],
['梅毒试剂盒(胶金法)'],
['HIV试剂盒(胶金法)','人类免疫缺陷病毒抗体检测试剂盒'],
['CRP半自动'],
['尿微半自动','尿微量蛋白半自动'],
['明胶海绵'],
['3M灭菌指示带'],
['来苏水'],
['双氧水'],
['戊二醛'],
['福尔马林'],
['肝素帽'],
['尿沉渣试管'],
['留置针24G正压型'],
['硬膜外麻醉穿刺包AS-E'],
['吸痰管(戴手套)'],
['橡胶检查手套中号'],
['橡胶检查手套小号'],
['直手机'],
['弯手机'],
['自粘伤口敷料10×15cm'],
['鼻腔护理器'],
['三腔胃管(进口)15fr'],
['压舌板'],
['中药煎药袋'],
['导尿包18fr'],
['弹力绷带'],
['疝修补片'],
['水银血压计'],
['出诊箱'],
['听诊器'],
['紫外线指示卡'],
['电子血压计'],
['管道清洗刷'],
['心电图机充电电池'],
['血细胞分析仪用质控品'],
['细菌性阴道病检测试剂盒'],
['牙科综合治疗机'],
['高速气涡轮手机pana-max2 m4'],
['高速气涡轮手机pap-su-m4'],
['输液器带针6#'],
['聚酯泡沫敷料(压疮贴)'],
['中心静脉置管术换药包'],
['鼻氧管'],
['肠道冲洗袋'],
['留置针贴'],
['无菌配药注射器50ml'],
['枪头(移液器吸嘴)'],
['输氧面罩(雾化型)大'],
['一次性使用输氧面罩(雾化型)小'],
['高速离心机'],
['便隐血'],
['沙眼衣原体'],
['肺炎支原体'],
['人体支原体'],
['ABO血型试纸'],
['结核分枝杆菌抗体'],
['电动病床'],
['经外周插管中心静脉导管套件及附件'],
['思乐扣(导管固定器)'],
['可来福(输液接头)'],
['无菌针灸针0.35×60'],
['肛门镜'],
['腿部垫高垫'],
['MEK640稀释液'],
['MEK680溶血剂'],
['MEK910溶血剂'],
['换药包'],
['透析护理包'],
['拆线包'],
['流量设定微调式输液器'],
['移液器'],
['科达样品杯'],
['小吸嘴盒'],
['耦合剂'],
['垃圾袋80×90'],
['垃圾袋60×70'],
['利器盒3L'],
['利器盒8L'],
['HN1530指控血清'],
['HE1532质控血清'],
['测序反应通用试剂盒']
];


formarr = [
'500Ml/瓶',
'20L/桶',
'100ML/瓶',
'5.5L/桶',
'17ML/瓶',
'20人份/盒',
'48人份/盒',
'48人份/盒',
'48人份/盒',
'48人份/盒',
'48人份/盒',
'48人份/盒',
'96人份/盒',
'25人份/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
// '1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'1套/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'4*975ML/1套',
'4*975ML/1套',
'4*975ML/1套',
'1000支/袋',
'500支/袋',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'100人份/盒',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'1套',
'10片/盒',
'10片/盒',
'10片/盒',
'10片/盒',
'10片/盒',
'10片/盒',
'10片/盒',
'10片/盒',
'10片/盒',
'20本/盒',
'100片/盒',
'500ML/瓶',
'500ML/瓶',
'60ML/瓶',
'500ML/瓶',
'600ML/瓶',
'300ML/瓶',
'100片/瓶',
'500ML/瓶',
'100只/袋',
'50个/袋',
'10件/盒',
'10件/盒',
'50支/包',
'50支/包',
'100片/盒',
'100片/盒',
'24卷/盒',
'12卷/盒',
'30米/包',
'12包/盒',
'12包/盒',
'12包/盒',
'12包/盒',
'6L/桶',
'50支/盒',
'1支',
'1支',
'200套/箱',
'2人份/桶',
'2人份/桶',
'2人份/桶',
'500支/袋',
'100支/盒',
'100支/盒',
'100支/盒',
'100支/盒',
'100支/盒',
'400支/筒',
'100支/包',
'100支/包',
'500支/包',
'100支/盒',
'100支/盒',
'200支/盒',
'50支/盒',
'50支/盒',
'1支',
'1套/包',
'10支/袋',
'100支/箱',
'400只/箱',
'500ML/瓶',
'500张/箱',
'500张/箱',
'2支/对',
'1支/套',
'1支',
'1支',
'50支/箱',
'100支/盒',
'100支/盒',
'100支/盒',
'100支/盒',
'100支/盒',
'100支/盒',
'1支/盒',
'10袋/箱',
'1片/袋',
'1大号/个',
'1根',
'210*140一本',
'210*30一卷',
'50*20一卷',
'200块/盒',
'150块/盒',
'250块/盒',
'50枚/盒',
'10片/盒',
'100支/袋',
'100支/袋',
'25支/袋',
'1个',
'1个',
'2000支/包',
'200支/包',
'10轴/包',
'500克/包',
'20条/包',
'20条/包',
'20个/包',
'50片/盒',
'50付/盒',
'50付/盒',
'50付/盒',
'50付/盒',
'150片/袋',
'240片/袋',
'100双/袋',
'5条/袋',
'5条/袋',
'20条/袋',
'10条/袋',
'1套／袋',
'100个/包',
'30条/包',
'150个/袋',
'1个',
'100片/盒',
'60片/盒',
'袋',
'50支/袋',
'1套',
'1套',
'1套',
'1套',
'30ML/瓶',
'1900支/袋',
'1根',
'1套',
'1套',
'1套',
'1根/袋',
'1盒',
'1盒',
'1盒',
'1盒',
'1盒',
'1盒',
'1盒',
'1盒',
'1盒',
'1盒',
'1套/盒',
'714ml/瓶',
'64条/盒',
'3瓶/盒',
'3瓶/盒',
'20L/箱',
'5L/盒',
'5L/盒',
'25人份/盒',
'50人份/盒',
'50人份/盒',
'50人份/盒',
'25人份/盒',
'25人份/盒',
'20袋/盒',
'1卷',
'500ML/瓶',
'500ML/瓶',
'2.5L/瓶',
'500ML/瓶',
'50个/盒',
'100支/包',
'1支',
'1套/包',
'1根',
'100支/盒',
'100支/盒',
'1支/盒',
'1支/盒',
'40片/盒',
'60ML/瓶',
'1根',
'100支/盒',
'100支/袋',
'1套/包',
'12卷/包',
'1片',
'1个',
'1个',
'1个',
'100片/盒',
'1个',
'1支',
'1块',
'1支',
'50人份/盒',
'1台',
'1个',
'1个 ',
'25支/袋',
'10片/盒',
'1套/包',
'30支/袋',
'20个/袋',
'100片/盒',
'50支/盒',
'1000支/包',
'1个/袋',
'1个/袋',
'1台',
'50人份/盒',
'20人份/盒',
'40人份/盒',
'20人份/盒',
'40人份/盒',
'20人份/盒',
'1张 ',
'1套',
'1个/袋',
'1个/袋',
'100支/盒',
'20支/袋',
'1个/袋',
'15L/桶',
'500ML/瓶',
'500ML/瓶',
'1只/包',
'1只/包',
'1只/包',
'50支/箱',
'1支 ',
'1500个/袋',
'1个/盒',
'250ML/支',
'100个/捆',
'100个/捆',
'1个',
'1个',
'1盒',
'1盒',
'1支/盒'
];

factoryarr = [
'北京曼程',
'北京曼程',
'北京曼程',
'北京曼程',
'北京曼程',
'北京唯康',
'基蛋生物',
'基蛋生物',
'基蛋生物',
'基蛋生物',
'基蛋生物',
'基蛋生物',
'基蛋生物',
'瑞安百利',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
// '森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'森美希玛克（雅培）',
'天津微纳芯',
'天津微纳芯',
'天津微纳芯',
'天津微纳芯',
'天津微纳芯',
'天津微纳芯',
'天津微纳芯',
'天津微纳芯',
'天津微纳芯',
'北京四环卫生药械厂',
'北京四环卫生药械厂',
'山东利尔康',
'山东利尔康',
'山东利尔康',
'山东利尔康',
'山东利尔康',
'长江脉',
'长江脉',
'长江脉',
'安徽安恒',
'安平县中鼎医疗',
'安泰国瑞',
'安泰国瑞',
'北京来时路',
'北京来时路',
'北京阳光宜康',
'北京阳光宜康',
'北京阳光宜康',
'北京阳光宜康',
'常州金利',
'金圆',
'金圆',
'金圆',
'金圆',
'东海民鑫',
'哈娜好',
'海盐康源',
'海盐康源',
'博瑞医疗',
'黄骅思创',
'黄骅思创',
'黄骅思创',
'江苏华东',
'江苏康捷',
'江苏康捷',
'江苏康捷',
'江苏康捷',
'江苏康捷',
'江苏康捷',
'江苏康捷',
'江苏康捷',
'江苏康捷',
'圣光医药',
'圣光医药',
'圣光医药',
'圣光医药',
'圣光医药',
'圣光医药',
'江西洪达',
'江苏华东',
'杰富瑞',
'南昌康洁',
'南昌市华鑫',
'锐珂',
'锐珂',
'山东威高',
'山东威高',
'山东威高',
'山东威高',
'山东淄博山川',
'苏州东方',
'苏州东方',
'苏州东方',
'苏州东方',
'中研太和',
'苏州东方',
'苏州东方',
'安信',
'安信',
'苏州迈达',
'苏州迈达',
'天津富华',
'天津富华',
'天津富华',
'新乡华西卫材',
'新乡华西卫材',
'新乡华西卫材',
'扬州得尔康',
'中研太和',
'扬州龙虎',
'扬州龙虎',
'连旗盛世',
'宇安医疗',
'宇安医疗',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'豫北卫材',
'金方圆',
'豫北卫材',
'豫北卫材',
'镇江市丹徒科达',
'智象',
'上海太阳生物',
'上海太阳生物',
'上海太阳生物',
'上海太阳生物',
'上海太阳生物',
'上海太阳生物',
'山西新华美',
'北京祺瑞康',
'北京祺瑞康',
'佛山博新',
'磊石兴业',
'新产业',
'新产业',
'新产业',
'新产业',
'新产业',
'新产业',
'新产业',
'新产业',
'新产业',
'新产业',
'新产业',
'新产业',
'新产业',
'济南博莱',
'济南博莱',
'济南博莱',
'济南博莱',
'济南博莱',
'天缘康达',
'天缘康达',
'天缘康达',
'天缘康达',
'基蛋生物',
'基蛋生物',
'北京四环卫生',
'北京四环卫生',
'山东利尔康',
'山东利尔康',
'山东利尔康',
'南昌雨露',
'江苏康捷',
'江苏康捷',
'圣光医药',
'江西洪达',
'宝鸡德尔',
'北京宏权胜业',
'北京宏权胜业',
'上海宇井',
'上海宇井',
'豫北卫材',
'北京宝恩科技',
'福瑞克',
'磐安县鲁班竹木',
'芜湖久口袋',
'北京天厚',
'北京天厚',
'北京天厚',
'北京天厚',
'北京天厚',
'北京天厚',
'北京天厚',
'北京天厚',
'磊石兴业',
'伟力新世纪',
'伟力新世纪',
'天缘康达',
'西诺医疗',
'上海宇井',
'上海宇井',
'北京洪达博瑞',
'北京金润恒德',
'北京金润恒德',
'扬州亚欧科技',
'扬州亚欧科技',
'北京洪达博瑞',
'北京圣光奥博',
'江苏康捷医疗',
'苏州市日月星',
'苏州市日月星',
'北京时代北利',
'北京瑞安百利',
'北京瑞安百利',
'北京瑞安百利',
'北京瑞安百利',
'北京天缘康达',
'北京天缘康达',
'深圳市泰乐康',
'北京富兰德盛',
'北京富兰德盛',
'北京富兰德盛',
'北京健乐康',
'北京奥瑞康',
'衡水金圆医疗',
'北京伟力新世纪',
'北京伟力新世纪',
'北京伟力新世纪',
'扬州龙虎医疗',
'扬州龙虎医疗',
'扬州龙虎医疗',
'山东淄博山川',
'江苏康捷医疗',
'江苏康捷医疗',
'江苏康捷医疗',
'北京天厚',
'北京京瑞康',
'北京京瑞康',
'北京京瑞康',
'北京京瑞康',
'北京智汇云康',
'北京智汇云康',
'嘉世瑞康'
];

unitarr = [
'瓶',
'桶',
'瓶',
'桶',
'瓶',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
// '盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'箱',
'箱',
'箱',
'袋',
'袋',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'瓶',
'瓶',
'瓶',
'瓶',
'瓶',
'瓶',
'瓶',
'瓶',
'袋',
'袋',
'盒',
'盒',
'支',
'支',
'盒',
'盒',
'盒',
'盒',
'包',
'盒',
'盒',
'盒',
'盒',
'桶',
'盒',
'支',
'支',
'箱',
'桶',
'桶',
'桶',
'袋',
'盒',
'盒',
'盒',
'盒',
'盒',
'筒',
'包',
'包',
'包',
'盒',
'盒',
'盒',
'盒',
'盒',
'支',
'包',
'袋',
'箱',
'箱',
'瓶',
'箱',
'箱',
'对',
'套',
'支',
'支',
'箱',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'箱',
'袋',
'个',
'根',
'本',
'卷',
'卷',
'盒',
'盒',
'盒',
'盒',
'盒',
'袋',
'袋',
'袋',
'个',
'个',
'包',
'包',
'包',
'包',
'包',
'包',
'包',
'盒',
'盒',
'盒',
'盒',
'盒',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'袋',
'包',
'包',
'袋',
'个',
'盒',
'盒',
'袋',
'袋',
'盒',
'盒',
'盒',
'盒',
'瓶',
'袋',
'根',
'套',
'套',
'套',
'袋',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'瓶',
'盒',
'盒',
'盒',
'箱',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'卷',
'瓶',
'瓶',
'瓶',
'瓶',
'盒',
'包',
'支',
'包',
'根',
'盒',
'盒',
'盒',
'盒',
'盒',
'瓶',
'根',
'盒',
'袋',
'包',
'包',
'片',
'个',
'个',
'个',
'盒',
'个',
'支',
'块',
'支',
'盒',
'台',
'个',
'个',
'袋',
'盒',
'包',
'袋',
'袋',
'盒',
'盒',
'包',
'袋',
'袋',
'台',
'盒',
'盒',
'盒',
'盒',
'盒',
'盒',
'张',
'套',
'袋',
'袋',
'盒',
'袋',
'袋',
'桶',
'瓶',
'瓶',
'包',
'包',
'包',
'箱',
'支',
'袋',
'盒',
'支',
'捆',
'捆',
'个',
'个',
'盒',
'盒',
'盒'
];

pricearr = [
'775',
'280',
'120',
'220',
'24',
'6600',
'1440',
'1200',
'4800',
'4080',
'6240',
'2160',
'960',
'X',
'306.82',
'306.82',
'287.64',
'287.64',
'3068.16',
'527.34',
'1073.86',
'419.48',
'1558.05',
'268.46',
'1917.6',
'1687.49',
'3739.32',
'124.64',
'680.75',
'680.75',
'719.1',
'719.1',
'719.1',
'1582.02',
'4741.27',
'4674.15',
'287.64',
'421.87',
'383.52',
'95.88',
'95.88',
'527.34',
'239.7',
'1022.72',
'1201.7',
// '294.54',
'207.74',
'2037.45',
'405',
'1610.78',
'882.1',
'294.54',
'2109.36',
'3063.37',
'4471.54',
'4958.02',
'6580.7',
'3648.54',
'3800.15',
'2180.79',
'3800.15',
'2127.48',
'1850.93',
'6155.87',
'4644.81',
'1672.66',
'5599.43',
'1995.87',
'1995.87',
'2095.83',
'8211.71',
'1202.85',
'1324.47',
'3158.74',
'3240.37',
'385',
'1995.87',
'1695.99',
'1964.21',
'1922.56',
'1902.57',
'1964.21',
'1860.92',
'3800.15',
'4143.34',
'1850.93',
'1850.93',
'1850.93',
'1850.93',
'2442.36',
'4748.1',
'1805.94',
'2112.49',
'949.62',
'949.62',
'939.62',
'949.62',
'446.49',
'939.62',
'1059.58',
'308.21',
'939.62',
'931.29',
'931.29',
'931.29',
'931.29',
'931.29',
'939.62',
'939.62',
'939.62',
'939.62',
'939.62',
'949.62',
'949.62',
'949.62',
'939.62',
'939.62',
'939.62',
'939.62',
'939.62',
'939.62',
'931.29',
'70',
'130',
'80',
'130',
'70',
'50',
'50',
'130',
'80',
'77',
'72',
'3.95',
'2.1',
'3.8',
'4.41',
'95',
'17',
'15.6',
'11',
'2.03',
'37',
'870',
'870',
'116',
'108.5',
'5.8',
'9',
'28.8',
'30',
'54',
'324',
'324',
'324',
'324',
'300',
'850',
'38',
'38',
'610',
'53',
'37',
'53',
'X',
'130',
'130',
'136',
'130',
'130',
'15',
'24',
'25',
'25',
'50',
'30',
'50',
'835',
'835',
'16.7',
'57',
'28',
'1700',
'1216',
'11.2',
'13000',
'10000',
'14.6',
'67',
'198',
'208',
'410',
'12',
'12',
'12',
'12',
'30',
'30',
'2',
'104',
'52',
'11.5',
'8.6',
'24',
'14',
'2.35',
'500',
'525',
'375',
'130',
'12',
'42',
'39',
'50',
'8.7',
'4.35',
'75',
'36',
'34',
'25',
'9.2',
'6',
'3.6',
'25',
'120',
'120',
'34',
'34',
'X',
'84',
'20',
'12.5',
'7.5',
'6.8',
'13.8',
'9',
'100',
'60',
'X',
'53',
'140',
'114',
'30',
'133',
'900',
'800',
'800',
'1750',
'250',
'760',
'180',
'75',
'65',
'401',
'575',
'3160',
'3160',
'3160',
'3160',
'5000',
'2620',
'1800',
'4400',
'4400',
'3160',
'500',
'260',
'139',
'2160',
'1500',
'260',
'360',
'360',
'206.25',
'165',
'135',
'240',
'250',
'625',
'11.8',
'58',
'2.5',
'2.6',
'30',
'18',
'1.5',
'30',
'45',
'39',
'2.9',
'32.5',
'32.5',
'1200',
'750',
'68',
'70',
'180',
'50',
'100',
'30',
'45',
'455',
'117',
'102',
'31',
'72',
'560',
'575',
'1800',
'600',
'210',
'35200',
'850',
'1500',
'1',
'650',
'45',
'36',
'87',
'150',
'75',
'20',
'39',
'39',
'4500',
'84',
'210',
'532',
'180',
'140',
'190.4',
'36000',
'2730',
'56',
'78',
'60',
'42.4',
'45',
'260',
'500',
'720',
'2.66',
'4.62',
'4.2',
'1548',
'500',
'180',
'5',
'1.5',
'7.5',
'5.5',
'5',
'7',
'1300',
'1300',
'455'];


// function newRestaurant(restaurantData) {
//     let name = restaurantData.name || '';
//     console.log('new Resest function called');
//     console.log(restaurantData);
//     if (name == '') {
//         throw new Error('餐厅必须得有个名字吧，😜');
//     }
//     let id = restaurantData.id || '';
//     let restaurant = new AV.Object('Restaurant');
//     restaurant.set('name', name);
//     restaurant.set('id', id);
//     return restaurant.save();
// }



// function querySeats(restaurant) {
//   console.log('query funciton called');
//     if (typeof restaurant == 'string') {
//         restaurant = AV.Object.createWithoutData('Restaurant', restaurant);
//     } else if (typeof restaurant != 'AV.Object') {
//         throw new Error('仅支持传入 string 和 AV.Object');
//     }
//     let query = new AV.Query('Seat');
//     query.equalTo('under',restaurant);
//     return query.find();
// }

// upload a new product 
function newProduct(productData) { 
    let name = productData.name || '';
    console.log('new product function called');
    // console.log(restaurantData);
    if (name == '') {
        throw new Error('产品名称为空');
    }
    let id = productData.id || '';
    let shortname = productData.shortname || '';
    let format = productData.format || '';
    let unit = productData.unit || '';
    let factory = productData.factory || '';
    let price = productData.price || '';

    let product = new AV.Object('ProductList');
    product.set('name', name);
    product.set('id', id);
    product.set('shortname',shortname);
    product.set('format',format);
    product.set('unit',unit);
    product.set('factory',factory);
    product.set('price',price);

    return product.save();
}

// upload the product list to database
function newProductAll() { 
    var productarr = [];
    for(var j = 0; j < namearr.length; j++){
        console.log(j);
        let productData = {
        id: j+1,
        name: namearr[j],
        shortname: shortnamearr[j],
        format: formarr[j],
        unit: unitarr[j],
        factory: factoryarr[j],
        price: pricearr[j]
        };
        let name = productData.name || '';
        console.log('new product function called');
    // console.log(restaurantData);
        if (name == '') {
            throw new Error('产品名称为空');
        }
        let id = productData.id || '';
        let shortname = productData.shortname || '';
        let format = productData.format || '';
        let unit = productData.unit || '';
        let factory = productData.factory || '';
        let price = productData.price || '';

        let product = new AV.Object('ProductList');

        product.set('name', name);
        product.set('id', id);
        product.set('shortname',shortname);
        product.set('format',format);
        product.set('unit',unit);
        product.set('factory',factory);
        product.set('price',price);
        // product.save();
        productarr.push(product);
    }
    AV.Object.saveAll(productarr);
}

// function addoneProduction(){
//     return 
// }

// function queryproduct(productname){
    // return 
// }

// function deleteoneProduct(objectID){

// }


// newProductAll();
var querytest = '生化管';

function queryProduct(searchName){
  return new Promise(function(resolve,reject){
    let query = new AV.Query('ProductList');
    var input = searchName.split('-').join('');
    var pattern = '';
    var wordsea = '(?=.*';
    for(var i = 0; i < input.length; i++){
        if (input[i] != '/'){
            pattern = pattern + wordsea + input[i] + ')'; 
        }
    }
    pattern = pattern + '[' + input + ']';
    var reg = new RegExp(pattern);
    query.matches('name', reg);
    query.find().then(function (results) {
        console.log('Found items to be cleaned');
            var outputset = [];
            if (results.length > 3){
                for (var n = 0; n < results.length; n++){
                    if(results[n].match(input)){
                        outputset.push(results[n]);
                    }
                }
                if (outputset.length == 0){
                    outputset = candiset; 
                }
            }else{
                outputset = candiset;
            }
            console.log('inside query: ',outputset);
            resolve(outputset); 
        }, function (error) {
        reject(error);
    });
});
}

queryProduct(querytest).then(function(result) {
    // 成功获得实例
    console.log('Found!');
    console.log(result.length);
    var resultstr = JSON.stringify(result);
    var resultobj = JSON.parse(resultstr);
    console.log(resultstr);
    console.log(resultobj[0]);
    console.log(resultobj[0].format);
    }).catch(function(error){
        console.log('catch: ', error);
    });



// function queryBoss(wechatID){ return }

// function addoneUser(wechatID, boss){}

// function delecteoneuser(wechatID, boss){}

// query a product based on full name 


// newRestaurant(restaurantData3).then(result => {
// //     console.log('test');
//     console.log(result.name)
//     console.log(result.id);
//   querySeats(result.id).then(resfind => {
//     // result 为和平饭店里面的座位
//     console.log('queryexample');
//     console.log(resfind);
// });
// });

// let restaurant = '5994668fa22b9d00572762cf';
// querySeats(restaurant).then(result => {
//     // result 为和平饭店里面的座位
//     console.log('queryexample');
//     console.log(result);
// });
// exports.newRestaurant = 
