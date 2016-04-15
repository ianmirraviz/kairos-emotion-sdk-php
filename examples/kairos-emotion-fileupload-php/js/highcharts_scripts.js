HighchartsApp = function (config) {
	this.config = config;
};

HighchartsApp.prototype.displayData = function(data) {
	var self = this;
	// var data = '{"0":{"person":{"time":0,"person_id":"0","emotions":{"smile":0.028,"surprise":0.087,"negative":0.169,"attention":100}}},"1":{"person":{"time":21,"person_id":"0","emotions":{"smile":0.029,"surprise":0.087,"negative":0.165,"attention":100}}},"2":{"person":{"time":55,"person_id":"0","emotions":{"smile":0.021,"surprise":0.093,"negative":0.174,"attention":100}}},"3":{"person":{"time":121,"person_id":"0","emotions":{"smile":0.022,"surprise":0.087,"negative":0.179,"attention":100}}},"4":{"person":{"time":153,"person_id":"0","emotions":{"smile":0.02,"surprise":0.087,"negative":0.185,"attention":100}}},"5":{"person":{"time":186,"person_id":"0","emotions":{"smile":0.021,"surprise":0.086,"negative":0.185,"attention":100}}},"6":{"person":{"time":209,"person_id":"0","emotions":{"smile":0.02,"surprise":0.086,"negative":0.188,"attention":100}}},"7":{"person":{"time":232,"person_id":"0","emotions":{"smile":0.022,"surprise":0.086,"negative":0.188,"attention":100}}},"8":{"person":{"time":267,"person_id":"0","emotions":{"smile":0.024,"surprise":0.089,"negative":0.19,"attention":100}}},"9":{"person":{"time":293,"person_id":"0","emotions":{"smile":0.025,"surprise":0.091,"negative":0.19,"attention":100}}},"10":{"person":{"time":329,"person_id":"0","emotions":{"smile":0.026,"surprise":0.094,"negative":0.193,"attention":100}}},"11":{"person":{"time":352,"person_id":"0","emotions":{"smile":0.027,"surprise":0.094,"negative":0.196,"attention":100}}},"12":{"person":{"time":385,"person_id":"0","emotions":{"smile":0.04,"surprise":0.099,"negative":0.183,"attention":100}}},"13":{"person":{"time":409,"person_id":"0","emotions":{"smile":0.051,"surprise":0.107,"negative":0.171,"attention":100}}},"14":{"person":{"time":440,"person_id":"0","emotions":{"smile":0.061,"surprise":0.111,"negative":0.158,"attention":100}}},"15":{"person":{"time":463,"person_id":"0","emotions":{"smile":0.07,"surprise":0.114,"negative":0.149,"attention":100}}},"16":{"person":{"time":486,"person_id":"0","emotions":{"smile":0.081,"surprise":0.118,"negative":0.135,"attention":100}}},"17":{"person":{"time":517,"person_id":"0","emotions":{"smile":0.09,"surprise":0.124,"negative":0.127,"attention":100}}},"18":{"person":{"time":541,"person_id":"0","emotions":{"smile":0.098,"surprise":0.126,"negative":0.117,"attention":100}}},"19":{"person":{"time":575,"person_id":"0","emotions":{"smile":0.106,"surprise":0.129,"negative":0.109,"attention":100}}},"20":{"person":{"time":598,"person_id":"0","emotions":{"smile":0.115,"surprise":0.133,"negative":0.101,"attention":100}}},"21":{"person":{"time":623,"person_id":"0","emotions":{"smile":0.122,"surprise":0.141,"negative":0.096,"attention":100}}},"22":{"person":{"time":653,"person_id":"0","emotions":{"smile":0.12,"surprise":0.142,"negative":0.102,"attention":100}}},"23":{"person":{"time":676,"person_id":"0","emotions":{"smile":0.118,"surprise":0.144,"negative":0.108,"attention":100}}},"24":{"person":{"time":708,"person_id":"0","emotions":{"smile":0.122,"surprise":0.139,"negative":0.103,"attention":100}}},"25":{"person":{"time":731,"person_id":"0","emotions":{"smile":0.124,"surprise":0.135,"negative":0.101,"attention":100}}},"26":{"person":{"time":755,"person_id":"0","emotions":{"smile":0.126,"surprise":0.127,"negative":0.099,"attention":100}}},"27":{"person":{"time":787,"person_id":"0","emotions":{"smile":0.127,"surprise":0.122,"negative":0.098,"attention":100}}},"28":{"person":{"time":810,"person_id":"0","emotions":{"smile":0.128,"surprise":0.119,"negative":0.096,"attention":100}}},"29":{"person":{"time":841,"person_id":"0","emotions":{"smile":0.129,"surprise":0.117,"negative":0.092,"attention":100}}},"30":{"person":{"time":863,"person_id":"0","emotions":{"smile":0.127,"surprise":0.111,"negative":0.088,"attention":100}}},"31":{"person":{"time":891,"person_id":"0","emotions":{"smile":0.128,"surprise":0.104,"negative":0.083,"attention":100}}},"32":{"person":{"time":925,"person_id":"0","emotions":{"smile":0.126,"surprise":0.099,"negative":0.076,"attention":100}}},"33":{"person":{"time":948,"person_id":"0","emotions":{"smile":0.123,"surprise":0.099,"negative":0.071,"attention":100}}},"34":{"person":{"time":983,"person_id":"0","emotions":{"smile":0.116,"surprise":0.107,"negative":0.077,"attention":100}}},"35":{"person":{"time":1009,"person_id":"0","emotions":{"smile":0.113,"surprise":0.116,"negative":0.079,"attention":100}}},"36":{"person":{"time":1041,"person_id":"0","emotions":{"smile":0.105,"surprise":0.143,"negative":0.069,"attention":100}}},"37":{"person":{"time":1064,"person_id":"0","emotions":{"smile":0.098,"surprise":0.164,"negative":0.057,"attention":100}}},"38":{"person":{"time":1096,"person_id":"0","emotions":{"smile":0.091,"surprise":0.185,"negative":0.048,"attention":100}}},"39":{"person":{"time":1119,"person_id":"0","emotions":{"smile":0.079,"surprise":0.198,"negative":0.044,"attention":100}}},"40":{"person":{"time":1141,"person_id":"0","emotions":{"smile":0.069,"surprise":2,"negative":0.037,"attention":100}}},"41":{"person":{"time":1174,"person_id":"0","emotions":{"smile":0.058,"surprise":2,"negative":0.032,"attention":100}}},"42":{"person":{"time":1197,"person_id":"0","emotions":{"smile":0.042,"surprise":2,"negative":0.032,"attention":100}}},"43":{"person":{"time":1225,"person_id":"0","emotions":{"smile":0.026,"surprise":2,"negative":0.031,"attention":100}}},"44":{"person":{"time":1256,"person_id":"0","emotions":{"smile":0.01,"surprise":2,"negative":0.026,"attention":100}}},"45":{"person":{"time":1278,"person_id":"0","emotions":{"smile":0.834,"surprise":2,"negative":0.024,"attention":100}}},"46":{"person":{"time":1308,"person_id":"0","emotions":{"smile":2.216,"surprise":2,"negative":0.035,"attention":100}}},"47":{"person":{"time":1331,"person_id":"0","emotions":{"smile":3.471,"surprise":2,"negative":0.046,"attention":100}}},"48":{"person":{"time":1361,"person_id":"0","emotions":{"smile":5.206,"surprise":2,"negative":0.05,"attention":100}}},"49":{"person":{"time":1387,"person_id":"0","emotions":{"smile":6.237,"surprise":2,"negative":0.054,"attention":100}}},"50":{"person":{"time":1411,"person_id":"0","emotions":{"smile":7.082,"surprise":2,"negative":0.062,"attention":100}}},"51":{"person":{"time":1434,"person_id":"0","emotions":{"smile":7.904,"surprise":2,"negative":0.068,"attention":100}}},"52":{"person":{"time":1463,"person_id":"0","emotions":{"smile":8.11,"surprise":2,"negative":0.072,"attention":100}}},"53":{"person":{"time":1485,"person_id":"0","emotions":{"smile":7.89,"surprise":2,"negative":0.075,"attention":100}}},"54":{"person":{"time":1509,"person_id":"0","emotions":{"smile":7.634,"surprise":2,"negative":0.08,"attention":100}}},"55":{"person":{"time":1540,"person_id":"0","emotions":{"smile":7.528,"surprise":2,"negative":0.084,"attention":100}}},"56":{"person":{"time":1562,"person_id":"0","emotions":{"smile":7.581,"surprise":2,"negative":0.087,"attention":100}}},"57":{"person":{"time":1593,"person_id":"0","emotions":{"smile":7.594,"surprise":2,"negative":0.089,"attention":100}}},"58":{"person":{"time":1616,"person_id":"0","emotions":{"smile":6.919,"surprise":2,"negative":0.095,"attention":100}}},"59":{"person":{"time":1639,"person_id":"0","emotions":{"smile":6.245,"surprise":2,"negative":0.096,"attention":100}}},"60":{"person":{"time":1671,"person_id":"0","emotions":{"smile":6.355,"surprise":2,"negative":0.086,"attention":100}}},"61":{"person":{"time":1694,"person_id":"0","emotions":{"smile":6.511,"surprise":2,"negative":0.079,"attention":100}}},"62":{"person":{"time":1719,"person_id":"0","emotions":{"smile":6.525,"surprise":2,"negative":0.071,"attention":100}}},"63":{"person":{"time":1747,"person_id":"0","emotions":{"smile":6.972,"surprise":2,"negative":0.065,"attention":100}}},"64":{"person":{"time":1769,"person_id":"0","emotions":{"smile":7.351,"surprise":2,"negative":0.058,"attention":100}}},"65":{"person":{"time":1797,"person_id":"0","emotions":{"smile":7.583,"surprise":2,"negative":0.052,"attention":100}}},"66":{"person":{"time":1820,"person_id":"0","emotions":{"smile":7.949,"surprise":2,"negative":0.049,"attention":100}}},"67":{"person":{"time":1844,"person_id":"0","emotions":{"smile":8.14,"surprise":2,"negative":0.043,"attention":100}}},"68":{"person":{"time":1872,"person_id":"0","emotions":{"smile":8.465,"surprise":2,"negative":0.045,"attention":100}}},"69":{"person":{"time":1895,"person_id":"0","emotions":{"smile":8.789,"surprise":2,"negative":0.042,"attention":100}}},"70":{"person":{"time":1922,"person_id":"0","emotions":{"smile":8.588,"surprise":2,"negative":0.05,"attention":100}}},"71":{"person":{"time":1948,"person_id":"0","emotions":{"smile":8.486,"surprise":2,"negative":0.056,"attention":100}}},"72":{"person":{"time":1971,"person_id":"0","emotions":{"smile":8.44,"surprise":2,"negative":0.054,"attention":100}}},"73":{"person":{"time":1999,"person_id":"0","emotions":{"smile":8.181,"surprise":2,"negative":0.055,"attention":100}}},"74":{"person":{"time":2021,"person_id":"0","emotions":{"smile":8.005,"surprise":2,"negative":0.055,"attention":100}}},"75":{"person":{"time":2052,"person_id":"0","emotions":{"smile":7.868,"surprise":2,"negative":0.056,"attention":100}}},"76":{"person":{"time":2075,"person_id":"0","emotions":{"smile":7.686,"surprise":2,"negative":0.054,"attention":100}}},"77":{"person":{"time":2097,"person_id":"0","emotions":{"smile":7.605,"surprise":2,"negative":0.052,"attention":100}}},"78":{"person":{"time":2125,"person_id":"0","emotions":{"smile":7.526,"surprise":2,"negative":0.045,"attention":100}}},"79":{"person":{"time":2147,"person_id":"0","emotions":{"smile":7.655,"surprise":2,"negative":0.042,"attention":100}}},"80":{"person":{"time":2174,"person_id":"0","emotions":{"smile":7.645,"surprise":2,"negative":0.041,"attention":100}}},"81":{"person":{"time":2204,"person_id":"0","emotions":{"smile":7.666,"surprise":2,"negative":0.039,"attention":100}}},"82":{"person":{"time":2227,"person_id":"0","emotions":{"smile":7.739,"surprise":2,"negative":0.045,"attention":100}}},"83":{"person":{"time":2254,"person_id":"0","emotions":{"smile":7.924,"surprise":2,"negative":0.047,"attention":100}}},"84":{"person":{"time":2276,"person_id":"0","emotions":{"smile":7.698,"surprise":2,"negative":0.04,"attention":100}}},"85":{"person":{"time":2300,"person_id":"0","emotions":{"smile":7.542,"surprise":2,"negative":0.035,"attention":100}}},"86":{"person":{"time":2328,"person_id":"0","emotions":{"smile":7.308,"surprise":2,"negative":0.028,"attention":100}}},"87":{"person":{"time":2351,"person_id":"0","emotions":{"smile":7.58,"surprise":2,"negative":0.031,"attention":100}}},"88":{"person":{"time":2374,"person_id":"0","emotions":{"smile":8.154,"surprise":2,"negative":0.034,"attention":100}}},"89":{"person":{"time":2403,"person_id":"0","emotions":{"smile":8.025,"surprise":2,"negative":0.044,"attention":100}}},"90":{"person":{"time":2426,"person_id":"0","emotions":{"smile":8.271,"surprise":2,"negative":0.057,"attention":100}}},"91":{"person":{"time":2455,"person_id":"0","emotions":{"smile":7.879,"surprise":2,"negative":0.066,"attention":100}}},"92":{"person":{"time":2478,"person_id":"0","emotions":{"smile":7.468,"surprise":2,"negative":0.078,"attention":100}}},"93":{"person":{"time":2505,"person_id":"0","emotions":{"smile":6.97,"surprise":2,"negative":0.087,"attention":100}}},"94":{"person":{"time":2533,"person_id":"0","emotions":{"smile":6.651,"surprise":2,"negative":0.107,"attention":100}}},"95":{"person":{"time":2555,"person_id":"0","emotions":{"smile":5.634,"surprise":2,"negative":0.126,"attention":100}}},"96":{"person":{"time":2579,"person_id":"0","emotions":{"smile":3.252,"surprise":2,"negative":0.137,"attention":100}}},"97":{"person":{"time":2607,"person_id":"0","emotions":{"smile":0.843,"surprise":0.197,"negative":0.144,"attention":100}}},"98":{"person":{"time":2631,"person_id":"0","emotions":{"smile":0.017,"surprise":0.167,"negative":0.151,"attention":100}}},"99":{"person":{"time":2658,"person_id":"0","emotions":{"smile":0.039,"surprise":0.146,"negative":0.149,"attention":100}}},"100":{"person":{"time":2680,"person_id":"0","emotions":{"smile":0.055,"surprise":0.133,"negative":0.14,"attention":100}}},"101":{"person":{"time":2705,"person_id":"0","emotions":{"smile":0.068,"surprise":0.12,"negative":0.131,"attention":100}}},"102":{"person":{"time":2733,"person_id":"0","emotions":{"smile":0.08,"surprise":0.113,"negative":0.122,"attention":100}}},"103":{"person":{"time":2756,"person_id":"0","emotions":{"smile":0.092,"surprise":0.107,"negative":0.115,"attention":100}}},"104":{"person":{"time":2785,"person_id":"0","emotions":{"smile":0.102,"surprise":0.1,"negative":0.105,"attention":100}}},"105":{"person":{"time":2809,"person_id":"0","emotions":{"smile":0.107,"surprise":0.1,"negative":0.092,"attention":100}}},"106":{"person":{"time":2834,"person_id":"0","emotions":{"smile":0.099,"surprise":0.109,"negative":0.087,"attention":100}}},"107":{"person":{"time":2866,"person_id":"0","emotions":{"smile":0.096,"surprise":0.12,"negative":0.081,"attention":100}}},"108":{"person":{"time":2889,"person_id":"0","emotions":{"smile":0,"surprise":0,"negative":0,"attention":0}}},"109":{"person":{"time":2917,"person_id":"0","emotions":{"smile":0.098,"surprise":0.152,"negative":0.061,"attention":100}}},"110":{"person":{"time":2940,"person_id":"0","emotions":{"smile":0.096,"surprise":0.187,"negative":0.041,"attention":100}}},"111":{"person":{"time":2965,"person_id":"0","emotions":{"smile":0.104,"surprise":2,"negative":0.022,"attention":100}}},"112":{"person":{"time":2999,"person_id":"0","emotions":{"smile":0.11,"surprise":2,"negative":0.009,"attention":100}}},"113":{"person":{"time":3022,"person_id":"0","emotions":{"smile":0.117,"surprise":2,"negative":0.637,"attention":100}}},"114":{"person":{"time":3052,"person_id":"0","emotions":{"smile":0.122,"surprise":2,"negative":2.12,"attention":100}}},"115":{"person":{"time":3074,"person_id":"0","emotions":{"smile":0.128,"surprise":2,"negative":3.288,"attention":100}}},"116":{"person":{"time":3098,"person_id":"0","emotions":{"smile":0.133,"surprise":2,"negative":4.658,"attention":100}}},"117":{"person":{"time":3124,"person_id":"0","emotions":{"smile":0.138,"surprise":2,"negative":5.941,"attention":100}}},"118":{"person":{"time":3149,"person_id":"0","emotions":{"smile":0.144,"surprise":2,"negative":7.236,"attention":100}}},"119":{"person":{"time":3177,"person_id":"0","emotions":{"smile":0.143,"surprise":2,"negative":7.388,"attention":100}}},"120":{"person":{"time":3201,"person_id":"0","emotions":{"smile":0.145,"surprise":2,"negative":7.736,"attention":100}}},"121":{"person":{"time":3226,"person_id":"0","emotions":{"smile":0.147,"surprise":2,"negative":8.044,"attention":100}}},"122":{"person":{"time":3255,"person_id":"0","emotions":{"smile":0.149,"surprise":2,"negative":8.576,"attention":100}}},"123":{"person":{"time":3282,"person_id":"0","emotions":{"smile":0,"surprise":0,"negative":0,"attention":0}}},"124":{"person":{"time":3308,"person_id":"0","emotions":{"smile":0.148,"surprise":2,"negative":8.837,"attention":100}}},"125":{"person":{"time":3331,"person_id":"0","emotions":{"smile":0,"surprise":0,"negative":0,"attention":0}}},"126":{"person":{"time":3361,"person_id":"0","emotions":{"smile":0.149,"surprise":2,"negative":9.295,"attention":100}}},"127":{"person":{"time":3399,"person_id":"0","emotions":{"smile":0.15,"surprise":2,"negative":9.96,"attention":100}}},"128":{"person":{"time":3422,"person_id":"0","emotions":{"smile":0.15,"surprise":2,"negative":9.997,"attention":100}}},"129":{"person":{"time":3448,"person_id":"0","emotions":{"smile":0.151,"surprise":2,"negative":100,"attention":100}}},"130":{"person":{"time":3471,"person_id":"0","emotions":{"smile":0,"surprise":0,"negative":0,"attention":0}}},"131":{"person":{"time":3494,"person_id":"0","emotions":{"smile":0,"surprise":0,"negative":0,"attention":0}}},"132":{"person":{"time":3520,"person_id":"0","emotions":{"smile":0.149,"surprise":2,"negative":100,"attention":100}}},"133":{"person":{"time":3546,"person_id":"0","emotions":{"smile":0.148,"surprise":2,"negative":100,"attention":100}}},"134":{"person":{"time":3575,"person_id":"0","emotions":{"smile":0,"surprise":0,"negative":0,"attention":0}}},"135":{"person":{"time":3601,"person_id":"0","emotions":{"smile":0.148,"surprise":2,"negative":9.828,"attention":100}}},"136":{"person":{"time":3624,"person_id":"0","emotions":{"smile":0.147,"surprise":2,"negative":8.972,"attention":100}}},"137":{"person":{"time":3655,"person_id":"0","emotions":{"smile":0,"surprise":0,"negative":0,"attention":0}}},"138":{"person":{"time":3677,"person_id":"0","emotions":{"smile":0.146,"surprise":2,"negative":8.38,"attention":100}}},"139":{"person":{"time":3706,"person_id":"0","emotions":{"smile":0.148,"surprise":2,"negative":8.105,"attention":100}}},"140":{"person":{"time":3728,"person_id":"0","emotions":{"smile":0.148,"surprise":2,"negative":7.388,"attention":100}}},"141":{"person":{"time":3751,"person_id":"0","emotions":{"smile":0,"surprise":0,"negative":0,"attention":0}}},"142":{"person":{"time":3785,"person_id":"0","emotions":{"smile":0.149,"surprise":2,"negative":6.837,"attention":100}}},"143":{"person":{"time":3811,"person_id":"0","emotions":{"smile":0.15,"surprise":2,"negative":6.211,"attention":100}}},"144":{"person":{"time":3839,"person_id":"0","emotions":{"smile":0,"surprise":0,"negative":0,"attention":0}}},"145":{"person":{"time":3861,"person_id":"0","emotions":{"smile":0.15,"surprise":2,"negative":6.232,"attention":100}}},"146":{"person":{"time":3884,"person_id":"0","emotions":{"smile":0.151,"surprise":2,"negative":6.806,"attention":100}}},"147":{"person":{"time":3911,"person_id":"0","emotions":{"smile":0.15,"surprise":2,"negative":7.41,"attention":100}}},"148":{"person":{"time":3936,"person_id":"0","emotions":{"smile":0.152,"surprise":2,"negative":8.328,"attention":100}}},"149":{"person":{"time":3959,"person_id":"0","emotions":{"smile":0.153,"surprise":2,"negative":9.147,"attention":100}}},"150":{"person":{"time":3988,"person_id":"0","emotions":{"smile":0.154,"surprise":2,"negative":9.844,"attention":100}}},"151":{"person":{"time":4015,"person_id":"0","emotions":{"smile":0.154,"surprise":2,"negative":100,"attention":100}}},"152":{"person":{"time":4036,"person_id":"0","emotions":{"smile":0.156,"surprise":2,"negative":100,"attention":100}}},"153":{"person":{"time":4064,"person_id":"0","emotions":{"smile":0.156,"surprise":2,"negative":100,"attention":100}}},"154":{"person":{"time":4088,"person_id":"0","emotions":{"smile":0.157,"surprise":2,"negative":100,"attention":100}}},"155":{"person":{"time":4111,"person_id":"0","emotions":{"smile":0.158,"surprise":2,"negative":100,"attention":100}}},"156":{"person":{"time":4140,"person_id":"0","emotions":{"smile":0.162,"surprise":2,"negative":100,"attention":100}}},"157":{"person":{"time":4165,"person_id":"0","emotions":{"smile":0.166,"surprise":2,"negative":100,"attention":100}}},"158":{"person":{"time":4191,"person_id":"0","emotions":{"smile":0.168,"surprise":2,"negative":100,"attention":100}}},"159":{"person":{"time":4219,"person_id":"0","emotions":{"smile":0.17,"surprise":2,"negative":100,"attention":100}}},"160":{"person":{"time":4243,"person_id":"0","emotions":{"smile":0.172,"surprise":2,"negative":100,"attention":100}}},"161":{"person":{"time":4270,"person_id":"0","emotions":{"smile":0.175,"surprise":2,"negative":100,"attention":100}}},"162":{"person":{"time":4293,"person_id":"0","emotions":{"smile":0.178,"surprise":2,"negative":100,"attention":100}}},"163":{"person":{"time":4316,"person_id":"0","emotions":{"smile":0.18,"surprise":2,"negative":100,"attention":100}}},"164":{"person":{"time":4350,"person_id":"0","emotions":{"smile":0.17,"surprise":2,"negative":100,"attention":100}}},"165":{"person":{"time":4374,"person_id":"0","emotions":{"smile":0.158,"surprise":2,"negative":100,"attention":100}}},"166":{"person":{"time":4407,"person_id":"0","emotions":{"smile":0.143,"surprise":2,"negative":100,"attention":100}}},"167":{"person":{"time":4431,"person_id":"0","emotions":{"smile":0.117,"surprise":2,"negative":100,"attention":100}}},"168":{"person":{"time":4455,"person_id":"0","emotions":{"smile":0.095,"surprise":2,"negative":9.623,"attention":100}}},"169":{"person":{"time":4487,"person_id":"0","emotions":{"smile":0.069,"surprise":2,"negative":8.069,"attention":100}}},"170":{"person":{"time":4511,"person_id":"0","emotions":{"smile":0.048,"surprise":2,"negative":6.615,"attention":100}}},"171":{"person":{"time":4539,"person_id":"0","emotions":{"smile":0.026,"surprise":2,"negative":5.172,"attention":100}}},"172":{"person":{"time":4563,"person_id":"0","emotions":{"smile":0.461,"surprise":2,"negative":3.38,"attention":100}}},"173":{"person":{"time":4587,"person_id":"0","emotions":{"smile":3.307,"surprise":2,"negative":1.927,"attention":100}}},"174":{"person":{"time":4618,"person_id":"0","emotions":{"smile":4.848,"surprise":2,"negative":1.138,"attention":100}}},"175":{"person":{"time":4642,"person_id":"0","emotions":{"smile":6.273,"surprise":2,"negative":0.538,"attention":100}}},"176":{"person":{"time":4673,"person_id":"0","emotions":{"smile":7.655,"surprise":2,"negative":0,"attention":100}}},"177":{"person":{"time":4699,"person_id":"0","emotions":{"smile":7.81,"surprise":2,"negative":0.121,"attention":100}}},"178":{"person":{"time":4721,"person_id":"0","emotions":{"smile":8.245,"surprise":2,"negative":0.15,"attention":100}}},"179":{"person":{"time":4748,"person_id":"0","emotions":{"smile":8.401,"surprise":2,"negative":0.241,"attention":100}}},"180":{"person":{"time":4770,"person_id":"0","emotions":{"smile":8.534,"surprise":2,"negative":0.051,"attention":100}}},"181":{"person":{"time":4800,"person_id":"0","emotions":{"smile":8.803,"surprise":2,"negative":0.003,"attention":100}}},"182":{"person":{"time":4824,"person_id":"0","emotions":{"smile":8.441,"surprise":2,"negative":0.002,"attention":100}}},"183":{"person":{"time":4847,"person_id":"0","emotions":{"smile":8.177,"surprise":2,"negative":0.004,"attention":100}}},"184":{"person":{"time":4875,"person_id":"0","emotions":{"smile":7.836,"surprise":2,"negative":0.008,"attention":100}}},"185":{"person":{"time":4899,"person_id":"0","emotions":{"smile":7.505,"surprise":2,"negative":0.011,"attention":100}}},"186":{"person":{"time":4927,"person_id":"0","emotions":{"smile":7.103,"surprise":2,"negative":0.013,"attention":100}}},"187":{"person":{"time":4951,"person_id":"0","emotions":{"smile":6.936,"surprise":2,"negative":0.014,"attention":100}}},"188":{"person":{"time":4974,"person_id":"0","emotions":{"smile":6.892,"surprise":2,"negative":0.018,"attention":100}}},"189":{"person":{"time":5003,"person_id":"0","emotions":{"smile":6.642,"surprise":2,"negative":0.02,"attention":100}}},"190":{"person":{"time":5025,"person_id":"0","emotions":{"smile":6.905,"surprise":2,"negative":0.022,"attention":100}}},"191":{"person":{"time":5053,"person_id":"0","emotions":{"smile":7.182,"surprise":2,"negative":0.025,"attention":100}}},"192":{"person":{"time":5084,"person_id":"0","emotions":{"smile":6.892,"surprise":2,"negative":0.028,"attention":100}}},"193":{"person":{"time":5111,"person_id":"0","emotions":{"smile":6.796,"surprise":2,"negative":0.033,"attention":100}}},"194":{"person":{"time":5138,"person_id":"0","emotions":{"smile":6.722,"surprise":2,"negative":0.037,"attention":100}}},"195":{"person":{"time":5163,"person_id":"0","emotions":{"smile":6.705,"surprise":2,"negative":0.041,"attention":100}}},"196":{"person":{"time":5191,"person_id":"0","emotions":{"smile":6.749,"surprise":2,"negative":0.046,"attention":100}}},"197":{"person":{"time":5221,"person_id":"0","emotions":{"smile":6.623,"surprise":2,"negative":0.051,"attention":100}}},"198":{"person":{"time":5243,"person_id":"0","emotions":{"smile":6.479,"surprise":2,"negative":0.055,"attention":100}}},"199":{"person":{"time":5271,"person_id":"0","emotions":{"smile":6.537,"surprise":2,"negative":0.061,"attention":100}}},"200":{"person":{"time":5295,"person_id":"0","emotions":{"smile":6.397,"surprise":2,"negative":0.065,"attention":100}}},"201":{"person":{"time":5322,"person_id":"0","emotions":{"smile":6.194,"surprise":2,"negative":0.066,"attention":100}}},"202":{"person":{"time":5348,"person_id":"0","emotions":{"smile":6.384,"surprise":2,"negative":0.069,"attention":100}}},"203":{"person":{"time":5376,"person_id":"0","emotions":{"smile":6.278,"surprise":2,"negative":0.07,"attention":100}}},"204":{"person":{"time":5405,"person_id":"0","emotions":{"smile":6.543,"surprise":2,"negative":0.071,"attention":100}}},"205":{"person":{"time":5429,"person_id":"0","emotions":{"smile":6.679,"surprise":2,"negative":0.069,"attention":100}}},"206":{"person":{"time":5457,"person_id":"0","emotions":{"smile":7.042,"surprise":2,"negative":0.067,"attention":100}}},"207":{"person":{"time":5487,"person_id":"0","emotions":{"smile":6.736,"surprise":2,"negative":0.069,"attention":100}}},"208":{"person":{"time":5510,"person_id":"0","emotions":{"smile":6.556,"surprise":2,"negative":0.07,"attention":100}}},"209":{"person":{"time":5539,"person_id":"0","emotions":{"smile":5.767,"surprise":2,"negative":0.067,"attention":100}}},"210":{"person":{"time":5565,"person_id":"0","emotions":{"smile":5.27,"surprise":2,"negative":0.068,"attention":100}}},"211":{"person":{"time":5599,"person_id":"0","emotions":{"smile":4.467,"surprise":2,"negative":0.066,"attention":100}}},"212":{"person":{"time":5625,"person_id":"0","emotions":{"smile":3.721,"surprise":0.191,"negative":0.064,"attention":100}}},"213":{"person":{"time":5654,"person_id":"0","emotions":{"smile":3.081,"surprise":0.151,"negative":0.06,"attention":100}}},"214":{"person":{"time":5681,"person_id":"0","emotions":{"smile":2.053,"surprise":0.101,"negative":0.055,"attention":100}}},"215":{"person":{"time":5708,"person_id":"0","emotions":{"smile":1.213,"surprise":0.058,"negative":0.055,"attention":100}}},"216":{"person":{"time":5737,"person_id":"0","emotions":{"smile":0.01,"surprise":0.014,"negative":0.051,"attention":100}}},"217":{"person":{"time":5760,"person_id":"0","emotions":{"smile":0.026,"surprise":1.452,"negative":0.048,"attention":100}}},"218":{"person":{"time":5790,"person_id":"0","emotions":{"smile":0.043,"surprise":4.477,"negative":0.045,"attention":100}}},"219":{"person":{"time":5812,"person_id":"0","emotions":{"smile":0.055,"surprise":6.64,"negative":0.045,"attention":100}}},"220":{"person":{"time":5837,"person_id":"0","emotions":{"smile":0.069,"surprise":8.408,"negative":0.041,"attention":100}}},"221":{"person":{"time":5866,"person_id":"0","emotions":{"smile":0.081,"surprise":9.001,"negative":0.039,"attention":100}}},"222":{"person":{"time":5888,"person_id":"0","emotions":{"smile":0.093,"surprise":9.752,"negative":0.038,"attention":100}}},"223":{"person":{"time":5915,"person_id":"0","emotions":{"smile":0.104,"surprise":100,"negative":0.038,"attention":100}}},"224":{"person":{"time":5939,"person_id":"0","emotions":{"smile":0.115,"surprise":100,"negative":0.038,"attention":100}}},"225":{"person":{"time":5963,"person_id":"0","emotions":{"smile":0.126,"surprise":100,"negative":0.038,"attention":100}}},"226":{"person":{"time":5992,"person_id":"0","emotions":{"smile":0.128,"surprise":100,"negative":0.04,"attention":100}}},"227":{"person":{"time":6014,"person_id":"0","emotions":{"smile":0.125,"surprise":100,"negative":0.039,"attention":100}}},"228":{"person":{"time":6041,"person_id":"0","emotions":{"smile":0.127,"surprise":100,"negative":0.031,"attention":100}}},"229":{"person":{"time":6065,"person_id":"0","emotions":{"smile":0.131,"surprise":100,"negative":0.026,"attention":100}}},"230":{"person":{"time":6089,"person_id":"0","emotions":{"smile":0.134,"surprise":100,"negative":0.021,"attention":100}}},"231":{"person":{"time":6116,"person_id":"0","emotions":{"smile":0.136,"surprise":100,"negative":0.015,"attention":100}}},"232":{"person":{"time":6139,"person_id":"0","emotions":{"smile":0.141,"surprise":100,"negative":0.007,"attention":100}}},"233":{"person":{"time":6161,"person_id":"0","emotions":{"smile":0.146,"surprise":100,"negative":0.001,"attention":100}}},"234":{"person":{"time":6190,"person_id":"0","emotions":{"smile":0.148,"surprise":100,"negative":0.457,"attention":100}}},"235":{"person":{"time":6214,"person_id":"0","emotions":{"smile":0.152,"surprise":100,"negative":1.197,"attention":100}}},"236":{"person":{"time":6237,"person_id":"0","emotions":{"smile":0.154,"surprise":100,"negative":1.804,"attention":100}}},"237":{"person":{"time":6265,"person_id":"0","emotions":{"smile":0.16,"surprise":100,"negative":2.661,"attention":100}}},"238":{"person":{"time":6288,"person_id":"0","emotions":{"smile":0.162,"surprise":100,"negative":2.591,"attention":100}}},"239":{"person":{"time":6315,"person_id":"0","emotions":{"smile":0.163,"surprise":100,"negative":2.87,"attention":100}}},"240":{"person":{"time":6338,"person_id":"0","emotions":{"smile":0.164,"surprise":100,"negative":3.384,"attention":100}}},"241":{"person":{"time":6364,"person_id":"0","emotions":{"smile":0.165,"surprise":100,"negative":3.988,"attention":100}}},"242":{"person":{"time":6392,"person_id":"0","emotions":{"smile":0.164,"surprise":100,"negative":4.096,"attention":100}}},"243":{"person":{"time":6415,"person_id":"0","emotions":{"smile":0.166,"surprise":100,"negative":4.4,"attention":100}}},"244":{"person":{"time":6442,"person_id":"0","emotions":{"smile":0.169,"surprise":100,"negative":4.927,"attention":100}}},"245":{"person":{"time":6467,"person_id":"0","emotions":{"smile":0.169,"surprise":100,"negative":4.933,"attention":100}}},"246":{"person":{"time":6490,"person_id":"0","emotions":{"smile":0.17,"surprise":100,"negative":5.297,"attention":100}}},"247":{"person":{"time":6517,"person_id":"0","emotions":{"smile":0.169,"surprise":100,"negative":5.464,"attention":100}}},"248":{"person":{"time":6540,"person_id":"0","emotions":{"smile":0.169,"surprise":100,"negative":5.653,"attention":100}}},"249":{"person":{"time":6563,"person_id":"0","emotions":{"smile":0.168,"surprise":100,"negative":5.826,"attention":100}}},"250":{"person":{"time":6595,"person_id":"0","emotions":{"smile":0.168,"surprise":100,"negative":5.959,"attention":100}}},"251":{"person":{"time":6617,"person_id":"0","emotions":{"smile":0.166,"surprise":100,"negative":5.692,"attention":100}}},"252":{"person":{"time":6641,"person_id":"0","emotions":{"smile":0.171,"surprise":100,"negative":6.053,"attention":100}}},"253":{"person":{"time":6664,"person_id":"0","emotions":{"smile":0.172,"surprise":100,"negative":6.061,"attention":100}}},"254":{"person":{"time":6691,"person_id":"0","emotions":{"smile":0.175,"surprise":100,"negative":5.877,"attention":100}}},"255":{"person":{"time":6717,"person_id":"0","emotions":{"smile":0.174,"surprise":100,"negative":6.005,"attention":100}}},"256":{"person":{"time":6744,"person_id":"0","emotions":{"smile":0.175,"surprise":100,"negative":5.95,"attention":100}}},"257":{"person":{"time":6767,"person_id":"0","emotions":{"smile":0.178,"surprise":100,"negative":5.766,"attention":100}}},"258":{"person":{"time":6792,"person_id":"0","emotions":{"smile":0.181,"surprise":100,"negative":6.024,"attention":100}}},"259":{"person":{"time":6820,"person_id":"0","emotions":{"smile":0.185,"surprise":100,"negative":5.991,"attention":100}}},"260":{"person":{"time":6845,"person_id":"0","emotions":{"smile":0.187,"surprise":100,"negative":5.394,"attention":100}}},"261":{"person":{"time":6872,"person_id":"0","emotions":{"smile":0.191,"surprise":100,"negative":5.456,"attention":100}}},"262":{"person":{"time":6898,"person_id":"0","emotions":{"smile":0.189,"surprise":100,"negative":5.021,"attention":100}}},"263":{"person":{"time":6922,"person_id":"0","emotions":{"smile":0.188,"surprise":100,"negative":4.844,"attention":100}}},"264":{"person":{"time":6949,"person_id":"0","emotions":{"smile":0.186,"surprise":100,"negative":4.934,"attention":100}}},"265":{"person":{"time":6972,"person_id":"0","emotions":{"smile":0.186,"surprise":100,"negative":4.602,"attention":100}}},"266":{"person":{"time":6995,"person_id":"0","emotions":{"smile":0.185,"surprise":100,"negative":4.505,"attention":100}}},"267":{"person":{"time":7022,"person_id":"0","emotions":{"smile":0.182,"surprise":100,"negative":4.451,"attention":100}}},"268":{"person":{"time":7045,"person_id":"0","emotions":{"smile":0.178,"surprise":100,"negative":4.261,"attention":100}}},"269":{"person":{"time":7071,"person_id":"0","emotions":{"smile":0.176,"surprise":100,"negative":4.204,"attention":100}}},"270":{"person":{"time":7097,"person_id":"0","emotions":{"smile":0.172,"surprise":100,"negative":4.225,"attention":100}}},"271":{"person":{"time":7125,"person_id":"0","emotions":{"smile":0.168,"surprise":100,"negative":3.995,"attention":100}}},"272":{"person":{"time":7153,"person_id":"0","emotions":{"smile":0.166,"surprise":100,"negative":3.995,"attention":100}}},"273":{"person":{"time":7175,"person_id":"0","emotions":{"smile":0.162,"surprise":100,"negative":4.125,"attention":100}}},"274":{"person":{"time":7204,"person_id":"0","emotions":{"smile":0.16,"surprise":100,"negative":3.89,"attention":100}}},"275":{"person":{"time":7227,"person_id":"0","emotions":{"smile":0.16,"surprise":100,"negative":3.944,"attention":100}}},"276":{"person":{"time":7256,"person_id":"0","emotions":{"smile":0.162,"surprise":100,"negative":4.108,"attention":100}}},"277":{"person":{"time":7286,"person_id":"0","emotions":{"smile":0.163,"surprise":100,"negative":4.026,"attention":100}}},"278":{"person":{"time":7309,"person_id":"0","emotions":{"smile":0.162,"surprise":100,"negative":3.698,"attention":100}}},"279":{"person":{"time":7338,"person_id":"0","emotions":{"smile":0.159,"surprise":100,"negative":3.481,"attention":100}}},"280":{"person":{"time":7361,"person_id":"0","emotions":{"smile":0.159,"surprise":100,"negative":3.203,"attention":100}}},"281":{"person":{"time":7387,"person_id":"0","emotions":{"smile":0.16,"surprise":9.935,"negative":2.976,"attention":100}}},"282":{"person":{"time":7417,"person_id":"0","emotions":{"smile":0.159,"surprise":9.634,"negative":2.696,"attention":100}}},"283":{"person":{"time":7440,"person_id":"0","emotions":{"smile":0.16,"surprise":8.627,"negative":2.585,"attention":100}}},"284":{"person":{"time":7462,"person_id":"0","emotions":{"smile":0.161,"surprise":8.315,"negative":2.531,"attention":100}}},"285":{"person":{"time":7489,"person_id":"0","emotions":{"smile":0.162,"surprise":7.379,"negative":2.835,"attention":100}}},"286":{"person":{"time":7512,"person_id":"0","emotions":{"smile":0.162,"surprise":6.805,"negative":2.574,"attention":100}}},"287":{"person":{"time":7539,"person_id":"0","emotions":{"smile":0.161,"surprise":5.971,"negative":2.839,"attention":100}}},"288":{"person":{"time":7563,"person_id":"0","emotions":{"smile":0.164,"surprise":4.525,"negative":2.953,"attention":100}}},"289":{"person":{"time":7588,"person_id":"0","emotions":{"smile":0.168,"surprise":2.976,"negative":3.259,"attention":100}}},"290":{"person":{"time":7617,"person_id":"0","emotions":{"smile":0.168,"surprise":0.864,"negative":3.978,"attention":100}}},"291":{"person":{"time":7640,"person_id":"0","emotions":{"smile":0.168,"surprise":0.012,"negative":4.297,"attention":100}}},"292":{"person":{"time":7669,"person_id":"0","emotions":{"smile":0.17,"surprise":0.034,"negative":4.522,"attention":100}}},"293":{"person":{"time":7692,"person_id":"0","emotions":{"smile":0.17,"surprise":0.054,"negative":4.47,"attention":100}}},"294":{"person":{"time":7717,"person_id":"0","emotions":{"smile":0.169,"surprise":0.078,"negative":4.432,"attention":100}}},"295":{"person":{"time":7749,"person_id":"0","emotions":{"smile":0.165,"surprise":0.097,"negative":3.78,"attention":100}}},"296":{"person":{"time":7775,"person_id":"0","emotions":{"smile":0.159,"surprise":0.112,"negative":3.089,"attention":100}}},"297":{"person":{"time":7805,"person_id":"0","emotions":{"smile":0.156,"surprise":0.124,"negative":2.113,"attention":100}}}}'
	
	var highchartsData = [];
	var categories = [];
	var seriesData = [];
	var dataSmile = [];
	var dataSurprise = [];
	var dataNegative = [];
	var dataAttention = [];
	var obj = eval('(' + data + ')');
    for(var i in obj) {
    	categories.push(obj[i].person.time);
    	dataSmile.push(obj[i].person.emotions.smile);
        dataNegative.push(obj[i].person.emotions.negative);
        dataSurprise.push(obj[i].person.emotions.surprise);
        dataAttention.push(obj[i].person.emotions.attention);
    };

    datasets = [{
        name: 'Smile:',
        data: dataSmile},
    {
        name: 'Surprise:',
        data: dataSurprise},
    {
        name: 'Negative:',
        data: dataNegative},
    {
        name: 'Attention:',
        data: dataAttention}];

    var charts = [],
    	$containers = $('#highcharts-containers div'),
    	colors = self.config.colors
	    	
    $.each(datasets, function(i, dataset) {
	    charts.push(new Highcharts.Chart({
	        chart: {
	            renderTo: $containers[i],
	            type: 'area',
	            backgroundColor: self.config.bkgColor
	        },

	        colors: colors[i],

	        title: {
	            text: dataset.name,
	            style: {"color": "#ffffff"}
	        },

	        credits: {
	            enabled: false
	        },

	        xAxis: {
	            categories: categories,
	            labels: {
	                enabled: i === 0
	            }
	        },

	        yAxis: {
	            allowDecimals: false,
	            title: {
	                text: null
	            }
	        },


	        legend: {
	            enabled: false
	        },

	        series: [dataset],


	    }));
	});
}

	