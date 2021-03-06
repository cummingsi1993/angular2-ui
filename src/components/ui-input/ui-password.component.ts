import { Component, Input, Output, EventEmitter, Provider, forwardRef, OpaqueToken, Type } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
	provide: <OpaqueToken>NG_VALUE_ACCESSOR, 
		useExisting: <Type<any>>forwardRef(() => UIPasswordComponent),
		multi: true
	};

@Component({
	selector: 'ui-password',
	template: `
		<div class="form-group">
			<label *ngIf="label != null">{{label}}</label>
			<input [(ngModel)]="model" class="form-control" type="password" placeholder="{{placeholder}}" name="{{label}}" />
		</div>
	`,
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class UIPasswordComponent implements ControlValueAccessor {
	private _model: string;
	private _onChangeCallback: (value: any) => void = noop;
	private _onTouchedCallback: () => void = noop;

	constructor() {
		
	}

	ngOnInit() { 
		if (this.label == null) { 
			this.label = 'Password'
		}
	}

	@Input() label: string;
	@Input() placeholder: string;

	//@Output('model') modelEmitter: EventEmitter<string>;

	set model(value: string) {
		this._model = value;
		this._onChangeCallback(this._model);
	}

	get model() {
		return this._model;
	}



	//From ControlValueAccessor interface
    writeValue(value: any) {
		this._model = value;
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
		this._onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
		this._onTouchedCallback = fn;
    }

}