import { Component, OnInit, Input, OnDestroy, ViewChild, NgZone } from '@angular/core';
import { IonSlides } from '@ionic/angular'
@Component({
	selector: 'app-tabla-cosas',
	templateUrl: './tabla-cosas.component.html',
	styleUrls: ['./tabla-cosas.component.scss'],
})
export class TablaCosasComponent implements OnInit {
	@Input() set fotos(value: Array<any>) {
		this._fotos = [];
		this._fotos = value;
	};
	public _fotos: Array<any> = [];
	@Input() usuario: string;
	constructor() { }

	ngOnInit() {

	}

}
