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
                  this.Invoice,this.ContractDigitization, this.Survey,this.KYC,
                  this.ENESA, this.SSI_Extraction,this.VendorOn_Boarding
  ]
  public industry = ""
  public function = ""
  public industries = ['BFSI', 'Telecom', 'Retail', 'Information Technology', 'Healthcare']
  public functions = ['Operations', 'Marketing & Sales', 'Finance', 'Human Resources', 'Information technology', 'Supply Chain','Legal']

public Capabilities = [
  "Data Digitization",
  "Natural Language Processing",
  "End User Computing tool management",
  "Productivity Enhancement ",
  "Digital Operations",
]


public Usecases = [
  "Contract Digitization",
  "Digital KYC ",
  "Accounts receivable/payable",
  "Email Processing"
]


public AI_Assets = [
  "Table Extraction",
  "Clause Extraction",
  "Entity Extraction",
  "PAN Data Extraction",
  "Aadhaar Data Extraction",
  "Passport Data Extraction",
  "Fingerprint matching",
  "Facial Recognition",
  "Invoice digitization",
  "Purchase order automation",
  "Intent and Entities",
  "Auto reply feature",
  "BPM integration",
]


  constructor() {
    
  }
  ngOnInit() {
  }


}
