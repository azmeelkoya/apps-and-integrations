import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import '../styles/global.css'
import '../pages/index.module.css'

import { Helmet } from "react-helmet"

export default function Home({ data }) {
  const apps = data.allStrapiApp.edges;
  const categories = data.allStrapiApp.edges;
  console.log(apps);

  return (
    <Layout>
      <Helmet>
        <link href="https://use.typekit.net/opo8nmt.css" rel="stylesheet" type="text/css" />
        <link href="https://surveysparrow.com/wp-content/themes/survey-sparrow/assets/css/surveysparrow.min.css?v=30042020.165044" rel="stylesheet" type="text/css" />
      </Helmet>
      {/* <section className="header">
        <div>
          <h2>Apps & Integrations</h2>
          <p>An Omni-channel Experience Management Platform.</p>
          <Link className="btn" to="/nps-benchmarks">NPS BENCHMARKS</Link>
        </div>
        <div className="image-div">
          <img src="https://static.surveysparrow.com/site/assets/integrations/surveysparrow-integrations.png" alt="Hero"/>
        </div>
      </section> */}
      <section class="ss-integrations-home--banner">
        <div class="container custom-container">
          <div class="item-full">
            <div class="item-left">
              <h1 class="ss-text--title ss-text--bolder ss-text--height-regular">
                Apps & <br />
                Integrations
              </h1>
              <h2 class="ss-text--h4 ss-text--thin ss-text--dark ss-text--height-large">
                Connect SurveySparrow with your favorite apps and create seamless workflows instantly
              </h2>
              <div class="flex_row flex_row--align-start ss-signup--cta">
                <div class="ss_email_signup flex_column">
                  <form class="email_signup">
                    <div class="ss-email-signup--popup disappear">
                      <p>Please enter a valid Email ID.</p>
                    </div>
                    <div class="input-container">
                      <input type="email" name="ss_email" placeholder="Your Work Email" required />
                    </div>
                    <button type="submit" data-loading-text="Signup...">Signup for Free</button>
                  </form>
                  <p class="ss-email-signup--info">
                    <span>14-Day Free Trial</span> • Cancel Anytime • No Credit Card Required •
                    <a href="https://surveysparrow.com/request-demo/">Need a Demo?</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="item-right">
              <img src="https://static.surveysparrow.com/site/assets/integrations/surveysparrow-integrations.png" alt=""
                class="img-responsive" />
            </div>
          </div>
        </div>
      </section>

      <section class="ss-integrations-home">
        <div class="container custom-container">
          <div class="ss-integrations--wrapper">
            <div class="ss-integrations-category">
              <div class="ss-integrations-filter">
                <h3>Categories</h3>
                <div id="ss-integrations-filter-list">
                <a class="active" data-category="Productivity"> Most Popular </a>
                <a data-category="Productivity"> Productivity</a>
                {/* { categories.map( category => (
                  <a data-category="Productivity"> {category.node.name} </a>
                ))} */}
                </div>
              </div>
            </div>
            <div class="ss-integration-apps">
              <div class="ss-integrations-search" id="searchIntegrationForm">
                <a onclick="searchIntegrations()" class="search-btn">
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.4898 28.4795C24.4547 28.4795 28.4795 24.4547 28.4795 19.4898C28.4795 14.5248 24.4547 10.5 19.4898 10.5C14.5248 10.5 10.5 14.5248 10.5 19.4898C10.5 24.4547 14.5248 28.4795 19.4898 28.4795Z"
                      stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25.8458 25.8458L31.5 31.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
                <input type="text" placeholder="Search Apps" />
                <div id="ss-integrations-dropdown-result" class="no-result">
                  <ul></ul>
                </div>
              </div>
              <div class="ss-integration-apps--wrapper">
                <div class="ss-integrations-container" id="ss-integrations-container">
                  { apps.map( app => (
                    <Link to={"/" + app.node.name} key={app.node.name} class="ss-integrations">
                      <div> 
                          <img src={app.node.logo.localFile.url}  class="ss-integrations-company-logo" alt="" title="" loading="lazy" />
                          <h3 class="ss-integrations-title">{app.node.name}</h3>
                          <p class="ss-integrations-desc"> {app.node.description} </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div class="ss-integrations-cta--wrapper">
                <div class="ss-integrations-cta--container">
                  <svg width="71" height="36" viewBox="0 0 71 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M58.166 24.3267L42.1226 27.3062" stroke="black" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M43.8744 10.4837L36.3039 13.3645C35.1317 13.7929 33.8269 13.7857 32.6602 13.3445C31.4936 12.9033 30.5548 12.062 30.0388 10.9953C29.5228 9.9285 29.4692 8.71824 29.8892 7.61575C30.3091 6.51327 31.1703 5.60327 32.294 5.0747L39.8604 1.66326C40.6831 1.28136 41.5811 1.05918 42.4994 1.0103C43.4177 0.961421 44.3371 1.08687 45.2014 1.37898L59.0153 6.28387"
                      stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M13.25 27.5408H18.9667L28.4808 34.2539C28.9603 34.7532 29.6291 35.0611 30.3474 35.1134C31.0658 35.1657 31.7781 34.9582 32.3355 34.5344L46.6272 23.8944C47.1898 23.465 47.5494 22.8487 47.6295 22.1767C47.7096 21.5047 47.5038 20.8303 47.0559 20.2971L39.2078 12.2688"
                      stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M31.6658 5.46141L30.645 4.68055C29.8245 4.11896 28.8632 3.76117 27.852 3.6411C26.8408 3.52104 25.8134 3.64266 24.8671 3.99446L13.25 8.58862"
                      stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M1 29.4363C1 29.9389 1.2151 30.421 1.59799 30.7764C1.98088 31.1319 2.50018 31.3315 3.04167 31.3315H9.16667C10.2496 31.3315 11.2882 30.9322 12.054 30.2213C12.8198 29.5105 13.25 28.5464 13.25 27.5411V8.58859C13.25 7.58329 12.8198 6.61916 12.054 5.90831C11.2882 5.19745 10.2496 4.7981 9.16667 4.7981H3.04167C2.50018 4.7981 1.98088 4.99777 1.59799 5.3532C1.2151 5.70863 1 6.19069 1 6.69334V29.4363Z"
                      stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M70.416 29.4363C70.416 29.9389 70.2009 30.421 69.818 30.7764C69.4351 31.1319 68.9158 31.3315 68.3743 31.3315H62.2493C61.1664 31.3315 60.1278 30.9322 59.362 30.2213C58.5962 29.5105 58.166 28.5464 58.166 27.5411V8.58859C58.166 7.58329 58.5962 6.61916 59.362 5.90831C60.1278 5.19745 61.1664 4.7981 62.2493 4.7981H68.3743C68.9158 4.7981 69.4351 4.99777 69.818 5.3532C70.2009 5.70863 70.416 6.19069 70.416 6.69334V29.4363Z"
                      stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="ss-integrations-cta--content">
                    <h2>Want to list your app?</h2>
                    <p>Give us some quick details and let’s get you listed.</p>
                    <a href="https://sprw.io/stt-6ab414" target="blank" class="ss-btn ss-btn--primary">Let’s Connect</a>
                  </div>
                </div>
                <div class="ss-integrations-cta--container">
                  <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M34.8925 40.9062L38.2734 44.285C38.6719 44.6834 39.2123 44.9072 39.7758 44.9072C40.3392 44.9072 40.8796 44.6834 41.2781 44.285L44.2829 41.2803C44.6813 40.8818 44.905 40.3413 44.905 39.7779C44.905 39.2144 44.6813 38.674 44.2829 38.2755L40.9062 34.8968C41.8829 32.9295 42.5973 30.8427 43.0312 28.6896H47.8125C48.3761 28.6896 48.9166 28.4657 49.3151 28.0672C49.7136 27.6687 49.9375 27.1282 49.9375 26.5646V24.4396C49.9375 23.876 49.7136 23.3355 49.3151 22.937C48.9166 22.5385 48.3761 22.3146 47.8125 22.3146H43.0376C42.6044 20.1607 41.8899 18.0731 40.9126 16.1054L44.2829 12.7287C44.6813 12.3303 44.905 11.7898 44.905 11.2264C44.905 10.6629 44.6813 10.1225 44.2829 9.724L41.276 6.71713C40.8775 6.31875 40.3371 6.09495 39.7736 6.09495C39.2101 6.09495 38.6697 6.31875 38.2713 6.71713L34.8925 10.0938C32.9268 9.11518 30.8404 8.40066 28.6875 7.96875V3.1875C28.6875 2.62391 28.4636 2.08341 28.0651 1.6849C27.6666 1.28638 27.1261 1.0625 26.5625 1.0625H24.4375C23.8739 1.0625 23.3334 1.28638 22.9349 1.6849C22.5364 2.08341 22.3125 2.62391 22.3125 3.1875V7.9645C20.1589 8.3964 18.0718 9.11091 16.1054 10.0895L12.7266 6.71713C12.3281 6.31875 11.7877 6.09495 11.2243 6.09495C10.6608 6.09495 10.1204 6.31875 9.72187 6.71713L6.715 9.724C6.31662 10.1225 6.09283 10.6629 6.09283 11.2264C6.09283 11.7898 6.31662 12.3303 6.715 12.7287L10.0938 16.1054C9.1171 18.0726 8.40268 20.1595 7.96875 22.3125H3.1875C2.62391 22.3125 2.08341 22.5364 1.6849 22.9349C1.28638 23.3334 1.0625 23.8739 1.0625 24.4375V26.5625C1.0625 27.1261 1.28638 27.6666 1.6849 28.0651C2.08341 28.4636 2.62391 28.6875 3.1875 28.6875H7.96025C8.39418 30.8405 9.1086 32.9274 10.0852 34.8946L6.7065 38.2734C6.30812 38.6719 6.08433 39.2123 6.08433 39.7758C6.08433 40.3392 6.30812 40.8796 6.7065 41.2781L9.71338 44.2829C10.1119 44.6813 10.6523 44.905 11.2157 44.905C11.7792 44.905 12.3196 44.6813 12.7181 44.2829L16.0947 40.9041"
                      stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.3125 43.5625H28.6875" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.3125 47.8125H28.6875" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25.5 47.8125V49.9375" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M37.9714 25.5935C37.877 22.3784 36.5107 19.3321 34.1724 17.1233C31.8342 14.9146 28.7151 13.7238 25.4998 13.8125C22.2844 13.7233 19.165 14.9138 16.8266 17.1227C14.4883 19.3316 13.1221 22.3782 13.0282 25.5935C13.139 28.2309 14.1046 30.7607 15.7794 32.8011C17.4542 34.8416 19.7471 36.2819 22.3123 36.9049V39.3125H28.6873V36.9049C31.2525 36.2819 33.5455 34.8416 35.2202 32.8011C36.895 30.7607 37.8606 28.2309 37.9714 25.5935V25.5935Z"
                      stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="ss-integrations-cta--content">
                    <h2>Wish to integrate with us?</h2>
                    <p>Here's everything you'll need to build an integration and connect with us.</p>
                    <a href="https://surveysparrow.com/developer/" target="blank" class="ss-btn ss-btn--primary">Get
                      Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}


export const query = graphql`
  query MyQuery {
    allStrapiApp {
      edges {
        node {
          name
          description
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
