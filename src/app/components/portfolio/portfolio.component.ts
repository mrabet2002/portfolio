import {Component, OnInit} from '@angular/core';
import {Project} from "@models/project.model";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  projects!: Project[];

  ngOnInit() {
    this.projects = [
      {
        title: 'Gestion de stock',
        description: 'During my first internship with <strong>"GEBS"</strong>, I developed a comprehensive web-based stock management application. The application provides functionalities for managing products, suppliers, and clients, including creation, modification, consultation, and deletion. It supports real-time stock updates, tracks purchases and sales, and generates invoices. The application also includes a dashboard for viewing statistics and reports, aiding in efficient stock control and management.',
        image: 'assets/images/gestion-stock.png',
        tools: ['Laravel', 'Tailwind CSS', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'AJAX'],
        link: 'https://www.google.com',
        github: 'https://github.com/mrabet2002/gestionStock'
      },
      {
        title: 'Mainoeuvre',
        description: 'A dynamic marketplace designed to connect skilled craftsmen, such as plumbers, builders, and carpenters, with clients seeking their services. Craftsmen could showcase their expertise and availability on the platform, allowing clients, including chefs and work managers, to easily make requests for their services. The platform facilitated seamless communication and transactions between craftsmen and clients, streamlining the process of finding and hiring skilled labor for various projects.',
        image: 'https://via.placeholder.com/150',
        tools: ['Laravel', 'Bootstrap', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'AJAX', 'JQuery'],
        link: 'https://www.google.com'
      },
      {
        title: 'Ticket Reservation System for Chellah',
        description: 'During my latest internship with <strong>"Le Premier Système"</strong>, I worked on developing a comprehensive ticket reservation system for Chellah. The project included creating a point of sale application for quick and accurate ticket sales, an access control application to manage entry based on ticket validity, an application for control agents to verify and manage tickets, a back-office management application for overseeing ticketing operations, and a web application for online ticket purchases. My primary responsibilities included developing the backend to centralize data management and ensure system security, as well as creating the frontend applications for both the back-office and point of sale, enabling efficient transaction handling and administrative management.',
        image: 'assets/images/chellah-caisse.png',
        tools: ['Spring Boot', 'Angular', 'Angular Material', 'MySQL'],
        link: 'https://www.google.com'
      }
    ];
  }

}
