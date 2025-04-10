(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1189:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>f});var a=i(5155),r=i(6874),s=i.n(r),n=i(7634),l=i(4502),o=i(9621),d=i(5830),c=i(3578),m=i(2970),h=i(4887),g=i(8313),x=i(2115);let p=()=>{let e=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let t;let i=e.current;if(!i)return;let a=i.getContext("2d");if(!a)return;let r=[],s=()=>{let e=i.parentElement;e&&(i.width=e.offsetWidth,i.height=e.offsetHeight,function(){if(r=[],i)for(let e=0;e<50;e++)r.push(new n(i.width,i.height))}())};class n{update(e,t){this.x+=this.speedX,this.y+=this.speedY,this.x<0&&(this.x=e),this.x>e&&(this.x=0),this.y<0&&(this.y=t),this.y>t&&(this.y=0)}draw(e){e.fillStyle=this.color,e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI),e.fill()}constructor(e,t){this.x=Math.random()*e,this.y=Math.random()*t,this.size=1.5*Math.random()+.5,this.speedX=.6*Math.random()-.3,this.speedY=.6*Math.random()-.3;let i=.4*Math.random()+.1;this.color="rgba(10, 102, 194, ".concat(i,")")}}return s(),function e(){a&&i&&(a.clearRect(0,0,i.width,i.height),r.forEach(e=>{e.update(i.width,i.height),e.draw(a)}),function(e){for(let t=0;t<r.length;t++)for(let i=t+1;i<r.length;i++){let a=r[t].x-r[i].x,s=r[t].y-r[i].y,n=Math.sqrt(a*a+s*s);if(n<100){let a=1-n/100;e.strokeStyle="rgba(10, 102, 194, ".concat(.2*a,")"),e.lineWidth=.5,e.beginPath(),e.moveTo(r[t].x,r[t].y),e.lineTo(r[i].x,r[i].y),e.stroke()}}}(a),t=requestAnimationFrame(e))}(),window.addEventListener("resize",s),()=>{cancelAnimationFrame(t),window.removeEventListener("resize",s)}},[]),(0,a.jsx)(l.P.canvas,{ref:e,className:"absolute top-0 left-0 w-full h-full -z-10",initial:{opacity:0},animate:{opacity:1},transition:{duration:1.5}})},u=[{slug:"england-environmental-justice-analysis",title:"Environmental Justice Analysis",description:"Built an end-to-end geospatial & ML pipeline (Python, GeoPandas, Scikit-learn, PySAL) applying spatial statistics, clustering, and predictive modelling to analyse environmental justice disparities in the UK.",imageUrl:"/images/env-justice-lisa-clusters.png",tags:["Geospatial","Python","Data Analysis","Social Impact"],liveUrl:"http://alexander-clarke.com/england-environmental-justice-analysis/",repoUrl:"https://github.com/ACl365/england-environmental-justice-analysis"},{slug:"MIMIC-demo",title:"MIMIC MLOps Pipeline",description:"Engineered an MLOps pipeline PoC (Python, Scikit-learn, MLflow, Docker, FastAPI) using MIMIC data for predicting hospital readmissions, focusing on reproducibility, experiment tracking, and deployment.",imageUrl:"/images/imbalance_metrics_comparison.png",tags:["Healthcare","Readmission Prediction","Imbalance Handling","SHAP"],liveUrl:"http://alexander-clarke.com/MIMIC_demo/",repoUrl:"https://github.com/ACl365/MIMIC-demo"},{slug:"clv-segmentation-dashboard",title:"Online Retail CLV Dashboard",description:"Analysed the classic Online Retail dataset (2010-2011) using RFM segmentation and probabilistic models (BG/NBD, Gamma-Gamma) to predict Customer Lifetime Value. Includes an interactive dashboard.",imageUrl:"/images/clv_segementation_deep_dive.png",tags:["Dashboard","CLV","Streamlit","Data Viz"],liveUrl:"https://clv-dashboard-alexander.onrender.com/",repoUrl:"https://github.com/ACl365/online-retail-clv-baseline"}],y=[{name:"Languages & Databases",icon:(0,a.jsx)(o.A,{size:24,className:"mr-2 text-primary dark:text-primary-light"}),skills:["Python (Pandas, Scikit-learn)","SQL (BigQuery)","NumPy","Statsmodels"]},{name:"ML & Data Analysis",icon:(0,a.jsx)(d.A,{size:24,className:"mr-2 text-primary dark:text-primary-light"}),skills:["Predictive Modeling (Regression, Classification)","Clustering","Feature Engineering","Model Evaluation (SHAP)","A/B Testing"]},{name:"Geospatial Analysis",icon:(0,a.jsx)(c.A,{size:24,className:"mr-2 text-primary dark:text-primary-light"}),skills:["GeoPandas","PySAL","Spatial Statistics","QGIS"]},{name:"Cloud & MLOps",icon:(0,a.jsx)(m.A,{size:24,className:"mr-2 text-primary dark:text-primary-light"}),skills:["GCP (BigQuery, Storage)","MLflow","Docker","FastAPI","CI/CD (GitHub Actions)","Monitoring Principles"]},{name:"Visualisation & BI",icon:(0,a.jsx)(h.A,{size:24,className:"mr-2 text-primary dark:text-primary-light"}),skills:["Plotly","Streamlit","Power BI","Tableau","Matplotlib/Seaborn"]},{name:"Advanced Techniques",icon:(0,a.jsx)(g.A,{size:24,className:"mr-2 text-primary dark:text-primary-light"}),skills:["Interpretable ML (SHAP)","Causal Inference (PSM)","Time-Series","LLM/RAG Exploration"]}],b={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},v={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}};function f(){return(0,a.jsxs)("div",{className:"container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24",children:[(0,a.jsxs)(l.P.section,{className:"relative mb-16 text-center md:mb-24 lg:mb-32 overflow-hidden",initial:"hidden",animate:"visible",variants:v,children:[(0,a.jsx)(p,{})," ",(0,a.jsxs)("div",{className:"relative z-10",children:[(0,a.jsx)("h1",{className:"mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl",children:"Innovating Environmental & Healthcare Solutions Through Data Science"}),(0,a.jsx)("p",{className:"mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400 md:text-xl",children:"Applying machine learning, MLOps, and data analysis techniques to solve complex challenges in environmental science and healthcare."}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 sm:flex-row",children:[(0,a.jsx)(s(),{href:"#projects",className:"text-base font-medium text-primary hover:underline dark:text-primary-light",children:"View Projects"}),(0,a.jsx)(s(),{href:"/about",className:"inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900",children:"Learn More About Me"})]})]})," "]}),(0,a.jsxs)(l.P.section,{id:"projects",className:"mb-16 md:mb-24 lg:mb-32 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",children:"Featured Projects"}),(0,a.jsx)(l.P.div,{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12",variants:b,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},children:u.map(e=>(0,a.jsx)(n.U,{slug:e.slug,title:e.title,description:e.description,imageUrl:e.imageUrl,tags:e.tags,repoUrl:e.repoUrl},e.slug))})]}),(0,a.jsxs)(l.P.section,{className:"mb-16 rounded-lg bg-gradient-to-br from-white via-secondary to-white py-12 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 md:mb-24 lg:mb-32 lg:py-16",initial:"hidden",whileInView:"visible",variants:b,viewport:{once:!0,amount:.1},children:[(0,a.jsx)("h2",{className:"mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",children:"Skills & Expertise"}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:y.map(e=>(0,a.jsxs)(l.P.div,{variants:v,className:"rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-primary/20",children:[(0,a.jsxs)("h3",{className:"mb-4 flex items-center text-lg font-semibold text-gray-800 dark:text-white",children:[e.icon,e.name]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:e.skills.map(e=>(0,a.jsxs)("span",{className:"rounded-md bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary transition-colors duration-200 hover:bg-primary hover:text-white dark:bg-primary-light/15 dark:text-white dark:hover:bg-primary-light dark:hover:text-gray-900",children:[" ",e]},e))})]},e.name))})]}),(0,a.jsxs)(l.P.section,{className:"mb-16 rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-800/50 md:mb-24 lg:mb-32",initial:"hidden",whileInView:"visible",variants:v,viewport:{once:!0,amount:.2},children:[(0,a.jsx)("h2",{className:"mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl",children:"About Me"}),(0,a.jsx)("p",{className:"mx-auto mb-6 max-w-xl text-gray-600 dark:text-gray-400",children:"Driven by a passion for using data to understand and improve the world around us. Currently exploring intersections between technology, environmental sustainability, and healthcare equity."}),(0,a.jsx)(s(),{href:"/about",className:"text-base font-medium text-primary hover:underline dark:text-primary-light",children:"Read My Full Story →"})]}),(0,a.jsxs)(l.P.section,{className:"text-center",initial:"hidden",whileInView:"visible",variants:v,viewport:{once:!0,amount:.2},children:[(0,a.jsx)("h2",{className:"mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl",children:"Let's Connect"}),(0,a.jsx)("p",{className:"mx-auto mb-6 max-w-lg text-gray-600 dark:text-gray-400",children:"Interested in collaborating or discussing potential opportunities? I'd love to hear from you."}),(0,a.jsx)(s(),{href:"/contact",className:"text-base font-medium text-primary hover:underline dark:text-primary-light",children:"Get In Touch"})]})]})}},1629:(e,t,i)=>{Promise.resolve().then(i.bind(i,1189))},8313:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});let a=(0,i(9946).A)("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[874,270,634,441,684,358],()=>t(1629)),_N_E=e.O()}]);