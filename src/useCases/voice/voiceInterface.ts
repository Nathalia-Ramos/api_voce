import { Twilio } from "twilio"; 
import { CallInstance } from "twilio/lib/rest/api/v2010/account/call";

export interface IVoiceService {
    createCall(): Promise<CallInstance>;
}

export interface IVoiceServiceProps {
    twilio: Twilio;
	
}
export interface IVoiceControllerProps {
    voiceService: IVoiceService;

}

export interface IVoiceController {
    createCall(): Promise<CallInstance>

}
