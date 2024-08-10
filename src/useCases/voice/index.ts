import { Twilio } from "twilio";
import { VoiceService } from "./voiceService";
import { VoiceController } from "./voiceController";


export const voiceService = new VoiceService({
	twilio: new Twilio()
});

export const voiceController = new VoiceController({
	voiceService
});
