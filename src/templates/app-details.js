import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
// import '../styles/global.css'
import '../styles/app-de.css'
import '../templates/app-details.module.css'

import { Helmet } from "react-helmet"

export default function AppDetails({ data }) {
    // const { Company_Name, NPS, About, Source, Headquater, Industry, Type, Business_Type, Employee_Size_, Founded } = data.allNewdataXlsxSheet1.edges[0].node
    const app = data.allStrapiApp.edges[0].node;
    console.log(app);

    // var converter = new showdown.Converter(),
    //     text      = '# hello, markdown!',
    //     html      = converter.makeHtml(text);

    return (
        <Layout>
            <Helmet>
                <link href="https://use.typekit.net/iuh6nhh.css" rel="stylesheet" type="text/css" />
        {/* <link href="https://use.typekit.net/opo8nmt.css" rel="stylesheet" type="text/css" /> */}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css" rel="stylesheet" type="text/css" />
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
                <link href="https://surveysparrow.com/apps/assets/css/ss-integration.min.css" rel="stylesheet" type="text/css" />
                {/* <script type="text/javascript" href="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.0/showdown.min.js"></script> */}
{/* <script type="text/javascript" src="https://surveysparrow.com/apps/assets/css/ss-integration.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> */}
            </Helmet>

            <section class="ss-integration-inner--banner">
                <div class="container custom-container">
                    <div class="item-full d-flex">
                        <div class="item-left">
                            <div class="ss-integration-inner--logo">
                            <img src={app.logo.localFile.url}  class="ss-integrations-company-logo" alt="" title="" loading="lazy" />
                            </div>
                            <a class="ss-btn ss-btn--primary" href="https://app.surveysparrow.com/login?ut_source1=apps&amp;ut_source2=hubspot-survey-integration&amp;ut_source3=side-menu&amp;cta_text=sign-in-to-connect">Sign In To Connect</a>
                            <a class="ss-btn ss-btn--secondary" href="https://community.surveysparrow.com/post/5ded5c06f25f1e315a76729f" target="_blank">App
                                Documentation</a>
                            <a class="ss-btn ss-btn--secondary" href="https://legal.hubspot.com/privacy-policy" target="_blank">Privacy Policy</a>
                            <a class="ss-btn ss-btn--secondary" href="https://legal.hubspot.com/terms-of-service" target="_blank">Terms of Service</a>
                            <a class="ss-btn ss-btn--secondary" href="https://help.hubspot.com/" target="_blank">Support</a>
                            <div class="ss-integration-category">
                                <a class="ss-btn ss-btn--category" target="_blank">CRM</a>
                            </div>
                        </div>
                        <div class="item-right">
                            <div class="ss-integration--breadcrumb">
                                <span class="ss-breadcrumb-text">
                                    <a href="https://surveysparrow.com/apps/">Apps
                                    </a> <i class="fa fa-angle-right" aria-hidden="true">
                                    </i> {app.name}
                                </span>
                            </div>
                            <h1 class="ss-integration--title">{app.name}</h1>
                            <div class="ss-integration-inner--tabs">
                                <ul class="nav nav-tabs">
                                    <li class="active">
                                        <a id="about-tab" data-toggle="tab" href="#about" aria-selected="true" aria-expanded="true">About</a>
                                    </li>
                                    <li class="">
                                        <a id="setup-tab" data-toggle="tab" href="#setup" aria-selected="false" aria-expanded="false">Setup</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane fade active in" id="about">
                                        {/* {app.content} */}
                                        <p>{app.imagesection.toppara}</p>
                                        <div class="integration--usecase">
                                            <h3>{app.imagesection.heading}</h3>
                                            <img src={app.imagesection.image.localFile.url}/>
                                            <p>{app.imagesection.para}</p>
                                        </div>
                                        {/* {html} */}
                                        {/* {app.image1} */}
                                        {/* <p>HubSpot is an American Developer &amp; Marketer platform that offers full-stack
                                            solutions for marketing, sales, and CRM. </p>
                                        <h2>HubSpot Survey Integration: Use Cases</h2>
                                        <p>HubSpot Integration with SurveySparrow brings together surveys &amp; inbound
                                            marketing right under a single roof, opening up a plethora of possibilities. Have a
                                            look at what this Hubspot Integration offers you!</p>
                                        <div class="integration--kbvideo">
                                            <iframe width="948" height="533" src="https://www.youtube.com/embed/uEs-LphdnM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                                        </div>
                                        <div class="integration--usecase">
                                            <h3>Capture Feedback when the Deal is lost</h3>
                                            <img src="https://static.surveysparrow.com/site/assets/integrations/inner/hubspot/capture-feedback-when-deal-lost-hubspot-integration.png"/>
                                            <p>Trigger a feedback survey to your customers once a Deal is lost. Identify
                                                customer pain points, reduce churn, and build strong relationships with your
                                                customers with HubSpot survey integration.</p>
                                        </div>
                                        <div class="integration--usecase">
                                            <h3>Customer Satisfaction Surveys</h3>
                                            <img src="https://static.surveysparrow.com/site/assets/integrations/inner/hubspot/hubspot-survey-integration-customer-satisfaction-surveys.png"/>
                                            <p>Conduct customer satisfaction surveys and get precise feedback instantly. Hubspot
                                                integration with SurveySparrow is very efficient for your sales team to keep a
                                                constant check on customer views and requirements. Furthermore, based on the
                                                responses they give, trigger personalized emails to your prospects.</p>
                                        </div>
                                        <div class="integration--usecase">
                                            <h3>Capture New Leads</h3>
                                            <img src="https://static.surveysparrow.com/site/assets/integrations/inner/hubspot/hubspot-survey-integration-get-new-leads.png"/>
                                            <p>HubSpot Integration with SurveySparrow makes way to capture new leads and get
                                                more knowledge about your contacts. Merge your marketing campaigns with feedback
                                                surveys to enhance engagement opportunities and instantly witness the spike in
                                                leads captured. Get to know your contacts better and give a top-notch experience
                                                for each one of them.</p>
                                        </div>
                                        <div class="integration--usecase">
                                            <h3>Segment Contacts Based on Survey Responses</h3>
                                            <img src="https://static.surveysparrow.com/site/assets/integrations/inner/hubspot/hubspot-survey-integration-segment-contacts.png"/>
                                            <p>Segmenting helps you have a clear view of your contacts. With Hubspot
                                                integration, you can divide your prospects based on their exact answers to
                                                survey questions. Furthermore, you can keep track of who has completed the
                                                survey and who hasn't and send out reminder emails urging them to complete.
                                                This will give your sales team a 360-degree view of clients.</p>
                                        </div>
                                        <div class="integration--usecase">
                                            <h3>Integrate &amp; Automate</h3>
                                            <img src="https://static.surveysparrow.com/site/assets/integrations/inner/hubspot/hubspot-survey-integration-view-responses-easily.png"/>
                                            <p>With Hubspot Integration, say goodbye to juggling between different software and
                                                manually entering survey responses into your database. View your survey
                                                responses right within the Hubspot contact database and keep a pulse on customer
                                                trends. It is also possible to keep track of which channels your respondents
                                                took to respond.</p>
                                        </div> */}
                                    </div>
                                    <div class="tab-pane fade" id="setup">
                                        <h2>How to set up your HubSpot Survey Integration</h2>
                                        <div class="ss-integration-inner-setup--container">
                                            <div class="ss-integration-setup--title">
                                                <img src="https://static.surveysparrow.com/site/assets/surveysparrow-logo.png" alt=""/>
                                                <h3>SurveySparrow</h3>
                                            </div>
                                            <p>Connect your SurveySparrow account with HubSpot.</p>
                                            <div class="ss-integration--steps">
                                                <p><b>Step 1: </b>After creating your survey, navigate to Integrate &gt;
                                                    Integrations on your survey dashboard.</p>
                                                <p><b>Step 2: </b>Select HubSpot from the list of integrations.</p>
                                                <p><b>Step 3: </b>Sign in to your HubSpot account. You have now successfully
                                                    enabled the integration.</p>
                                                <p><b>Step 4: </b>You can map HubSpot fields to your survey questions/variables.
                                                    This way, details such as email, phone number, etc. can be directly added
                                                    into your HubSpot account from survey submissions.</p>
                                                <p><b>Step 5: </b>You can also create your own fields in HubSpot by going to
                                                    Settings &gt; Properties &gt; Create a property.</p>
                                                <p><b>Step 6: </b>Click Save, share your survey and test the connection.</p>
                                            </div>
                                        </div>
                                        <div class="ss-integration-inner-setup--container">
                                            <div class="ss-integration-setup--title">
                                                <img src="https://static.surveysparrow.com/site/assets/integrations/inner/webhooks-logo.png" alt=""/>
                                                <h3>Webhooks</h3>
                                            </div>
                                            <p>A webhook in web development is a method of augmenting or altering the behavior
                                                of a web page, or web application, with custom callbacks.</p>
                                            <div class="ss-integration--steps">
                                                <p><b>Note:</b> The Deal workflow is currently available in the Professional
                                                    plan.</p>
                                                <p><b>Step 1: </b>Navigate to Automation &gt; Workflow and click Create
                                                    Workflow.</p>
                                                <p><b>Step 2: </b>Select Deal Based and click Next.</p>
                                                <p><b>Step 3: </b>Click Set Enrollment Triggers &gt; Choose Trigger &gt; Deal
                                                    &gt; Deal Stage and choose Closed Lostand save the Trigger.</p>
                                                <p><b>Step 4: </b>Click Choose Action &gt; Action &gt; Trigger Webhook.</p>
                                                <p><b>Step 5: </b>Fill in the details.</p>
                                                <p><b>Step 6: </b>Save and test the Workflow.</p>
                                            </div>
                                        </div>
                                        <div class="ss-integration-inner-setup--container">
                                            <div class="ss-integration-setup--title">
                                                <img src="https://static.surveysparrow.com/site/assets/integrations/inner/zapier-logo.png" alt=""/>
                                                <h3>Zapier</h3>
                                            </div>
                                            <p>Zapier is an online automation tool that connects your apps and services. You can
                                                connect two or more apps to automate repetitive tasks without coding or relying
                                                on developers to build the integration.</p>
                                            <div class="ss-integration--steps">
                                                <p><b>Trigger - </b>New Survey Submission </p>
                                                <p class="ss-zapier--steps"><b>Step 1: </b>Choose App and Event - Hubspot and
                                                    New Deal in Stage</p>
                                                <p class="ss-zapier--steps"><b>Step 2: </b>Choose Account - Sign in to your
                                                    Hubspot account</p>
                                                <p class="ss-zapier--steps"><b>Step 3: </b>Customize Deal - Select Deal Pipeline
                                                </p>
                                                <p class="ss-zapier--steps"><b>Step 4: </b>Select a Deal stage - Closed Lost</p>
                                                <p class="ss-zapier--steps"><b>Step 5: </b>Find Data - Choose Sample data to
                                                    Send</p>
                                                <p class="ss-zapier--steps"><b>Step 6: </b>Test the connection</p>
                                                <p><b>Action - </b>Share Survey </p>
                                                <p class="ss-zapier--steps"><b>Step 1: </b>Choose App and Event - SurveySparrow
                                                    and Choose Survey to Send</p>
                                                <p class="ss-zapier--steps"><b>Step 2: </b>Choose Account - Sign in to your
                                                    SurveySparrow account</p>
                                                <p class="ss-zapier--steps"><b>Step 3: </b>Customize Share Survey:</p>
                                                <p class="ss-zapier--steps"><b>Step 4: </b>Select a survey from the list</p>
                                                <p class="ss-zapier--steps"><b>Step 5: </b>Select a share option(In this case,
                                                    Email share)</p>
                                                <p class="ss-zapier--steps"><b>Step 6: </b>Select a recipient email ID</p>
                                                <p class="ss-zapier--steps"><b>Step 7: </b>Pass a custom variable(Example:
                                                    dealid)(Optional)</p>
                                                <p class="ss-zapier--steps"><b>Step 8: </b>Test the connection</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

            
            


        </Layout>
    )
}

export const query = graphql`
query QueryApp($app: String) {
  allStrapiApp(filter: {name: {eq: $app}}) {
      edges {
          node {
              name
              description
              content
              imagesection {
                toppara
                heading
                para
                image {
                    localFile{
                        url
                      }
                }
              }
              logo{
                localFile{
                  url
                }
              }
          }
      }
  }
}
`
  
