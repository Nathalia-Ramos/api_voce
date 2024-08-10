import { IVoiceServiceProps, IVoiceService } from "./voiceInterface";
import { accountSid, phone, token} from "../../config/defaultVariables";

export class VoiceService implements IVoiceService {
	protected readonly props: IVoiceServiceProps;

	constructor(props: IVoiceServiceProps) {
		this.props = props;
	}

    async createCall(){        
        const client = this.props.twilio;
        
        const call = await client.calls.create({
            from: "19383881785",
            to: phone,
            url: "http://demo.twilio.com/docs/voice.xml",
            applicationSid: accountSid,
            callToken: token
        });

        return call

    }

}
    