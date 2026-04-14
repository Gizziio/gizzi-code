declare var src_default: typeof CoworkController;
export function createCoworkController(options: any): CoworkController;
export class CoworkController extends EventEmitter<[never]> {
    constructor(options?: {});
    httpServer: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
    wsServer: any;
    sessions: Map<any, any>;
    options: {
        port: number;
        host: string;
        path: string;
        maxSessions: number;
        maxHistory: number;
        enableAuth: boolean;
    };
    started: boolean;
    start(): Promise<any>;
    stop(): Promise<any>;
    createSession(runId: any): Promise<{
        id: any;
        runId: any;
        createdAt: Date;
        clients: Map<any, any>;
        eventHistory: never[];
        maxHistory: number;
        accessToken: any;
    }>;
    getSession(sessionId: any): any;
    getSessionByRunId(runId: any): any;
    deleteSession(sessionId: any): Promise<void>;
    broadcast(sessionId: any, event: any): void;
    getSessionInfo(sessionId: any): {
        id: any;
        runId: any;
        createdAt: any;
        clientCount: any;
        historyLength: any;
        wsUrl: string;
    } | undefined;
    listSessions(): {
        id: any;
        runId: any;
        createdAt: any;
        clientCount: any;
    }[];
    setupWebSocketHandlers(): void;
    handleNewConnection(ws: any, sessionId: any, token: any): void;
    handleHttpRequest(req: any, res: any): void;
    handleApiRequest(req: any, res: any, url: any): void;
    handleCreateSession(req: any, res: any): Promise<void>;
}
import { EventEmitter } from "events";
export { src_default as default };
//# sourceMappingURL=index.d.ts.map