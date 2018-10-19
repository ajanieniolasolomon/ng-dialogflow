export interface Message {
    platform: string;
    textToSpeech: string;
    type: string;
}
export interface Fulfillment {
    messages: Message[];
    speech: string;
}
export interface Metadata {
    intentId: string;
    intentName: string;
    webhookForSlotFillingUsed: string;
    webhookUsed: string;
}
export interface Parameter {
    fruit: string[];
}
export interface Result {
    action: string;
    actionIncomplete: boolean;
    contexts: string[];
    fulfillment: Fulfillment;
    metadata: Metadata;
    parameters: Parameter;
    resolvedQuery: string;
    score: number;
    source: string;
}
export interface Statu {
    code: number;
    errorType: string;
}
export interface RootObject {
    id: string;
    lang: string;
    result: Result;
    sessionId: string;
    status: Statu;
    timestamp: string;
}
