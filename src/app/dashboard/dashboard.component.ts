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

  public titles = ["KYC (Pol & Biometrics)","ENESA",
                    "SSI Extraction","Vendor On-Boarding and Helpdesk",
                    "KPI Dashboard","Employee Helpdesk",
                    "Customized Alert","Invoice & PO Processing",
                    "Contract Digitization","Employee Satisfaction Survey"
                  ]
  public urls = ['asset/KYC (Pol & Biometrics)','enesa','ssl','asset/Vendor On-Boarding and Helpdesk','asset/KPI Dashboard','employeeHelpdesk','','asset/Invoice & PO Processing','asset/Contract Digitization','']

  public KYC = `EY’s KYC digitization solution reliably extracts information from scanned images 
  of proof of identity (PoI) documents such as passport, PAN, national ID cards etc. with minimal 
  training effort. `;

  public ENESA =`ENESA is a unique solution build by EY which uses Natural Language Processing (NLP) to interpret 
  the query, which is then automatically classified, tagged and allocated in a BPM/Ticketing system. 
  ENESA sends acknowledgement, filters spam and auto resolves cases that doesn’t require human judgement.`;

  public SSI_Extraction =`EY has built a customisable solution which can be 
  leveraged to extract tabular information efficiently from different document formats automatically 
  henceforth reducing processing time and saving manual effort.`;

  public VendorOn_Boarding  =`EY’s vendor onboarding and helpdesk bot helps the vendors receive quick support and immediate 
  responses to their queries during onboarding and afterwards directly on Kaizala.`;

  public KPI_Dashboard  =`EY’s KPI dashboarding solution provides instant access to the team to their KPIs and dashboards on the Kaizala app. Management 
  dashboards may also be viewed directly on the app, restricting user access as per requirement.`;

  public Employee_Helpdesk  =`Quick answers for all employee queries on the go – using EY’s employee 
  helpdesk solution, the employees get immediate responses to their queries on Kaizala app.`;

  public Customized_Alert  =`Have periodic updates that need to be sent out to your team? Using EY’s 
  customized alert bot, such updates can be automatically sent to the employees on Kaizala.`;

  public Invoice =`EY has developed a customized solution involving digitization tools and RPA to 
  process these documents and enter the details in the ERP systems thus reducing manual effort, processing 
  time, error and increasing efficiency.`;

  public ContractDigitization  =`EY has build this solution which 
  helps to extract most commonly used information from the contracts automatically thereby significantly reducing 
  the cost and improving efficiency.`;

  public Survey =`EY’s employee satisfaction survey solution on Kaizala provides a single platform to roll out the 
  survey, engage employees, receive their responses, and provide relevant insights over it using any BI tool. `;
  public data = [this.KYC,this.ENESA, this.SSI_Extraction,this.VendorOn_Boarding,
                  this.KPI_Dashboard,this.Employee_Helpdesk,this.Customized_Alert,
                  this.Invoice,this.ContractDigitization, this.Survey
  ]
  public industry = ""
  public function = ""
  public industries = ['BFSI', 'Telecom', 'Retail', 'Information Technology', 'Healthcare']
  public functions = ['Operations', 'Marketing & Sales', 'Finance', 'Human Resources', 'Information technology', 'Supply Chain','Legal']
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
      this.r3data = arr.slice(0,arr.length)// @Dibin : change this 0 to 8 for previous version
      
      this.r1images = arr1.slice(0,4)
      this.r2images = arr1.slice(4,8)
      this.r3images = arr1.slice(0,arr.length)

      this.r1titles = arr2.slice(0,4)
      this.r2titles = arr2.slice(4,8)
      this.r3titles = arr2.slice(0,arr.length)

      this.r1urls = arr3.slice(0,4)
      this.r2urls = arr3.slice(4,8)
      this.r3urls = arr3.slice(0,arr.length)

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

  async getClickInfo(Value) {
    this.industry = ""
    this.function = ""
    this.group1ClickInfo = Value.Group1;
    this.group2ClickInfo = Value.Group2
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
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
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
        this.function = this.functions[0];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,7);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,8);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,9);
        break;
      }
      case 2: {
        this.function = this.functions[1];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,3);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,7);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,8);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,9);
        break; 
      }
      case 3: {
        this.function = this.functions[2];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,0);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,1);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,9);
        break; 
      }
      case 4: {
        this.function = this.functions[3];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,0);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,1);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,7);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,8);
        break; 
      }
      case 5: {
        this.function = this.functions[4];
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
        this.function = this.functions[5];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,0);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,1);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,7);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,8);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,9);
        break; 
      }
      case 7: {
        this.function = this.functions[6];
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,0);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,1);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,2);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,7);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,8);
        await this.elementRemover(visibleData,visibleImages,visibleTitles,visibleUrls,9);
        break; 
      }
    }
    if(this.industry !="" && this.function != "" )
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
