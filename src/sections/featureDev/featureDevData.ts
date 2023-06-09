import { faHouseLaptop, faUsers, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons';

export let data = {
    featureHeading: "Webentwicklung & Marketing",
    featureDescription: "Von ansprechenden Webseiten bis hin zu effektivem Social-Media-Marketing",
    featureText: "ich biete umfassende Lösungen, um ihre Online-Präsenz zu stärken und Ihre Kunden zu begeistern!"
}

export let featureData: {id: number, name: string, description: string, icon: any}[] = [
    { 
        "id": 0, 
        "name":"Statische Webseiten", 
        "description":"Landingpages, kurze Portfolios oder eine Internetbroschüre? Überall wo der Inhalt nicht verändert werden muss... ",
        "icon": faHtml5
    },
    {
        "id": 1, 
        "name":"Dynamische Webseiten", 
        "description":"Sie haben viel Content oder Daten, die sich minutengenau verändern sollen? Hier helfe ich Ihnen gerne weiter!", 
        "icon": faReact
    },
    {
        "id": 2, 
        "name":"Social-Media-Marketing", 
        "description":"Ich betreue seit mehr als 4 Jahren organische Social-Media-Auftritte. Wenn hier Unterstützung benötigt wird, bin ich ihre Anlaufstelle!", 
        "icon": faUsers
    },
    {
        "id": 3, 
        "name":"Contenterstellung", 
        "description":"Sie haben bereits eine laufende Webseite, ein Magazin oder Ähnliches und benötigen Unterstützung? Melden Sie sich gerne!", 
        "icon": faPenToSquare 
    },
    {
        "id": 4, 
        "name":"test3", 
        "description":"test3", 
        "icon": faHouseLaptop 
    }
];
