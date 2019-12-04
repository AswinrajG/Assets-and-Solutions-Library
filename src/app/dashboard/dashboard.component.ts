import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  public images = ["Group2_1.png","Group2_2.png","Group2_3.png","Group2_4.png","Group2_5.png",
                    "Group2_6.png","Group2_7.png","Group2_8.png","Group2_9.png","Group2_10.png"
                  ]

  public titles = ["KYC document digitization","CONTRACT DIGITIZATION",
                    "INVOICE/PURCHASE ORDER DIGITIZATION","STANDARD SETTLEMENT INSTRUCTION (SSI) DIGITIZATION",
                    "EMAIL INTERPRETATION, RESPONSE AND ROUTING","CONNECTED SCM (SUPPLY CHAIN MANAGEMENT) ",
                    "EY OPS CHAIN "," BLOCKCHAIN LOYALTY SOLUTION PLATFORM",
                    "ASSET TRACKING "
                  ]
  public urls = ['kycdigit','enesa','ssl','asset/Vendor On-Boarding and Helpdesk','asset/KPI Dashboard','employeeHelpdesk','','asset/Invoice & PO Processing','asset/Contract Digitization','']

  public KYC = `An advanced image processing technology that can extract data from scanned image of proof of identity (PoI) documents such as Passport, National ID cards, PAN card etc. with minimal training data required which otherwise is a manually intensive task.  `;

  public CONTRACT =`EY’s digital contract module uses advance AI algorithms to extract most commonly used information such as clauses, tabular information and key entities such as dates and names.`;

  public INVOICEorPURCHASE =`Accounts payable/receivable departments of different organisations receive purchase orders and invoices from multiple vendors. Relevant data is extracted from these documents and fed into the ERP systems. EY has developed a customized solution involving digitization tools and RPA to process these documents and enter the details in the ERP systems thus reducing manual effort, processing time, error and increasing efficiency.`;

  public STANDARD_SETTLEMENT  =`Across organizations there are various documents containing tabular data in different unstructured formats coming from different sources which require human intervention for standardization and further processing. EY has built a customisable solution which can be leveraged to extract tabular information efficiently from different document formats automatically henceforth reducing processing time and saving manual effort.`;

  public EMAIL_INTERPRETATION  =`An AI based solution for automated email classification, response, routing, and straight through processing of customer queries received by service desk in organizations`;

  public CONNECTED_SCM  =`EY opschain based blockchain solution for tracking supply chain transactions between buyer and seller through enhanced visibility and near real time tracking of product movement.`;

  public OPS_CHAIN  =`EY Ops Chain is a standardized framework to improve trust and efficiency in business processes and workflows in a private, permissioned blockchain compatible with Ethereum.`;

  public  LOYALTY_SOLUTION =`EY Blockchain Loyalty Solution platform enables seamless loyalty points management among stakeholders, secure real-time transactions with increased accuracy, intelligent insights and connected ecosystem with better customer experience`;

  public ASSET_TRACKING  =`EY opschain shared blockchain-powered site asset repository that is accessible to all stakeholders (Towerco’s and Opco’s) on desktop and mobile interfaces. test test tsgtdgsbsmndsmnldv vjkwbvbkhvw uw kjwbbubu wb wb bwu`;
  public data = [this.KYC,this.CONTRACT, this.INVOICEorPURCHASE,this.STANDARD_SETTLEMENT,
                  this.EMAIL_INTERPRETATION,this.CONNECTED_SCM,this.OPS_CHAIN,
                  this.LOYALTY_SOLUTION,this.ASSET_TRACKING
  ]
  public industry = ""
  public sector = ""


  public industries	= ['Financial Services', 'Technology, Media & Entertainment and Telecom', 'Advanced Manufacturing & Mobility', 'Consumer', 'Energy']					
  public sectors	 =  ['Consumer Banking',	'General Insurance', 'Individual life insurance',	'Mortgage Finance',	'WAM-Pro',	'Telecom',
                'Media & Entertainment',	'Automotive Finance',	'Automotive OEM',	'Consumer Products',	'Retail',	'Tobacco',	
                'Chemicals',	'Mining & Metals',	'Oil & Gas',	'Oil Field Services',	'Power & Utilities',	'Water Utilities']

  public r1data: []
  public r2data: []
  public r3data: []

  public r1images: []
  public r2images: []
  public r3images: []

  public r1titles: []
  public r2titles: []
  public r3titles: []

  public r1urls: []
  public r2urls: []
  public r3urls: []



  constructor() {
    this.arraySpliter(this.data, this.images,this.titles,this.urls)
    
  }
  ngOnInit() {
  }

  arraySpliter(arr,arr1,arr2,arr3 ) {    
  this.r1data = []
  this.r2data = []
  this.r3data = []

  this.r1images = []
  this.r2images = []
  this.r3images = []

  this.r1titles = []
  this.r2titles = []
  this.r3titles = []

  this.r1urls = []
  this.r2urls = []
  this.r3urls = []

    if(arr.length > 7){
      this.r1data = arr.slice(0,4)
      this.r2data = arr.slice(4,8)
      this.r3data = arr.slice(8,arr.length)
      
      this.r1images = arr1.slice(0,4)
      this.r2images = arr1.slice(4,8)
      this.r3images = arr1.slice(8,arr.length)

      this.r1titles = arr2.slice(0,4)
      this.r2titles = arr2.slice(4,8)
      this.r3titles = arr2.slice(8,arr.length)

      this.r1urls = arr3.slice(0,4)
      this.r2urls = arr3.slice(4,8)
      this.r3urls = arr3.slice(8,arr.length)

    } else if( arr.length == 7 || (arr.length < 7 && arr.length>=4) ) {
      this.r1data = arr.slice(0,4)
      this.r2data = arr.slice(4,arr.length)
      
      this.r1images = arr1.slice(0,4)
      this.r2images = arr1.slice(4,arr.length)

      this.r1titles = arr2.slice(0,4)
      this.r2titles = arr2.slice(4,arr.length)

      this.r1urls = arr3.slice(0,4)
      this.r2urls = arr3.slice(4,arr.length)

    } else if( arr.length == 3 || (arr.length < 3 && arr.length>=0) ) {
      this.r1data = arr.slice(0,arr.length)
      
      this.r1images = arr1.slice(0,arr.length)

      this.r1titles = arr2.slice(0,arr.length)

      this.r1urls = arr3.slice(0,arr.length)
    }

  }

  async elementRemover(data,images,titles,urls,index){
    data[index] = undefined;
    images[index] = undefined;
    titles[index] = undefined;
    urls[index] = undefined;
  }

  group1ClickInfo: any;
  group2ClickInfo: any;
  group3ClickInfo: any;
  group4ClickInfo: any;

  async getClickInfo(Value) {
    this.industry = ""
    this.sector = ""
    this.group1ClickInfo = Value.Group1;
    this.group2ClickInfo = Value.Group2
    this.group3ClickInfo = Value.Group3;
    this.group4ClickInfo = Value.Group4
    let visibleData = [...this.data]
    let visibleImages = [...this.images]
    let visibleTitles = [...this.titles]
    let visibleUrls = [...this.urls]
    switch(this.group1ClickInfo ) {
      case 1: {
        this.industry = this.industries[0];
        break;
      }
      case 2: {
        this.industry = this.industries[1];
        break;
      }
      case 3: {
        this.industry = this.industries[2];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,0);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        break;
        
      }
      case 4: {
        this.industry = this.industries[3];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,0);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        break;
      }
      case 5: {
        this.industry = this.industries[4];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,0);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);

        break; 
      }
    }

    switch(this.group2ClickInfo ) {
      case 1: {
        this.sector = this.sectors[0];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,7);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,8);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,9);
        break;
      }
      case 2: {
        this.sector = this.sectors[1];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,3);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,7);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,8);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,9);
        break; 
      }
      case 3: {
        this.sector = this.sectors[2];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,0);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,1);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,9);
        break; 
      }
      case 4: {
        this.sector = this.sectors[3];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,0);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,1);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,7);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,8);
        break; 
      }
      case 5: {
        this.sector = this.sectors[4];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,0);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,1);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,3);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,7);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,8);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,9);
        break; 
        
      }
      case 6: {
        this.sector = this.sectors[5];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,0);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,1);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,7);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,8);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,9);
        break; 
      }
      case 7: {
        this.sector = this.sectors[6];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,0);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,1);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,7);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,8);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,9);
        break; 
      }
    }

    switch(this.group3ClickInfo ) {
      
        
    }


    switch(this.group1ClickInfo ) {
      
    }
    if(this.industry !="" && this.sector != "" )
      this.industry+=" - "
    visibleData = visibleData.filter(function (el) {
      return el != undefined;
    });
    visibleImages = visibleImages.filter(function (el) {
      return el != undefined;
    });
    visibleTitles = visibleTitles.filter(function (el) {
      return el != undefined;
    });
    visibleUrls = visibleUrls.filter(function (el) {
      return el != undefined;
    });


    this.arraySpliter(visibleData, visibleImages,visibleTitles,visibleUrls)

  }

}
