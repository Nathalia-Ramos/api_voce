
import { Request, Response, Router } from "express";
import { voiceController } from "../useCases/voice";


const voiceRoute = Router();

voiceRoute.post("/v1/calls",async (request: Request, response: Response) => {
	const result = await voiceController.createCall();

	return response.status(200).json({
		result
	});

});


export { voiceRoute };
