import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container100">
      <Helmet>
        <title>Rural Incomparable Deer</title>
        <meta property="og:title" content="Rural Incomparable Deer" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="home-image"
        />
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <div className="home-buttons1">
            <button className="relevantPlaces-631301.framer.appInterMedium14 button">
              <span>{/*locale-Register_wlRO8a*/}</span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links">
              <span className="home-text100">
                <span>{/*locale-text_ejgOS_*/}</span>
              </span>
              <span className="home-text101">
                <span>{/*locale-text_gCcgoq*/}</span>
              </span>
              <span className="home-text102">
                <span>{/*locale-text_r0bHxp*/}</span>
              </span>
              <span className="home-text103">
                <span>{/*locale-text_Jpz2Rf*/}</span>
              </span>
              <span className="home-text104">
                <span>{/*locale-text_etzlBI*/}</span>
              </span>
            </nav>
            <div className="home-buttons2">
              <button className="home-login relevantPlaces-631301.framer.appInterMedium14 button">
                <span>{/*locale-Login_-58DsG*/}</span>
              </button>
              <button className="relevantPlaces-631301.framer.appInterMedium14 button">
                <span>{/*locale-Register_sB38Ph*/}</span>
              </button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-section1">
        <div className="home-container101">
          <div className="home-container102">
            <div className="home-container103">
              <span className="home-text105">
                <span>{/*locale-text_FCg2Yr*/}</span>
              </span>
              <div className="home-background-shadow1">
                <span className="home-text106">
                  <span>{/*locale-text_wQ4Cax*/}</span>
                </span>
              </div>
            </div>
            <div className="home-container104">
              <span className="home-text107">
                <span>{/*locale-text_RWb2T7*/}</span>
              </span>
            </div>
          </div>
          <span className="home-text108">
            <span>{/*locale-text_nLcThz*/}</span>
          </span>
        </div>
        <a
          href="https://cal.com/salome-mullet-smalt/30min?user=salome-mullet-smalt"
          name="Réserver mon appel découverte"
          target="_blank"
          rel="noreferrer noopener"
          className="home-button relevantPlaces-631301.framer.appInterMedium14 button"
        >
          {locale?.['name']}
        </a>
        <div className="home-container105">
          <div className="home-frame3">
            <div className="home-frame1">
              <video
                src="https://www.youtube.com/watch?v=UvJfmD541x0"
                muted="true"
                poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                autoPlay="true"
                className="home-video"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section2">
        <div className="home-container106">
          <div className="home-background-shadow2">
            <span className="home-text109">
              <span>{/*locale-text_HJr341*/}</span>
            </span>
          </div>
          <span className="home-text110">
            <span>{/*locale-text_j5bEML*/}</span>
          </span>
          <span className="home-text111 relevantPlaces-631301.framer.appInterRegular1">
            <span>{/*locale-text_FuNv0O*/}</span>
          </span>
        </div>
        <div className="home-container107">
          <div className="home-container108">
            <div className="home-background10">
              <div className="home-container109">
                <div className="home-container110">
                  <div className="home-heading31">
                    <div className="home-blur1">
                      <span className="home-text112">
                        <span>{/*locale-text_h7j6Va*/}</span>
                      </span>
                    </div>
                    <div className="home-blur2">
                      <span className="home-text113">
                        <span>{/*locale-text_PUDQi_*/}</span>
                      </span>
                    </div>
                  </div>
                  <span className="home-text114 relevantPlaces-631301.framer.appInterMedium">
                    <span>{/*locale-text_0TAbxs*/}</span>
                  </span>
                </div>
                <div className="home-container111">
                  <div className="home-container112">
                    <div className="home-component110">
                      <div className="home-group10">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-ovji.svg"
                          className="home-vector10"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-1z5j.svg"
                          className="home-vector11"
                        />
                      </div>
                    </div>
                    <span className="home-text115 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_KFP8Fw*/}</span>
                    </span>
                  </div>
                  <div className="home-container113">
                    <div className="home-component111">
                      <div className="home-group11">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-0kq8.svg"
                          className="home-vector12"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-3rt8.svg"
                          className="home-vector13"
                        />
                      </div>
                    </div>
                    <span className="home-text116 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_oJu2tJ*/}</span>
                    </span>
                  </div>
                  <div className="home-container114">
                    <div className="home-component112">
                      <div className="home-group12">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-6zj9.svg"
                          className="home-vector14"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-r462.svg"
                          className="home-vector15"
                        />
                      </div>
                    </div>
                    <span className="home-text117 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_l4XD2R*/}</span>
                    </span>
                  </div>
                  <div className="home-container115">
                    <div className="home-component113">
                      <div className="home-group13">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-0bh.svg"
                          className="home-vector16"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-zqsb.svg"
                          className="home-vector17"
                        />
                      </div>
                    </div>
                    <span className="home-text118 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_8oG4RO*/}</span>
                    </span>
                  </div>
                  <div className="home-container116">
                    <div className="home-component114">
                      <div className="home-group14">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-3hqp.svg"
                          className="home-vector18"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-piv.svg"
                          className="home-vector19"
                        />
                      </div>
                    </div>
                    <span className="home-text119 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_rm47JR*/}</span>
                    </span>
                  </div>
                  <div className="home-container117">
                    <div className="home-component115">
                      <div className="home-group15">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-eh3.svg"
                          className="home-vector20"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-86lq.svg"
                          className="home-vector21"
                        />
                      </div>
                    </div>
                    <span className="home-text120 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_paANOB*/}</span>
                    </span>
                  </div>
                  <div className="home-container118">
                    <div className="home-component116">
                      <div className="home-group16">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-kqm.svg"
                          className="home-vector22"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-0j3o.svg"
                          className="home-vector23"
                        />
                      </div>
                    </div>
                    <span className="home-text121 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_LKhK-k*/}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-background11">
              <div className="home-container119">
                <div className="home-container120">
                  <div className="home-heading32">
                    <div className="home-blur3">
                      <span className="home-text122">
                        <span>{/*locale-text_BVRHzT*/}</span>
                      </span>
                    </div>
                    <div className="home-blur4">
                      <span className="home-text123">
                        <span>{/*locale-text_YgwBbR*/}</span>
                      </span>
                    </div>
                  </div>
                  <span className="home-text124 relevantPlaces-631301.framer.appInterMedium">
                    <span>{/*locale-text_aZXUSx*/}</span>
                  </span>
                </div>
                <div className="home-container121">
                  <div className="home-container122">
                    <div className="home-component117">
                      <div className="home-group17">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-kog9.svg"
                          className="home-vector24"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-l64j.svg"
                          className="home-vector25"
                        />
                      </div>
                    </div>
                    <span className="home-text125 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_FobR_d*/}</span>
                    </span>
                  </div>
                  <div className="home-container123">
                    <div className="home-component118">
                      <div className="home-group18">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-thzt.svg"
                          className="home-vector26"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-wgus.svg"
                          className="home-vector27"
                        />
                      </div>
                    </div>
                    <span className="home-text126 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_4LaVkH*/}</span>
                    </span>
                  </div>
                  <div className="home-container124">
                    <div className="home-component119">
                      <div className="home-group19">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-yje.svg"
                          className="home-vector28"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-t85w.svg"
                          className="home-vector29"
                        />
                      </div>
                    </div>
                    <span className="home-text127 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_NSHO2k*/}</span>
                    </span>
                  </div>
                  <div className="home-container125">
                    <div className="home-component120">
                      <div className="home-group20">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-xrz.svg"
                          className="home-vector30"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-eb.svg"
                          className="home-vector31"
                        />
                      </div>
                    </div>
                    <span className="home-text128 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_2PAlPa*/}</span>
                    </span>
                  </div>
                  <div className="home-container126">
                    <div className="home-component121">
                      <div className="home-group21">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-ipc.svg"
                          className="home-vector32"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-n3s.svg"
                          className="home-vector33"
                        />
                      </div>
                    </div>
                    <span className="home-text129 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_xQ3lWe*/}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-background12">
              <div className="home-container127">
                <div className="home-container128">
                  <div className="home-heading33">
                    <span className="home-text130">
                      <span>{/*locale-text_-4UgcO*/}</span>
                    </span>
                  </div>
                  <span className="home-text131 relevantPlaces-631301.framer.appInterMedium">
                    <span>{/*locale-text_sSbDGr*/}</span>
                  </span>
                </div>
                <div className="home-container129">
                  <div className="home-container130">
                    <div className="home-component122">
                      <div className="home-group22">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-9ti.svg"
                          className="home-vector34"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-lsxn.svg"
                          className="home-vector35"
                        />
                      </div>
                    </div>
                    <span className="home-text132 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_WBInJM*/}</span>
                    </span>
                  </div>
                  <div className="home-container131">
                    <div className="home-component123">
                      <div className="home-group23">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-vjnxg.svg"
                          className="home-vector36"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-oh2o.svg"
                          className="home-vector37"
                        />
                      </div>
                    </div>
                    <span className="home-text133 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_xKtSaW*/}</span>
                    </span>
                  </div>
                  <div className="home-container132">
                    <div className="home-component124">
                      <div className="home-group24">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-dm3.svg"
                          className="home-vector38"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-jvfn.svg"
                          className="home-vector39"
                        />
                      </div>
                    </div>
                    <span className="home-text134 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_YzBYQz*/}</span>
                    </span>
                  </div>
                  <div className="home-container133">
                    <div className="home-component125">
                      <div className="home-group25">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-kst.svg"
                          className="home-vector40"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-x7xd.svg"
                          className="home-vector41"
                        />
                      </div>
                    </div>
                    <span className="home-text135 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_g_PGCt*/}</span>
                    </span>
                  </div>
                  <div className="home-container134">
                    <div className="home-component126">
                      <div className="home-group26">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-bqrj.svg"
                          className="home-vector42"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-hq7r.svg"
                          className="home-vector43"
                        />
                      </div>
                    </div>
                    <span className="home-text136 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_5Wu14z*/}</span>
                    </span>
                  </div>
                  <div className="home-container135">
                    <div className="home-component127">
                      <div className="home-group27">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-4myn.svg"
                          className="home-vector44"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-kro7.svg"
                          className="home-vector45"
                        />
                      </div>
                    </div>
                    <span className="home-text137 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_5hlggh*/}</span>
                    </span>
                  </div>
                  <div className="home-container136">
                    <div className="home-component128">
                      <div className="home-group28">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-4dq9.svg"
                          className="home-vector46"
                        />
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-hd7p.svg"
                          className="home-vector47"
                        />
                      </div>
                    </div>
                    <span className="home-text138 relevantPlaces-631301.framer.appInterMedium">
                      <span>{/*locale-text_0L37e-*/}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section3">
        <div className="home-frame16188731411">
          <div className="home-container137">
            <span className="home-text139">
              <span>{/*locale-text_SXPb3I*/}</span>
            </span>
          </div>
          <div className="home-frame16188731401">
            <div className="home-container138">
              <div className="home-background13">
                <span className="home-text140">
                  <span>{/*locale-text_eHjXHs*/}</span>
                </span>
                <div className="home-paragraph1">
                  <span className="home-text141">Comprendre</span>
                  <span className="home-text142">
                    <span>
                      Avant de dessiner quoi que ce soit, je prends le temps de
                      m’immerger dans votre univers.
                    </span>
                    <br />
                    <span>
                      À travers des ateliers collaboratifs, des interviews
                      ciblées ou une observation de vos
                    </span>
                    <span>
                      usages terrain, je m’attache à comprendre vos objectifs,
                      vos contraintes, mais surtout vos
                    </span>
                    <br />
                    <span>utilisateurs.</span>
                    <br />
                    <br />
                    <span>
                      Cette phase me permet de poser les bonnes bases et de
                      cadrer un projet en
                    </span>
                    <br />
                    <span>phase avec vos besoins réels.</span>
                  </span>
                </div>
              </div>
              <div className="home-background14">
                <span className="home-text154">
                  <span>{/*locale-text_HQ_AFe*/}</span>
                </span>
                <div className="home-paragraph2">
                  <span className="home-text155">Concevoir</span>
                  <span className="home-text156">
                    <span>
                      Une fois les besoins clarifiés, je passe à la conception.
                      Je traduis les idées en parcours, puis en interfaces, à
                      travers des wireframes, des maquettes interactives et un
                      design UI soigné.
                    </span>
                    <br />
                    <br />
                    <span>
                      {' '}
                      Chaque élément visuel est pensé pour être à la fois beau,
                      fonctionnel et aligné avec votre identité. L’objectif :
                      créer une expérience fluide, claire et engageante.
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-container139">
              <div className="home-background15">
                <span className="home-text161">
                  <span>{/*locale-text_m5LjHq*/}</span>
                </span>
                <div className="home-paragraph3">
                  <span className="home-text162">Valider</span>
                  <span className="home-text163">
                    <span>
                      Le design n’est jamais figé. Je teste, j’écoute, j’ajuste.
                    </span>
                    <br />
                    <br />
                    <span>
                      Grâce à des retours utilisateurs concrets et des
                      itérations rapides, je valide chaque étape avec vous pour
                      m’assurer que le produit répond vraiment à vos enjeux et
                      ceux de vos utilisateurs.
                    </span>
                    <br />
                    <br />
                    <span>
                      Cette boucle de validation permet de limiter les risques
                      et de gagner en justesse.
                    </span>
                  </span>
                </div>
              </div>
              <div className="home-background16">
                <span className="home-text171">
                  <span>{/*locale-text_sFNUt2*/}</span>
                </span>
                <div className="home-paragraph4">
                  <span className="home-text172">Livrer</span>
                  <span className="home-text173">
                    Enfin, je vous remets un livrable propre, structuré et prêt
                    à l’usage. Que ce soit un design finalisé prêt à être
                    développé, un design system complet, ou un site Web mis en
                    ligne sur une plateforme no-code, tout est pensé pour être
                    maintenable, évolutif et durable dans le temps.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section4">
        <div className="home-frame16188731412">
          <div className="home-container140">
            <div className="home-background-shadow3">
              <span className="home-text174">
                <span>{/*locale-text_5TQb70*/}</span>
              </span>
            </div>
            <span className="home-text175">
              <span>{/*locale-text_-f8xt0*/}</span>
            </span>
            <span className="home-text176">
              <span>{/*locale-text_4AaVIh*/}</span>
            </span>
          </div>
          <div className="home-frame16188731402">
            <div className="home-background17">
              <div className="home-background-shadow4">
                <span className="home-text177">
                  <span>{/*locale-text_RGChFT*/}</span>
                </span>
              </div>
              <div className="home-container141">
                <div className="home-container142">
                  <div className="home-container143">
                    <div className="home-heading41">
                      <span className="home-text178">
                        <span>{/*locale-text_yHo3bK*/}</span>
                      </span>
                    </div>
                    <span className="home-text179">
                      <span>{/*locale-text_CaIuk9*/}</span>
                    </span>
                  </div>
                  <div className="home-container144">
                    <div className="home-heading21">
                      <span className="home-text180">
                        <span>{/*locale-text_TJ7q-7*/}</span>
                      </span>
                      <span className="home-text181 relevantPlaces-631301.framer.appSemanticHeading2">
                        <span>{/*locale-text_o8o1Q0*/}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-container145">
                  <div className="home-container146">
                    <div className="home-container147">
                      <div className="home-container148">
                        <div className="home-background18">
                          <div className="home-component129">
                            <div className="home-group29">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-2yl.svg"
                                className="home-vector48"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text182 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_4ZUz5S*/}</span>
                      </span>
                    </div>
                    <div className="home-container149">
                      <div className="home-container150">
                        <div className="home-background19">
                          <div className="home-component130">
                            <div className="home-group30">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-61t6.svg"
                                className="home-vector49"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text183 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_TU1OVC*/}</span>
                      </span>
                    </div>
                    <div className="home-container151">
                      <div className="home-container152">
                        <div className="home-background20">
                          <div className="home-component131">
                            <div className="home-group31">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-t6jk.svg"
                                className="home-vector50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text184 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_Ro0crc*/}</span>
                      </span>
                    </div>
                    <div className="home-container153">
                      <div className="home-container154">
                        <div className="home-background21">
                          <div className="home-component132">
                            <div className="home-group32">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-gh07.svg"
                                className="home-vector51"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text185 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_UGZ8Ty*/}</span>
                      </span>
                    </div>
                    <div className="home-container155">
                      <div className="home-container156">
                        <div className="home-background22">
                          <div className="home-component133">
                            <div className="home-group33">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-7zfc.svg"
                                className="home-vector52"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text186 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_qJKsdT*/}</span>
                      </span>
                    </div>
                    <div className="home-container157">
                      <div className="home-container158">
                        <div className="home-background23">
                          <div className="home-component134">
                            <div className="home-group34">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-mas4.svg"
                                className="home-vector53"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text187 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_ZcnJzn*/}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-background24">
              <div className="home-background-shadow5">
                <span className="home-text188">
                  <span>{/*locale-text_NQk6PM*/}</span>
                </span>
              </div>
              <div className="home-container159">
                <div className="home-container160">
                  <div className="home-container161">
                    <div className="home-heading42">
                      <span className="home-text189">
                        <span>{/*locale-text_6-ltJ0*/}</span>
                      </span>
                    </div>
                    <span className="home-text190 relevantPlaces-631301.framer.appInterMedium1">
                      <span>{/*locale-text_OCZGDb*/}</span>
                    </span>
                  </div>
                  <div className="home-container162">
                    <div className="home-heading22">
                      <span className="home-text191 relevantPlaces-631301.framer.appSemanticHeading2">
                        <span>{/*locale-text_I25FUD*/}</span>
                      </span>
                      <span className="home-text192">
                        <span>{/*locale-text_WcmO00*/}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-container163">
                  <div className="home-container164">
                    <div className="home-container165">
                      <div className="home-container166">
                        <div className="home-background25">
                          <div className="home-component135">
                            <div className="home-group35">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-3k8f.svg"
                                className="home-vector54"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text193 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_O2OdVa*/}</span>
                      </span>
                    </div>
                    <div className="home-container167">
                      <div className="home-container168">
                        <div className="home-background26">
                          <div className="home-component136">
                            <div className="home-group36">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-r08bi.svg"
                                className="home-vector55"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text194 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_Jm-KFn*/}</span>
                      </span>
                    </div>
                    <div className="home-container169">
                      <div className="home-container170">
                        <div className="home-background27">
                          <div className="home-component137">
                            <div className="home-group37">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-aatq.svg"
                                className="home-vector56"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text195 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_aCkwb9*/}</span>
                      </span>
                    </div>
                    <div className="home-container171">
                      <div className="home-container172">
                        <div className="home-background28">
                          <div className="home-component138">
                            <div className="home-group38">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-7g62.svg"
                                className="home-vector57"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text196 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_Ki3mus*/}</span>
                      </span>
                    </div>
                    <div className="home-container173">
                      <div className="home-container174">
                        <div className="home-background29">
                          <div className="home-component139">
                            <div className="home-group39">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-9by.svg"
                                className="home-vector58"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text197 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_lVN4LT*/}</span>
                      </span>
                    </div>
                    <div className="home-container175">
                      <div className="home-container176">
                        <div className="home-background30">
                          <div className="home-component140">
                            <div className="home-group40">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-73yh.svg"
                                className="home-vector59"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text198 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_EoOnzY*/}</span>
                      </span>
                    </div>
                  </div>
                  <span className="home-text199">
                    <span>{/*locale-text_Ej0shw*/}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-background31">
              <div className="home-background-shadow6">
                <span className="home-text200">
                  <span>{/*locale-text_fycPgV*/}</span>
                </span>
              </div>
              <div className="home-container177">
                <div className="home-container178">
                  <div className="home-container179">
                    <div className="home-heading43">
                      <span className="home-text201">
                        <span>{/*locale-text_QfpFss*/}</span>
                      </span>
                    </div>
                    <span className="home-text202">
                      <span>{/*locale-text_irTP4s*/}</span>
                    </span>
                  </div>
                  <div className="home-container180">
                    <div className="home-heading23">
                      <span className="home-text203">
                        <span>{/*locale-text_Ci52W1*/}</span>
                      </span>
                      <span className="home-text204 relevantPlaces-631301.framer.appSemanticHeading2">
                        <span>{/*locale-text_zt4Wt9*/}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-container181">
                  <div className="home-container182">
                    <div className="home-container183">
                      <div className="home-container184">
                        <div className="home-background32">
                          <div className="home-component141">
                            <div className="home-group41">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-pxan.svg"
                                className="home-vector60"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text205 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_I3sitU*/}</span>
                      </span>
                    </div>
                    <div className="home-container185">
                      <div className="home-container186">
                        <div className="home-background33">
                          <div className="home-component142">
                            <div className="home-group42">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-1b8q.svg"
                                className="home-vector61"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text206 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_KPwMhL*/}</span>
                      </span>
                    </div>
                    <div className="home-container187">
                      <div className="home-container188">
                        <div className="home-background34">
                          <div className="home-component143">
                            <div className="home-group43">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-huw.svg"
                                className="home-vector62"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text207 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_lz49_D*/}</span>
                      </span>
                    </div>
                    <div className="home-container189">
                      <div className="home-container190">
                        <div className="home-background35">
                          <div className="home-component144">
                            <div className="home-group44">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-awqx.svg"
                                className="home-vector63"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text208 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_Srta6G*/}</span>
                      </span>
                    </div>
                    <div className="home-container191">
                      <div className="home-container192">
                        <div className="home-background36">
                          <div className="home-component145">
                            <div className="home-group45">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-dzsr.svg"
                                className="home-vector64"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text209 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_Dfkctw*/}</span>
                      </span>
                    </div>
                    <div className="home-container193">
                      <div className="home-container194">
                        <div className="home-background37">
                          <div className="home-component146">
                            <div className="home-group46">
                              <img
                                alt="VectorI1282"
                                src="/external/vectori1282-8m5m.svg"
                                className="home-vector65"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="home-text210 relevantPlaces-631301.framer.appInterMedium">
                        <span>{/*locale-text_HKBHF-*/}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section5">
        <div className="home-container195">
          <div className="home-background38">
            <div className="home-background39">
              <div className="home-component147">
                <div className="home-group47">
                  <img
                    alt="VectorI1282"
                    src="/external/vectori1282-hi7e.svg"
                    className="home-vector66"
                  />
                </div>
              </div>
            </div>
            <span className="home-text211 relevantPlaces-631301.framer.appInterMedium">
              <span>{/*locale-text_XAenCB*/}</span>
            </span>
          </div>
          <div className="home-paragraph5">
            <span className="home-text212 relevantPlaces-631301.framer.appInterMedium1">
              <span>{/*locale-text_XGDre4*/}</span>
            </span>
            <span className="home-text213">
              <span>{/*locale-text_SyyoOZ*/}</span>
            </span>
            <span className="home-text214 relevantPlaces-631301.framer.appInterMedium1">
              <span>{/*locale-text_7_ScCz*/}</span>
            </span>
            <span className="home-text215 relevantPlaces-631301.framer.appInterMedium1">
              <span>{/*locale-text_mUmSmc*/}</span>
            </span>
          </div>
        </div>
        <div className="home-container196">
          <div className="home-background40">
            <div className="home-atcd5a-m1fn-cx4-hnn-yp-mrq-tpl-h-vojpeg"></div>
            <div className="home-background41">
              <span className="home-text216 relevantPlaces-631301.framer.appInterRegular">
                <span>{/*locale-text_Iq7mB-*/}</span>
              </span>
              <div className="home-component148">
                <div className="home-group48">
                  <img
                    alt="VectorI1282"
                    src="/external/vectori1282-949q.svg"
                    className="home-vector67"
                  />
                </div>
              </div>
            </div>
            <div className="home-container197">
              <div className="home-paragraph6">
                <span className="home-text217 relevantPlaces-631301.framer.appSemanticHeading3">
                  <span>{/*locale-text_jVYY2b*/}</span>
                </span>
                <span className="home-text218 relevantPlaces-631301.framer.appInterMedium">
                  <span>{/*locale-text_yW8lHy*/}</span>
                </span>
              </div>
              <div className="home-container198">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <div className="home-link-icon">
                    <div className="home-component149">
                      <div className="home-group49">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-9sxk.svg"
                          className="home-vector68"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="home-container199">
            <div className="home-heading34">
              <span className="home-text219">
                <span>{/*locale-text_kJwJR4*/}</span>
              </span>
            </div>
            <span className="home-text220 relevantPlaces-631301.framer.appInterMedium">
              <span>{/*locale-text_L5DUUB*/}</span>
            </span>
            <div className="home-container200">
              <a
                href="mailto:salomemullet@studiosmalt.fr?subject=On fait équipe ? "
                id="Envie de faire équipe"
                name="Envie de faire équipe"
                className="home-link2 relevantPlaces-631301.framer.appInterMedium14 button"
              >
                <span>{/*locale-text_5cfslF*/}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-background42">
        <div className="home-background43">
          <div className="home-container201">
            <span className="home-text221">
              <span>{/*locale-text_Mgx5tw*/}</span>
            </span>
            <div className="home-background-shadow7">
              <span className="home-text222">
                <span>{/*locale-text_qqrd_S*/}</span>
              </span>
            </div>
          </div>
          <div className="home-container202">
            <div className="home-background44">
              <div className="home-background45">
                <div className="home-our0c-aa84upt9a1jyr-oqg6g-dw-y4jpg"></div>
              </div>
              <div className="home-container203">
                <div className="home-container204">
                  <div className="home-background46">
                    <div className="home-component150">
                      <div className="home-group50">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-tc2a.svg"
                          className="home-vector69"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="home-container205">
                    <span className="home-text223 relevantPlaces-631301.framer.appSemanticHeading31">
                      <span>{/*locale-text_jTwdql*/}</span>
                    </span>
                    <span className="home-text224">
                      <span>{/*locale-text_K_czwT*/}</span>
                    </span>
                  </div>
                </div>
                <div className="home-container206">
                  <div className="home-background47">
                    <div className="home-component151">
                      <div className="home-group51">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-xytv.svg"
                          className="home-vector70"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="home-container207">
                    <span className="home-text225 relevantPlaces-631301.framer.appSemanticHeading31">
                      <span>{/*locale-text_Gnw9nN*/}</span>
                    </span>
                    <span className="home-text226">
                      <span>{/*locale-text_0cAuH3*/}</span>
                    </span>
                  </div>
                </div>
                <div className="home-container208">
                  <div className="home-background48">
                    <div className="home-component152">
                      <div className="home-group52">
                        <img
                          alt="VectorI1282"
                          src="/external/vectori1282-gk3.svg"
                          className="home-vector71"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="home-container209">
                    <span className="home-text227 relevantPlaces-631301.framer.appSemanticHeading31">
                      <span>{/*locale-text_tr_hYo*/}</span>
                    </span>
                    <span className="home-text228">
                      <span>{/*locale-text_1PZ0Eo*/}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section6">
        <div className="home-background49">
          <div className="home-container210">
            <div className="home-container211">
              <span className="home-text229">
                <span className="home-text230">Un projet</span>
                <span className="home-text231">à</span>
              </span>
              <div className="home-background-shadow8">
                <span className="home-text232">lancer ?</span>
              </div>
            </div>
            <div className="home-container212">
              <span className="home-text233">
                <span className="home-text234">Une id</span>
                <span className="home-text235">ée à</span>
                <span className="home-text236"> </span>
              </span>
              <div className="home-background-shadow9">
                <span className="home-text237">structurer ?</span>
              </div>
            </div>
          </div>
          <div className="home-container213">
            <div className="home-container214">
              <div className="home-background50">
                <span className="home-text238">
                  Souhaitez-vous réserver un appel découverte ?
                </span>
                <span className="home-text239 relevantPlaces-631301.framer.appInterRegular">
                  <span>
                    Un échange gratuit de 15 minutes pour discuter de vos
                    besoins, répondre
                  </span>
                  <br />
                  <span>
                    à vos questions, et voir si je peux vous accompagner
                    efficacement. Pas
                  </span>
                  <br />
                  <span>
                    d’engagement, juste une conversation simple pour clarifier
                    votre projet.
                  </span>
                </span>
                <a
                  href="https://cal.com/salome-mullet-smalt/30min?user=salome-mullet-smalt"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3 relevantPlaces-631301.framer.appInterMedium14 button"
                >
                  <span>{/*locale-text_dCrovD*/}</span>
                </a>
              </div>
              <div className="home-background51">
                <span className="home-text245">
                  Vous avez aimé travailler avec moi ?
                </span>
                <span className="home-text246 relevantPlaces-631301.framer.appInterRegular">
                  <span>
                    Votre retour compte énormément. En quelques mots, vous
                    pouvez m’aider
                  </span>
                  <br />
                  <span>
                    à faire grandir Smalt et à gagner la confiance de futurs
                    clients. Laissez-
                  </span>
                  <br />
                  <span>
                    moi un avis sur Google, c’est rapide et ça fait toute la
                    différence. Merci
                  </span>
                  <br />
                  <span>d’avance pour votre soutien 🙏</span>
                </span>
                <a
                  href="https://www.google.com/maps/place/Agence+Smalt/@49.9631962,2.8180271,8z/data=!3m1!4b1!4m6!3m5!1s0x469bace140f0c48f:0x3224c50a9cb50218!8m2!3d49.9631962!4d2.8180272!16s%2Fg%2F11wwr122z3?entry=ttu&amp;g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link4 relevantPlaces-631301.framer.appInterMedium14 button"
                >
                  <span>{/*locale-text_yJYOVE*/}</span>
                </a>
              </div>
            </div>
            <div className="home-container215">
              <form className="home-form">
                <span className="home-text254">
                  Souhaitez-vous réserver un appel découverte ?
                </span>
                <span className="home-text255 relevantPlaces-631301.framer.appInterRegular">
                  <span>
                    Un échange gratuit de 15 minutes pour discuter de vos
                    besoins, répondre
                  </span>
                  <br />
                  <span>
                    à vos questions, et voir si je peux vous accompagner
                    efficacement. Pas
                  </span>
                  <br />
                  <span>
                    d’engagement, juste une conversation simple pour clarifier
                    votre projet.
                  </span>
                </span>
                <a
                  href="mailto:salomemullet@gmail.com?subject=Votre projet"
                  className="home-link5 relevantPlaces-631301.framer.appInterMedium14 button"
                >
                  <span>{/*locale-text_SMm6KM*/}</span>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="home-background52">
        <a
          href="https://relevant-places-631301.framer.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link6"
        >
          <div className="home-link2-hyxp4v-jz4i6r6i-uhdz-vu1c-gl4png"></div>
        </a>
        <div className="home-component21">
          <span className="home-text261 relevantPlaces-631301.framer.appInterRegular">
            Design &amp; Dev @Studio Smalt
          </span>
        </div>
        <div className="home-component22">
          <span className="home-text262 relevantPlaces-631301.framer.appInterRegular">
            Mentions légales
          </span>
        </div>
        <div className="home-component23">
          <span className="home-text263 relevantPlaces-631301.framer.appInterRegular">
            Politique de confidentialité
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
