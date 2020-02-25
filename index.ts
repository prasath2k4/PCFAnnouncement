import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class PCFMarquee implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _context: ComponentFramework.Context<IInputs>;
    private _notifyOutputChanged: () => void;
	private _container: HTMLDivElement;
	
	private _tickerwrap : HTMLDivElement;
	private _ticker : HTMLDivElement;
	private _tickeritem : HTMLDivElement;

	private _marqueeText: String;



	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		// Add control initialization code
		this._context = context;
        this._notifyOutputChanged = notifyOutputChanged;
		this._container = container;

		this._marqueeText = context.parameters.MarqueeText1.raw ? context.parameters.MarqueeText1.raw : "";

		this._tickeritem = document.createElement("div");
		this._tickeritem.className = "ticker__item";
		this._tickeritem.textContent = this._marqueeText.toString();

		this._ticker = document.createElement("div");
		this._ticker.className = "ticker";

		this._tickerwrap = document.createElement("div");
		this._tickerwrap.className = "ticker-wrap";

		this._ticker.appendChild(this._tickeritem);
		this._tickerwrap.appendChild(this._ticker);

		this._container.appendChild(this._tickerwrap);

	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}