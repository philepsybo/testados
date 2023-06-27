function ready(callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        //Old IE stuff
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState === 'complete') {
                callback();
            }
        });
    }
}


ready(
    () => {
        console.log("FRITTN");
        //create a table with the repos
        let table = document.createElement("table");
        table.setAttribute("id", "repoTable");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.innerHTML = "Name";
        tr.appendChild(th);
        th = document.createElement("th");
        th.innerHTML = "Description";
        tr.appendChild(th);
        th = document.createElement("th");
        th.innerHTML = "URL";
        tr.appendChild(th);
        th = document.createElement("th");
        th.innerHTML = "Visibility";
        tr.appendChild(th);
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById("repos").appendChild(table);

        // loop through the repos and add them to the table
        for (const element of repos) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.innerHTML = element.name;
            tr.appendChild(td);
            td = document.createElement("td");
            td.innerHTML = element.description;
            tr.appendChild(td);
            td = document.createElement("td");
            td.innerHTML = element.url;
            tr.appendChild(td);
            td = document.createElement("td");
            td.innerHTML = element.visibility;
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    }
);







const repos = [
    {
        "description": "config repository for argocd. Used with https://github.com/leibniz-psychology/teap",
        "name": "k8s-argocd-teap-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-teap-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "TeaP-Archivsite",
        "name": "teap",
        "url": "https://github.com/leibniz-psychology/teap",
        "visibility": "PRIVATE"
    },
    {
        "description": "Collection of development conventions at ZPID",
        "name": "zpid-conventions",
        "url": "https://github.com/leibniz-psychology/zpid-conventions",
        "visibility": "PRIVATE"
    },
    {
        "description": "bareos backup configuration and documentation",
        "name": "bareos-backup",
        "url": "https://github.com/leibniz-psychology/bareos-backup",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "klarpsy-website",
        "url": "https://github.com/leibniz-psychology/klarpsy-website",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "static-site-demo-public",
        "url": "https://github.com/leibniz-psychology/static-site-demo-public",
        "visibility": "PRIVATE"
    },
    {
        "description": "Source files of static site demo",
        "name": "static-site-demo",
        "url": "https://github.com/leibniz-psychology/static-site-demo",
        "visibility": "PRIVATE"
    },
    {
        "description": "Transformation of journal articles from JATS/XML format to FO for PDF production by XSLT scripting",
        "name": "psychopen-jats2fo",
        "url": "https://github.com/leibniz-psychology/psychopen-jats2fo",
        "visibility": "PRIVATE"
    },
    {
        "description": "GitOps repo for the PsychArchives2 application",
        "name": "k8s-argocd-psycharchives2-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-psycharchives2-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "API for dSpace6 (PsychArchives)",
        "name": "psycharchives_api",
        "url": "https://github.com/leibniz-psychology/psycharchives_api",
        "visibility": "PRIVATE"
    },
    {
        "description": "Public static files of psychporta frontend",
        "name": "psychporta-frontend-public",
        "url": "https://github.com/leibniz-psychology/psychporta-frontend-public",
        "visibility": "PRIVATE"
    },
    {
        "description": "Source files of psychporta frontend",
        "name": "psychporta-frontend",
        "url": "https://github.com/leibniz-psychology/psychporta-frontend",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "rdc-website",
        "url": "https://github.com/leibniz-psychology/rdc-website",
        "visibility": "PRIVATE"
    },
    {
        "description": "config repository for deployment via argocd for https://github.com/leibniz-psychology/rdc-website",
        "name": "k8s-argocd-rdc-website-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-rdc-website-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "config repository for deployment via argocd",
        "name": "k8s-argocd-PADA-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-PADA-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "PsychArchives Delivery Assistant",
        "name": "pada",
        "url": "https://github.com/leibniz-psychology/pada",
        "visibility": "PRIVATE"
    },
    {
        "description": "config repository for deployment via argocd ",
        "name": "k8s-argocd-datawiz2-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-datawiz2-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "Contains all \"public\" files to be deployed to klarpsy.de",
        "name": "klarpsy-website-public",
        "url": "https://github.com/leibniz-psychology/klarpsy-website-public",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "k8s-static-sites",
        "url": "https://github.com/leibniz-psychology/k8s-static-sites",
        "visibility": "PRIVATE"
    },
    {
        "description": "k8s configuration for static site demo",
        "name": "k8s-argocd-static-site-demo-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-static-site-demo-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "Config for Kubernetes Deployment of klarpsy-website",
        "name": "k8s-argocd-klarpsy-website-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-klarpsy-website-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "k8s-argocd-clamav-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-clamav-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "Skosmos k8s configuration for argocd",
        "name": "k8s-argocd-skosmos-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-skosmos-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "Fork of Skosmos (Thesaurus and controlled vocabulary browser using SKOS and SPARQL) with custom changes. ",
        "name": "Skosmos",
        "url": "https://github.com/leibniz-psychology/Skosmos",
        "visibility": "PRIVATE"
    },
    {
        "description": "A set of python tools for describing PSYNDEX data in RDF and for converting from STARXML to Linked Data",
        "name": "psyndex2linkeddata",
        "url": "https://github.com/leibniz-psychology/psyndex2linkeddata",
        "visibility": "PUBLIC"
    },
    {
        "description": "PsychArchives2 frontend dev repository",
        "name": "psycharchives2",
        "url": "https://github.com/leibniz-psychology/psycharchives2",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "k8s-argocd-annif-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-annif-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "Research Data Documentation Assistant",
        "name": "datawiz2",
        "url": "https://github.com/leibniz-psychology/datawiz2",
        "visibility": "PUBLIC"
    },
    {
        "description": "",
        "name": "k8s-argocd-psychporta-frontend-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-psychporta-frontend-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "Die neue PSYNDEX-Website",
        "name": "psyndex-website",
        "url": "https://github.com/leibniz-psychology/psyndex-website",
        "visibility": "PRIVATE"
    },
    {
        "description": "Contains all \"public\" files to be deployed to psyndex.de",
        "name": "psyndex-website-public",
        "url": "https://github.com/leibniz-psychology/psyndex-website-public",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "k8s-argocd-psyndex2-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-psyndex2-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "psyndex2",
        "url": "https://github.com/leibniz-psychology/psyndex2",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "psychopen_static_site",
        "url": "https://github.com/leibniz-psychology/psychopen_static_site",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "k8s-argocd-PASA-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-PASA-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "PsychTopics – A Shiny App for Exploring and Analyzing Research Topics in Psychology",
        "name": "psychtopics",
        "url": "https://github.com/leibniz-psychology/psychtopics",
        "visibility": "PUBLIC"
    },
    {
        "description": "Einstellungs Repo für das deployment vom Testarchiv.eu in Kubernetes über Argocd (https://dev-argocd.stg.zpid.org)",
        "name": "k8s-argocd-Testarchiv-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-Testarchiv-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "Testarchiv.eu Webseite mittels symfony",
        "name": "testarchiv_eu",
        "url": "https://github.com/leibniz-psychology/testarchiv_eu",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "psyndex-ovid",
        "url": "https://github.com/leibniz-psychology/psyndex-ovid",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "konsortswd-wp-theme",
        "url": "https://github.com/leibniz-psychology/konsortswd-wp-theme",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "pasa",
        "url": "https://github.com/leibniz-psychology/pasa",
        "visibility": "PRIVATE"
    },
    {
        "description": "Workspace management",
        "name": "mashru3",
        "url": "https://github.com/leibniz-psychology/mashru3",
        "visibility": "PUBLIC"
    },
    {
        "description": "Deployment documentation for PsychNotebook. Also a Guix channel.",
        "name": "psychnotebook-deploy",
        "url": "https://github.com/leibniz-psychology/psychnotebook-deploy",
        "visibility": "PUBLIC"
    },
    {
        "description": "Keycloak von docker01 in der dev2 Version  ",
        "name": "keycloak-dev2",
        "url": "https://github.com/leibniz-psychology/keycloak-dev2",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "psyndex-zotero",
        "url": "https://github.com/leibniz-psychology/psyndex-zotero",
        "visibility": "PRIVATE"
    },
    {
        "description": "Easy access to web applications running on compute clusters ",
        "name": "bawwab-client",
        "url": "https://github.com/leibniz-psychology/bawwab-client",
        "visibility": "PUBLIC"
    },
    {
        "description": "PsychArchives deployment tools for docker hosts",
        "name": "psycharchives-docker-tools",
        "url": "https://github.com/leibniz-psychology/psycharchives-docker-tools",
        "visibility": "PRIVATE"
    },
    {
        "description": "Simple PHP scripts that illustrate the use of the DSpace (PsychArchives) Rest API",
        "name": "PsychArchives_Rest_Example_Code",
        "url": "https://github.com/leibniz-psychology/PsychArchives_Rest_Example_Code",
        "visibility": "PRIVATE"
    },
    {
        "description": "Some examples of our Bibframe model implementation for psychological literature. Originally made for a presentation at SWIB22.",
        "name": "zpid-bibframe-implementation",
        "url": "https://github.com/leibniz-psychology/zpid-bibframe-implementation",
        "visibility": "PUBLIC"
    },
    {
        "description": "Generate corpus data for Annif",
        "name": "psyndex-corpus",
        "url": "https://github.com/leibniz-psychology/psyndex-corpus",
        "visibility": "PRIVATE"
    },
    {
        "description": "SSH-Tunnel-Container to link PsychArchives2 with the DSpace backend.",
        "name": "psycharchives-tunnel",
        "url": "https://github.com/leibniz-psychology/psycharchives-tunnel",
        "visibility": "PRIVATE"
    },
    {
        "description": "ArgoCD link to deploy a demo app ",
        "name": "k8s-argocd-jb-argocd-demo-app-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-jb-argocd-demo-app-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "Demo App for me to practice working with ArgoCD. A copy of https://github.com/leibniz-psychology/mk-argocd-demo-app",
        "name": "jb-argocd-demo-app",
        "url": "https://github.com/leibniz-psychology/jb-argocd-demo-app",
        "visibility": "PRIVATE"
    },
    {
        "description": "nextcloud for BRAC project",
        "name": "brac-nextcloud",
        "url": "https://github.com/leibniz-psychology/brac-nextcloud",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "k8s-argocd-brac-nextcloud-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-brac-nextcloud-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "config repository for psychopen CAMA argocd deployment",
        "name": "k8s-argocd-PsychOpenCAMA-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-PsychOpenCAMA-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "k8s-argocd-workflow-test",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-workflow-test",
        "visibility": "PRIVATE"
    },
    {
        "description": "config repo for argocd. Used for deployment of opencpu server in kubernetes. associated repository is https://github.com/leibniz-psychology/PsychOpen-CAMA-R-package",
        "name": "k8s-argocd-OpenCpu-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-OpenCpu-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "opensearch",
        "url": "https://github.com/leibniz-psychology/opensearch",
        "visibility": "PRIVATE"
    },
    {
        "description": "PsychArchives Dspace7 Backend",
        "name": "dspace-backend",
        "url": "https://github.com/leibniz-psychology/dspace-backend",
        "visibility": "PRIVATE"
    },
    {
        "description": "PsychArchives DSpace7 Angular-Frontend",
        "name": "dspace-angular",
        "url": "https://github.com/leibniz-psychology/dspace-angular",
        "visibility": "PRIVATE"
    },
    {
        "description": "Take a csv file and transforms it into the DSpace Simple Archive format.",
        "name": "psycharchives_dspace-csv-archive",
        "url": "https://github.com/leibniz-psychology/psycharchives_dspace-csv-archive",
        "visibility": "PUBLIC"
    },
    {
        "description": "Konfugurationen für Azure Deployment",
        "name": "k8s-argocd-psydok-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-psydok-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "statische Seite mit Weiterleitungen für Psydok",
        "name": "psydok_app",
        "url": "https://github.com/leibniz-psychology/psydok_app",
        "visibility": "PRIVATE"
    },
    {
        "description": "PreReg-Theme for OJS 3",
        "name": "prereg-theme",
        "url": "https://github.com/leibniz-psychology/prereg-theme",
        "visibility": "PRIVATE"
    },
    {
        "description": "R Package used in PsychOpenCAMA",
        "name": "PsychOpen-CAMA-R-package",
        "url": "https://github.com/leibniz-psychology/PsychOpen-CAMA-R-package",
        "visibility": "PUBLIC"
    },
    {
        "description": "Controlled vocabularies used at ZPID in SKOS (RDF) format, plus conversion pipelines to get them there. For loading into Skosmos vocabulary server.",
        "name": "zpid-vocabularies",
        "url": "https://github.com/leibniz-psychology/zpid-vocabularies",
        "visibility": "PRIVATE"
    },
    {
        "description": "psyndex.de k8s configuration for argocd",
        "name": "k8s-argocd-psyndex-website-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-psyndex-website-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "RMarkdown server integration for PsychNotebook",
        "name": "psychnotebook-app-rmarkdown",
        "url": "https://github.com/leibniz-psychology/psychnotebook-app-rmarkdown",
        "visibility": "PUBLIC"
    },
    {
        "description": "JupyterLab integration for PsychNotebook",
        "name": "psychnotebook-app-jupyterlab",
        "url": "https://github.com/leibniz-psychology/psychnotebook-app-jupyterlab",
        "visibility": "PUBLIC"
    },
    {
        "description": "JASP integration for PsychNotebook",
        "name": "psychnotebook-app-jasp",
        "url": "https://github.com/leibniz-psychology/psychnotebook-app-jasp",
        "visibility": "PUBLIC"
    },
    {
        "description": "RStudio integration for PsychNotebook",
        "name": "psychnotebook-app-rstudio",
        "url": "https://github.com/leibniz-psychology/psychnotebook-app-rstudio",
        "visibility": "PUBLIC"
    },
    {
        "description": "",
        "name": "annif-keyword-suggestions",
        "url": "https://github.com/leibniz-psychology/annif-keyword-suggestions",
        "visibility": "PRIVATE"
    },
    {
        "description": "Guix package channel for ZPID",
        "name": "guix-zpid",
        "url": "https://github.com/leibniz-psychology/guix-zpid",
        "visibility": "PUBLIC"
    },
    {
        "description": "Patches to RStudio for @guix-science and @leibniz-psychology. Branches may be force-pushed.",
        "name": "rstudio",
        "url": "https://github.com/leibniz-psychology/rstudio",
        "visibility": "PUBLIC"
    },
    {
        "description": "A CAMA (Community Augmented  Meta Analysis) is an open repository  for meta-analytic data, that provides  meta-analytic analysis tools.",
        "name": "cama",
        "url": "https://github.com/leibniz-psychology/cama",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "lp-keycloak-theme",
        "url": "https://github.com/leibniz-psychology/lp-keycloak-theme",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "k8s-argocd-sonarQube-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-sonarQube-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "Mockups for tricky stuff in PSYNDEX2",
        "name": "psyndex-mockups",
        "url": "https://github.com/leibniz-psychology/psyndex-mockups",
        "visibility": "PRIVATE"
    },
    {
        "description": "ArgoCD config for the Symfony-Demo-Project",
        "name": "k8s-argocd-symfony-demo",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-symfony-demo",
        "visibility": "PRIVATE"
    },
    {
        "description": "static code analysis tool see: https://www.sonarsource.com/products/sonarqube/deployment/",
        "name": "sonarQube",
        "url": "https://github.com/leibniz-psychology/sonarQube",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "k8s-argocd-demo-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-demo-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "Demoprojekt um das Deployment auf Kubernetes zu üben",
        "name": "k8s-symfony-demo",
        "url": "https://github.com/leibniz-psychology/k8s-symfony-demo",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "annif_star",
        "url": "https://github.com/leibniz-psychology/annif_star",
        "visibility": "PRIVATE"
    },
    {
        "description": "Actions and manifest to deploy Keycloak in our Kubernetes cluster(s)",
        "name": "k8s-keycloak",
        "url": "https://github.com/leibniz-psychology/k8s-keycloak",
        "visibility": "PRIVATE"
    },
    {
        "description": "The new ZPID dashboard",
        "name": "zpid-dashboard",
        "url": "https://github.com/leibniz-psychology/zpid-dashboard",
        "visibility": "PRIVATE"
    },
    {
        "description": "UNIX domain socket forwarding and multiplexing for compute clusters",
        "name": "conductor",
        "url": "https://github.com/leibniz-psychology/conductor",
        "visibility": "PUBLIC"
    },
    {
        "description": "Easy access to web applications running on compute clusters",
        "name": "bawwab",
        "url": "https://github.com/leibniz-psychology/bawwab",
        "visibility": "PUBLIC"
    },
    {
        "description": "Cluster management system",
        "name": "clumsy",
        "url": "https://github.com/leibniz-psychology/clumsy",
        "visibility": "PUBLIC"
    },
    {
        "description": "",
        "name": "zpid-argocd-demo-app",
        "url": "https://github.com/leibniz-psychology/zpid-argocd-demo-app",
        "visibility": "PRIVATE"
    },
    {
        "description": "OpenId plugin for OJS, OMP, OPS 3.x",
        "name": "openid",
        "url": "https://github.com/leibniz-psychology/openid",
        "visibility": "PUBLIC"
    },
    {
        "description": "Demo application to get in contact with the ZPID build and deployment process",
        "name": "mk-argocd-demo-app",
        "url": "https://github.com/leibniz-psychology/mk-argocd-demo-app",
        "visibility": "PRIVATE"
    },
    {
        "description": "ArgoCD link to deploy a demo app",
        "name": "k8s-argocd-mk-argocd-demo-app-config",
        "url": "https://github.com/leibniz-psychology/k8s-argocd-mk-argocd-demo-app-config",
        "visibility": "PRIVATE"
    },
    {
        "description": "PsychOpen Theme for OJS 3",
        "name": "psychopen-theme",
        "url": "https://github.com/leibniz-psychology/psychopen-theme",
        "visibility": "PRIVATE"
    },
    {
        "description": "Submission Assistant für PsychArchives",
        "name": "SubmissionAssistant",
        "url": "https://github.com/leibniz-psychology/SubmissionAssistant",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "it_zpid-k8s-cheat-sheet",
        "url": "https://github.com/leibniz-psychology/it_zpid-k8s-cheat-sheet",
        "visibility": "PRIVATE"
    },
    {
        "description": "Scopus/Crossref Plugin for OJS 3.x : This plugin shows the total number of citations and a \"cited by\" article list from Scopus and/or Crossref.",
        "name": "psychopen-citations",
        "url": "https://github.com/leibniz-psychology/psychopen-citations",
        "visibility": "PUBLIC"
    },
    {
        "description": "",
        "name": "it_devk8s_nginx_demo",
        "url": "https://github.com/leibniz-psychology/it_devk8s_nginx_demo",
        "visibility": "PRIVATE"
    },
    {
        "description": "Wordpress plugin to integrate WordPress with the Moodle LMS. Forked from edwiser-bridge",
        "name": "rdmcompas-moodle-connector",
        "url": "https://github.com/leibniz-psychology/rdmcompas-moodle-connector",
        "visibility": "PUBLIC"
    },
    {
        "description": "Mockup illustrating integration of BASE study research data",
        "name": "rdc-BASE-mockup",
        "url": "https://github.com/leibniz-psychology/rdc-BASE-mockup",
        "visibility": "PRIVATE"
    },
    {
        "description": "Scripts and snippets all about psyndex, star and what not",
        "name": "psyndex-workflows",
        "url": "https://github.com/leibniz-psychology/psyndex-workflows",
        "visibility": "PRIVATE"
    },
    {
        "description": "Holds in-development ontology modules as well as documentation of the process.",
        "name": "ontologie",
        "url": "https://github.com/leibniz-psychology/ontologie",
        "visibility": "PRIVATE"
    },
    {
        "description": "DataWiz workshop website",
        "name": "datawiz-workshop",
        "url": "https://github.com/leibniz-psychology/datawiz-workshop",
        "visibility": "PRIVATE"
    },
    {
        "description": "own containers (php, mysql, node, nginx)",
        "name": "symfony-test",
        "url": "https://github.com/leibniz-psychology/symfony-test",
        "visibility": "PRIVATE"
    },
    {
        "description": "A free preprint service for the psychological sciences",
        "name": "psyarxiv",
        "url": "https://github.com/leibniz-psychology/psyarxiv",
        "visibility": "PRIVATE"
    },
    {
        "description": "the new keycloak version",
        "name": "keycloak-dev19",
        "url": "https://github.com/leibniz-psychology/keycloak-dev19",
        "visibility": "PRIVATE"
    },
    {
        "description": "das produktions keycloak",
        "name": "keycloak-prod",
        "url": "https://github.com/leibniz-psychology/keycloak-prod",
        "visibility": "PRIVATE"
    },
    {
        "description": "Das KEycloak als sandbox",
        "name": "keycloak-sandbox",
        "url": "https://github.com/leibniz-psychology/keycloak-sandbox",
        "visibility": "PRIVATE"
    },
    {
        "description": "Apache Jena Fuseki, Triplestore and SPARQL endpoint (docker, deployment via Kubernetes)",
        "name": "triplestore",
        "url": "https://github.com/leibniz-psychology/triplestore",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "konsortswd-wp-blocks",
        "url": "https://github.com/leibniz-psychology/konsortswd-wp-blocks",
        "visibility": "PRIVATE"
    },
    {
        "description": "Wordpress theme for FDZ/RDC Webseite (PO: KB)",
        "name": "fdz-wordpress-theme",
        "url": "https://github.com/leibniz-psychology/fdz-wordpress-theme",
        "visibility": "PRIVATE"
    },
    {
        "description": "Playbooks and roles for our keycloak instances",
        "name": "ansible-keycloak",
        "url": "https://github.com/leibniz-psychology/ansible-keycloak",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "PaCo",
        "url": "https://github.com/leibniz-psychology/PaCo",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "nextcloud-social-login",
        "url": "https://github.com/leibniz-psychology/nextcloud-social-login",
        "visibility": "PUBLIC"
    },
    {
        "description": "Contains playbooks for BRAC cloud management",
        "name": "ansible-brac-cloud",
        "url": "https://github.com/leibniz-psychology/ansible-brac-cloud",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "PASAPush",
        "url": "https://github.com/leibniz-psychology/PASAPush",
        "visibility": "PRIVATE"
    },
    {
        "description": "Early Mockups of upcoming search portal PsychPorta",
        "name": "psychporta-mockups",
        "url": "https://github.com/leibniz-psychology/psychporta-mockups",
        "visibility": "PRIVATE"
    },
    {
        "description": "An ORCiD identity provider for Keycloak",
        "name": "keycloak-orcid-provider",
        "url": "https://github.com/leibniz-psychology/keycloak-orcid-provider",
        "visibility": "PUBLIC"
    },
    {
        "description": "Open Source Identity and Access Management For Modern Applications and Services",
        "name": "keycloak",
        "url": "https://github.com/leibniz-psychology/keycloak",
        "visibility": "PUBLIC"
    },
    {
        "description": "",
        "name": "psyndex2-data",
        "url": "https://github.com/leibniz-psychology/psyndex2-data",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "zpid-consent-banner",
        "url": "https://github.com/leibniz-psychology/zpid-consent-banner",
        "visibility": "PRIVATE"
    },
    {
        "description": "Docker image for Keycloak project",
        "name": "keycloak-containers",
        "url": "https://github.com/leibniz-psychology/keycloak-containers",
        "visibility": "PUBLIC"
    },
    {
        "description": "PsyCuraDat workshop website",
        "name": "psycuradat-workshop",
        "url": "https://github.com/leibniz-psychology/psycuradat-workshop",
        "visibility": "PRIVATE"
    },
    {
        "description": "my first test application for kubernetes deployment",
        "name": "SymfonyKubernetes",
        "url": "https://github.com/leibniz-psychology/SymfonyKubernetes",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "jspp_jnc_support",
        "url": "https://github.com/leibniz-psychology/jspp_jnc_support",
        "visibility": "PRIVATE"
    },
    {
        "description": "An ansible role to backup an entire docker-compose project.",
        "name": "ansible-role-backup-docker-compose",
        "url": "https://github.com/leibniz-psychology/ansible-role-backup-docker-compose",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "zpid-web-assets",
        "url": "https://github.com/leibniz-psychology/zpid-web-assets",
        "visibility": "PRIVATE"
    },
    {
        "description": "Playing around with kubernetes",
        "name": "devk8s_demo_m",
        "url": "https://github.com/leibniz-psychology/devk8s_demo_m",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "maintenance_site",
        "url": "https://github.com/leibniz-psychology/maintenance_site",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "zpid_nginx_symfony",
        "url": "https://github.com/leibniz-psychology/zpid_nginx_symfony",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "sso-issue-tracker",
        "url": "https://github.com/leibniz-psychology/sso-issue-tracker",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "symfony_docker",
        "url": "https://github.com/leibniz-psychology/symfony_docker",
        "visibility": "PRIVATE"
    },
    {
        "description": "Interactive mockup of upcoming DataWiz 2",
        "name": "datawiz2-mockup",
        "url": "https://github.com/leibniz-psychology/datawiz2-mockup",
        "visibility": "PRIVATE"
    },
    {
        "description": "OJS 3.x plugin for import of article metadata via XML files",
        "name": "psychopen-quickArticleImport",
        "url": "https://github.com/leibniz-psychology/psychopen-quickArticleImport",
        "visibility": "PRIVATE"
    },
    {
        "description": "Repository for testing out GitHub feature",
        "name": "github_feature_test",
        "url": "https://github.com/leibniz-psychology/github_feature_test",
        "visibility": "PRIVATE"
    },
    {
        "description": "OJS 3.x Plugin that show an overview of all accepted but not yet published articles.",
        "name": "psychopen-aam",
        "url": "https://github.com/leibniz-psychology/psychopen-aam",
        "visibility": "PUBLIC"
    },
    {
        "description": "PAM Terms of Service module",
        "name": "pam_tos",
        "url": "https://github.com/leibniz-psychology/pam_tos",
        "visibility": "PUBLIC"
    },
    {
        "description": "Announcements Block Plugin for OJS 3",
        "name": "psychopen-announcementsBlock",
        "url": "https://github.com/leibniz-psychology/psychopen-announcementsBlock",
        "visibility": "PUBLIC"
    },
    {
        "description": "Twitter Block Plugin for OJS, OMP, OPS 3.x",
        "name": "psychopen-twitterBlock",
        "url": "https://github.com/leibniz-psychology/psychopen-twitterBlock",
        "visibility": "PUBLIC"
    },
    {
        "description": "",
        "name": "sso-tests",
        "url": "https://github.com/leibniz-psychology/sso-tests",
        "visibility": "PRIVATE"
    },
    {
        "description": "Scripts to convert Psychopen GOLD JATS to Pubmed Central compliant JATS",
        "name": "psychopen-pmc",
        "url": "https://github.com/leibniz-psychology/psychopen-pmc",
        "visibility": "PRIVATE"
    },
    {
        "description": "Script to convert JATS to Crossref metadata deposit schema",
        "name": "psychopen-crossref",
        "url": "https://github.com/leibniz-psychology/psychopen-crossref",
        "visibility": "PRIVATE"
    },
    {
        "description": "OJS 3.x plugin that displays an overview of all article metadata of a future issue.",
        "name": "psychopen-futureIssue",
        "url": "https://github.com/leibniz-psychology/psychopen-futureIssue",
        "visibility": "PUBLIC"
    },
    {
        "description": "(work in progress) Plugin for OJS 3.x for dynamic extension of metadata forms (submissions, supplementary files, authors) via json.",
        "name": "psychopen-enhancedMetadata",
        "url": "https://github.com/leibniz-psychology/psychopen-enhancedMetadata",
        "visibility": "PUBLIC"
    },
    {
        "description": "Documentation and high-level issue tracking for PsychNotebook",
        "name": "psychnotebook",
        "url": "https://github.com/leibniz-psychology/psychnotebook",
        "visibility": "PRIVATE"
    },
    {
        "description": "HTML/CSS code for a collapsible footer for any leibniz-psychology subsite (original development: maria ricci/mari@)",
        "name": "collapsible-footer",
        "url": "https://github.com/leibniz-psychology/collapsible-footer",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "zpid_ci",
        "url": "https://github.com/leibniz-psychology/zpid_ci",
        "visibility": "PRIVATE"
    },
    {
        "description": "The HTML Presentation Framework",
        "name": "reveal.js",
        "url": "https://github.com/leibniz-psychology/reveal.js",
        "visibility": "PUBLIC"
    },
    {
        "description": "Interactive eleventy prototype to demonstrate to the external agency how a few important elements are supposed to work.",
        "name": "psychologie.de-prototype",
        "url": "https://github.com/leibniz-psychology/psychologie.de-prototype",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "zpid-openstack-kolla",
        "url": "https://github.com/leibniz-psychology/zpid-openstack-kolla",
        "visibility": "PRIVATE"
    },
    {
        "description": "HTML5 boilerplate with ZPID theming",
        "name": "microsite-boilerplate",
        "url": "https://github.com/leibniz-psychology/microsite-boilerplate",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "coding-conventions",
        "url": "https://github.com/leibniz-psychology/coding-conventions",
        "visibility": "PRIVATE"
    },
    {
        "description": "Leibniz Psychology Styleguide Site (based on Catalog) https://leibniz-psychology.github.io/styleguide-catalog",
        "name": "styleguide-catalog",
        "url": "https://github.com/leibniz-psychology/styleguide-catalog",
        "visibility": "PRIVATE"
    },
    {
        "description": "Favicon-Paket, verwendbar für alle ZPID-Microsites",
        "name": "zpid-favicon",
        "url": "https://github.com/leibniz-psychology/zpid-favicon",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "zpid-osa",
        "url": "https://github.com/leibniz-psychology/zpid-osa",
        "visibility": "PRIVATE"
    },
    {
        "description": "",
        "name": "KeycloakTestApp",
        "url": "https://github.com/leibniz-psychology/KeycloakTestApp",
        "visibility": "PRIVATE"
    },
    {
        "description": "Sample reveal.js presentation",
        "name": "compute.zpid.de-intro",
        "url": "https://github.com/leibniz-psychology/compute.zpid.de-intro",
        "visibility": "PRIVATE"
    },
    {
        "description": "(Temporary) A collection of notebooks we distribute generated from docs/examples",
        "name": "pymvpa2_tutorial",
        "url": "https://github.com/leibniz-psychology/pymvpa2_tutorial",
        "visibility": "PUBLIC"
    }
];
