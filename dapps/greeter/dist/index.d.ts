import { greeterdemoService } from './services/service';
import { greeterdemoDispatcher } from './dispatcher/dispatcher';
export { greeterdemoService, greeterdemoDispatcher };
export declare class DispatcherModule {
    constructor();
}
export declare function startDApp(container: any, dbcpName: any): Promise<void>;
