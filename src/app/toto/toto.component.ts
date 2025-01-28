import {Component, OnInit} from '@angular/core';
import {
    AsyncPipe,
    CurrencyPipe, JsonPipe,
    LowerCasePipe,
    NgClass,
    NgForOf,
    NgIf,
    PercentPipe,
    UpperCasePipe
} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ExponentialStrenghtPipe} from "../pipes/exponential-strenght.pipe";
import {ServiceCoursService} from "../service/service-cours.service";
import {Observable} from "rxjs";


@Component({
    selector: 'app-toto',
    standalone: true,
    templateUrl: './toto.component.html',
    imports: [
        NgClass,
        RouterLink,
        RouterLinkActive,
        UpperCasePipe,
        LowerCasePipe,
        CurrencyPipe,
        PercentPipe,
        ExponentialStrenghtPipe,
        NgForOf,
        AsyncPipe,
        NgIf,
        JsonPipe
    ],
    styleUrl: './toto.component.scss'
})
export class TotoComponent implements OnInit{

    public valeurService:string = '';
    public valeurMock: any[] = [];

    // @Output() colorChange = new EventEmitter();

    constructor(private service: ServiceCoursService) {
    }

    ngOnInit() {
        this.valeurService = this.service.variableDuService;
    }

    getUsers() {
        this.service.getUsers().subscribe( (data) => {
            this.valeurMock = data;
            console.log(this.valeurMock);
        })
    }

    // public changeColor() {
    //     this.colorChange.emit('blue');
    // }
    //
    // public changeColorRed() {
    //     this.colorChange.emit('red');
    // }
}
