import { IVoiceController, IVoiceControllerProps} from "./voiceInterface";

export class VoiceController implements IVoiceController {
	private readonly props: IVoiceControllerProps;

	constructor (props: IVoiceControllerProps) {
		this.props = props;
	}
    createCall(){
        return this.props.voiceService.createCall();
    }
	
	
}
